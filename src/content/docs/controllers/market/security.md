---
title: "Market:Security"
sidebar:
    label: Security
---

Announces the current state of a Security.

This subscription is only available for symbols that offer **Asset** in their `SubscriptionData`.

**Controller:**Market\
**Topic:** `Security![Code].[Market]`\
**Action:** Sub\
**Permissions:** Zenith/Market\
**Server-side Unsubscribe:** Yes

## Topic Format

| Format                     | Description | Example
| :------------------------- | :--- | :--- |
| `Security![Code].[Market]` | Receive security data relating to a symbol. | `Security!BHP.ASX` |

### Fields

| Name | Description
| :--- | :--- |
| Market | The code for the listing Market of the desired symbol. Can be a Mixed Market code. |
| Code | The code of the desired symbol. |

## Payload

The server will always send out the full state of a Security immediately after subscribing, as well as during a server resynchronisation and upon a new trading day.

As the Code and Market are only sent with a full state, the consumer must use the topic to identify the symbol updates are for.

All other updates besides the first should be treated as diff updates, identifying any fields that have changed. The Output column in the table below describes the potential values for each field.

- **Fixed**: This field does not change, and will never be null in an update. Always supplied in the first update.
- **Optional**: This field can change, and updates will never be null.
- **Nullable**: This field can change, and updates can be null to clear its value.

A field that is not included in an update should be considered unchanged from its previous value.

If an **Optional** or **Nullable** field is never supplied, the default for that field applies.

| Name             | Type    | Output   | Default  | Description |
| :--------------- | :------ | :------- | :------- | :--- |
| Code             | String  | Fixed    |          | The symbol code, not including the Market. |
| Market           | String  | Optional |          | The code for the Market this security belongs to. Always set. |
| Exchange         | String  | Optional | `Market` | The exchange that issued this security. Defaults to the value of `Market`. |
| Name             | String  | Nullable | ""       | The full name of the security. Defaults to an empty string. |
| Class            | String  | Fixed    |          | The class of security. One of:<br>**Market**<br>**ManagedFund** |
| CFI              | String  | Fixed    |          | The CFI (ISO 10962) code for this Symbol. |
| TradingState     | String  | Optional |          | The trading status of the Security. Always set. |
| TradingMarkets   | Array   | Optional | \[\]     | An array of string codes representing Trading Markets this Symbol can be traded on. You may check the status of these Trading Markets by checking the States property of the top-level Market. |
| IsIndex          | Boolean | Optional | false    | True if this security is an index. |
| ExpiryDate       | Date    | Nullable | null     | The expiry date of an Option or Warrant. Will be in the format `YYYY-MM-DD`. |
| StrikePrice      | Decimal | Nullable | null     | The strike price of an Option. |
| ExerciseType     | String  | Nullable | null     | The exercise type of an Option. One of: American, Asian, European, Unknown. |
| CallOrPut        | String  | Nullable | null     | The style of Option or Warrant. One of: Call, Put |
| ContractSize     | Decimal | Nullable | null     | The contract size of a Warrant |
| LotSize          | Decimal | Nullable | null     | The lot size for trading. |
| Alternates       | Object  | Optional | {}       | An object where the keys and values represent alternate codes associated with this Symbol. |
| Attributes       | Object  | Optional | {}       | An object where the keys and values represent attributes associated with this Symbol. |
| Legs             | Array   | Nullable | null     | An array of Symbol Leg objects representing the combination legs of this Symbol, if any. Null if not a combination. |
| Categories       | Array   | Optional | \[\]     | An array of string codes representing the categories the Symbol belongs to, if any. |
| SubscriptionData | String  | Fixed    |          | The data on offer by this symbol. One or more of the following values, separated by commas:<br>**Asset** – Security details are available.<br>**Trades** – Trade history is available.<br>**Depth** – Full and short depth is available.<br>**DepthFull** – Full depth is available.<br>**DepthShort** – Short depth is available.<br>**All** – All data types are available. |
| QuotationBasis   | Array   | Optional | \[\]     | An array of quotation basis codes for this Security, if any. |
| Currency         | String  | Nullable | null     | The currency that prices are quoted in, if known. |
| Open             | Decimal | Nullable | null     | The opening price, if one exists. |
| High             | Decimal | Nullable | null     | The high price, if one exists. |
| Low              | Decimal | Nullable | null     | The low price, if one exists. |
| Close            | Decimal | Nullable | null     | The closing price for yesterday, if one exists. |
| Settlement       | Decimal | Nullable | null     | The settlement \(closing\) price for today, if one exists. |
| Last             | Decimal | Nullable | null     | The last price traded today, if traded. |
| Trend            | String  | Optional | **None** | The most recent price tick direction. One of:<br>**None:** There is no trend.<br>**Up:** This trade represents an up-tick.<br>**Down:** This trade represents a down-tick. |
| BestAsk          | Decimal | Nullable | null     | The best ask price, if one exists. |
| AskCount         | Integer | Optional | 0        | The total number of ask orders at the top of book. |
| AskQuantity      | Decimal | Optional | 0.0      | The total ask quantity at the top of book. |
| AskUndisclosed   | Boolean | Optional | false    | Whether there are any undisclosed ask orders in the top of book. |
| BestBid          | Decimal | Nullable | null     | The best bid price, if one exists. |
| BidCount         | Integer | Optional | 0        | The total number of bid orders at the top of book. |
| BidQuantity      | Decimal | Optional | 0.0      | The total bid quantity at the top of book. |
| BidUndisclosed   | Boolean | Optional | false    | Whether there are any undisclosed bid orders in the top of book. |
| NumberOfTrades   | Integer | Optional | 0        | The total number of trades today. |
| Volume           | Decimal | Optional | 0.0      | The total volume traded. |
| AuctionPrice     | Decimal | Nullable | null     | The indicative auction price, if an auction is occurring. |
| AuctionQuantity  | Decimal | Nullable | null     | The equilibrium quantity, if an auction is occurring. |
| AuctionRemainder | Decimal | Nullable | null     | The surplus volume, if an auction is occurring. |
| VWAP             | Decimal | Nullable | null     | The volume weighted average price, if available. |
| ValueTraded      | Decimal | Optional | 0.0      | The total traded value for the day. |
| OpenInterest     | Integer | Nullable | 0        | The current open interest. |
| ShareIssue       | Decimal | Nullable | 0.0      | The current shares on issue, if known. |
| StatusNote       | Array   | Optional | \[\]     | An array of status notes against this Security, if any. |
| Extended         | Object  | Optional | {}       | An object where the keys and values represent extended prices associated with this Security, if any. |
| TickTable        | String  | Nullable | null     | The tick table that describes the valid price steps, if one exists. |
| Board            | String  | Nullable | null     | The name of the Market Board this Security belongs to, and gains its `TradingState` from. |

### Symbol Leg object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Code   | String  | Always   | The code of the symbol making up this leg. |
| Side   | String  | Always   | The side this leg will trade on. One of: **Bid:** Bid \(buy\) side. **Ask:** Ask \(sell\) side. |
| Ratio  | Decimal | Always   | The ratio of this leg compared to the others. |

**Code Example:**

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Action:"Sub",
 Topic:"Security!BHP.ASX",
 Confirm:true
});
```

**Sample Responses:**

```javascript
//First publication provides all fields (majorityomitted for brevity)
{
 "Controller":"Market",
 "Topic":"Security!BHP.ASX",
 "Data":
 {
  "Code":"BHP",
  "Market":"ASX",
  "Last":10.0
 }
}
//Confirmation will be sent after the first response
{
 "Controller":"Market",
 "Topic":"Security!BHP.ASX",
 "Action":"Sub",
 "Confirm":true
}
//Subsequent publications provide only the changed fields
{
 "Controller":"Market",
 "Topic":"Security!BHP.ASX",
 "Data":
 {
  "Last":10.1
 }
}
```

