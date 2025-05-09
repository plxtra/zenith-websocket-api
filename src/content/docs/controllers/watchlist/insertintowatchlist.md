---
title: "Watchlist:InsertIntoWatchlist"
sidebar:
    label: InsertIntoWatchlist
---

Adds Members to a Watchlist by inserting them at an offset.

**Controller:** Watchlist\
**Topic:** `InsertIntoWatchlist`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| WatchlistID | String  | Always   | A unique identifier of the existing Watchlist to update. |
| Members     | Array   | Always   | An array of strings representing the new Members of the Watchlist. |
| Offset      | Number  | Always   | An zero-based index to insert the new Members. |

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"InsertIntoWatchlist","TransactionID":1,"Data":{"WatchlistID":"123ABC","Members":["TLS.ASX"],"At":0}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"InsertIntoWatchlist",
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
		{"Operation":"Insert","At":0,"Members":["TLS.ASX"]}
	]
}
```