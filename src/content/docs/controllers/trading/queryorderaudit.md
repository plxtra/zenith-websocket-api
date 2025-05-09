---
title: "Trading:QueryOrderAudit"
sidebar:
    label: QueryOrderAudit
---

Requests the Order Audit history for a given Account

**Controller:** Trading\
**Topic:** `QueryOrderAudit`\
**Action:** Publish\
**Permissions:** Zenith/Trading

## Request

| **Name** | **Type** | **Description** |
| :------- | :------- | :--- |
| Account  | String   | Required. The Account to request history for |
| FromDate | DateTime | Optional. The oldest date to retrieve records from |
| ToDate   | DateTime | Optional. The newest date to retrieve records to |
| Count    | Integer  | Optional. The maximum number of records to return |
| OrderID  | String   | Optional. An Order ID to filter the results by. |

## Response

An unordered array of Order Audit details. See the [Audit](../audit/#order-audit-object) subscription for more information.
