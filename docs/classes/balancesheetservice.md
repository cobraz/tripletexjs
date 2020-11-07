[tripletexjs](../README.md) › [BalanceSheetService](balancesheetservice.md)

# Class: BalanceSheetService

## Hierarchy

* **BalanceSheetService**

## Index

### Methods

* [balanceSheetSearch](balancesheetservice.md#static-balancesheetsearch)

## Methods

### `Static` balanceSheetSearch

▸ **balanceSheetSearch**(`__namedParameters`: object): *Promise‹[ListResponseBalanceSheetAccount](../interfaces/listresponsebalancesheetaccount.md)›*

[BETA] Get balance sheet (saldobalanse).

**`result`** ListResponseBalanceSheetAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accountNumberFrom` | number | - | From and including |
`accountNumberTo` | number | - | To and excluding |
`count` | number | 1000 | Number of elements to return |
`customerId` | number | - | Element ID |
`dateFrom` | string | - | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | - | Format is yyyy-MM-dd (to and excl.). |
`departmentId` | number | - | Element ID |
`employeeId` | number | - | Element ID |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`includeActiveAccountsWithoutMovements` | boolean | false | Should active accounts with no movements be included |
`includeSubProjects` | boolean | false | Should sub projects of the given project be included |
`projectId` | number | - | Element ID |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseBalanceSheetAccount](../interfaces/listresponsebalancesheetaccount.md)›*
