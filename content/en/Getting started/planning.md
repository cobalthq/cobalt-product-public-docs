---
title: "Plan and Scope the Pentest"
linkTitle: "Plan and Scope the Pentest"
weight: 210
description: >
  Set up a schedule. Scope the pentest.
---

{{% pageinfo %}}
Set the start date for your pentest and define its scope.
{{% /pageinfo %}}

![Workflow for creating a pentest](/gsg/CreatePentestFlowStage6.png "Workflow for creating a pentest")
<br>

## Schedule the Pentest

Depending on your {{% ptaas-tier %}},
we can help you schedule pentests with a start date from at least one to three business days after you select **Submit for Review**.

The standard testing period is 14 days. It may vary depending on the pentest scope and other factors.

![Planning and scoping a pentest](/gsg/ScheduleScopePentest.png "Schedule and scope your pentest")

If you have any [special requirements](/getting-started/review-pentest/#additional-requests), such as qualifications for pentester certifications,
we reserve the right to start the pentest later than the flow time specified in your
{{% ptaas-tier %}}.

## Scope the Pentest

The pentest scope determines the number of credits required for a pentest. The bigger the scope, the more credits you need.

To set the pentest scope, identify the complexity of your asset. Under **Scoping**, specify the number of characteristics associated with the asset that need to be tested. To get exact numbers, consult with the asset owner inside your organization.

The characteristics differ for each [asset type](/platform-deep-dive/assets/asset-types/):

- [Web](#web)
- [Mobile](#mobile)
- [API](#api)
- [External Network](#external-network)
- [Internal Network](#internal-network)
- [Cloud Config](#cloud-configuration)
- [Assets of multiple types](#assets-of-multiple-types)

Once you’ve scoped the pentest, review the required [credits](#view-required-credits), as determined by our algorithm.

### Web

To scope a pentest for a Web asset, specify the number of the following characteristics of the asset that need to be tested:

| Scoping Parameter | Definition | Notes |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your Web asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Pages](/getting-started/glossary/#web-page)/[Routes](/getting-started/glossary/#route-software) | <p>A Page is a hypertext document with a unique URL that a user interacts with.</p><p>A Route is a system for resource navigation in [single-page applications (SPAs)](/getting-started/glossary/#single-page-application). In SPAs that use frameworks such as Angular, React, or Ember, routes provide unique URLs to specific content within the application.</p> | Determine the type of your Web asset:<br><ul><li>**Traditional web application**. Enter the number of Pages to test.<ul><li>You may want to skip [static pages](/getting-started/glossary/#static-web-page) because security-related risks are low for them.<li>For [dynamic pages](/getting-started/glossary/#dynamic-web-page), count the number based on unique page templates.</li><li>As part of our tests for [dynamic pages](/getting-started/glossary/#dynamic-web-page), we also test the backend API endpoints frequently used to populate content on those pages.</li></ul></li><li>[**Single-page application**](/getting-started/glossary/#single-page-application). Enter the number of Routes to test.</li></ul>Usually, an application includes one or more routing modules or files where you can retrieve the number of pages or routes using special commands or tools. |

{{% alert title="Note" color="primary" %}}
If the only APIs in your assets populate web pages, you may not need to set up a separate API asset. We test such APIs as part of our tests of a Web asset.
{{% /alert %}}

### Mobile

To scope a pentest for a Mobile asset, specify the number of the following characteristics of the asset that need to be tested:

| Scoping Parameter | Definition | Notes |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your Mobile asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Screens](/getting-started/glossary/#mobile-screen) (For All OSes) | <p>A Screen is a screen-sized interface that a user interacts with on a mobile device.</p><p>Depending on the operating system, Screens may be referred to as:<ul><li>Superviews or subviews on iOS</li><li>Views on Android</li></ul></p><p>Screens in a mobile application are functionally equivalent to [Dynamic Pages](/getting-started/glossary/#dynamic-web-page) in a [Web](#web) asset.</p> | <p>Enter the number of Screens in your Mobile asset that need to be tested, based on the application type.</p><ul><li>**Native applications** are built to run on a specific mobile operating system, such as iOS or Android.<ul><li>Enter the total number of screens for all operating systems. We’ll test the application for each operating system it runs on.<ul><li>For example, your mobile application runs on both iOS and Android. The application has 10 screens, so you should specify 20 screens in total. </li></ul></li></li></ul></li><li>**Non-native applications** are built to run on multiple operating systems.<ul><li>Enter the number of screens in the application. Because non-native applications use the same codebase to run on different operating systems, we’ll test a single version.</li></ul></li></ul> |

### API

To scope a pentest for an API asset, specify the number of the following characteristics of the asset that need to be tested:

| Scoping Parameter | Definition | Notes |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your API asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Endpoints](/getting-started/glossary/#api-endpoint) / [GraphQL Queries and Mutations](https://graphql.org/learn/queries/) | <p>A RESTful API Endpoint is a URL where an API receives requests about a specific resource on its server.</p><p>A GraphQL Query is a method to fetch data.</p><p>A GraphQL Mutation is an operation that allows you to modify server-side data.</p> | <p>We can test both RESTful and GraphQL APIs. However, these APIs work in different ways.</p></p><ul><li>[RESTful APIs](/getting-started/glossary/#restful-api) set up data on different endpoints.<ul><li>Enter the number of RESTful [API endpoints](/getting-started/glossary/#api-endpoint) in your API asset to test.</li></ul></li><li>[GraphQL APIs](/getting-started/glossary/#graphql-api) have a single endpoint, but use mutations to manage different categories of data. Queries allow you to fetch data, while mutations allow you to modify it.<ul><li>Enter the number of [queries and mutations](https://graphql.org/learn/queries) in your API asset to test. For pentest purposes, that’s functionally equivalent to the number of RESTful API endpoints.</li></ul></li></ul><p>If you’re using API tools such as [Swagger](https://swagger.io/), [Postman](https://www.postman.com/), or [Insomnia](https://insomnia.rest/) to work with your API asset, you can count the number of endpoints or GraphQL queries and mutations in these tools.</p> |

### External Network

To scope a pentest for an External Network asset, specify the number of IP addresses in your external network that need to be tested:

| Scoping Parameter | Definition |
|---|---|
| IP Addresses | Number of active IP addresses in your external network that need to be tested. |

### Internal Network

To scope a pentest for an Internal Network asset, specify the number of IP addresses in your internal network that need to be tested:

| Scoping Parameter | Definition |
|---|---|
| IP Addresses | Number of active IP addresses in your internal network that need to be tested. |

If you’re working with servers on the cloud, you can also set up a [Cloud Configuration](#cloud-configuration) asset.

### Cloud Configuration

Cobalt pentesters can test services on the following platforms:

- Google Cloud Platform (GCP)
- Amazon Web Services (AWS)
- Microsoft Azure Cloud (Azure)

Each platform includes different categories of services, such as EC2, databases, and machine learning engines.

To scope a pentest for a Cloud Configuration asset, specify the number of the following characteristics of the asset that need to be tested:

| Scoping Parameter | Definition | Notes |
|---|---|---|
| User Accounts, Projects, or Resource Groups | <p>User Accounts refer to accounts in your cloud asset.</p><p>[Projects](/getting-started/glossary/#projects-cloud-assets) are all resources included in your cloud asset.</p><p>[Resource Groups](/getting-started/glossary/#resource-group-cloud) are sets of resources in a cloud asset.</p> | Enter the total number of accounts, projects, or resource groups in your cloud asset that need to be tested. |
| Unique Service Instances | Unique services are the different functionalities that you’ve configured in your cloud deployment. | Enter the number of unique services in your cloud asset that need to be tested. |

### Assets of Multiple Types

Sometimes, assets fit into more than one category. To that end, Cobalt supports pentests on assets in the following groups of categories:

- [Web](#web) + [API](#api)
- [Web](#web) + [API](#api) + [External Network](#external-network)
- [Web](#web) + [External Network](#external-network)
- [Web](#web) + [Mobile](#mobile)

To scope a pentest for a combined asset, specify the number of characteristics for each asset type that it includes. Refer to the corresponding sections of this guide for details.

## View Required Credits

Once you’ve identified the [pentest scope](#scope-the-pentest), you can see the number of required credits in **Credit(s) Per Pentest**. Whenever you adjust the scope, our algorithm updates the number of credits. Under **Credits**, you can also view your **Available Balance**.

## Next Step

If you're ready with your pentest, select **Save & Exit**. In the next screen, you can [review your work](/getting-started/review-pentest/) before submitting the pentest.
