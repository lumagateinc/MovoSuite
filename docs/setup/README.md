## Install and Configuration Checklist

The following is a high-level implementation checklist for MovoSuite, with links to detailed steps for each item on the list. 

*To configure MovoSuite, 1) click the task's link, 2) complete the steps, then 3) click the "return to checklist" link to return to this checklist.*

- **Step 1: Complete and verify the prerequisites**. Full list of prerequisites [HERE](#prerequisites).
- **Step 2: Complete the Onboarding Wizard**. Step-by-step instructions [HERE](#onboarding).
- **Step 3: Authorize MovoSuite to query Intune on behalf of your users**. [HERE](#onboarding) As a Directory Admin (Global Admin), click 'Authorize Users' under the Step 1 heading. This authorizes MovoSuite to query Intune apps and devices on behalf of your users.
- **Step 4: Authorize MovoSuite to process requests, send notifications, automate app group assignments, and update app and device lists from Intune**. [HERE](#onboarding) As a Directory Admin (Global Admin), click 'Authorize Automation' under the Step 2 heading. This authorizes MovoSuite to work with Intune via Microsoft Graph in the background. You may be prompted to grant MovoSuite to access your directory as you to perform this step.
- **Step 5: Configure sender email address**. [HERE](#notifications) Enter your sender email address in the Sender Address field.The address from which emails are sent.
- **Step 6: Configure notification email addresses**. [HERE](#notifications) Enter your notification email addresses in the Notifications area
- **Step 7: Configure Actionable (live) emails**. [HERE](#generate-the-office-365-originator-id) Navigate to the Email tab in configuration, and click 'Create Provider ID' under the Actionable Emails section. Create a new Provider ID named 'MovoSuite' using the details specified in the Actionable Emails area.
- **Step 8: Test MovoSuite Functionality**. [HERE](#) Try deploying an app to one of your devices, and test the purchase form.

[back to ToC](../README.md)