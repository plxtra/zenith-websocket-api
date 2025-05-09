---
title: "Auth:AuthToken"
sidebar:
    label: AuthToken
---

Authenticates with the server, providing an access token sourced from an external Authorisation Server such as OAuth. You can also perform this operation by passing the HTTP Authorization header, with `Provider` as the Scheme and `AccessToken` as the Token. In this case, use `QueryIdentify` to retrieve the user details.

This action is also used to pass updated credentials when an authority would expire, using a Refresh Token.

**Controller:** Auth\
**Topic:** `AuthToken`\
**Action:** Publish\
**Permissions:** None

## Request

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| Provider | String | Always | The authentication Provider to authenticate with. When using an OAuth Access Token from Paritech, pass "Bearer". |
| AccessToken | String | Always | An access token understood by the given Provider. The value is parsed as follows: If the input decodes as Base-64, decode it and use the binary as the access token. If it is not valid Base-64, use the raw ASCII as the access token. |

## Response

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| Result | String | Always | Result code. One of the following:<br>**Success:** Authentication accepted<br>**Reject:** Authentication rejected. |
| AccessToken | String | Optional | If successful and permitted for the user, provides the Base-64-encoded access token that can be saved and given to AuthToken to restore this connection in the future |
| DisplayName | String | Optional | If successful and available, provides a friendly name for the authenticated user |
| UserID | String | Optional | If successful, provides an internal name for the authenticated user |
| ExpiryDate | DateTime | Optional | If successful and this authentication will expire, provides the date and time when this will occur |
| Scope | Array | Optional | If successful, provides an array of strings describing the accepted access rights |

See [Data Types](../../../fundamentals/exchanging-data/data-types/#datetime) for DateTime formatting.

## Example

**Request:**
```json
{"Controller":"Auth","Topic":"AuthToken","TransactionID":1,"Data":{"Provider":"Bearer","AccessToken":"mF_9.B5f-4.1JqM"}}
```

**Response:**
```json
{"Controller":"Auth","Topic":"Identify","TransactionID":1,"Data":{"Result":"Success","Scope":["Paritech.Zenith.Market", "Paritech.Zenith.Trading"]}}
```

## Example (with HTTP authentication)

**Request:**
```text
GET /Zenith?version=1.1 HTTP/1.1
Host: apistaging.paritech.com
Origin: *
Upgrade: websocket
Connection: Upgrade,Keep-Alive
Sec-WebSocket-Key: 9hGUMahIW3ZBRXvs413Dww==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: ZenithJson
Sec-WebSocket-Extensions: permessage-deflate
User-Agent: TestClient/1.0
Authorization: Bearer mF_9.B5f-4.1JqM
```

**Response:**
```text
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

**Request:**
```json
{"Controller":"Auth","Topic":"QueryIdentify","TransactionID":1}
```

**Response:**
```json
{"Controller":"Auth","Topic":"QueryIdentify","TransactionID":1,"Data":{"Result":"Success","Scope":["Paritech.Zenith.Market", "Paritech.Zenith.Trading"]}}
```
