---
title: "How to Guides"
linkTitle: "How to Guides"
weight: 30
---

## Application Specific Guides

| Application       | Use Case                        | Guide Link                            |
|-------------------|---------------------------------|---------------------------------------|
| Jira Cloud        | Create tickets for findings     | [Click Here](./jira-cloud-migration)  |
| GitHub            | Create tickets for findings     | [Click Here](./github)                |
| GitLab            | Create tickets for findings     | [Click Here](./gitlab)                |
| Microsoft Teams   | Send notifications for findings | [Click Here](./microsoft-teams)       |
| Microsoft Outlook | Send notifications for findings | [Click Here](./outlook-notifications) |

## Trigger filters

Trigger filters can be used to limit the scope of a recipe trigger.
For example, if you are using the `Pentest finding state updated` trigger and you only want your recipe to be triggered
when the finding whose state was updated is associated to a certain asset or pentest, you can use trigger filters for this.

To see the filters available for a trigger, click on your trigger and then click the `optional fields available` button.

{{% image src="/integrations/integration_builder/how_to_guides/trigger_filters/show_trigger_filters.png" alt="Show trigger filters" %}}

You may then select the filters to add.

{{% image src="/integrations/integration_builder/how_to_guides/trigger_filters/add_filters.png" alt="Add filters" %}}

You can then set the value of the trigger.
Some trigger filters accept only a textual input.
Some trigger filters accept textual input and have a dropdown box that may be used to select a value.

{{% image src="/integrations/integration_builder/how_to_guides/trigger_filters/set_filter_value.png" alt="Set filter value" %}}

## External Ticket References

An external ticket reference is an association between a ticket in your ticketing system and a Cobalt finding.
External ticket references serve two purposes:

* They power our ability to display tickets for findings in the Cobalt UI
* They prevent duplicate tickets from being created by integrations

The Cobalt connector provides an action for creating external ticket references and for searching external ticket references.
A reference may be searched by:

* Finding ID
* Ticketing system
* Ticket ID (from ticketing system)

For the above-mentioned purposes to be achieved, it is important that your ticket-creation recipes:

* Search ticket references for a finding before creating a new ticket
* Do not create a new ticket if a ticket reference for a finding already exists
* Create ticket references after creating a new ticket

Here's an example of what these steps look like in a recipe:

{{% image src="/integrations/integration_builder/how_to_guides/external_ticket_references/search_ticket_reference.png" alt="Search ticket reference" %}}
{{% image src="/integrations/integration_builder/how_to_guides/external_ticket_references/create_ticket_reference.png" alt="Create ticket reference" %}}

See [our public API documentation](/cobalt-api/v2/) for more information about the properties of an external ticket reference.

## Customizing fields

When you are building recipes for creating tickets in a ticketing system, you may want to customize the fields that you are setting on the tickets.
To set extra optional fields for tickets, you can use the `optional fields available` button within the create ticket action to set extra fields.

{{% image src="/integrations/integration_builder/how_to_guides/optional_fields_button.png" alt="Optional fields button" %}}

## Mapping fields

The integration builder has powerful field mapping functionality.
When you select an action within a recipe, you can see the action's input fields.
You can populate these input fields with the output from any other action or trigger within your recipe.
When you select an action input, the "Recipe data" drawer will open.
Within this drawer, the outputs from the actions and triggers within your recipe will appear as "data pills".
You can simply drag-and-drop the data pills from the drawer into action input fields as desired.

{{% image src="/integrations/integration_builder/how_to_guides/data_pill_mapping.png" alt="Data pill mapping" %}}

## Authentication best practices

Integration Builder establishes connections to other apps using the app's authorization/authentication API.
The available methods can vary, but usually use one of the following:

* OAuth 2.0
* OAuth 1.0 (and variations)
* Basic authentication (username and password)
* API key or secret

As part of this step, you provide Cobalt with the permission to access data from the app.
The permissions granted to Cobalt usually correspond with those of the user authorizing the app.
As such, when creating connections, we recommend:

* Creating a dedicated app user for Cobalt ensures that recipes aren't dependent on the account of a human user.
  If someone leaves the company, recipes will continue to run. Additionally, it will allow you to tailor the permissions
  that your Cobalt recipe has to your app, thereby reducing security risk.
* When developing and testing recipes, we recommend using sandbox (or non-production) credentials for your connections
  to ensure that live data isn’t affected when switching environments.
* Please note:  When setting up a connection, all users in your Cobalt Org will be able to use that connection and
  access any data. Be sure to use service accounts and limit permissions.
