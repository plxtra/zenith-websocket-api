---
title: "Market:Levels"
sidebar:
    label: Levels
---

Announces the current Price Levels in the Market Depth for a Security. This is an aggregation of depth at each price point.

This subscription is only available for symbols that offer **DepthShort** in their `SubscriptionData`.

**Controller:** Market\
**Topic:** `Levels![Code].[Market]`\
**Action:** Sub\
**Permissions:** Zenith/Market\
**Server-side Unsubscribe:** Yes

## Topic Format

| Format                     | Description | Example
| :------------------------- | :--- | :--- |
| `Levels![Code].[Market]` | Receive depth levels relating to a symbol. | `Levels!BHP.ASX` |

### Fields

| Name | Description
| :--- | :--- |
| Market | The code for the listing Market of the desired symbol. Can be a Mixed Market code. |
| Code | The code of the desired symbol. |

## Payload

An ordered array of zero or more Level Change objects, to be applied in sequence.

Price Levels are not provided in any particular sort order. Clients will need to apply appropriate sorting.

### Level Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| O      | String  | Always   | The operation being performed. One of:<br>**A:** Adding a new Level.<br>**U:** Updating an existing Level.<br>**R:** Removing an Level.<br>**C:** Clearing all Levels |
| Level  | Object  | Optional | A Depth Level object. Will be omitted when clearing. Will always be provided in all other situations. |

### Depth Level object

| Name           | Type    | Expect   | Description |
| :------------- | :------ | :------- | :--- |
| ID             | String  | Always   | The level identifier, unique for the subscribed Security. |
| Side           | String  | Optional | The side of the market the Level is on. Will be provided for additions only. One of: **Bid:** Bid \(buy\) side. **Ask:** Ask \(sell\) side. |
| Price          | Decimal | Optional | The price point of the Level. Will be provided for additions only. If null, means the data is a summary of the remaining price points \(eg: if a Security only provides level data for the top five price points, a null price will aggregate the remainder\) |
| Volume         | Decimal | Optional | The total volume of shares at this Level. May be provided for Additions or Updates. If omitted, means the data is unavailable for this Security |
| Count          | Integer | Optional | The total number of Orders at this Level. May be provided for Additions or Updates. If omitted, means the data is unavailable for this Security |
| HasUndisclosed | Boolean | Optional | Whether there is an undisclosed amount at this Level. May be provided for Additions or Updates. If omitted, means there is no undisclosed amount, or this data is unavailable for this Security |
| Market         | String  | Optional | The original Market that holds this Level, when using Mixed Markets |

