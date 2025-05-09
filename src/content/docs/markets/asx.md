---
title: "ASX: Australian Stock Exchange"
---

Details the market-specific content for the ASX feed.

## Markets

The following Markets are supplied from the ASX.

Markets that support a demo version \(with a \[Demo\] tag\) are marked as such.

| Code           | Demo |Description |
| :------------- | :--- | :--------- |
| ASX            | Yes  | Australian Stock Exchange TradeMatch |
| ASX\[Delayed\] | No   | Australian Stock Exchange TradeMatch, 20-minute delayed |
| ASX:PM         | Yes  | Australian Stock Exchange PureMatch |

### Market Boards

| Market | Board          |Description |
| :----- | :------------- | :--------- |
| ASX    | ASX::AGRIC     | |
| ASX    | ASX::AUS       | |
| ASX    | ASX::EQTY1     | ASX TradeMatch Equity Market 1 \(A-B\) |
| ASX    | ASX::EQTY2     | ASX TradeMatch Equity Market 2 \(C-F\) |
| ASX    | ASX::EQTY3     | ASX TradeMatch Equity Market 3 \(G-M\) |
| ASX    | ASX::EQTY4     | ASX TradeMatch Equity Market 4 \(N-R\) |
| ASX    | ASX::EQTY5     | ASX TradeMatch Equity Market 5 \(S-Z\) |
| ASX    | ASX::INDX      | |
| ASX    | ASX::IRM       | |
| ASX    | ASX::PRAC      | |
| ASX    | ASX::QDB       | |
| ASX    | ASX::WAR       | |

### Trading Markets

| Market | Trading Market | Description |
| :----- | :------------- | :---------- |
| ASX    | ASX            | ASX TradeMatch |
| ASX    | ASX::CP        | ASX TradeMatch CentrePoint |
| ASX:PM | ASX:PM         | ASX PureMatch |
| ASX:PM | ASX:PM:CP      | ASX PureMatch CentrePoint |

## Order Instructions

These values can be found on the `Instructions` property of the Order Details.

| Code           | Description | Conditions |
| :------------- | :--- | :--- |
| Best           | Order is a Best Order. | `OrderType` must be `Limit`. Exclusive with `Sweep`. Market cannot be CentrePoint. |
| Sweep          | Order is a Sweep Order. | `OrderType` must be `Limit` or `MarketToLimit`. Exclusive with `Best`. |
| Block          | Order is a Block Order. | Market must be CentrePoint. |
| Mid            | Order is placed at the Mid Tick. | Market must be CentrePoint. |
| MidHalf        | Order is placed at the Mid Tick, allowing half-ticks. | Market must be CentrePoint. |
| Dark           | Order is placed Dark. | Market must be CentrePoint. |
| DarkHalf       | Order is placed Dark, allowing half-ticks. | Market must be CentrePoint. |
| Any            | Order allows any Price Block. | Market must be CentrePoint. |
| AnyHalf        | Order allows ny Price Block, allowing half-ticks. | Market must be CentrePoint. |
| Single         | Order is Single Fill. | Market must be CentrePoint. MinimumQuantity must be set. |
| Single         | Order targets the Auction Imbalance. | `OrderType` must be `Limit`. Market must be CentrePoint. |


## Symbol Alternate Codes

These values can be found on the `Alternates` property of the Symbol.

| Code           | Expect   | Description |
| :------------- | :------- | :--- |
| Short          | Optional | The ticker-symbol or human-readable code (if different from the symbol code). |
| Base           | Optional | The underlying symbol, if any. |
| Long           | Optional | The ASX Instrument code (if different from the symbol code). |
| ISIN           | Optional | The ISIN for the security, if provided. |

## Symbol Attributes

The ASX does not currently define any symbol attributes.

## Symbol Category Codes

These values can be found in the `Categories` array of the Symbol.

| Code           | Description |
| :------------- | :--- |
| PRAC           | This is a practice security. |

## Security Extended Prices

The ASX does not currently define any extended prices.

## Order Attributes

These values can be found on the `Attributes` property in full Depth.

| Code           | Description |
| :------------- | :--- |
| C              | This Order is part of a TMC order. |

## Trade Attributes

These values can be found on the `Attributes` property of a Trade.

| Code           | Description |
| :------------- | :--- |
| S              | This trade is a Short Sell. |

