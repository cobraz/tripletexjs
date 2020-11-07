[tripletexjs](../README.md) › [Reminder](reminder.md)

# Namespace: Reminder

## Index

### Enumerations

* [type](../enums/reminder.type.md)

### Properties

* [bank](reminder.md#optional-bank)
* [bankAccountIBAN](reminder.md#optional-bankaccountiban)
* [bankAccountNumber](reminder.md#optional-bankaccountnumber)
* [bankAccountSWIFT](reminder.md#optional-bankaccountswift)
* [changes](reminder.md#optional-readonly-changes)
* [charge](reminder.md#optional-readonly-charge)
* [chargeCurrency](reminder.md#optional-readonly-chargecurrency)
* [comment](reminder.md#optional-comment)
* [currency](reminder.md#optional-readonly-currency)
* [id](reminder.md#optional-id)
* [interestRate](reminder.md#optional-readonly-interestrate)
* [interests](reminder.md#optional-readonly-interests)
* [kid](reminder.md#optional-kid)
* [reminderDate](reminder.md#optional-readonly-reminderdate)
* [termOfPayment](reminder.md#termofpayment)
* [totalAmountCurrency](reminder.md#optional-readonly-totalamountcurrency)
* [totalCharge](reminder.md#optional-readonly-totalcharge)
* [totalChargeCurrency](reminder.md#optional-readonly-totalchargecurrency)
* [url](reminder.md#optional-readonly-url)
* [version](reminder.md#optional-version)

## Properties

### `Optional` bank

• **bank**? : *undefined | string*

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

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` `Readonly` charge

• **charge**? : *undefined | number*

The fee part of the reminder, in the company's currency.

___

### `Optional` `Readonly` chargeCurrency

• **chargeCurrency**? : *undefined | number*

The fee part of the reminder, in the invoice currency.

___

### `Optional` comment

• **comment**? : *undefined | string*

___

### `Optional` `Readonly` currency

• **currency**? : *[Currency](../interfaces/currency.md)*

The reminder currency.

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` `Readonly` interestRate

• **interestRate**? : *undefined | number*

The reminder interest rate.

___

### `Optional` `Readonly` interests

• **interests**? : *undefined | number*

The interests part of the reminder.

___

### `Optional` kid

• **kid**? : *undefined | string*

KID - Kundeidentifikasjonsnummer.

___

### `Optional` `Readonly` reminderDate

• **reminderDate**? : *undefined | string*

Creation date of the invoice reminder.

___

###  termOfPayment

• **termOfPayment**: *string*

The reminder term of payment date.

___

### `Optional` `Readonly` totalAmountCurrency

• **totalAmountCurrency**? : *undefined | number*

The total amount to pay in reminder's currency.

___

### `Optional` `Readonly` totalCharge

• **totalCharge**? : *undefined | number*

The total fee part of all reminders, in the company's currency.

___

### `Optional` `Readonly` totalChargeCurrency

• **totalChargeCurrency**? : *undefined | number*

The total fee part of all reminders, in the invoice currency.

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*
