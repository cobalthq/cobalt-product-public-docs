---
title: "Tips & Tricks"
linkTitle: "Tips & Tricks"
weight: 30
---

{{% pageinfo %}}
Lorem
{{% /pageinfo %}}

## Trigger filters

Trigger filters can be used to limit the scope of a recipe trigger.
For example, if you are using the `Pentest finding state updated` trigger and you only want your recipe to be triggered
when the finding whose state was updated is associated to a certain asset or pentest, you can use trigger filters for this.

To see the filters available for a trigger, click on your trigger and then click the `optional fields available` button.

![Show trigger filters](/integrations/integration_builder/tips_and_tricks/trigger_filters/show_trigger_filters.png "Show trigger filters")

You may then select the filters to add.

![Add filters](/integrations/integration_builder/tips_and_tricks/trigger_filters/add_filters.png "Add filters")

You can then set the value of the trigger.
Some trigger filters accept a textual input.
Some trigger filters have a dropdown box that may be used to select a value.
Some trigger filters support both textual input and dropdown selections.

![Set filter value](/integrations/integration_builder/tips_and_tricks/trigger_filters/set_filter_value.png "Set filter value")

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

![Search ticket reference](/integrations/integration_builder/tips_and_tricks/external_ticket_references/search_ticket_reference.png "Search ticket reference")
![Create ticket reference](/integrations/integration_builder/tips_and_tricks/external_ticket_references/create_ticket_reference.png "Create ticket reference")

See [our public API documentation](/cobalt-api/v2/) for more information about the properties of an external ticket reference.

## Customizing fields

When you are building recipes for creating tickets in a ticketing system, you may want to customize the fields that you are setting on the tickets.
To set extra optional fields for tickets, you can use the `optional fields available` button within the create ticket action to set extra fields.

![Optional fields button](/integrations/integration_builder/tips_and_tricks/customizing_fields/optional_fields_button.png "Optional fields button")

## Mapping fields

ipsum
