---
title: "API Use Cases"
linkTitle: "API Use Cases"
weight: 100
description: >
  Includes practical uses for our API.
---

{{% pageinfo %}}
The pages in this book describe how you can work with the Cobalt platform using
our API.
{{% /pageinfo %}}

## Introducing the Cobalt API

The Cobalt [RESTful API](/getting-started/glossary/#restful-api) gives you access to your assets, pentests, findings, and more. With our API, you can integrate Cobalt into your development and application security workflows—and automate your pentest processes.

Here are some examples of how you can scale your workflows:

- Retrieve [findings](https://docs.cobalt.io/v2/#findings) that our pentesters discovered during a pentest.
- Pull findings into your security dashboard to perform a holistic internal analysis.
- Integrate findings into your data visualization tool for a comprehensive view of your vulnerability and application landscape.

<div class="card">
  <div class="card-header">
    <b>API Documentation</b>
  </div>
  <div class="card-body">
    <p class="card-text">Read our comprehensive API documentation to learn how to send specific API requests and view examples.</p>
    <a href="https://docs.cobalt.io/v2/" target="_blank" class="btn btn-primary">Go to API Docs</a>
  </div>
</div>

{{< alert title="Note" color="primary" >}}
{{% api-token-intro %}} For insctructions, see [Create an API Token in the Cobalt UI](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui).<br><br>
To manage your API tokens, navigate to https://app.cobalt.io/settings/api-tokens. Learn more about [managing API tokens](/platform-deep-dive/cobalt-account/account-settings/#create-and-manage-api-tokens).
{{< /alert >}}

This document assumes that you can run `curl` in a command line on your system.
You can also set up the REST calls in this book in other API clients such as [Postman](https://learning.postman.com/docs/getting-started/introduction/) or [Insomnia](https://docs.insomnia.rest/).

If you run `curl` from the command line, we recommend that you use the
[`jq`](https://stedolan.github.io/jq/) command line JSON processor to format output. 

## Format JSON Responses

Without the `| jq.`, you may have output that looks like:

```json
{"pagination":{"next_page":null,"prev_page":null},"data":[{"resource":{"id":"YOUR-ORG-ID","name":"ORG-NAME","token":"YOUR-V2-ORGANIZATION-TOKEN"},"links":{"ui":{"url":"URL-WITH-YOUR-PENTESTS"}}}]}
```

If you add a `| jq .` to the end of your REST call, you may find it easier to
read the output:

```json
{
  "pagination": {
    "next_page": null,
    "prev_page": null
  },
  "data": [
    {
      "resource": {
        "id": "YOUR-ORG-ID",
        "name": "ORG-NAME",
        "token": "YOUR-V2-ORGANIZATION-TOKEN"
      },
      "links": {
        "ui": {
          "url": "URL-WITH-YOUR-PENTESTS"
        }
      }
    }
  ]
}

```

For your convenience, we include `| jq .` in all of our sample REST calls that
provide actual output.
