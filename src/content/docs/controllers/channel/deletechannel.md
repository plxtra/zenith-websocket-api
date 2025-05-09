---
title: "Channel:DeleteChannel"
sidebar:
    label: DeleteChannel
---

Deletes existing Notification Channel.

**Controller:** Channel\
**Topic:** `DeleteChannel`\
**Action:** Publish\
**Permissions:** None

## Request

| Name       | Type    | Expect    | Description |
| :--------- | :------ | :-------- | :---------- |
| ChannelID  | String  | Always    | The unique identifier of the existing Channel. |

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Channel","Topic":"DeleteChannel","TransactionID":1,"Data":{"ChannelID":"Umk8R2"}}
```

**Receive:**
```json
{"Controller":"Channel","Topic":"DeleteChannel","TransactionID":1}
```
