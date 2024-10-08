---
title: "Connect Cobalt with Vanta"
linkTitle: "Vanta"
weight: 70
description: >
  Set up an integration with Vanta.
---

{{% pageinfo %}}
Configure the integration to sync Cobalt users, assets and findings with Vanta.
{{% /pageinfo %}}

## Integration Overview

Vanta is one of the leading trust management platforms, that helps simplify & centralize security for organizations of all sizes. Vanta helps automate processes around compliance, including SOC2.

Using this integration, you can sync Cobalt Users, Assets and [findings](/platform-deep-dive/pentests/findings/) data with Vanta.

The Cobalt/Vanta integration will help you automate 35 tests and 11 controls in Vanta.

The integration involves the following resources in Vanta:

- API Endpoint Vulnerability
- User Account
- Vulnerable Component

Users, Assets and Findings will be synced every 6 hours.

Additionally, Users are synced right away when they change their account settings, when they are added to or removed from an org and when they are anonymized for GDPR compliance.

## What You Need

To configure the integration, you need the following:

- **A Vanta account**
- **A Cobalt account**

## Setup Process

### From Vanta

1. Go to the Integrations page in Vanta and look up the Cobalt integration

![Cobalt integration in Vanta](/integrations/vanta/cobalt-integration-in-vanta.png "Cobalt integration in Vanta")

2. Click **Connect** on the tile – this will open an information modal. Clicking **Connect to Cobalt – Pentesting and Scanning** will take you to the Cobalt Platform where you continue the setup process

![Cobalt integration connect](/integrations/vanta/cobalt-integration-connect.png "Cobalt integration connect")

### From Cobalt

3. Go to the Integrations page and look up **Vanta**

4. Click the **Vanta** tile to connect

![Vanta tile disconnected](/integrations/vanta/tile-disconnected.png "Vanta tile disconnected")

5. Review the Integration permissions, and select **Allow** if appropriate.
   - Note, for organizations needing data in EU, there is an option in this step to opt for that.

![Vanta authorize app](/integrations/vanta/authorize-app.png "Vanta authorize app")

6. Now your Cobalt <-> Vanta integration is set up, and your data will be synced automatically.

![Vanta tile connected](/integrations/vanta/tile-connected.png "Vanta tile connected")

## Disabling integration

In order to disable the integration, go to the Integrations page in Cobalt and click on the Vanta tile. On the information modal, select **Disconnect** to disable the integration.

![Disconnect integration from Cobalt](/integrations/vanta/disconnect-integration-from-cobalt.png "Disconnect integration from Cobalt")

The next step would then be to remove the Integration on the Vanta side.
Go to the Integrations page in Vanta, and look up the Cobalt tile. Click **Manage**, and then **Delete**

![Delete integration from Vanta](/integrations/vanta/delete-integration-from-vanta.png "Delete integration from Vanta")

In the information modal, select **Delete credential and data** to remove the Integration completely.

![Delete credentials and data](/integrations/vanta/delete-credentials-and-data.png "Delete credentials and data")
