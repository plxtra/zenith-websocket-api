---
title: "Market:Trades"
sidebar:
    label: Trades
---

Announces incoming trades for a Security.

Initialise occurs upon the initial subscription, upon a new trading day for the market, and if there were any issues upstream that may have caused lost trades.

This subscription is only available for symbols that offer **Trades** in their `SubscriptionData`.

**Controller:** Market\
**Topic:** `Trades![Code].[Market]`\
**Action:** Sub\
**Permissions:** Zenith/Market\
**Server-side Unsubscribe:** Yes

## Topic Format

| Format                     | Description | Example
| :------------------------- | :--- | :--- |
| `Trades![Code].[Market]` | Receive trades relating to a symbol. | `Trades!BHP.ASX` |

### Fields

| Name | Description
| :--- | :--- |
| Market | The code for listing Market of the desired symbol. Can be a Mixed Market code. |
| Code | The code of the desired symbol. |

## Payload

An ordered array of zero or more Trade Change objects, to be applied in sequence.

### Trade Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| O      | String  | Always   | The operation being performed. One of:<br />**A:**: Adding a new Trade.<br />**U**: Updating an existing Trade<br />**I:**: Initialise the list of trades |
| ID     | Integer | Optional | When Initialising, identifies the most recently received Trade, for supplying to `QueryTrades` |
| Trade  | Object  | Optional | When adding or updating a Trade, contains the trade details |

### Trade Data Object

| Name     | Type     | Expect   | Description |
| :------- | :------- | :------- | :--- |
| ID       | Integer  | Always   | The trade identifier, unique for the subscribed Security. More recent trades have higher numbers. Is not guaranteed sequential. |
| Price    | Decimal  | Optional | The price of the Trade. |
| Quantity | Decimal  | Optional | The total number of shares traded. |
| Time     | DateTime | Optional | The date and time the Trade occurred, in ISO-8601 format \(including timezone\). |
| Flags    | String   | Optional | Any flags applied to this Trade. One of: **Cancel:** Trade is a cancellation. **OffMarket**. **PlaceHolder** |
| Trend    | String   | Optional | A change in the trend for this Trade. If omitted, defaults to None. One of:<br />**None:** There is no trend \(off-market\).<br />**Up:** This trade represents an up-tick.<br />**Down:** This trade represents a down-tick. |
| Side     | String   | Optional | The side of the market that caused the Trade \(aggressor\). If omitted, means there is no aggressor. One of:<br />**Bid:** Bid \(buy\) order.<br />**Ask:** Ask \(sell\) order. |
| Affects  | String   | Optional | The fields affected by this Trade. If omitted, all fields are affected. One or more of the following fields, comma delimited:<br/>**None:** Affects no fields at all.<br/>**Price:** Affects price fields \(O/H/L/Last\).<br/>**Volume:** Affects traded volume.<br/>**VWAP:** Affects volume weighted average price. |
| Codes    | String   | Optional | The condition codes on this Trade. If omitted, there are no condition codes. |
| Buy          | String | Optional | The depth identifier of the Buy Order that caused this Trade, if available. |
| BuyBroker    | String | Optional | A code identifying the broker who placed the buy Order that caused this Trade. Will only be supplied if the identified client has the appropriate rights to view it. |
| BuyCrossRef  | String | Optional | A code referencing the buy Order that caused this Trade. Will only be supplied if the identified client has the appropriate rights to view it. |
| Sell         | String | Optional | The depth identifier of the Sell Order that caused this Trade, if available. |
| SellBroker   | String | Optional | A code identifying the broker who placed the sell Order that caused this Trade. Will only be supplied if the identified client has the appropriate rights to view it. |
| SellCrossRef | String | Optional | A code referencing the sell Order that caused this Trade. Will only be supplied if the identified client has the appropriate rights to view it. |
| Market       | String | Optional | The original Market that executed this Trade, when using Mixed Markets. |
| RelatedID    | Integer | Optional | An ID related to this Trade. For cancellations, will reference the original Trade. |
| Attributes   | Array | Optional | An array of Market-Specific attribute strings that apply to this Trade. |

## Example

**Send:**
```json
{"Controller":"Market","Topic":"Trades!BHP.ASX","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Market","Topic":"Trades!BHP.ASX","Data":[{"O":"I","ID":10000}]}
```
```json
{"Controller":"Market","Topic":"Trades!BHP.ASX","Action":"Sub","Confirm":true}
```

Upon receiving the initialise, the client can then make a request to [QueryTrades](../querytrades/) to retrieve the desired amount of trade history.

**Send:**
```json
{"Controller":"Market","Topic":"QueryTrades","TransactionID":1234,"Data":{"Market":"ASX","Code":"BHP","LastTradeID":10000,"Count":100}}
```
