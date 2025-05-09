---
title: "Notify:UpdateScan"
sidebar:
    label: UpdateScan
---

Updates an existing persistent Scan.

**Controller:** Notify\
**Topic:** `UpdateScan`\
**Action:** Publish\
**Permissions:** None

## Request

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| ScanID     | String  | Always    | The unique identifier of the existing Scan. |
| Details    | Object  | Always    | A Scan Details object for identification. |
| Parameters | Object  | Always    | A Scan Parameters object for describing the scan rules. |
| IsActive   | Boolean | Sometimes | An optional flag setting whether the Scan should be Active after updating. If omitted, defaults to true. |

All fields must be specified, even if they are not changing.

### Scan Details object

| Name        | Type    | Expect    | Description |
| :---------- | :------ | :-------- | :---------- |
| Name        | String  | Always    | The user-defined name for the Scan. |
| Description | String  | Sometimes | An optional description providing further details of the Scan. |
| Metadata    | Object  | Always    | An user-defined object with string values. |

### Scan Parameters object

| Name          | Type    | Expect    | Description |
| :------------ | :------ | :-------- | :---------- |
| Type          | String  | Always    | The scanner type. |
| Criteria      | Any     | Always    | The parameters of the Scan. Format depends on the type. |
| Target        | Any     | Always    | The targeting information for the Scan. Format depends on the type. |
| Notifications | Array   | Sometimes | An array of Notification Parameters objects that describe how this Scan should notify of changes. |

See [Appendix J1 - Scanners](../../../appendices/j1-scanners/) for more information on scanner criteria and targets.

### Notification Parameters object

| Name           | Type    | Expect    | Description |
| :------------- | :------ | :-------- | :---------- |
| ChannelID      | String  | Always    | The identifier of a Notification Channel. |
| CultureCode    | String  | Sometimes | An optional culture identification code. If omitted, notifications will be sent in English. |
| MinimumStable  | Time    | Sometimes | The minimum amount of time a Scan must match before a notification can be sent. |
| MinimumElapsed | Time    | Sometimes | The minimum amount of time since the last notification before a new one can be sent. |
| Settings       | Any     | Sometimes | Any channel-specific settings for this notification source. |

See [Appendix K - Distribution Channels](../../../appendices/k-distribution-channels/) for more information on channel settings.

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"UpdateScan","TransactionID":1,"Data":{
	"ScanID":"Umk8R2",
	"Parameters":{
		"Type":"Market.Scan",
		"Criteria":["And","IsIndex","LastPrice"],
		"Target":["ASX[Demo]"]
	},
	"Details":{
		"Name":"Indexes",
		"Description":"Scan that matches all indexes with a value",
		"Category":"User"
	}
}}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"UpdateScan","TransactionID":1}
```
