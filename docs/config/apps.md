### Apps<!-- omit in toc -->

The Apps area in MovoSuite configuration allows you to view details for specific applications, and configure whether an app requires a billing code to be deployed, requires admin approval for deployment, or is hidden from the self-service form. Additionally, MovoSuite also surfaces details on how many licenses are available, as well as the app Bundle ID, useful for configuring Home Screen / folder layout configuration profiles in Intune.

MovoSuite also fetches the latest app artwork URLs and descriptions from Apple, ensuring MovoSuite catalog details remain up to date with Apple's App Store.

Clicking the Expand button on an app in the Apps list will show the install and remove groups that MovoSuite has provisioned. MovoSuite automatically provisions a pair of Install and Remove groups (defaults to _Z-AG-**VPPTOKEN**-iOS-**INSTALL/REMOVE**-**APP NAME**_), and assigns the appropriate Intune app intent to the groups. During self-service deployment processing, MovoSuite adds or removes devices from the appropriate app group.

![021](../images/cfg_app_all.png)

**FIGURE 21**. App List

[back to ToC](#table-of-contents) \| [back to checklist](#install-and-configuration-checklist)