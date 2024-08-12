---
title: "Migrate to Integration Builder"
linkTitle: "Migrate to Integration Builder"
weight: 50
description: >
  Migrate from the native Jira Cloud integration to the Integration Builder.
---

{{% pageinfo %}}

This guide is designed to help organizations transition from our native **Jira Cloud** integration to our highly customizable [**Integration Builder**](/integrations/integrationbuilder/).

> ⚠️ This migration guide is not applicable if your organization uses **Jira Server** or **Jira Data Center**.

> ⚠️ The Integration Builder is currently in Open Beta status. We do not recommend that all users migrate to the Integration Builder at this time. We recommend that you migrate to the Integration Builder if our current generally-available Jira integration does not meet your needs.

{{% /pageinfo %}}

## Overview

This document offers detailed, step-by-step instructions on utilizing **Integration Builder** recipes to establish synchronization between Cobalt pentest findings and Jira Cloud issues.
The level of automation in your workflow is directly related to the number of recipes you configure to tailor the behavior to your specific requirements.

We've added a variety of pre-built recipe templates to the Integration Builder's library to facilitate seamless bidirectional synchronization between your Jira Cloud instance and the Cobalt Platform. Depending on your workflow, you can choose to configure and use a subset of these recipe templates. The recipe templates are categorized into three groups:

1. [Push finding from the Cobalt Platform to Jira Cloud](#push-finding-from-the-cobalt-platform-to-jira-cloud)
1. [Update the Cobalt Platform from Jira Cloud](#update-the-cobalt-platform-from-jira-cloud)
1. [Update Jira Cloud from the Cobalt Platform](#update-jira-cloud-from-the-cobalt-platform)

Different types of recipes call for different Jira Cloud workflow configurations.
For instance, creating a Jira issue when a pentest finding is moved to the Pending Fix state requires no additional workflow customization.
However, if you wish to update the pentest finding's state in the Cobalt Platform when the Jira issue's status changes, your workflow must contain specific [issue statuses](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-statuses-priorities-and-resolutions/#Issue-statuses).
Additionally, if you want to update your Jira issue's status based on the pentest finding's state changes, you need to set up [transitions in your Jira workflow](https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows). This documentation will provide an example and cover the required Jira workflow changes later on.

## Migration

> ❗ Do not migrate a pentest from the native Jira Cloud integration to the **Integration Builder** when the pentest is in the **live** state.

### Introduction

To better understand the required migration steps and the recipes' customization, this tutorial provides an introduction to a sample Jira Cloud project using the default [Kanban](https://www.atlassian.com/software/jira/templates/kanban) template. Let's assume that the workflow for the **Task** issue type of this sample project includes the following statuses:

#### Initial Jira workflow

![Sample Jira Cloud project workflow - Initial state](/integrations/Jira-Cloud-migration-sample-jira-cloud-project-workflow-initial-state.png "Sample Jira Cloud project workflow - Initial state")

#### Jira workflow statuses

- **To Do** (_default_, 'To do' category)
- **In Progress** (_default_, 'In progress' category)
- **Acceptance Testing** (_custom_, 'In progress' category)
- **Done** (_default_, 'Done' category)
- **Won't Do** (_custom_, 'Done' category)

Assuming that this project is already set up with the native Jira Cloud integration in the Cobalt application, the native Jira Cloud integration does the following:

![Native Jira Cloud configuration](/integrations/Jira-Cloud-migration-native-jira-cloud-configuration.png "Native Jira Cloud configuration")

1.  Creates a **Task** Jira issue for a finding when it is moved to the Pending Fix state

    > ℹ️ The **Task** can be created via auto-push if configured for the pentest or manually from the pentest finding page.

1.  Updates the pentest finding to the **Ready for Retest** state when the Jira **Task** status changes to **Acceptance Testing**.
1.  Updates the pentest finding to the **Accepted Risk** state when the Jira **Task** status changes to **Won't Do**.

### Push finding from the Cobalt Platform to Jira Cloud

#### Use the recipe

1. Open the **Integrations** page from the sidebar and select **Integration Builder** tile.

   ![Open Integration Builder](/integrations/Jira-Cloud-migration-open-integration-builder.png "Open Integration Builder")

1. Open the **Library** tab, search for the **[Cobalt > Jira Cloud] Push pentest finding to Jira** recipe by specifying _push pentest finding jira_ and pressing <kbd>Enter</kbd>. Select the recipe by clicking on the recipe tile.

   ![Search recipe](/integrations/Jira-Cloud-migration-search-recipe.png "Search recipe")

1. Click on the **Use this recipe** button to save a copy of the recipe into your workspace.

   ![Use recipe](/integrations/Jira-Cloud-migration-use-recipe.png "Use recipe")

1. Select the **Cobalt** folder as the copy destination then click on **Save and copy**.

   > ℹ️ You can select any arbitrary folder to save a copy of the recipe.

   > ℹ️ You can create a new folder before saving a copy of any recipes. To do so, click on the **Projects** tab in the **Integration Builder** and click on the plus sign (**+**) to **Create folder** from the project explorer sidebar.

   ![Save and copy](/integrations/Jira-Cloud-migration-save-and-copy.png "Save and copy")

1. Click on **Customize recipe** to adjust the pre-built recipe template to your Jira Cloud configuration.

   > ℹ️ The recipe is not ready for use yet. It needs the Jira Cloud project configuration, including the project name and the task Jira issue type to create.

   ![Customize recipe](/integrations/Jira-Cloud-migration-customize-recipe.png "Customize recipe")

#### Customize the recipe

> ⚠️ To customize the recipes, you need to have the **Jira** connection set up. If you haven't set up a [connection](/integrations/integrationbuilder/#connection) to your Jira Cloud instance using the **Jira** [connector](/integrations/integrationbuilder/#connector) yet, you can learn how to manage your **Integration Builder** connections [here](/integrations/integrationbuilder/connect-your-applications/).

1. To configure the recipe's run condition, select the recipe **Trigger** in the editor and select a pentest from the list.

   > ℹ️ By default, this recipe will be activated whenever there is a state change for any pentest finding within the Cobalt Platform. Once a specific pentest is chosen from the list, the recipe will only be triggered if the status change is for a finding related to the selected pentest. If it doesn't, the recipe will not be activated.
   
   ![Configure finding state change trigger](/integrations/Jira-Cloud-migration-configure-finding-state-change-trigger.png "Configure finding state change trigger")

1. To customize the issue creation in Jira Cloud, select the **Create issue in Jira** action and configure your Jira Cloud **Project issue type** from the dropdown.

   ![Select project issue type](/integrations/Jira-Cloud-migration-select-project-issue-type.png "Select project issue type")

1. To customize the external ticket reference in Cobalt, select the **Create external ticket reference in Cobalt** actions.

   This action creates the [external ticket reference](/integrations/integrationbuilder/how-to-guides/#external-ticket-references) in the Cobalt Platform. The following properties are required:

|                      |                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Title**            | This property defines the appearance of the external ticket reference UI component in the Cobalt application. It is recommended to keep the default value and use the **Key** **datapill** of the Jira issue.                                                                                                                                                                                           |
| **Ticketing System** | Must be set to **Jira**. Please do not modify the default value.                                                                                                                                                                                                                                                                                                                                        |
| **External URL**     | The URL should point to your Jira issue. It is recommended to use the `https://YOUR_DOMAIN.atlassian.net/browse/` text followed by the **Key** **datapill** of the Jira issue.                                                                                                                                                                                                                          |
| **External ID**      | If you do not plan to move the Jira issues between projects, please leave the value as is and use the **Key** **datapill** of the Jira issue. If you plan to integrate with multiple Jira instances then you **must** use the **Key** **datapill**.  If you plan to move the Jira issues between projects in the future, you must use the **ID** **datapill** of the Jira issue instead of the **Key**. |
| **Finding ID**       | The ID of the pentest finding. It is already configured, so please do not make any changes to it.                                                                                                                                                                                                                                                                                                       |

![Configure External URL](/integrations/Jira-Cloud-migration-configure-external-url.gif "Configure External URL")

1. **Save** the recipe changes, click on **Exit** to quit the recipe editor, and click **Start recipe** to start the recipe.

   ![Save and exit editor](/integrations/Jira-Cloud-migration-save-exit-start-recipe-1.png "Save and exit editor")

   ![Start recipe](/integrations/Jira-Cloud-migration-save-exit-start-recipe-2.png "Start recipe")

### Update the Cobalt Platform from Jira Cloud

There are two pre-built recipe templates available in the **Integration Builder** library that can be used to update the status of the pentest finding in the Cobalt Platform when the issue status changes in Jira Cloud.

| Name                                                                 | Description                                                                                                                          |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **[Jira Cloud > Cobalt] Move pentest finding to 'Ready for Retest'** | When the Jira Cloud issue status changes to a customer defined status, update the Cobalt pentest finding state to 'Accepted Risk'    |
| **[Jira Cloud > Cobalt] Move pentest finding to 'Accepted Risk'**    | When the Jira Cloud issue status changes to a customer defined status, update the Cobalt pentest finding state to 'Ready for Retest' |

1. [Use the recipe](#use-the-recipe) by saving a copy into your workspace and click on **Customize recipe** to configure it according to your Jira Cloud project issue type.
1. Configure the recipe trigger and specify a datetime before the pentest is launched.

   1. Select **New/updated issue in Jira** recipe **trigger** in the editor.
   1. Specify a datetime before your pentest is in the **live** state using the **From** setting.
      > ℹ️ The **From** setting allows recipes to retrieve past trigger events from a specified date and time. Instead of only picking up new trigger events (events created since the recipe was started), this setting enables the selection of events that have already occurred. When you start a recipe for the first time, it retrieves new or updated issues starting from the specified date and time. Once a recipe has been ran or tested, this value cannot be changed.
      >
      > In the example below, the trigger for new or updated Jira issues has a **From** date of 7 Aug 2024, midnight PST.
   1. **Refresh** the editor to resolve the validation errors in the recipe.

   ![Configure from setting](/integrations/Jira-Cloud-migration-configure-from-setting.png "Configure from setting")

1. Configure the recipe filter to only include issues from the relevant Jira Cloud project with a specified Jira issue status.

   1. Select the **IF condition** in the editor.
   1. Specify the expected Jira Cloud project **key** value. For example, `NJC`.
   1. Specify the **name** of the expected Jira issue status. For example, `Acceptance Testing`, based on the [example Jira workflow statuses](#jira-workflow-statuses).

   ![Issue filter condition](/integrations/Jira-Cloud-migration-issue-filter-condition.png "Issue filter condition")

   > ⚠️ Remember to use the exact case-sensitive label of the expected Jira status.
   >
   > You can check the workflow statuses in your Jira Cloud project:
   >
   > - Open the board of your Jira Cloud project.
   > - Click on the kebab menu (**⋯**).
   > - Select **Manage workflow**.
   > - Click on the expected status see its **name**.

   ![Manage workflow](/integrations/Jira-Cloud-migration-manage-workflow.png "Manage workflow")
   ![Manage statuses](/integrations/Jira-Cloud-migration-manage-statuses.png "Manage statuses")

   1. **Save** the editor, click on **Exit** to close the editor, and select **Start recipe**.

> ℹ️ Follow the same customization steps for the **[Jira Cloud > Cobalt] Move pentest finding to 'Accepted Risk'** recipe. Make sure to use the correct Jira issue status, such as `Won't Do`, as indicated in the [example Jira workflow](#jira-workflow-statuses).

### Update Jira Cloud from the Cobalt Platform

#### Manage Jira workflow transitions

> ⚠️ The **Integration Builder**-based Jira Cloud integration has more capabilities than the native Jira Cloud integration. It offers the ability to automatically update the status of your Jira Cloud issues when the state of the corresponding pentest finding changes. Configuring Jira workflow transitions is necessary for this functionality. Without a transition, the Jira issue status cannot be programmatically altered. Reference the official Jira Cloud documentation regarding [adding a new transition to a workflow](https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows/#Adding-a-transition-to-a-workflow) for more details.

Modify the example Jira workflow by adding the following workflow transitions:

| Transition    | Description                                                         |
| ------------- | ------------------------------------------------------------------- |
| `start_work`  | transition an issue from **To Do** to **In Progress**.              |
| `fix_issue`   | transition an issue from **In Progress** to **Acceptance Testing**. |
| `accept_fix`  | transition an issue from **Acceptance Testing** to **Done**.        |
| `reject_fix`  | transition an issue from **Acceptance Testing** to **In Progress**. |
| `accept_risk` | transition an issue from **In Progress** to **Won't Do**.           |

![Sample Jira Cloud project workflow - Modified state](/integrations/Jira-Cloud-migration-sample-jira-cloud-project-workflow-modified-state.png "Sample Jira Cloud project workflow - Modified state")

> ⚠️ By default, all Jira statuses allow issues from any other status to be moved into them. The **Any** Jira status label indicates this "global" transition capability. Although it's not mandatory, it's highly recommended to restrict issues from any status to move into them. This is to prevent accidental movements of Jira issues, such as moving from the **In Progress** status to the **Done** status, thereby avoiding invalid Jira transitions. An invalid Jira workflow transition, for example, would attempt to automatically change the pentest finding state from **Pending Fix** to **Fixed**, which is invalid and would consistently fail.
>
> - Select **Manage workflow** from your Jira Cloud board.
> - Select the Jira status, for example, **Won't Do**.
> - Uncheck the checkmark next to **Allow issues in any status to move to this one**.
> - Click on **Update workflow** to confirm the changes.
> - Apply the workflow updates on the appropriate Jira issue type.

![Disallow Any status](/integrations/Jira-Cloud-migration-disallow-any-status.png "Disallow Any status")

There are two pre-built recipe templates available in the **Integration Builder** library that can be used to update the status of an issue in Jira Cloud when the state of the pentest finding changes in the Cobalt Platform.

| Name                                                                                                 | Description                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Cobalt > Jira Cloud] Move Jira issue to 'In Progress' when fix for pentest finding was rejected** | When the Cobalt pentest finding state changes to 'Pending Fix' after the finding has been retested AND the Jira Cloud issue IS present, update the Jira issue status to 'In Progress' |
| **[Cobalt > Jira Cloud] Move Jira issue to 'Done' when pentest finding fixed**                       | When the Cobalt pentest finding state changes to 'Fixed', update the Jira Cloud issue status to 'Done'                                                                                |

1. [Use the recipe](#use-the-recipe) by saving a copy into your workspace and click on **Customize recipe** to configure it according to your Jira Cloud project issue type.
1. Customize the recipe trigger and filter the events by a pentest or by an asset. Reference the [recipe customization](#customize-the-recipe) section on how to configure the trigger.
1. Configure the recipe to update the Jira issue status to **In Progress**.

   1. Select the **Update status of issue in Jira** action.
   1. Specify the Jira workflow **Transition name** that will transition the issue from the **Acceptance Testing** status to the **In Progress** status. For example, `reject_fix`, based on the [example Jira workflow transitions](#manage-jira-workflow-transitions).

   ![Workflow transition name](/integrations/Jira-Cloud-migration-workflow-transition-name.png "Workflow transition name")

   > ⚠️ Remember to use the exact case-sensitive name of the expected Jira workflow transition.

   1. **Save** the editor, click on **Exit** to close the editor, and select **Start recipe**.

> ℹ️ Follow the same customization steps for the **[Cobalt > Jira Cloud] Move Jira issue to 'Done' when pentest finding fixed** recipe. Make sure to use the correct Jira workflow transition name, such as `accept_fix` to move the issue status from **Acceptance Testing** to **Done**, as indicated in the [example Jira workflow](#manage-jira-workflow-transitions).

## Frequently Asked Questions

Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> to view answers.

{{%expand "What should I do if the pentest does not exist in the Cobalt Platform at the time of the migration?" %}}
<br>

If the pentest does not exist in the Cobalt Platform at the time of the migration, you have the option to filter the trigger events by an asset.

1. Click on the **✕** next to your chosen pentest to remove it as a filter.
1. Choose the **+ 1 optional field available**.
1. Opt for **Asset** in the dialog.
1. Click on **Apply changes** to confirm the changes.
1. Pick an **Asset** from the list to narrow down the trigger events and filter for findings that are associated with any pentest of the selected asset.

   ![Discard pentest filter](/integrations/Jira-Cloud-migration-filter-by-asset-1.png "Discard pentest filter")

   ![Configure filtering by asset](/integrations/Jira-Cloud-migration-filter-by-asset-2.png "Configure filtering by asset")

   ![Select the asset](/integrations/Jira-Cloud-migration-filter-by-asset-3.png "Select the asset")

   > ℹ️ Alternatively, you can request your customer success manager to create a test organization for you. You can then use an **In-House** pentest with dummy pentest findings data to test your integration in a non-production environment. **In-House pentests do not consume credits.** You can run as many pentests as you want. For more details on how to generate test findings for an **In-House** pentest, click [here](/integrations/development/create-test-finding).

{{% /expand %}}
<br>
{{%expand "Can I customize the Jira issue when pushing the pentest finding to Jira Cloud?" %}}
<br>

Yes.

The recipe automatically uses the **Title** and **Tag** properties of the pentest finding to generate the **Summary** of the Jira issue. For instance, `My Test Finding - #PT25715_3`. You can use any text or **datapill** to create a **Summary** tailored to specific needs.

While the **Description** is not mandatory for creating a Jira issue, the recipe includes a default template. However, similar to the **Summary**, you can personalize the issue using any text or **datapill**.

> ℹ️ When hovering over a datapill, you can view its origin. For example, hovering over the **Title** **datapill** reveals that the value originates from the output of the second action: **Get pentest finding in Cobalt**, and it uses the **Title** property of the **Resource**.
>
> To understand the data structure of the **Resource** object representing a pentest finding, you may refer to the [Get a Finding](https://cobalt-public-api.netlify.app/v2/#get-a-finding) public API documentation.

![Hover datapill](/integrations/Jira-Cloud-migration-hover-datapill.gif "Hover datapill")

{{% /expand %}}
<br>
{{%expand "Does the Integration Builder-based Jira Cloud integration support custom required fields?" %}}
<br>

Yes.

Once you've chosen the Jira Cloud project and the issue type for the **Create issue in Jira** action, all custom required fields of the Jira issue will appear with an asterisk (**\***). You can then assign any value to them. For instance, you can set the pentest finding ID as the value of **my_required_field** by drag and dropping the **datapill** into the custom required field.

![Select datapill](/integrations/Jira-Cloud-migration-select-datapill.gif "Select datapill")

{{% /expand %}}
<br>
{{%expand "Does the Integration Builder-based Jira Cloud integration support custom labels?" %}}
<br>

Yes.

1. Select the **Create issue in Jira** action.
1. When the Jira Cloud project and the issue type is selected, scroll down to the bottom of the inputs part and click on **+ 11 optional fields available**.

   ![Add optional field](/integrations/Jira-Cloud-migration-use-labels-1.png "Add optional field")

   > ℹ️ The number of the available optional fields may vary based on your Jira Cloud project.

1. Choose the **Labels**.
1. Confirm the dialog by clicking on **Apply changes**.

   ![Select label](/integrations/Jira-Cloud-migration-use-labels-2.png "Select label")

1. Specify the **labels** separated by a comma.

   ![Specify labels](/integrations/Jira-Cloud-migration-use-labels-3.png "Specify labels")

   > ⚠️ The **labels** are separated by a **comma**. Do not use spaces or any other whitespace characters to separate the labels.
   >
   > ✅ Correct
   >
   > - `bug,Cobalt,security`
   >
   > ❌ Incorrect
   >
   > - `bug Cobalt security`
   > - `bug, Cobalt, security`
   > - `bug,Cobalt,security,`

{{% /expand %}}
<br>
{{%expand "What is the difference between the Jira issue key and ID?" %}}
<br>

Issues are identified by a **key** such as `ABC-123`, which specifies the project it belongs to with the project's **key** (`ABC`) as the first part of the issue key, followed by a sequentially assigned number starting from 1 within that project. If an issue is moved to another project, its issue **key** will change accordingly.

Each issue also has an issue **ID**, which is a numeric identifier assigned sequentially across all projects. The issue **ID** remains unchanged, even if the issue is moved to a different project. Other information linked to the issue, such as attachments or people involved, can reference the issue **ID** and does not require updating if the issue is moved to another project. The issue **key**, on the other hand, quickly indicates the project to which the issue belongs.

> ⚠️ If you plan to move Jira issues between projects, always use the Jira issue **ID** as the **External ID** when creating external ticket references or searching for them.

![Change External ID](/integrations/Jira-Cloud-migration-change-external-id.gif "Change External ID")

{{% /expand %}}
