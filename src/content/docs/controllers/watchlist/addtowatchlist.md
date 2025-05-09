---
title: "Watchlist:AddToWatchlist"
sidebar:
    label: AddToWatchlist
---

Adds Members to a Watchlist by appending to the end.

**Controller:** Watchlist\
**Topic:** `AddToWatchlist`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| WatchlistID | String  | Always   | A unique identifier of the existing Watchlist to update. |
| Members     | Array   | Always   | An array of strings representing the new Members of the Watchlist. |

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"AddToWatchlist","TransactionID":1,"Data":{"WatchlistID":"123ABC","Members":["TLS.ASX"]}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"AddToWatchlist",
	"TransactionID":1
}
```

If subscribed to the modified Watchlist, you will also receive an update:

```json
{
	"Controller":"Watchlist",
	"Topic":"Watchlist!123ABC",
	"Data":
	[
		{"Operation":"Insert","At":4,"Members":["TLS.ASX"]}
	]
}
```