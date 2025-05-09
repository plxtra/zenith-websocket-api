---
title: "Trading:QueryBalances"
sidebar:
    label: QueryBalances
---

Requests the current account balances for the given Account

**Controller:** Trading\
**Topic:** `QueryBalances`\
**Action:** Publish\
**Permissions:** Zenith/Trading

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Account | String | Always | The Account to request balances for |

## Response

An unordered array of Balance objects. See the [Balances](../balances/#balance-object) subscription for more information.

