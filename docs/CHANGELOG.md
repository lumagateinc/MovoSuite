# MovoSuite Changelog

## Apr. 13, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Add missing 400 responses and remove duplicate continuation… |
| Bugfix | Update movosuite-common to fix nullable DTO required fi… |
| Feature | Add Microsoft Education Graph support feature |
| Feature | Sync Notes column from Excel to device Management… |

## Apr. 2, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Comprehensive config tab audit — localization, ARIA, and d… |
| Bugfix | Extract inline styles to scoped CSS and add @key to Onboardi… |
| Bugfix | Add ShouldRender optimization to remaining 9 config tabs |
| Bugfix | Prevent onboarding wizard buttons from being clipped |

## Mar. 31, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Use /authorize with incremental consent for automation scopes |

## Mar. 31, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Update warmup test to expect config entity creation |

## Mar. 31, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Split test build from test run to prevent compilation timeout |

## Mar. 31, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Prevent duplicate tag error in API client publish workflow |
| Bugfix | Create configuration entity when none exists |

## Mar. 31, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Initialize PartitionKey for new config entities before save |

## Mar. 30, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Address PR #292 review feedback |

## Mar. 30, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Remove unused IsUserAdmin call and add admin auth tests |

## Mar. 30, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Enhancement | Deduplicate Lumagate tenant ID constant and use GetTe… |

## Mar. 30, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Preserve app install/remove group IDs when Graph lookup … |

## Mar. 30, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Grant Lumagate employees admin access in IsUserAdmin |

## Mar. 30, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Prevent AdminGroupId from being cleared when Graph looku… |

## Mar. 30, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Enhancement | Seal 503 classes to enable JIT devirtualization |
| Bugfix | Update Kiota integration test from Skip to Skiptoken |
| Bugfix | Prevent premature completion and fix denial display |
| Bugfix | Fetch app details when app status exists but entity is… |
| Bugfix | Rebuild full approval card on Refresh instead of minim… |
| Bugfix | Fix localizer key mismatches in purchase approval card… |
| Bugfix | Fix card refresh corrupting approval status and locali… |
| Bugfix | Fix card refresh losing app details and use determinis… |
| Bugfix | Enrich refresh card with app details and requestor name |
| Bugfix | Add diagnostic logging for card refresh investigation |

## Mar. 30, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Ensure app status entity is created for URL-only requests |
| Bugfix | Pass all requested apps to detail view instead of filt… |
| Bugfix | Update submodule with deterministic RequestedAppEntity… |

## Mar. 28, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Bind $skiptoken query parameter in deployment and purchase … |
| Bugfix | Add backward compat for legacy continuationToken query param |

## Mar. 28, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Add missing OpenAPI request body and BadRequest response at… |
| Bugfix | Prevent duplicate approval notifications for unappro… |

## Mar. 28, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Address all 16 frontend audit findings |
| Bugfix | Show requested app names and fix RejectButton text |
| Bugfix | Resolve 21 audit findings across accessibility, theming, a… |
| Bugfix | Resolve 21 audit findings across accessibility, theming, a… |
| Bugfix | Comprehensive audit fixes across accessibility, theming, r… |
| Bugfix | Resolve 14 audit findings in SelectDevicesDialog |
| Bugfix | Redesign app and device modal rows for better hierarchy, spa… |
| Bugfix | Misc pending changes from prior sessions |
| Bugfix | Remove listbox borders, consistent row heights, fix user pro… |
| Bugfix | Remove h1 focus outline, fix user profile layout, rebalance … |
| Bugfix | Rebalance home grid to 3.5/3.5/5 proportions |
| Bugfix | Equal-height dialog cards, consistent request list spacing, … |
| Bugfix | Ensure app status entity is created for URL-only requests |
| Bugfix | Comprehensive config tab audit — localization, ARIA, and d… |
| Bugfix | Dark mode status text contrast, load more pagination, purc… |
| Bugfix | Add 10 missing localization keys, fix detail panel spacing a… |
| Bugfix | Widen config request detail panel from 6/6 to 5/7 split |
| Bugfix | Remove dark background from admin team info box in dark mode |
| Bugfix | Comprehensive config tab audit — localization, ARIA, and d… |

## Mar. 28, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Null-guard requestor facts in adaptive card builder |

## Mar. 27, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Fall back to AdminNotificationsEmail when no procureme… |
| Bugfix | Fix missing approval buttons and missing helpdesk noti… |

## Mar. 26, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Feature | Add skills, subagents, hooks, and Azure MCP server |
| Bugfix | Bump trivy-action to 0.35.0 to resolve supply chain vulnerab… |
| Bugfix | Harden OData filters, fix HttpClient leak, update subm… |

## Mar. 25, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Clean submodule stale files causing NETSDK1022 duplicate com… |

## Mar. 25, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Feature | Add SharePointHostname config override |
| Bugfix | Try /teams/ path for Teams-connected SharePoint sites |

## Mar. 25, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Feature | Add rate limiting, health readiness, input validation… |
| Bugfix | Add clean checkout to prevent case-sensitive duplicate file … |
| Bugfix | Update submodule with SharePoint hostname derivation fix |
| Enhancement | Migrate from legacy static Logger to ILogger |

## Mar. 24, 2026

### Engine

| Type | Description |
|---------------|-------------------|
| Bugfix | Fix submodule detached HEAD in publish-api-client and add PR… |

## Mar. 24, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Use UriBuilder for safe query param construction and add… |
| Enhancement | Consolidate device serial state into DeviceSerialPr… |

## Mar. 24, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Restore device serial parameter for anonymous webview AP… |

## Mar. 20, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Bugfix | Update both changelog files in docs repo |

## Mar. 20, 2026

### Web UI

| Type | Description |
|---------------|-------------------|
| Feature | Migrated the entire frontend to a modern typed API client (Kiota), improving reliability and reducing errors across all pages. |
| Feature | Added server-side pagination for devices, apps, and deployment requests, dramatically improving load times for large tenants. |
| Feature | Added bulk assignment endpoints to eliminate per-device/app API fan-out, resolving browser crashes for tenants with 19,000+ devices. |
| Feature | Added location import wizard supporting both CSV and Excel file uploads with preview and validation. |
| Feature | Added a Repair Team button to re-detect Teams IDs and reinstall the bot when notifications stop working. |
| Feature | Exposed additional configuration properties in the web UI for finer tenant control. |
| Enhancement | Added in-memory caching for configuration lookups, reducing repeated storage calls. |
| Enhancement | Added OData filter injection protection and query input validation across all endpoints. |
| Enhancement | Improved hidden app filtering so administrators only see relevant apps in self-service forms. |
| Enhancement | Added support for batch delete of device groups. |
| Bugfix | Fixed devices search not triggering a data reload after clearing the search field. |
| Bugfix | Fixed apps grid showing empty state incorrectly and duplicate request submissions. |
| Bugfix | Fixed configuration save returning 403 and deployment approval returning 400 in certain scenarios. |
| Bugfix | Fixed cross-tenant configuration lookup for Lumagate employees accessing customer tenants. |
| Bugfix | Fixed license count warnings appearing when licenses were actually sufficient. |

### Engine

| Type | Description |
|---------------|-------------------|
| Feature | Added macOS location-based platform group auto-creation, bringing Mac devices to parity with iOS automation. |
| Feature | Added primary Windows user account removal automation for devices in a specified Entra ID group. |
| Feature | Added French app metadata population from the Apple App Store API. |
| Feature | Added scope tag recording in table storage with automatic location references. |
| Feature | Added $expand support for navigation properties (device groups, app tags, locations) on bulk assignment endpoints. |
| Feature | Added delegated approval support, allowing approval authority to be delegated to secondary approvers. |
| Enhancement | Upgraded to .NET 10 multi-targeting (alongside .NET 8) for improved performance. |
| Enhancement | Migrated to Vertical Slice Architecture (VSA) with MediatR-based CQRS, replacing the legacy monolithic handler pattern. |
| Enhancement | Standardized all API responses to OData-compliant format with proper error codes and pagination. |
| Enhancement | Added comprehensive OpenAPI specification with automatic Kiota client generation and publishing. |
| Enhancement | Group membership lookups now resolve transitive (nested) members, ensuring devices in nested groups are included. |
| Enhancement | Improved app license safeguards to preserve license counts when the Graph API temporarily returns zero. |
| Enhancement | Added idempotency guards to prevent duplicate completion notifications on re-queued requests. |
| Enhancement | Improved device naming to prevent infinite rename loops and update local records after successful renames. |
| Enhancement | Optimized automation workflows by eliminating O(n²) patterns in device cleanup and location extraction. |
| Bugfix | Fixed apps disappearing from the request form when VPP tokens expire and are renewed. Apps are now automatically restored on the next sync. |
| Bugfix | Fixed devices stuck with 'Removed from Intune' status after reappearing in Intune. |
| Bugfix | Fixed deployment requests creating duplicate Table Storage entities due to inconsistent PartitionKey usage. |
| Bugfix | Fixed location duplicates caused by race conditions during sync, and added a deduplication cleanup function. |
| Bugfix | Fixed purchase workflow not processing requests stuck in InProgress or Submitted status. |
| Bugfix | Fixed approval notifications not being sent for apps with empty approval status. |

### iOS App

| Type | Description |
|---------------|-------------------|
| Feature | Released MovoSuite native iOS app with full deployment and purchase request support. |
| Feature | Added complete French-Canadian (fr-CA) localization with 100% string coverage. |
| Feature | Added support for dark mode and system appearance settings. |
| Feature | Added form validation with clear error feedback for required fields. |
| Enhancement | Migrated to modern SwiftUI architecture with Swift 6 strict concurrency. |
| Enhancement | Added comprehensive stability and performance improvements for reliable field use. |
| Enhancement | Added backward compatibility down to iPadOS 15. |
| Bugfix | Fixed MDM configuration change detection not triggering re-authentication. |
| Bugfix | Fixed app list showing duplicate entries due to incorrect JSON field mapping. |
| Bugfix | Fixed loading screen showing raw localization keys instead of translated text. |

## Mar. 27, 2024

### Web UI

| Type | Description  |
|-------------|-------------------|
| Enhancement | Added the app token name as a tag to app items in the selection form. |

## Mar. 8, 2024

### Web UI

| Type | Description  |
|-------------|-------------------|
| Bugfix | Fixed iPadOS 15 stuck at 'loading' MovoSuite. |
| Enhancement | Added support for 'System' dark mode setting. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Feature  | Update notification emails to support dark mode in HTML view. |

## Mar. 2, 2024

### Web UI

| Type | Description  |
|-------------|-------------------|
| Enhancement | Added Version Information and ChangeLog to the Support Tab in the Configuration area. |

## Feb. 23, 2024

### Web UI

| Type | Description  |
|-------------|-------------------|
| Enhancement | Surfaced the controls for enabling Sync to Azure AD for Asset Tag, Location, and custom value attributes. Please re-authorize the backend automation after enabling sync to Azure AD. |

## Feb. 10, 2024

### Web UI

| Type | Description  |
|-------------|-------------------|
| Enhancement | Previously MovoSuite rendered 'default' settings if an authenticated but non-admin user managed to reach the configuration page. This has been changed to only allow admin users to view content on the page at all. |

## Feb. 3, 2024

### Web UI

| Type | Description  |
|-------------|-------------------|
| Enhancement | Updated to .Net 8, bringing significant performance improvements to the engine. |
| Enhancement | Migrated to Microsoft FluentUI, providing a more consistent look and feel. |
| Enhancement | Migrated to Microsoft Graph SDK for .Net v5. |
| Enhancement | Added support for dark mode. |
| Enhancement | Added support for searching past requests by status, serial number / asset tag, and requestor. |
| Enhancement | Reduced round trip calls substantially. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Enhancement | MovoSuite has under the hood support now to store location code and asset tag data on Azure AD device objects, enabling the usage of dynamic device groups using extension attributes instead of requiring a specific device naming convention. This functionality will be surfaced in the UI in the near future. |

#### Known Issues

* iPadOS 15 does not render the site. Investigation is in progress.

## Nov. 17, 2021

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Enhancement | Improved matching of authenticated user claims to backend user data. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Bugfix  | Added handling for additional special characters in app display names, which was causing some group creation to fail. |

## Nov. 12, 2021

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Bugfix  | Fix error on saving changes to devices. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Enhancement | In some scenarios multiple instances of a device were being returned by Intune to MovoSuite. MovoSuite now updates itself with data from the most recently synced device, which should avoid old data being recorded. |

## Nov. 10, 2021

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Bugfix  | Fix incorrectly rendered details (e.g. scope tag) when searching for a specific location in the configuration area. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Feature  | No new features. |

## Nov. 8, 2021

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Feature  | Add toggle for automatic group repair. If Dynamic Group rules are modified outside MovoSuite, MovoSuite can auto-repair if this is enabled (defaults to on). |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Feature  | Honour the automatic group repair flag. |
| Enhancement | Improved location code extraction support. |

## Nov. 5, 2021

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Bugfix  | Resolve duplicates in self-service device group dropdown. |
| Bugfix  | Resolve duplicates in config area dropdowns. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Feature  | No new features. |

## Nov. 4, 2021

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Enhancement | Added favicon. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Enhancement | Avoid saving device record during location extraction if no changes have occurred. |

## Nov. 3, 2021

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Feature  | Hide location dropdown if RBAC is enabled but location fallback is not. |
| Enhancement | Add missing localization for 'Select location...' dropdown and 'Deployment' / 'Purchase' headers on index page. |
| Bugfix  | Fix issue with popup notification causing error after saving changes to an app setting. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Feature  | No new features. |
