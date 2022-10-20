
---
title: "Overview of Cobalt Documentation"
linkTitle: "Overview"
no_list: true
type: "docs"
weight: 20

cascade:
- type: "blog"
  # set to false to include a blog section in the section nav along with docs
  toc_root: false
  _target:
    path: "/blog/**"
- type: "docs"
  _target:
    path: "/**"
menu:
  main:
    weight: 20
---

This page includes links to other Cobalt literature, including our
[Getting Started](./getting-started) guide.

<br>
<div class="mx-auto">
        <a class="btn btn-lg btn-primary mr-3 mb-4" href="https://cobaltio.zendesk.com/hc/en-us/categories/360005476672-Cobalt-Platform">
                Support Articles <i class="fas"></i>
        </a>
        <a class="btn btn-lg btn-outline-primary mr-3 mb-4" href="https://docs.cobalt.io">
                API Docs <i class="fab"></i>
        </a>
        <a class="btn btn-lg btn-info mr-3 mb-4" href="https://cobalt.io/blog">
                Blog Posts <i class="fab"></i>
        </a>
</div>

## Support Articles

When customers need help with the Cobalt app, they frequently rely on support articles, available through the [Cobalt Zendesk](https://cobaltio.zendesk.com/hc/en-us/categories/360005476672-Cobalt-Platform) interface.

If you're a Cobalt customer, connect to Zendesk and select the **Sign in** link.
Once connected, you'll have access to more support articles.

## API Documentation

Cobalt has a [RESTful API](https://docs.cobalt.io)
that allows you to call the following data related to your pentests:

- Organizations
- Assets
- Pentests
- Findings
- Events
- Tokens

To use our REST calls, you'll need an API Token from your
[Cobalt profile](https://app.cobalt.io/settings/api-token).


## Blog Posts

Cobalt has an extensive library of [blog posts](https://cobalt.io/blog),
designed to help and inform you about:

- Cobalt and our product
- Profiles for our pentesters
- Advice for our customers
- Standards and how you can meet them
- Life at Cobalt

<!--
Suggestion from Grahame: I know it's early days, but could be cool to link to a few of these articles. 
Especially any that are specifically relevant to the API. 
(Customer testimonials could also be good, in case anyone's coming to the API first.)
-->

{{% pageinfo %}}
Cobalt is creating product documentation. As we build it, we hope to help you
visualize how our product can help you simplify the pentest process.

We hope that future docs can help you make best use of Cobalt software.
{{% /pageinfo %}}

This documentation is a product of Cobalt Labs, Inc. As noted in our
[Terms of use](https://cobalt.io/terms/general), when we use "Us", "We", "Our", "Cobalt.io",
or "Cobalt, we're referring to Cobalt Labs, Inc., a Delaware Corporation. 

