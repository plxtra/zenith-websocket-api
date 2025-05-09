---
title: "Appendix C: Routing Algorithms"
---

Zenith supports multiple algorithms for routing an Order to a Market. The properties below should be appended to the Route object attached to an Order Query.

## Market Route

Routes an Order to a specific Market

**Algorithm:** Market

**Additional Properties**

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Market | String | Required. The Trading Market to route to. See the TradingMarkets property on the Security object of the symbol you wish to trade. |

## Best Market

Routes an Order to the best available market

**Algorithm:** BestMarket

**Additional Properties:** None

\[comment\]: \# \(Make sure to re-build Data Services API gitbook if changes are made in this file\)

