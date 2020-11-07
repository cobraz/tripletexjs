[tripletexjs](../README.md) › [BankReconciliation](bankreconciliation.md)

# Namespace: BankReconciliation

## Index

### Enumerations

* [type](../enums/bankreconciliation.type.md)

### Properties

* [account](bankreconciliation.md#account)
* [accountingPeriod](bankreconciliation.md#accountingperiod)
* [approvable](bankreconciliation.md#optional-readonly-approvable)
* [bankAccountClosingBalanceCurrency](bankreconciliation.md#optional-bankaccountclosingbalancecurrency)
* [changes](bankreconciliation.md#optional-readonly-changes)
* [closedByContact](bankreconciliation.md#optional-readonly-closedbycontact)
* [closedByEmployee](bankreconciliation.md#optional-readonly-closedbyemployee)
* [closedDate](bankreconciliation.md#optional-readonly-closeddate)
* [id](bankreconciliation.md#optional-id)
* [isClosed](bankreconciliation.md#optional-isclosed)
* [transactions](bankreconciliation.md#optional-readonly-transactions)
* [url](bankreconciliation.md#optional-readonly-url)
* [version](bankreconciliation.md#optional-version)
* [voucher](bankreconciliation.md#optional-readonly-voucher)

## Properties

###  account

• **account**: *[Account](account.md)*

___

###  accountingPeriod

• **accountingPeriod**: *[AccountingPeriod](../interfaces/accountingperiod.md)*

___

### `Optional` `Readonly` approvable

• **approvable**? : *undefined | false | true*

___

### `Optional` bankAccountClosingBalanceCurrency

• **bankAccountClosingBalanceCurrency**? : *undefined | number*

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` `Readonly` closedByContact

• **closedByContact**? : *[Contact](../interfaces/contact.md)*

___

### `Optional` `Readonly` closedByEmployee

• **closedByEmployee**? : *[Employee](employee.md)*

___

### `Optional` `Readonly` closedDate

• **closedDate**? : *undefined | string*

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` isClosed

• **isClosed**? : *undefined | false | true*

___

### `Optional` `Readonly` transactions

• **transactions**? : *Array‹[BankTransaction](../interfaces/banktransaction.md)›*

Bank transactions tied to the bank reconciliation

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*

___

### `Optional` `Readonly` voucher

• **voucher**? : *[Voucher](../interfaces/voucher.md)*
