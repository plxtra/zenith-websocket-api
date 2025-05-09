---
title: "Trading:QueryRequestStatuses"
sidebar:
    label: QueryRequestStatuses
---

Requests the valid Pending Request Status definitions. Use the Provider property on an Account.

**Controller:** Trading\
**Topic:** `QueryRequestStatuses`\
**Action:** Publish\
**Permissions:** None

## Request

| Name     | Type   | Expect   | Description |
| :------  | :----- | :------- | :--- |
| Provider | String | Always   | The trading data provider to get Request Statuses for |

## Response

An unordered array of Request Status objects.

### Request Status object

An Request Status is uniquely identified by the Code.

| Name     | Type    | Expect   | Description |
| :------- | :------ | :------- | :--- |
| Code     | String  | Always   | The code identifying this Request Status. |
| Allows   | String  | Always   | The allowed actions in this state. One or more of the following values, separated by commas:<br>**None**: No actions permitted.<br>**Amend**: The Request is able to be amended.<br>**Cancel**: The Request is able to be cancelled.<br>**All**: The Request can amend or cancel. |
| Reason   | String  | Always   | The reasons behind this state. One or more of the following values, separated by commas:<br>**Unknown**: The reason is unknown.<br>**Normal**: State is a normal part of the Request lifecycle.<br>**Manual**: State was initiated manually.<br>**Abnormal**: State is abnormal, indicating a fault or other issue.<br>**Completed**: State represents a completed Request.<br>**Waiting**: State is due to a temporary wait |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"QueryRequestStatuses","TransactionID":1,"Data":{"Provider":"Motif[Demo]"}}
```

**Receive:**
```json
{
 "Controller":"Trading",
 "Topic":"QueryRequestStatuses",
 "Data":
 [
  {
   "Code":"Pending", "Reason":"Normal,Waiting", "Allows":"None"
  },
  {
   "Code":"Queued", "Reason":"Normal","Allows":"Amend,Cancel"
  },
  {
   "Code":"Submitted", "Reason":"Normal,Waiting","Allows":"None"
  },
  {
   "Code":"Completed", "Reason":"Normal,Completed","Allows":"None"
  },
  {
   "Code":"Rejected", "Reason":"Abnormal,Completed","Allows":"None"
  }
 ],
 "TransactionID":1
}
```
