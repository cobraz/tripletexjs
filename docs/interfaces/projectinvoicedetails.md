[tripletexjs](../README.md) › [ProjectInvoiceDetails](projectinvoicedetails.md)

# Interface: ProjectInvoiceDetails

## Hierarchy

* **ProjectInvoiceDetails**

## Index

### Properties

* [amountOrderLinesAndReinvoicing](projectinvoicedetails.md#optional-readonly-amountorderlinesandreinvoicing)
* [amountOrderLinesAndReinvoicingCurrency](projectinvoicedetails.md#optional-readonly-amountorderlinesandreinvoicingcurrency)
* [amountTravelReportsAndExpenses](projectinvoicedetails.md#optional-readonly-amounttravelreportsandexpenses)
* [amountTravelReportsAndExpensesCurrency](projectinvoicedetails.md#optional-readonly-amounttravelreportsandexpensescurrency)
* [changes](projectinvoicedetails.md#optional-readonly-changes)
* [feeAmount](projectinvoicedetails.md#optional-readonly-feeamount)
* [feeAmountCurrency](projectinvoicedetails.md#optional-readonly-feeamountcurrency)
* [feeInvoiceText](projectinvoicedetails.md#optional-readonly-feeinvoicetext)
* [id](projectinvoicedetails.md#optional-id)
* [includeHours](projectinvoicedetails.md#optional-readonly-includehours)
* [includeOnAccountBalance](projectinvoicedetails.md#optional-readonly-includeonaccountbalance)
* [includeOrderLinesAndReinvoicing](projectinvoicedetails.md#optional-readonly-includeorderlinesandreinvoicing)
* [invoice](projectinvoicedetails.md#optional-readonly-invoice)
* [invoiceText](projectinvoicedetails.md#optional-readonly-invoicetext)
* [markupAmount](projectinvoicedetails.md#optional-readonly-markupamount)
* [markupAmountCurrency](projectinvoicedetails.md#optional-readonly-markupamountcurrency)
* [markupPercent](projectinvoicedetails.md#optional-readonly-markuppercent)
* [onAccountBalanceAmount](projectinvoicedetails.md#optional-readonly-onaccountbalanceamount)
* [onAccountBalanceAmountCurrency](projectinvoicedetails.md#optional-readonly-onaccountbalanceamountcurrency)
* [project](projectinvoicedetails.md#optional-readonly-project)
* [url](projectinvoicedetails.md#optional-readonly-url)
* [vatType](projectinvoicedetails.md#optional-readonly-vattype)
* [version](projectinvoicedetails.md#optional-version)

## Properties

### `Optional` `Readonly` amountOrderLinesAndReinvoicing

• **amountOrderLinesAndReinvoicing**? : *number*

The amount of chargeable manual order lines and vendor invoices on the project invoice.

___

### `Optional` `Readonly` amountOrderLinesAndReinvoicingCurrency

• **amountOrderLinesAndReinvoicingCurrency**? : *number*

The amount of chargeable manual order lines and vendor invoices on the project invoice, in the invoice currency.

___

### `Optional` `Readonly` amountTravelReportsAndExpenses

• **amountTravelReportsAndExpenses**? : *number*

The amount of travel costs and expenses on the project invoice.

___

### `Optional` `Readonly` amountTravelReportsAndExpensesCurrency

• **amountTravelReportsAndExpensesCurrency**? : *number*

The amount of travel costs and expenses on the project invoice, in the invoice currency.

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` `Readonly` feeAmount

• **feeAmount**? : *number*

Fee amount of the project. For example: 100 NOK.

___

### `Optional` `Readonly` feeAmountCurrency

• **feeAmountCurrency**? : *number*

Fee amount of the project in the invoice currency.

___

### `Optional` `Readonly` feeInvoiceText

• **feeInvoiceText**? : *string*

The fee comment on the project invoice.

___

### `Optional` id

• **id**? : *number*

___

### `Optional` `Readonly` includeHours

• **includeHours**? : *boolean*

Determines if hours should be included on the project invoice.

___

### `Optional` `Readonly` includeOnAccountBalance

• **includeOnAccountBalance**? : *boolean*

Determines if akonto should be included on the project invoice.

___

### `Optional` `Readonly` includeOrderLinesAndReinvoicing

• **includeOrderLinesAndReinvoicing**? : *boolean*

Determines if extra costs should be included on the project invoice.

___

### `Optional` `Readonly` invoice

• **invoice**? : *[Invoice](../modules/invoice.md)*

___

### `Optional` `Readonly` invoiceText

• **invoiceText**? : *string*

The comment on the project invoice.

___

### `Optional` `Readonly` markupAmount

• **markupAmount**? : *number*

The amount value of mark-up of amountFee on the project invoice. For example: 10 NOK.

___

### `Optional` `Readonly` markupAmountCurrency

• **markupAmountCurrency**? : *number*

The amount value of mark-up of amountFee on the project invoice, in the invoice currency.

___

### `Optional` `Readonly` markupPercent

• **markupPercent**? : *number*

The percentage value of mark-up of amountFee. For example: 10%.

___

### `Optional` `Readonly` onAccountBalanceAmount

• **onAccountBalanceAmount**? : *number*

The akonto amount on the project invoice.

___

### `Optional` `Readonly` onAccountBalanceAmountCurrency

• **onAccountBalanceAmountCurrency**? : *number*

The akonto amount on the project invoice in the invoice currency.

___

### `Optional` `Readonly` project

• **project**? : *[Project](../modules/project.md)*

The Project related to the Invoice and ProjectInvoiceAdditionalInfo.

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` `Readonly` vatType

• **vatType**? : *[VatType](vattype.md)*

The VAT type of the project invoice.

___

### `Optional` version

• **version**? : *number*
