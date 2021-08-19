---
title: "Pentest Coverage"
linkTitle: "Pentest Coverage"
weight: 50
description: >
  To get a cost-effective but complete pentest, you need the "right" coverage for your assets.
---

{{% pageinfo %}}
Once you've sized an [asset](../asset-size/), you can select the desired pentest coverage.
{{% /pageinfo %}}

## Coverage and Credits

We have standard recommendations for our pentests. Each recommendation correlates to
a number of credits. 

{{% alert title="Note" color="note" %}}
The number of credits associated with a pentest size and coverage is subject to change. While we do
our best to keep this documentation up to date, the UI (and soon the API) is the authoritative
source of truth for the number of required credits.
{{% /alert %}}

### Sizing and Credits

We specify sizing criteria by asset type and size. For more information see our guide on how to
[Define Your Assets](../).

You can set your assets to one of five sizes:

| Size        | Default Credits |
|-------------|-----------------|
| Extra Small | 1               |
| Small       | 2               |
| Medium      | 3               |
| Large       | 4               |
| Extra Large | 5               |


### Coverage Levels and Credits

Cobalt includes the following coverage levels for each asset. The number of credits that we recommend
varies by coverage level:

| Coverage    | Description                                                       |
|-------------|-------------------------------------------------------------------|
| Extra Light | Covers up to two features.                                        |
| Light       | Sufficient for most general compliance test functionality.        |
| Standard    | Normal recommended coverage level for compliance tests.           |
| Large       | Extended coverage for critical assets with complex functionality. |
| Extra Large | Comprehensive test for assets with complex functionality.         |

These are general guidelines. Every situation is unique. Depending on the You may choose more (or less)
rigorous testing levels.

{{% alert title="Note" color="note" %}}
By default, if you specify an "Extra Small" Asset size, we give you a "Standard"
coverage level. Our algorithms reduce the number of credits for "Light" (-1) and "Extra
Light" (-2) coverage. And that algorithm would reduce the number of credits for a 
Small/Extra Small asset to an unacceptable level.
{{% /alert %}}

The following table specifies the number of credits associated with
different asset sizes and coverage levels:

|             | Extra Light | Light | Standard | Large | Extra Large |
|-------------|:-----------:|:-----:|:--------:|:-----:|:-----------:|
| Extra Small | X           | X     | 1        | 2     | 3           |
| Small       | X           | 1     | 2        | 3     | 4           |
| Medium      | 1           | 2     | 3        | 4     | 5           |
| Large       | 2           | 3     | 4        | 5     | 6           |
| Extra Large | 3           | 4     | 5        | 6     | 7           |

{{% alert title="Note" color="note" %}}
If you want a pentest report, you must set up a test of at least two (2) credits. For
example, if you're testing a `Small` asset, you must specify _Standard_ coverage or higher.
{{% /alert %}}

Now that you've defined your [asset type](../asset-type) and coverage,
it's time to [describe the asset](../asset-description) in detail.
