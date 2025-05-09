---
title: "Watchlist:MoveInWatchlist"
sidebar:
    label: MoveInWatchlist
---

Moves a set of Members within a Watchlist to a different location.

**Controller:** Watchlist\
**Topic:** `MoveInWatchlist`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| WatchlistID | String  | Always   | A unique identifier of the existing Watchlist to update. |
| Offset      | Number  | Always   | An zero-based index to move the Members from. |
| Count       | Number  | Always   | The number of Members to move. |
| Target      | Number  | Always   | An zero-based index to move the Members to. This references the position after the selected Members are removed. |

## Response

No Response Body.

## Example

This request moves the first Member down one.

**Send:**
```json
{"Controller":"Watchlist","Topic":"MoveInWatchlist","TransactionID":1,"Data":{"WatchlistID":"123ABC","Offset":0,"Count":1,"Target":1}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"MoveInWatchlist",
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
		{"Operation":"Remove","At":0,"Count":1}
		{"Operation":"Insert","At":1,"Members":["TLS.ASX"]}
	]
}
```