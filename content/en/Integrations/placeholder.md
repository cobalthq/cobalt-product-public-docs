---
title: "PLACEHOLDER"
linkTitle: "Kenna Security"
weight: 70
description: >
  Set up an integration with Kenna Security.
---

{{% pageinfo %}}
Configure the integration to import Cobalt pentest findings into the Kenna Security platform.

You can also refer to the Kenna Security [documentation](https://github.com/KennaSecurity/toolkit/tree/main/tasks/connectors/cobaltio#readme).
{{% /pageinfo %}}

## Integration Overview

[Kenna Security](https://www.cisco.com/c/en/us/products/security/kenna-is-part-of-cisco.html) is a risk and vulnerability intelligence platform.

![Hero Image](static/deepdive/placeholder-image.png "Placeholder Hero Image")

You can retrieve [findings](/platform-deep-dive/pentests/findings/) data from Cobalt using the API and import it into Kenna Security. Then you can measure risk associated with vulnerabilities and prioritize remediation efforts on the Kenna Security platform.

## What You Need

To configure the integration, you need the following:

- **Cobalt API token**. Learn [how to create an API token](/cobalt-api/create-personal-api-token/).
- **Cobalt organization token**. Learn [how to retrieve an organization token](/cobalt-api/documentation/v1/#organizations) using the Cobalt API v1.
  - Make sure that you use the [Cobalt API v1](/cobalt-api/documentation/v1) and not v2. This integration doesn't support organization tokens from the API v2.
- **Kenna Security API key**. Learn [how to create an API key](https://help.kennasecurity.com/hc/en-us/articles/360029111331-API-Key-Generation-and-Permissions).
- **Kenna Security connector ID**. Create a Kenna Security Data Importer connector, and copy the connector ID as described in [step 1](#step-1-create-a-kenna-security-data-importer-connector).

## Step 1: Create a Kenna Security Data Importer Connector

We recommend creating a dedicated connector for importing Cobalt findings in Kenna Security, even if you already have other connectors configured.

1. In Kenna Security, select **Connectors**.<br><br>
  ![Select Connectors in Kenna Security](/integrations/Kenna-Security-create-data-importer-connector-1.png "Select Connectors in Kenna Security")
1. Select **Add Connector**.<br><br>
  ![Select Add Connector in Kenna Security](/integrations/Kenna-Security-create-data-importer-connector-2.png "Select Add Connector in Kenna Security")
1. Search for and select the **Kenna Data Importer** connector.<br><br>
  ![Select the Kenna Data Importer connector](/integrations/Kenna-Security-create-data-importer-connector-3.png "Select the Kenna Data Importer connector")
1. On the configuration page, enter a name for your connector, such as *Kenna Data Importer - Cobalt.io*. Select **Save**.<br><br>
  ![Connector configuration page in Kenna Security](/integrations/Kenna-Security-create-data-importer-connector-4.png "Connector configuration page in Kenna Security")
1. Select the connector you created.<br><br>
  ![Select the connector you created in Kenna Security](/integrations/Kenna-Security-create-data-importer-connector-5.png "Select the connector you created in Kenna Security")
1. Copy the connector ID. You will need it in [step 2](#step-2-get-the-kenna-security-toolkit-image).<br><br>
  ![Kenna Data Importer connector ID](/integrations/Kenna-Security-create-data-importer-connector-6.png "Kenna Data Importer connector ID")

## Step 2: Get the Kenna Security Toolkit Image

The Kenna Security Toolkit is wrapped in a container image. You can get it in two ways:

- [Pull the image from Docker Hub](#from-docker-hub)
- [Build the image from the source](#from-the-source)

### From Docker Hub

Pull the toolkit image from Docker Hub using this request:

```docker
docker pull kennasecurity/toolkit
```

When ready, go to [step 3](#step-3-run-the-cobalt-task).

### From the Source

1. Clone the Kenna Toolkit repository.
    ```docker
    git clone git@github.com:KennaSecurity/toolkit.git
    ```
1. Build the Kenna Security Toolkit image from the source. If you've already done this in the past, you may have to do it again because the Cobalt task is a relatively new addition.
    ```docker
    docker build . -t toolkit:latest
    ```

## Step 3: Run the Cobalt Task

1. Prepare the following variables required to run the Cobalt task. See [how to get these values](#what-you-need).
    - `COBALT_API_TOKEN`: Cobalt API token
    - `COBALT_ORG_TOKEN`: Cobalt organization token
    - `KENNA_API_KEY`: Kenna Security API key
    - `KENNA_CONNECTOR_ID`: ID of the Kenna Security Data Importer connector
1. Replace variables with your values, and run this task:
    ```docker
    export COBALT_API_TOKEN=xxx

    export COBALT_ORG_TOKEN=xxx

    export KENNA_API_KEY=xxx

    export KENNA_CONNECTOR_ID=xxx
    ```
1. Run the toolkit with the `cobaltio` task selected. This command imports all findings from the configured organization in Cobalt into Kenna Security.
    - (Recommended) By default, the AppSec module is used.
    - If you want to use the VM module instead, add `kenna_appsec_module=false` to the command below.
    ```docker
    docker run -it --rm toolkit:latest \

        task=cobaltio \

        cobalt_api_token=$COBALT_API_TOKEN \

        cobalt_org_token=$COBALT_ORG_TOKEN \

        kenna_api_key=$KENNA_API_KEY \

        kenna_connector_id=$KENNA_CONNECTOR_ID
    ```

## Step 4: View Imported Findings

You can view findings imported from Cobalt in one of these modules, depending on which one you're using:

- [AppSec Module](#appsec-module)
- [VM Module](#vm-module)

### AppSec Module

In Kenna Security, navigate to **AppSec** > **Explore**.

![Select AppSec > Explore in Kenna Security](/integrations/Kenna-Security-view-findings-AppSec-1.png "Select AppSec > Explore in Kenna Security")

You should see findings imported from Cobalt. If the page contains findings from other sources, you can apply a filter for the Cobalt connector.

![View findings imported from Cobalt in the AppSec module](/integrations/Kenna-Security-view-findings-AppSec-2.png "View findings imported from Cobalt in the AppSec module")

### VM Module

In Kenna Security, navigate to **VM** > **Explore**.

![Select VM > Explore in Kenna Security](/integrations/Kenna-Security-view-findings-VM-1.png "Select VM > Explore in Kenna Security")

You should see findings imported from Cobalt. If the page contains vulnerabilities from other sources, use search to find newly added vulnerabilities.

![View findings imported from Cobalt in the VM module](/integrations/Kenna-Security-view-findings-VM-2.png "View findings imported from Cobalt in the VM module")
