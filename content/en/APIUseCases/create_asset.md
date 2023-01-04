---
title: "Create or Modify an Asset"
linkTitle: "Create/Modify an Asset"
weight: 110
description: >
  Run this sequence of REST calls to create an asset.
---

{{% pageinfo %}}
Use this document with our [Cobalt API documentation](https://docs.cobalt.io) to
define your assets on the Cobalt platform.
{{% /pageinfo %}}

To use our API, you need a Cobalt account with membership in your organization.
Your organization owner can create an account and
[assign you as a
member](https://cobaltio.zendesk.com/hc/en-us/articles/360058712491-How-do-I-add-new-users-).
Your organization owner is typically the user who interacts with the Cobalt
Customer Success Manager (CSM).

You can create an [asset](/platform-deep-dive/glossary/#asset) in the UI.
If you prefer to automate the process and/or work from the command line, you can also use
our API.

To create or modify an asset with our API, follow the sequence of commands shown
on this page.

## Create an API Token in the Cobalt UI

1. Navigate to https://app.cobalt.io/settings/api-tokens.
1. If needed, sign in to the app.
1. Enter an API Token Name.
1. Select Generate New Token.
1. In the modal that appears, you should see your API Token, in the **Secret
   Token** text box.

Save the API Token. After you close the overlay, you won't see the full token again.
If you lose it, you may have to revoke the token and start over.

<!-- Note: I've set up variables for `api-token` and `org-token`. Find them in
the repo in the layouts-shortcodes sub-directory. -->

Substitute the API token for `{{% api-token %}}` in the REST calls
described on this page.

## Use the API Token to Authorize Access 

Next, you can use the API Token to authorize access to the Cobalt API. Take
the API Token that you [generated](#create-an-api-token-in-the-cobalt-ui). Substitute that value for `{{% api-token %}}`:

```bash
curl https://api.cobalt.io/orgs \
     -H "Accept: application/vnd.cobalt.v2+json" \
     -H "Authorization: Bearer {{% api-token %}}" \
     | jq .
```

{{%expand "Review sample output." %}}
You should see output similar to:

```json
{
  "pagination": {
    "next_page": null,
    "prev_page": null
  },
  "data": [
    {
      "resource": {
        "id": "some_id",
        "name": "Name of your organization",
        "token": "{{% org-token %}}"
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
</br>
  
From the output, save the value for `token` as your organization token.
In our API documentation, you'll see this as `{{% org-token %}}`.

For more information, see our API reference documentation on the
[organizations](https://docs.cobalt.io/v2/#organizations) `orgs` endpoint.

## Create an Asset

Now that you have the following information:

- `{{% api-token %}}`
- `{{% org-token %}}` 

You can create an [asset](/platform-deep-dive/glossary/#asset) with the following REST call:

```bash
curl -X POST "https://api.cobalt.io/assets" \
  -H 'Accept: application/vnd.cobalt.v2+json' \
  -H 'Authorization: Bearer {{% api-token %}}' \
  -H 'Content-Type: application/vnd.cobalt.v2+json' \
  -H 'Idempotency-Key: {{% idempotency-key %}}' \
  -H 'X-Org-Token: {{% org-token %}}' \
  --data '{
            "title": "Test Asset",
            "description": "How to describe the asset to our pentesters",
            "asset_type": "web"
          }' \
  -v
```

For more information on each parameter, see our API reference documentation on
how to [Create an Asset](https://docs.cobalt.io/v2/#create-an-asset).

The command we use includes a `-v`, which sets up output in verbose mode. The
command works without it. However, you would see no response from this REST call.

When you review the output of the REST call with the `-v`, look for the line
with `HTTP/2`. If the command is successful, you'll see

| Message    | Meaning          |
|------------|------------------|
| HTTP/2 201 | Asset created    |

For a list of error codes, see the [Errors](https://docs.cobalt.io/v2/#errors)
section of our API reference.

### Next Steps

Once you create an asset, you can:

- Continue with our API. You can [Find Your Asset ID](#find-your-asset-id) and
then [Add or Modify Asset Details](#add-or-modify-asset-details).
- Sign in to our UI and modify details of your newly created asset.

## Find Your Asset ID

To add or modify information related to your asset, you'll need the asset ID.
You can find this ID with the REST call to [Get All Assets](https://docs.cobalt.io/v2/#get-all-assets):

```bash
curl -X GET "https://api.cobalt.io/assets" \
  -H "Accept: application/vnd.cobalt.v2+json" \
  -H "Authorization: Bearer {{% api-token %}}" \
  -H "X-Org-Token: {{% org-token %}}" \
  | jq .
```

If you've set up more than one asset, you may need to search through the output.
You can also limit the number of assets in the output with the `limit`
parameter. For more information about each asset response field, see our API
reference to [Get All Assets](https://docs.cobalt.io/v2/#get-all-assets).

{{% alert title="Tip" color="primary" %}}
You can use `jq` to filter assets by their `title` and `id`. To do so, end the
REST call with `| jq -r ".data[] | .resource | .title, .id"`.
{{% /alert %}}

{{% expand "Review sample output." %}}
```json
{
  "data": {
    "resource": {
      "id": "{{% asset-id %}}",
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
</br>

If you've set up more than one asset, you'll see the `id` in the same
object as the `title`, which you may have used to [create the asset](#create-an-asset).

Save the value of the asset `id` as `{{% asset-id %}}`. You'll use that ID,
which starts with `as_`, when updating or uploading information to your asset.

## Add or Modify Asset Details

Now that you've created an asset and have the asset ID, you can add more
information with the following REST call:


```bash
curl -X PUT 'https://api.cobalt.io/assets/{{% asset-id %}}' \
  -H 'Accept: application/vnd.cobalt.v2+json' \
  -H 'Authorization: Bearer {{% api-token %}}' \
  -H 'Content-Type: application/vnd.cobalt.v2+json' \
  -H 'X-Org-Token: {{% org-token %}}' \
  --data '{
            "title": "Updated title",
            "description": "Updated description",
            "asset_type": "web"
          }' \
  -v
```

When you review the output of the REST call with the `-v`, look for the line
with `HTTP/2`. If the command is successful, you'll see:

| Message    | Meaning          |
|------------|------------------|
| HTTP/2 204 | Asset updated    |

For a list of error codes, see the [Errors](https://docs.cobalt.io/v2/#errors)
section of our API reference.

<!-- Leaving out due to current bug, API-1069
## Include an Asset Attachment

You can help our pentesters by including one of the options noted in our
[Attachments](/getting-started/assets/asset-description/#attachments).
You can also upload the same types of files through our API. 

As an example, the following command uploads the `image.jpg` file as asset
documentation:

```bash
curl -X POST 'https://api.cobalt.io/assets/{{% asset-id %}}/attachments' \
  -H 'Accept: application/vnd.cobalt.v2+json' \
  -H 'Authorization: Bearer {{% api-token %}}' \
  -H 'Content-Type: multipart/form-data' \
  -H 'Idempotency-Key: {{% idempotency-key %}}' \
  -H 'X-Org-Token: {{% org-token %}}' \
  --form 'attachment=@"/path/to/image.jpg"' \
  -v
```

As with [Add or Modify Asset Details](#add-or-modify-asset-details), you'll see
no output when you run a properly formatted version of this command. -->
