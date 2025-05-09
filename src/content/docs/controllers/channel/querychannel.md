---
title: "Channel:QueryChannel"
sidebar:
    label: QueryChannel
---

Requests the details of a specific Notification Channel.

**Controller:** Channel\
**Topic:** `QueryChannel`\
**Action:** Publish\
**Permissions:** None

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| ChannelID | String  | Always   | The Notification Channel identifier to request the details for. |

## Response

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| ChannelID  | String  | Always    | The unique identifier of the existing Channel. |
| Details    | Object  | Always    | A Channel Details object for identification. |
| Parameters | Object  | Always    | A Channel Parameters object for describing the Channel configuration. |

### Channel Details object

| Name        | Type    | Expect    | Description |
| :---------- | :------ | :-------- | :---------- |
| Name        | String  | Always    | The user-defined name for the Channel. |
| Description | String  | Sometimes | An optional description providing further details of the Channel. |
| Metadata    | Object  | Always    | An user-defined object with string values. |
| Status      | String  | Always    | The status of the Channel. One of:<br>**Active**: Channel is active and can distribute notifications.<br>**Inactive**: Channel is inactive. Will not distribute notifications - all notifications sent will be lost.<br>**Faulted**: Channel has failed due to an error. Will not provide notifications - all notifications sent will be lost. |

### Channel Parameters object

| Name          | Type    | Expect    | Description |
| :------------ | :------ | :-------- | :---------- |
| Type          | String  | Always    | The Distribution Method to use. |
| Settings      | Any     | Always    | The settings of the Channel. Format depends on the type. |

See [Appendix K - Distribution Channels](../../../appendices/k-distribution-channels/) for more information on the appropriate Notification Channel settings for a type.

## Example

**Send:**
```json
{"Controller":"Channel","Topic":"QueryChannel","TransactionID":1,"Data":{"ChannelID":"j5Tm6X"}}
```

**Receive:**
```json
{"Controller":"Channel","Topic":"QueryChannel","TransactionID":1,"Data":{
	"ChannelID":"j5Tm6X",
	"Details":{
		"Name":"ArcLight (Phone)",
		"Description":"ArcLight in Firefox Mobile",
		"Metadata":{"Category":"Phone"},
		"Status":"Active"
	},
	"Parameters":{
		"Type":"Push.Web",
		"Settings":{
			"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABi3j...",
			"expirationTime":null,
			"keys":{
				"auth":"uBw-GNUc...",
				"p256dh":"BD0ti6D2A..."
			}
		}
	}
}}
```
