---
title: "Channel:QueryMethods"
sidebar:
    label: QueryMethods
---

Requests the names of the Distribution Methods for the authenticated user.

Results are not filtered based on the calling application (eg: an Android application will still receive `Push.APNs`). Applications should decide which methods are relevant to their use-case.

**Controller:** Channel\
**Topic:** `QueryMethods`\
**Action:** Publish\
**Permissions:** None

## Request

No Request Body

## Response

An array of strings naming the supported Distribution Methods.

## Example

**Send:**
```json
{"Controller":"Channel","Topic":"QueryMethods","TransactionID":1}
```

**Receive:**
```json
{"Controller":"Channel","Topic":"QueryMethods","TransactionID":1,"Data":"Data":[
	"Email",
	"Push.APNs",
	"Push.FCM",
	"Push.Web",
	"SMS",
	...
]}
```
