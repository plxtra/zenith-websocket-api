---
title: "Market:Markets"
sidebar:
    label: Markets
---

Announces the state of the Markets for the authenticated user.

**Controller:** Market\
**Topic:** `Markets`\
**Action:** Sub\
**Permissions:** None

## Payload

Unordered array of Market State objects.

### Market State object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Code | String | Always | The code for the Market |
| Feed | String | Always | Status of the data feed for this Market. One of:<br/>**Initialising**: Feed is establishing, and will be online shortly.<br/>**Active**: Feed is active and online.<br/>**Closed**: Feed is active, but outside hours.<br/>**Inactive**: Feed is offline, and outside hours. Data may be unavailable.<br />**Impaired**: Feed is unexpectedly offline, and data may be stale or unavailable<br />**Expired**: Feed is temporarily unavailable while a new state is prepared. |
| TradingDate | Date | Optional | The trading date of the Market. Omitted if the Feed is initialising. Eg: Will refer to the Friday when viewed on weekends for markets that are not open. |
| MarketTime | DateTime | Optional | The current date and time at the exchange, including time zone. Omitted if the Feed is initialising. |
| Status | String | Optional | The default trading status of the Market. Omitted if the Feed is initialising. |
| States | Array | Optional | The state of each Trading Market within this Market. Omitted if the Feed is initialising. |

### Trading Market State object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Name | String | Always | The code for the Sector. Eg: ASX:TM:E1 |
| Status | String | Always | The current trading status of the Trading Market |

## Example

**Send:**
```json
{"Controller":"Market","Topic":"Markets","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Market","Topic":"Markets","Data":[{"Code":"ASX","Feed":"Active","TradingDate":"2014-02-11","MarketTime":"2014-02-11T12:44:02+10:00","Status":"Open"}]}
```
```json
{"Controller":"Market","Topic":"Markets","Action":"Sub","Confirm":true}
```
