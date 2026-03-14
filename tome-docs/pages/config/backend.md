---
title: Backend Architecture
description: Technical architecture and capabilities overview
icon: server
---

# Backend Architecture

MovoSuite Backend (v8.2.16) is built on Azure Functions v4 with .NET 8, providing enterprise-grade automation and orchestration capabilities.

## Architecture Overview

### Core Technologies
- **Runtime**: Azure Functions v4 (Isolated Process)
- **Framework**: .NET 8.0
- **Orchestration**: Durable Functions for long-running workflows
- **Messaging**: Azure Service Bus for reliable message delivery
- **Storage**: Azure Storage for state management
- **Monitoring**: Application Insights for telemetry and diagnostics

## Function Types

### HTTP Triggered Functions
- Manual operations initiated via REST API
- Bot message processing for Teams integration
- Card action handlers for approval workflows
- On-demand data synchronization triggers

### Timer Triggered Functions
- Scheduled automation (see [Scheduled Actions](#config/schedules))
- Health checks and monitoring
- Data synchronization and updates
- Queue processing

### Orchestration Functions
- Complex multi-step workflows
- Deployment request processing
- Purchase request orchestration
- Device lifecycle management

## Key Processors

### AppListProcessor
- Synchronizes apps from Intune and VPP
- Creates install/remove groups
- Manages app metadata updates

### DeviceListProcessor
- Updates managed device information
- Synchronizes enrollment status
- Manages device metadata

### DeployRequestProcessor
- Handles app deployment requests
- Manages approval workflows
- Executes deployment operations

### MonitoringProcessor
- Performs health checks
- Sends expiration alerts
- Monitors service health

### BackupProcessor
- Device configuration backup
- Restore operations
- State management

## Security Features

- **Authentication**: Azure AD with Bot Framework authentication
- **Authorization**: Role-based access control (RBAC)
- **Encryption**: Data encrypted at rest and in transit
- **Compliance**: SOC 2 and ISO 27001 compliant infrastructure

## Error Handling

- **Retry Logic**: Exponential backoff for transient failures
- **Dead Letter Queues**: Failed message handling
- **Circuit Breakers**: Prevent cascading failures
- **Comprehensive Logging**: Structured logging to Application Insights

## Performance Optimization

- **Warm-up Functions**: Keep functions responsive
- **Parallel Processing**: Concurrent execution where applicable
- **Caching**: In-memory caching for frequently accessed data
- **Connection Pooling**: Efficient resource utilization
