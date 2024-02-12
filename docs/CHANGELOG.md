# MovoSuite Changelog

## Feb. 10, 2024

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

### Engine

| Type   | Description  |
|---------------|-------------------|
| Enhancement | MovoSuite has under the hood support now to store location code and asset tag data on Azure AD device objects, enabling the usage of dynamic device groups using extension attributes instead of requiring a specific device naming convention. This functionality will be surfaced in the UI in the near future. |

#### Known Issues

* iPadOS 15 does not render the site. Investigation is in progress.

## 2021-11-17

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Enhancement | Improved matching of authenticated user claims to backend user data. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Bugfix  | Added handling for additional special characters in app display names, which was causing some group creation to fail. |

## 2021-11-12

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Bugfix  | Fix error on saving changes to devices. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Enhancement | In some scenarios multiple instances of a device were being returned by Intune to MovoSuite. MovoSuite now updates itself with data from the most recently synced device, which should avoid old data being recorded. |

## 2021-11-10

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Bugfix  | Fix incorrectly rendered details (e.g. scope tag) when searching for a specific location in the configuration area. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Feature  | No new features. |

## 2021-11-08

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Feature  | Add toggle for automatic group repair. If Dynamic Group rules are modified outside MovoSuite, MovoSuite can auto-repair if this is enabled (defaults to on). |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Feature  | Honour the automatic group repair flag. |
| Enhancement | Improved location code extraction support. |

## 2021-11-05

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Bugfix  | Resolve duplicates in self-service device group dropdown. |
| Bugfix  | Resolve duplicates in config area dropdowns. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Feature  | No new features. |

## 2021-11-04

### Web UI

| Type   | Description  |
|---------------|-------------------|
| Enhancement | Added favicon. |

### Engine

| Type   | Description  |
|---------------|-------------------|
| Enhancement | Avoid saving device record during location extraction if no changes have occurred. |

## 2021-11-03

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
