---
title: "Feed Structure"
order: 4
---

## Terminology

Some common terms used in this document:

| Term | Description |
| :--- | :--- |
| Depth | Depth, or Market Depth, is the list of Orders for a listed Symbol on a Market |
| Depth Level | A Depth Level, or Price Level, is an aggregated view of Depth, where Orders are combined based on their price |
| Exchange | An Exchange issues Symbols and hosts Markets |
| Market | A Market is where Symbols are listed |
| Mixed Market | A Mixed Market combines two or more Markets to present a unified view of a listed Symbol |
| Security | A Security is a Symbol listed on a Market |
| Symbol | A Symbol is a financial instrument that can be traded |
| Trading Market | A Trading Market exists within a Market, and is where Symbols are traded |

### Market Code

A Market Code is used by Zenith to uniquely identify a Market where symbols are listed.

A client can retrieve the list of Markets they have access to by using [QueryMarkets](../../controllers/market/querymarkets/) or subscribing to [Markets](../../controllers/market/markets/) on the [Market Controller](../../controllers/market/).

Market Codes take the format of an Exchange Code, followed by an optional Alt-Market Code and a Tag.

| Market Code | Description |
| :--- | :--- |
| ASX | ASX TradeMatch. Consists of just the Exchange Code. |
| ASX:PM | ASX PureMatch. Consists of the Exchange and Alt-Market. |
| ASX\[Demo\] | ASX TradeMatch Test Environment. Consists of the Exchange and Tag. |
| ASX:PM\[Demo\] | ASX PureMatch Test Environment. Consists of all three components. |

#### Wildcards

In most situations, the Alt-Market Code and Tag are implied blank if omitted. In other words, the following values are equivalent: 'ASX', 'ASX:', 'ASX\[\]' and 'ASX:\[\]'.

This differs only when specifying the Market for a symbol search. Then, an omitted Alt-Market or Tag default to a wildcard.

Some examples with the ASX are included below:

| Market Code | Searches for symbols in... |
| :--- | :--- |
| ASX | All markets on the ASX exchange, both Demo and Live |
| ASX:PM | ASX PureMatch, both Demo and Live |
| ASX\[\] | All markets on the ASX exchange on Live only |
| ASX\[Demo\] | All markets on the ASX exchange on Demo only |
| ASX:PM\[Demo\] | ASX PureMatch on Demo only |
| ASX:\[\] | ASX Tradematch on Live only |
| ASX:\[Demo\] | ASX TradeMatch on Demo only |

Thus, a search for the text 'BHP' with a Market Code of 'ASX' will, depending on user access, return one or more of: BHP.ASX, BHP.ASX:PM, BHP.ASX\[Demo\] or BHP.ASX:PM\[Demo\]

#### Mixed Markets

A Mixed Market allows combining and blending Markets to present a unified view of a Symbol. It consists of set of two or more source Markets, and an optional Mixed Market strategy that determines how the combination is created.

Zenith creates Mixed Markets dynamically, based on the data visible to the client.The client must have access to each source Market that forms the Mixed Market.The Tag applied to the Mixed Market is applied to each source Market, so you cannot combine eg: demo markets with live markets.

To be eligible for inclusion in a Mixed Market, a Symbol that has the same code in two or more source Markets must meet the following criteria:

* The issuing Exchange must be the same
* The Symbol Class must be the same
* The Index status must be the same

Note that a Symbol does not have to be listed in all source Markets to appear. A Symbol listed in only one source Market will be copied as-is.

All eligible Symbols will then be available for subscription and querying. Zenith provides blending for market depth \(both full book and price levels\), as well as priceand security data, course of trades and chart history.

A Mixed Market code takes the format of a list of Market Codes \(in alphabetical order\), an optional Strategy, and an optional Tag.

| Code | Description |
| :--- | :--- |
| ASX+CXA | ASX and Chi-X Markets |
| ASX+CXA\[Demo\] | ASX and Chi-X Test Markets |
| ASX+ASX:PM+CXA\[Demo\] | ASX TradeMatch, PureMatch and Chi-X Test Markets |
| ASX+CXA\#Default | ASX and Chi-X Markets using the Default strategy |
| ASX+CXA\#Default\[Demo\] | ASX and Chi-X Test Markets using the Default strategy |

A Mixed Market code that does not have the source Markets in alphabetical order is invalid.

A list of available Mixed Market Strategies is available in [Appendix H: Mixed Market Strategies](../../appendices/h-mixed-market-strategies/)





