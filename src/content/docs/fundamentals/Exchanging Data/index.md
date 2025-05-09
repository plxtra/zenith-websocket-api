---
title: Exchanging Data
sidebar:
    label: Overview
---

## Message Container <a id="message-container"></a>

All Zenith messages are sent and received wrapped in a container.

The container takes the following format.

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Controller | String | Optional. The target controller. If omitted, defaults to "Zenith" |
| Action | String | Optional. The action to perform. If omitted, defaults to "Publish". One of the following: **Sub**: Subscribe to the given topic. **Unsub**: Unsubscribe from the given topic. **Error**: An error occurred. If topic is omitted, refers to the whole controller. **Publish**: Publishes a message to the given topic. **Cancel**: Requests to cancel a pending transaction or transactions |
| Topic | String | Optional: The target topic. Required for all actions except Error |
| Data | Object | Optional. The message content. Can be omitted or null for Sub/Unsub |
| TransactionID | Integer | Optional. Used for RPC. When publishing, identifies the transaction this message belongs to. When cancelling, identifies the transaction or transactions to cancel |
| Confirm | Boolean | Optional. Used to communicate confirmations for subscribe and unsubscribe actions. When sent by a Client, requests confirmation of a subscribe or unsubscribe. When received by a Client, identifies whether the subscription succeeded. Unsubscribe always succeeds. If omitted, defaults to False |

## Calling Actions <a id="calling-actions"></a>

Actions are remote-procedure-calls \(RPC\), initiated by publishing a message to the target topic on a Controller.

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Controller | String | Optional. The target controller. If omitted, defaults to "Zenith" |
| Action | String | Optional. If set, set to "Publish" |
| Topic | String | Required. The action topic to publish to |
| TransactionID | Integer | Optional. Responses from this Action will be returned with the given Transaction ID. |
| Data | Object | Optional. Any parameters to pass as part to the action |

Action results are returned by populating the Transaction ID with a client-determined value. The response to the action will be returned with the same Transaction ID.

Transaction IDs do not need to be sequential or unique, and the server performs no validation beyond ensuring it's a number – managing them is entirely up to the client.

**Code Example:**

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Topic:"QueryMarkets",
 TransactionID:1,
 Data:null
}));
```

**Sample Response:**

```javascript
{
 "Controller":"Market",
 "Topic":"QueryMarkets",
 "TransactionID":1,
 "Data":
 [{"Code":"ASX","Status":"Open"}]
}
```

If a Transaction ID is omitted on an action that returns results, it will attempt to return the results to a subscription with the same name. If no subscription exists, an "Operation.NoResult" Error will be returned.

**Code Example:**

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Topic:"QueryMarkets",
 Action:"Sub"
}));
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Topic:"QueryMarkets",
 Data:null
}));
```

**Sample Response:**

```javascript
{
 "Controller":"Market",
 "Topic":"QueryMarkets",
 "Data":
 [{"Code":"ASX","Status":"Open"}]
}
```

## Subscriptions

Subscribe and unsubscribe actions for a particular topic are processed sequentially by the server in the order they are sent. A subscribe message followed immediately by an unsubscribe message is guaranteed to result in no subscription.

Subscriptions are reference-counted, so each Sub action must be matched with a corresponding Unsub action. Multiple subscriptions to the one topic will not result in duplicate messages.

In the event of a successful subscription, you may begin receiving messages before the Confirm message is received. If the subscription does not succeed, you will only receive an Error action, and if requested, a Confirm message with the Confirm field omitted.

When unsubscribing, you may continue to receive messages from that topic for a short time, even after the unsubscribe is confirmed. This is due to the asynchronous nature of the server.

### Subscribing

To subscribe to a topic, send a message with the Action Sub:

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Controller | String | Optional. The target controller. If omitted, defaults to "Zenith" |
| Action | String | Required. Set to "Sub" |
| Topic | String | Required. The topic to subscribe to |
| Data | Object | Optional. Any data to pass as part of the subscription operation |
| Confirm | Boolean | Optional. Set to true to receive a confirmation message. If omitted, defaults to False |

The confirmation message takes the following format:

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Controller | String | Optional. The target controller. If omitted, defaults to "Zenith" |
| Action | String | Always. Set to "Sub" |
| Topic | String | Always. The topic to subscribe to |
| Data | Object | Optional. If the subscription failed, will describe the reason why |
| Confirm | Boolean | Optional. True if the subscription succeeded. If omitted, defaults to False |

**Code Example:**

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Topic:"Markets",
 Action:"Sub",
 Confirm:true,
 Data:null
});
```

**Sample Responses:**

```javascript
{
 "Controller":"Market",
 "Topic":"Markets",
 "Action":"Sub",
 "Confirm":true
}
{
 "Controller":"Market",
 "Topic":"Markets",
 "Data": [{"Code":"ASX","Status":"Open"}]
}
```

### Unsubscribing

Unsubscribe from a topic by passing a message with the Action Unsub:

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Controller | String | Optional. The target controller. If omitted, defaults to "Zenith" |
| Action | String | Required. Set to "Unsub" |
| Topic | String | Required. The topic to unsubscribe from |
| Confirm | Boolean | Optional. Set to true to receive a confirmation message. If omitted, defaults to False |

The confirmation message takes the following format:

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Controller | String | Optional. The target controller. If omitted, defaults to "Zenith" |
| Action | String | Always. Set to "Unsub" |
| Topic | String | Always. The topic that was unsubscribed from |
| Confirm | Boolean | Sometimes. Set to true if this was a server-initiated unsubscribe. If omitted, indicates a client-initiated unsubscribe |

**Code Example:**

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Topic:"Markets",
 Action:"Unsub",
 Confirm:true
}));
```

**Sample Response:**

```javascript
{
 "Controller":"Market",
 "Topic":"Markets",
 "Action":"Unsub"
}
```

### Server-initiated Unsubscribe

If subscribed data is no longer available, the server can send an Unsub action for each reference on that subscription.

This Unsub action will have Confirm set to true, to indicate it was server-initiated and differentiate it from a client-initiated unsubscribe.

If a server-initiated unsubscribe occurs after receiving an incoming subscribe event \(which will add a reference\), you may receive a corresponding unsubscribe before the subscription confirmation.

Server-initiated unsubscribe can occur in the following situations:

- A connection is reauthenticated, such as when an OAuth token is due to expire, and the user's permissions have changed.
- The user opens a subscription for a limited resource on another connection, such as ASX data which only permits one concurrent session at a time, causing the older subscriptions to be closed.

#### Example **

**Send:**
```json
{"Controller":"Auth","Topic":"AuthToken","TransactionID":1,"Data":{"Provider":"Bearer","AccessToken":"mF_9.B5f-4.1JqM"}}
```

**Receive:**
```json
{"Controller":"Auth","Topic":"Identify","TransactionID":1,"Data":{"Result":"Success","Scope":["Zenith/Market", "Zenith/Trading"]}}
```
```json
{"Controller":"Market","Topic":"Security!BHP.ASX",Action":"Unsub","Confirm":true}
```

## Errors <a id="errors"></a>

Errors are sent by the server in the event of a subscription failure, or an invalid message being published to an Action topic.

Actions may result in errors being returned as well as a result. Eg: when querying Symbols without specifying a market, errors may be returned identifying the markets the user has access to that were unavailable.

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Controller | String | Optional. The controller that raised an error. If omitted, defaults to "Zenith" |
| Action | String | Required. Set to "Error" |
| Topic | String | Optional. The topic that raised an error. If omitted, signals the error was global to the Controller |
| TransactionID | Integer | Optional. The Transaction that raised an error. If omitted, message is not transaction specific |
| Data | Object | Optional. Details on the error that occurred.If Data is a string, the value is a code identifying the error. See AppendixDfor error codes. |

**Code Example:**

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Topic:"Markets",
 Action:"Sub",
 Confirm:true,
 Data:null
}));
```

**Sample Responses:**

```javascript
{
 "Controller":"Market",
 "Topic":"Markets",
 "Action":"Error",
 "Data":"Authority"
}
```

## Activity and Timeouts <a id="activity-and-timeouts"></a>

The server has a timeout of one minute. If no data is received by the server within that amount of time, the connection will be closed with a WebSocket reason of 1008, indicating a violation of policy.

A client should respond to WebSocket Ping messages, which are sent every 30 seconds by the server, with a corresponding Pong. This is sufficient to keep the connection alive.

All actions and subscriptions come with their own timeouts as well. In the event an operation takes too long for the server to complete, it will cancel and return an error of Operation.Timeout. The amount of time taken is configurable for each Controller, and defaults to 35 seconds. See ConfigureandQueryConfigurein theCommonsection for more information.
