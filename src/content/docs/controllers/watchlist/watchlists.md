---
title: "Watchlist:Watchlists"
sidebar:
    label: Watchlists
---

**Controller:** Watchlist\
**Topic:** `Watchlists`\
**Action:** Sub\
**Permissions:** None

## Payload

An ordered array of zero or more Watchlist Change objects, to be applied in sequence.

### Watchlist Change object

| Name      | Type   | Expect   | Description |
| :-------- | :----- | :------- | :--- |
| Operation | String | Always   | The operation being performed. One of:<br>**Add**: Adding a new Watchlist.<br>**Update**: Updating an existing Watchlist.<br>**Remove**: Removing a Watchlist.<br>**Clear**: Clearing all Watchlists. |
| Watchlist | Object | Optional | A Watchlist object. Will be omitted when clearing. Will always be provided in all other situations. |

### Watchlist object

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| ID          | String  | Always   | A unique identifier of this Watchlist. |
| Name        | String  | Optional | A display name for this Watchlist. Omitted on Remove. |
| Description | String  | Optional | A brief description for this Watchlist, if any. Omitted on Remove. |
| Category    | String  | Optional | The category this Watchlist belongs to, if any. Omitted on Remove. |
| IsWritable  | Boolean | Yes      | True if the Watchlist can be edited, False for Read Only. |

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"Watchlists","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"Watchlists",
	"Data":
	[
		{"Operation":"Clear"},
		{"Operation":"Add","Watchlist":{"ID":"10A4","Name":"ASX-200","Description":"XJO ASX-200 index members","IsWritable":false}},
		...
		{"Operation":"Add","Watchlist":{"ID":"2F4A","Name":"Custom User Watchlist","IsWritable":true}}
	]
}
```
```json
{"Controller":"Watchlist","Topic":"Watchlists","Action":"Sub","Confirm":true}
```