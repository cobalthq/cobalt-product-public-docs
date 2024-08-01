---
title: "Create Test Findings"
linkTitle: "Create Test Findings"
weight: 150
description: >
  Populate a test organization with test findings using an in-house pentest.
---

## TODO

## Purpose

This document is intended for organizations looking to test their integration builder in a non-prod environment.
It includes detailed steps for populating an in-house pentest with fake vulnerabilities for testing purposes.

## Limitations

In this tutorial, we will explore the _'+1 email address trick'_ to simulate multiple users within the Cobalt application.

The _'+1 email address trick'_ is a clever method used to generate various email addresses from a single Gmail account. This technique involves adding a “+1” (or a combination of numbers and letters) to the local part of your Gmail address before the “@” symbol.

For instance, if your Gmail address is `joeman@gmail.com`, you can create a new address by appending “+1” to the local part: `joeman+1@gmail.com`. For more comprehensive information about this functionality, please refer to the official Gmail blog [here](https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html).

> ⚠️ **It's important to note that the +1 email address trick is specific to Gmail and allows users to create aliases for better inbox organization. However, it may not be compatible with all email providers such as Hotmail, Outlook, or iCloud.**

## Prerequisites

- Cobalt staff have already created and set up a test organization for you. If not, please contact your customer
  success manager.
- You have been invited to the test organization, accepted the invitation, and have an Owner role. This user will
  be referred to as the primary user throughout the rest of the document.

  > ℹ️️ The email address of this user will be referenced as the primary email

  ![Verify primary user role](/integrations/Create-test-finding-verify-primary-user-role.png "Verify primary user role")

## Set up secondary user

> ℹ️️ This documentation uses `kittaakos@gmail.com` as the primary user's email address.

1. Log in to the Cobalt application with your primary user.
1. Open the **People** page from the sidebar.
1. Click on the **Invite User** button.

   ![Invite a user](/integrations/Create-test-finding-invite-a-user.png "Invite a user")

1. Enter the email address of the secondary user using the _'+1 email address trick'_ and click on **Add** or press <kbd>Enter</kbd>.

   ![Add secondary user](/integrations/Create-test-finding-add-secondary-user.png "Add secondary user")

   > ℹ Since the primary email address is `kittaakos@gmail.com`, the secondary will be `kittaakos+1gmail.com`.

1. Click on the **Invite** button.

   ![Invite secondary user](/integrations/Create-test-finding-invite-secondary-user.png "Invite secondary user")

1. Verify secondary user has been invited.

   ![Verify secondary user invited](/integrations/Create-test-finding-verify-secondary-user-invited.png "Verify secondary user invited")

   > ️️ℹ You may need to scroll down in the list of people in your organization.

1. Check your primary emails for the invitation of the secondary user.

   ![Check invitation email](/integrations/Create-test-finding-check-invitation-email.png "Check invitation email")

1. Click on **Get Started** in the email.

   ![Get started with secondary user](/integrations/Create-test-finding-get-started-with-secondary-user.png "Get started with secondary user")

1. Set a new password for the new user and click **Continue**.

   ![Set password for secondary user](/integrations/Create-test-finding-set-password-for-secondary-user.png "Set password for secondary user")

1. Open a new browser window in [incognito or private browsing mode](https://en.wikipedia.org/wiki/Private_browsing).
1. In the private browser window, navigate to https://app.us.cobalt.io to access the Cobalt application.
1. Enter your secondary email address and click on **Continue**, then use the password you set for the secondary email
   address to log in to the application and click **Continue** again.

   ![Log in with secondary user](/integrations/Create-test-finding-log-in-with-secondary-user.png "Log in with secondary user")

   > 🎉 You have successfully logged into Cobalt using your secondary user.

## Create In-House Pentest (Primary user)

1. Using your primary user, open the **Pentests** page from the sidebar and click on **Create Pentest**.

   ![Create pentest](/integrations/Create-test-finding-create-pentest.png "Create pentest")

1. Click on **Get Started** if you have not yet enabled the **In-House Pentest Beta** feature for your organization.

   ![Get started with In-House Pentests](/integrations/Create-test-finding-get-started-with-inhouse-pentests.png "Get started with In-House Pentests")

   > ️ ℹ You can skip this step if the **In-House Pentest Beta** feature is already enabled for your organization.

1. Click on **Enter the Beta** if you want to enable the **In-House Pentest Beta** feature.

   ![Enter In-House Pentests Beta](/integrations/Create-test-finding-enter-inhouse-pentests.png "Enter In-House Pentests Beta")

   > ️ ℹ You can skip this step if the **In-House Pentest Beta** feature is already enabled for your organization.

1. Select the **In-House Pentest** type and asset you want to test, then click on **Continue**.

   ![In-House Pentests Beta Enabled](/integrations/Create-test-finding-inhouse-pentests-enabled.png "In-House Pentests Beta Enabled")

   ![Create In-House Pentest](/integrations/Create-test-finding-create-inhouse-pentest.png "Create In-House Pentest")

   > ️ ℹ You can create a dedicate asset for testing purposes or use an existing one.

1. You can leave the **Asset** page by clicking on **Next**

   ![Rename In-House Pentest](/integrations/Create-test-finding-rename-pentest.png "Rename In-House Pentest")

   > ℹ Changing the pentest name is optional but helps to distinguish test pentests from each other. The pentest can be renamed ny clicking on the pencil icon next to the pentest name and confirm the changes with **Done**.

1. On the **Requirement** page, the following information must be provided:

   - Targets,
   - Objectives, and
   - Technology stack.

   ![Set targets](/integrations/Create-test-finding-set-targets.png "Set targets")

   ![Set objectives](/integrations/Create-test-finding-set-objectives.png "Set objectives")

   ![Set technology stack](/integrations/Create-test-finding-set-technology-stack.png "Set technology stack")

   > ️ ℹ The input content is irrelevant.

1. No changes are required on the **Details** page. Proceed by clicking on **Next**.

   ![Optional details](/integrations/Create-test-finding-optional-details.png "Optional details")

1. Select the required **Start** and **End** dates on the **Scope & Plan** page, and click on **Save & Exit** to finish the wizard.

   ![Configure plan](/integrations/Create-test-finding-configure-plan.png "Configure plan")

   > ℹ It is recommended to check the _I'm a point of contact for this pentest_ checkbox.

![Pentest created](/integrations/Create-test-finding-pentest-created.png "Pentest created")

![Plan pentest](/integrations/Create-test-finding-plan-pentest.png "Plan pentest")

![Pentest planned](/integrations/Create-test-finding-pentest-planned.png "Pentest planned")

![Add In-House pentester](/integrations/Create-test-finding-add-inhouse-pentester.png "Add In-House pentester")

![Add secondary user to pentest](/integrations/Create-test-finding-add-secondary-user-to-pentest.png "Add secondary user to pentest")

![Verify secondary user added](/integrations/Create-test-finding-verify-secondary-user-add.png "Verify secondary user added")

![Secondary user invited](/integrations/Create-test-finding-secondary-user-invited.png "Secondary user invited")

![Launch pentest](/integrations/Create-test-finding-launch-pentest.png "Launch pentest")

![Live pentest](/integrations/Create-test-finding-live-pentest.png "Live pentest")

![Submit finding](/integrations/Create-test-finding-submit-finding.png "Submit finding")

![Select vulnerability type](/integrations/Create-test-finding-select-vulnerability-type.png "Select vulnerability type")

![Set description](/integrations/Create-test-finding-set-description.png "Set description")

![Set proof of concept](/integrations/Create-test-finding-set-poc.png "Set proof of concept")

![Set severity](/integrations/Create-test-finding-set-severity.png "Set severity")

![Set suggested fix](/integrations/Create-test-finding-set-suggested-fix.png "Set suggested fix")

![Submit for triage](/integrations/Create-test-finding-submit-for-triage.png "Submit for triage")

!['Triaging' finding](/integrations/Create-test-finding-vuln-triaging.png "'Triaging' finding")

![Select 'Pending Fix' state](/integrations/Create-test-finding-select-pending-fix-state.png "Select 'Pending Fix' state")

![Submit evaluation](/integrations/Create-test-finding-submit-evaluation.png "Submit evaluation")

!['Pending Fix' finding](/integrations/Create-test-finding-pending-fix-vuln.png "'Pending Fix' finding")

![In-House pentest findings](/integrations/Create-test-finding-pentest-vulns.png "In-House pentest findings")

![New findings notification](/integrations/Create-test-finding-pending-fix-vuln-notification.png "New findings notification")

![Review new finding](/integrations/Create-test-finding-pending-fix-vuln-review.png "Review new finding")
