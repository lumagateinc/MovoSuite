### General<!-- omit in toc -->

![010](../images/cfg_gen_all.png)

**FIGURE 10**. Configuration - General

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

![011](../images/cfg_gen_rbac.png)

**FIGURE 11**. Adding Users or Groups to MovoSuite RBAC Roles

If not using MovoSuite Azure AD roles, you can choose to use **Administrator Group** assignment. Create a group for your MovoSuite administrators, and then select the group from the dropdown under **Admin Group**.

#### Apple App Store Country Code<!-- omit in toc -->

The App Store country code selection is used to specify the locale for fetching app metadata. It defaults to CA (Canada).

#### Group Name Prefixes<!-- omit in toc --> 

[back to ToC](#table-of-contents) \| [back to checklist](#install-and-configuration-checklist)