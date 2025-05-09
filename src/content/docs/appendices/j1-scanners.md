---
title: "Appendix J1: Scanner Types"
---

Each type of Scanner monitors a different data source, or monitors a data source in a different manner.

| Type Code       | Data Source      | Description |
| :-------------- | :--------------- | :---------- |
| Market.Search   | Market Data      | Matches against all symbols in the given markets. |
| Market.Monitor  | Market Data      | Matches against the given symbols. |

## Market Monitor

**Type:** `Market.Monitor`
**Match:** Symbol Code - `Symbol.Market`

A Market Monitor scans a given list of symbols and provides the codes that match the given criteria in realtime.

### Criteria

The Market Scan Criteria format is shared between Market.Search and Market.Monitor.

Each Criteria node is an array, where the first value is a string identifying the type of criteria, and subsequent values define the parameters.

```json
// Filter for last price between $1 and $2
["LastPrice",1.0,2.0]
```

Logical nodes allow multiple criteria to be grouped together.

```json
// Filter for indexes within 4,000 and 5,000 points
["And",["LastPrice",4000,5000],["IsIndex"]]
```

Some criteria types have fixed parameters in a set order, and some change depending on the number provided. Some have optional parameters that can either be positional, or named.

Check the documentation for the criteria type being used.

See [Appendix J2](../j2-market-scan-criteria/) for criteria definitions. This is an Asset-based scan, so all criteria are available.

### Targeting

An array of one or more string symbol codes. Can be from multiple markets. Duplicates will be ignored.

```json
{"Target":["BHP.ASX","NAB.CXA"]}
```

## Market Search

**Type:** `Market.Search`
**Match:** Symbol Code - `Symbol.Market`

A Market Search scans all symbols on one or more Markets and provides the codes that match the given criteria in realtime.

### Criteria

The Market Scan Criteria format is shared between Market.Search and Market.Monitor.

See Market.Monitor for a full description.

See [Appendix J2](../j2-market-scan-criteria/) for criteria definitions. This is an Asset-based scan, so all criteria are available.

### Targeting

An array of one or more string market codes. Duplicates will be ignored.

```json
// Target two separate markets.
{"Target":["ASX","CXA"]}
// Target a mixed market.
{"Target":["ASX+CXA"]}
```
