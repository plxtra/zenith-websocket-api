---
title: "Trading:QueryAccounts"
sidebar:
    label: QueryAccounts
---

Requests the available Trading Accounts for the authenticated user

**Controller:** Trading\
**Topic:** `QueryAccounts`\
**Action:** Publish\
**Permissions:** Zenith/Trading

## Request

No Request Body

## Response

An unordered array of Account State objects. See the [Accounts](../accounts/#account-state-object) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"QueryAccounts","TransactionID":123}
```

**Receive:**
```json
{"Controller":"Trading","Topic":"QueryAccounts","TransactionID":123,"Data":[{"ID":"PT56789","Name":"Paritech Account 56789","Feed":"Active","Provider":"Motif","Currency":"AUD"}]}
```
