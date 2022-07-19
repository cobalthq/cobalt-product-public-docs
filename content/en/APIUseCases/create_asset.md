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

1. Navigate to https://app.cobalt.io/settings/api-tokens.
1. If needed, sign in to the app.
1. Enter an API Token Name.
1. Select Generate New Token.
1. In the modal that appears, you should see your API Token, in the **Secret
   Token** text box.

Save the API Token. After you exit the modal, you won't see the full token again.
If you lose it, you may have to revoke the token and start over.

## Use the API Token to authorize access 

Next, you can use the API Token to authorize access to our other endpoints. Take
the API Token that you [generated](#create-an-api-token-in-the-cobalt-ui).
Substitute that value for `YOUR-PERSONAL-API-TOKEN`:

```
curl https://api.cobalt.io/orgs \
     -H "Accept: application/vnd.cobalt.v2+json" \
     -H "Authorization: Bearer YOUR-PERSONAL-API-TOKEN"
```

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

From this output, save the `api_org_token`.

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
            "description": "Lorem ipsum",
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
| HTTP/2 409 | No asset created |


## Confirm Your New Asset



## Update Your Asset With Details
