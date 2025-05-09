---
title: "Market:Symbols"
sidebar:
    label: Symbols
---

Announces symbol changes for a Market.

**Controller:** Market\
**Topic:** `Symbols![Class].[Market]`\
**Action:** Sub\
**Permissions:** Zenith/Market\
**Server-side Unsubscribe:** Yes

## Topic Format

| Format                     | Description | Example
| :------------------------- | :--- | :--- |
| `Symbols![Class].[Market]` | Receive symbols of a particular class on a Market. | `Symbols!Market.ASX` |

### Fields

| Name | Description
| :--- | :--- |
| Market | The code for the listing Market of the desired symbol. Can be a Mixed Market code. |
| Class | The class of symbol to receive. |

## Payload

An ordered array of Symbol Change objects, to be applied in sequence.

### Symbol Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| O | String | Always | The operation being performed. One of:<br>**A:** Adding a new Symbol.<br>**U:** Updating an existing Symbol.<br>**R:** Removing a Symbol.<br>**C:** Clearing all Symbols. |
| Symbol | Object | Optional | A Symbol Detail object. Will be omitted when clearing. Will always be provided in all other situations. |

### Symbol Detail object

| Name             | Type    | Expect   | Description |
| :--------------- | :------ | :------- | :--- |
| Market           | String  | Always   | The market this symbol belongs to |
| Code             | String  | Always   | The code for this symbol |
| Name             | String  | Optional | The name of this symbol. May be null if there is no friendly name \(such as with a TMC\) |
| Class            | String  | Always   | The class of Symbol. One of:<br>**Market**<br>**ManagedFund** |
| Exchange         | String  | Optional | If this symbol is issued by an exchange different to the market, identifies the exchange |
| Alternate        | Object  | Optional | An object where the keys and values represent alternate codes associated with this Symbol. Omitted if there are no alternate codes. |
| Attributes       | Object  | Optional | An object where the keys and values represent attributes associated with this Symbol. Omitted if there are no attributes. |
| CallOrPut        | String  | Optional | The style of Option or Warrant. Omitted if not relevant. One of: Call Put |
| Categories       | Array   | Optional | An array of string codes representing the categories the Symbol belongs to, if any. |
| CFI              | String  | Always   | The CFI (ISO 10962) code for this Symbol |
| ContractSize     | Decimal | Optional | The contract size of a Warrant. Omitted if not relevant. |
| DepthDirection   | String  | Optional | The direction of depth. If omitted, defaults to BidBelowAsk. One of: BidBelowAsk, AskBelowBid. |
| ExerciseType     | String  | Optional | The exercise type of an Option. One of: American, Asian, European, Unknown |
| ExpiryDate       | Date    | Optional | The expiry date of an Option or Warrant. Omitted if not relevant. Will be in the format `YYYY-MM-DD` |
| IsIndex          | Boolean | Optional | True if this security is an index, otherwise defaults to False |
| Legs             | Array   | Optional | An array of Symbol Leg objects representing the combination legs of this Symbol, if any. |
| LotSize          | Decimal | Optional | The lot size for trading. Omitted if none exists. |
| StrikePrice      | Decimal | Optional | The strike price of an Option. Omitted if not relevant. |
| SubscriptionData | String  | Always   | The types of data available. One or more of the following values, separated by commas:<br>**Asset** – Security details are available.<br>**Trades** – Trade history is available.<br>**Depth** – Full and short depth is available. **DepthFull** – Full depth is available. **DepthShort** – Short depth is available. **All** – All data types are available |
| TradingMarkets   | Array   | Always   | An array of strings identifying the Trading Markets this Symbol belongs to |

### Symbol Leg object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Code   | String  | Always   | The code of the symbol making up this leg. |
| Side   | String  | Always   | The side this leg will trade on. One of: **Bid:** Bid \(buy\) side. **Ask:** Ask \(sell\) side. |
| Ratio  | Decimal | Always   | The ratio of this leg compared to the others. |

## Example
