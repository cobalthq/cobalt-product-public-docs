---
title: "Migrate from native Jira Cloud to Integration Builder"
linkTitle: "Migrate from native Jira Cloud to Integration Builder"
weight: 50
description: >
  Learn how to migrate from the native Jira Cloud integration to the Integration Builder.
---

{{% pageinfo %}}

This guide is designed to assist organizations in transitioning from the native **Jira Cloud** integration to the new recipe-based integration created by the [**Integration Builder**](https://docs.cobalt.io/integrations/integrationbuilder/).

TODO: fix link! must be relative!

> ⚠️ Please note that this migration guide is not applicable if your organization uses a native **Jira Server** or a **Jira Data Center** integration.

{{% /pageinfo %}}

## Overview

The document offers detailed, step-by-step instructions on utilizing **Integration Builder** recipes to establish bidirectional synchronization between a Cobalt pentest finding and a Jira issue. The level of automation in your workflow is directly related to the number of recipes you configure to tailor the behavior to your specific requirements.

We've added a variety of pre-built recipes to the Integration Builder's library to facilitate seamless bidirectional synchronization between your Jira Cloud and the Cobalt Platform. Depending on your workflow, you can choose to configure and use a subset of these recipes. The recipes are categorized into three groups:

1. [Push finding from the Cobalt Platform to Jira Cloud](#push-finding-from-the-cobalt-platform-to-jira-cloud)
1. Updating the Cobalt Platform from Jira Cloud
1. Updating Jira Cloud from the Cobalt Platform

Different types of recipes call for different Jira Cloud workflow configurations. For instance, creating a Jira issue when a pentest vulnerability is discovered requires no additional workflow customization. However, if you wish to update your Jira issue from the Cobalt Platform, your Jira Cloud workflow needs specific [issue statuses](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-statuses-priorities-and-resolutions/#Issue-statuses). Additionally, if you want to update your Jira issue based on changes in the Cobalt Platform findings, you need to set up [transitions in your Jira workflow](https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows). This documentation will provide an example and cover the required Jira workflow changes later on.

## Migration

> ❗ Do not migrate the native Jira Cloud integration to the **Integration Builder** when the pentest is in the **live** state.

### Introduction

To better understand the required migration steps and the recipes' configuration, this tutorial provides an introduction to a sample Jira Cloud project using the default [Kanban](https://www.atlassian.com/software/jira/templates/kanban) template. Let's assume that the workflow for the **Task** issue type of this sample project includes the following statuses:

![Sample Jira Cloud project workflow - Initial state](/integrations/Jira-Cloud-migration-sample-jira-cloud-project-workflow-initial-state.png "Sample Jira Cloud project workflow - Initial state")

- **To Do** (_default_, 'To do' category)
- **In Progress** (_default_, 'In progress' category)
- **Acceptance Testing** (_custom_, 'In progress' category)
- **Done** (_default_, 'Done' category)
- **Won't Do** (_custom_, 'Done' category)

Now, assuming that this project is already set up with native Jira Cloud integration in the Cobalt application. The native Jira Cloud integration does the following:

![Native Jira Cloud configuration](/integrations/Jira-Cloud-migration-native-jira-cloud-configuration.png "Native Jira Cloud configuration")

1.  In the _Native Jira Cloud_ project
1.  Create a **Task** Jira issue

    > ℹ️ The **Task** can be created via auto-push if configured for the pentest or manually from the pentest finding page.

1.  When a pentest finding is submitted and is in the **Pending Fix** state.
1.  Update the pentest finding to the **Ready for Retest** state when the Jira **Task** status changes to **Acceptance Testing**.
1.  Update the pentest finding to the **Accepted Risk** state when the Jira **Task** status changes to **Won't Do**.

### Push finding from the Cobalt Platform to Jira Cloud

#### Use the recipe

1. Open the **Integrations** page from the sidebar and select **Integration Builder** tile.

   ![Open Integration Builder](/integrations/Jira-Cloud-migration-open-integration-builder.png "Open Integration Builder")

1. Open the **Library** tab, search for the **[Cobalt > Jira Cloud] Push pentest finding to Jira** recipe by specifying _push pentest finding jira_ and pressing <kbd>Enter</kbd>. Select the recipe by clicking on the recipe tile.

   ![Search recipe](/integrations/Jira-Cloud-migration-search-recipe.png "Search recipe")

1. Click on the **Use this recipe** button to save a copy of recipe into your workspace.

   ![Use recipe](/integrations/Jira-Cloud-migration-use-recipe.png "Use recipe")

1. Select the **Cobalt** folder to save a copy of the recipe and click on **Save and copy**.

   > ℹ️ You can select any arbitrary folder to save a copy of the recipe.

   > ℹ️ You can create a new folder before saving a copy of any recipes. To do so, click on the **Projects** tab in the **Integration Builder** and click on the plus sign (**+**) to **Create folder** from the project explorer sidebar.

   ![Save and copy](/integrations/Jira-Cloud-migration-save-and-copy.png "Save and copy")

1. Click on **Customize recipe** to adjust the pre-build recipe template to your Jira Cloud configuration.

   > ℹ️ The recipe is not ready for use yet. It needs the Jira Cloud project configuration, including the project name and the task Jira issue type to create.

   ![Customize recipe](/integrations/Jira-Cloud-migration-customize-recipe.png "Customize recipe")

#### Customize the recipe

1. To configure the recipe's run condition, select the recipe **Trigger** in the editor and select a pentest from the list.

   > ℹ️ By default, this recipe will be activated whenever there is a change in the status of any pentest finding within the Cobalt Platform. Once a specific pentest is chosen from the list, the recipe will only be triggered if the status change involves a finding related to the selected pentest. If it doesn't, the recipe will not be activated.

   ![Configure finding state change trigger](/integrations/Jira-Cloud-migration-configure-finding-state-change-trigger.png "Configure finding state change trigger")

1. To customize the issue creation in Jira Cloud, select the **Create issue in Jira** action and configure your Jira Cloud **Project issue type** from the dropdown.

   ![Select project issue type](/integrations/Jira-Cloud-migration-select-project-issue-type.png "Select project issue type")

1. To customize the external ticket reference in Cobalt, select the **Create external ticket reference in Cobalt** actions.

This action creates the external ticket reference in the Cobalt Platform. The following properties are required:

|                      |                                                                                                                                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Title**            | This property defines the appearance of the external ticket reference UI component in the Cobalt application. It is recommended to keep the default value and use the **Key** **datapill** of the Jira issue.                                                                                                   |
| **Ticketing System** | Must be set to **Jira**. Please do not modify the default value.                                                                                                                                                                                                                                                |
| **External URL**     | The URL should point to your Jira issue. It is recommended to use the `https://YOUR_DOMAIN.atlassian.net/browse/` text along with the **Key** **datapill** of the Jira issue.                                                                                                                                   |
| **External ID**      | If you do not plan to move the Jira issues between projects, please leave the value as is and use the **Key** **datapill** of the Jira issue. However, if you might plan to move the Jira issues between projects in the future, you must use the **ID** **datapill** of the Jira issue instead of the **Key**. |
| **Finding ID**       | The ID of the pentest finding. It is already configured, so please do not make any changes to it.                                                                                                                                                                                                               |

![Configure External URL](/integrations/Jira-Cloud-migration-configure-external-url.gif "Configure External URL")

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

   > ℹ️ Alternatively, you can request your customer success manager to create a test organization for you. You can then use an **In-House** pentest with dummy pentest findings data to test your integration in a non-production environment. **In-House pentests do not consume credits.** You can run as many pentests as you want. For more details on how to generate test findings for an **In-House** pentest, click [here](../integrations/development/create-test-finding).

TODO: fix link!

{{% /expand %}}
<br>
{{%expand "Can I customize the Jira issue when pushing the pentest finding to Jira Cloud?" %}}
<br>

Yes.

The recipe automatically uses the **Title** and **Tag** properties of the pentest finding to generate the **Summary** of the Jira issue. For instance, `My Test Finding-#PT25715_3`. You can use any text or **datapill** to create a **Summary** tailored to specific needs.

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

   > ℹ️ The number of the available optional fields may very based on your Jira Cloud project.

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
{{%expand "What is the difference between the Jira issue Key and ID?" %}}

Issues are identified by a **key** such as `ABC-123`, which specifies the project it belongs to with the project's **key** (`ABC`) as the first part of the issue key, followed by a sequentially assigned number starting from 1 within that project. If an issue is moved to another project, its issue **key** will change accordingly.

Each issue also has an issue **ID**, which is a numeric identifier assigned sequentially across all projects. The issue **ID** remains unchanged, even if the issue is moved to a different project. Other information linked to the issue, such as attachments or people involved, can reference the issue **ID** and does not require updating if the issue is moved to another project. The issue **key**, on the other hand, quickly indicates the project to which the issue belongs.

> ⚠️ If you plan to move Jira issues between projects, always use the Jira issue **ID** as the **External ID** when creating external ticket references or searching for them.

![Change External ID](/integrations/Jira-Cloud-migration-change-external-id.gif "Change External ID")

<br>
{{% /expand %}}

![title](/integrations/Jira-Cloud-migration-title.png "title")
