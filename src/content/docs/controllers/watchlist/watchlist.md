---
title: "Watchlist:Watchlist"
sidebar:
    label: Watchlist
---

**Controller:** Watchlist\
**Topic:** `Watchlist![ID]`\
**Action:** Sub\
**Permissions:** Zenith/Market

## Topic Format

| Format           | Description | Example
| :----------------| :--- | :--- |
| `Watchlist![ID]` | Receives members relating to a Watchlist. | `Watchlist!16AF59` |

### Fields

| Name | Description
| :--- | :--- |
| ID   | The unique identifier of the Watchlist to receive members for |

## Payload

An ordered array of zero or more Watchlist Member Change objects, to be applied in sequence.

### Watchlist Member Change object

| Name      | Type    | Expect    | Description |
| :-------- | :------ | :-------- | :--- |
| Operation | String  | Always    | The operation being performed. One of:<br>**Insert**: Inserting new Watchlist Members.<br>**Replace**: Replacing a range of Watchlist Members.<br>**Remove**: Removing a range of Watchlist Members.<br>**Clear**: Clearing all Watchlist Members. |
| At        | Number  | Sometimes | For **Insert**, the zero-based index to insert the new Members.<br>For **Replace**, the zero-based index to begin replacing.<br>For **Remove**, the zero-based index to begin removing from. |
| Count     | Number  | Sometimes | For **Remove**, the number of Members to remove. |
| Members   | Array   | Sometimes | An ordered array of string Members. For **Insert**, insert the new Members in-order. For **Replace**, overwrite the Members on and following `At`. |

## Example

**Send:**
```json
{"Controller":"Watchlist","Topic":"Watchlist!123ABC","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{
	"Controller":"Watchlist",
	"Topic":"Watchlist!123ABC",
	"Data":
	[
		{"Operation":"Clear"},
		{"Operation":"Insert","At":0,"Members":["BHP.ASX", "CBA.ASX"]}
	]
}
```
```json
{"Controller":"Watchlist","Topic":"Watchlist!123ABC","Action":"Sub","Confirm":true}
```
