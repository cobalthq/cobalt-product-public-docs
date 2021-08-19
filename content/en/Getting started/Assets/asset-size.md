---
title: "Size Your Assets"
linkTitle: "Size Your Assets"
weight: 30
description: >
  Size your assets to ensure appropriate coverage.
---

{{% pageinfo %}}
Make sure your asset size matches its complexity.
{{% /pageinfo %}}

Once you've read this page, you'll know what to enter as an asset size. As
shown in the asset page of the UI, you can select sizes between _Extra Small_
and _Extra Large_.

![Asset Size](/AssetSize.png "Select a size for your asset")

The size you select depends on the complexity of your asset. We provide
guidance on this page for each of the following [Asset Types](../asset-type): 

<!-- Pulls info from the layouts/shortcodes/<name>.html file --> 
{{% asset-categories %}}

We also support tests that span multiple categories, including:

- Web + API
- Web + External Network
- Web + Mobile

This page provides basic guidance for assets in a single category. If you
have one of these "multiple category" assets, you'll see a link to a basic
guide in the UI. For example, if you've selected a Web + API Asset Type, you'll
see a link to a "Web + API Scoping Guide":

![Link to Scoping Guides in the UI](/ScopingGuide.png "Link to Web + API Scoping Guide")

The following sections can help you understand the following characteristics of assets:

- Different types
- How to classify an asset by size

Once you've selected a size for your asset, your next step is to review the
test [coverage](../coverage).

## Web

To scope a Web asset, you need to specify the number of the following
characteristics of that asset:

- [User Roles](../../glossary#user-role)
- [Dynamic Pages](../../glossary#dynamic-page)

When scoping an Asset, include every type of User Role and Dynamic Page.
Be thorough. If you forget certain roles or pages, your pentest might not
cover all critical details.

<!-- Review with Sam -->
{{% alert title="Note" color="note" %}}
You may not need to include _every_ user role. For example, if you have
dedicated administrative roles for backups, logs, and printers, that counts
as one (1) role.
{{% /alert %}}

Cobalt subdivides the number of User Roles and Dynamic Pages into the following categories:

|               | Extra Small | Small   | Medium   | Large    | Extra Large |
|---------------|:-----------:|:-------:|:--------:|:--------:|:-----------:|
| User Roles    | 1           | 1 - 2   | 3 - 5    | 5 - 7    | > 8         |
| Dynamic Pages | 0 - 30      | 30 - 60 | 60 - 90  | 90 - 120 | > 120       |

If your numbers fit in different categories, use your judgment. Review your
findings with your CSM, or email support@cobalt.io. If you choose a "bigger" category,
you're likely to get a more complete test.

As part of our tests for Dynamic Pages, we normally also test the backend API
endpoints frequently used to populate content on those pages.

In addition, our pentesters need to know more about your Web asset, including:

- Application type, such as a page-driven website or a [single-page application](https://developer.mozilla.org/en-US/docs/Glossary/SPA)
- Special endpoints associated with your dynamic pages

{{% alert title="Note" color="note" %}}
If the only APIs in your assets are used to populate dynamic web pages,
you may not need to set up a separate API asset. We test such APIs as
part of our tests of a Web asset.
{{% /alert %}}

## Mobile

To scope a Mobile asset, you need to specify the number of the following
characteristics of that asset:

- [User Roles](../../glossary#user-role)
- Operating Systems (OS), such as Android, iOS, Windows Phone, and Tizen
- [Mobile Screens](../../glossary#mobile-screen)

When scoping an Asset, include every User Role, Operating System, and Mobile Screen.
Be thorough. If you forget certain roles, pages, or screens, your pentest might not
cover all critical details.

Cobalt subdivides these properties into the following categories:

|               | Extra Small | Small   | Medium   | Large    | Extra Large |
|:--------------|:-----------:|:-------:|:--------:|:--------:|:-----------:|
| User Roles    | 1           | 1 - 2   | 3 - 5    | 5 - 7    | > 8         |
| Operating Systems | 1       | 1       | 1 - 2    | 1 - 3    | 1 - 3       |
| Mobile Screens | 1 - 19     | 20 - 39 | 40 - 59  | 60 - 79  | > 80        |

If your numbers fit in different categories, use your judgment. Review your
findings with your CSM, or email support@cobalt.io. If you choose a "bigger" category,
you're likely to get a more complete test.

## API

We can test both RESTful and GraphQL APIs. However, these APIs work in different
ways. While some RESTful APIs can have dozens of endpoints, a GraphQL API has a
single endpoint.

If you're sizing a GraphQL API, identify a list of [queries and
mutations](https://graphql.org/learn/queries/). For pentest purposes, that's
functionally equivalent to the number of RESTful API endpoints.

To scope an API, you need to specify the number of the following
characteristics of that asset:

- [User Roles](../../glossary#user-role)
- [(API) Endpoints](../../glossary#api-endpoint) or GraphQL queries/mutations

When scoping an asset, do include every _user role_ and _endpoint_.
If you forget some, you may sacrifice quality in penetration testing.

Cobalt subdivides the number of User Roles and Dynamic Pages into the following categories:

|               | Extra Small | Small   | Medium   | Large    | Extra Large |
|:--------------|:-----------:|:-------:|:--------:|:--------:|:-----------:|
| User Roles    | 1           | 1 - 2   | 3 - 5    | 5 - 7    | > 8         |
| Endpoints/Queries | 0 - 74      | 75-149  | 150-224  | 225-299  | 300-374     |

If your numbers fit in different categories, use your judgment. Review your
findings with your CSM, or email support@cobalt.io. If you choose a "bigger" category,
you're likely to get a more complete test.

## External Network

To scope an External Network, you need to specify the number of affected public IP addresses:

|                        | Extra Small   | Small       | Medium     | Large      | Extra Large |
|:-----------------------|:-------------:|:-----------:|:----------:|:----------:|:-----------:|
| Public IP Addresses    | 1 - 149       | 150 - 299   | 300 - 449  | 450 - 599  | 600 - 749   |

If you're working with more external IP addresses, you can set up multiple external network
assets. One way to organize such assets is by subnet.

## Internal Network

To scope an Internal Network, you need to specify the number of affected IP addresses and servers:

|                        | Extra Small   | Small       | Medium     | Large      | Extra Large |
|:-----------------------|:-------------:|:-----------:|:----------:|:----------:|:-----------:|
| Private IP Addresses   | 1 - 149       | 150 - 299   | 300 - 449  | 450 - 599  | 600 - 749   |
| Servers                | 1 - 49        | 50 - 99     | 100 - 149  | 150 - 199  | 200 - 249   |

If you're working with more internal IP addresses, you can set up multiple internal network
assets. One way to organize such assets is by subnet.

If you're working with servers on the cloud, you can also set up a [Cloud Configuration](#cloud-configuration)
asset.

## Cloud Configuration

Cobalt pentesters can test services on the following platforms:

- Google Cloud Platform (GCP)
- Amazon Web Services (AWS)
- Microsoft Azure Cloud (Azure)

Each platform includes different categories of services, such as EC2, databases, and machine
learning engines.

To scope a Cloud Configuration asset, total the number of services you use on that asset.

|                        | Extra Small  | Small     | Medium     | Large      | Extra Large |
|:-----------------------|:------------:|:---------:|:----------:|:----------:|:-----------:|
| Services               | 1 - 49       | 50 - 99   | 100 - 149  | 150 - 199  | 200 - 249   |

If you're working with more services, you can set up multiple cloud configuration assets.

## Assets of Multiple Types

In many cases, assets fit into multiple categories. To that end, Cobalt supports pentests on
assets in the following groups of categories:

- Web + API
- Web + Internal Network
- Web + Mobile 

The challenges with each of these combined asset types is complex, beyond the
scope of this Getting Started documentation. If you select a combined asset type,
our UI includes a pop-up scoping guide.

Once you've selected a size for your asset, your next step is to review
pentest [coverage](../coverage).
