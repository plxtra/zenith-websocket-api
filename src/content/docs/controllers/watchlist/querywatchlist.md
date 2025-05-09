---
title: "Watchlist:QueryWatchlist"
sidebar:
    label: QueryWatchlist
---

Retrieves the current details for a Watchlist

**Controller:** Watchlist\
**Topic:** `QueryWatchlist`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name      | Type    | Expect   | Description |
| :-------- | :------ | :------- | :--- |
| Watchlist | String  | Always   | The identifier of the Watchlist to request Members for |

## Response

An single Watchlist Change object. See the [Watchlists](../watchlists/#watchlist-change-object) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"QueryWatchlist","TransactionID":1,"Data":{"Watchlist":"123ABC"}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"QueryWatchlist",
	"Data":
	[
		{"Operation":"Add","Watchlist":{"ID":"123ABC","Name":"Custom User Watchlist","IsWritable":true}}
	],
	"TransactionID":1
}
```
