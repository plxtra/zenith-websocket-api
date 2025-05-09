---
title: "WebSocket Connection"
order: 2
---

Zenith messages are sent via WebSocket frames.

Zenith supports several serialisation formats for its publish/subscribe infrastructure, negotiated via the Sec-WebSocket-Protocol header. Clients should list their desired protocols in order of decreasing preference, and the Server will reply with the final protocol to use.

| Format | Name in Sec-WebSocket-Protocol header | Frame Type |
| :--- | :--- | :--- |
| JSON | ZenithJson | Text |
| BSON | ZenithBson | Binary |
| Message Pack | ZenithMsgPack | Binary |

**Example Client RequestHeader:**

```text
Sec-WebSocket-Protocol: ZenithJson,ZenithBson, ZenithMsgPack
```

**Example Server ResponseHeader:**

```text
Sec-WebSocket-Protocol: ZenithJson
```

All messages take the same structure in all serialisation formats, so the formats are interchangeable. Property names should be considered case-sensitive.

## Protocol Version

Zenith is intended to be backwards compatible with older clients. To enable this in your client, you must pass a version query parameter in your initial HTTP request.

| Version | Notable Changes |
| :------ | :--- |
| 1.6     | Legacy Version |
| 2.0     | Current Public Release |

If you do not request a specific version, you will receive the most recent protocol. The protocol version can be retrieved from the `ServerInfo` subscription on the `Zenith` Controller.

**Example URL with data protocol version:**

`http://staging-websocket.paritech.com/Zenith?version=2.0`

## WebSocket Close

When a WebSocket connection is closed by the Client, the Server will send one of the following standard codes as an explanation.

| Code | Name           | Description |
| :--- | :------------- | :---------- |
| 1000 | Normal         | Sent in response to a client-initiated closure. |
| 1001 | GoingAway      | Sent if the server deliberately dropped your connection. |
| 1002 | Protocol       | Sent if the client supplies an invalid or malformed frame. |
| 1007 | DataInvalid    | Sent if the client supplies an invalid packet. |
| 1008 | ViolatesPolicy | Sent if the client has not responded to ping. |
| 1009 | DataTooLarge   | Sent if the client sends a message that is too large. |
| 1011 | ServerError    | Sent if the server encountered a situation requiring it to end the connection. |
| 1012 | ServerRestart  | Sent if the server is shutting down. The client should attempt to reconnect. |

Zenith also defines the following application-specific close codes.

| Code | Name           | Description |
| :--- | :------------- | :---------- |
| 4000 | Session        | Sent if this Connection is being dropped due to a concurrent login exceeding the limits of your account. |