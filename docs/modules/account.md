[tripletexjs](../README.md) › [Account](account.md)

# Namespace: Account

## Index

### Enumerations

* [type](../enums/account.type.md)

### Properties

* [bankAccountCountry](account.md#optional-bankaccountcountry)
* [bankAccountIBAN](account.md#optional-bankaccountiban)
* [bankAccountNumber](account.md#optional-bankaccountnumber)
* [bankAccountSWIFT](account.md#optional-bankaccountswift)
* [bankName](account.md#optional-bankname)
* [changes](account.md#optional-readonly-changes)
* [currency](account.md#optional-currency)
* [description](account.md#optional-description)
* [id](account.md#optional-id)
* [isApplicableForSupplierInvoice](account.md#optional-isapplicableforsupplierinvoice)
* [isBankAccount](account.md#optional-isbankaccount)
* [isCloseable](account.md#optional-iscloseable)
* [isInactive](account.md#optional-isinactive)
* [isInvoiceAccount](account.md#optional-isinvoiceaccount)
* [name](account.md#name)
* [number](account.md#number)
* [requireReconciliation](account.md#optional-requirereconciliation)
* [url](account.md#optional-readonly-url)
* [vatLocked](account.md#optional-vatlocked)
* [vatType](account.md#optional-vattype)
* [version](account.md#optional-version)

## Properties

### `Optional` bankAccountCountry

• **bankAccountCountry**? : *[Country](../interfaces/country.md)*

___

### `Optional` bankAccountIBAN

• **bankAccountIBAN**? : *undefined | string*

___

### `Optional` bankAccountNumber

• **bankAccountNumber**? : *undefined | string*

___

### `Optional` bankAccountSWIFT

• **bankAccountSWIFT**? : *undefined | string*

___

### `Optional` bankName

• **bankName**? : *undefined | string*

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` currency

• **currency**? : *[Currency](../interfaces/currency.md)*

If given, all entries on this account must have this currency.

___

### `Optional` description

• **description**? : *undefined | string*

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` isApplicableForSupplierInvoice

• **isApplicableForSupplierInvoice**? : *undefined | false | true*

True if this account is applicable for supplier invoice registration.

___

### `Optional` isBankAccount

• **isBankAccount**? : *undefined | false | true*

___

### `Optional` isCloseable

• **isCloseable**? : *undefined | false | true*

True if it should be possible to close entries on this account and it is possible to filter on open entries.

___

### `Optional` isInactive

• **isInactive**? : *undefined | false | true*

Inactive accounts will not show up in UI lists.

___

### `Optional` isInvoiceAccount

• **isInvoiceAccount**? : *undefined | false | true*

___

###  name

• **name**: *string*

___

###  number

• **number**: *number*

___

### `Optional` requireReconciliation

• **requireReconciliation**? : *undefined | false | true*

True if this account must be reconciled before the accounting period closure.

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` vatLocked

• **vatLocked**? : *undefined | false | true*

True if all entries on this account must have the vat type given by vatType.

___

### `Optional` vatType

• **vatType**? : *[VatType](../interfaces/vattype.md)*

The default vat type for this account.

___

### `Optional` version

• **version**? : *undefined | number*
