# Cobalt Public Product Documentation

You can find the source files for published Cobalt Product Documentation in this repository. It's:

- Built on the [Hugo](https://gohugo.io/) static site generator
- Themed with [Docsy](https://github.com/google/docsy)
- Written in [Goldmark](https://github.com/yuin/goldmark/), compatible with the [CommonMark](ihttps://commonmark.org/) Markdown specification

## Tips for small and quick changes

- If you wish to add a page or edit an existing one, you don't have to run the server locally.
- All you need to do is apply your changes in standard Markdown syntax and create a draft pull request.
- We have Netlify automation that creates a preview link to display your changes. You will find this link in your pull request, as well as in an email you will receive from the Netlify bot.

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

### Tools in Evaluation:

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

## Build the Docs Locally

To build and run the site locally, you need the following:

- A recent `extended` version of [Hugo](https://gohugo.io). For more information, see the [Docsy Getting Started Guide](https://www.docsy.dev/docs/getting-started/#prerequisites-and-installation) guide.
  - If you're installing Hugo on MacOS using `brew`, the default installation is the `extended` version. To confirm, run:

    ```
    hugo version
    ```

- If you already have Hugo installed, and have just cloned this repository, you'll should then [install two more NPM packages](https://github.com/google/docsy#prerequisites).

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

After you've made your working copy of the site repository, from its root folder, run:

```
hugo server -D
```

## Test Links and Alt Attributes

You can test links and alt text attributes with [htmltest](https://github.com/wjdp/htmltest). 

### Install htmltest

Follow the instructions to install `htmltest` in the /usr/local/bin folder. The current (1 Nov 2022)
website suggests the following command, which works if you're using the `bash` shell:

```
sudo curl https://htmltest.wjdp.uk | sudo bash -s -- -b /usr/local/bin
```

If you're using the zsh shell (default in MacOS):

```
sudo curl https://htmltest.wjdp.uk | sudo zsh -s -- -b /usr/local/bin
```

### Run htmltest

Once installed, run the following commands to make sure you've built the latest version of the docs
in the `public/` subdirectory:

```
hugo mod clean
hugo
```

You can then run the following command in the root directory of this repository.

```
htmltest
```

After you fix any bad links, and address accessibility issues, run the commands in this section again.

### Output from htmltest

You'll see error messages similar to:

#### Bad links (404s)

```
target does not exist --- platform-deep-dive/pentests/pentest-process/methodologies/api-methodologies/index.html --> ../../special-instructions
```

In this case, the `../../special-instructions` link does not exist.
- Links like this are prone to trouble, as they're relative links. Fix: use "absolute links".

#### Alt Text Missing

```
alt attribute missing --- integrations/index.html --> /integrations/Jira.png
```

With images, for accessibility, we need to include "Alt Text". In this case, you might see Markdown code like:

```
![](/gsg/PentestFlowOverview.png)
```

To accommodate screen readers, we need "Alt Text" similar to: 

```
![UI Flow for Pentests](/gsg/PentestFlowOverview.png "UI Flow for Pentests")
```

### Avoid htmltest Issues

The `.htmltest.yml` includes options to

- Avoid trailing slashes.
- Ignore links to RFC2606 URLs such as example.com

After you fix broken links, rerun the commands in the [Run htmltest](#run-htmltest) section. Otherwise,
you'll see the same errors that you "thought" you fixed.

While there are a couple of open issues with the output, related to the link
to our Zendesk articles, it does detect other broken links.

```
  Non-OK status: 403 --- index.html --> https://cobaltio.zendesk.com/hc/en-us/categories/360005476672-Cobalt-Platform
  Non-OK status: 403 --- index.html --> https://cobaltio.zendesk.com/hc/en-us/categories/360005476672-Cobalt-Platform
```

## English Grammar Linter (Vale)

For more information, see [GrammarLinter.md](./GrammarLinter.md)

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

### Link Punctuation Format Error

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

### Who to Ask for Help

Internal Cobalt #docs channel or ana-dashuk-cobalt.

## SOC2 Compliance

SOC2 is not a requirement, as this repository does *not* host customer-exposed production workloads. However,
the SOC2 conventions are a good practice. This repository deviates from SOC2 conventions in the following ways for the noted reasons:

- Allows updates to PRs without dismissing pull request approvals.
  - Supports minor changes, such as typo corrections, without having to restart the PR approval process.
  - Until we have a repository that supports doc builds, the documentation team (of one) needs to copy and iterate. 
- Allows administrators to bypass restrictions.
  - Supports "quality at speed" by allowing administrators to make / commit minor changes, such as typo corrections.
