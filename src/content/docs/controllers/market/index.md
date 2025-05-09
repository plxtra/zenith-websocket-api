---
title: "Market Controller"
sidebar:
    label: Overview
---

The Market controller provides access to Market Data, both historical and live/delayed

## Queries

| Topic | Description |
| :--- | :--- |
| [QueryBrokers](querybrokers/) | Retrieves Broker definitions for a Market. |
| [QueryChartHistory](querycharthistory/) | Retrieves charting history data for a symbol. |
| [QueryDepthFull](querydepthfull/) | Retrieves the current full market depth for a symbol. |
| [QueryDepthLevels](querydepthlevels/) | Retrieves the current Price Levels in Market Depth for a symbol. |
| [QueryMarkets](querymarkets/) | Requests the available Markets for the authenticated user. |
| [QueryMixedMarket](querymixedmarket/) | Attempts to construct a Mixed Market code. |
| [QuerySecurity](querysecurity/) | Retrieves the current state of a security. |
| [QuerySymbols](querysymbols/) | Retrieves matching symbols. Returns a maximum of 1,000 symbols. |
| [QueryTrades](querytrades/) | Retrieves historical trades for a symbol. |
| [QueryTradingStates](querytradingstates/) | Retrieves the valid Trading States for a particular Market. |
| [ScanSymbols](scansymbols/) | Retrieves matching symbols with market scan criteria. Returns a maximum of 1,000 symbols. |
| [SearchSymbols](searchsymbols/) | Retrieves matching symbols with search conditions. Returns a maximum of 1,000 symbols. |

See [Common](../../controllers/common/) for queries that are common to all controllers.

## Subscriptions

| Topic | Description |
| :--- | :--- |
| [Depth](depth/) | Announces the current orders in the market depth for a Security. |
| [Levels](levels/) | Announces the current Price Levels in the Market Depth for a Security. This is an aggregation of depth at each price point. |
| [Markets](markets/) | Announces the state of the Markets visible to this Client. |
| [Security](security/) | Announces the current state of a Security. |
| [Symbols](symbols/) | Announces the current symbols for a Market. |
| [Trades](trades/) | Announces incoming trades for a Security. |

