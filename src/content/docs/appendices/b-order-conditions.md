---
title: "Appendix B: Order Conditions"
---

By default, an Order becomes active \(appears on the Market\) as soon as it is submitted. However, Orders can be told to activate under different conditions.

## Stop Loss

Stop Loss condition immediately sells a holding when it drops below the set price.

**Condition Name:** StopLoss

**Additional Properties:**

| Name      | Type    | Expect   | Description |
| :-------- | :------ | :------- | :--- |
| Stop      | Decimal | Optional | The stop loss price. If omitted, may default to the latest reference Price if supported. |
| Reference | String  | Optional | The price the stop loss is referenced against. One of the following values:<br />**Last** - Trigger based on a change in the Last Price.<br />**BestBid** - Trigger based on a change in the Best Bid.<br />**BestAsk** - Trigger based on a change in the Best Ask. |
| Direction | String  | Optional | The direction the reference price should move versus the stop price to trigger. One of the following values:<br />**None:** - No preference.<br />**Up:** Price should tick up.<br />**Down:** - Price should tick down. |

## Trailing Stop Loss

Trailing Stop Loss Orders immediately sell a holding when certain conditions are met

**Condition Name:** TrailingStopLoss

**Additional Properties:**

| Name      | Type    | Expect   | Description |
| :-------- | :------ | :------- | :--- |
| Type      | String  | Required | Identifies the trigger condition for the trailing stop. One of the following values: **Price** - Trigger based on a given dollar amount. **Percent** - Trigger based on a percentage |
| Value     | Decimal | Required | The value used by Type. |
| Limit     | Decimal | Required | The limit price. |
| Stop      | Decimal | Optional | The stop loss price. If omitted, may default to the latest reference Price if supported. |
| Reference | String  | Optional | The price the stop loss is referenced against. One of the following values:<br />**Last** - Trigger based on a change in the Last Price.<br />**BestBid** - Trigger based on a change in the Best Bid.<br />**BestAsk** - Trigger based on a change in the Best Ask. |
| Direction | String  | Optional | The direction the reference price should move versus the stop price to trigger. One of the following values:<br />**None:** - No preference.<br />**Up:** Price should tick up.<br />**Down:** - Price should tick down. |


