---
title: "<Substitute your title>"
linkTitle: "<Substitute a possibly shorter title>"
# Change this weight, based on where it should go in the "Best Practices"
# section
weight: 600
# The `toc_hide` entry hides the link from the menu. The content still available
# at <URL>/bestpractices/. We'll remove the entry when we publish your work
toc_hide: true
description: >
  <Substitute the description of your choice.>
---

We include this template for your convenience. You're welcome to copy this file
(and change the filename) to help you write your article. Examine the source
code for this article, as you'll see some help text in comments.

<!-- For the title:

- If you want to address the OWASP item in general, use the name of the OWASP Top 10 item
- If your article is more specific, make sure it "stands out". We may have
  suggestions to help. -->

{{% pageinfo %}}
<Substitute a "catchy" summary, something like "You can protect your code from X
with <some technique.">
{{% /pageinfo %}}

If you're confident in your ability to organize written information, you're welcome to ignore this template. Otherwise, we present this template as one way to organize your work.

## Description

Introduce your topic to our audience of developers. While they'll certainly understand concepts like hostnames and IP addresses, you may need to explain security-specific concepts like ABAC and SELinux.

## Examples

Describe how problems might happen. Include consequences. When possible, incorporate code samples and commands. Developers are known to focus on code samples and commands as patterns (and anti-patterns).

## Prevention <or Prevent Name of Problem>

Address each example. If you've included code samples and commands earlier, include related samples to illustrate "good" patterns.

You could also set up a table of "bad" and "good" patterns.

## Alternatives

You could combine Examples and Prevention in different scenarios; some authors have organized articles with the following outline:

- Description
- Scenarios
  - Scenario 1 (with some descriptive title)
    - Example (with code sample)
    - Prevention (with code sample)
  - Scenario 2
  - ...
- Commentary

## References

Many readers want to read more about security. You're welcome to add references to other articles related to what you've written, such as those you've used to research your work. To avoid plagiarism, do reference and quote content that you use from others.
