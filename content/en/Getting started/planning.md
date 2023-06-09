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

In the fourth step of the pentest wizard, you can:

- [Schedule the pentest](#schedule-the-pentest)
- [Scope the pentest](#scope-the-pentest)

![Schedule and scope your pentest](/gsg/pentest-planning.png "Schedule and scope your pentest")

## Schedule the Pentest

Depending on your {{% ptaas-tier %}}, you can schedule pentests with a start date from at least one to three business days after submitting it for review.

If you have any [special requirements](/getting-started/review-pentest/#additional-requests), such as qualifications for pentester certifications, we reserve the right to start the pentest later than the flow time specified in your {{% ptaas-tier %}}.

![Set a start date for your pentest](/gsg/schedule-pentest.png "Set a start date for your pentest")

### Pentest Timelines

Pentest timelines depend on the pentest type, scope, and other factors. When you [schedule your pentest](#schedule-the-pentest) and set a start date, the end date populates automatically.

**Standard pentest timelines**:

- [Comprehensive Pentests](/getting-started/glossary/#agile-pentest): 14 days
- [Agile Pentests](/getting-started/glossary/#comprehensive-pentest):
  - 3 or 4 credits: 7 days
  - From 5 credits: 14 days

Learn more about the [pentest types](/platform-deep-dive/pentests/pentest-types/).

{{% alert title="Important" color="primary" %}}
Pentest duration may vary depending on the pentest scope and other factors.
{{% /alert %}}

## Scope the Pentest

The complexity of your asset determines the **number of credits** required for a pentest. The bigger the pentest scope, the more credits you need.

{{% credit-definition %}} You can think of a Cobalt credit as a virtual voucher that you consume whenever you want to run a pentest. Learn more about [Cobalt credits](/platform-deep-dive/credits/).

{{% alert title="Scoping a Comprehensive Pentest" color="primary" %}}
When you set up a new <a href="/getting-started/glossary/#comprehensive-pentest">Comprehensive pentest</a> for an asset that you've already comprehensively tested earlier, you can select one of the options:

- If the general size of the asset has not changed, **inherit the scope** of your last completed Comprehensive pentest.
- If the general size of the asset has changed, **rescope the pentest** by adjusting scoping parameters, as described below.

![Options for scoping a Comprehensive pentest](/gsg/scope-pentest-comprehensive-options.png "Options for scoping a Comprehensive pentest")
{{% /alert %}}

To set the pentest scope, identify the complexity of your asset. Under **Scoping**, specify the number of characteristics associated with the asset that need to be tested. To get exact numbers, consult with the asset owner inside your organization.

Scoping parameters differ for each [asset type](/platform-deep-dive/assets/asset-types/):

- [Web](#web)
- [Mobile](#mobile)
- [API](#api)
- [External Network](#external-network)
- [Internal Network](#internal-network)
- [Cloud Config](#cloud-configuration)
- [Assets of multiple types](#assets-of-multiple-types)

Once you've scoped the pentest, review the required [credits](#view-required-credits), as determined by our algorithm.

### Web

To scope a pentest for a Web asset, specify the number of the following characteristics of the asset that need to be tested.

![Scoping parameters for a Web asset](/gsg/pentest-scoping-web-app.png "Scoping parameters for a Web asset")

| Parameter | Definition | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your Web asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Pages](/getting-started/glossary/#web-page)/[Routes](/getting-started/glossary/#route-software) | <p>A Page is a hypertext document with a unique URL that a user interacts with. [Dynamic pages](/getting-started/glossary/#dynamic-web-page) are most relevant for pentests.<ul><li>Read-only [static pages](/getting-started/glossary/#static-web-page) are not counted because there is no interaction.</li><li>A product catalog is not measured because the page workflow is not unique.</li></ul></p><p>A Route is a system for resource navigation in [single-page applications (SPAs)](/getting-started/glossary/#single-page-application). In SPAs that use frameworks such as Angular, React, or Ember, routes provide unique URLs to specific content within the application.</p> | Determine the type of your Web asset:<br><ul><li>[Traditional web application](/getting-started/glossary/#traditional-web-application). Enter the number of [dynamic pages](/getting-started/glossary/#dynamic-web-page) based on unique page templates.<ul><li>As part of our tests for [dynamic pages](/getting-started/glossary/#dynamic-web-page), we also test the backend API endpoints frequently used to populate content on those pages.</li></ul></li><li>[Single-page application](/getting-started/glossary/#single-page-application). Enter the number of [routes](/getting-started/glossary/#route-software) to test.<ul><li>As an example, read the [React Router documentation](https://reactrouter.com/en/main/start/concepts) to learn more about routing.</li></ul></li></ul>Usually, an application includes one or more routing modules or files where you can retrieve the number of pages or routes using special commands or tools. |

{{% alert title="Note" color="primary" %}}
If the only APIs in your assets populate web pages, you may not need to set up a separate API asset. We test such APIs as part of our tests of a Web asset.
{{% /alert %}}

### Mobile

To scope a pentest for a Mobile asset, specify the number of the following characteristics of the asset that need to be tested.

![Scoping parameters for a Mobile asset](/gsg/pentest-scoping-mobile.png "Scoping parameters for a Mobile asset")

| Parameter | Definition | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your Mobile asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Screens](/getting-started/glossary/#mobile-screen) (For All OSes) | <p>A Screen is a screen-sized interface that a user interacts with on a mobile device.</p><p>Depending on the operating system, Screens may be referred to as:<ul><li>Superviews or subviews on iOS</li><li>Views on Android</li></ul></p><p>Screens in a mobile application are functionally equivalent to [Dynamic Pages](/getting-started/glossary/#dynamic-web-page) in a [Web](#web) asset.</p> | <p>Enter the number of Screens in your Mobile asset that need to be tested, based on the application type.</p><ul><li>**Native applications** are built to run on a specific mobile operating system, such as iOS or Android.<ul><li>Enter the total number of screens for all operating systems. We'll test the application for each operating system it runs on.<ul><li>For example, your mobile application runs on both iOS and Android. The application has 10 screens, so you should specify 20 screens in total. </li></ul></li></li></ul></li><li>**Non-native applications** are built to run on multiple operating systems.<ul><li>Enter the number of screens in the application. Because non-native applications use the same codebase to run on different operating systems, we'll test a single version.</li></ul></li></ul> |

### API

To scope a pentest for an API asset, specify the number of the following characteristics of the asset that need to be tested.

![Scoping parameters for an API asset](/gsg/pentest-scoping-api.png "Scoping parameters for an API asset")

| Parameter | Definition | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your API asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Endpoints](/getting-started/glossary/#api-endpoint) / [GraphQL Queries and Mutations](https://graphql.org/learn/queries/) | <p>A RESTful API Endpoint is a URL where an API receives requests about a specific resource on its server.</p><p>A GraphQL Query is a method to fetch data.</p><p>A GraphQL Mutation is an operation that allows you to modify server-side data.</p> | <p>We can test both RESTful and GraphQL APIs. However, these APIs work in different ways.</p></p><ul><li>[RESTful APIs](/getting-started/glossary/#restful-api) set up data on different endpoints.<ul><li>Enter the number of RESTful [API endpoints](/getting-started/glossary/#api-endpoint) in your API asset to test.</li><li>Ignore specific parameters and HTTP methods for each endpoint. For example, `GET https://api.cobalt.io/pentests` and `POST https://api.cobalt.io/pentests` are two different HTTP requests for the same endpoint.</li></ul></li><li>[GraphQL APIs](/getting-started/glossary/#graphql-api) have a single endpoint, but use mutations to manage different categories of data. Queries allow you to fetch data, while mutations allow you to modify it.<ul><li>Enter the number of [queries and mutations](https://graphql.org/learn/queries) in your API asset to test. For pentest purposes, that's functionally equivalent to the number of RESTful API endpoints.</li></ul></li></ul><p>If you're using API tools such as [Swagger](https://swagger.io/), [Postman](https://www.postman.com/), or [Insomnia](https://insomnia.rest/) to work with your API asset, you can count the number of endpoints or GraphQL queries and mutations in these tools.</p> |

### External Network

To scope a pentest for an External Network asset, specify the number of IP addresses in your external network that need to be tested.

![Scoping parameters for an External Network asset](/gsg/pentest-scoping-ip-addresses.png "Scoping parameters for an External Network asset")

| Parameter | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|
| IP Addresses | Enter the number of active IP addresses in your external network that need to be tested. |

### Internal Network

To scope a pentest for an Internal Network asset, specify the number of IP addresses in your internal network that need to be tested.

![Scoping parameters for an Internal Network asset](/gsg/pentest-scoping-ip-addresses.png "Scoping parameters for an Internal Network asset")

| Parameter | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|
| IP Addresses | Enter the number of active IP addresses in your internal network that need to be tested. |

If you're working with servers on the cloud, you can also set up a [Cloud Configuration](#cloud-configuration) asset.

### Cloud Configuration

Cobalt pentesters can test services on the following platforms:

- Google Cloud Platform (GCP)
- Amazon Web Services (AWS)
- Microsoft Azure Cloud (Azure)

Each platform includes different categories of services, such as EC2, databases, and machine learning engines.

To scope a pentest for a Cloud Configuration asset, specify the number of the following characteristics of the asset that need to be tested.

![Scoping parameters for a Cloud Configuration asset](/gsg/pentest-scoping-cloud-config.png "Scoping parameters for a Cloud Configuration asset")

| Parameter | Definition | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|---|
| User Accounts, Projects, or Resource Groups | <p>User Accounts refer to accounts in your cloud asset.</p><p>[Projects](/getting-started/glossary/#projects-cloud-assets) are all resources included in your cloud asset.</p><p>[Resource Groups](/getting-started/glossary/#resource-group-cloud) are sets of resources in a cloud asset.</p> | Enter the total number of accounts, projects, or resource groups in your cloud asset that need to be tested.<ul><li>**GCP**: The cloud configuration size is based on _Projects_. In Identity and Access Management (IAM), access is managed through IAM policies. An IAM policy can be attached to a Google Cloud Project. Each policy contains a collection of role bindings that associate one or more principals, such as users or service accounts, with an IAM role.</li><li>**AWS**: The number of AWS accounts within the AWS Organization. The IAM user that pentesters will use to enumerate and assess AWS configurations is set based upon these accounts.</li><li>**Azure**: Subscriptions may contain various Resource Groups—containers that hold related resources for an Azure solution. The CIS Benchmark for Azure is assessed at the Subscription level.</li></ul> |
| Unique Service Instances | Unique services are the different functionalities that you've configured in your cloud deployment. | Enter the number of unique services in your cloud asset that need to be tested.<ul><li>Examples of services: EC2, S3, Comprehend, Kubernetes, Azure Bot Service, Cloud Storage, Azure Container Service.</li><li>Cobalt sizes _Unique Instance of Services Used_ for Cloud Configuration Reviews as we're enumerating configurations, not hosts. Example: 100 EC2 instances using the same base image are considered redundant from the configuration perspective and counted as 1 unique service.</li></ul> |

### Assets of Multiple Types

Sometimes, assets fit into more than one category. To that end, Cobalt supports pentests on assets in the following groups of categories:

- [Web](#web) + [API](#api)
- [Web](#web) + [API](#api) + [External Network](#external-network)
- [Web](#web) + [External Network](#external-network)
- [Web](#web) + [Mobile](#mobile)

To scope a pentest for a combined asset, specify the number of characteristics for each asset type that it includes. Refer to the corresponding sections of this guide for details.

## View Required Credits

Once you've identified the [pentest scope](#scope-the-pentest), you can see the number of estimated credits in **Credits Per Pentest**. Whenever you adjust the scope, our algorithm updates the number of credits.

You can see the final number of required credits when the pentest is Planned, after we review your pentest request.

## Select a Collaboration Platform

Select where you want to collaborate with Cobalt Staff and pentesters:

- Cobalt Chat
- Slack

You can change your preference until the pentest is Planned. Learn more about [collaborating on a pentest](/platform-deep-dive/collaboration/collaborate-on-pentests/).

![Select a collaboration platform when setting up a pentest](/deepdive/select-collaboration-platform.png "Select a collaboration platform when setting up a pentest")

## Next Step

If you're ready with your pentest, select **Save & Exit**. In the next screen, you can [review your work](/getting-started/review-pentest/) before submitting the pentest.
