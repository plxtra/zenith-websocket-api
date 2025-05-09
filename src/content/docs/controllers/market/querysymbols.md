---
title: "Market:QuerySymbols"
sidebar:
    label: QuerySymbols
---

Retrieves matching symbols. Returns a maximum of 1,000 symbols.

_For more powerful searching, see the [SearchSymbols](../searchsymbols/) or [ScanSymbols](../scansymbols/) actions._

**Controller:** Market\
**Topic:** `QuerySymbols`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Exchange | String | Optional | The code for the Exchange to search. If supplied, will only return symbols that are issued by this Exchange\(ie: the Exchange property on the Symbol matches the supplied value, or the Exchange property is omitted and the Market matches the supplied value\) |
| Market | String | Optional | The code for the Market to search. Can be a Mixed Market code. If omitted, searches all non-mixed Markets. Supports wildcard searches. See [Wildcards](../../../fundamentals/feed-structure/#wildcards) for more information. |
| Markets | Array | Optional | An array of market codes to search. Can be a Mixed Market code. Does not support wildcard searches. Invalid codes will result in a Market.NotFounderror. |
| SearchText | String | Always |. The text to search for |
| Field | String | Optional | The field to search. If omitted, defaults to `Code`. Can be one or more of the following values, separated by `+`:<br>**Code:** Searches the symbol codes.<br>**Name** – Searches the symbol names.<br>Can also supply an Alternate Code. See the `Alternates` field on the Symbol Detail object. |
| IsPartial | Boolean | Optional | Whether to look for partial or exact matches. If omitted, defaults to true \(searches for partial matches\) |
| IsCaseSensitive | Boolean | Optional | Whether to perform a case sensitive search. If omitted, defaults to false \(case-insensitive search\) |
| PreferExact | Boolean | Optional | Whether to return only one result if an exact match is found, otherwise returns all results. If omitted, defaults to False, returning all results regardless |
| StartIndex | Integer | Optional | The number of symbols to skip. If provided, symbols will be returned in alphabetical order, and the given number will be skipped |
| Count | Integer | Optional | The maximum number of symbols to return. If provided, symbols will be returned in alphabetical order, and the first results up to the maximum will be returned. If omitted, defaults to 1,000 |
| TargetDate | Date | Optional | The date to retrieve symbols as at. If omitted, returns the most recent symbols |
| ShowFull | Boolean | Optional | Whether to return full symbol records or not. If True, symbols will include their full details |
| Account | String | Optional | An Account ID to filter on. If provided, will only return symbols that can be traded via the given Account |
| CFI | String | Optional | A partial or complete 6-character CFI (ISO 10962) code to match against. Space ` ` or Underscore `_` will act as a wildcard |

## Response

An unordered array of matching Symbol Detail objects

### Symbol Detail object

| Name             | Type    | Expect   | Description |
| :--------------- | :------ | :------- | :--- |
| Market           | String  | Always   | The market this symbol belongs to |
| Code             | String  | Always   | The code for this symbol |
| Name             | String  | Optional | The name of this symbol. May be null if there is no friendly name \(such as with a TMC\) |
| Class            | String  | Always   | The class of Symbol. One of:<br>**Market**<br>**ManagedFund** |
| Exchange         | String  | Optional | If this symbol is issued by an exchange different to the market, identifies the exchange |
| SubscriptionData | String  | Always   | The types of data available. One or more of the following values, separated by commas:<br>**Asset** – Security details are available.<br>**Trades** – Trade history is available.<br>**Depth** – Full and short depth is available. **DepthFull** – Full depth is available. **DepthShort** – Short depth is available. **All** – All data types are available |
| TradingMarkets   | Array   | Always   | An array of strings identifying the Trading Markets this Symbol belongs to |
| Alternate      | Object  | Optional | An object where the keys and values represent alternate codes associated with this Symbol. Omitted if there are no alternate codes. |

If `ShowFull` is set, the Symbol Detail object can contain the following fields:

| Name           | Type    | Expect   | Description |
| :------------- | :------ | :------- | :--- |
| Attributes     | Object  | Optional | An object where the keys and values represent attributes associated with this Symbol. Omitted if there are no attributes. |
| CallOrPut      | String  | Optional | The style of Option or Warrant. Omitted if not relevant. One of: Call Put |
| Categories     | Array   | Optional | An array of string codes representing the categories the Symbol belongs to, if any. |
| CFI            | String  | Always   | The CFI (ISO 10962) code for this Symbol |
| ContractSize   | Decimal | Optional | The contract size of a Warrant. Omitted if not relevant. |
| DepthDirection | String  | Optional | The direction of depth. If omitted, defaults to BidBelowAsk. One of: BidBelowAsk, AskBelowBid. |
| ExerciseType   | String  | Optional | The exercise type of an Option. One of: American, Asian, European, Unknown |
| ExpiryDate     | Date    | Optional | The expiry date of an Option or Warrant. Omitted if not relevant. Will be in the format `YYYY-MM-DD` |
| IsIndex        | Boolean | Optional | True if this security is an index, otherwise defaults to False |
| Legs           | Array   | Optional | An array of Symbol Leg objects representing the combination legs of this Symbol, if any. |
| LotSize        | Decimal | Optional | The lot size for trading. Omitted if none exists. |
| StrikePrice    | Decimal | Optional | The strike price of an Option. Omitted if not relevant. |

### Symbol Leg object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Code   | String  | Always   | The code of the symbol making up this leg. |
| Side   | String  | Always   | The side this leg will trade on. One of: **Bid:** Bid \(buy\) side. **Ask:** Ask \(sell\) side. |
| Ratio  | Decimal | Always   | The ratio of this leg compared to the others. |

## Example: Partial Search

```javascript
websocket.send(JSON.stringify(
{
	Controller:"Market",
	Topic:"QuerySymbols",
	TransactionID:1,
	Data:
	{
		Market:"ASX",
		SearchText:"BHP",
		IsPartial:true
	}
});
```

**Sample Response:**

```javascript
{
	"Controller":"Market",
	"Topic":"QuerySymbols",
	"TransactionID":1,
	"Data":
	[
		{
			"Code":"BHP",
			"Market":"ASX",
			"Name":"BHP BLT FPO",
			"Class":"Equity"
		},
		...
		{
			"Code":"BHPWX9",
			"Market":"ASX",
			"Name":"BHP MAR-16 P OPT 4115",
			"Class":"Option"
		}
	]
}
```

## Example: Code and RIC Search

```javascript
websocket.send(JSON.stringify(
{
	Controller:"Market",
	Topic:"QuerySymbols",
	TransactionID:1,
	Data:
	{
		Market:"ASX",
		SearchText:"BHP.AX",
		Field:"Code+RIC",
		IsPartial:false
	}
});
```

**Sample Response:**

```javascript
{
	"Controller":"Market",
	"Topic":"QuerySymbols",
	"TransactionID":1,
	"Data":
	[
		{
			"Code":"BHP",
			"Market":"ASX",
			"Name":"BHP BLT FPO",
			"Class":"Equity",
			"Alternate":["RIC":"BHP.AX"]
		}
	]
}
```
