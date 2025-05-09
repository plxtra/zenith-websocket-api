---
title: "Trading:QueryOrderStatuses"
sidebar:
    label: QueryOrderStatuses
---

Requests the valid Order Status definitions. Use the Provider property on an Account.

**Controller:** Trading\
**Topic:** `QueryOrderStatuses`\
**Action:** Publish\
**Permissions:** None

## Request

| Name     | Type   | Expect   | Description |
| :------  | :----- | :------- | :--- |
| Provider | String | Always   | The trading data provider to get Order Statuses for |
| Exchange | String | Optional | The Exchange to get Order Statuses for |

## Response

An unordered array of Order Status objects.

### Order Status object

An Order Status is uniquely identified by both the Code and Exchange.

| Name     | Type    | Expect   | Description |
| :------- | :------ | :------- | :--- |
| Code     | String  | Always   | The code identifying this Order Status. |
| Exchange | String  | Optional | The Exchange this Order Status is relevant to. If omitted, applies to Orders that have yet to be routed. |
| Allows   | String  | Always   | The allowed actions in this state. One or more of the following values, separated by commas:<br>**None**: No actions permitted.<br>**Trade**: The Order can potentially match in this state.<br>**Amend**: The Order is able to be amended.<br>**Move**: The order is able to be moved to another account.<br>**Cancel**: The Order is able to be cancelled.<br>**All**: The Order can amend, move, cancel, or match. |
| Reason   | String  | Always   | The reasons behind this state. One or more of the following values, separated by commas:<br>**Unknown**: The reason is unknown.<br>**Normal**: State is a normal part of the Order lifecycle.<br>**Manual**: State was initiated manually.<br>**Abnormal**: State is abnormal, indicating a fault or other issue.<br>**Completed**: State represents a completed Order.<br>**Waiting**: State is due to a temporary wait |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"QueryOrderStatuses","TransactionID":1,"Data":{"Provider":"Motif[Demo]"}}
```

**Receive:**
```json
{
 "Controller":"Trading",
 "Topic":"QueryOrderStatuses",
 "Data":
 [
  {
   "Code":"OnMarket", "Exchange":"ASX",
   "Reason":"Normal", "Allows":"Amend,Cancel,Trade"
  },
  {
   "Code":"Suspended", "Exchange":"ASX",
   "Reason":"Abnormal", "Allows":"None"
  },
  {
   "Code":"PartialFill", "Exchange":"ASX",
   "Reason":"Normal", "Allows":"All"
  },
  ...
  {
   "Code":"Filled", "Exchange":"ASX",
   "Reason":"Normal,Completed", "Allows":"Move"
  }
 ],
 "TransactionID":1
}
```
