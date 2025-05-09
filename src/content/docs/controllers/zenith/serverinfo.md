---
title: "Zenith:ServerInfo"
sidebar:
    label: ServerInfo
---

Announces server information

**Controller:** Zenith\
**Topic:** `ServerInfo`\
**Action:** Sub\
**Permissions:** None

## Payload

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| Name | String | Always | The name of the server |
| Class | String | Always | The class of server. Always "FeedProxy" |
| Version | String | Always | The version of the server software. Takes the format: Major.Minor.Revision.Build |
| Protocol | String | Always | The serialisation version being used. Takes the format: Major.Minor.Revision.Build |

## Example

**Send:**
```json
{"Controller":"Zenith","Topic":"ServerInfo","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Zenith","Topic":"ServerInfo","Data":{"Name":"Server1","Class":"FeedProxy","Version":"1.2.3456.78901","Protocol":"1.2"}}
```
```json
{"Controller":"Zenith","Topic":"ServerInfo","Action":"Sub","Confirm":true}
```
