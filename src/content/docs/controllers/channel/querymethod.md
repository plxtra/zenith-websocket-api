---
title: "Channel:QueryMethod"
sidebar:
    label: QueryMethod
---

Requests the metadata for a Distribution Method.

**Controller:** Channel\
**Topic:** `QueryMethod`\
**Action:** Publish\
**Permissions:** None

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Type   | String  | Always   | The Distribution Method type to request the details for. |

## Response

| Name          | Type    | Expect    | Description |
| :------------ | :------ | :-------- | :---------- |
| Type          | String  | Always    | The Distribution Method being detailed. |
| Metadata      | Any     | Always    | The metadata of the Distribution Method. Format depends on the type. |

See [Appendix K - Distribution Channels](../../../appendices/k-distribution-channels/) for more information on the expected Metadata for a type.

## Example

**Send:**
```json
{"Controller":"Channel","Topic":"QueryMethod","TransactionID":1,"Data":{"Type":"Push.Web"}}
```

**Receive:**
```json
{"Controller":"Channel","Topic":"QueryChannel","TransactionID":1,"Data":{
	"Type":"Push.Web",
	"Metadata":{
		"applicationServerKey":""BD0ti6D2A..."",
		"userVisibleOnly":true
	}
}}
```
