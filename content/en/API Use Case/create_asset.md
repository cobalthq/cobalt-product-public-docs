---
title: "Use our API to Create an Asset"
linkTitle: "Create an Asset"
weight: 110
description: >
  Use this sequence of REST calls to create an asset.
---

{{% pageinfo %}}
Use this document with our [Cobalt API documentation](https://docs.cobalt.io) to
manage assets and pentests.
{{% /pageinfo %}}

To create an [asset](../../getting-started/glossary/#asset) with our API, you'll
run the following general steps:

## Create an API Token in the Cobalt UI

1. Sign in to the app and navigate to https://app.cobalt.io/settings/api-tokens.
1. Enter an API Token Name.
1. Select Generate New Token.
1. In the modal that appears, you should see your API Token, in the **Secret
   Token** text box.

   {{% alert title="Note" color="note" %}}
   Save the API Token. After you exit the modal, you won't see the full token again.
   If you lose it, you may have to revoke the token and start over.
   {{% /alert %}}

## Use the API Token to authorize access 

Next, you can use the API Token to authorize access to our other endpoints. Take
the API Token that you generated
[earlier](#create-an-api-token-in-the-cobalt-ui). Substitute that value for
`YOUR-PERSONAL-API-TOKEN":

```
curl https://api.cobalt.io/orgs \
     -H "Authorization: Bearer YOUR-PERSONAL-API-TOKEN"
```
