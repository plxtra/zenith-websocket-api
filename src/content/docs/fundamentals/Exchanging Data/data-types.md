---
title: "Data Types"
---

## Date and Time

Date and Time values are serialised as ISO-8601 formatted strings.

The 30th of June, 2012 at 10:02:30, UTC becomes:

```json
{"Date":"20120630T100230Z"}
```

Wherever possible, date/time values will be provided with the timezone relevant to the event.

### Date with Timezone

Certain fields such as the date in QueryChartHistory can be formatted as a date plus timezone.

```json
{"Date":"20120603+10:00"}
```

Such values should be interpreted as having a time component of 00:00:00.

## Time

All Time values are serialised with the following format:

`[days.]hours:minutes[:seconds[.fractional seconds]]`

**Example:**

1 day, 12 hours, 20 minutes, 5 seconds becomes:

```json
{"Time":"1.12:20:5"}
```
