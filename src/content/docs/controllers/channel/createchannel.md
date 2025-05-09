---
title: "Channel:CreateChannel"
sidebar:
    label: CreateChannel
---

Creates a Notification Channel and returns the assigned identifier, given the channel parameters and details.

**Controller:** Channel\
**Topic:** `CreateChannel`\
**Action:** Publish\
**Permissions:** None

## Request

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| Details    | Object  | Always    | A Channel Details object for identification. |
| Parameters | Object  | Always    | A Channel Parameters object for describing the Channel's configuration. |
| IsActive   | Boolean | Sometimes | An optional flag setting whether the Channel should be Active when created. If omitted, defaults to true. |

### Channel Details object

| Name        | Type    | Expect    | Description |
| :---------- | :------ | :-------- | :---------- |
| Name        | String  | Always    | The user-defined name for the Channel. |
| Description | String  | Sometimes | An optional description providing further details of the Channel. |
| Metadata    | Object  | Always    | An user-defined object with string values. |

### Channel Parameters object

| Name          | Type    | Expect    | Description |
| :------------ | :------ | :-------- | :---------- |
| Type          | String  | Always    | The Distribution Method to use. |
| Settings      | Any     | Always    | The settings of the Channel. Format depends on the type. |

See [Appendix K - Distribution Channels](../../../appendices/k-distribution-channels/) for more information on the appropriate Notification Channel settings for a type.

## Response

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| ChannelID   | String  | Always   | A unique identifier of the new Channel. |

## Example

**Send:**
```json
{"Controller":"Channel","Topic":"CreateChannel","TransactionID":1,"Data":{
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
	},
	"Details":{
		"Name":"ArcLight (Phone)",
		"Description":"ArcLight in Firefox Mobile",
		"Metadata":{"Category":"Phone"}
	},
	"IsActive":true
}}
```

**Receive:**
```json
{"Controller":"Channel","Topic":"CreateChannel","TransactionID":1,"Data":"Data":{
	"ChannelID":"Umk8R2"
}}
```
