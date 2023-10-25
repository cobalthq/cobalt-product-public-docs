---
title: "Push Findings to Azure DevOps"
linkTitle: "Push Findings to Azure DevOps"
weight: 50
description: >
  Once you’ve connected your Azure DevOps instance, you can configure pentests to push findings to an ADO Team Project.
---

## Configure the Integration for a Pentest

Once you’ve connected your Azure DevOps instance, configure the integration for specific pentests.

1. In Cobalt, go to **Integrations** > **Azure DevOps Boards** > **Configuration**. Here, you can see pentests for which you can configure the integration.
2. For the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
3. For the **Create tickets for findings** sync, click **Edit**.
4. In the workflow editor overlay that appears, configure the integration parameters:
- Open the **Create Work Item in Azure DevOps** action.
- Select values for the required (*) parameters: **Project, Work Item Type, Title, State**. New work items created for findings in this pentest will be based on these selections.
- Provide values for any other required fields in your work item template. Required fields will be marked with a red asterisk (*).
- Set values for any other optional fields. If a field in your work item template is not visible in the form, click **Show optional fields** at the top of the input form, and select the appropriate fields from the list.
5. Click **Save** in the workflow editor to save your entries.
6. Close the workflow editor by clicking **Done**.
7. To enable sync for the pentest, activate the toggle for **Create tickets for findings**.

## Set Work Item Field Values

You can set values for any fields in your work item type template. In the **Create Work Item in Azure DevOps** action, once you’ve selected the **Project** and **Work Item Type**, all fields in the work item type template will be presented in the form. Values can be entered as:
- **Static** text values will be passed for every work item created for the pentest.
- **Dynamic** values can be entered using datapills, and will populate the input with parameters for the specific finding for which the work item is created.  
- **Combination** of static text and datapills to combine and format multiple parameters.

To set dynamic values:
1. Click into the desired field.
2. In the Recipe data window, open **Parameters** > **Finding**, and click the desired parameter to populate the datapill into the field.

## Update the Configuration for a Pentest

To modify the configuration for a pentest: 

1. In Cobalt, go to **Integrations** > **Azure DevOps Boards** > **Configuration**. 
2. For the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
3. For the **Create tickets for findings** sync, if the sync is enabled (indicated by a blue toggle), disable it by toggling it to a gray state.
4. Select **Edit**.
5. Follow the steps in [Configure the Integration for a Pentest](/integrations/azure-devops/push-findings/#configure-the-integration-for-a-pentest) to change configuration options.

## Deactivate the Integration for a Pentest

You can manage Azure DevOps connections for specific pentests:
1. View the connection status in **Integrations** > **Azure DevOps Boards** > **Configuration**. 
2. Next to a pentest with the integration enabled (where the Status indicator is green), select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
3. For any sync that is enabled (indicated by a blue toggle), disable it by toggling it to a gray state.
4. Click the back arrow ![ArrowLeft icon](/icons/ArrowLeft.png "ArrowLeft icon") icon to return to the list.
5. The Status indicator will now display in gray.
