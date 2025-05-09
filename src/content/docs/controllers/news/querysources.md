---
title: "News:QuerySources"
sidebar:
    label: QuerySources
---

Requests the available News Source for the authenticated user.

**Controller:** News\
**Topic:** QuerySources\
**Action:** Publish\
**Permissions:** None

# Request

No Request Body

# Response

An unordered array of News Source State objects. See the [Sources](../sources/#news-source-state-object) subscription for more information.

## Example

**Send:**
```json
{"Controller":"News","Topic":"QuerySources","TransactionID":123}
```

**Receive:**
```json
{"Controller":"News","Topic":"QuerySources","TransactionID":123,"Data":[{"Code":"ASX","Feed":"Active"}]}
```
