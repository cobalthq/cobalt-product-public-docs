This is the source repository for Cobalt public product documentation.

## Description

Cobalt documentation is built with the [Hugo](https://gohugo.io/) static site generator. Source files are written in [GitHub Flavored Markdown](https://github.github.com/gfm/).

TODO: You can find our documentation at https://docs.cobalt.io.

The remainder of this README specifies how you can build and install Cobalt.io documentation locally.

## Recommendations

Install the following software:

- A spell checker such as `aspell` or `ispell`
- Markdown linting such as `markdownlint-cli`

You should be able to install these packages with the tools native to your operating system. Ideally, you should also integrate these tools with the IDE of your choice.

## Prerequisites

TODO: Add requirements for tooling
Assumption: bash shell

```
Include commands in code.
```

## Installation

TODO: Add step-by-step instructions on how to build documentation locally.

1. Step one.

   ```
   Include what you'd run at the CLI.
   ```

## Testing

TODO: add info on how to run tests locally, ideally:

- Spelling
- Markdown syntax
- Link checks
- (eventually) Vale

Specify what's run in external CI, even if run by outside vendors (such as Netlify)

## Deployment
Add additional notes about how to deploy this on a live system

## Add CODEOWNERS
[CODEOWNERS](.github/CODEOWNERS)

## Who to ask for help
mjang-cobalt, @mikejang on Slack, #docs channel

## SOC2 Compliance

This repository complies only with some of the SOC2 compliant conventions laid out in our [Git conventions](https://zombie.atlassian.net/wiki/spaces/ENG/pages/540770575/Git%2Bconventions) Confluence page.

While this repository does *not* host customer-exposed production workloads, the SOC2 conventions are a good practice.
This repository deviates from SOC2 conventions in the following ways for the noted reasons:

- Allows updates to PRs without dismissing pull request approvals.
  - Supports minor changes, such as typo corrections, without having to restart the PR approval process.
  - Until I have a repository that supports doc builds, I need to copy and iterate. When I'm ready for input from others, I'll commit to requesting approvals for "major" changes.
- Allows administrators to bypass restrictions.
  - Supports "quality at speed" by allowing administrators to make / commit minor changes, such as typo corrections.
