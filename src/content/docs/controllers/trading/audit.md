---
title: "Trading:Audit"
sidebar:
    label: Audit
---

Announces the Order Audit records for a Trading Account. Order Audit is the history of transitions and states that all Orders and Order Requests have passed through.

**Note: This subscription is currently not supported, and is documented for a future release. Please use [QueryOrderAudit](../queryorderaudit/).**

**Controller:** Trading\
**Topic:** `Audit` or `Audit![ID]`\
**Action:** Sub\
**Permissions:** Zenith/Trading\
**Server-side Unsubscribe:** Yes

## Topic Formats

| Format                        | Description | Example
| :---------------------------- | :--- | :--- |
| `Audit`                       | Receive all data available on this login. | `Audit` |
| `Audit![ID]`                  | Receive data for a specific Trading Account. | `Audit!OM1234` |

### Fields

| Name   | Description |
| :------| :--- |
| ID     | The Trading Account identifier to announce Order Audit records for. |

## Payload

An ordered array of zero or more Order Audit Change objects, to be applied in sequence.

### Order Audit Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| O | String | Always | The operation being performed. One of:<br>**A**: Adding a new Order Audit record.<br>**U**: Updating an existing Order Audit record.<br>**R**: Removing an Order Audit records.<br>**C**: Clearing all Order Audit records. |
| Account | String | Optional | The target account. Will be provided when clearing. |
| Audit | Object | Optional | The audit record data. Will be omitted when clearing. Will always be provided in all other situations. |

### Order Audit object

All records will contain one of **Order**, **Request**, or **Transaction**.

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Version | String | Always | A version identifier for this record |
| OrderID | String | Always | The unique identifier of the Order this record relates to |
| Account | String | Always | The unique identifier of the Trading Account the Order belongs to |
| Type | String | Always | The type of record. Will be one of:<br>**Order:** Represents a change to an Order<br>**Request:** Represents a change to an Order Request<br>**Transaction:** Represents a new Transaction |
| Order | Object | Optional | The state of the Order. See the [Orders](../orders/) topic for more information |
| Request | Object | Optional | The state of the Order request. See the [Requests](../requests/) topic for more information |
| Transaction | Object | Optional | The state of the Transaction. See the [Transactions](../transactions/) topic for more information |

See [Data Types](../../../fundamentals/exchanging-data/data-types/#time) for Time formatting.
