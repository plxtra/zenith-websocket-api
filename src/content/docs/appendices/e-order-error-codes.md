---
title: "Appendix E: Order Error Codes"
---

An error code may or may not be followed by one or more values separated by spaces, identifying the context of the error. For example, `LimitPrice.Maximum 17.05`

**General Order Error Codes**

The following error codes may be returned by any market. Additional error codes may be market specific, or returned by vetting rules.

| Code                   | Style       | Description | Suffix |
| :--------------------- | :---------- | :---------- | :----- |
| Account                | \*          | The Account supplied does not exist | |
| Account.DailyNet       | \*          | The Account daily net value would be exceeded | |
| Account.DailyGross     | \*          | The Account daily gross value would be exceeded | |
| Authority              | \*          | The current user does not have permission to trade | |
| Connection             | \*          | Trading requires a secure connection | |
| Details                | \*          | No order details were provided | |
| Error                  | \*          | An undefined server error occurred | |
| Exchange               | \*          | The exchange supplied is invalid or does not exist | |
| Order                  | \*          | The given Order ID for a cancel or amend is invalid | |
| Order.Status           | \*          | The Order is not in a status that allows this operation | |
| Operation              | \*          | The operation is not supported for this Order | |
| Retry                  | \*          | A temporary error occurred, please retry the request | |
| Route                  | \*          | A routing algorithm was not supplied | |
| Route.Algorithm        | \*          | The supplied routing algorithm does not exist | |
| Route.Ambiguous        | \*          | The supplied Trading Market can match multiple targets | |
| Route.Market           | \*          | The supplied Trading Market was invalid or does not exist | |
| Route.Symbol           | \*          | The target Symbol cannot be routed to the supplied Trading Market | |
| Route.Tag              | \*          | The environment tags (eg: the `Demo` in `ABC[Demo]`) do not match between Account and destination Market | |
| Status                 | \*          | The order is not in a state where it can be changed | |
| Style                  | \*          | The style of Order must be provided.If amending, it must also match the Order being amended | |
| Submitted              | \*          | A fault occurred after the Order was submitted to the Exchange. **The Order may have been successfully processed. Please check the Orders subscription** | |
| Symbol                 | \*          | The selected symbol is invalid | |
| Symbol.Authority       | \*          | The current use does not have permission to trade the selected symbol | |
| Symbol.Status          | \*          | The target symbol is not in a state where the Order operation is supported | |
| Tag                    | \*          | The environment tags (eg: the `Demo` in `ABC[Demo]`) do not match between Account and Exchange | |
| TotalValue.Balance     | \*          | Not enough funds to cover this Order | |
| TotalValue.Maximum     | \*          | Greater than the maximum allowed Order value | |
| ExpiryDate             | Market      | The expiry date is invalid | |
| ExpiryDate.Maximum     | Market      | The expiry date is above the maximum for this Symbol | |
| HiddenQuantity         | Market      | The hidden quantity is out of range or invalid | |
| HiddenQuantity.Symbol  | Market      | A hidden quantity is not supported by this Symbol | |
| LimitPrice             | Market      | The limit price is out of range or invalid | |
| LimitPrice.Distance    | Market      | The limit price is too far from the market | |
| LimitPrice.Given       | Market      | The limit price must be empty for this Order Type | |
| LimitPrice.Maximum     | Market      | The limit price is above the maximum for this Symbol | The maximum allowed price |
| LimitPrice.Minimum     | Market      | The limit price is below the minimum for this Symbol | The minimum allowed price |
| LimitPrice.Missing     | Market      | The limit price is required for this Order Type | |
| MinimumQuantity        | Market      | The minimum quantity is out of range or invalid | |
| MinimumQuantity.Invalid| Market      | A minimum quantity is not supported by this Symbol | |
| MinimumQuantity.Symbol | Market      | A minimum quantity is not supported by this Symbol | |
| OrderType              | Market      | The order type is invalid | |
| OrderType.Market       | Market      | The order type is not supported by the target Trading Market | |
| OrderType.Status       | Market      | The order type is not supported in this Trading State | |
| OrderType.Symbol       | Market      | The order type is not supported by this Symbol | |
| Side                   | Market      | The side of the Market is invalid | |
| Side.Maximum           | Market      | There are too many open orders on the market on this side | |
| TotalQuantity          | Market      | The visible and hidden quantities are both zero | |
| TotalQuantity.Maximum  | Market      | The total quantity is above the maximum allowed | |
| TotalQuantity.Minimum  | Market      | The order is below the minimum value | |
| TotalQuantity.Holdings | Market      | The sell order is greater than your available holdings | |
| Validity               | Market      | The validity period is invalid | |
| Validity.Symbol        | Market      | The validity period is not supported by this Symbol | |
| VisibleQuantity        | Market      | The visible quantity is out of range or invalid | |
| UnitType               | ManagedFund | The unit type is invalid | |
| UnitAmount             | ManagedFund | The unit amount is out of range | |
| Currency               | ManagedFund | A valid currency must be provided for this Unit Type | |
| Flags.PDS              | ManagedFund | The Flag 'PDS' must be set | |

**Internal Order Error Codes**

These error codes indicate an internal failure somewhere.

| Code                  | Description | Suffix |
| :-------------------- | :---------- | :----- |
| Internal.AccessDenied | An internal component was denied access | |
| Internal.Authority    | User authority details are not properly setup | |
| Internal.Database     | A database was unavailable | |
| Internal.Error        | An undefined error occurred | |
| Internal.NotFound     | A required piece of data was not found | |
| Internal.Path         | Server couldn't find a path to trade this Symbol | |
| Internal.Service      | An internal service was unavailable | A service identifier |
| Internal.Unavailable  | An internal component was unexpectedly unavailable | |
| Timeout               | A timeout occurred while processing the request | |

