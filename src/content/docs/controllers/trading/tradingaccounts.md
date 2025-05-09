---
title: "Trading:TradingAccounts"
sidebar:
    label: TradingAccounts
---

Announces the state of the Trading Accounts for the authenticated user.

**Controller:** Trading\
**Topic:** `TradingAccounts`\
**Action:** Sub\
**Permissions:** None

## Payload

Unordered Array of Trading Account Change objects

### Trading Account Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Operation | String | Always | The operation being performed. One of:<br>**Add**: Adding a new Trading Account.<br>**Update**: Updating an existing Trading Account.<br>**Remove**: Removing an Trading Account.<br>**Clear**: Clearing all Trading Accounts. |
| Account | Object | Optional | A Trading Account State object. Will be omitted when clearing. Will always be provided in all other situations. |

### Trading Account State object

| Name       | Type   | Expect   | Description |
| :--------- | :----- | :------- | :--- |
| ID         | String | Always   | The unique identifier for the Trading Account. |
| Feed       | String | Always   | Overall status of the data feed for this Trading Account. One of:<br/>**Initialising**: Feed is establishing, and will be online shortly.<br/>**Active**: Feed is active and online.<br/>**Closed**: Feed is active, but outside hours.<br/>**Inactive**: Feed is offline, and outside hours. Data may be unavailable.<br />**Impaired**: Feed is unexpectedly offline, and data may be stale or unavailable<br />**Expired**: Feed is temporarily unavailable while a new state is prepared. |
| Name       | String | Sometimes | The friendly name of this Trading Account. |
| Provider   | String | Sometimes | The underlying data feed provider. |
| Currency   | String | Sometimes | The default trading currency for this Trading Account. |
| Attributes | Object | Sometimes | An object where the keys and values represent attributes associated with this Account. |
| Categories | Array  | Sometimes | An array of string codes representing the categories the Account belongs to, if any. |

Feed status changes can be sent as just `ID` and `Feed`. In all other cases, all fields will be sent.

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"TradingAccounts","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Trading","Topic":"TradingAccounts","Data":[
	{"Operation":"Clear"},
	{"Operation":"Add",{"ID":"PT56789","Name":"Paritech Account 56789","Feed":"Active","Provider":"TotalView","Currency":"AUD","CategoryCodes":["Professional"],"Attributes":{"HIN":"56789"}}}
]}
```
```json
{"Controller":"Trading","Topic":"TradingAccounts","Action":"Sub","Confirm":true}
```

**Feed Status Change:**
```json
{"Controller":"Trading","Topic":"TradingAccounts","Data":[
	{"Operation":"Update",{"ID":"PT56789","Feed":"Impaired"}}
]}
```