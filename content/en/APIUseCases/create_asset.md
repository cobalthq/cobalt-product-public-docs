---
title: "Use Our API to Create an Asset"
linkTitle: "Create an Asset"
weight: 110
description: >
  Use this sequence of REST calls to create an asset.
---

{{% pageinfo %}}
Use this document with our [Cobalt API documentation](https://docs.cobalt.io) to
manage assets and pentests.
{{% /pageinfo %}}

<!-- Future task: set up variables for `YOUR-PERSONAL-API-TOKEN` and
`YOUR-V2-ORGANIZATION-TOKEN`. May support automated populating of REST calls. -->

This page describes how you can use our API To create an [asset](../../getting-started/glossary/#asset). 

## Create an API Token in the Cobalt UI

1. Navigate to https://app.cobalt.io/settings/api-tokens.
1. If needed, sign in to the app.
1. Enter an API Token Name.
1. Select Generate New Token.
1. In the modal that appears, you should see your API Token, in the **Secret
   Token** text box.

Save the API Token. After you exit the modal, you won't see the full token again.
If you lose it, you may have to revoke the token and start over.

Substitute the API Token for `YOUR-PERSONAL-API-TOKEN` in the REST calls
described on this page.

## Use the API Token to authorize access 

Next, you can use the API Token to authorize access to our other endpoints. Take
the API Token that you [generated](#create-an-api-token-in-the-cobalt-ui).
Substitute that value for `YOUR-PERSONAL-API-TOKEN`:

```
curl https://api.cobalt.io/orgs \
     -H "Accept: application/vnd.cobalt.v2+json" \
     -H "Authorization: Bearer YOUR-PERSONAL-API-TOKEN"
```

{{%expand "Review sample output." %}}
You should see output similar to:

```
{
  "pagination": {
    "next_page": null,
    "prev_page": null
  },
  "data": [
    {
      "resource": {
        "id": "some_id",
        "name": "Saxophone - Alto",
        "token": "YOUR-V2-ORGANIZATION-TOKEN"
      },
      "links": {
        "ui": {
          "url": "https://api.cobalt.io/links/not_a_jwt_token"
        }
      }
    }
  ]
}
```
{{% /expand %}}
  
From the output, save the value for `token`. That is your organization token.
In our API documentation, you'll see this as `YOUR-V2-ORGANIZATION-TOKEN`.

For more information, see our API reference documentation on the
[organizations](https://docs.cobalt.io/v2/#organizations) `orgs` endpoint.

## Create an Asset

Now that you have the following information:

- `YOUR-PERSONAL-API-TOKEN`
- `YOUR-V2-ORGANIZATION-TOKEN` 

You can create an [Asset](../getting-started/glossary/#asset) with the following
REST call:

```
curl -X POST "https://api.cobalt.io/assets" \
  -H 'Accept: application/vnd.cobalt.v2+json' \
  -H 'Authorization: Bearer YOUR-PERSONAL-API-TOKEN' \
  -H 'Content-Type: application/vnd.cobalt.v2+json' \
  -H 'Idempotency-Key: A-UNIQUE-IDENTIFIER-TO-PREVENT-UNINTENTIONAL-DUPLICATION' \
  -H 'X-Org-Token: YOUR-V2-ORGANIZATION-TOKEN' \
  -v
  --data '{
            "title": "Test Asset",
            "description": "How to describe the asset to our pentesters",
            "asset_type": "web"
          }'
```

For more information on each parameter, see our API Reference documentation on
how to [Create an Asset](https://docs.cobalt.io/v2/#create-an-asset).

The command we use includes a `-v`, which sets up output in verbose mode. The
command works without it; however, you would see no response from the REST call.

When you review the output of the REST call with the `-v`, look for the line
with `HTTP/2`. You'll see one of the following lines:
<!-- The output is associated with a `201` message, which doesn't include
results, which is why I recommend a `-v` -->

| Message    | Meaning          |
|------------|------------------|
| HTTP/2 201 | Asset created    |
| HTTP/2 401 | No asset created. Check the value of your API Token|
| HTTP/2 404 | No asset created. Check the value of YOUR-V2-ORGANIZATION-TOKEN|
| HTTP/2 409 | No asset created |

<!-- Maybe this table really belongs in our API reference? -->

## Confirm Your New Asset

You can now confirm your new Asset through the UI. But to add more information
to your Asset, you'll need the Asset ID. In this section, you'll learn how to
find that ID over REST.

Start by running the REST call to [Get All Assets](https://docs.cobalt.io/v2/#get-all-assets):

```
curl -X GET "https://api.cobalt.io/assets" \
  -H "Accept: application/vnd.cobalt.v2+json" \
  -H "Authorization: Bearer YOUR-PERSONAL-API-TOKEN" \
  -H "X-Org-Token: YOUR-V2-ORGANIZATION-TOKEN"
```

If you've set up more than one Asset, you may need to search through the output.
For more information about each Asset response field, see our API documentation
reference to [Get All Assets](https://docs.cobalt.io/v2/#get-all-assets).

{{% expand "Review sample output." %}}
```
{
  "data": {
    "resource": {
      "id": "RESOURCE-ID",
      "title": "Test Asset",
      "description": "How to describe the asset to our pentesters",
      "asset_type": "web",
      "logo": null,
      "attachments": []
    },
    "links": {
      "ui": {
        "url": "https://api.cobalt.io/links/<endpoint for the asset>"
      }
    }
  }
}
```
{{% /expand %}}

Before you can update the asset with more information, you need the `id` for the
Asset. If you've set up more than one Asset, you'll need to identify the `title`
that you used when you [created the asset](#create-an-asset).

## Update Your Asset With Details

Now that you've created an Asset, you may want to add more information. Now that
you've 
