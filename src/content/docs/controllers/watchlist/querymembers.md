---
title: "Watchlist:QueryMembers"
sidebar:
    label: QueryMembers
---

Retrieves the current Members for a Watchlist

**Controller:** Watchlist\
**Topic:** `QueryMembers`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name      | Type    | Expect   | Description |
| :-------- | :------ | :------- | :--- |
| Watchlist | String  | Always   | The identifier of the Watchlist to request Members for |

## Response

An unordered array of Watchlist Member Change objects. See the [Watchlist](../watchlist/#watchlist-member-change-object) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"QueryMembers","TransactionID":1,"Data":{"Watchlist":"123ABC"}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"QueryMembers",
	"Data":
	[
		{"Operation":"Clear"},
		{"Operation":"Insert","At":0,"Members":["BHP.ASX", "CBA.ASX"]}
	],
	"TransactionID":1
}
```
