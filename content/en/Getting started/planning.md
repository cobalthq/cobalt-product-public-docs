---
title: "Plan and Scope the Pentest"
linkTitle: "Plan and Scope the Pentest"
weight: 210
description: >
  Set up a schedule. Scope the pentest.
---

{{% pageinfo %}}
Now you can set a date and scope for the pentest.
{{% /pageinfo %}}

## Schedule the Pentest

Depending on your {{% ptaas-tier %}},
we can help you schedule pentests with a start date from at least one to three business days after you select "Submit for Review."

<!-- For content, see https://github.com/cobalthq/cobalt-product-public-docs/blob/main/layouts/shortcodes/big-pic-UI-steps.md -->
{{% big-pic-UI-steps %}}

We reserve two (2) weeks to complete our pentests.

![Pentester Planning](/gsg/PentestPlanningCredits.png "Schedule your pentest. Your allowed start date depends on your PtaaS Tier and any special requirements.")

If you have any special requirements, such as qualifications for pentester certifications,
we reserve the right to start the pentest later than the flow time specified in your
{{% ptaas-tier %}}.

## Scope the Pentest

The pentest scope determines the number of credits required for a pentest. The bigger the scope, the more credits you need.

To set the pentest scope, identify the complexity of your asset. Under **Scoping**, specify the number of characteristics associated with the asset.

The characteristics differ for each [asset type](../assets/asset-type/):

- [Web](#web)
- [Mobile](#mobile)
- [API](#api)
- [External Network](#external-network)
- [Internal Network](#internal-network)
- [Cloud Config](#cloud-configuration)
- [Assets of multiple types](#assets-of-multiple-types)

Once you’ve scoped the pentest, see how many [credits](#view-required-credits) it requires.

### Web

To scope a pentest for a Web asset, specify the number of the following characteristics of that asset:

- [User Roles](../glossary/#user-role)
- [Pages](../glossary/#web-page)/[Routes](../glossary/#route-software)

Include those User Roles and Pages/Routes that should be in scope for this pentest. Be thorough. If you forget certain roles or pages/routes, your pentest might not cover all critical details.

{{% alert title="Note" color="note" %}}
You may not need to include _every_ user role. For example, if you have dedicated administrative roles for backups, logs, and printers, that counts as one (1) role.
{{% /alert %}}

As part of our tests for web pages, we also test the backend API endpoints frequently used to populate content on those pages.

Our pentesters need to know more about your Web asset, including:

- Application type, such as a page-driven website or a [single-page application](../glossary/#single-page-application)
- Special endpoints associated with your pages

{{% alert title="Note" color="note" %}}
If the only APIs in your assets populate web pages, you may not need to set up a separate API asset. We test such APIs as part of our tests of a Web asset.
{{% /alert %}}

### Mobile

To scope a pentest for a Mobile asset, specify the number of the following characteristics of that asset:

- [User Roles](../glossary/#user-role)
- [Screens](../glossary/#mobile-screen) (for all OS)

Include those User Roles and Screens that should be in scope for this pentest. Be thorough. If you forget certain roles or screens, your pentest might not cover all critical details.

### API

We can test both RESTful and GraphQL APIs. However, these APIs work in different ways. RESTful APIs set up data on different endpoints. GraphQL has a single endpoint, but uses mutations to manage different categories of data.

If you’re sizing a GraphQL API, identify a list of [queries and mutations](https://graphql.org/learn/queries). For pentest purposes, that’s functionally equivalent to the number of RESTful API endpoints.

To scope a pentest for an API asset, specify the number of the following characteristics of that asset:

- [User Roles](../glossary/#user-role)
- [Endpoints](../glossary/#api-endpoint) / [GraphQL Mutations](../glossary/#graphql-mutation)

Include those User Roles and Endpoints / GraphQL Mutations that should be in scope for this pentest. If you forget some, you may sacrifice quality in penetration testing.

### External Network

To scope a pentest for an External Network asset, specify the number of public IP addresses to be tested.

### Internal Network

To scope a pentest for an Internal Network asset, specify the number of internal IP addresses to be tested.

If you’re working with servers on the cloud, you can also set up a [Cloud Configuration](#cloud-configuration) asset.

### Cloud Configuration

Cobalt pentesters can test services on the following platforms:

- Google Cloud Platform (GCP)
- Amazon Web Services (AWS)
- Microsoft Azure Cloud (Azure)

Each platform includes different categories of services, such as EC2, databases, and machine learning engines.

To scope a pentest for a Cloud Configuration asset, specify the number of the following characteristics of that asset:

- User Accounts / Projects / Subscriptions
- Unique Services

### Assets of Multiple Types

Sometimes, assets fit into more than one category. To that end, Cobalt supports pentests on assets in the following groups of categories:

- Web + API
- Web + External Network
- Web + Mobile

To scope a pentest for a combined asset, specify the number of characteristics for each asset type that it includes.

## View Required Credits

Once you’ve identified the [pentest scope](#scope-the-pentest), you can see the number of required credits in **Credit(s) Per Pentest**. Whenever you adjust the scope, our algorithm updates the number of credits. Under **Credits**, you can also view your **Available Balance**.

### Credit Criteria

- The minimum number of credits required for a pentest depends on the [pentest type](/platform-deep-dive/pentests/pentest-types/):
  - [Agile Pentest](/getting-started/glossary/#agile-pentest): {{% agile-credits %}}
  - [Comprehensive Pentest](/getting-started/glossary/#comprehensive-pentest): {{% comprehensive-credits %}}
- {{% pentest-big-scope %}}
- We may adjust the number of credits after reviewing your pentest.

## Additional Requests

You can specify special requirements for pentesters. For example, if
industry, company, or national regulations require that you limit pentesters
to residents of one or more countries, you can do so here:

![Pentester Limits](/gsg/PentesterLimits.png "Specify legal or regulatory limitations on pentesters.")

We can't guarantee that we'll accept your additional request. This may also delay scheduling the pentest.

If you're ready with your pentest, select **Save & Exit** > **Yes**.

In the next screen, you can review your work, as a [checklist](../checklist).
