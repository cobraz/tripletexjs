[tripletexjs](../README.md) › [Payment](payment.md)

# Namespace: Payment

## Index

### Enumerations

* [status](../enums/payment.status.md)

### Properties

* [account](payment.md#optional-readonly-account)
* [amountCurrency](payment.md#optional-readonly-amountcurrency)
* [amountInAccountCurrency](payment.md#optional-readonly-amountinaccountcurrency)
* [bookingDate](payment.md#optional-readonly-bookingdate)
* [changes](payment.md#optional-readonly-changes)
* [creditorBankAddress](payment.md#optional-readonly-creditorbankaddress)
* [creditorBankName](payment.md#optional-readonly-creditorbankname)
* [creditorBankPostalCity](payment.md#optional-readonly-creditorbankpostalcity)
* [creditorBankPostalCode](payment.md#optional-readonly-creditorbankpostalcode)
* [currency](payment.md#optional-readonly-currency)
* [description](payment.md#optional-readonly-description)
* [id](payment.md#optional-id)
* [isFinalStatus](payment.md#optional-readonly-isfinalstatus)
* [isForeignPayment](payment.md#optional-readonly-isforeignpayment)
* [isSalary](payment.md#optional-readonly-issalary)
* [kid](payment.md#optional-readonly-kid)
* [paymentDate](payment.md#optional-readonly-paymentdate)
* [postings](payment.md#optional-readonly-postings)
* [receiverReference](payment.md#optional-readonly-receiverreference)
* [sourceVoucher](payment.md#optional-readonly-sourcevoucher)
* [url](payment.md#optional-readonly-url)
* [valueDate](payment.md#optional-readonly-valuedate)
* [version](payment.md#optional-version)

## Properties

### `Optional` `Readonly` account

• **account**? : *[Account](account.md)*

The payment account.

___

### `Optional` `Readonly` amountCurrency

• **amountCurrency**? : *undefined | number*

In the specified currency.

___

### `Optional` `Readonly` amountInAccountCurrency

• **amountInAccountCurrency**? : *undefined | number*

Amount specified in the currency of the bank agreements account.

___

### `Optional` `Readonly` bookingDate

• **bookingDate**? : *undefined | string*

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` `Readonly` creditorBankAddress

• **creditorBankAddress**? : *undefined | string*

___

### `Optional` `Readonly` creditorBankName

• **creditorBankName**? : *undefined | string*

___

### `Optional` `Readonly` creditorBankPostalCity

• **creditorBankPostalCity**? : *undefined | string*

___

### `Optional` `Readonly` creditorBankPostalCode

• **creditorBankPostalCode**? : *undefined | string*

___

### `Optional` `Readonly` currency

• **currency**? : *[Currency](../interfaces/currency.md)*

___

### `Optional` `Readonly` description

• **description**? : *undefined | string*

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` `Readonly` isFinalStatus

• **isFinalStatus**? : *undefined | false | true*

___

### `Optional` `Readonly` isForeignPayment

• **isForeignPayment**? : *undefined | false | true*

___

### `Optional` `Readonly` isSalary

• **isSalary**? : *undefined | false | true*

___

### `Optional` `Readonly` kid

• **kid**? : *undefined | string*

KID - Kundeidentifikasjonsnummer.

___

### `Optional` `Readonly` paymentDate

• **paymentDate**? : *undefined | string*

___

### `Optional` `Readonly` postings

• **postings**? : *[Posting](../interfaces/posting.md)*

The payment posting.

___

### `Optional` `Readonly` receiverReference

• **receiverReference**? : *undefined | string*

___

### `Optional` `Readonly` sourceVoucher

• **sourceVoucher**? : *[Voucher](../interfaces/voucher.md)*

Vouchere that was paid.

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` `Readonly` valueDate

• **valueDate**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*
