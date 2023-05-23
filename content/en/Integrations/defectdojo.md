---
title: "Import Cobalt Findings into DefectDojo"
linkTitle: "DefectDojo"
weight: 40
description: >
 Set up an integration with DefectDojo.
---

{{% pageinfo %}}
Configure the integration to import Cobalt findings into the DefectDojo platform. The availability of this feature depends on your [PtaaS tier](/platform-deep-dive/credits/ptaas-tiers/).
{{% /pageinfo %}}

In this article:
- [Integration Overview](#integration-overview)
- [Before You Start](#before-you-start)
- [Step 1: Add a Tool Type](#step-1-add-a-tool-type)
- [Step 2: Add a Tool Configuration](#step-2-add-a-tool-configuration)
- [Step 3: Add an API Scan Configuration](#step-3-add-an-api-scan-configuration)
- [Step 4: Import Findings](#step-4-import-findings)

## Integration Overview

[DefectDojo](https://github.com/DefectDojo/django-DefectDojo) is a security orchestration and vulnerability management platform. It's a free open source tool that allows you to manage your application security program and streamline your DevSecOps workflows.

You can retrieve [findings](/platform-deep-dive/pentests/findings/) data from Cobalt using the API and import it into DefectDojo. Then you can manage, analyze, and triage vulnerabilities using reports, metrics, templates, and other tools available in DefectDojo.

## Before You Start

To configure the integration, you need the following:

- **Cobalt API token**. Learn [how to create an API token](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui).
- **Cobalt organization token**. Learn [how to retrieve an organization token](https://docs.cobalt.io/v1/#organizations) using the Cobalt API v1.
  - Make sure that you use the [Cobalt API v1](https://docs.cobalt.io/v1) and not v2. This integration doesn't support organization tokens from the API v2.
- **Asset identifier in Cobalt**. You can get an asset ID in two ways:
  - In the Cobalt app, go to **Assets**, navigate to the asset page, and copy the ID from the URL. For example, the asset ID in this example URL `https://app.cobalt.io/organization/assets/as_KoEUfS0` is `as_KoEUfS0`.
  - [Retrieve your assets](https://docs.cobalt.io/v1/#assets) using the Cobalt API, and find the asset ID in the API response.

## Step 1: Add a Tool Type

If you already have a tool type for Cobalt, you can skip this step and go to [step 2](#step-2-add-a-tool-configuration).

1. In DefectDojo, on the sidebar, select **Configuration** > **Tool Type**.
1. From the menu in the upper-right corner, select **Add Tool Type**.<br><br>
    ![Add a tool type in DefectDojo](/integrations/DefectDojo-add-tool-type-1.png "Add a tool type in DefectDojo")
1. On the configuration screen, enter:
    - **Name**: Cobalt.io
    - (Optional) **Description**: You can add a meaningful description such as "Pentesting."
1. Select **Submit**.<br><br>
    ![Configure a tool type in DefectDojo](/integrations/DefectDojo-add-tool-type-2.png "Configure a tool type in DefectDojo")

You should land on the screen showing your tool types.

![Tool type list in DefectDojo](/integrations/DefectDojo-add-tool-type-3.png "Tool type list in DefectDojo")

## Step 2: Add a Tool Configuration

You can create multiple tool configurations for Cobalt. The process of adding a new configuration is the same, regardless of whether you have existing configurations or not.

1. On the sidebar, select **Configuration** > **Tool Configuration**.
1. From the menu in the upper-right corner, select **Add Tool Configuration**.<br><br>
    ![Add a tool configuration in DefectDojo](/integrations/DefectDojo-add-tool-configuration-1.png "Add a tool configuration in DefectDojo")
1. On the configuration screen, enter:
    - **Name**: Enter a meaningful name for your tool configuration.
    - **Tool Type**: Select **Cobalt.io**.
    - **Authentication Type**: Select **API Key**.
    - **Extras**: Enter your [Cobalt organization token](#before-you-start).
    - **API Key**: Enter your [Cobalt API key](#before-you-start).
1. Select **Submit**.<br><br>
    ![Tool configuration parameters in DefectDojo](/integrations/DefectDojo-add-tool-configuration-2.png "Tool configuration parameters in DefectDojo")

You should land on the screen showing your tool type configurations. If needed, you can edit your configurations from here.

![Tool configuration list in DefectDojo](/integrations/DefectDojo-add-tool-configuration-3.png "Tool configuration list in DefectDojo")

## Step 3: Add an API Scan Configuration

You can create multiple API scan configurations for Cobalt. The process of adding a new configuration is the same, regardless of whether you have existing configurations or not.

1. Navigate to the product for which you want to import findings from Cobalt.
1. Go to **Settings** > **Add API Scan Configuration**.<br><br>
    ![Add an API scan configuration in DefectDojo](/integrations/DefectDojo-add-api-scan-configuration-1.png "Add an API scan configuration in DefectDojo")
1. On the configuration screen, enter:
    - **Tool Configuration**: Select the [tool configuration](#step-2-add-a-tool-configuration) you created.
    - **Service Key**: Enter an [asset ID](#before-you-start) from Cobalt.
1. Select **Save**.<br><br>
    ![API scan configuration parameters in DefectDojo](/integrations/DefectDojo-add-api-scan-configuration-2.png "API scan configuration parameters in DefectDojo")

You should land on the screen showing your API scan configurations. If needed, you can edit your configurations from here.

![API scan configurations list in DefectDojo](/integrations/DefectDojo-add-api-scan-configuration-3.png "API scan configurations list in DefectDojo")

## Step 4: Import Findings

1. Navigate to the engagement for which you want to import findings.
1. Under **Tests**, select **Import Scan Results** from the three-line menu.<br><br>
    ![Import scan results in DefectDojo](/integrations/DefectDojo-import-findings-1.png "Import scan results in DefectDojo")
1. On the configuration screen, enter:
    - **Scan type**: Select **Cobalt.io API Import**.
    - Complete the required fields, and fill in optional fields if needed.<br><br>
    ![Configuration parameters for importing scan results in DefectDojo](/integrations/DefectDojo-import-findings-2.png "Configuration parameters for importing scan results in DefectDojo")
    - (If you have multiple API scan configurations) **API Scan Configuration**: Select an [API scan configuration](#step-3-add-an-api-scan-configuration) that you added earlier. Skip this step if you only have one configuration.<br><br>
    ![Select an API scan configuration in DefectDojo](/integrations/DefectDojo-import-findings-3.png "Select an API scan configuration in DefectDojo")
1. Select **Import**, and wait for DefectDojo to run API requests to fetch findings for the Cobalt asset you selected.

You should land on the page with imported Cobalt findings. Now you can analyze this data using DefectDojo tools.

![Cobalt findings imported to DefectDojo](/integrations/DefectDojo-import-findings-4.png "Cobalt findings imported to DefectDojo")
