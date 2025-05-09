---
title: "News:News"
sidebar:
    label: News
---

Announces incoming news announcements. Can be filtered based on the news source, a specific symbol, or a specific symbol.

**Controller:** News\
**Topic:** `News`, `News![Source]`, `News![Code].[Exchange]` or `News![Source]![Code].[Exchange]`\
**Action:** Sub\
**Permissions:** Zenith/News\
**Server-side Unsubscribe:** Yes

## Topic Formats

| Format                            | Description | Example
| :-------------------------------- | :--- | :--- |
| `News`                            | Receive all news available on this login. | `News` |
| `News![Source]`                   | Receive news from a specific source. | `News!AAP` |
| `News![Code].[Exchange]`          | Receive news relating to a symbol. | `News!BHP.ASX` |
| `News![Source]![Code].[Exchange]` | Receive news relating to a symbol from a specific source. | `News!AAP!BHP.ASX` |

### Fields

| Name   | Description |
| :------| :--- |
| Source | The code for the desired News Source. |
| Exchange | The code for issuing Exchange of the desired symbol. |
| Code | The code of the desired symbol. |

## Payload

An ordered array of zero or more News Change objects, to be applied in sequence.

### News Change object

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| O      | String  | Always   | The operation being performed. One of:<br>**A:** Adding a new News Announcement.<br>**I:** Initialise the list of News Announcements.<br>**U:** Updating an existing News Announcement |
| Source | String  | Optional | When Initialising, identifies the News Source the announcement ID relates to. Used if the subscription merges multiple News Sources \(such as the `News` or `News![Code].[Exchange]` topics\) |
| Date   | DateTime | Optional | When Initialising, identifies the date of the most recently available News Announcement for the specified News Source. Pass to [QueryNews](querynews/) to retrieve historical announcements. |
| News   | Object  | Optional | When adding or updating a News Announcement, contains a News Data object. |

### News Data object

Contains the details of a News Announcement.

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| ID | String | Always | The unique ID of the News Announcement. Not guaranteed sequential or in-order. |
| Source | String | Always | The code identifying the News Source this announcement came from. |
| Title | String | Always | The title of the announcement. |
| Date | DateTime | Always | The date and time the announcement was sent. |
| Type | String | Sometimes | The type of announcement, if any. See [Appendix I2: News Report Types](../../../appendices/i2-news-report-types/) for more information |
| Url | String | Sometimes | The URL to the full content of the announcement, if any. |
| Origin | String | Sometimes | The original origin of the announcement, if known. |
| Priority | String | Sometimes | The priority of this announcement. If omitted, defaults to Normal. One of the following values:<br>**Low** – A low-priority announcement.<br>**Normal** – A normal priority announcement.<br>**High** – A high-priority announcement.<br>**Critical** – A critical announcement. |
| Symbols | Array | Sometimes | An array of News Symbol objects this announcement relates to. If omitted, is an announcement related to the entire News Source. |
| Codes | Array | Sometimes | An array of strings identifying special attributes of this announcement. See [Appendix I1: News Announcement Codes](../../../appendices/i1-news-announcement-codes/) for more information. |

See [Data Types](../../../fundamentals/exchanging-data/data-types/#date) for Date formatting.

### News Symbol object:

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Exchange | String | Always | The Exchange code where the Symbol was issued. |
| Code | String | Always | The code for the Symbol the announcement relates to. |

## Example

**Send:**
```json
{"Controller":"News","Topic":"News!BHP.ASX","Action":"Sub","Confirm":true}
```

**Receive:**
```json
{"Controller":"News","Topic":"News!BHP.ASX","Data":[{"O":"I","Source":"ASX","Date":"20160501T09:30:55.047"}]}
```
```json
{"Controller":"News","Topic":"News!BHP.ASX","Data":[{"O":"I","Source":"AAP","Date":"20160501T11:16:11.900"}]}
```
```json
{"Controller":"News","Topic":"News!BHP.ASX","Action":"Sub","Confirm":true}
```

