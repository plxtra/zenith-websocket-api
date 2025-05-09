---
title: "Trading:RequestQuote"
sidebar:
    label: RequestQuote
---

Requests a quotation for a Symbol.

Successful completion of this action does not mean the Quote is on the Market, only that the request has been acknowledged.

**Controller:** Trading\
**Topic:** `RequestQuote`\
**Action:** Publish\
**Permissions:** Zenith/OrderPad

## Request

| Name     | Type    | Expect   | Description |
| :------- | :------ | :------- | :--- |
| Market   | String  | Always   | The Market to request the Quote from. |
| Code     | String  | Always   | The code of the Symbol to quote |
| Side     | String  | Optional | The side of the market to request a quote on. If omitted, makes a request for both sides. One of the following values:<br>**Bid**: request a buy quotation.<br>**Ask**: request a sell quotation. |
| Quantity | Decimal | Optional | The size of the desired quotation. If omitted, the resulting quotation size is decided by the Market Maker. |
| Flags    | Array   | Optional | An array of string flags. See [Appendix F: Order Flags](../../../appendices/f-order-flags/) for more information |

## Response

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Result | String  | Always   | The result of the operation. One of the following values:<br>**Success**: Request successful.<br>**Incomplete**: Required fields are missing.<br>**Invalid**: The supplied fields are invalid.<br>**Rejected**: The order was rejected by the Exchange |
| Errors | Array   | Optional | If cancellation failed, supplies an array of string codes identifying the errors encountered. See [Appendix E: Order Error Codes](../../../appendices/e-order-error-codes/) for more information |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"RequestQuote","TransactionID":1,"Data":{"Market":"ASX[Demo]","Code":"BHPB18"}}
```

**Receive:**
```json
{"Controller":"Trading","Topic":"RequestQuote","TransactionID":1,"Data":{"Result":"Success"}}
```
