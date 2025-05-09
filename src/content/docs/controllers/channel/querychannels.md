---
title: "Channel:QueryChannels"
sidebar:
    label: QueryChannels
---

Requests the state of the Notification Channels for the authenticated user.

**Controller:** Channel\
**Topic:** `QueryChannels`\
**Action:** Publish\
**Permissions:** None

## Request

No Request Body

## Response

An array of Channel State objects.

## Channel State object

| Name        | Type    | Expect    | Description |
| :---------- | :------ | :-------- | :---------- |
| ID          | String  | Always    | The unique identifier of the existing Channel. |
| Name        | String  | Always    | The user-defined name for the Channel. |
| Description | String  | Sometimes | An optional description providing further details of the Channel. |
| Type        | String  | Always    | The Distribution Method to use. |
| Metadata    | Object  | Always    | An user-defined object with string values. |
| Status      | String  | Always    | The status of the Channel. One of:<br>**Active**: Channel is active and can distribute notifications.<br>**Inactive**: Channel is inactive. Will not distribute notifications - all notifications sent will be lost.<br>**Faulted**: Channel has failed due to an error. Will not provide notifications - all notifications sent will be lost. |

See [Appendix K - Distribution Channels](../../../appendices/k-distribution-channels/) for more information on the available Distribution Method types.

## Example

**Send:**
```json
{"Controller":"Channel","Topic":"QueryChannels","TransactionID":1}
```

**Receive:**
```json
{"Controller":"Channel","Topic":"QueryChannels","TransactionID":1,"Data":"Data":[
	{
		"ID":"j5Tm6X",
		"Name":"ArcLight (Phone)",
		"Description":"ArcLight in Firefox Mobile",
		"Type":"Push.Web",
		"Metadata":{"Category":"Phone"},
		"Status":"Active"
	}
]}
```
