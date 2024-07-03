---
title: "Integration Builder"
linkTitle: "Integration Builder"
weight: 10
---

{{% pageinfo %}}
The Integration Builder is currently in Open Beta.
{{% /pageinfo %}}

## Overview

The Cobalt Integration Builder is a no-code automation platform which enables customers to create and manage custom
integrations (using a library of available connectors) and orchestrate security
data workflows directly from the Cobalt platform.

## How it Works

The Integration Builder provides a marketplace of available connectors for common business and security applications.
Each connector provides a set of triggers and actions, which can be used to perform a set of data functions when an
event occurs in the Cobalt platform or external system.
Once a customer sets up connections for their DevSecOps applications and tools, they select from a library of
pre-built recipes, or create their own recipes, using the triggers and actions enabled by the Cobalt connector
and (one or more) other services to construct a workflow between the systems.

Integration Builder workflows are comprised of the following elements:

### Trigger

Triggers determine what event to listen to and execute the actions described in a recipe.
Triggers can be set off in real time when an event occurs in the Cobalt platform (ie. when a finding is published)
or other apps (ie. Jira ticket is updated), at a specific time, or at a scheduled interval.

### Action

Every connector provides a set of actions, which serve as building blocks to construct a workflow recipe.

### Recipe

Automated workflow comprising a trigger and one or more actions to accomplish an integration use case between apps.

### Connector

The Integration Builder provides a library of connectors for common business and security applications.

### Connection

Integration Builder connects to apps to build recipes. Once authenticated, each the triggers and actions provided
by that app become available to use across recipes. See authentication best practices.

<iframe src="https://play.vidyard.com/a22pBZVWCwGaWvs8VQZXEC" width="640" height="360" frameborder="0" allowfullscreen></iframe>

## Frequently Asked Questions

Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> to view answers.

{{%expand "Does the Integration Builder support custom required fields?" %}}
<br>

Yes. When editing a “Create” or “Update” action provided by a connector, the edit form will dynamically fetch
all available parameters.  You can use datapills to populate those parameters with dynamic values,
or simply type into the input field to set a static value.

{{% /expand %}}
<br>

{{%expand "Can I connect to multiple environments of the same application?" %}}
<br>

Yes. You can create a connection to each environment of the application. Within your recipes you can choose which connection to use.

{{% /expand %}}
<br>

{{%expand "Do I pay extra for integration builder?" %}}
<br>

No. Integration Builder is included for all Premium & Enterprise customers.

{{% /expand %}}
<br>

{{%expand "Are there usage limits for Integration Builder?" %}}
<br>

Yes. Each customer organization is limited to 10,000 tasks, or individual processing steps. Contact us for additional tasks.

{{% /expand %}}
<br>

{{%expand "Is coding required to use Integration Builder?" %}}
<br>

While basic knowledge of logic and data structures can be helpful, the Integration Builder’s visual interface allows
users to create workflows and integrations without writing extensive code. However, advanced users can also leverage
the scripting capabilities for more complex automations.

{{% /expand %}}
<br>

{{%expand "Does the Integration Builder use a third party system?" %}}
<br>

Yes. The Integration Builder is built with Workato, Cobalt’s integration platform partner, and is covered under
Cobalt’s Data Processing Agreement.  See: [Workato FAQs](https://docs.workato.com/workato-faqs.html).

{{% /expand %}}
<br>
