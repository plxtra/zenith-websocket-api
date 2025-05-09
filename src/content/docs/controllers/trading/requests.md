---
title: "Trading:Requests"
sidebar:
    label: Requests
---

Announces the pending Order Requests for a Trading Account.

Once a request has been finished for any reason \(successful completion, rejection, etc\) it will be removed from this subscription.

**Controller:** Trading\
**Topic:** `Requests` or `Requests![ID]`\
**Action:** Sub\
**Permissions:** Zenith/Trading\
**Server-side Unsubscribe:** Yes

## Topic Formats

| Format                            | Description | Example
| :-------------------------------- | :--- | :--- |
| `Requests`                        | Receive all data available on this login. | `Requests` |
| `Requests![ID]`                   | Receive data for a specific Trading Account. | `Requests!OM1234` |

### Fields

| Name   | Description |
| :------| :--- |
| ID     | The Trading Account identifier to announce Requests for. |

## Payload

An ordered array of zero or more Order Request Change objects, to be applied in sequence.

### Order Request Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| O | String | Always | The operation being performed. One of:<br>**A**: Adding a new Order Request.<br>**U**: Updating an existing Order Request.<br>**R**: Removing an Order Request.<br>**C**: Clearing all Order Requests. |
| Account | String | Optional | The target account. Will be provided when clearing. |
| Request | Object | Optional | The Order Request object. Will be omitted when clearing. Will always be provided in all other situations. |

### Order Request object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| ID | String | Always | The unique order request identifier assigned by the system. |
| Account | String | Always | The account the Order Request was placed against. |
| OrderID | String | Always | The unique identifier of the Order. |
| Type | String | Always | The type of Order Request. One of:<br>**Place:** Order being placed.<br>**Amend:** Order being amended.<br>**Cancel:** Order being cancelled. |
| CreatedDate | DateTime | Always | The date and time the Order Request was created. |
| UpdatedDate | DateTime | Always | The date and time the Order Request was last updated. |
| Status | String | Always | The status of the Order Request. One of:<br>**Pending:** Request is being processed.<br>**PendingAuthorisation:** Request is awaiting authorisation.<br>**Rejected:** Request has been rejected.<br>**Authorised:** Request has been authorised and is awaiting processing.<br>**Complete:** Request has been successfully completed. |
| Details | Object | Always | The details of the Order. On an amend, this will be the details if the amendment is successful. Corresponds to the Order Details object in the [PlaceOrder](../placeorder/#order-details-object) query |
| Route | Object | Always | The routing rules used for the Order. Corresponds to the Route object in the [PlaceOrder](../placeorder/#order-route-object) query. |
| Condition | Object | Optional | The activation conditions for this Order, if any. Corresponds to the Condition object in the [PlaceOrder](../placeorder/#order-condition-object) query. |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"Requests!OM12345","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{
	"Controller":"Trading",
	"Topic":"Requests!OM12345",
	"Data":
	[
		{"O":"C","Account":"OM12345[Demo]"},
		{
			"O":"A",
			"Request":
			{
				"ID":"2ec7c4b6-cb73-f3c9-056a-f028850a3d25",
				"Account":"OM12345[Demo]",
				"OrderID":"00000000-0000-0000-002a-5a1789e70071",
				"Type":"Place",
				"CreatedDate":"2017-11-22T14:13:55+11:00",
				"UpdatedDate":"2017-11-22T14:13:55+11:00",
				"Status":"PendingAuthorisation",
				"Details":
				{
					"Style":"Equity",
					"Side":"Ask",
					"Exchange":"ASX[Demo]",
					"Code":"BHP",
					"BrokerageSchedule":"OMR",
					"Type":"Limit",
					"LimitPrice":27.850,
					"Quantity":75,
					"Validity":"UntilCancel"
				},
				"Route":
				{
					"Algorithm":"Market",
					"Market":"ASX:TM[Demo]"
				}
			}
		}
	]
}
```
```json
{"Controller":"Trading","Topic":"Requests!OM12345","Action":"Sub","Confirm":true}
```
