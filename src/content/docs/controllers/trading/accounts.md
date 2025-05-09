---
title: "Trading:Accounts"
sidebar:
    label: Accounts
---

Announces the state of the Trading Accountsfor the authenticated user.

This is a legacy subscription. New development should be focused on the [TradingAccounts](tradingaccounts/) subscription.

**Controller:** Trading\
**Topic:** `Accounts`\
**Action:** Sub\
**Permissions:** None

## Payload

Unordered Array of Account State objects

### Account State object

| Name       | Type   | Expect   | Description |
| :--------- | :----- | :------- | :--- |
| ID         | String | Always | The unique identifier for the Account |
| Feed       | String | Always | Overall status of the data feed for this Account. One of:<br/>**Initialising**: Feed is establishing, and will be online shortly.<br/>**Active**: Feed is active and online.<br/>**Closed**: Feed is active, but outside hours.<br/>**Inactive**: Feed is offline, and outside hours. Data may be unavailable.<br />**Impaired**: Feed is unexpectedly offline, and data may be stale or unavailable<br />**Expired**: Feed is temporarily unavailable while a new state is prepared. |
| Name       | String | Sometimes | The friendly name of this Account |
| Provider   | String | Sometimes | The underlying data provider |
| Currency   | String | Sometimes | The default trading currency for this Account |
| Attributes | Object | Sometimes | An object where the keys and values represent attributes associated with this Account. |
| Categories | Array  | Sometimes | An array of string codes representing the categories the Account belongs to, if any. |

Feed status changes can be sent as just `ID` and `Feed`. In all other cases, all fields will be sent.

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"Accounts","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Trading","Topic":"Accounts","Data":[{"ID":"PT56789","Name":"Paritech Account 56789","Feed":"Active","Provider":"TotalView","Currency":"AUD","CategoryCodes":["Professional"],"Attributes":{"HIN":"56789"}}]}
```
```json
{"Controller":"Trading","Topic":"Accounts","Action":"Sub","Confirm":true}
```

**Feed Status Change:**
```json
{"Controller":"Trading","Topic":"Accounts","Data":[{"ID":"PT56789","Feed":"Impaired"}]}
```