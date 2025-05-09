---
title: "Watchlist:UpdateWatchlist"
sidebar:
    label: UpdateWatchlist
---

Updates the details of an existing User Watchlist

**Controller:** Watchlist\
**Topic:** `UpdateWatchlist`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| WatchlistID | String  | Always   | A unique identifier of the existing Watchlist to update. |
| Details     | Object  | Always   | The new details to assign. |

### Watchlist Details object

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| Name        | String  | Always   | A display name for this Watchlist. |
| Description | String  | Optional | A brief description for this Watchlist, if any. |
| Category    | String  | Optional | The category this Watchlist belongs to, if any. |

## Response

No Response Body.

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"UpdateWatchlist","TransactionID":1,"Data":{"WatchlistID":"123ABC","Details":{"Name":"Updated Watchlist","Description":"Custom Description","Category":"Custom"}}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"UpdateWatchlist",
	"TransactionID":1
}
```
