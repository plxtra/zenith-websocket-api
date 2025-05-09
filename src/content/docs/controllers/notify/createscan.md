---
title: "Notify:CreateScan"
sidebar:
    label: CreateScan
---

Creates a persistent Scan and returns the assigned identifier, given the scanner parameters and details.

**Controller:** Notify\
**Topic:** `CreateScan`\
**Action:** Publish\
**Permissions:** None

## Request

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| Details    | Object  | Always    | A Scan Details object for identification. |
| Parameters | Object  | Always    | A Scan Parameters object for describing the scan rules. |
| IsActive   | Boolean | Sometimes | An optional flag setting whether the Scan should be Active when created. If omitted, defaults to true. |

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

See [Appendix K - Distribution Channels](../../../appendices/k-distribution-channels/) and the [Channel](../../../controllers/channel/) Controller for more information on Notification Channels and Channel settings.

## Response

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| ScanID      | String  | Always   | A unique identifier of the new Scan. |

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"CreateScan","TransactionID":1,"Data":{
	"Parameters":{
		"Type":"Market.Scan",
		"Criteria":["IsIndex"],
		"Target":["ASX[Demo]"],
		"Notifications":[
			{"Channel":"j5Tm6X"}
		]
	},
	"Details":{
		"Name":"Indexes",
		"Description":"Scan that matches all indexes",
		"Metadata":{"Category":"User"}
	},
	"IsActive":false
}}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"CreateScan","TransactionID":1,"Data":"Data":{
	"ScanID":"Umk8R2"
}}
```
