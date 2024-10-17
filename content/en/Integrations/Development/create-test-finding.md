---
title: "Create Test Finding"
linkTitle: "Create Test Finding"
weight: 150
description: >
  This guide is for organizations looking to test their integrations in a non-production environment. It provides detailed steps to populate an in-house pentest with test findings.
---

## Prerequisites

- Cobalt staff must have created and set up a test organization for you. If not, please contact your customer success manager.
- You must be invited to the test organization, accept the invitation, and have an **Owner** role.

  ![Verify user role](/integrations/Create-test-finding-verify-user-role.png "Verify user role")

## Create In-House Pentest

> **ⓘ** Users must have the **Team Member** role to create a pentest.

> **ⓘ** Refer to the [Pentest **Team Member**](/platform-deep-dive/collaboration/user-roles/#pentest-team-member) section of the product documentation for more details.

1. Open the **Pentests** page from the sidebar and click **Create Pentest**.

   ![Create pentest](/integrations/Create-test-finding-create-pentest.png "Create pentest")

   > **ⓘ** If the **Create Pentest** button is disabled, the user role must be changed to **Team Member**. Learn how to [switch the user role for an **In-House Pentest**](#switch-the-users-role-of-an-in-house-pentest).

1. Click **Get Started** if the **In-House Pentest Beta** feature is not yet enabled for your organization.

   ![Get started with In-House Pentests](/integrations/Create-test-finding-get-started-with-inhouse-pentests.png "Get started with In-House Pentests")

   > **ⓘ** Skip this step if the **In-House Pentest Beta** feature is already enabled.

1. Click **Enter the Beta** to enable the **In-House Pentest Beta** feature.

   ![Enter In-House Pentests Beta](/integrations/Create-test-finding-enter-inhouse-pentests.png "Enter In-House Pentests Beta")

   > **ⓘ** Skip this step if the **In-House Pentest Beta** feature is already enabled.

1. Select the **In-House Pentest** type and asset you want to test, then click **Continue**.

   ![In-House Pentests Beta Enabled](/integrations/Create-test-finding-inhouse-pentests-enabled.png "In-House Pentests Beta Enabled")

   ![Create In-House Pentest](/integrations/Create-test-finding-create-inhouse-pentest.png "Create In-House Pentest")

   > **ⓘ** You can create a dedicated asset for testing or use an existing one.

1. No changes are required on the **Asset** page. Click **Next** to proceed.

   ![Rename In-House Pentest](/integrations/Create-test-finding-rename-pentest.png "Rename In-House Pentest")

   > **ⓘ** Renaming the pentest is optional but helps distinguish test pentests. Click the pencil icon next to the pentest name and confirm with **Done**.

1. On the **Requirements** page, set the following fields:

   - **Targets**
   - **Objectives**
   - **Technology stack**

   ![Set targets](/integrations/Create-test-finding-set-targets.png "Set targets")

   ![Set objectives](/integrations/Create-test-finding-set-objectives.png "Set objectives")

   ![Set technology stack](/integrations/Create-test-finding-set-technology-stack.png "Set technology stack")

   > **ⓘ** The input content is irrelevant.

1. No changes are required on the **Details** page. Click **Next** to proceed.

   ![Optional details](/integrations/Create-test-finding-optional-details.png "Optional details")

1. On the **Scope & Plan** page, select the required **Start** and **End** dates, then click **Save & Exit** to create the pentest.

   ![Configure plan](/integrations/Create-test-finding-configure-plan.png "Configure plan")

   > **ⓘ** You can check the _I'm a point of contact for this pentest_ checkbox.

1. The **In-House** pentest is now in the **draft** state. Click **Move to Planned**.

   ![Pentest created](/integrations/Create-test-finding-pentest-created.png "Pentest created")

1. Confirm by clicking **Move to Planned** in the modal dialog.

   ![Plan pentest](/integrations/Create-test-finding-plan-pentest.png "Plan pentest")

## Switch the User's Role of an **In-House Pentest**

> **ⓘ** Refer to the public documentation for more about [user roles and associated permissions](/platform-deep-dive/collaboration/user-roles/).

1. Go to the sidebar and select **Pentests**.

1. Choose an **In-House Pentest** from the list.

1. Open the **Collaborators** tab.

1. Click the dropdown for **Role** next to your username and select the desired role for the **In-House Pentest**.

   > **ⓘ** The application will automatically reload after changing your pentest collaborator role.

## Launch In-House Pentest

> **ⓘ** The user must have the **In-House Pentester** role.

> **ⓘ** Refer to the [**In-House Pentester**](/platform-deep-dive/collaboration/user-roles/#in-house-pentester) section of the product documentation for more details.

1. Select **Pentests** from the sidebar.

1. Choose the **In-House Pentest** you want to launch.

   > **ⓘ** The pentest should be in the **planned** state.

1. Click the **Launch Pentest** button.

   > **ⓘ** The pentest state changes to **live**.

   > **ⓘ** If the **Launch Pentest** button is disabled, the user role must be changed to **In-House Pentester**. Learn how to [switch the user role for an **In-House Pentest**](#switch-the-users-role-of-an-in-house-pentest).

## Create Test Finding

> **ⓘ** The pentest must be **live** to submit findings.

> **ⓘ** The user must have the **In-House Pentester** role.

> **ⓘ** Refer to the [**In-House Pentester**](/platform-deep-dive/collaboration/user-roles/#in-house-pentester) section of the product documentation for more details.

1. Select **Pentests** from the sidebar.

1. Choose an **In-House Pentest** from the list to populate with test findings.

1. Click **Submit Finding**.

   ![Submit finding](/integrations/Create-test-finding-submit-finding.png "Submit finding")

   > **ⓘ** If the **Submit Finding** button is disabled, the user role must be changed to **In-House Pentester**. Learn how to [switch the user role for an **In-House Pentest**](#switch-the-users-role-of-an-in-house-pentest).

   Provide the following information to create a test finding:

   - **Vulnerability type**
   - **Description**
   - **Proof of Concept**
   - **Severity**
   - **Suggested fix**

   ![Set description](/integrations/Create-test-finding-set-description.png "Set description")

   ![Set proof of concept](/integrations/Create-test-finding-set-poc.png "Set proof of concept")

   ![Set severity](/integrations/Create-test-finding-set-severity.png "Set severity")

   ![Set suggested fix](/integrations/Create-test-finding-set-suggested-fix.png "Set suggested fix")

   > **ⓘ** The input content is irrelevant but must meet validation constraints. For example, the severity must contain at least 3 characters.

1. Click **Submit for Triaging** at the bottom of the page when all required information is set.

   ![Submit for triage](/integrations/Create-test-finding-submit-for-triage.png "Submit for triage")

1. The pentest finding is now in the **Triaging** state.

   !['Triaging' finding](/integrations/Create-test-finding-vuln-triaging.png "'Triaging' finding")

1. Change the finding state to **Pending Fix** from the **State** dropdown and submit the evaluation.

   ![Select 'Pending Fix' state](/integrations/Create-test-finding-select-pending-fix-state.png "Select 'Pending Fix' state")

1. Set the **Likelihood** and the **Business Impact** values by clicking the circles (**●**) and then the **Submit evaluation** button.

   ![Submit evaluation](/integrations/Create-test-finding-submit-evaluation.png "Submit evaluation")

1. The pentest finding is now in the **Pending Fix** state.

   !['Pending Fix' finding](/integrations/Create-test-finding-pending-fix-vuln.png "'Pending Fix' finding")

1. View all pentest findings.

   ![In-House pentest findings](/integrations/Create-test-finding-pentest-vulns.png "In-House pentest findings")
