---
title: "Integration Builder"
linkTitle: "Integration Builder"
weight: 10
---

{{% pageinfo %}}
The Integration Builder is currently in Open Beta.
{{% /pageinfo %}}

## Overview

The Cobalt Integration Builder is a no-code automation platform which enables customers to create and manage custom integrations (using a library of available connectors) and orchestrate security data workflows directly from the Cobalt platform.

## Key Concepts

### Connectors

The Integration Builder provides a library of connectors for common business and security applications.

### Connections

Integration Builder connects to apps to build recipes.
Once authenticated, each connection is reusable across multiple recipes.
Integration Builder establishes connections to other apps using the app's authorization/authentication API.
The available methods can vary, but usually use one of the following:

* OAuth 2.0
* OAuth 1.0 (and variations)
* Basic authentication (username and password)
* API key or secret

As part of this step, you provide Cobalt with the permission to access data from the app. The permissions granted to Cobalt usually correspond with those of the user authorizing the app. As such, when creating connections, we recommend:

* Creating a dedicated app user for Cobalt ensures that recipes aren't dependent on the account of a human user. If someone leaves the company, recipes will continue to run. Additionally, it will allow you to tailor the permissions that your Cobalt recipe has to your app, thereby reducing security risk.
* When developing and testing recipes, we recommend using sandbox (or non-production) credentials for your connections to ensure that live data isn’t affected when switching environments.

Please note:  When setting up a connection, all users in your Cobalt Org will be able to use that connection and access any data. Be sure to use service accounts and limit permissions.


### Recipes

A recipe is an automated workflow that connects your apps. Each recipe is comprised of a trigger and one or more actions. When you turn on your recipe, it waits for a triggering event to run the actions.

### Triggers

Triggers determine what event to listen to execute the actions described in a recipe. Triggers can be set off in real time when an event occurs in the Cobalt platform (ie. when a finding is published) or other apps (ie. Jira ticket is updated), at a specific time, or at a scheduled interval.

### Actions

Every connector provides a set of actions, which serve as building blocks to construct a workflow recipe.

## How it Works

### Accessing the Integration Builder

### Dashboard

### Projects

### Library

The Library lists all app connectors available in the Integration Builder.

### Lookup Tables

Lookup tables – similar to cross-reference tables – provide a convenient way to retrieve frequently used data. These tables are structured with rows and columns, enabling you to search for entries by matching data in one or more columns. The available actions for lookup tables include adding, searching, viewing all entries, updating, deleting entries, and clearing the table.

## Use Cases

lorem

## Frequently Asked Questions

Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> to view answers.

{{%expand "Does the Integration Builder support custom required fields?" %}}
<br>

Yes. When editing a “Create” or “Update” action provided by a connector, the edit form will dynamically fetch all available parameters.  You can use datapills to populate those parameters with dynamic values, or simply type into the input field to set a static value.

{{% /expand %}}
<br>

{{%expand "Can I connect to multiple environments of the same application?" %}}
<br>

Yes. In the Integration Builder, go to the Projects tab,

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

While basic knowledge of logic and data structures can be helpful, the Integration Builder’s visual interface allows users to create workflows and integrations without writing extensive code. However, advanced users can also leverage the scripting capabilities for more complex automations.

{{% /expand %}}
<br>

{{%expand "Does the Integration Builder use a third party system?" %}}
<br>

Yes. The Integration Builder is built with Workato, Cobalt’s integration platform partner, and is covered under Cobalt’s Data Processing Agreement.  See: [Workato FAQs](https://docs.workato.com/workato-faqs.html).

{{% /expand %}}
<br>

{{% alert title="LOREM" color="primary" %}}
IPSUMMMM!!
{{% /alert %}}
