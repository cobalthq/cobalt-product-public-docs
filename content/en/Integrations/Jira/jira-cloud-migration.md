---
title: "Migrate from native Jira Cloud to Integration Builder"
linkTitle: "Migrate from native Jira Cloud to Integration Builder"
weight: 50
description: >
  Learn how to migrate from the native Jira Cloud integration to the Integration Builder.
---

## Purpose

{{% pageinfo %}}

This guide is designed to assist organizations in transitioning from the native **Jira Cloud** integration to the new recipe-based integration created by the [**Integration Builder**](https://docs.cobalt.io/integrations/integrationbuilder/).

> ⚠️ Please note that this migration guide is not applicable if your organization uses a native **Jira Server** or a **Jira Data Center** integration.

{{% /pageinfo %}}

## Introduction

The document offers detailed, step-by-step instructions on utilizing **Integration Builder** recipes to establish bidirectional synchronization between a Cobalt pentest finding and a Jira issue. The level of automation in your workflow is directly related to the number of recipes you configure to tailor the behavior to your specific requirements.

We've added a variety of pre-built recipes to the Integration Builder's library to facilitate seamless bidirectional synchronization between your Jira Cloud and the Cobalt Platform. Depending on your workflow, you can choose to configure and use a subset of these recipes. The recipes are categorized into three groups:

1. Push finding from the Cobalt Platform to Jira Cloud
1. Updating the Cobalt Platform from Jira Cloud
1. Updating Jira Cloud from the Cobalt Platform

Different types of recipes call for different Jira Cloud workflow configurations. For instance, creating a Jira issue when a pentest vulnerability is discovered requires no additional workflow customization. However, if you wish to update your Jira issue from the Cobalt Platform, your Jira Cloud workflow needs specific [issue statuses](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-statuses-priorities-and-resolutions/#Issue-statuses). Additionally, if you want to update your Jira issue based on changes in the Cobalt Platform findings, you need to set up [transitions in your Jira workflow](https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows). This documentation will provide an example and cover the required Jira workflow changes later on.

## Migration

### Example Jira Project

To better understand the required migration steps and the recipes' configuration, This tutorial provides an introduction to a sample Jira Cloud project using the default [Kanban](https://www.atlassian.com/software/jira/templates/kanban) template. Let's assume that the workflow for the **Task** issue type of this sample project includes the following statuses:

![Sample Jira Cloud project workflow - Initial state](/integrations/Jira-Cloud-migration-sample-jira-cloud-project-workflow-initial-state.png "Sample Jira Cloud project workflow - Initial state")

- **To Do** (_default_, 'To do' category)
- **In Progress** (_default_, 'In progress' category)
- **Acceptance Testing** (_custom_, 'In progress' category)
- **Done** (_default_, 'Done' category)
- **Won't Do** (_custom_, 'Done' category)

Now, assuming that this project is already set up with native Jira Cloud integration in the Cobalt application. The native Jira Cloud integration does the following:

![Native Jira Cloud configuration](/integrations/Jira-Cloud-migration-native-jira-cloud-configuration.png "Native Jira Cloud configuration")

1.  In the _Native Jira Cloud_ project
1.  Create a **Task** Jira issue
1.  When a pentest finding is submitted and is in the **Pending Fix** state.
1.  Update the pentest finding state to **Ready for Retest** when the Jira **Task** status changes to **Acceptance Testing**.
1.  Update the pentest finding state to **Accepted Risk** when the Jira **Task** status changes to **Won't Do**.
