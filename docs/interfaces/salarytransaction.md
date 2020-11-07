[tripletexjs](../README.md) › [SalaryTransaction](salarytransaction.md)

# Interface: SalaryTransaction

## Hierarchy

* **SalaryTransaction**

## Index

### Properties

* [changes](salarytransaction.md#optional-readonly-changes)
* [date](salarytransaction.md#optional-date)
* [id](salarytransaction.md#optional-id)
* [isHistorical](salarytransaction.md#optional-ishistorical)
* [month](salarytransaction.md#month)
* [paySlipsAvailableDate](salarytransaction.md#optional-payslipsavailabledate)
* [payslips](salarytransaction.md#payslips)
* [url](salarytransaction.md#optional-readonly-url)
* [version](salarytransaction.md#optional-version)
* [year](salarytransaction.md#year)

## Properties

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` date

• **date**? : *undefined | string*

Voucher date.

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` isHistorical

• **isHistorical**? : *undefined | false | true*

With historical wage vouchers you can update the wage system with information dated before the opening balance.

___

###  month

• **month**: *number*

___

### `Optional` paySlipsAvailableDate

• **paySlipsAvailableDate**? : *undefined | string*

The date payslips are made available to the employee. Defaults to voucherDate.

___

###  payslips

• **payslips**: *Array‹[Payslip](payslip.md)›*

Link to individual payslip objects.

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*

___

###  year

• **year**: *number*
