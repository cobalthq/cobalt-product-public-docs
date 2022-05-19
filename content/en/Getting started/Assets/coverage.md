---
title: "Understand Pentest Coverage"
linkTitle: "Understand Pentest Coverage"
weight: 40
description: >
  To get a cost-effective but complete pentest, you need the "right" coverage for your assets.
---

{{% pageinfo %}}
Once you've sized an [asset](../asset-size), you can select the desired pentest coverage.
{{% /pageinfo %}}

## Coverage and Credits

We have standard recommendations for our pentests. Each recommendation correlates to
a number of credits. 

{{% alert title="Note" color="note" %}}
The number of credits associated with a pentest size and coverage is subject to change.
While we do our best to keep this documentation up to date, the UI is the authoritative
source of truth for the number of required credits.
{{% /alert %}}

### Sizing and Credits

We specify sizing criteria by asset type and size. For more information see our guide
on how to [Size Your Assets](../asset-size).

You can set your assets to one of five sizes:

| Size        | Default Credits |
|-------------|:---------------:|
| Extra Small | 4               |
| Small       | 8               |
| Medium      | 12              |
| Large       | 16              |
| Extra Large | 20              |


### Coverage Levels and Credits

Cobalt includes the following coverage levels for each asset. The number of credits that we recommend
varies by coverage level:

| Coverage    | Description                                                       |
|-------------|-------------------------------------------------------------------|
| Extra Light | Covers up to two features.                                        |
| Light       | Sufficient for most general compliance test functionality.        |
| Standard    | Recommended for compliance tests.           |
| Large       | Extended coverage for key assets with complex functionality. |
| Extra Large | Comprehensive tests for assets with complex functionality.         |

Every situation is unique. You may select more (or less) rigorous testing levels.

{{% alert title="Note" color="note" %}}
By default, an "Extra Small" Asset size (1 credit) is associated with "Standard"
coverage. Our algorithms reduce the number of credits for "Light" (-1) and "Extra
Light" (-2) coverage. Since we do not do zero-credit tests, we do not allow "Light"
or "Extra Light" coverage of an "Extra Small" asset.
{{% /alert %}}

The following table specifies the number of credits associated with
different asset sizes and coverage levels:

|             | Extra Light | Light | Standard | Large | Extra Large  |
|-------------|:-----------:|:-----:|:--------:|:-----:|:------------:|
| Extra Small | X           | X     | 4        | 8     | 12           |
| Small       | X           | 4     | 8        | 12    | 16           |
| Medium      | 4           | 8     | 12       | 16    | 20           |
| Large       | 8           | 12    | 16       | 20    | 24           |
| Extra Large | 12          | 16    | 20       | 24    | 28           |

### Pentest Reports

{{% pentest-report-requirements %}}
<!-- For content, see the following file: layouts/shortcodes/pentest-report-requirements.html -->

We do not create multiple pentest reports for large assets. For example, if you
want separate pentest reports for different APIs, set up different pentests
for each API.

Now that you've defined the asset type and coverage, you can now
[describe your asset](../asset-description) in detail.
