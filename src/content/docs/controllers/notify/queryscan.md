---
title: "Notify:QueryScan"
sidebar:
    label: QueryScan
---

Requests the details of a specific persistent Scan.

**Controller:** Notify\
**Topic:** `QueryScan`\
**Action:** Publish\
**Permissions:** None

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| ScanID | String  | Always   | The persistent Scan identifier to request the details for. |

## Response

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| ScanID     | String  | Always    | The unique identifier of the existing Scan. |
| Details    | Object  | Always    | A Scan Details object for identification. |
| Parameters | Object  | Always    | A Scan Parameters object for describing the scan rules. |

### Scan Details object

| Name        | Type    | Expect    | Description |
| :---------- | :------ | :-------- | :---------- |
| Name        | String  | Always    | The user-defined name for the Scan. |
| Description | String  | Sometimes | An optional description providing further details of the Scan. |
| Metadata    | Object  | Always    | An user-defined object with string values. |
| IsWritable  | Boolean | Always    | True if the Scan can be edited, False for Read Only. |
| Status      | String  | Always    | The status of the Scan. One of:<br>**Active**: Scan is active. Will provide notifications and can be queried.<br>**Inactive**: Scan is inactive. Will not provide notifications, and cannot be queried.<br>**Faulted**: Scan has failed due to an error. Will not provide notifications, and cannot be queried. |

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

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"QueryScan","TransactionID":1,"Data":{"ScanID":"j5Tm6X"}}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"QueryScan","TransactionID":1,"Data":{
	"ScanID":"j5Tm6X",
	"Details":{"Name":"Hot Indices","Metadata":{"Category":"User"},"Status":"Active"},
	"Parameters":{
		"Type":"Market.Monitor",
		"Criteria":["IsIndex"],
		"Target":["ASX[Demo]"],
		"Notifications":[
			{"Channel":"j5Tm6X"}
		]
	}
}}
```
