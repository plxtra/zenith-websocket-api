---
title: "Market:QueryMixedMarket"
sidebar:
    label: QueryMixedMarket
---

Attempts to construct a Mixed Market code

**Controller:** Market\
**Topic:** `QueryMixedMarket`\
**Action:** Publish\
**Permissions:** None

## Request

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Markets | Array | Required. An array of Market codes to try and combine. The order may be important depending on the selected strategy particular order. |
| Strategy | String | Optional. A Mixed Market Strategy to include in the result. See [Appendix H: Mixed Market Strategies](../../../appendices/h-mixed-market-strategies/) for more information. |

## Response

A string that identifies the best match for the given Markets, based on the user's permissions.

If only a single market is valid, returns that code.

If none of the markets are valid, returns null.

## Possible Errors

| Code | Description | Suffix |
| :--- | :--- | :--- |
| Strategy | The given Strategy is invalid | Strategy Code |
| Market.Tag | The supplied Markets are not compatible |  |
| Market.Error | The supplied Market is invalid | Market Code |

## Example 1

**Send:**
```json
{"Controller":"Market","Topic":"QueryMixedMarket","TransactionID":1,"Data":{"Markets":["ASX","CXA","NSX"]}}
```

**Receive:** (User has access to all markets.)

```json
{"Controller":"Market","Topic":"QueryMixedMarket","TransactionID":1,"Data":"ASX+CXA+NSX"}
```

**Receive:** (User does not have NSX access.)

```json
{"Controller":"Market","Topic":"QueryMixedMarket","TransactionID":1,"Data":"ASX+CXA"}
```

**Receive:** (User does not have any access.)

```json
{"Controller":"Market","Topic":"QueryMixedMarket","TransactionID":1,"Data":null}
```

## Example 2

**Send:**
```json
{"Controller":"Market","Topic":"QueryMixedMarket","TransactionID":1,"Data":{"Markets":["ASX","CXA","NSX"],"Strategy":"SomeInvalidCode"}}
```

**Receive:**

```json
{"Controller":"Market","Topic":"QueryMixedMarket","TransactionID":1,"Action":"Error","Data":"Strategy SomeInvalidCode"}
```
```json
{"Controller":"Market","Topic":"QueryMixedMarket","TransactionID":1,"Data":null}
```

