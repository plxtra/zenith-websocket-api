---
title: "Trading:QueryRequests"
sidebar:
    label: QueryRequests
---

Requests the pending Order Requests for the given Account.

**Controller:** Trading\
**Topic:** `QueryRequests`\
**Action:** Publish\
**Permissions:** Zenith/Trading

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Account | String | Always | The Account to request Order Requests for |
| OrderID | String | Optional | If supplied, will return any request against a specific Order |

## Response

An unordered array of Order Request details. See the [Requests](../requests/#order-request-object) subscription for more information.

