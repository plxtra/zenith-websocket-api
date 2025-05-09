---
title: "NZX: New Zealand Stock Exchange"
---

Details the market-specific content for the NZX feed.

## Markets

The following Markets are supplied from the NZX.

Markets that support a demo version \(with a \[Demo\] tag\) are marked as such.

| Code           | Demo |Description |
| :------------- | :--- | :--------- |
| NZX            | Yes  | New Zealand Stock Exchange |

### Market Boards

| Market | Board          |Description |
| :----- | :------------- | :--------- |
| NZX    | NZX::COMM      | |
| NZX    | NZX::D-FUT     | |
| NZX    | NZX::D-OPT     | |
| NZX    | NZX::D-STGY    | |
| NZX    | NZX::E-OPT     | |
| NZX    | NZX::FSM       | Fonterra Shareholders Market |
| NZX    | NZX::I-FUT     | |
| NZX    | NZX::INDX      | Indices |
| NZX    | NZX::M-FUT     | |
| NZX    | NZX::M-OPT     | |
| NZX    | NZX::M-STGY    | |
| NZX    | NZX::NZDX      | Debt Market |
| NZX    | NZX::NZSX      | Main Board |
| NZX    | NZX::SPEC      | |

## Order Instructions

NZX does not currently support trading.

## Symbol Alternate Codes

These values can be found on the `Alternates` property of the Symbol.

| Code           | Expect   | Description |
| :------------- | :------- | :--- |
| Short          | Always   | The ticker-symbol or human-readable code. |
| Base           | Optional | The underlying symbol, if any. |

## Symbol Attributes

NZX does not currently define any Symbol Attributes.

## Symbol Category Codes

These values can be found in the `Categories` array of the Symbol.

| Code           | Description |
| :------------- | :--- |
| Yield          | This security is yield quoted. |

## Security Extended Prices

These values can be found on the `Extended` property of the Security.

| Code           | Expect   | Description |
| :------------- | :------- | :--- |
| PSS            | Optional | The Proprietary Short-Sell total, if any. |
| IDSS           | Optional | The Intra-Day Short-Sell total, if any. |
| PDT            | Optional | The Proprietary Day Trade total, if any. |
| RSS            | Optional | The Regulated Short-Sell total, if any. |

## Order Attributes

These values can be found on the `Attributes` property in full Depth.

| Code           | Description |
| :------------- | :--- |
| I              | This Order is an Implied order. |

## Trade Attributes

These values can be found on the `Attributes` property of a Trade.

| Code           | Description |
| :------------- | :--- |
| L              | This trade is part of a multi-leg trade. |


