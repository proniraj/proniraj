---
title: "Database Scaling: The Strategies That Actually Work"
description: "What I learned scaling databases to handle 10M+ queries per day. The strategies that actually work vs. the ones that don't. Spoiler: horizontal sharding isn't always the answer."
publishedAt: "2024-01-12"
readTime: "8 minutes"
tags:
  - database
  - scaling
  - performance
  - architecture
status: "HOT"
rfcId: "RFC-001"
version: "1.2.0"
---
## 1. Abstract

This document outlines the database scaling strategies implemented to handle 10M+ daily queries with 99.9% uptime. We'll explore vertical scaling, read replicas, connection pooling, and when horizontal sharding actually makes sense (spoiler: it's not always the answer).

## 2. Introduction

When I joined the team, our PostgreSQL database was struggling under 2M daily queries. Within 6 months, we scaled it to handle 10M+ queries while maintaining sub-100ms response times. Here's what actually worked and what didn't.

#### ⚠️ Common Mistake

Most teams jump straight to horizontal sharding. Don't. There are usually 3-4 easier wins first.

## 3. Problem Statement

### 3.1 Initial State

*   PostgreSQL on a single 16GB RAM instance
*   2M daily queries with 500ms average response time
*   Frequent connection timeouts during peak hours
*   No caching layer
*   Inefficient queries causing table locks

### 3.2 Target State

*   10M+ daily queries with <100ms response time
*   99.9% uptime
*   Horizontal scalability for future growth
*   Cost-effective solution

## 4. Solution Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Application   │    │   Load Balancer │    │   Redis Cache   │
│     Layer       │◄──►│                 │◄──►│                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Read Replicas  │    │   Master DB     │    │  Connection     │
│   (3 instances) │◄──►│  (Primary)      │◄──►│    Pooler       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 4.1 Architecture Components

#### Master Database

*   • All write operations
*   • Critical reads
*   • 32GB RAM, SSD storage

#### Read Replicas

*   • 3 instances for read scaling
*   • Async replication
*   • Load balanced reads

#### Redis Cache

*   • Frequently accessed data
*   • Session storage
*   • 5-minute TTL

#### Connection Pooler

*   • PgBouncer implementation
*   • 200 max connections
*   • Transaction pooling

## 5. Implementation Details

### 5.1 Phase 1: Vertical Scaling

#### ✅ Immediate Impact

Upgraded from 16GB to 32GB RAM, SSD storage. Response time improved by 60% in 2 days.

### 5.2 Phase 2: Read Replicas

```
# PostgreSQL configuration for read replicas
wal_level = replica
max_wal_senders = 3
hot_standby = on

# Connection string for read operations
DATABASE_READ_URL = "postgresql://user:pass@replica1:5432,replica2:5432,replica3:5432/db?target_session_attrs=read-only"
```

### 5.3 Phase 3: Caching Layer

```
# Redis caching strategy
def get_user_data(user_id):
    cache_key = f"user:{user_id}"
    cached_data = redis.get(cache_key)
    
    if cached_data:
        return json.loads(cached_data)
    
    # Database query
    user_data = db.query("SELECT * FROM users WHERE id = %s", user_id)
    
    # Cache for 5 minutes
    redis.setex(cache_key, 300, json.dumps(user_data))
    
    return user_data
```

## 6. Performance Metrics

#### Before Optimization

*   • 2M daily queries
*   • 500ms avg response time
*   • 95% uptime
*   • Frequent timeouts

#### After Optimization

*   • 10M+ daily queries
*   • 85ms avg response time
*   • 99.9% uptime
*   • Zero timeouts

## 7. Lessons Learned

#### 💡 Key Insight #1

Vertical scaling gave us 5x performance improvement for 20% of the cost of horizontal sharding.

#### 💡 Key Insight #2

Read replicas are only useful if you have read-heavy workloads. We had 80% reads, so it made sense.

#### ⚠️ Common Pitfall

Don't cache everything. We started with 1-hour TTL and had stale data issues. 5 minutes is the sweet spot.

## 8. Conclusion

Database scaling isn't just about throwing more hardware at the problem. It's about understanding your workload, optimizing queries, and choosing the right strategy for your specific use case.

#### 🎯 Bottom Line

We achieved 5x query capacity with 6x better response times by focusing on the fundamentals first: better hardware, read replicas, caching, and connection pooling. Horizontal sharding can wait.
