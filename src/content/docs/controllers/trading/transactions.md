---
title: "Trading:Transactions"
sidebar:
    label: Transactions
---

Announces the recent Transactions \(completed Trades\) for a Trading Account

**Controller:** Trading\
**Topic:** `Transactions` or `Transactions![ID]`\
**Action:** Sub\
**Permissions:** Zenith/Trading\
**Server-side Unsubscribe:** Yes

## Topic Formats

| Format                            | Description | Example
| :-------------------------------- | :--- | :--- |
| `Transactions`                        | Receive all data available on this login. | `Transactions` |
| `Transactions![ID]`                   | Receive data for a specific Trading Account. | `Transactions!OM1234` |

### Fields

| Name   | Description |
| :------| :--- |
| ID     | The Trading Account identifier to announce Transactions for. |

## Payload

An ordered array of zero or more Transaction Change objects, to be applied in sequence.

### Transaction Change object

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| O           | String  | Always   | The operation being performed. One of:<br>**A**: Adding a new Transaction.<br>**U**: Updating an existing Transaction.<br>**I**: Initialise the transaction list. |
| Account     | String  | Optional | The target account. Will be provided when initialising. |
| Transaction | Object  | Optional | The Transaction Details object. Will be omitted when initialising. Will always be provided in all other situations. |

### Transaction Detail object

| Name          | Type    | Expect   | Description |
| :------------ | :------ | :------- | :--- |
| ID            | String | Always | The unique transaction identifier assigned by the system. |
| Exchange      | String | Always | The Exchange the target Symbol is issued by. |
| Code          | String | Always | The code of the target Symbol. |
| TradingMarket | String | Always | The market the target Symbol was traded on. |
| Account       | String | Always | The account the Transaction belongs to |
| Style         | String | Always | The style of Transaction, which should correspond to the Class for the associated Symbol. One of the following values:<br>**Market**<br>**ManagedFund** |
| TradeDate     | DateTime | Always | The date the transaction occurred. |
| SettlementDate | DateTime | Always | The date the trade settles/settled. |
| GrossAmount   | Decimal | Always | The gross amount of the trade. |
| NetAmount     | Decimal | Always | The net amount of the trade \(not including brokerage, fees, etc\) |
| SettlementAmount | Decimal | Always | The settlement amount. |
| Currency      | String | Optional | The currency code the trade was executed in, if available. |
| OrderID       | String | Always | The Order ID that generated this trade. Will correspond to a value in Orders. |

Extra fields depend on the `Style` of Transaction.

## Market Transaction Details

When `Style` is `Market`, the Transaction Details can have these additional fields:

| Name          | Type    | Expect   | Description |
| :------------ | :------ | :------- | :--- |
| TotalQuantity | Decimal | Always   | The total shares traded. |
| AveragePrice  | Decimal | Always   | The average price as calculated for this trade. |

## Managed Fund Transaction Details

When `Style` is `ManagedFund`, the Transaction Details can have these additional fields:

| Name       | Type    | Expect   | Description |
| :--------- | :------ | :------- | :--- |
| TotalUnits | Decimal | Always   | The total number of units traded. |
| UnitValue  | Decimal | Always   | The average value of each unit traded. |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"Transactions!OM12345","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Trading","Topic":"Transactions!OM12345","Data":[{"O":"I","Account":"OM12345[Demo]"}]}
```
```json
{"Controller":"Trading","Topic":"Transactions!OM12345","Action":"Sub","Confirm":true}
```
