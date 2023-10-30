---
title: "Troubleshooting"
linkTitle: "Troubleshooting"
weight: 50
description: >
  Troubleshoot common issues with the Azure DevOps integration.
---

## Clear Cobalt Session Cookies

1. Launch Chrome and navigate to the Cobalt application (https://app.us.cobalt.io).
2. On the left side of the address bar, click the Site Information icon, then select **Cookies and site data**.<br><br>
    ![Site information](/integrations/ADO-integration-troubleshoot-clear-cookies-cookies-site-data.png "Site information")
3. Click **Manage cookies and site data**.<br><br>
    ![Manage cookies and site data](/integrations/ADO-integration-troubleshoot-clear-cookies-manage.png "Manage cookies and site data")
4. From the popup, click the trash icon beside `app.us.cobalt.io` to delete the cookie.<br><br>
    ![Cookies and site data](/integrations/ADO-integration-troubleshoot-clear-cookies-delete.png "Cookies and site data")
5. Click the **Done**.

## Check the Health of the Integration

If the integration is not functioning as expected, you can check the health and get detailed performance information through the following steps:  

1. Go to **Integrations** > **Azure DevOps Boards** > **Configuration**, and for the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
2. For the **Create tickets for findings** sync, click **Edit**.
3. In the workflow window, select **Jobs** from the tab bar.

## Configuration Forms Do Not Appear

The forms do not appear when attempting to set up a connection or configure Azure DevOps for a pentest.

Possible reasons:
- Blocked cookies: If your browser is set to block all third-party cookies, you must allow cookies for `cobalt.io` by following [these instructions](https://support.google.com/chrome/answer/95647?sjid=8733712878597538106-NA#zippy=%2Callow-or-block-third-party-cookies%2Callow-third-party-cookies-for-a-specific-site). 
- Outdated cookies: If this is your first time using the Azure DevOps integration in the Cobalt platform, you must first [clear Cobalt session cookies](/integrations/azure-devops/troubleshoot-azure-devops-integration/#clear-cobalt-session-cookies).

## Work Items Are Not Being Created

Azure DevOps integration is enabled for the pentest but work items are not being created when findings are moved to Pending Fix.

Possible reasons:  
- **Personal Access Token (PAT) expired**: Your Azure DevOps PAT may need to be refreshed.  
- **Azure DevOps permissions**: Ensure the account used to authenticate to your Azure DevOps environment has the necessary permissions to create the selected work item type within the Project specified for the pentest.  
- **Cobalt user access**: Check that the Azure DevOps connection owner (Cobalt user who initially set up the Azure DevOps integration) has access to the pentest. If the connection owner is not a Team Member for the pentest, the integration will not have permission to view pentest details. 
- **Work item required fields**: Check that all required fields have a value.
- **Work item workflow rules**: Verify that work item workflow rules do not disable fields that are passed by the integration. 

You can also [check if there is an error with an integration](/integrations/azure-devops/troubleshoot-azure-devops-integration/#check-thehealth-of-the-integration) from the integration configuration screen.

If you experience an error not covered by the solutions above, please reach out to your CSM or the Integrations team at [integrations@cobalt.io](mailto:integrations@cobalt.io)

## Revert a Change

The integration stopped working after making a change in the configuration.

If you modified a configuration and the integration is not working, you can revert to a previous version by:
1. Going to **Integrations** > **Azure DevOps Boards** > **Configuration**, and for the desired pentest, selecting the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
2. For the “Create tickets for findings” sync, click **Edit**.
3. In the workflow window, select **Versions** from the tab bar.
4. Select a version of the recipe prior to the change you suspect caused the problem.<br><br>
    ![Azure DevOps recipe versions](/integrations/ADO-interation-show-recipe-versions.png "Azure DevOps recipe versions")
5. Click **Restore this version** to revert to the selected version.<br><br>
    ![Azure DevOps restore recipe version](/integrations/ADO-integration-restore-recipe-version.png "Azure DevOps restore recipe version")
6. Restart the recipe.
