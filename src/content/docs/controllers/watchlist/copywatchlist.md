---
title: "Watchlist:CopyWatchlist"
sidebar:
    label: CopyWatchlist
---

Creates a new User Watchlist by copying the Members of an existing Watchlist

**Controller:** Watchlist\
**Topic:** `CopyWatchlist`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| WatchlistID | String  | Always   | A unique identifier of the existing Watchlist to copy the Members from. |
| Details     | Object  | Always   | The details to assign to the copy. |

### Watchlist Details object

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| Name        | String  | Always   | A display name for this Watchlist. |
| Description | String  | Optional | A brief description for this Watchlist, if any. |
| Category    | String  | Optional | The category this Watchlist belongs to, if any. |

## Response

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| WatchlistID | String  | Always   | A unique identifier of the new Watchlist. |

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"CopyWatchlist","TransactionID":1,"Data":{"WatchlistID":"123ABC","Details":{"Name":"Copied Watchlist","Description":"Custom Description","Category":"Custom"}}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"CopyWatchlist",
	"Data":{"WatchlistID":"456DEF"},
	"TransactionID":1
}
```
