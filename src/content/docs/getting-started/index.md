---
title: "Getting Started"
---

Getting started with the Front-end WebSockets API client requires nothing more than a modern web-browser and some skill with JavaScript.

## Authenticate

First, you will need to get the required credentials from Paritech. These are used to negotiate with our OAuth 2.0 Authorisation Server, which will translate your credentials into a limited-time token for logging in to Paritech services including Zenith.

Once you have a token, you can either use HTTP authorisation to pass it to Zenith, or make an unauthorised connection and call the [AuthToken](../controllers/auth/authtoken/) action on the [Auth Controller](../controllers/auth/). Zenith will let you know whether your credentials are accepted, either via a HTTP 403 Forbidden reply, or in the response to calling [AuthToken](../controllers/auth/authtoken/).

Be aware that OAuth access tokens can and do expire, so a fully featured client will need to handle this situation and automatically refresh using the OAuth refresh token.

## Protocol Versions

The version of the Zenith protocol you wish to speak can be specified as a version parameter on the initial HTTP request.

## Check Access

One of the first things a client should do is see what they have access to. There are several queries to help with this,including: [QueryIdentify](../controllers/auth/queryidentify/), [QueryMarkets](../controllers/market/querymarkets/), [QuerySources](../controllers/news/querysources/), and [QueryAccounts](../controllers/trading/queryaccounts/).

[QueryIdentify](../controllers/auth/queryidentify/) will tell you whether you're successfully authorised \(assuming you didn't use HTTP authorisation\), and list the Zenith scopes you've been authorised for. Most parts of the Front-end WebSockets API will have one or more required scopes before you'll get any data back.

[QueryMarkets](../controllers/market/querymarkets/), assuming you're authorised, will give you a list of the markets you can see. Don't just assume you can always see a particular market. Depending on your login, the live market might be unavailable and you'll have `ASX\[Demo\]` instead. Or you may be able to access both `ASX` and `ASX\[Demo\]` at the same time.

Alternatively, rather than making a query, you can subscribe to the [Markets](../controllers/market/markets/) topic, which will send you updates to market status and downstream connectivity. If the market feed encounters a fault, it'll let you know.

Following the same pattern, [QuerySources](../controllers/news/querysources/) returns the list of News Sources you can see, and is paired with the [Sources](../controllers/news/sources/) subscription. [QueryAccounts](../controllers/trading/queryaccounts/) returns the list of Trading Accounts you can see, and is paired with the [Accounts](../controllers/trading/accounts/) subscription.

## Retrieving Data

Keeping in mind the access your login has, if you're authorised you can start making data requests.

The API supports two methods of data access:

* **Queries**, which are one-off requests for a snapshot at the time of the request
* **Subscriptions**, which will send streaming updates until unsubscribed from

We strongly recommend the Subscriptions interface for most tasks, as it provides realtime information with minimal bandwidth usage and processing.

See the [Market Controller](../controllers/market/) for retrieving market data. See the [News Controller](../controllers/news/) for announcements. See the [Trading Controller](../controllers/trading/) for holdings, balances and order management.

