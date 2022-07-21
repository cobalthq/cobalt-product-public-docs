---
title: "API Use Cases"
linkTitle: "API Use Cases"
weight: 100
description: >
  Includes practical uses for our API.
---

{{% pageinfo %}}
The pages in this book describe how you can use our API to manage your Assets
and pentests.
{{% /pageinfo %}}

This document assumes that you can run `curl` in a command line on your system.
You can also set up the REST calls in this book in other API clients such as:

- [Postman](https://learning.postman.com/docs/getting-started/introduction/)
- [Insomnia](https://docs.insomnia.rest/)

If you run `curl` from the command line, we recommend that you use the
[`jq`](https://stedolan.github.io/jq/) command line JSON processor to format output. 

Without the `| jq.`, you may have output that looks like:

```
{"pagination":{"next_page":null,"prev_page":null},"data":[{"resource":{"id":"YOUR-ORG-ID","name":"ORG-NAME","token":"YOUR-V2-ORGANIZATION-TOKEN"},"links":{"ui":{"url":"URL-WITH-YOUR-PENTESTS"}}}]}
```

If you add a `| jq .` to the end of your REST call, you may find it easier to
read the output:

```
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
