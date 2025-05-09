---
title: "Auth Controller"
sidebar:
    label: Overview
---

The Authentication Controller provides authentication operations for identifying the User

## Queries

| Topic | Description |
| :--- | :--- |
| [AuthCode](authcode/) | Authenticates with the server, providing client identity and an authorisation grant sourced externally. |
| [AuthOwner](authowner/) | Authenticates with the server, providing full identity including user name and password. |
| [AuthToken](authtoken/) | Authenticates with the server, providing an access token sourced from an external Authorisation Server such as OAuth. |
| [QueryIdentify](queryidentify/) | Retrieves the current authenticated user information for the connection. |

See [Common](../common/) for queries that are common to all controllers.

## Subscriptions

| Topic | Description |
| :--- | :--- |
| [Identify](identify/) | Announces the latest authority details. |

