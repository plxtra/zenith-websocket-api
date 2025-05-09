---
title: "Trading:Holdings"
sidebar:
    label: Holdings
---

Announces the current Holdings for a Trading Account.

To uniquely identify a Holding, combine the Exchange and Code fields, along with the Account field if you care about cross-Account uniqueness.

**Controller:** Trading\
**Topic:** `Holdings` or `Holdings![ID]`\
**Action:** Sub\
**Permissions:** Zenith/Trading\
**Server-side Unsubscribe:** Yes

## Topic Formats

| Format                        | Description | Example
| :---------------------------- | :--- | :--- |
| `Holdings`                       | Receive all data available on this login. | `Holdings` |
| `Holdings![ID]`                  | Receive data for a specific Trading Account. | `Holdings!OM1234` |

### Fields

| Name   | Description |
| :------| :--- |
| ID     | The Trading Account identifier to announce Order Audit records for. |

## Payload

An ordered array of zero or more Holding Change objects, to be applied in sequence.

### Holding Change object

| Name    | Type    | Expect   | Description |
| :------ | :------ | :------- | :--- |
| O       | String  | Always   | The operation being performed. One of:<br>**A**: Adding a new Holding.<br>**U**: Updating an existing Holding.<br>**R**: Removing a Holding.<br>**C**: Clearing all Holdings. |
| Account | String  | Optional | The target account. Will be provided when clearing. |
| Holding | Object  | Optional | A Holding Details object. Will be omitted when clearing. Will always be provided in all other situations. |

## Holding Details object

| Name     | Type    | Expect   | Description |
| :------- | :------ | :------- | :--- |
| Exchange | String  | Always | The exchange this Symbol is issued by. |
| Code     | String  | Always | The code for the Symbol being held. |
| Account  | String  | Always | The account the Holding belongs to. |
| Style    | String  | Always | The style of Holding, which should correspond to the Class for the associated Symbol. One of the following values:<br>**Market**<br>**ManagedFund** |
| Cost     | Decimal | Always | The total purchase value of the Holding. |
| Currency | Decimal | Always | The currency code this Holding's values are quoted in. |

Extra fields depend on the `Style` of Holding.

## Market Holding Details

When `Style` is `Market`, the Holding Details can have these additional fields:

| Name           | Type    | Expect   | Description |
| :------------- | :------ | :------- | :--- |
| TotalQuantity  | Decimal | Always   | The total shares held. |
| TotalAvailable | Decimal | Always   | The total shares available for trading. |
| AveragePrice   | Decimal | Always   | The average price as calculated for this Holding. |

## Managed Fund Holding Details

When `Style` is `ManagedFund`, the Holding Details can have these additional fields:

| Name       | Type    | Expect   | Description |
| :--------- | :------ | :------- | :--- |
| TotalUnits | Decimal | Always   | The total number of units held. |
| BaseCost   | Decimal | Always   | The base cost per unit. |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"Holdings!OM12345","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{
	"Controller":"Trading",
	"Topic":"Holdings!OM12345",
	"Data":
	[
		{"O":"C"},
		{
			"O":"A",
			"Holding":
			{
				"Account":"OM12345",
				"Exchange":"ASX",
				"Code":"BHP",
				"Style":"Market",
				"Cost":1000.23,
				"Currency":"AUD",
				"TotalQuantity":10,
				"TotalAvailable":10,
				"AveragePrice":100.023
			}
		}
	]
}
```
```json
{"Controller":"Trading","Topic":"Holdings!OM12345","Action":"Sub","Confirm":true}
```
