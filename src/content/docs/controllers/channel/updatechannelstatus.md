---
title: "Channel:UpdateChannelStatus"
sidebar:
    label: UpdateChannelStatus
---

Updates just the status of an existing Notification Channel.

**Controller:** Channel\
**Topic:** `UpdateChannelStatus`\
**Action:** Publish\
**Permissions:** None

## Request

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| ChannelID  | String  | Always    | The unique identifier of the existing Channel. |
| IsActive   | Boolean | Sometimes | An optional flag setting whether the Channel should be Active when updated. If omitted, defaults to true. |

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Channel","Topic":"UpdateChannelStatus","TransactionID":1,"Data":{
	"ChannelID":"Umk8R2",
	"IsActive":false
}}
```

**Receive:**
```json
{"Controller":"Channel","Topic":"UpdateChannelStatus","TransactionID":1}
```
