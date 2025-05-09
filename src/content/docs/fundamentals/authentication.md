---
title: "Authentication"
order: 1
---

## Sessions

Each WebSocket connection counts as a single session. Sessions are authenticated using the OpenAuth 2.0 standard, with extensions for use with WebSockets.

For security reasons, all authentication that requires the Trading or Ordering scopes requires an SSL WebSocket connection. Zenith will not give out access to these scopes over an unsecured connection.

## Establishing Credentials <a id="establishing-credentials"></a>

Clients should first authenticate with the appropriate Identity server. The exact steps for this process are documented in [RFC6749](https://tools.ietf.org/html/rfc6749).

| Endpoint | URL |
| :--- | :--- |
| Paritech Authorise | [https://passport.paritech.com/connect/authorise](https://passport.paritech.com/connect/authorise) |
| Paritech Token | [https://passport.paritech.com/connect/token](https://passport.paritech.com/connect/token) |

You will need to have a Client ID and Secret registered for your application.

### Access Rights

See [Appendix A - Access Rights](../../appendices/a-access-rights/) for the access rights your client can request from the Identity server.

## Connecting

Make your WebSocket connections to one of the Zenith servers.We highly recommend using a secured connection, as the API will require it for some operations (such as trading).

| Endpoint | URL |
| :--- | :--- |
| Staging Unsecured | `ws://websocket-staging.paritech.com/Zenith` |
| Staging Secured | `wss://websocket-staging.paritech.com/Zenith` |
| Production Unsecured | `ws://websocket.paritech.com/Zenith` |
| Production Secured | `wss://websocket.paritech.com/Zenith` |

If you omit a version query parameter, you will receive whatever the latest data protocol is \(which is distinct from the WebSocket protocol version\).

Incoming requests should provide the **User-Agent** header with, at minimum, the Application ID and version information, as this makes answering support queries easier.

**Example URL with data protocol version 2.0:**

[wss://wsapistaging.paritech.com/Zenith?version=2.0](http://wsapistaging.paritech.com/Zenith?version=2.0)

## Authenticating

Zenith supports several authentication methods.

### Bearer Token

The OAuth Access Token can be provided during the initial WebSocket HTTP handshake. This is called the Bearer scheme, and is described in greater detail in [RFC6750](https://tools.ietf.org/html/rfc6750). Zenith supports the token being given in the Authorization header only – it does not support the form-encoding or URI methods.

```text
GET /Zenith?version=2.0 HTTP/1.1
 Host: websocket-staging.paritech.com
 Origin: *
 Upgrade: websocket
 Connection: Upgrade,Keep-Alive
 Sec-WebSocket-Key: 1234
 Sec-WebSocket-Version: 13
 Sec-WebSocket-Protocol: ZenithJson
 Sec-WebSocket-Extensions: permessage-deflate
 Authorization: Bearer mF_9.B5f-4.1JqM
 User-Agent: TestClient/1.0
```

### Auth Actions

The client can also establish the WebSocket without authentication, and then pass the Access Token via the AuthToken action. This option is best for JavaScript or other clients which don't give easy access to the Authorization header when establishing a WebSocket connection.

## Maintaining a connection

Clients should regularly \(every thirty seconds\) send a WebSocket ping frame, and respond to any ping frames with a corresponding pong frame.

## Authentication Expiry

If the Access Token given by the OAuth server has an expiry date, you will eventually stop receiving data on a persistent connection. To prevent this from impacting the user, the client should reauthenticate with the OAuth server using the Refresh Token before the expiry date arrives.

Once you have a new Access Token, simply pass it on to Zenith by calling the AuthToken action.

### Expiry and Subscriptions

Subscriptions will be remembered by the system when authentication expires, such as when the client does not reauthenticate in time.

When reauthenticating, any subscriptions that are no longer valid will return an error, followed by an unsubscribe notification from the server.

