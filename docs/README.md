![Documentation Home](images/header_img.png)

MovoSuite for Microsoft Intune delivers a simple, powerful self-service experience for deploying apps to classroom iPads.

## Table of Contents

- [Install and Configuration Checklist](#install-and-configuration-checklist)
- [Prerequisites](#prerequisites)
- [Home Screen](#home-screen)
- [Request Deployment](#request-deployment)
- [Request App](#request-app)
- [Configuration](#configuration)
  - [Onboarding](#onboarding)
  - [General](#general)
  - [Email](#notifications)
  - [Integration (bulk admin)](#integration-import-export-bulk-admin)
  - [Locations](#locations)
  - [Apps](#apps)
  - [Devices](#devices)
  - [Requests](#requests)
  - [Experimental](#experimental)

## Install and Configuration Checklist<!-- omit in toc -->

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

[back to ToC](#table-of-contents)

## Prerequisites<!-- omit in toc -->

Before configuring MovoSuite, you should have the following items in place.

- **#1 - Contributor rights to an Azure subscription or Resource Group**. Have at least Contributor rights to an Azure subscription or Resource Group within the subscription.
- **#2 - Have access to a Global Administrator account**. The Global Administrator account is used for authorizing MovoSuite to perform deployment and notification actions, as well as approving Office 365 Provider ID (also known as Provider ID). If you do not have access to a Global Administrator account, you will need access to accounts with at least:
  - The ability to consent to an application for delegated and application permissions. [See here](https://docs.microsoft.com/en-us/azure/active-directory/roles/custom-consent-permissions) for more information on creating a custom role to do this.
  - Exchange Administrator role for approving the Provider / Provider ID.
- **#3 - Intune with DEP and VPP integrated**. MovoSuite builds on and enhances native Intune functionality, so you will need Intune deployed integrated with your Apple Device Enrollment Program (DEP) and Volume Purchase Plan (VPP). MovoSuite supports unlimited VPP tokens up to the Intune maximum.
- **#4 - Create an Exchange Online mailbox for sending email notifications**. This should be a User Mailbox (requires an account with an Exchange Online license) or a Shared Mailbox (no license required), but cannot be an Office 365 Group mailbox due to limitations in Microsoft Graph today.
- **#5 - Identify an email address for receiving notifications/requests**. Ideally, this should be an **Office 365 Group**, with members subscribed to emails in order for Actionable (live) emails to work. Shared/resource mailboxes will not render the Actionable emails, and fall back to basic HTML). Alternatively, specify an individual user email address.

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

## Home Screen<!-- omit in toc -->

![001](images/home_all.png)

**FIGURE X**. MovoSuite Home

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

## Request Deployment<!-- omit in toc -->

*To request deployment of one more apps to one more devices, perform the following steps:*

1. Navigate to **Request Deployment**.
![001](images/req_dep_all.png)

**FIGURE X**. Deployment Request UI

2. Click the **Choose Apps** button.
3. In the modal dialog that pops up, under **Available Apps** click the **+** button next to the app(s) that you wish to deploy. This moves them across to the **Selected Apps** field. Note the indicators for whether an app requires deployment approval or billing code.
![001](images/req_dep_apps.png)

**FIGURE X**. Choose Apps Modal

3. Click **Save** to save your selection and go back to the main form.
4. Click the **Choose Devices** button.
5. In the modal dialog that pops up, under **Available Devices** click the **+** button next to the device(s) to which you wish to deploy your apps. This moves them across to the **Selected Devices** field.
![001](images/req_dep_devices.png)

**FIGURE X**. Choose Devices Modal

6. Click **Save** to save your selection and go back to the main form.
7. Modify your **Deployment Action** from the default Install if you wish to uninstall apps from the selected devices.
8. Modify your **Deployment Notifications** from the default if you don't wish to receive all email notifications related to this request.

9. Enter information in the **Reason for Request** field if it is required.
10. Enter information in the **Billing Code** field if it is visible and required (this field can be hidden by the administrator).
![001](images/req_dep_all_filled.png)

**FIGURE X**. Completed Deployment Form

11. Click **Submit** to submit the form and be redirected to the home page. The request list will be updated to add your latest request.
12. At this point you will receive an acknowledgement email that your request has been received and is being processed. As the request is processed, if your administrator has enabled the Actionable email functionality, and you are using a current version of Outlook (desktop or mobile), the email will automatically update with the latest status every time you view it.
13. Once the request is fully processed (all apps have been approved / declined if any required approval), you will receive an email notification that the request is completed. Your apps should show up within about 20 minutes of the final notification, if not earlier.

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

## Request App<!-- omit in toc -->

*To request your administrator procure an application license from Apple for deployment to devices, perform the following steps:*

1. Navigate to **Request App**.
![001](images/req_app_all.png)

**FIGURE X**. New App Request Form

2. Using the search engine of your choice, find the Apple App Store URL for the iOS app you wish to deploy. Paste the URL into the URL field of the form.
![001](images/req_app_search_link.png)

**FIGURE X**. Apple App Store URL via search link

3. Choose the number of licenses you want your administrator to procure.
4. Enter information in the **Billing Code** field if it is visible and required (this field can be hidden by the administrator).
5. Enter any additional comments in the **Comments** field as to why you want to purchase these apps.
![001](images/req_app_all_filled.png)

**FIGURE X**. Completed Request App form

6. Click **Submit** to submit your request.
7. At this point you will receive an acknowledgement email that your request has been received.

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

## Configuration<!-- omit in toc -->

The Configuration tab includes the settings that will be visible only to MovoSuite administrators, generally the same person responsible for Intune configuration in your environment. 

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### Onboarding<!-- omit in toc -->

*To complete the MovoSuite onboarding process, perform the following steps:*

1. Navigate to **Configuration**, and select the **Onboarding** tab.
2. First, click the **Authorize for Users** button, and when prompted, click **Accept**. This authorizes MovoSuite to query Intune apps and devices on behalf of your users.
3. Next, click the **Authorize Automation** button, and when prompted, click **Accept**. This authorizes MovoSuite to work with Intune and Azure AD in the background.

![001](images/cfg_onb_auth.png)

**FIGURE X**. Onboarding Wizard

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### General<!-- omit in toc -->

![001](images/cfg_gen_all.png)

**FIGURE X**. Configuration - General

#### Self Service<!-- omit in toc -->

##### Enable App Catalog Procurement Form 
 
 This option is enabled by default, but can be turned off. It shows or hides the Request App navigation entry.

##### Require Exact Match for Device Lookup

This option is **deprecated**, and will be removed in the future as it has been replaced by native support for Intune Role Based Access Control (RBAC).

##### Enable RBAC

When you check the Enable RBAC box under **Configuration \> General**, MovoSuite filters the apps and devices shown to users in the self-service areas based on their permissions in Intune. You should enable Self-Service Tags and Groups if enabling this option, so that MovoSuite can create Scope Tags for each location, and groups for granting assignment.

##### Enable Self-Service Tags and Groups

If enabled, MovoSuite will provision an Intune role named **MovoSuite - Self Service** and associated self-service groups and assignments for each MovoSuite location. The permissions granted in this role are as follows:
- Managed Apps (Read and Assign)
- Mobile Apps (Read and Assign)
- Managed Devices (Read)
- Remote Tasks (Sync devices)

##### Enable Field Tech Tags and Groups

If enabled, MovoSuite will provision an Intune role named **MovoSuite - Field Tech** and associated field tech groups and assignments for each MovoSuite location. The permissions granted in this role are as follows:
- Managed Apps (Read and Assign)
- Mobile Apps (Read and Assign)
- Managed Devices (Read)
- Remote Tasks (Sync devices)

##### Use Two Stage Approval

If enabled, MovoSuite will send a second email to the global email address registered for deployment or purchase requests if a delegated approver (e.g. school principal) has approved the request.

##### Hide Billing Code

If enabled, MovoSuite will not show the billing code field in forms.

##### Billing Code Placeholder

Change the placeholder text for billing code fields to guide your users.

##### Timezone

Configure the site-wide timezone. This is used when rendering times in emails, request history, and event logs.

#### Other<!-- omit in toc -->

#### Admin Group<!-- omit in toc -->

There are two approaches to managing administrator access in MovoSuite:
- Azure AD **role assignment**
- Administrator **group assignment**

The preferred way to manage administrator access in MovoSuite is via Azure AD **role assignment**. MovoSuite roles in Azure AD are:
- **Self-Service User**. This user will be able to deploy apps, but will NOT see the **Configuration** tab in MovoSuite.
- **Administrator**. Users in this role have full permissions in MovoSuite, and see all MovoSuite settings

To add user or group to MovoSuite roles in Azure Active Directory:

![001](images/cfg_gen_rbac.png)

**FIGURE X**. Adding Users or Groups to MovoSuite RBAC Roles

If not using MovoSuite Azure AD roles, you can choose to use **Administrator Group** assignment. Create a group for your MovoSuite administrators, and then select the group from the dropdown under **Admin Group**.

#### Apple App Store Country Code<!-- omit in toc -->

The App Store country code selection is used to specify the locale for fetching app metadata. It defaults to CA (Canada).

#### Group Name Prefixes<!-- omit in toc --> 

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### Notifications<!-- omit in toc -->

*To configure notifications, perform the following steps:*
1. Configure Sender Email Address
2. Configure Approval Recipient Email addresses
3. Configure Office 365 Provider ID
4. **Optional**: Configure Webhook Notifications For Microsoft Teams

#### Notifications Sender Email<!-- omit in toc -->

Configure the Sender Email address field with the email address of a User Mailbox or Shared Mailbox existing in Exchange Online. Office 365 Group Mailboxes cannot be used for the sender address.

![001](images/cfg_email_send.png) 

**FIGURE X**. Sender Email Address

#### Notifications Recipient Emails<!-- omit in toc -->

There are three email addresses for backend administrative items. You may use an email-enabled group address for any of these notifications, shown in the figure below.

![001](images/cfg_email_notif.png) 

**FIGURE X**. E-mail Notification and Message Format

#### Webhook Notifications<!-- omit in toc -->

You can configure notification of approval requests (deployment or purchase) to Microsoft Teams via webhook. These notifications are actionable, which means you can approve or decline the approval request right within your Teams channel!

To configure actionable webhook notifications:

1. Open Microsoft Teams and select the team you would like to receive notifications.
2. Click the ellipsis (...) next to the team name and select **Manage team**.
3. Select the **Apps** tab.
4. If you do not see webhooks in the list, click the **More apps** button.
5. In the search box , type 'webhook'. From the search results, select 'Incoming Webhook' and click the **Add to a team** button.
6. On the 'Setup an incoming Webhook...', click the **Setup a connector** button.
7. On the Incoming Webhook screen, click **Create**. Then, copy the URL, as shown in the figure below.

![001](images/webhook_url.png)

**FIGURE X**. Webhook URL in Teams

8. To complete the configuration, go back to the **Configuration > Email** tab of MovoSuite.
9. Paste the URL from step 7 into one or both fields provided in the 'Webhook Notifications' area.
10. Click the **Save** button at the bottom of the screen to save your changes.

![001](images/cfg_webhook_notif.png)

**FIGURE X**. Webhook Notifications configuration

[back to ToC](#table-of-contents)

#### E-mail Templates <!-- omit in toc -->

Configuring your email templates is a simple 2-step process:

**STEP 1: Select the Action**: Select the action for which you wish to configure the e-mail template, shown in Figure X and described in the list below.

![001](images/cfg_email_temp_options.png)

**FIGURE X**. Email Template task selection

- **App Request Received**. When a user requests an app that requires Admin approval, and clicks **Submit Request**, they will receive a message confirming their request was received.
- **Deployment Approval Request**. When a user requests an app that requires Admin approval, these settings will format the approval request e-mail to the email-enabled group you specify in the Email Notifications section.
- **Deployment Completed**. When the deployment request is complete, this message will be sent to the requesting user.
- **Deployment Started**. When an app deployment begins, this message will be sent to the email address of the user requesting deployment.
- **Purchase Request Approval**. When a user requests a new app to be purchased and added to their catalog, this message will be sent to the **Procurement Requests** email address.
- **Purchase Request Completed**. When someone at the **Procurement Requests** email address completes the app purchase and marks the request as complete.

**STEP 2: Customize the Template**: The default template for that function you chose will be presented right below the list, as shown in Figure X, Customize the template customize using free text and variables shown at the bottom of the template. Supported variables are:

| Variable | Description  |
|----------|-----------------------|
|  %appName  | Display name of the app referenced in the request.   |
|  %requestId  |  The ID number of the request  |
|  %requestStatus  | Status the request (e.g. In progress, Complete, Failed)  |

**IMPORTANT**: Click **Save** to save your changes to the template you are working with BEFORE choosing another!

![001](images/cfg_email_temp.png)

**FIGURE X**. Email Template configuration area

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

> **Note**: MovoSuite sends a command for each device after approval and initial batch of non-approved apps, rather than waiting for the devices to report back before sending the email. The message is sent only after the last app in the list has been provided.  

#### Generate the Office 365 Provider ID<!-- omit in toc -->

While still in the Email configuration area, we will generate the Office 365 Provider (Originator) ID. This establishes a trust foundation for Outlook to fetch the latest information for the email from MovoSuite for notifications related to app approval and app procurement workflows. 

1. You will click the **Create Provider ID** button. This will take you to the [**Actionable Email Developer Dashboard**](https://outlook.office.com/connectors/oam/publish) where you can generate this ID. You will need the three items listed under the textbox in Figure 17. 

    ![001](images/cfg_email_origid.png)

    Figure X. The Office 365 Provider ID

2. You will now provide answers to the following items:

   2.1. **New Provider**:
      - Friendly Name: MovoSuite
      - Sender email address: _**the sender email address from Actionable Emails section (unchangeable)**_
      - Provider URL: _**target URL from Actionable Emails section**_

   2.2. **Scope of submission**: Organization

   2.3. **Additional Information**:
      - Other email addresses: Email addresses of others who should be notified about MovoSuite license renewal. 
      - Comments: "Email notifications from MovoSuite for Intune"

3. At the bottom of the form, check the box labeled "I accept the terms and conditions…" and then click Save.
4. Once you have generated the ID, an email notification will be sent to the Exchange administrators of your organizations to approve. If you are a Global Administrator or Exchange Administrator, you can approve the pending ID from the admin view of the **Actionable Email Developer Dashboard** [here](https://https://outlook.office.com/connectors/oam/admin).
5. Save the **Provider ID (originator)** from the **Actionable Email Developer Dashboard** into MovoSuite, and save the change.

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### Integration (bulk admin)<!-- omit in toc -->

The Integration Settings area of the MovoSuite interface includes:

- **Asset Integration**. This feature enables ingestion of additional information (such as asset tag numbers for matching serial numbers) for shared iPad devices directly from service desk or Excel data sources.  
- **Naming Authority**. This feature enables automated naming of shared iPads in Intune using the device naming format you specify under **Naming Conventions**.
- **Naming Conventions**. This feature enables customization of the naming of shared iPads in Intune, including location short codes or asset tag numbers. The naming conventions are defined on a per DEP profile or per AutoPilot profile basis, with support for variables for the short code for the device **location**, **asset tag** (if the device asset tag fields are populated), or **serial number**. If naming conventions are defined with a location variable, MovoSuite will attempt to extract the location code from device name for devices that aren't already assigned to a location.

![001](images/cfg_int_all.png)

**FIGURE X**. Asset Integration and Data Ingestion

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### Locations<!-- omit in toc -->

Locations in MovoSuite underpin much of the automation, supporting device naming and role based access. Specifically, creating a location services to:
- provision an Intune scope tag with the short code for the location
- provision an **assigned** self-service group for the location, named based on the short code (defaults to _Z-SG-**SHORTCODE**-Self Service Users_)
- provision an **assigned** field tech group for the location, named based on the short code (defaults to _Z-SG-**SHORTCODE**-Field Tech Users_)
- provision a **dynamic** device group for the location, named based on the short code (defaults to _Z-DG-**SHORTCODE**-All iOS Devices_) and matching devices who's name starts with the short code

Additionally, a delegated approver for deployment and purchasing can be defined per location. This enables approval requests to be routed to someone like a principal at a school for first pass, and then routed to the MovoSuite globally defined approvers. You can also select a VPP token for a specific location. Selecting a VPP token for a specific location will add the Intune Scope Tag to the token, allowing members of the location's self service user group to view the apps on that token.

![001](images/cfg_loc_all.png)

**FIGURE X**. Location Details list

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### Apps<!-- omit in toc -->

The Apps area in MovoSuite configuration allows you to view details for specific applications, and configure whether an app requires a billing code to be deployed, requires admin approval for deployment, or is hidden from the self-service form. Additionally, MovoSuite also surfaces details on how many licenses are available, as well as the app Bundle ID, useful for configuring Home Screen / folder layout configuration profiles in Intune.

MovoSuite also fetches the latest app artwork URLs and descriptions from Apple, ensuring MovoSuite catalog details remain up to date with Apple's App Store.

Clicking the Expand button on an app in the Apps list will show the install and remove groups that MovoSuite has provisioned. MovoSuite automatically provisions a pair of Install and Remove groups (defaults to _Z-AG-**VPPTOKEN**-iOS-**INSTALL/REMOVE**-**APP NAME**_), and assigns the appropriate Intune app intent to the groups. During self-service deployment processing, MovoSuite adds or removes devices from the appropriate app group.

![001](images/cfg_app_all.png)

**FIGURE X**. App List

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### Devices<!-- omit in toc -->

The Devices area in MovoSuite configuration shows you the devices recorded in MovoSuite, and allows you to (re)assign a device to a location. Assigning a device to a location will update the name of the device on the next rename cycle if applicable.

Clicking the Expand button on a device in the Devices list will show you additional details for the device, including the Intune and Azure AD object IDs. You can also add / modify asset tag and management notes.

To export the Devices list to Excel, click Export above the scroll bar on the right.

![001](images/cfg_dev_all.png)

**FIGURE X**. Device List

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### Requests<!-- omit in toc -->

The Requests area in MovoSuite configuration allows you to view submitted requests and their details, as well as initiate reprocessing of a request in the event one appears stalled. To view details, click the **info** button on a request. To reprocess the request, click the **circular arrow** on the request.

![001](images/cfg_req_all.png)

**FIGURE X**. Deployment Request List

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### Experimental<!-- omit in toc -->

The Experimental area in MovoSuite configuration allows you to enable features that are in preview for customers. These features generally are still undergoing testing and validation with customers, so enable at your own risk.

![001](images/cfg_exp_all.png)

**FIGURE X**. Experimental Features Page

[back to ToC](#table-of-contents) | [back to checklist](#install-and-configuration-checklist)

### FAQ<!-- omit in toc -->

*What if I don't configure RBAC?*
Your teachers can view all apps and all devices.