---
title: "API Use Cases"
linkTitle: "API Use Cases"
weight: 102
description: >
  How to get started with Cobalt APIs.
menu:
  main:
    weight: 20
---

{{% pageinfo %}}
Use this document with our [Cobalt API documentation](https://docs.cobalt.io) to
manage assets and pentests.
{{% /pageinfo %}}

We describe use cases where you can use a sequence of RESTful API calls to take
better advantage of our software. Our industry typically refers to these
commands as "REST calls".

{{%expand "Format your output with `jq`." %}}

We illustrate how to use our APIs with the `curl` command. When using `curl`,
the output typically appears on one line.

If you're working with a UNIX shell such as `bash`, we recommend that you use
the [jq](https://github.com/stedolan/jq) command-line processor to set up
_readable_ JSON responses.

For example, if you run a REST call on our
[authentication](https://docs.cobalt.io/v2/#authentication) endpoint, you may
see output that looks similar to:

```
{"pagination":{"next_page":null,"prev_page":null},"data":[{"resource":{"id":"<some_long_org_id>","name":"<Name
of your org>","token":"<some_org_token>"},"links":{"ui":{"url":"https://api.cobalt.io/links/<some_long_access_token>"}}}]}
```

Add a `| jq .` to the end of your `curl` command REST calls. You'll have an
easier time with the output.

{{% /expand %}}
