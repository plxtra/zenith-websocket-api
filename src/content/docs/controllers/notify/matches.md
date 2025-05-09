---
title: "Notify:Matches"
sidebar:
    label: Matches
---

Announces the state of the persistent Scans for the authenticated user.

**Controller:** Notify\
**Topic:** `Matches![ID]`\
**Action:** Sub\
**Permissions:** Zenith/Market

## Topic Format

| Format      | Description | Example
| :---------- | :--- | :--- |
| `Matches![ID]` | Receive matches relating to a Scan. | `Matches!j5Tm6X` |

### Fields

| Name | Description
| :--- | :--- |
| ID | The identifer of a persistent Scan. |

## Payload

An array of Scan Match Change objects

### Scan Match Change object

| Name      | Type    | Expect   | Description |
| :-------- | :------ | :------- | :--- |
| Operation | String  | Always | The operation being performed. One of:<br>**Add**: Adding a new Match.<br>**Update**: Updating an existing Match.<br>**Remove**: Removing a Match.<br>**Clear**: Clearing all Matches. |
| Key       | String  | Sometimes | The key for the match. Will be omitted when clearing. Will always be provided in all other situations. |

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"Matches!j5Tm6X","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"Matches!j5Tm6X","Data":[
	{"Operation":"Clear"},
	{"Operation":"Add","Key":"BHP.ASX"}
]}
```
```json
{"Controller":"Notify","Topic":"Matches!j5Tm6X","Action":"Sub","Confirm":true}
```

**Match Removed:**
```json
{"Controller":"Notify","Topic":"Matches!j5Tm6X","Data":[
	{"Operation":"Remove","Key":"BHP.ASX"}
]}
```