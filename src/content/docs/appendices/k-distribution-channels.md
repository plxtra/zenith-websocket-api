---
title: "Appendix K: Distribution Channels"
---

A Distribution Channel is a method for delivering notifications.

| Name     | Type Code       | Description |
| :------- | :-------------- | :---------- |
| APNS     | Push.APNs       | Push notifications sent to Apple Push Notification Service. |
| Debug    | Debug           | Notifications that are only logged. For testing purposes only. |
| Email    | Email           | Email notifications sent to an email address. |
| FCM      | Push.FCM        | Push notifications sent to Google Firebase Cloud Messaging. |
| SMS      | SMS             | SMS notifications to a phone number. |
| Web Push | Push.Web        | Push notifications sent to a specific Web Browser. |

Each method may have settings available for both the Notification Channel and the Notification Source, potentially with metadata required to configure a Channel.

## Apple Push

**Type:** `Push.APNs`

Supports push notifications sent to Apple Push Notification Service. For use with iOS and other Apple devices.

Each instance of this channel will push to a specific device and application.

## Email

**Type:** `Email`

Supports email notifications sent to an email address.

### Distribution Method Metadata

No metadata.

### Notification Channel Settings

| Name           | Type    | Expect    | Description |
| :------------- | :------ | :-------- | :---------- |
| email          | String  | Always    | The email address to deliver to. |
| name           | String  | Optional  | The display name of the recipient. |

### Notification Source Settings

| Name           | Type    | Expect    | Description |
| :------------- | :------ | :-------- | :---------- |
| urgency        | String  | Sometimes | An optional urgency to supply with the email. If omitted, defaults to **Normal**. One of: **Low**, **Normal**, **High**. |

## Google Firebase Messaging

**Type:** `Push.FCM`

Supports push notifications sent to Google Firebase Cloud Messaging. For use with Android devices using Google Play Services.

Each instance of this channel will push to a specific device and application.

## Sessions Notification

**Type:** `Sessions`

Supports notifications sent to all open application sessions for the user.

Only one of these channels is 

## SMS

**Type:** `SMS`

Supports SMS notifications sent to a phone number.

## Web Push

**Type:** `Push.Web`

Supports push notifications sent to a specific Web Browser via the Web Push standard. For use with websites and PWA's in Chrome, Firefox, Edge, Safari, etc.

Each instance of this channel will push to a specific browser and website.

### Distribution Method Metadata

| Name                 | Type    | Expect    | Description |
| :------------------- | :------ | :-------- | :---------- |
| userVisibleOnly      | Boolean | Always    | Whether the notifications should be visible in the target browser. Always true. |
| applicationServerKey | String  | Always    | A Base-64 Application Public Key as required by Web Push. |

### Notification Channel Settings

The settings for Web Push generally mirrors the subscription object provided by the browser Push API.

| Name           | Type    | Expect    | Description |
| :------------- | :------ | :-------- | :---------- |
| endpoint       | String  | Always    | The browser vendor's endpoint to send push notifications to. |
| expirationTime | Number  | Sometimes | An optional expiration time after which the subscription must be renewed by the browser. |
| keys           | Object  | Sometimes | An optional Web Push Keys object to use for encrypting the payload. If omitted, no payload will be included in the notification. |

#### Web Push Keys object

| Name           | Type    | Expect    | Description |
| :------------- | :------ | :-------- | :---------- |
| p256dh         | String  | Always    | A Base64-encoded RFC5480 ECDH public key. |
| auth           | String  | Always    | A Base64-encoded auth key. |

### Notification Source Settings

| Name           | Type    | Expect    | Description |
| :------------- | :------ | :-------- | :---------- |
| ttl            | Number  | Always    | The Time-To-Live, in seconds, before the notification is discarded undelivered by the push notification service. Can be zero to require immediate delivery. |
| urgency        | String  | Sometimes | An optional urgency to supply to the push notification service. If omitted, defaults to **Normal**. One of: **VeryLow**, **Low**, **Normal**, **High**. |
| topic          | String  | Sometimes | An optional topic identifier to supply to the push notification service. Further notifications with this topic will overwrite previously undelivered notifications. Must meet the format requirements for the HTTP Topic header. |
