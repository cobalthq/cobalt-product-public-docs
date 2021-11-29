---
title: "Specify Asset Type"
linkTitle: "Specify Asset Type"
weight: 20
description: >
  What kind of asset do you have?
---

{{% pageinfo %}}
Help us find the right pentesters for your asset.
{{% /pageinfo %}}

For each asset, we provide guidance for each of the following asset types:  

| Asset Type       | Description                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| Web              | An online application (app). **Includes APIs that supply data to the (Web) app**.                     |
| Mobile           | Any application intended for smart phones or tablets.                                             |
| API              | API is an Application Programming Interface. Use for APIs independent of a Web app. |
| External Network | Any network that's directly exposed to the internet.                                              |
| Internal Network | Any network with either a limited or no interface to the internet.                                |
| Cloud Config     | For systems on "the Cloud," using services such as Amazon AWS, Microsoft Azure, or Google GCP.    |

We also support tests that span two categories, including:

- Web + API
  - If the only APIs you use supply information to your web app, select the 
    **Web** asset type. We test those APIs as part of web-only tests.
- Web + External Network
- Web + Mobile

Once you've classified your asset, select an Asset Type:

![Select an Asset Type](/gsg/AssetType.png "Select an asset type")

The next step is to [Size Your Assets](../asset-size)
