---
title: "Identify"
---

Announces the latest authority details.

This topic provides support for rolling keys, when used with an appropriate authentication provider. In the event of a disconnect, clients can send the most recent access token details to AuthToken when reconnecting, rather than re-requesting or retransmitting login details.

**Controller:** Auth\
**Topic:** `Identify`\
**Action:** Sub\
**Permissions:** None

## Payload

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Result | String | Always. Result code. One of the following: **Success** – Authentication accepted. **Reject** – Authentication rejected. |
| AccessToken | String | Sometimes. If successful and permitted for the user, provides a Base-64-encoded access token that can be saved and given to AuthToken to restore this connection in the future |
| DisplayName | String | Sometimes. If successful and available, provides a friendly name for the authenticated user |
| UserID | String | Sometimes. If successful, provides an internal name for the authenticated user |
| ExpiryDate | DateTime | Sometimes. If successful and this authentication will expire, provides the date and time when this will occur |
| Scope | Array | Sometimes. If successful, provides an array of strings describing the accepted access rights. See [Appendix A - Acceess Rights](../../../appendices/a-access-rights/) |

## Example

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Auth",
 Action:"Sub",
 Topic:"Identify"
}));
```

**Sample Response:**

```javascript
{
 "Controller":"Auth",
 "Topic":"Identify",
 "Data":
 {
  "Result":"Success",
  "Scope":
  [
   "Paritech.Zenith.Market.Data",
   "Paritech.Zenith.Market.News"
  ]
 }
}
```

