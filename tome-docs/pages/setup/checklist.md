---
title: Setup Checklist
description: Step-by-step implementation checklist for MovoSuite
icon: list-checks
---

# Install and Configuration Checklist

The following is a high-level implementation checklist for MovoSuite, with links to detailed steps for each item on the list.

- **Step 1: Complete and verify the prerequisites**. Full list of prerequisites [HERE](./prereqs).
- **Step 2: Complete the Onboarding Wizard**. Step-by-step instructions [HERE](../config/onboarding).
- **Step 3: Authorize MovoSuite to query Intune on behalf of your users**. As a Directory Admin (Global Admin), click 'Authorize Users' under the Step 1 heading. This authorizes MovoSuite to query Intune apps and devices on behalf of your users.
- **Step 4: Authorize MovoSuite to process requests, send notifications, automate app group assignments, and update app and device lists from Intune**. As a Directory Admin (Global Admin), click 'Authorize Automation' under the Step 2 heading. This authorizes MovoSuite to work with Intune via Microsoft Graph in the background. You may be prompted to grant MovoSuite to access your directory as you to perform this step.
- **Step 5: Configure sender email address**. [HERE](../config/notifications) Enter your sender email address in the Sender Address field.
- **Step 6: Configure notification email addresses**. [HERE](../config/notifications) Enter your notification email addresses in the Notifications area.
- **Step 7: Configure Actionable (live) emails**. [HERE](../config/notifications) Navigate to the Email tab in configuration, and click 'Create Provider ID' under the Actionable Emails section.
- **Step 8: Test MovoSuite Functionality**. [HERE](../selfservice/index) Try deploying an app to one of your devices, and test the purchase form.
