---
title: "Market:SearchSymbols"
sidebar:
    label: SearchSymbols
---

Searches for matching symbols. Returns a maximum of 1,000 symbols.

_For more powerful searching, see the [ScanSymbols](../scansymbols) action._

**Controller:** Market\
**Topic:** `SearchSymbols`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name           | Type     | Expect   | Description |
| :------------- | :------- | :------- | :--- |
| CFI            | String   | Optional | A partial or complete 6-character CFI (ISO 10962) code to match Symbols against. Space ` ` or Underscore `_` act as wildcards. |
| Class          | String   | Optional | Match the class of Symbol. One of the following:<br>**Market**<br>**ManagedFund** |
| CombinationLeg | String   | Optional | Match combinations with this Symbol Code as a leg. |
| Conditions     | Array    | Optional | An array of Symbol Search Conditions that must match. |
| Count          | Integer  | Optional | The maximum number of symbols to return. If supplied, symbols will be returned in alphabetical order, and the first results up to the maximum will be returned. If omitted, defaults to 1,000. |
| Exchange       | String   | Optional | Match symbols that are issued by this Exchange \(ie: the Exchange property on the Symbol matches the supplied value, or the Exchange property is omitted and the Market matches the supplied value\) |
| ExpiryDateMin  | DateTime | Optional | Match symbols with an expiry date equal or greater than this value. |
| ExpiryDateMax  | DateTime | Optional | Match symbols with an expiry date equal or less than this value. |
| FullSymbol     | Boolean  | Optional | Whether to return full symbol records or not. If True, symbols will include their full details. If omitted, defaults to True. |
| Index          | Boolean  | Optional | Whether the symbol should be an Index or not. |
| Market         | String   | Optional | The code for the Market to search. Can be a Mixed Market code. If omitted, searches all non-mixed Markets. Supports wildcard searches. See [Wildcards](../../../fundamentals/feed-structure/#wildcards) for more information. |
| Markets        | Array    | Optional | An array of market codes to search. Can contain Mixed Market codes. Does not support wildcard searches. Invalid codes will result in a `Market.NotFound` error. |
| PreferExact    | Boolean  | Optional | True to a shorter set of results if exact matches are found. If omitted, defaults to False, returning all results regardless. |
| StartIndex     | Integer  | Optional | The number of symbols to skip. If supplied, symbols will be returned in alphabetical order, and the given number will be skipped. |
| StrikePriceMin | Decimal  | Optional | Match symbols with a strike price equal or greater than this value. |
| StrikePriceMax | Decimal  | Optional | Match symbols with a strike price equal or less than this value. |

### Symbol Search Condition object

| Name            | Type    | Expect   | Description |
| :-------------- | :------ | :------- | :--- |
| Field           | String  | Optional | The field to search. If omitted, searches both `Code` and `Name`. Can be one or more of the following values, separated by `,`:<br>**Code:** Searches the symbol codes.<br>**Name:** Searches the symbol names.<br>**Alternate:** Searches the Alternate Codes. See the `Alternates` field on the Symbol Detail object.<br>**Attribute:** Searches the Symbol Attributes. See the `Attributes` field on the Symbol Detail object. |
| Group           | String  | Optional | Conditions with the same group name are evaluated together, where any condition can cause a match (ie: OR). If omitted, the condition must be met to cause a match. |
| IsCaseSensitive | Boolean | Optional | Whether to perform a case sensitive search. If omitted, defaults to False, peforming a case-insensitive search. |
| Key             | String  | Optional | The key to search in. When `Field` is set to `Attribute` or `Alternate`, determines the name of the Attribute or Alternate Code to search against. |
| Match           | String  | Optional | The text matching criteria. If omitted, defaults to empty, matching any partial string. Can be zero or more of the following values, separated by `,`:<br>**FromStart:** Matches must be at the start.<br>**FromEnd**: Matches must be at the end.<br>**Exact**: Matches must be exact. Equivalent to `FromStart,FromEnd`. |
| Text            | String  | Always   | The text to search for. |

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

If `FullSymbol` is set, the Symbol Detail object can contain the following fields:

| Name           | Type    | Expect   | Description |
| :------------- | :------ | :------- | :--- |
| Alternate      | Object  | Optional | An object where the keys and values represent alternate codes associated with this Symbol. Omitted if there are no alternate codes. |
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
	Topic:"SearchSymbols",
	TransactionID:1,
	Data:
	{
		Market:"ASX",
		Conditions:
		[
			{Text:"BHP"}
		]
	}
});
```

**Sample Response:**

```javascript
{
	"Controller":"Market",
	"Topic":"SearchSymbols",
	"TransactionID":1,
	"Data":
	[
		{
			"Code":"BHP",
			"Market":"ASX",
			"Name":"BHP BLT FPO",
			"Class":"Market"
		},
		...
		{
			"Code":"BHPWX9",
			"Market":"ASX",
			"Name":"BHP MAR-16 P OPT 4115",
			"Class":"Market"
		}
	]
}
```

## Example: Code and RIC Search

```javascript
websocket.send(JSON.stringify(
{
	Controller:"Market",
	Topic:"SearchSymbols",
	TransactionID:1,
	Data:
	{
		Market:"ASX",
		Conditions:
		[
			{Field:"Alternate",Key:"RIC",Text:"BHP"},
			{Field:"Code",Text:"BHP"}
		]
	}
});
```

**Sample Response:**

```javascript
{
	"Controller":"Market",
	"Topic":"SearchSymbols",
	"TransactionID":1,
	"Data":
	[
		{
			"Code":"BHP",
			"Market":"ASX",
			"Name":"BHP BLT FPO",
			"Class":"Market",
			"Alternate":["RIC":"BHP.AX"]
		}
	]
}
```
