---
title: "Notify:Scans"
sidebar:
    label: Scans
---

Announces the state of the persistent Scans for the authenticated user.

**Controller:** Notify\
**Topic:** `Scans`\
**Action:** Sub\
**Permissions:** None

## Payload

An array of Scan Change objects

### Scan Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Operation | String | Always | The operation being performed. One of:<br>**Add**: Adding a new Scan.<br>**Update**: Updating an existing Scan.<br>**Remove**: Removing a Scan.<br>**Clear**: Clearing all Scans. |
| Scan | Object | Optional | A Scan State object. Will be omitted when clearing. Will always be provided in all other situations. |

### Scan State object

| Name        | Type    | Expect   | Description |
| :---------- | :------ | :------- | :--- |
| ID          | String  | Always   | The unique identifier for the Scan. |
| Name        | String  | Sometimes | The friendly name of this Scan. |
| Description | String  | Sometimes | The friendly name of this Scan. |
| Metadata    | Object  | Always    | An user-defined object with string values. |
| IsWritable  | Boolean | Sometimes | True if the Scan can be edited, False for Read Only. |
| Status      | String  | Always    | The status of the Scan. One of:<br>**Active**: Scan is active. Will provide notifications and can be queried.<br>**Inactive**: Scan is inactive. Will not provide notifications, and cannot be queried.<br>**Faulted**: Scan has failed due to an error. Will not provide notifications, and cannot be queried. |
| Type        | String  | Always    | The scanner type. |

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"Scans","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"Scans","Data":[
	{"Operation":"Clear"},
	{"Operation":"Add",{"ID":"j5Tm6X","Name":"Hot Stocks","Metadata":{"Category":"User"},"Status":"Active","Type":"Market.Monitor"}}
]}
```
```json
{"Controller":"Notify","Topic":"Scans","Action":"Sub","Confirm":true}
```

**Scan Removed:**
```json
{"Controller":"Notify","Topic":"Scans","Data":[
	{"Operation":"Remove",{"ID":"j5Tm6X"}}
]}
```