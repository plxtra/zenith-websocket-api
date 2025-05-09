---
title: "Zenith:Feeds"
sidebar:
    label: Feeds
---

Announces server feed status. The reported feeds will not change for the duration of a connection, only their statuses.

**Controller:** Zenith\
**Topic:** `Feed`\
**Action:** Sub\
**Permissions:** None

## Payload

| Name  | Type   | Expect   | Description |
| :---- | :----- | :-----   | :----- |
| Name  | String | Always   | The name of the feed |
| Class | String | Always   | The class of feed. One of the following:<br />**Authority**<br />**Channel**<br />**Market**<br />**News**<br />**Scanner**<br />**Trading**<br />**Watchlist** |
| Feed  | String | Optional | Status of this data feed, if available. One of:<br/>**Initialising**: Feed is establishing, and will be online shortly.<br/>**Active**: Feed is active and online.<br/>**Closed**: Feed is active, but outside hours.<br/>**Inactive**: Feed is offline, and outside hours. Data may be unavailable.<br />**Impaired**: Feed is unexpectedly offline, and data may be stale or unavailable.<br />**Expired**: Feed is temporarily unavailable while a new state is prepared. |

## Example

**Send:**
```json
{"Controller":"Zenith","Topic":"Feeds","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Zenith","Topic":"Feeds","Data":[{"Name":"TradingAuthority","Class":"Authority","Status":"Active"}]}
```
```json
{"Controller":"Zenith","Topic":"Feeds","Action":"Sub","Confirm":true}
```
