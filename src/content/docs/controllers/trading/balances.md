---
title: "Trading:Balances"
sidebar:
    label: Balances
---

Announces the current balances of a Trading Account

**Controller:** Trading\
**Topic:** `Balances` or `Balances![ID]`\
**Action:** Sub\
**Permissions:** Zenith/Trading\
**Server-side Unsubscribe:** Yes

## Topic Formats

| Format                            | Description | Example
| :-------------------------------- | :--- | :--- |
| `Balances`                        | Receive all balance data available on this login. | `Balances` |
| `Balances![ID]`                   | Receive balance data for a specific Trading Account. | `Balances!OM1234` |

### Fields

| Name   | Description |
| :------| :--- |
| ID     | The Trading Account identifier to announce Balances for. |

## Payload

An ordered array of zero or more Balance objects, to be applied in sequence.

### Balance object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Account | String | Always | The unique identifier for the Account |
| Type | String | Always | The funds type. If an empty string, the Balance records for this Account are being cleared before a full update. Currency will also be empty. |
| Currency | String | Always | The three-letter currency code. Will be an empty string on a clear. |
| Amount | Decimal | Always | The amount of funds available. An amount of zero should be considered a removal of this balance record. |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"Balances!OM12345","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{
	"Controller":"Trading",
	"Topic":"Balances!OM12345",
	"Data":
	[
		{"Account":"OM12345","Type":"","Currency":"","Amount":0},
		{"Account":"OM12345","Type":"NetBalance","Currency":"AUD","Amount":1234.56}
	]
}
```
```json
{"Controller":"Trading","Topic":"Balances!OM12345","Action":"Sub","Confirm":true}
```


