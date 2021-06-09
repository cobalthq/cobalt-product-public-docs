# Cobalt Public Product Documentation

You can find the source files for published Cobalt Product Documentation in this repository. It's:

- Built on the [Hugo](https://gohugo.io/) static site generator
- Themed with [Docsy](https://github.com/google/docsy)
- Written in the [CommonMark](ihttps://commonmark.org/) Markdown specification

## Build Prerequisites

When editing documentation, you should learn how to [build the docs "locally"](#build-the-docs-locally) on your system. To set up that build, you need to install:

- The package manager for your operating system
- Hugo
- npm (Node package manager)
- gem (Ruby package manager)

In addition, the following tools can help you verify ("lint") proposed documentation changes:

- Spell checker such as `aspell` or `ispell`
- Markdown linter; we use `markdownlint-cli`

### Tools in evaluation:

- A link checker <!-- such as [html-proofer](https://github.com/gjtorikian/html-proofer) -->
- [Vale](https://github.com/errata-ai/vale), a syntax-aware linter 
- [Netlify](https://www.netlify.com/) for CI tests and doc deployment


## Docsy

[Docsy](https://github.com/google/docsy) is a Hugo theme for technical documentation sites, providing easy site navigation, structure, and more.

The theme is included in this project as a Git submodule:

```bash
▶ git submodule
 a053131a4ebf6a59e4e8834a42368e248d98c01d themes/docsy (heads/master)
```

The theme is based on the [Docsy Example Project](https://example.docsy.dev/). For detailed theme instructions, see the Docsy user guide: https://docsy.dev/docs/.

## Build the docs locally

To build and run the site locally, you need a recent `extended` version of [Hugo](https://gohugo.io). For more information, see the [Docsy Getting Started Guide](https://www.docsy.dev/docs/getting-started/#prerequisites-and-installation) guide.

If you're installing Hugo on MacOS using `brew`, the default installation is the `extended` version. To confirm, run:

```
hugo version
```

Once you've made your working copy of the site repo, from the repo root folder, run:

```
hugo server
```

## Run container locally

You can run docsy-example inside a [Docker](https://docs.docker.com/)
container, the container runs with a volume bound to the `docsy-example`
folder. This approach doesn't require you to install any dependencies other
than [Docker Desktop](https://www.docker.com/products/docker-desktop) on
Windows and Mac, and [Docker Compose](https://docs.docker.com/compose/install/)
on Linux.

1. Build the docker image 

   ```bash
   docker-compose build
   ```

1. Run the built image

   ```bash
   docker-compose up
   ```

   > NOTE: You can run both commands at once with `docker-compose up --build`.

1. Verify that the service is working. 

   Open your web browser and type `http://localhost:1313` in your navigation bar,
   This opens a local instance of the docsy-example homepage. You can now make
   changes to the docsy example and those changes will immediately show up in your
   browser after you save.

### Cleanup

To stop Docker Compose, on your terminal window, press **Ctrl + C**. 

To remove the produced images run:

```console
docker-compose rm
```
For more information see the [Docker Compose
documentation](https://docs.docker.com/compose/gettingstarted/).

## Troubleshooting

As you run the website locally, you may run into the following error:

```
➜ hugo server

INFO 2021/01/21 21:07:55 Using config file: 
Building sites … INFO 2021/01/21 21:07:55 syncing static files to /
Built in 288 ms
Error: Error building site: TOCSS: failed to transform "scss/main.scss" (text/x-scss): resource "scss/scss/main.scss_9fadf33d895a46083cdd64396b57ef68" not found in file cache
```

This error occurs if you have not installed the extended version of Hugo.
See our [user guide](https://www.docsy.dev/docs/getting-started/) for instructions on how to install Hugo.

## Work in Progress

### Add CODEOWNERS
[CODEOWNERS](.github/CODEOWNERS)

### Who to ask for help
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
