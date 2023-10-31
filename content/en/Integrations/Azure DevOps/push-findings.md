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
2. For the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").<br><br>
    ![Azure DevOps configuration gear icon](/integrations/ADO-integration-configuration-status-gear-icon.png "Azure DevOps configuration gear icon")
3. For the **Create Work Items for Findings** sync, click **Edit**.<br><br>
    ![Azure DevOps syncs edit](/integrations/ADO-integration-syncs-edit-button.png "Azure DevOps syncs edit")
4. In the workflow editor overlay that appears, configure the integration parameters:
   1. Open the **Create Work Item in Azure DevOps** action.<br><br>
    ![Create work item in Azure DevOps](/integrations/ADO-documentation-configuration-embed-create-work-item.png "Create work item in Azure DevOps")
    2. Select values for the required (*) parameters: **Project, Work Item Type, Title, State**. New work items created for findings in this pentest will be based on these selections.<br><br>
    ![Select values for required parameters](/integrations/ADO-documentation-required-parameters.png "Select values for required parameters")
    3. Provide values for any other required fields in your work item template. Required fields will be marked with a red asterisk (*).
    4. Set values for any other optional fields. If a field in your work item template is not visible in the form, click **Show optional fields** at the top of the input form, and select the appropriate fields from the list.<br><br>
    ![Select values for optional fields](/integrations/ADO-documentation-configuration-embed-optional-fields.png "Select values for optional fields")<br><br>
    ![Select values for optional fields overlay](/integrations/ADO-documentation-configuration-embed-optional-fields-overlay.png "Select values for optional fields overlay")
6. Click **Save** in the workflow editor to save your entries.<br><br>
    ![Save Azure DevOps recipe](/integrations/ADO-documentation-configuration-embed-click-save.png "Save Azure DevOps recipe")
7. Close the workflow editor by clicking **Done**.<br><br>
    ![Click Done to close workflow editor](/integrations/ADO-documentation-configuration-embed-click-done.png "Click Done to close workflow editor")
8. To enable the sync for the pentest, activate the toggle for **Create Work Items for Findings**.<br><br>
    ![Azure DevOps syncs switch off](/integrations/ADO-integration-syncs-switch-off.png "Azure DevOps syncs switch off")

## Set Work Item Field Values

You can set values for any field in your work item type template. In the **Create Work Item in Azure DevOps** action, once you’ve selected the **Project** and **Work Item Type**, all fields in the work item type template will be presented in the form. Values can be entered as:
- **Static** text values will be passed for every work item created for the pentest.
- **Dynamic** values can be entered using datapills, and will populate the input with parameters for the specific finding for which the work item is created.  
- **Combination** of static text and datapills to combine and format multiple parameters.

To set dynamic values:
1. Click into the desired field.
2. In the Recipe data window, open **Parameters** > **Finding**, and click the desired parameter to populate the datapill into the field.<br><br>
    ![Populate values with datapill](/integrations/ADO-documentation-configuration-embed-datapill.png "Populate values with datapill")

## Update the Configuration for a Pentest

To modify the configuration for a pentest: 

1. In Cobalt, go to **Integrations** > **Azure DevOps Boards** > **Configuration**. 
2. For the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
3. For the **Create Work Items for Findings** sync, if the sync is enabled (indicated by a blue toggle), disable it by toggling it to a gray state.<br><br>
    ![Azure DevOps syncs switch on](/integrations/ADO-integration-syncs-switch-on.png "Azure DevOps syncs switch on")
4. Select **Edit**.
5. Follow the steps in [Configure the Integration for a Pentest](/integrations/azure-devops/push-findings/#configure-the-integration-for-a-pentest) to change configuration options.

## Deactivate the Integration for a Pentest

You can manage Azure DevOps connections for specific pentests:
1. View the connection status in **Integrations** > **Azure DevOps Boards** > **Configuration**.<br><br>
    ![Azure DevOps status green](/integrations/ADO-integration-configuration-status-green.png "Azure DevOps status green")
2. Next to a pentest with the integration enabled (where the Status indicator is green), select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
3. For any sync that is enabled (indicated by a blue toggle), disable it by toggling it to a gray state.<br><br>
![Azure DevOps syncs switch on](/integrations/ADO-integration-syncs-switch-on.png "Azure DevOps syncs switch on")
4. Click the back arrow ![ArrowLeft icon](/icons/ArrowLeft.png "ArrowLeft icon") icon to return to the list.
5. The Status indicator will now display in gray.<br><br>
![Azure DevOps status gray](/integrations/ADO-integration-configuration-status-grey.png "Azure DevOps status gray")
