---
title: "Trading:QueryLimits"
sidebar:
    label: QueryLimits
---

**Note: This action is currently not supported, and is documented for a future release.**

Requests the current Trading Limits for the given Account. Individual symbols may have different limits to the general account limits.

A Trading Limit that is not provided generally indicates an unlimited value.

See [Appendix G: Trading Limit](../../../appendices/g-trading-limit/) for the Trading Limit codes.

**Controller:** Trading\
**Topic:** `QueryLimits`\
**Action:** Publish\
**Permissions:** Zenith/OrderPad

## Request:

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Account | String | Always | The Account to request limits for |
| Code | String | Optional | The code of the Symbol we're interested in trading. If supplied, `Market` must also be supplied |
| Market | String | Optional | The market we're interested in trading. If supplied, `Code` must also be supplied |

## Response:

An unordered array of Trading Limit objects.

### Trading Limit object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Code | String | Always | The unique code identifying this Trading Limit |
| Value | Decimal | Always | The value of this Trading Limit. |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"QueryLimits","TransactionID":1,"Data":{"Account":"1234[Demo]"}}
```

**Receive:**
```json
{"Controller":"Trading","Topic":"QueryLimits","TransactionID":1,"Data":[{"Code":"TotalValue.Maximum","Value":10000}]}
```
