[tripletexjs](../README.md) › [SupplierInvoice](supplierinvoice.md)

# Interface: SupplierInvoice

## Hierarchy

* **SupplierInvoice**

## Index

### Properties

* [amount](supplierinvoice.md#optional-readonly-amount)
* [amountCurrency](supplierinvoice.md#optional-amountcurrency)
* [amountExcludingVat](supplierinvoice.md#optional-readonly-amountexcludingvat)
* [amountExcludingVatCurrency](supplierinvoice.md#optional-readonly-amountexcludingvatcurrency)
* [approvalListElements](supplierinvoice.md#optional-readonly-approvallistelements)
* [changes](supplierinvoice.md#optional-readonly-changes)
* [currency](supplierinvoice.md#optional-currency)
* [id](supplierinvoice.md#optional-id)
* [invoiceDate](supplierinvoice.md#invoicedate)
* [invoiceDueDate](supplierinvoice.md#invoiceduedate)
* [invoiceNumber](supplierinvoice.md#optional-invoicenumber)
* [isCreditNote](supplierinvoice.md#optional-readonly-iscreditnote)
* [kidOrReceiverReference](supplierinvoice.md#optional-kidorreceiverreference)
* [orderLines](supplierinvoice.md#optional-readonly-orderlines)
* [originalInvoiceDocumentId](supplierinvoice.md#optional-readonly-originalinvoicedocumentid)
* [payments](supplierinvoice.md#optional-readonly-payments)
* [supplier](supplierinvoice.md#optional-supplier)
* [url](supplierinvoice.md#optional-readonly-url)
* [version](supplierinvoice.md#optional-version)
* [voucher](supplierinvoice.md#optional-voucher)

## Properties

### `Optional` `Readonly` amount

• **amount**? : *undefined | number*

In the company’s currency, typically NOK. Is 0 if value is missing.

___

### `Optional` amountCurrency

• **amountCurrency**? : *undefined | number*

In the specified currency.

___

### `Optional` `Readonly` amountExcludingVat

• **amountExcludingVat**? : *undefined | number*

Amount excluding VAT (NOK). Is 0 if value is missing.

___

### `Optional` `Readonly` amountExcludingVatCurrency

• **amountExcludingVatCurrency**? : *undefined | number*

Amount excluding VAT in the specified currency. Is 0 if value is missing.

___

### `Optional` `Readonly` approvalListElements

• **approvalListElements**? : *Array‹[VoucherApprovalListElement](voucherapprovallistelement.md)›*

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` currency

• **currency**? : *[Currency](currency.md)*

___

### `Optional` id

• **id**? : *undefined | number*

___

###  invoiceDate

• **invoiceDate**: *string*

___

###  invoiceDueDate

• **invoiceDueDate**: *string*

___

### `Optional` invoiceNumber

• **invoiceNumber**? : *undefined | string*

Invoice number

___

### `Optional` `Readonly` isCreditNote

• **isCreditNote**? : *undefined | false | true*

___

### `Optional` kidOrReceiverReference

• **kidOrReceiverReference**? : *undefined | string*

KID or message

___

### `Optional` `Readonly` orderLines

• **orderLines**? : *Array‹[OrderLine](orderline.md)›*

___

### `Optional` `Readonly` originalInvoiceDocumentId

• **originalInvoiceDocumentId**? : *undefined | number*

___

### `Optional` `Readonly` payments

• **payments**? : *Array‹[Posting](posting.md)›*

___

### `Optional` supplier

• **supplier**? : *[Supplier](supplier.md)*

The invoice supplier

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*

___

### `Optional` voucher

• **voucher**? : *[Voucher](voucher.md)*

The invoice voucher.
