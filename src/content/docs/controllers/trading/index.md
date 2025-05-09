---
title: "Trading Controller"
sidebar:
    label: Overview
---

The Trading Controller provides access to trading account data as well as order operations.

## Actions

| Topic | Description |
| :--- | :--- |
| [AmendOrder](amendorder/) | Requests to amend an existing Order. |
| [AuthoriseOrder](authoriseorder/) | Requests to authorise or reject an Order awaiting authorisation. |
| [CalculateAmendOrder](calculateamendorder/) | Calculates an Order being amended. |
| [CalculatePlaceOrder](calculateplaceorder/) | Calculates an Order being placed. |
| [CancelOrder](cancelorder/) | Requests to cancel an existing Order. |
| [MoveOrder](moveorder/) | Moves an Order to a different Trading Account. |
| [PlaceOrder](placeorder/) | Places an Order for a symbol. |
| [QueryAccounts](queryaccounts/) | Requests the available Trading Accounts for the authenticated user. |
| [QueryBalances](querybalances/) | Requests the current account balances for the given Account. |
| [QueryHoldings](queryholdings/) | Requests the current holdings for the given Account. |
| ~~[QueryLimits]~~(querylimits/) | Requests the current Trading Limits for the given Account. |
| [QueryOrderAudit](queryorderaudit/) | Requests the order audit history. |
| [QueryOrders](queryorders/) | Requests the current Orders for the given Account. |
| [QueryOrderStatuses](queryorderstatuses/) | Requests the valid Order Status definitions. |
| [QueryRequests](queryrequests/) | Requests the pending Order Requests for the given Account. |
| [QueryRequestStatuses](queryrequeststatuses/) | Requests the valid Request Status definitions. |
| [QueryTradingMarkets](querytradingmarkets/) | Requests the valid Trading Markets for routing to. |
| [QueryTransactions](querytransactions/) | Requests the current transactions for the given Account |

See [Common](../../controllers/common/) for actions that are common to all controllers.

## Subscriptions

| Topic | Description |
| :--- | :--- |
| [Accounts](accounts/) | Announces the state of the Trading Accounts for the authenticated user. (Legacy. See [TradingAccounts](tradingaccounts/)) |
| ~~[Audit]~~(audit/) | Announces the audit records for a Trading Account. |
| [Balances](balances/) | Announces the current balances of a Trading Account. |
| [Holdings](holdings/) | Announces the current Holdings for a Trading Account. |
| [Orders](orders/)/ | Announces the current Orders for a Trading Account. |
| [Requests](requests/) | Announces the pending Order Requests for a Trading Account. |
| [TradingAccounts](tradingaccounts/) | Announces the state of the Trading Accounts for the authenticated user. |
| [Transactions](transactions/) | Announces the recent Transactions \(completed Trades\) for a Trading Account. |

