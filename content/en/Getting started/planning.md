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

Depending on your {{% ptaas-tier %}}, we can help you schedule pentests with a start date from at least one to three business days after you select **Submit for Review**.

The standard testing period is 14 days. It may vary depending on the pentest scope and other factors.

If you have any [special requirements](/getting-started/review-pentest/#additional-requests), such as qualifications for pentester certifications, we reserve the right to start the pentest later than the flow time specified in your
{{% ptaas-tier %}}.

## Scope the Pentest

The complexity of your asset determines the **number of credits** required for a pentest. The bigger the pentest scope, the more credits you need.

{{% credit-definition %}} You can think of a Cobalt credit as a virtual voucher that you consume whenever you want to run a pentest. Learn more about [Cobalt credits](/platform-deep-dive/credits/).

To set the pentest scope, identify the complexity of your asset. Under **Scoping**, specify the number of characteristics associated with the asset that need to be tested. To get exact numbers, consult with the asset owner inside your organization.

Scoping parameters differ for each [asset type](/platform-deep-dive/assets/asset-types/):

- [Web](#web)
- [Mobile](#mobile)
- [API](#api)
- [External Network](#external-network)
- [Internal Network](#internal-network)
- [Cloud Config](#cloud-configuration)
- [Assets of multiple types](#assets-of-multiple-types)

Once you’ve scoped the pentest, review the required [credits](#view-required-credits), as determined by our algorithm.

### Web

To scope a pentest for a Web asset, first determine the following:

- Type of your web application:
  - [Traditional application](/getting-started/glossary/#traditional-web-application): How many [dynamic pages](/getting-started/glossary/#dynamic-web-page) does the application have?
  - [Single-page application](/getting-started/glossary/#single-page-application): How many [routes](/getting-started/glossary/#route-software) does the application have? As an example, read [React Router documentation](https://reactrouter.com/en/main/start/concepts) to learn more about routing.
- How many [user roles](/getting-started/glossary/#user-role) do you want to test?
- What is the **technology stack**?
- Do you have any **special requirements**?

![Scoping parameters for a Web asset](/gsg/pentest-scoping-web.png "Scoping parameters for a Web asset")

| Scoping Parameter | Definition | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your Web asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Pages](/getting-started/glossary/#web-page)/[Routes](/getting-started/glossary/#route-software) | <p>A Page is a hypertext document with a unique URL that a user interacts with. [Dynamic pages](/getting-started/glossary/#dynamic-web-page) are most relevant for pentests.<ul><li>A read-only [static page](/getting-started/glossary/#static-web-page) is not counted because there is no interaction.</li><li>A product catalog is not measured because the page workflow is not unique.</li></ul></p><p>A Route is a system for resource navigation in [single-page applications (SPAs)](/getting-started/glossary/#single-page-application). In SPAs that use frameworks such as Angular, React, or Ember, routes provide unique URLs to specific content within the application.</p> | Determine the type of your Web asset:<br><ul><li>[Traditional web application](/getting-started/glossary/#traditional-web-application). Enter the number of [dynamic pages](/getting-started/glossary/#dynamic-web-page) based on unique page templates.<ul><li>As part of our tests for [dynamic pages](/getting-started/glossary/#dynamic-web-page), we also test the backend API endpoints frequently used to populate content on those pages.</li></ul></li><li>[Single-page application](/getting-started/glossary/#single-page-application). Enter the number of [routes](/getting-started/glossary/#route-software) to test.<ul><li>As an example, read [React Router documentation](https://reactrouter.com/en/main/start/concepts) to learn more about routing.</li></ul></li></ul>Usually, an application includes one or more routing modules or files where you can retrieve the number of pages or routes using special commands or tools. |

{{% alert title="Note" color="primary" %}}
If the only APIs in your assets populate web pages, you may not need to set up a separate API asset. We test such APIs as part of our tests of a Web asset.
{{% /alert %}}

### Mobile

To scope a pentest for a Mobile asset, first determine the following:

- What is the application **framework**?
- On which **operating systems** (OSes) does the application run?
- What is the **technology stack**?
- Do you have any **special requirements**?

![Scoping parameters for a Mobile asset](/gsg/pentest-scoping-mobile.png "Scoping parameters for a Mobile asset")

| Scoping Parameter | Definition | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your Mobile asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Screens](/getting-started/glossary/#mobile-screen) (For All OSes) | <p>A Screen is a screen-sized interface that a user interacts with on a mobile device.</p><p>Depending on the operating system, Screens may be referred to as:<ul><li>Superviews or subviews on iOS</li><li>Views on Android</li></ul></p><p>Screens in a mobile application are functionally equivalent to [Dynamic Pages](/getting-started/glossary/#dynamic-web-page) in a [Web](#web) asset.</p> | <p>Enter the number of Screens in your Mobile asset that need to be tested, based on the application type.</p><ul><li>**Native applications** are built to run on a specific mobile operating system, such as iOS or Android.<ul><li>Enter the total number of screens for all operating systems. We’ll test the application for each operating system it runs on.<ul><li>For example, your mobile application runs on both iOS and Android. The application has 10 screens, so you should specify 20 screens in total. </li></ul></li></li></ul></li><li>**Non-native applications** are built to run on multiple operating systems.<ul><li>Enter the number of screens in the application. Because non-native applications use the same codebase to run on different operating systems, we’ll test a single version.</li></ul></li></ul> |

### API

To scope a pentest for an API asset, first determine the following:

- How many [endpoints](/getting-started/glossary/#api-endpoint) does your API have? Ignore specific parameters and HTTP methods for each endpoint.
- What is the **technology stack**?
- Do you have any **special requirements**?

![Scoping parameters for an API asset](/gsg/pentest-scoping-api.png "Scoping parameters for an API asset")

| Scoping Parameter | Definition | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|---|
| [User Roles](/getting-started/glossary/#user-role) | {{% user-role %}} | <p>Enter the number of User Roles in your API asset that need to be tested.</p><p>{{% count-user-roles %}}</p> |
| [Endpoints](/getting-started/glossary/#api-endpoint) / [GraphQL Queries and Mutations](https://graphql.org/learn/queries/) | <p>A RESTful API Endpoint is a URL where an API receives requests about a specific resource on its server.</p><p>A GraphQL Query is a method to fetch data.</p><p>A GraphQL Mutation is an operation that allows you to modify server-side data.</p> | <p>We can test both RESTful and GraphQL APIs. However, these APIs work in different ways.</p></p><ul><li>[RESTful APIs](/getting-started/glossary/#restful-api) set up data on different endpoints.<ul><li>Enter the number of RESTful [API endpoints](/getting-started/glossary/#api-endpoint) in your API asset to test.</li><li>Ignore specific parameters and HTTP methods for each endpoint. For example, `GET https://api.cobalt.io/pentests` and `POST https://api.cobalt.io/pentests` are two different HTTP requests for the same endpoint.</li></ul></li><li>[GraphQL APIs](/getting-started/glossary/#graphql-api) have a single endpoint, but use mutations to manage different categories of data. Queries allow you to fetch data, while mutations allow you to modify it.<ul><li>Enter the number of [queries and mutations](https://graphql.org/learn/queries) in your API asset to test. For pentest purposes, that's functionally equivalent to the number of RESTful API endpoints.</li></ul></li></ul><p>If you're using API tools such as [Swagger](https://swagger.io/), [Postman](https://www.postman.com/), or [Insomnia](https://insomnia.rest/) to work with your API asset, you can count the number of endpoints or GraphQL queries and mutations in these tools.</p> |

### External Network

To scope a pentest for an External Network asset, first determine the following:

- How many **active hosts** are in the network?
- Do you have any **special requirements**?

![Scoping parameters for an External Network asset](/gsg/pentest-scoping-ip-addresses.png "Scoping parameters for an External Network asset")

| Scoping Parameter | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|
| IP Addresses | Enter the number of IP addresses in your external network that need to be tested. |

### Internal Network

To scope a pentest for an Internal Network asset, first determine the following:

- How many **active hosts** are in the network?
- Do you have any **special requirements**?
- Do you have **other considerations** that may affect the scope? For example, multiple [jump boxes](/getting-started/glossary/#jump-box) on the network.

Because Cobalt pentesters execute pentests for internal networks remotely, they need:

- Access to the internal corporate network through a stable VPN connection; and
- A lightweight Linux server inside the network that serves as a [jump box]((/getting-started/glossary/#jump-box)) from which pentesters can scan and test the internal network during the assessment.

Other requirements:

- For **internal networks running on Amazon Web Services (AWS) machines**, we will:
  - Send you a [link](https://aws.amazon.com/marketplace/pp/prodview-fznsw3f7mq7to) to create a Kali Virtual Machine (VM) inside AWS.
  - Ask you to set up key-based SSH access for each pentester.
- For **networks that don't use a cloud network setup**, do the following:
  - [Download a Kali VMWare/VirtualBox image](https://www.kali.org/get-kali/).
  - Set up key-based SSH access for each pentester.

{{% alert title="Note" color="primary" %}}
Recommended system resources for the virtual image (VMWare, VirtualBox, or AWS) should be at least:

- 2 allocated virtual CPUs
- 8 GB RAM
- 20 GB of disk space

Pentesters also need Root access to the Kali VM, which is mandatory.
{{% /alert %}}

![Scoping parameters for an Internal Network asset](/gsg/pentest-scoping-ip-addresses.png "Scoping parameters for an Internal Network asset")

| Scoping Parameter | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|
| IP Addresses | Enter the number of IP addresses in your internal network that need to be tested. |

If you're working with servers on the cloud, you can also set up a [Cloud Configuration](#cloud-configuration) asset.

### Cloud Configuration

To scope a pentest for a Cloud Configuration asset, first determine the following:

- What is the **cloud platform**?
- How many **account IDs** and **unique services** are in the configuration?
- Do you have any **special requirements**?

Cobalt pentesters can test services on the following platforms:

- Google Cloud Platform (GCP)
- Amazon Web Services (AWS)
- Microsoft Azure Cloud (Azure)

Each platform includes different categories of services, such as EC2, databases, and machine learning engines.

![Scoping parameters for a Cloud Configuration asset](/gsg/pentest-scoping-cloud-config.png "Scoping parameters for a Cloud Configuration asset")

| Scoping Parameter | Definition | <span style="background-color: #ECE6FA; padding: 2px;">Scoping Guidelines</span> |
|---|---|---|
| User Accounts, Projects, or Resource Groups | <p>User Accounts refer to accounts in your cloud asset.</p><p>[Projects](/getting-started/glossary/#projects-cloud-assets) are all resources included in your cloud asset.</p><p>[Resource Groups](/getting-started/glossary/#resource-group-cloud) are sets of resources in a cloud asset.</p> | Enter the total number of accounts, projects, or resource groups in your cloud asset that need to be tested. |
| Unique Service Instances | Unique services are the different functionalities that you’ve configured in your cloud deployment. | Enter the number of unique services in your cloud asset that need to be tested. |

### Assets of Multiple Types

Sometimes, assets fit into more than one category. To that end, Cobalt supports pentests on assets in the following groups of categories:

- [Web](#web) + [API](#api)
- [Web](#web) + [External Network](#external-network)
- [Web](#web) + [Mobile](#mobile)

To scope a pentest for a combined asset, specify the number of characteristics for each asset type that it includes. Refer to the corresponding sections of this guide for details.

## View Required Credits

Once you’ve identified the [pentest scope](#scope-the-pentest), you can see the number of required credits in **Credit(s) Per Pentest**. Whenever you adjust the scope, our algorithm updates the number of credits. Under **Credits**, you can also view your **Available Balance**.

## Next Step

If you're ready with your pentest, select **Save & Exit**. In the next screen, you can [review your work](/getting-started/review-pentest/) before submitting the pentest.
