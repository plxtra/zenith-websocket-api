---
title: "Appendix J2: Market Scan Criteria"
---

Each Criteria node is an array, where the first value is a string identifying the type of criteria, and subsequent values define the parameters.

There are three classifications: Logical, Matching, and Comparison.

## Logical Criteria

Logical Criteria allow multiple filters to be combined to perform more complicated logic.

The `And` Criteria returns a valid match if all sub-criteria match.

```json
["And",...]
```

The `Or` Criteria returns a valid match if one or more sub-criteria match.

```json
["Or",...]
```

The `Not` Criteria returns a valid match if the sub-criteria does NOT match. Only one criteria can be specified.

```json
["Not",[...]]
```

The `Xor` Criteria returns a valid match if only one sub-criteria matches. Exactly two criteria must be specified.

```json
["Xor",[...],[...]]
```

## Matching Criteria

Matching Criteria filter against specific fields on a Symbol or Asset. Some criteria are only valid for Asset-based scans, and are unavailable when scanning Symbols.

This table describes the simple matching criteria. Definitions for each type follow.

| Type            | Style               | Type    | Available | Description |
| :-------------- | :------------------ | :------ | :-------- | :---------- |
| AltCode         | Named Text          | Text    | Symbol    | Checks a named (market-specific) code. |
| And             | Logical             | N/A     | N/A       | Checks that all sub-criteria match. |
| Attribute       | Named Text          | Text    | Symbol    | Checks a named (market-specific) attribute. |
| Auction         | Range               | Numeric | Asset     | Checks the Auction Price. |
| AuctionLast     | Range               | Numeric | Asset     | Checks the Auction, Last, or Previous Closing Price. |
| AuctionQuantity | Range               | Numeric | Asset     | Checks the Auction Quantity. |
| BestAskCount    | Range               | Numeric | Asset     | Checks the Best Ask Count. |
| BestAskPrice    | Range               | Numeric | Asset     | Checks the Best Ask Price. |
| BestAskQuantity | Range               | Numeric | Asset     | Checks the Best Ask Quantity. |
| BestBidCount    | Range               | Numeric | Asset     | Checks the Best Bid Count. |
| BestBidPrice    | Range               | Numeric | Asset     | Checks the Best Bid Price. |
| BestBidQuantity | Range               | Numeric | Asset     | Checks the Best Bid Quantity. |
| Board           | Multiple            | Text    | Asset     | Checks the Board identifier matches one of the given values. Case insensitive. |
| CallOrPut       | Single (exists)     | Text    | Symbol    | Checks the Call or Put value. One of: Call, Put. |
| Category        | Multiple            | Text    | Symbol    | Checks the Category Codes match one of the given values. Case sensitive. |
| CFI             | Single              | Text    | Symbol    | Checks the CFI code matches the given mask. Spaces act as a wildcard. |
| Class           | Single              | Text    | Symbol    | Checks the symbol class. One of: Market |
| ClosePrice      | Range               | Numeric | Asset     | Checks the day's closing price (settlement price). |
| Code            | Text                | Text    | Symbol    | Checks the symbol code. |
| ContractSize    | Range               | Numeric | Symbol    | Checks the contract size for the symbol. |
| Currency        | Multiple            | Text    | Asset     | Checks the currency being traded in matches one of the given values. |
| Data            | Single              | Text    | Symbol    | Checks for the availability of a type of data. Case sensitive. |
| Date            | Named Range         | Date    | Symbol    | Checks a named (market-specific) date. |
| ExerciseType    | Single (exists)     | Text    | Symbol    | Checks the exercise type for a derivative. |
| Exchange        | Multiple            | Text    | Symbol    | Checks the issuing exchange identifier matches one of the given values. Case insensitive. |
| ExpiryDate      | Range               | Date    | Symbol    | Checks the expiry date for the symbol. |
| HighPrice       | Range               | Numeric | Asset     | Checks the High price for the day. |
| IsIndex         | Single (default)    | Boolean | Symbol    | Checks if the symbol is an Index or not. |
| Leg             | Single              | Text    | Symbol    | Checks the existence of a leg of a particular symbol code. |
| LastPrice       | Range               | Numeric | Asset     | Checks the Last or Previous Closing Price. |
| LotSize         | Range               | Numeric | Symbol    | Checks the lot size for the symbol. |
| LowPrice        | Range               | Numeric | Asset     | Checks the Low price for the day. |
| Market          | Multiple            | Text    | Symbol    | Checks the listing market identifier matches one of the given values. Case insensitive. |
| Name            | Text                | Text    | Symbol    | Checks the symbol name. |
| Not             | Logical             | N/A     | N/A       | Checks that the sub-criteria does not match. Only one sub-criteria is allowed. |
| OpenInterest    | Range               | Numeric | Asset     | Checks the open interest on the symbol. |
| OpenPrice       | Range               | Numeric | Asset     | Checks the Opening price for the day. |
| Or              | Logical             | N/A     | N/A       | Checks that at least one sub-criteria matches. |
| Price           | Named Range         | Numeric | Asset     | Checks a named (market-specific) price. |
| PreviousClose   | Range               | Numeric | Asset     | Checks the previous closing price. |
| QuotationBasis  | Multiple            | Text    | Asset     | Checks the quotation basis matches one of the given values. Case sensitive. |
| Remainder       | Range               | Numeric | Asset     | Checks the Auction Remainder|
| ShareIssue      | Range               | Numeric | Asset     | Checks the total shares on issue. |
| State           | Multiple            | Text    | Asset     | Checks the security trading status matches one of the given values. |
| StateAllows     | Single              | Text    | Asset     | Checks whether an action is allowed in the current trading state. |
| StatusNote      | Multiple            | Text    | Asset     | Checks the status note matches one of the given values. Case sensitive. |
| StrikePrice     | Range               | Numeric | Asset     | Checks the strike price for a derivative. |
| Trades          | Range               | Numeric | Asset     | Checks the number of trades for the day. |
| TradingMarket   | Multiple            | Text    | Symbol    | Checks the Trading Market identifier matches one of the given values. Case insensitive. |
| ValueTraded     | Range               | Numeric | Asset     | Checks the total value traded for the day. |
| Volume          | Range               | Numeric | Asset     | Checks the volume of shares traded for the day.|
| VWAP            | Range               | Numeric | Asset     | Checks the Volume-Weighted Average Price for the day. |
| Xor             | Logical             | N/A     | N/A       | Checks two sub-criteria and ensures only one matches. |

### Logical

Matches based on the result of one (or more) sub-criteria.

```json
// Matches when there's a Dividend date and the Expiry date is an exact value.
["And",["Date","Dividend"],["ExpiryDate","2024-01-01"]]
// Matches when the reference price is an exact value, or within a range.
["Or",["Price","Reference",3.0],["Price","Reference",{"Min":1.5,"Max":2.5}]]
// Matches when there is no Dividend date
["Not",["Date","Dividend"]]
```

Logical criteria can be nested.

```json
// Matches when there's a Dividend date and reference price is either a specific value, or within a range
["And",["Date","Dividend"],["Or",["Price","Reference",3.0],["Price","Reference",{"Min":1.5,"Max":2.5}]]]
// Matches when there is no Dividend date, and when the Expiry date is different to the given value
["Not",["And",["Date","Dividend"],["ExpiryDate","2024-01-01"]]]
```

### Multiple

Matches against multiple values. Some criteria types expect an exact match, while others check for any overlap. Case sensitivity depends on the field.

**First Form:** Single value only.

For fields with a single value, expects an exact match. For fields with multiple values, expects the match to exist in the set.

```json
// Checks if the Sharia category code is assigned
["Category","Sharia"]
```

**Second Form:** Multiple values.

For fields with a single value, expects an exact match with one of the values. For fields with multiple values, expects at least one match within the set.

```json
// Checks if at least one of Sharia or Foreign category codes are assigned
["Category","Sharia","Foreign"]
// Matches symbols in the Malaysian Buy-In and Odd-Lot markets
["Market","MYX:BI","MYX:OD"]
```

### Named Range

Matches the named value against a range.

**First Form:** Name only.

Checks whether the named value is set or not.

```json
// Checks whether there is a Dividend date
["Date","Dividend"]
// Checks whether there is a Reference Price
["Price","Reference"]
```

**Second Form:** Name and Value.

Checks whether the named value exactly matches the given value.

```json
// Checks whether the Dividend date matches.
["Date","Dividend","2024-01-01"]
// Checks whether the Reference Price matches.
["Price","Reference",2.0]
```

**Third Form:** Name and Range.

Checks whether the named value is between the given values (inclusive). Values may be null.

```json
// Dividend date between two values
["Date","Dividend","2023-01-01","2023-12-31"]
// Reference price less than or equal to the maximum
["Price","Reference",null,2.5]
// Start date greater than or equal to the minimum
["Date","Start","2023-01-01",null]
```

**Fourth Form:** Name and Named Parameters.

Behaves like either the Second or Third form depending on the supplied values.

```json
// Dividend date exactly matches
["Date","Dividend",{"At":"2023-01-01"}]
// Reference price between two values
["Price","Reference",{"Min":1.5,"Max":2.5}]
// Dividend date less than or equal to the maximum
["Date","Dividend",{"Max":"2023-12-31"}]
// Dividend date greater than or equal to the minimum
["Date","Dividend",{"Min":"2023-01-01"}]
```

### Named Text

Matches the named string against a text value.

**First Form:** Name only.

Checks whether the named string is set or not.

```json
// Whether an ISIN alternative code is set
["AltCode","ISIN"]
// Whether the Short attribute is set
["Attribute","Short"]
```

**Second Form:** Name and value.

Checks whether the named string contains the given value.

```json
// Whether 'I' is within the Short attribute.
["Attribute","Short","I"]
```

**Third Form:** Name and value with parameters.

Alters the comparision in the Second form. Allows matching from the start or end, exact matching, and whether to be case sensitive or not.

`CriteriaType, Name, Text[, As][, IgnoreCase]`

| Name       | Type    | Description |
| :--------- | :------ | :------- |
| As         | String  | The position the match must occur in. If omitted, defaults to **None**. One of the following:<br />**None**: Text can exist anywhere in the value.<br />**FromStart**: Text must match from the start.<br />**FromEnd**: Text must match from the end.<br />**Exact**: Text must match exactly. |
| IgnoreCase | Boolean | Whether to ignore casing. If omitted, defaults to false. |

```json
// Whether the Underlying alternative code starts with 'BHP'
["AltCode","Underlying","BHP","FromStart"]
// Whether 'i' is within the Short attribute, ignoring case.
["Attribute","Short","i",true]
// Whether the Underlying alternative code starts with 'bhp', ignoring case.
["AltCode","Underlying","bhp","FromStart",true]
```

**Fourth Form:** Name and value with named parameters.

Alters the comparision in the Second form using named parameters. Allows to match from the start, end, or exact, and whether to be case sensitive or not.

Parameters are the same as in the Third form.

```json
// Matches whenever the Underlying code exactly matches the string 'BHP'.
["AltCode","Underlying","BHP",{"As":"Exact"}]
// Matches whenever the Underlying code starts with 'bhp', ignoring case.
["AltCode","Underlying","bhp",{"As":"FromStart","IgnoreCase":true}]
```

### Range

Matches the target value against a range.

**First Form:** No Parameters.

Checks whether the target value is set or not.

```json
// Checks if a symbol has an expiry date
["ExpiryDate"]
// Checks if the symbol has traded today
["LastPrice"]
// If there are no parameters, you can also just specify the criteria type directly inside another criteria
["And","ExpiryDate","LastPrice"]
```

**Second Form:** Single Value.

Checks whether the target value exactly matches the given value.

```json
// Checks if the expiry date matches
["ExpiryDate","2024-01-01"]
// Checks if the lot size matches
["LotSize",100]
```

**Third Form:** Range.

Checks whether the target value is between the given values (inclusive). Values may be null.

```json
// Expiry date between two values
["ExpiryDate","2023-01-01","2023-12-31"]
// Previous Close less than or equal to the maximum
["PreviousClose",null,2.0]
// Strike Price greater than or equal to the minimum
["StrikePrice",10.5,null]
```

**Fourth Form:** Named Parameters.

Behaves like either the Second or Third form depending on the supplied values.

```json
// Expiry date exactly matches
["ExpiryDate",{"At":"2023-01-01"}]
// Previous Close between two values
["PreviousClose",{"Min":8,"Max":10}]
// Strike Price less than or equal to the maximum
["StrikePrice",{"Max":10}]
// Strike Price greater than or equal to the minimum
["StrikePrice",{"Min":8}]
```

### Single

Matches against a specific value. Some criteria types expect an exact match, while others check for the given value within a set.

**First Form:** Value only.

This form is supported by all criteria types using this style.

```json
// Checks if the symbol is not an index
["IsIndex",false]
```

**Second Form:** Default value.

This short form is supported by some criteria types, where a default value makes sense.

```json
// Checks if the symbol is an index
["IsIndex"]
// If there are no parameters, you can also just specify the criteria type directly inside another criteria
["And","IsIndex","LastPrice"]
```

**Third Form:** Value exists.

This form is supported by some criteria types, where the value can be unset.

```json
// Checks if the symbol has a CallOrPut value.
["CallOrPut"]
```

### Text

Matches the string against a text value.

**First Form:** Value only.

Checks whether the string contains the given value.

```json
// Whether 'LIMITED' is within the Name.
["Name","LIMITED"]
```

**Second Form:** Value with parameters.

Alters the comparision in the First form. Allows matching from the start or end, exact matching, and whether to be case sensitive or not.

`CriteriaType, Text[, As][, IgnoreCase]`

| Name       | Type    | Description |
| :--------- | :------ | :------- |
| As         | String  | The position the match must occur in. If omitted, defaults to **None**. One of the following:<br />**None**: Text can exist anywhere in the value.<br />**FromStart**: Text must match from the start.<br />**FromEnd**: Text must match from the end.<br />**Exact**: Text must match exactly. |
| IgnoreCase | Boolean | Whether to ignore casing. If omitted, defaults to false. |

```json
// Whether the Code starts with 'BHP'
["Code","BHP","FromStart"]
// Whether 'ltd' is within the Name, ignoring case.
["Name","ltd",true]
// Whether the Name starts with 'Tel', ignoring case.
["Name","Tel","FromStart",true]
```

**Third Form:** Value with named parameters.

Alters the comparision in the First form using named parameters. Allows to match from the start, end, or exact, and whether to be case sensitive or not.

Parameters are the same as in the Second form.

```json
// Matches whenever the Name exactly matches the string 'BHP'.
["Name","BHP",{"As":"Exact"}]
// Matches whenever the Name starts with 'bhp', ignoring case.
["Name","bhp",{"As":"FromStart","IgnoreCase":true}]
```

## Comparison Criteria

Comparison Criteria allow more flexibility in comparisons, such as comparing two numeric fields, and performing calculations. These criteria only operate on Asset-based scans.

This table describes the advanced comparison criteria.

| Type  | Style    | Description |
| :---- | :------- | :---------- |
| All   | Empty    | Matches all symbols. |
| =     | Binary   | Matches when two values are equal. |
| >     | Binary   | Matches when the first value is greater than the second. |
| >=    | Binary   | Matches when the first value is greater than or equal to the second. |
| <     | Binary   | Matches when the first value is less than the second. |
| <=    | Binary   | Matches when the first value is less than or equal to the second. |
| None  | Empty    | Matches no symbols. |
| !=    | Binary   | Matches when two values are not equal. |

This table lists the symbol fields that can be compared.

| Type            | Description |
| :-------------- | :---------- |
| Auction         | Checks the Auction Price. |
| AuctionLast     | Checks the Auction, Last, or Previous Closing Price. |
| AuctionQuantity | Checks the Auction Quantity. |
| BestAskCount    | Checks the Best Ask Count. |
| BestAskPrice    | Checks the Best Ask Price. |
| BestAskQuantity | Checks the Best Ask Quantity. |
| BestBidCount    | Checks the Best Bid Count. |
| BestBidPrice    | Checks the Best Bid Price. |
| BestBidQuantity | Checks the Best Bid Quantity. |
| ClosePrice      | Checks the day's closing price (settlement price). |
| ContractSize    | Checks the contract size for the symbol. |
| Extended        | Checks a named (market-specific) extended price. |
| HighPrice       | Checks the High price for the day. |
| LastPrice       | Checks the Last or Previous Closing Price. |
| LotSize         | Checks the lot size for the symbol. |
| LowPrice        | Checks the Low price for the day. |
| OpenInterest    | Checks the open interest on the symbol. |
| OpenPrice       | Checks the Opening price for the day. |
| PreviousClose   | Checks the previous closing price. |
| Remainder       | Checks the Auction Remainder|
| ShareIssue      | Checks the total shares on issue. |
| StrikePrice     | Checks the strike price for a derivative. |
| Trades          | Checks the number of trades for the day. |
| ValueTraded     | Checks the total value traded for the day. |
| Volume          | Checks the volume of shares traded for the day.|
| VWAP            | Checks the Volume-Weighted Average Price for the day. |

This table lists the calculations that can be used with comparison values.

| Type     | Style        | Description |
| :------- | :----------- | :---------- |
| Abs      | Unary        | Calculates the absolute of a value. |
| +, Add   | Binary       | Adds two values. |
| /, Div   | Binary       | Divides two values. |
| If       | Variable     | Selects a value based on a comparison |
| %, Mod   | Binary       | Calculates the modulus (division remainder) of two values. |
| *  Mul   | Binary       | Multiplies two values. |
| -, Sub   | Binary       | Subtracts two values. |
| -, Neg   | Unary        | Negates a single value. |
| +, Pos   | Unary        | Makes a single value positive. |

### Binary Criteria

Matches by comparing two values. Each value can be a number, the name of an symbol field, or a calculation.

```json
/* Check whether the Last Price equals 10 */
["=","LastPrice",10.0]
/* Check whether the Last Price is less than the Auction Price */
["<","LastPrice","Auction"]
/* Check whether the Last Price is twice the Previous Closing Price or more */
[">","LastPrice",["*","PreviousClose",2]]
```

### Empty Criteria

Matches without any parameters.

```json
/* Match all symbols */
["All"]
/* Match no symbols */
["None"]
```

### Binary Calculations

Performs a calculation with two values. Each value can be a number, the name of an symbol field, or a calculation.

```json
/* Adds 10 to the last price */
["+","LastPrice",10.0]
/* Adds 10 to the last price */
["Add","LastPrice",10.0]
/* Multiplies the previous close by 1.5 */
["*","PreviousClose",1.5]
/* Multiplies the previous close by 1.5 */
["Mul",1.5,"PreviousClose"]
```

### Unary Calculations

Calculates based on a single value. This value can be a number, the name of a symbol field, or another calculation.

```json
/* Negates the auction remainder */
["-","Remainder"]
/* Returns the absolute value of the auction remainder */
["Abs","Remainder"]
```

### If Calculation

Selects a value to return based on one or more comparisons.

Parameters should be supplied as a search Criteria, followed by a Result that can be a number, the name of a symbol field, or a calculation.

Any number of Criteria and Result pairs can be provided, ending with a final Result that is returned when no Criteria match.

Criteria are evaluated in the order they are supplied.

```json
/* No criteria pair. Always returns -1 */
["If",-1.0]
/* One criteria pair. If the Market is ASX, returns 1, otherwise returns -1 */
["If",["Market","ASX"],1.0, -1.0]
/* Two criteria pairs. If the Market is ASX, returns 1, if the Market is CXA returns 2, otherwise returns -1 */
["If",["Market","ASX"],1.0,["Market","CXA"],2.0, -1]
/* If the Market is ASX, returns the Last Price + 10, otherwise returns the last Price - 10 */
["If",["Market","ASX"],["+","LastPrice",10.0],["-","LastPrice",10.0]]
/* If the Market is MYX, returns the Extended Reference Price, otherwise returns the Previous Close  */
["If",["Market","MYX"],["Extended","Reference"],"PreviousClose"]
```