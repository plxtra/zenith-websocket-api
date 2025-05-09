---
title: "Trading:QueryTransactions"
sidebar:
    label: QueryTransactions
---

Requests the transaction history for the given Account

**Controller:** Trading\
**Topic:** `QueryTransactions`\
**Action:** Publish\
**Permissions:** Zenith/Trading

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Account | String | Always | The Account to request transactions for |
| FromDate | DateTime | Optional | The oldest date to retrieve transactions from |
| ToDate | DateTime | Optional | The newest date to retrieve transactions to |
| Count | Integer | Optional | The maximum number of transactions to return |
| TradingMarket | String | Optional | A trading market to filter the results by |
| Exchange | String | Optional | An exchange code to filter the results by. |
| Code | String | Optional | A symbol code to filter the results by. |
| OrderID | String | Optional | An Order ID to filter the results by. |

## Response

An unordered array of Transaction Details objects. See the [Transactions](../transactions/#transaction-detail-object) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"QueryTransactions","TransactionID":1,"Data":{"Account":"OM1234","Code":"BHP","Exchange":"ASX"}}
```
