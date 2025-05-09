---
title: "Auth:AuthOwner"
sidebar:
    label: AuthOwner
---

Authenticates with the server, providing full identity including user name and password.

This is primarily for internal and specialised clients. Typical API users should use the OAuth flow documented in the [Authentication](../../../fundamentals/authentication/) section of this document.

**Controller:** Auth\
**Topic:** `AuthOwner`\
**Action:** Publish\
**Permissions:** None

## Request

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Provider | String | Required. The authentication Provider to login with |
| ClientID | String | Required. The identifier of the Client software |
| ClientSecret | String | Optional. The password for this Client software, if any. Used for secure clients. |
| UserName | String | Optional. The identifier of the user using the software. May be omitted if using Client Credentials |
| Password | String | Optional. The password for the identified user. May be omitted if using Client Credentials. |
| Scope | Array | Optional. An array of strings identifying the desired security level.If omitted, uses the maximum scope for the user. See [Appendix A: Access Rights](../../appendices/appendix-a-access-rights/) for more information. |

## Response

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Result | String | Always. Result code. One of the following:Success – Authentication acceptedReject – Authentication rejected. |
| AccessToken | String | Sometimes. If successful and permitted for the user, provides the Base-64-encoded access token that can be saved and given to AuthToken to restore this connection in the future |
| DisplayName | String | Sometimes. If successful and available, provides a friendly name for the authenticated user |
| UserID | String | Sometimes. If successful, provides an internal name for the authenticated user |
| ExpiryDate | DateTime | Sometimes. If successful and this authentication will expire, provides the date and time when this will occur |
| Scope | Array | Sometimes. If successful, provides an array of strings describing the accepted security scopes |

See [Data Types](../../../fundamentals/exchanging-data/data-types/#datetime) for DateTime formatting.

## Example

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Auth",
 Topic:"AuthOwner",
 TransactionID:1,
 Data:
 {
  Provider: "Paritech",
  ClientID: "TriOptimum",
  UserName: "Shodan",
  Password: "Insect",
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
  "Result":"Reject"
 }
}
```

