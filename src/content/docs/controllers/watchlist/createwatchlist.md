---
title: "Watchlist:CreateWatchlist"
sidebar:
    label: CreateWatchlist
---

Creates a new User Watchlist

**Controller:** Watchlist\
**Topic:** `CreateWatchlist`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name      | Type    | Expect   | Description |
| :-------- | :------ | :------- | :--- |
| Details   | Object  | Always   | The details of the new Watchlist. |
| Members   | Array   | Optional | An array of strings representing the initial members of the Watchlist. |

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
{"Controller":"Watchlist","Topic":"CreateWatchlist","TransactionID":1,"Data":{"Details":{"Name":"Custom User Watchlist","Description":"Custom Description","Category":"Custom"},"Members":["BHP.ASX"]}}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"CreateWatchlist",
	"Data":{"WatchlistID":"123ABC"},
	"TransactionID":1
}
```
