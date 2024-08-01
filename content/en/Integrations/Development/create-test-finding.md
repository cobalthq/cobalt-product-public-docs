---
title: "Create Test Finding"
linkTitle: "Create Test Finding"
weight: 150
description: >
  This document is intended for organizations looking to test their integration builder in a non-prod environment. It includes detailed steps for populating an in-house pentest with fake findings for testing purposes.
---

## Purpose

This document is intended for organizations looking to test their integration builder in a non-prod environment.
It includes detailed steps for populating an in-house pentest with fake findings for testing purposes.

## Prerequisites

- Cobalt staff have already created and set up a test organization for you. If not, please contact your customer
  success manager.
- You have been invited to the test organization, accepted the invitation, and have an Owner role. This user will
  be referred to as the primary user throughout the rest of the document.

  > ℹ️️️️ The email address of this user will be referenced as the primary email

  ![Verify primary user role](/integrations/Create-test-finding-verify-primary-user-role.png "Verify primary user role")

### Limitations

In this tutorial, we will explore the _+1 email address trick_ to simulate multiple users within the Cobalt application.

The _+1 email address trick_ is a syntax technique used to create multiple email addresses based on a single Gmail address. This trick involves appending a “+1” (or any combination of numbers and letters) to the local part of your Gmail address, before the “@” symbol.

 > ℹ️️️️ Example: If your Gmail address is `joeman@gmail.com`, you can create a new email address by adding “+1” to the local part: `joeman+1@gmail.com`. For more comprehensive information about this functionality, please refer to the official Gmail blog [here](https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html).

> ⚠️ **It's important to note that the '+1 email address trick' is specific to Gmail and allows users to create aliases for better inbox organization. However, it may not be compatible with all email providers such as Hotmail, Outlook, or iCloud.**

## Set up secondary user

> ℹ️️️️ This documentation uses `kittaakos@gmail.com` as the primary user's email address.

1. Log in to the Cobalt application with your primary user.
1. Open the **People** page from the sidebar.
1. Click on the **Invite User** button.

   ![Invite a user](/integrations/Create-test-finding-invite-a-user.png "Invite a user")

1. Enter the email address of the secondary user using the _'+1 email address trick'_ and click on **Add** or press <kbd>Enter</kbd>.

   ![Add secondary user](/integrations/Create-test-finding-add-secondary-user.png "Add secondary user")

   > ℹ️️ Since the primary email address is `kittaakos@gmail.com`, the secondary will be `kittaakos+1gmail.com`.

1. Click on the **Invite** button.

   ![Invite secondary user](/integrations/Create-test-finding-invite-secondary-user.png "Invite secondary user")

1. Verify secondary user has been invited.

   ![Verify secondary user invited](/integrations/Create-test-finding-verify-secondary-user-invited.png "Verify secondary user invited")

   > ️️ℹ️️ You may need to scroll down in the list of people in your organization.

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

## Create In-House Pentest (_primary user_)

1. Using your primary user, open the **Pentests** page from the sidebar and click on **Create Pentest**.

   ![Create pentest](/integrations/Create-test-finding-create-pentest.png "Create pentest")

1. Click on **Get Started** if you have not yet enabled the **In-House Pentest Beta** feature for your organization.

   ![Get started with In-House Pentests](/integrations/Create-test-finding-get-started-with-inhouse-pentests.png "Get started with In-House Pentests")

   > ️ ℹ️️ You can skip this step if the **In-House Pentest Beta** feature is already enabled for your organization.

1. Click on **Enter the Beta** if you want to enable the **In-House Pentest Beta** feature.

   ![Enter In-House Pentests Beta](/integrations/Create-test-finding-enter-inhouse-pentests.png "Enter In-House Pentests Beta")

   > ️ ℹ️️ You can skip this step if the **In-House Pentest Beta** feature is already enabled for your organization.

1. Select the **In-House Pentest** type and asset you want to test, then click on **Continue**.

   ![In-House Pentests Beta Enabled](/integrations/Create-test-finding-inhouse-pentests-enabled.png "In-House Pentests Beta Enabled")

   ![Create In-House Pentest](/integrations/Create-test-finding-create-inhouse-pentest.png "Create In-House Pentest")

   > ️ ℹ️️ You can create a dedicate asset for testing purposes or use an existing one.

1. No changes are required on the **Asset** page. You can proceed by clicking on **Next**.

   ![Rename In-House Pentest](/integrations/Create-test-finding-rename-pentest.png "Rename In-House Pentest")

   > ℹ️️ Changing the pentest name is optional but helps to distinguish test pentests from each other. The pentest can be renamed ny clicking on the pencil icon next to the pentest name and confirm the changes with **Done**.

1. On the **Requirement** page, the following fields must be set:

   - **Targets**,
   - **Objectives**, and
   - **Technology stack**.

   ![Set targets](/integrations/Create-test-finding-set-targets.png "Set targets")

   ![Set objectives](/integrations/Create-test-finding-set-objectives.png "Set objectives")

   ![Set technology stack](/integrations/Create-test-finding-set-technology-stack.png "Set technology stack")

   > ️ ℹ️️ The input content is irrelevant.

1. No changes are required on the **Details** page. Proceed by clicking on **Next**.

   ![Optional details](/integrations/Create-test-finding-optional-details.png "Optional details")

1. Select the required **Start** and **End** dates on the **Scope & Plan** page, and click on **Save & Exit** to create the pentest.

   ![Configure plan](/integrations/Create-test-finding-configure-plan.png "Configure plan")

   > ℹ️️ You can check the _I'm a point of contact for this pentest_ checkbox.

1. The **In-House** pentest is in **Draft** state. Click on **Move to Planned**.

   ![Pentest created](/integrations/Create-test-finding-pentest-created.png "Pentest created")

1. Confirm it by clicking on **Move to Planned** in the modal dialog.

   ![Plan pentest](/integrations/Create-test-finding-plan-pentest.png "Plan pentest")

1. Click on **staff your in-house pentesters** in the flash message to add assign the secondary user to the pentest.

   > [Pentest planned](/integrations/Create-test-finding-pentest-planned.png "Pentest planned")

   > ℹ️️ Pentesters and collaborators can accessed and configured from the **Collaborators**. Select **Pentests** from the sidebar, select a pentest, open the **Collaborators** tab.

1. Click on the down pointing triangle (**▼**) and select **In-House Pentester**.

   ![Add In-House pentester](/integrations/Create-test-finding-add-inhouse-pentester.png "Add In-House pentester")

1. Set the secondary email as the input and click on the **Add In-House Pentester** button.

   ![Add secondary user to pentest](/integrations/Create-test-finding-add-secondary-user-to-pentest.png "Add secondary user to pentest")

1. Verify the secondary user is in the **Collaborators** list with **In-House Pentester** role.

   ![Secondary user invited](/integrations/Create-test-finding-secondary-user-invited.png "Secondary user invited")

   > 🎉 You have successfully created an in-house pentest and staffed the secondary user as a pentester.

## Create Test Finding (_secondary user_)

   > ℹ️️ The pentest must be **live** to submit findings.

1. From the incognito browser window, open the previously created pentest and launch it by click on **Launch Pentest**.

   ![Launch pentest](/integrations/Create-test-finding-launch-pentest.png "Launch pentest")

   ![Live pentest](/integrations/Create-test-finding-live-pentest.png "Live pentest")

1. Click on **Submit Finding**.

   ![Submit finding](/integrations/Create-test-finding-submit-finding.png "Submit finding")

   The following information must be set create a test finding data:
      - **Vulnerability type**,
      - **Description**,
      - **Proof of concept**,
      - **Severity**, and
      - **Suggested fix**.

   ![Set description](/integrations/Create-test-finding-set-description.png "Set description")

   ![Set proof of concept](/integrations/Create-test-finding-set-poc.png "Set proof of concept")

   ![Set severity](/integrations/Create-test-finding-set-severity.png "Set severity")

   ![Set suggested fix](/integrations/Create-test-finding-set-suggested-fix.png "Set suggested fix")

   > ️ ℹ️️ The input content is irrelevant but some validation constraints must be fulfilled. For example, the severity is at least a three character long string.

1. Click on **Submit for Triaging**. at the bottom of the page when all required info set.

   ![Submit for triage](/integrations/Create-test-finding-submit-for-triage.png "Submit for triage")

1. The pentest finding is in **Triaging** state.

   !['Triaging' finding](/integrations/Create-test-finding-vuln-triaging.png "'Triaging' finding")

1. Select the finding state to **Pending Fix** from the dropdown and submit the evaluation.

   ![Select 'Pending Fix' state](/integrations/Create-test-finding-select-pending-fix-state.png "Select 'Pending Fix' state")

1. Set the **Likelihood**, **Business Impact**, and the **Report Quality** values by clicking on the circles (**●**) and on the **Submit evaluation** button.

   ![Submit evaluation](/integrations/Create-test-finding-submit-evaluation.png "Submit evaluation")

1. The pentest finding is in **Pending Fix** state.

   !['Pending Fix' finding](/integrations/Create-test-finding-pending-fix-vuln.png "'Pending Fix' finding")

1. See all pentest findings.

   ![In-House pentest findings](/integrations/Create-test-finding-pentest-vulns.png "In-House pentest findings")

   > 🎉 You have successfully created a finding for the in-house pentest with the secondary user.

## Working with the test findings (_primary user_)

1. The findings created by the secondary user for the in-house pentest are visible for the primary user.

   ![New findings notification](/integrations/Create-test-finding-pending-fix-vuln-notification.png "New findings notification")

   ![Review new finding](/integrations/Create-test-finding-pending-fix-vuln-review.png "Review new finding")
