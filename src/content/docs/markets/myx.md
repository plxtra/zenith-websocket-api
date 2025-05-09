---
title: "MYX: Bursa Malaysia"
---

Details the market-specific content for the Bursa Malaysia feed.

## Markets

The following Markets are supplied from the Bursa Malaysia.

Markets that support a demo version \(with a \[Demo\] tag\) are marked as such.

| Code           | Demo |Description |
| :------------- | :--- | :--------- |
| MYX            | Yes  | Bursa Malaysia Normal and Index Market |
| MYX:BI         | Yes  | Bursa Malaysia Buy-In Market |
| MYX:OD         | Yes  | Bursa Malaysia Odd-Lot Market |

### Market Boards

| Market | Board          |Description |
| :----- | :------------- | :--------- |
| MYX    | MYX::DB        | Bursa Malaysia Direct Business Trade |
| MYX    | MYX::IN        | Bursa Malaysia Index Board |
| MYX    | MYX::NM        | Bursa Malaysia Normal Board |
| MYX:BI | MYX:BI         | Bursa Malaysia Buy-In Board  |
| MYX:OD | MYX:OD         | Bursa Malaysia Odd-Lot Board |

### Trading Markets

| Market | Trading Market | Description |
| :----- | :------------- | :---------- |
| MYX    | MYX::NM        | Bursa Malaysia Normal Market |
| MYX    | MYX::DB        | Bursa Malaysia Direct Business Trade |
| MYX:BI | MYX:BI         | Bursa Malaysia Buy-In Market |
| MYX:OD | MYX:OD         | Bursa Malaysia Odd-Lot Market |

## Order Instructions

These values can be found on the `Instructions` property of the Order Details.

| Code           | Description | Conditions |
| :------------- | :--- | :--- |
| PSS            | Order is a Proprietary Short-Sell. | `Side` must be `Ask` and `ShortType` must be set. |
| IDSS           | Order is a Intra-Day Short-Sell. | `Side` must be `Ask` and `ShortType` must be set. |
| PDT            | Order is a Proprietary Day Trade. | `Side` must be `Ask` and `ShortType` must be set. |
| RSS            | Order is a Regulated Short-Sell. | `Side` must be `Ask` and `ShortType` must be set. |
| OnOpen         | Order is an On-Open. | `Validity` must be `GoodUntilCancel` and `ExpiryDate` must be today. |
| OnClose        | Order is an On-Close. | `Validity` must be `GoodUntilCancel` and `ExpiryDate` must be today. |
| Session        | Order is an On-Open/On-Close. | Cannot be submitted. Returned by the exchange. |

## Symbol Alternate Codes

These values can be found on the `Alternates` property of the Symbol.

| Code           | Expect   | Description |
| :------------- | :------- | :--- |
| Ticker         | Always   | The ticker-symbol or human-readable code. |
| Base           | Optional | The underlying symbol, if any. |
| ISIN           | Optional | The ISIN for the security, if provided. |

## Symbol Attributes

These values can be found on the `Attributes` property of the Symbol.

| Attribute      | Expect   | Value(s) | Description |
| :------------- | :------- | :------- | :--- |
| Category       | Always   | A three-digit numeric code identifying a Bursa Malaysia Security Category. | The Bursa Malaysia Security Category. |
| Class          | Always   | One of the following: **MAIN**, **ACE**, **ETF**, **STRW**, **BOND**, **LEAP** | The Bursa Malaysia Market Classification. |
| Delivery       | Optional | One of the following values:<br/>**0** - Buying In (T+0)<br/>**2** - Designated Basis (T+1)<br/>**3** - Ready Basis (T+2)<br/>**4** - Immediate Basis (T+1) | The delivery basis of the security. |
| MaxRSS         | Optional | A numeric percentage | The maximum RSS Traded Percentage. |
| Sector         | Always   | A four-digit numeric code identifying a Bursa Malaysia Market Sector. | The Bursa Malaysia Market Sector. |
| Short          | Optional | Zero or more of the following characters:<br/>**R** - Regulated Short Selling<br/>**P** - Proprietary Day Trading<br/>**I** - Intra-Day Short Selling<br/>**V** - Proprietary Short Selling | The Short Sell Indicator for the security. Identifies the types allowed. |
| ShortSuspended | Optional | Zero or more of the following characters:<br/>**R** - Regulated Short Selling<br/>**P** - Proprietary Day Trading<br/>**I** - Intra-Day Short Selling<br/>**V** - Proprietary Short Selling | The Short Sell Suspended Indicator for the security. Identifies the types currently suspended. |
| SubSector      | Always   | A four-digit numeric code identifying a Bursa Malaysia Market Sub-Sector. | The Bursa Malaysia Market Sub-Sector. |

## Symbol Category Codes

These values can be found in the `Categories` array of the Symbol.

| Code           | Description |
| :------------- | :--- |
| Foreign        | This security has a Foreign Limitation. |
| Sharia         | This security is Sharia Compliant. |

## Security Extended Prices

These values can be found on the `Extended` property of the Security.

| Code           | Expect   | Description |
| :------------- | :------- | :--- |
| IDSS           | Optional | The Intra-Day Short-Sell total, if any. |
| High52         | Optional | The 52-week high price, if any. |
| HighLimit      | Always   | The high limit price. |
| Low52          | Optional | The 52-week low price, if any. |
| LowLimit       | Always   | The low limit price. |
| PDT            | Optional | The Proprietary Day Trade total, if any. |
| PSS            | Optional | The Proprietary Short-Sell total, if any. |
| Reference      | Always   | The daily reference price. |
| RSS            | Optional | The Regulated Short-Sell total, if any. |

## Security Quotation Basis

These values can be found on the `QuotationBasis` property of the Security.

| Code | Description |
| :--- | :---------- |
| A    | Ex-Dividend |
| B    | Ex-Distribution |
| C    | Ex-Rights |
| D    | New |
| E    | Ex-Interest |
| F    | Cash Dividend |
| G    | Stock Dividend (Cum Divided) |
| H    | Stock Split |
| I    | Reverse Stock Split |
| L    | Liquidation Reorganization |
| M    | Merger Reorganization |
| N    | Rights Offering (Cum Rights) |
| P    | Spinoff |
| R    | Warrant |
| S    | Special Action |
| a    | Cum Bonus |
| b    | Cum Demerge |
| c    | Cum Interest |
| d    | Cum Listing |
| e    | Cum Right of Conversion |
| f    | Call Paid |
| g    | Cum Delisting |
| h    | Offer Closing |
| i    | Unlisted |
| j    | Ex Bonus |
| k    | Ex Demerge |
| l    | Ex Listing |
| m    | Ex Merge |
| n    | Ex Right of Conversion |
| o    | Ex Split |
| p    | Ex Delisting |

## Order Attributes

MYX does not currently define any Order Attributes.

## Trade Attributes

MYX does not currently define any Trade Attributes.

## Order Error Codes

MYX exposes the following additional error codes.

| Code                     | Style  | Description | Suffix |
| :----------------------- | :----- | :---------- | :----- |
| Depth                    | Market | An opposite order does not exist | |
| Depth.Range              | Market | An opposite order is not within permitted trading range | |
| CDSAccount.Unknown       | Market | The registered CDS account is unknown | |
| LimitPrice.Close         | Market | The limit price is not equal to the close price | |
| LimitPrice.Step          | Market | The limit price is not on a price step | The valid price size |
| MinimumQuantity.Validity | Market | The given validity is not permitted with a Minimum Quantity | |
| Side.Bid                 | Market | The Side must not be Bid | |
| Side.Bid.Required        | Market | The Side must be Bid | |
| TotalQuantity.Executed   | Market | Unable to reduce order quantity, insufficient remainder | |
| TotalQuantity.Step       | Market | The quantity does not meet the lot size requirements | The valid lot size |
| Unmatched                | Market | Order must be matched (for Move operations) | |