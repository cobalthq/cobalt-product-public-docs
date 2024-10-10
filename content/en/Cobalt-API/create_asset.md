---
title: "Create or Modify an Asset"
linkTitle: "Create/Modify an Asset"
weight: 140
aliases: /apiusecases/create_asset/
description: >
  Run this sequence of REST calls to create an asset.
---

{{% pageinfo %}}
Use this document with our [Cobalt API documentation](/cobalt-api/documentation/v2) to
define your assets on the Cobalt platform.
{{% /pageinfo %}}

To use our API, you need a Cobalt account with membership in your organization.
Your organization owner can create an account and
[assign you as a
member](/platform-deep-dive/organization/manage-users/#invite-users).
Your organization owner is typically the user who interacts with the Cobalt
Customer Success Manager (CSM).

You can create an [asset](/getting-started/glossary/#asset) in the UI.
If you prefer to automate the process and/or work from the command line, you can also use
our API.

To create or modify an asset with our API, follow the sequence of commands shown
on this page.

## What You Need

{{% api-what-you-need %}}

## Create an Asset

You can create an [asset](/getting-started/glossary/#asset) with the following REST call:

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
how to [Create an Asset](/cobalt-api/documentation/v2/#create-an-asset).

The command we use includes a `-v`, which sets up output in verbose mode. The
command works without it. However, you would see no response from this REST call.

When you review the output of the REST call with the `-v`, look for the line
with `HTTP/2`. If the command is successful, you'll see

| Message    | Meaning          |
|------------|------------------|
| HTTP/2 201 | Asset created    |

For a list of error codes, see the [Errors](/cobalt-api/documentation/v2/#errors)
section of our API reference.

### Next Steps

Once you create an asset, you can:

- Continue with our API. You can [Find Your Asset ID](#find-your-asset-id) and
then [Add or Modify Asset Details](#add-or-modify-asset-details).
- Sign in to our UI and modify details of your newly created asset.

## Find Your Asset ID

To add or modify information related to your asset, you'll need the asset ID.
You can find this ID with the REST call to [Get All Assets](/cobalt-api/documentation/v2/#get-all-assets):

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
reference to [Get All Assets](/cobalt-api/documentation/v2/#get-all-assets).

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

For a list of error codes, see the [Errors](/cobalt-api/documentation/v2/#errors)
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
