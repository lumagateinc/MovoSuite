## Prerequisites<!-- omit in toc -->

Before configuring MovoSuite, you should have the following items in place.

- **#1 - Contributor rights to an Azure subscription or Resource Group**. Have at least Contributor rights to an Azure subscription or Resource Group within the subscription.
- **#2 - Have access to a Global Administrator account**. The Global Administrator account is used for authorizing MovoSuite to perform deployment and notification actions, as well as approving Office 365 Provider ID (also known as Provider ID). If you do not have access to a Global Administrator account, you will need access to accounts with at least:
  - The ability to consent to an application for delegated and application permissions. [See here](https://docs.microsoft.com/en-us/azure/active-directory/roles/custom-consent-permissions) for more information on creating a custom role to do this.
  - Exchange Administrator role for approving the Provider / Provider ID.
- **#3 - Intune with DEP and VPP integrated**. MovoSuite builds on and enhances native Intune functionality, so you will need Intune deployed integrated with your Apple Device Enrollment Program (DEP) and Volume Purchase Plan (VPP). MovoSuite supports unlimited VPP tokens up to the Intune maximum.
- **#4 - Create an Exchange Online mailbox for sending email notifications**. This should be a User Mailbox (requires an account with an Exchange Online license) or a Shared Mailbox (no license required), but cannot be an Office 365 Group mailbox due to limitations in Microsoft Graph today.
- **#5 - Identify an email address for receiving notifications/requests**. Ideally, this should be an **Office 365 Group**, with members subscribed to emails in order for Actionable (live) emails to work. Shared/resource mailboxes will not render the Actionable emails, and fall back to basic HTML). Alternatively, specify an individual user email address.

[back to ToC](#table-of-contents) \| [back to checklist](#install-and-configuration-checklist)