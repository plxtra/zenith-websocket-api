---
title: "Watchlist:QueryWatchlists"
sidebar:
    label: QueryWatchlists
---

Retrieves the currently available Watchlists for the user

**Controller:** Watchlist\
**Topic:** `QueryWatchlists`
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

No Request Body

## Response

An array of Watchlist Change objects. See the [Watchlists](../watchlists/#watchlist-change-object) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"QueryWatchlists","TransactionID":1}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"QueryWatchlists",
	"Data":
	[
		{"Operation":"Clear"},
		{"Operation":"Add","Watchlist":{"ID":"10A4","Name":"ASX-200","Description":"XJO ASX-200 index members","IsWritable":false}},
		...
		{"Operation":"Add","Watchlist":{"ID":"2F4A","Name":"Custom User Watchlist","IsWritable":true}}
	],
	"TransactionID":1
}
```
