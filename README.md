# Cobalt Public Product Documentation

You can find the source files for published Cobalt Product Documentation in this repository. It's:

- Built on the [Hugo](https://gohugo.io/) static site generator
- Themed with [Docsy](https://github.com/google/docsy)
- Written in [Goldmark](https://github.com/yuin/goldmark/), compatible with the [CommonMark](ihttps://commonmark.org/) Markdown specification

## Build Prerequisites

When editing documentation, you should learn how to [build the docs "locally"](#build-the-docs-locally) on your system. To set up that build, you need to install:

- The package manager for your operating system
- Hugo
- npm and Node.js from nodejs.org
  - Do **not** install with brew; risk of version conflicts
- gem, the Ruby package manager

In addition, the following tools can help you verify ("lint") proposed documentation changes:

- Spell checker such as `aspell` or `ispell`
- Markdown linter; we use `markdownlint-cli`

### Tools in evaluation:

- [Vale](https://github.com/errata-ai/vale), a syntax-aware linter 
- [Netlify](https://www.netlify.com/) for CI tests and doc deployment


## Docsy

[Docsy](https://github.com/google/docsy) is a Hugo theme for technical documentation sites, providing easy site navigation, structure, and more.

This repository includes the theme as a Git submodule:

```bash
▶ git submodule
 f82dd5efa0eb5a03086498686f9e60f7bd2bb5f3 themes/docsy (remotes/origin/tekton-example-23-gf82dd5e)
```

The theme is based on the [Docsy Example Project](https://example.docsy.dev/). For detailed theme instructions, see the Docsy user guide: https://docsy.dev/docs/.

## Build the docs locally

To build and run the site locally, you need the following:

- A recent `extended` version of [Hugo](https://gohugo.io). For more information, see the [Docsy Getting Started Guide](https://www.docsy.dev/docs/getting-started/#prerequisites-and-installation) guide.
  - If you're installing Hugo on MacOS using `brew`, the default installation is the `extended` version. To confirm, run:

    ```
    hugo version
    ```

- If you already have Hugo installed, and have just cloned this reposoitory, you'll should then [install two more NPM packages](https://github.com/google/docsy#prerequisites).

  ```
  sudo npm install -D --save autoprefixer
  sudo npm install -D --save postcss-cli
  ```

- Set up the Docsy theme

  ```
  git submodule update --init --recursive
  ```

  - There's a bug, https://github.com/google/docsy/issues/626. Use the workaround described in the bug to point the
     Docsy submodule to a specific commit.

After you've made your working copy of the site repo, from the repo root folder, run:

```
hugo server -D
```

## Test links

You can test links with [htmltest](https://github.com/wjdp/htmltest). The `.htmltest.yml` includes options to
avoid trailing slashes. The `htmltest` command works on the HTML content built
in the public/ subdirectory.

After you fix broken links, run the following commands to rebuild content in
the public/ subdirectory:

```
hugo mod clean
hugo
```

If you don't run these commands, you'll see the same link errors that you "thought" you fixed.

You can then rerun the htmltest command.

While there are a couple of open issues with the output, related to the link
to our Zendesk articles, it does detect other broken links.

```
  Non-OK status: 403 --- index.html --> https://cobaltio.zendesk.com/hc/en-us/categories/360005476672-Cobalt-Platform
  Non-OK status: 403 --- index.html --> https://cobaltio.zendesk.com/hc/en-us/categories/360005476672-Cobalt-Platform
```

## Review Grammar

This repository includes `beta` rules based on the [Vale grammar linter](docs.errata.ai/vale). You can set
up a Vale plugin with the VSCode IDE, per https://github.com/errata-ai/vale-vscode. You can find these rules
in the `styles/` subdirectory. They include:

- Modified rules from GitLab in the `cobalt/` subdirectory
- [Google Developer Style Guide](https://github.com/errata-ai/Google) rules, customized for Vale
- Rules associated with the [write-good](https://github.com/btford/write-good) grammar linter

<<<<<<< HEAD
These rules are a "Work in Progress"; we may overrule/modify them as we use them to evaluate Cobalt content.
=======
These rules are a "Work in Progress"; we may overrule/modify them as we use them to review Cobalt content.
>>>>>>> a9200f2 ([DOCS-30] Set up Vale linting rules (#55))

## Search Engine Optimization (SEO)

Includes custom settings in layouts/partials/head.html for `<title>` and `<meta>` tags. Based in part on https://harrycresswell.com/writing/hugo-seo-accurate-page-titles/.

## Troubleshooting

### Build Errors

As you run the website locally, you may run into the following errors:

```
➜ hugo server

INFO 2021/01/21 21:07:55 Using config file: 
Building sites … INFO 2021/01/21 21:07:55 syncing static files to /
Built in 288 ms
Error: Error building site: TOCSS: failed to transform "scss/main.scss" (text/x-scss): resource "scss/scss/main.scss_9fadf33d895a46083cdd64396b57ef68" not found in file cache
```

This error occurs for one of the following reasons:

- If you haven't installed the extended version of Hugo. 
  See the Docsy [user guide](https://www.docsy.dev/docs/getting-started/) for instructions on how to install Hugo.
- If you haven't installed the `postcss-cli` NPM package.

### Link punctuation format error

If you run into a format error, where punctuation seems to have extra space after links,
you may want to reconfigure your IDE. For example, if you use vim, you can add
the following lines to your vim configuration file (~/.vimrc):

```
set noendofline
set nofixendofline
```

## Work in Progress

### Add CODEOWNERS

[CODEOWNERS](.github/CODEOWNERS)

### Who to ask for help

<<<<<<< HEAD
mjang-cobalt, @mikejang on Slack, #docs channel

## SOC2 Compliance

This repository complies only with some of the SOC2 compliant conventions laid out in our [Git conventions](https://zombie.atlassian.net/wiki/spaces/ENG/pages/540770575/Git%2Bconventions) Confluence page.
=======
mjang-cobalt, @mikejang on the Cobalt internal #docs Slack channel

## SOC2 Compliance
>>>>>>> a9200f2 ([DOCS-30] Set up Vale linting rules (#55))

SOC2 is not a requirement, as this repository does *not* host customer-exposed production workloads. However,
the SOC2 conventions are a good practice. This repository deviates from SOC2 conventions in the following ways for the noted reasons:

- Allows updates to PRs without dismissing pull request approvals.
  - Supports minor changes, such as typo corrections, without having to restart the PR approval process.
  - Until we have a repository that supports doc builds, the documentation team (of one) needs to copy and iterate. 
- Allows administrators to bypass restrictions.
  - Supports "quality at speed" by allowing administrators to make / commit minor changes, such as typo corrections.
