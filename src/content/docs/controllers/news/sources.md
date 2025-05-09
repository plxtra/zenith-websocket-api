---
title: "News:Sources"
sidebar:
    label: Sources
---

Announces the state of the News Sources for the authenticated user.

**Controller:** News\
**Topic:** Sources\
**Action:** Sub\
**Permissions:** None

## Payload

Unordered Array of News Source State objects

### News Source State object

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| Code | String | Always | The code for the News Source |
| Feed | String | Always | Status of the data feed for this News Source. One of:<br />**Initialising:** Feed is establishing, and will be online shortly.<br />**Active:** Feed is active and online.<br />**Closed:** Feed is active, but the News Source is closed.<br />**Impaired:** Feed is unexpectedly offline, and data may be stale or unavailable.<br />**Expired**: Feed is temporarily unavailable while a new state is prepared. |

## Example

**Send:**
```json
{"Controller":"News","Topic":"Sources","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"News","Topic":"Sources","Data":[{"Code":"ASX","Feed":"Active"}]}
```
```json
{"Controller":"News","Topic":"Sources","Action":"Sub","Confirm":true}
```
