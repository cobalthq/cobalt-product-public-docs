---
title: "Integrate with Azure DevOps"
linkTitle: "Integrate with Azure DevOps"
weight: 50
description: >
  Connect your Azure DevOps environment to your Cobalt Organization in order to use the integration to sync pentest findings as work items.
---

## Set Up Connection

As an [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) or [Member](/platform-deep-dive/collaboration/user-roles/#organization-member), you can set up a connection to your Azure DevOps environment by: 

1. In Cobalt, go to **Integrations** > **Azure DevOps Boards**.
2. On the **Connection** tab, click **Add Connection**.
3. In the **Configure Connection with Azure DevOps Boards** form of the overlay, enter:
   - OAuth 2.0 grant type
   - Organization: Your Azure DevOps Organization ID (`https://dev.azure.com/{yourOrganization}`)
   - API Version: 7.0
   - Username: Your account email address in Azure DevOps
   - Personal Access Token: Your Azure DevOps [personal access token](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows)
4. Click **Done**.

Return to the Cobalt app, and check the integration status. You should see *Integration Status: Connected* on the **Azure DevOps Boards > Connection** page.

When you’re done, [configure the integration](/integrations/azure-devops/push-findings/#configure-the-integration-for-a-pentest) for specific pentests.

## Update Connection

To update your Azure DevOps connection:

1. In Cobalt, go to **Integrations** > **Azure DevOps Boards** > **Connection**, and click **Manage Connection** on the top right.
2. Click **Disconnect** to turn off your existing connection.
3. Update configuration parameters as needed, following the steps in [Set Up Azure DevOps Connection](/integrations/azure-devops/integrate-with-azure-devops/#set-up-connection).

## Delete Connection

You can delete the integration with Azure DevOps.

1. In Cobalt, navigate to **Integrations** > **Azure DevOps Boards**, and select **Manage Connection**.
2. In the overlay that appears, click **Delete** and confirm.

Here’s what to expect once you’ve deleted the connection:
- Data synchronization between Cobalt and Azure DevOps stops.
- All Azure DevOps configurations for specific pentests are deleted. If you decide to reestablish the connection, you need to reconfigure the integration for each pentest.
- Any previously created work items will remain in Azure DevOps. 
