---
title: "Notify:DeleteScan"
sidebar:
    label: DeleteScan
---

Deletes existing persistent Scan.

**Controller:** Notify\
**Topic:** `DeleteScan`\
**Action:** Publish\
**Permissions:** None

## Request

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| ScanID     | String  | Always    | The unique identifier of the existing Scan. |

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"DeleteScan","TransactionID":1,"Data":{"ScanID":"Umk8R2"}}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"DeleteScan","TransactionID":1}
```
