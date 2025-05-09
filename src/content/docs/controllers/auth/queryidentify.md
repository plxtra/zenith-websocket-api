---
title: "QueryIdentify"
---

Retrieves the current authenticated user information for the connection.

**Controller:** Auth\
**Topic:** `QueryIdentify`\
**Action:** Publish\
**Permissions:** None

## Request

No Request Body

## Response

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| Result | String | Always | Result code. One of the following:<br>**Success:** Authentication accepted<br>**Reject:** Authentication rejected. |
| AccessToken | String | Optional | If successful and permitted for the user, provides the access token that can be saved and given to AuthToken to restore this connection in the future |
| DisplayName | String | Optional | If successful and available, provides a friendly name for the authenticated user |
| UserID | String | Optional | If successful, provides an internal name for the authenticated user |
| ExpiryDate | DateTime | Optional | If successful and this authentication will expire, provides the date and time when this will occur |
| Scope | Array | Optional | If successful, provides an array of strings describing the accepted access rights. See [Appendix A - Acceess Rights](../../../appendices/a-access-rights/) |

## Example

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Auth",
 Topic:"QueryIdentify",
 TransactionID:1
}));
```

**Sample Response:**

```javascript
{
 "Controller":"Auth",
 "Topic":"QueryIdentify",
 "TransactionID":1,
 "Data":
 {
  "Result":"Success",
  "Scope":["Paritech.Zenith.Market", "Paritech.Zenith.Trading"]
 }
}
```

