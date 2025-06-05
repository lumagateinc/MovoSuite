### Scheduled Actions

MovoSuite uses the following scheduled actions powered by Azure Functions v4 with .NET 8.

#### Core Queue Processing
| Cycle                      | Interval                            | Description                         |
|----------------------------|-------------------------------------|-------------------------------------|
| Check Deployment Queue     | Once a minute                       | Checks and evaluates requests in the deployment queue using durable orchestration.|
| Check Purchase Queue       | Once a minute                       | Checks and evaluates requests in the purchase queue with approval workflows.  |

#### Application Management
| Cycle                      | Interval                            | Description                         |
|----------------------------|-------------------------------------|-------------------------------------|
| App List Update            | On the hour                         | Checks for new VPP tokens and apps in Intune and synchronizes to MovoSuite. Creates new install/remove groups for newly discovered apps.  |
| App Metadata Update        | Every 6 hours, on the hour          | Updates MovoSuite apps with details from Apple's API, including artwork and price.|
| App Credential Health      | Daily                               | Monitors application credential expiration and sends alerts via Teams/email. |
| License Check              | Daily                               | Validates VPP license availability and compliance across all apps. |

#### Device Management
| Cycle                      | Interval                            | Description                         |
|----------------------------|-------------------------------------|-------------------------------------|
| Device List Update         | Every 30 minutes                    | Updates MovoSuite's list of managed devices via Microsoft Graph API. |
| Device Enrollment Update   | Every two hours, at 10 minutes past | Updates MovoSuite's devices with DEP and AutoPilot enrollment details from Intune. |
| Device Unenrollment Update | Every 12 hours                      | Looks for devices that are no longer managed and marks as not enrolled.  |
| Device Rename              | On the hour                         | Evaluates MovoSuite's list of devices and issues a rename command via Intune if the device does not map to the defined format.  |
| Device Extension Attributes| Every 4 hours                       | Synchronizes device metadata and custom extension attributes. |
| Device Cleanup             | Daily at 2 AM                       | Automated cleanup of stale and duplicate device records. |
| Duplicate Device Detection | Every 6 hours                       | Identifies and reports duplicate device registrations for manual review. |

#### Location & Group Management
| Cycle                      | Interval                            | Description                         |
|----------------------------|-------------------------------------|-------------------------------------|
| Location List Update       | Every hour, at 15 minutes past      | Evaluates MovoSuite's list of locations and their associated device groups, scope tags, and roles, provisioning groups, tags, and roles as necessary. If device location groups are in use, adds assigned devices to the respective location groups. |
| Group Tag Update           | Every hour, at 45 minutes past      | Updates AutoPilot group tag values for devices based on their assigned location. |

#### Integration & Monitoring
| Cycle                      | Interval                            | Description                         |
|----------------------------|-------------------------------------|-------------------------------------|
| Asset Data Sync            | Every 4 hours                       | Synchronizes data from external asset management systems (EBase/TOPdesk). |
| Apple Integration Check    | Every 6 hours                       | Validates Apple DEP/VPP token status and certificate expiration. |
| Microsoft Service Health   | Every hour                          | Monitors Microsoft 365 service health and sends alerts for issues. |
| Automatic Updates          | Daily at 3 AM                       | Checks for and applies MovoSuite platform updates. |
| Warmup                     | Every 15 minutes                    | Keeps Azure Functions warm to ensure optimal performance. |

#### Alert Types
MovoSuite monitors and alerts on the following conditions:
- **APNS Certificate Expiry** - 30, 14, and 7 days before expiration
- **DEP Token Expiry** - 30, 14, and 7 days before expiration
- **VPP Token Expiry** - 30, 14, and 7 days before expiration
- **App Key Credential Expiry** - 30 and 14 days before expiration
- **Password Credential Expiry** - 30 and 14 days before expiration
- **Service Health Issues** - Real-time Microsoft 365 service disruptions

All scheduled functions include comprehensive error handling, retry logic, and Application Insights telemetry for monitoring and troubleshooting.
