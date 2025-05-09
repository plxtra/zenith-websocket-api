---
title: "Appendix D: Action Error Codes"
---

Invoking an action may return an error code. An error code may or may not be followed by a suffix separated by a single space, identifying the context of the error.

| Code                  | Description | Suffix |
| :-------------------- | :---------- | :----- |
| Account               | The Trading Account supplied is invalid | Account ID |
| Account.Authority     | The User does not have access to the requested data for the Trading Account | Account ID |
| Account.Fault         | The Trading Account feed encountered a server fault | Account ID |
| Account.NotFound      | The Trading Account supplied does not exist or the User does not have access to view it | Account ID |
| Account.Unavailable   | The Trading Account feed was unavailable | Account ID |
| Authority             | The User does not have access to the requested action |  |
| Authority.Authority   | The User does not have access to the Trading Authority |  |
| Authority.Fault       | The Trading Authority feed encountered a server fault |  |
| Authority.NotFound    | The Trading Authority does not exist |  |
| Authority.Unavailable | The Trading Authority feed was unavailable |  |
| Code                  | The code field was not supplied |  |
| Controller            | The supplied controller is invalid | Controller |
| Data                  | The action was invoked with no data |  |
| Data.Deserialise      | The action was invoked with invalid data |  |
| Exchange              | The Exchange supplied is invalid | Exchange Code |
| Exchange.NotFound     | The Exchange supplied does not exist | Exchange Code |
| Fault                 | A server fault occurred |  |
| Limited               | You have exceeded the request limit. Please wait before trying again. |  |
| Market                | The Market supplied is invalid | Market Code |
| Market.NotFound       | The Market supplied does not exist, or the User does not have access to view it | Market Code |
| Market.Unavailable    | The Market feed was unavailable | Market Code |
| Operation.Unknown     | The action requested is unknown |  |
| Operation.Abort       | The action was aborted due to the connection closing |  |
| Operation.Timeout     | The action timed out during execution |  |
| Operation.NoResult    | The action was invoked without a Transaction ID |  |
| Session               | Unable to establish a session for the requested Resources |  |
| Source                | The News source supplied was invalid | Source Code |
| Source.Authority      | The User does not have access to the requested data for the News source | Source Code |
| Source.Fault          | The News source feed encountered a server fault | Source Code |
| Source.NotFound       | The News source does not exist, or the User does not have access to view it | Source Code |
| Source.Unavailable    | The News source feed was unavailable | Source Code |
| Symbol                | The Symbol supplied was invalid | Symbol Code |
| Symbol.Authority      | The User does not have access to the requested data for the Symbol | Symbol Code |
| Symbol.Fault          | The Symbol feed encountered a server fault | Symbol Code |
| Symbol.NotFound       | The Symbol supplied does not exist | Symbol Code |
| Symbol.Unavailable    | The Symbol feed was unavailable | Symbol Code |

