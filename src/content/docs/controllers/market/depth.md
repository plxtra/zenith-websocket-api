---
title: "Market:Depth"
sidebar:
    label: Depth
---

Announces the current orders in the market depth for a Security.

This subscription is only available for symbols that offer **DepthFull** in their `SubscriptionData`.

**Controller:** Market\
**Topic:** `Depth![Code].[Market]`\
**Action:** Sub\
**Permissions:** Zenith/Market\
**Server-side Unsubscribe:** Yes

## Topic Format

| Format                     | Description | Example
| :------------------------- | :--- | :--- |
| `Depth![Code].[Market]` | Receive depth orders relating to a symbol. | `Depth!BHP.ASX` |

### Fields

| Name | Description
| :--- | :--- |
| Market | The code for the listing Market of the desired symbol. Can be a Mixed Market code. |
| Code | The code of the desired symbol. |

## Payload

An ordered array of zero or more Depth Change objects, to be applied in sequence.

Orders are not provided in any particular sort order. Clients will need to apply appropriate sorting.

### Depth Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| O      | String  | Always   | The operation being performed. One of:<br>**A:** Adding a new Order.<br>**U:** Updating an existing Order.<br>**R:** Removing an Order.<br>**C:** Clearing all Orders. |
| Order  | Object  | Optional | A Depth Order object. Will be omitted when clearing. Will always be provided in all other situations. |

### Depth Order object

| Name           | Type    | Expect   | Description |
| :------------- | :------ | :------- | :--- |
| ID             | String  | Always   | The order identifier, unique for the subscribed Security. |
| Side           | String  | Optional | The side of the market the Order is on. Will be provided for additions only. One of:<br>**Bid:** Bid/buy order.<br>**Ask:** Ask/sell order. |
| Price          | Decimal | Optional | The price of the Order. Provided for additions or updates if the price has been amended. |
| Position       | Integer | Optional | The position of the Order within the price point. The position is not an index, and may not be sequential. Orders should be sorted within each price point in ascending order based on this field. Provided for additions or updates if the position has changed. |
| Broker         | String  | Optional | A code identifying the broker who placed this Order. Will be provided for additions only. Will only be supplied if the identified client has the appropriate rights to view it. |
| CrossRef       | String  | Optional | A code referencing this Order. Will be provided for additions only. Will only be supplied if the identified client has the appropriate rights to view it. |
| Quantity       | Decimal | Optional | The total number of shares placed against this Order. May be provided for Additions or Updates. May be null, signifying an undisclosed Order. |
| HasUndisclosed | Boolean | Optional | Whether there is an additional undisclosed amount. May be provided for Additions or Updates. Will only be supplied if the Order has a Quantity that is non-null, signifying an iceberg-style Order. |
| Market         | String  | Optional | The original Market that holds this Order, when using Mixed Markets. |
| Attributes     | Array   | Optional | An array of Market-Specific attributes that apply to this Order. |

## Example

```javascript
websocket.send(JSON.stringify(
 {
  Controller:"Market",
  Topic:"Depth!BHP.ASX",
  Action:"Sub",
  Confirm:true
 });
```

**Sample Response:**

```javascript
{
 "Controller":"Market",
 "Topic":"Depth!BHP.ASX",
 "Data":
 [
  {
   "O":"A",
   "Order":
   {
    "ID":"DEADBEEF-CAFE-F00D-C0DE-123412341234",
    "Side":"B",
    "Price":42.05,
    "Position":1024,
    "Quantity":null
   }
  },
  {
   "O":"U",
   "Order":
   {
    "ID":"FACEB00C-8BAD-F00D-C0DE-123412341234",
    "Quantity":5000
   }
  }
 ]
}
```

