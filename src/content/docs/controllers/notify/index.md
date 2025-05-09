---
title: "Notify Controller"
sidebar:
    label: Overview
---

The Notify Controller provides access to notification services.

See the [Channel](../../controllers/channel/) Controller for configuring the channels for distributing notifications (Push, SMS, etc).

## Actions

| Topic | Description |
| :--- | :--- |
| [CreateScan](createscan/) | Creates a new persistent Scan. |
| [DeleteScan](deletescan/) | Deletes a persistent Scan. |
| [ExecuteScan](executescan/) | Executes a one-off Scan and returns the current matches, given the scanner parameters. |
| [QueryMatches](querymatches/) | Requests the current matches for a specific persistent Scan. |
| [QueryScan](queryscans/) | Requests the current details of a specific persistent Scan. |
| [QueryScans](queryscans/) | Requests the current persistent Scans for the authenticated user. |
| [UpdateScan](updatescan/) | Updates a persistent Scan. |

See [Common](../../controllers/common/) for actions that are common to all controllers.

## Subscriptions

| Topic | Description |
| :--- | :--- |
| [Matches](matches/) | Announces the matches for a specific persistent Scan. |
| [Scans](scans/) | Announces the state of the persistent Scans for the authenticated user. |

