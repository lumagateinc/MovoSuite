---
title: Integrations
description: Asset integration, naming authority, and bulk administration
icon: plug
---

# Integration (Bulk Admin)

The Integration Settings area of the MovoSuite interface includes comprehensive backend integration capabilities.

## Core Integration Features

- **Asset Integration**. This feature enables ingestion of additional information (such as asset tag numbers for matching serial numbers) for shared iPad devices directly from service desk or Excel data sources. Supports both EBase Client and TOPdesk integrations.
- **Naming Authority**. This feature enables automated naming of shared iPads in Intune using the device naming format you specify under **Naming Conventions**. Includes PowerShell script integration for computer renaming.
- **Naming Conventions**. This feature enables customization of the naming of shared iPads in Intune, including location short codes or asset tag numbers. The naming conventions are defined on a per DEP profile or per AutoPilot profile basis, with support for variables for the short code for the device **location**, **asset tag** (if the device asset tag fields are populated), or **serial number**. If naming conventions are defined with a location variable, MovoSuite will attempt to extract the location code from device name for devices that aren't already assigned to a location.

## Backend Integration Services

### Microsoft Integrations
- **Microsoft Graph API** - Full Azure AD and Intune integration for device, user, and app management
- **Microsoft Teams** - Bot Framework integration for interactive approvals and notifications
- **Microsoft 365 Connectors** - Legacy connector card support for older Teams installations
- **Application Insights** - Comprehensive telemetry and monitoring

### Apple Integrations
- **Apple Store API Client** - Direct integration for app metadata, pricing, and availability
- **Apple VPP** - Volume Purchase Program token management and license tracking
- **Apple DEP** - Device Enrollment Program integration for automated device provisioning
- **APNS** - Apple Push Notification Service certificate management

### Third-Party Integrations
- **TOPdesk API** - Full service desk integration for ticket creation and asset management
- **EBase Client** - Enterprise asset management system synchronization
- **Lumagate Activation** - License activation and management services
- **Intune App Builder** - Automated app packaging and publishing to Intune

## Notification Channels
- **Adaptive Cards** - Rich interactive notifications in Teams and Outlook
- **HTML Email** - Branded email notifications with custom CSS styling
- **Webhook Support** - External system integration via HTTP webhooks
- **Actionable Messages** - Office 365 actionable message cards for inline approvals

![Asset Integration and Data Ingestion](/MovoSuite/cfg_int_all.png)
**FIGURE 19**. Asset Integration and Data Ingestion

## Excel Import

MovoSuite supports the following column values for Excel import and device naming.

| Column Name | Purpose |
|-------------|---------|
| Device Name | The desired display name for the device. |
| Grades | **Optional.** A backslash delimited list of grades this device is assigned to, e.g. 'K\1\2'. |
| Room | **Optional.** The room this device is assigned to. |
| Location Code | **Optional.** The short code of the location this device is assigned to. |
| Device Groups | **Optional.** A backslash delimited list of device groups this device belongs to, e.g. 'Cart 1\Loaner Pool'. Requires the device is also assigned to a location as the device groups are bound to the location. |
| Staff | **Optional, currently unused.** A *1* or a *0* indicating whether this device is a staff device (*1* = yes). |
| Student | **Optional, currently unused.** A *1* or a *0* indicating whether this device is a student device (*1* = yes). |
| Asset Tag | **Optional.** The asset tag for this device. |
| Custom Group Value | **Optional.** A custom grouping value. |
| AutoPilot Group Tag | **Optional.** A value to assign as the AutoPilot Group Tag for this device. |

For the Excel Import, MovoSuite has two additional flags:

- **Auto-create Missing Locations**. Enable this to automatically create locations if their short codes are missing from MovoSuite.
- **Auto-create Missing Groups**. Enable this to automatically create device groups if a device is assigned to a group that's not yet created for the location.
