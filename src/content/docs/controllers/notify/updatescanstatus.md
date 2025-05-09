---
title: "Notify:UpdateScanStatus"
sidebar:
    label: UpdateScanStatus
---

Updates just the status of an existing persistent Scan.

**Controller:** Notify\
**Topic:** `UpdateScanStatus`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| ScanID     | String  | Always    | The unique identifier of the existing Scan. |
| IsActive   | Boolean | Sometimes | An optional flag setting whether the Scan should be Active after updating. If omitted, defaults to true. |

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"UpdateScanStatus","TransactionID":1,"Data":{
	"ScanID":"Umk8R2",
	"IsActive":false
}}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"UpdateScanStatus","TransactionID":1}
```
