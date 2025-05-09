---
title: "Watchlist:DeleteWatchlist"
sidebar:
    label: DeleteWatchlist
---

Deletes an existing User Watchlist

**Controller:** Watchlist\
**Topic:** `DeleteWatchlist`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| WatchlistID | String  | Always   | A unique identifier of the existing Watchlist to delete. |

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"DeleteWatchlist","TransactionID":1,"Data":{"WatchlistID":"123ABC"}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"DeleteWatchlist",
	"TransactionID":1
}
```
