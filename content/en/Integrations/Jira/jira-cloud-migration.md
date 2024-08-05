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
{{% /pageinfo %}}

## Introduction

The document offers detailed, step-by-step instructions on utilizing [**Integration Builder**](/integrations/integrationbuilder/_index/#overview) recipes to establish bidirectional synchronization between a Cobalt pentest finding and a Jira issue. The level of automation in your workflow is directly related to the number of recipes you configure to tailor the behavior to your specific requirements.

> ⚠️ Please note that this migration guide is not applicable if your organization uses a native **Jira Server** or a **Jira Data Center** integration.

> ℹ️ What exactly is a recipe? A recipe is a sequence of steps describing your custom workflow within a no-code editor. It comprises a trigger entry point followed by actions. For instance, if a pentest finding state changes in the Cobalt platform and your recipe is set to be triggered by this event, the recipe will execute and carry out the defined series of actions.
