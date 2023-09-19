---
title: "Cobalt API"
linkTitle: "Cobalt API"
weight: 100
aliases: /apiusecases/
description: >
  Includes practical uses for our API.
---

{{% pageinfo %}}
The pages in this section describe how you can work with the Cobalt platform using
our API.
{{% /pageinfo %}}

## Introducing the Cobalt API

The Cobalt [RESTful API](/getting-started/glossary/#restful-api) gives you access to your assets, pentests, findings, and more. With our API, you can integrate Cobalt into your development and application security workflows—and automate your pentest processes.

Here are some examples of how you can scale your workflows:

- Retrieve [findings](https://docs.cobalt.io/cobalt-api/v2) that our pentesters discovered during a pentest.
- Pull findings into your security dashboard to perform a holistic internal analysis.
- Integrate findings into your data visualization tool for a comprehensive view of your vulnerability and application landscape.

Read our comprehensive API documentation to learn how to send specific API requests and view examples.

<a href="https://docs.cobalt.io/cobalt-api/v2" target="_blank" class="btn btn-outline-primary rounded">Go to API Docs  »</a>

## Authentication

To work with the Cobalt API, you need a [personal API access token](/cobalt-api/create-personal-api-token/).

Because most API calls are scoped to a specific organization, you also need to include an [organization token](/cobalt-api/get-organization-token/) in a request header.

## Format JSON Responses

This document assumes that you can run `curl` in a command line on your system.
You can also set up the REST calls in this book in other API clients such as [Postman](https://learning.postman.com/docs/getting-started/introduction/) or [Insomnia](https://docs.insomnia.rest/).

If you run `curl` from the command line, we recommend that you use the
[`jq`](https://stedolan.github.io/jq/) command line JSON processor to format output.

Without the `| jq .`, you may have output that looks like:

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
