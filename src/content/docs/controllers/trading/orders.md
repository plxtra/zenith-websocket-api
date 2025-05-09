---
title: "Trading:Orders"
sidebar:
    label: Orders
---

Announces the current Orders for a Trading Account

**Controller:** Trading\
**Topic:** `Orders` or `Orders![ID]`\
**Action:** Sub\
**Permissions:** Zenith/Trading\
**Server-side Unsubscribe:** Yes

## Topic Formats

| Format                        | Description | Example
| :---------------------------- | :--- | :--- |
| `Orders`                      | Receive all data available on this login. | `Orders` |
| `Orders![ID]`                 | Receive data for a specific Trading Account | `Orders!OM1234` |

### Fields

| Name   | Description |
| :------| :--- |
| ID     | The Trading Account identifier to announce Order records for. |

## Payload

An ordered array of zero or more Order Change objects, to be applied in sequence.

### Order Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| O | String | Always | The operation being performed. One of:<br>**A**: Adding a new Order.<br>**U**: Updating an existing Order.<br>**R**: Removing an Order.<br>**C**: Clearing all Orders |
| Account | String | Optional | The target Trading Account. Will be provided when clearing. |
| Order | Object | Optional | An Order object. Will be omitted when clearing. Will always be provided in all other situations. |

### Order object

| Name           | Type     | Expect   | Description |
| :------------- | :------- | :------- | :--- |
| ID             | String   | Always   | The unique order identifier assigned by the system. |
| Account        | String   | Always   | The Trading Account the Order is placed through. |
| ExternalID     | String   | Optional | The external order identifier. User-quotable. |
| DepthOrderID   | String   | Optional | If provided, should correspond to an Order ID available via a Depth subscription for the symbol the order is placed for. |
| Status         | String   | Always   | The status code of the Order. See the [QueryOrderStatuses](../queryorderstatuses/) topic to retrieve the valid order statuses. |
| Exchange       | String   | Optional | The Market this Order is currently on. Omitted if the Order has yet to be routed. |
| TradingMarket  | String   | Optional | The Trading Market this Order is currently on. Omited if the Order has yet to be routed. |
| Currency       | String   | Always   | The Currency Code this Order's values are quoted in. |
| EstimatedFees  | Object   | Optional | An object where the key is a fee name, and the value the estimated fee this Order would incur. Omitted if no fees apply. |
| CurrentFees    | Object   | Optional | An object where the key is a fee name, and the value the currently charged fee for this Order. Omitted if no fees have been charged. |
| EstimatedValue | Decimal  | Always   | The estimated total value of this Order |
| CurrentValue   | Decimal  | Always   | The current executed value of this Order |
| CreatedDate    | DateTime | Always   | The date and time the Order was created. |
| UpdatedDate    | DateTime | Always   | The date and time the Order was last updated. |
| Style          | String   | Always   | The style of Order, which should correspond to the Class for the associated Symbol. One of the following values:<br>**Market**<br>**ManagedFund** |
| Details        | Object   | Always   | The details of the Order. Corresponds to the Details object in the [PlaceOrder](../placeorder/#order-details-object) action. |
| Route          | Object   | Always   | The routing rules used for this Order. Corresponds to the Route object in the [PlaceOrder](../placeorder/#order-route-object) action. |
| Children       | Array    | Optional | An array of child Order IDs. |
| Condition      | Object   | Optional | The activation conditions for this Order, if any. Corresponds to the Condition object in the [PlaceOrder](../placeorder/#order-condition-object) action. |

Extra fields depend on the `Style` of Order.

### Market Order

When `Style` is `Market`, the Order Details can have these additional fields:

| Name             | Type    | Expect   | Description |
| :--------------- | :------ | :------- | :--- |
| ExecutedQuantity | Decimal | Always   | The number of shares that have been executed. |
| AveragePrice     | Decimal | Optional | The average price of the executed shares. Null if the order has yet to trade |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"Orders!OM12345","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{
	"Controller":"Trading",
	"Topic":"Orders!OM12345",
	"Data":
	[
		{"O":"C"},
		{
			"O":"A",
			"Order":
			{
				"ID":"00000000-0000-0000-CDEF-123456789ABC",
				...
			}
		}
	]
}
```
```json
{"Controller":"Trading","Topic":"Orders!OM12345","Action":"Sub","Confirm":true}
```
