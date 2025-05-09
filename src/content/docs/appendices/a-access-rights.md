---
title: "Appendix A: Access Rights"
---

The Zenith API uses the following high-level access rights to control access to the API surface.

When authenticating via OAuth, a client application can request these rights, which will then enable the associated API features once they connect to Zenith.

| Access Right | Description |
| :-------------- | :--- |
| Zenith/Market   | Market Data Access:<br />**1.**Symbols and Security details.<br />**2.**Full and Short Depth.<br />**3.**Current and Historical Trades.<br />**4.**Charting Data |
| Zenith/News     | News Access:<br />**1.**Headlines<br />**2.**News Bodies |
| Zenith/Trading  | Trading Data Access:<br />**1.**Accounts<br />**2.**Balances<br />**3.**Orders<br />**4.**Holdings<br />**4.**Transactions |
| Zenith/OrderPad | Order Place/Amend/Cancel/Move |

Note that while access may be granted to the API surface, the login will determine what markets, trading accounts, and other data sources are offered.
