---
title: "Get an Organization Token"
linkTitle: "Get an Organization Token"
weight: 120
description: >
  Learn how to retrieve an organization token using the API.
---

{{% pageinfo %}}
Because most API calls are scoped to a specific [organization](/platform-deep-dive/organization/), you also need an organization token to send API requests.
{{% /pageinfo %}}

To get an organization token:

1. [Create a personal API token](/cobalt-api/-create-personal-api-token/).
1. Send a request to retrieve all organizations you belong to. Replace `{{% api-token %}}` with your token.
    ```bash
    curl -X GET "https://api.cobalt.io/orgs" \
        -H "Accept: application/vnd.cobalt.v2+json" \
        -H "Authorization: Bearer {{% api-token %}}" \
        | jq .
1. From the output, save the `token` value for the desired organization. In our API documentation, you'll see this as `{{% org-token %}}`.

    Example response:
    ```json
    {
      "data": [
        {
          "resource": {
            "id": "some_id",
            "name": "Name of your organization",
            "token": "{{% org-token %}}"
          },
          "links": {
            "ui": {
              "url": "https://api.cobalt.io/links/link-to-web-app"
            }
          }
        }
      ],
      "pagination": {
        "next_page": "/orgs?cursor=a1b2c3d4",
        "prev_page": "/orgs?cursor=4d3c2b1a"
      }
    }
    ```

Include the organization token in the `X-Org-Token` header of your requests.

```bash
-H "X-Org-Token: YOUR-V2-ORGANIZATION-TOKEN"
```

For more information, see our API reference documentation on the [organizations](https://docs.cobalt.io/v2/#organizations) endpoint.
