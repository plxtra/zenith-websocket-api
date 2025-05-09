---
title: "Auth:AuthCode"
sidebar:
    label: AuthCode
---

Authenticates with the server, providing client identity and an authorisation grant sourced externally.

This is primarily for internal and specialised clients. Typical API users should use the OAuth flow documented in the [Authentication](../../../fundamentals/authentication/) section of this document.

**Controller:** Auth\
**Topic:** `AuthCode`\
**Action:** Publish\
**Permissions:** None

## Request

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| Provider | String | Always | The authentication provider to login with |
| ClientID | String | Always | The identifier of the client software |
| ClientSecret | String | Optional | The password for this client software, if any. Used for secure clients. |
| AuthGrant | String | Always | An authorisation grant understood by the given Provider |
| Scope | Array | Optional | An array of strings identifying the desired access rights. If omitted, uses the maximum available for the user. See [Appendix A: Access Rights](../../../appendices/a-access-rights/) for more information. |

## Response

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| Result | String | Always | Result code. One of the following:<br>**Success:** Authentication accepted<br>**Reject:** Authentication rejected. |
| AccessToken | String | Optional | If successful and permitted for the user, provides the Base-64-encoded access token that can be saved and given to AuthToken to restore this connection in the future |
| DisplayName | String | Optional | If successful and available, provides a friendly name for the authenticated user |
| UserID | String | Optional | If successful, provides an internal name for the authenticated user |
| ExpiryDate | DateTime | Optional | If successful and this authentication will expire, provides the date and time when this will occur |
| Scope | Array | Optional | If successful, provides an array of strings describing the accepted security scopes |

See [Data Types](../../../fundamentals/exchanging-data/data-types/#datetime) for DateTime formatting.

## Example

```javascript
var authGrant = authWithExternalService();
websocket.send(JSON.stringify(
{
 Controller:"Auth",
 Topic:"AuthCode",
 TransactionID:1,
 Data:
 {
  Provider: "Paritech",
  ClientID: "TriOptimum",
  AuthGrant: "authGrant",
  Scope: ["Paritech.Zenith"]
 }
}));
```

**Sample Response:**

```javascript
{
 "Controller":"Auth",
 "Topic":"Identify",
 "TransactionID":1,
 "Data":
 {
  "Result":"Success",
  "Scope":["Paritech.Zenith.Market", "Paritech.Zenith.Trading"]
 }
}
```

