[tripletexjs](../README.md) › [Invoice](invoice.md)

# Namespace: Invoice

## Index

### Enumerations

* [ehfSendStatus](../enums/invoice.ehfsendstatus.md)

### Properties

* [amount](invoice.md#optional-readonly-amount)
* [amountCurrency](invoice.md#optional-readonly-amountcurrency)
* [amountExcludingVat](invoice.md#optional-readonly-amountexcludingvat)
* [amountExcludingVatCurrency](invoice.md#optional-readonly-amountexcludingvatcurrency)
* [amountOutstanding](invoice.md#optional-readonly-amountoutstanding)
* [amountOutstandingTotal](invoice.md#optional-readonly-amountoutstandingtotal)
* [amountRoundoff](invoice.md#optional-readonly-amountroundoff)
* [amountRoundoffCurrency](invoice.md#optional-readonly-amountroundoffcurrency)
* [changes](invoice.md#optional-readonly-changes)
* [comment](invoice.md#optional-comment)
* [currency](invoice.md#optional-readonly-currency)
* [customer](invoice.md#optional-readonly-customer)
* [deliveryDate](invoice.md#optional-readonly-deliverydate)
* [id](invoice.md#optional-id)
* [invoiceComment](invoice.md#optional-readonly-invoicecomment)
* [invoiceDate](invoice.md#invoicedate)
* [invoiceDueDate](invoice.md#invoiceduedate)
* [invoiceNumber](invoice.md#optional-invoicenumber)
* [invoiceRemarks](invoice.md#optional-invoiceremarks)
* [isApproved](invoice.md#optional-readonly-isapproved)
* [isCharged](invoice.md#optional-readonly-ischarged)
* [isCreditNote](invoice.md#optional-readonly-iscreditnote)
* [kid](invoice.md#optional-kid)
* [orders](invoice.md#orders)
* [paidAmount](invoice.md#optional-paidamount)
* [paymentTypeId](invoice.md#optional-paymenttypeid)
* [postings](invoice.md#optional-readonly-postings)
* [projectInvoiceDetails](invoice.md#optional-readonly-projectinvoicedetails)
* [reminders](invoice.md#optional-readonly-reminders)
* [sumRemits](invoice.md#optional-readonly-sumremits)
* [url](invoice.md#optional-readonly-url)
* [version](invoice.md#optional-version)
* [voucher](invoice.md#optional-readonly-voucher)

## Properties

### `Optional` `Readonly` amount

• **amount**? : *undefined | number*

In the company’s currency, typically NOK.

___

### `Optional` `Readonly` amountCurrency

• **amountCurrency**? : *undefined | number*

In the specified currency.

___

### `Optional` `Readonly` amountExcludingVat

• **amountExcludingVat**? : *undefined | number*

Amount excluding VAT (NOK).

___

### `Optional` `Readonly` amountExcludingVatCurrency

• **amountExcludingVatCurrency**? : *undefined | number*

Amount excluding VAT in the specified currency.

___

### `Optional` `Readonly` amountOutstanding

• **amountOutstanding**? : *undefined | number*

The amount outstanding based on the history collection, excluding reminders and any existing remits, in the invoice currency.

___

### `Optional` `Readonly` amountOutstandingTotal

• **amountOutstandingTotal**? : *undefined | number*

The amount outstanding based on the history collection and including the last reminder and any existing remits. This is the total invoice balance including reminders and remittances, in the invoice currency.

___

### `Optional` `Readonly` amountRoundoff

• **amountRoundoff**? : *undefined | number*

Amount of round off to nearest integer.

___

### `Optional` `Readonly` amountRoundoffCurrency

• **amountRoundoffCurrency**? : *undefined | number*

Amount of round off to nearest integer in the specified currency.

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` comment

• **comment**? : *undefined | string*

Comment text for the specific invoice.

___

### `Optional` `Readonly` currency

• **currency**? : *[Currency](../interfaces/currency.md)*

___

### `Optional` `Readonly` customer

• **customer**? : *[Customer](customer.md)*

The invoice customer

___

### `Optional` `Readonly` deliveryDate

• **deliveryDate**? : *undefined | string*

The delivery date.

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` `Readonly` invoiceComment

• **invoiceComment**? : *undefined | string*

Comment text for the invoice. This was specified on the order as invoiceComment.

___

###  invoiceDate

• **invoiceDate**: *string*

___

###  invoiceDueDate

• **invoiceDueDate**: *string*

___

### `Optional` invoiceNumber

• **invoiceNumber**? : *undefined | number*

If value is set to 0, the invoice number will be generated.

___

### `Optional` invoiceRemarks

• **invoiceRemarks**? : *undefined | string*

Invoice remarks - automatically stops reminder/notice of debt collection if specified.

___

### `Optional` `Readonly` isApproved

• **isApproved**? : *undefined | false | true*

___

### `Optional` `Readonly` isCharged

• **isCharged**? : *undefined | false | true*

___

### `Optional` `Readonly` isCreditNote

• **isCreditNote**? : *undefined | false | true*

___

### `Optional` kid

• **kid**? : *undefined | string*

KID - Kundeidentifikasjonsnummer.

___

###  orders

• **orders**: *Array‹[Order](order.md)›*

Related orders. Only one order per invoice is supported at the moment.

___

### `Optional` paidAmount

• **paidAmount**? : *undefined | number*

[BETA] Optional. Used to specify the prepaid amount of the invoice. The paid amount can be specified here, or as a parameter to the /invoice API endpoint.

___

### `Optional` paymentTypeId

• **paymentTypeId**? : *undefined | number*

[BETA] Optional. Used to specify payment type for prepaid invoices. Payment type can be specified here, or as a parameter to the /invoice API endpoint.

___

### `Optional` `Readonly` postings

• **postings**? : *Array‹[Posting](../interfaces/posting.md)›*

The invoice postings, which includes a posting for the invoice with a positive amount, and one or more posting for the payments with negative amounts.

___

### `Optional` `Readonly` projectInvoiceDetails

• **projectInvoiceDetails**? : *Array‹[ProjectInvoiceDetails](../interfaces/projectinvoicedetails.md)›*

ProjectInvoiceDetails contains additional information about the invoice, in particular invoices for projects. It contains information about the charged project, the fee amount, extra percent and amount, extra costs, travel expenses, invoice and project comments, akonto amount and values determining if extra costs, akonto and hours should be included. ProjectInvoiceDetails is an object which represents the relation between an invoice and a Project, Orderline and OrderOut object.

___

### `Optional` `Readonly` reminders

• **reminders**? : *Array‹[Reminder](reminder.md)›*

Invoice debt collection and reminders.

___

### `Optional` `Readonly` sumRemits

• **sumRemits**? : *undefined | number*

The sum of all open remittances of the invoice. Remittances are reimbursement payments back to the customer and are therefore relevant to the bookkeeping of the invoice in the accounts.

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*

___

### `Optional` `Readonly` voucher

• **voucher**? : *[Voucher](../interfaces/voucher.md)*

The invoice voucher.
