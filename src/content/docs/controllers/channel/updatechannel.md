---
title: "Channel:UpdateChannel"
sidebar:
    label: UpdateChannel
---

Updates an existing Notification Channel.

**Controller:** Channel\
**Topic:** `UpdateChannel`\
**Action:** Publish\
**Permissions:** None

## Request

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| ChannelID  | String  | Always    | The unique identifier of the existing Channel. |
| Details    | Object  | Always    | A Channel Details object for identification. |
| Parameters | Object  | Always    | A Channel Parameters object for describing the Channel's configuration. |
| IsActive   | Boolean | Sometimes | An optional flag setting whether the Channel should be Active when updated. If omitted, defaults to true. |

All fields must be specified, even if they are not changing.

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

No Response Body.

## Example

**Send:**
```json
{"Controller":"Channel","Topic":"UpdateChannel","TransactionID":1,"Data":{
	"ChannelID":"Umk8R2",
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
	}
}}
```

**Receive:**
```json
{"Controller":"Channel","Topic":"UpdateChannel","TransactionID":1}
```
