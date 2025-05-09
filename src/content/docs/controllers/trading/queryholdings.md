---
title: "Trading:QueryHoldings"
sidebar:
    label: QueryHoldings
---

Requests the current holdings for the given Account.

To uniquely identify a Holding, combine the Exchange and Code fields, along with the Account field if you care about cross-Account uniqueness.

**Controller:** Trading\
**Topic:** `QueryHoldings`\
**Action:** Publish\
**Permissions:** Zenith/Trading

## Request

| Name     | Type    | Expect   | Description |
| :------- | :------ | :------- | :--- |
| Account  | String  | Always   | The Account to request holdings for. |
| Exchange | String  | Optional | An Exchange to filter Holdings by. |
| Code     | String  | Optional | A symbol code to filter Holdings by. If provided, `Exchange` must also be provided. |

## Response

An array of Holding Change objects. See the [Holdings](../holdings/) topic for more information.
