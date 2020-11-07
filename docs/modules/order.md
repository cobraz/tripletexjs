[tripletexjs](../README.md) › [Order](order.md)

# Namespace: Order

## Index

### Enumerations

* [invoicesDueInType](../enums/order.invoicesdueintype.md)
* [orderLineSorting](../enums/order.orderlinesorting.md)
* [subscriptionDurationType](../enums/order.subscriptiondurationtype.md)
* [subscriptionInvoicingTimeInAdvanceOrArrears](../enums/order.subscriptioninvoicingtimeinadvanceorarrears.md)
* [subscriptionInvoicingTimeType](../enums/order.subscriptioninvoicingtimetype.md)
* [subscriptionPeriodsOnInvoiceType](../enums/order.subscriptionperiodsoninvoicetype.md)

### Properties

* [attn](order.md#optional-attn)
* [changes](order.md#optional-readonly-changes)
* [contact](order.md#optional-contact)
* [currency](order.md#optional-currency)
* [customer](order.md#customer)
* [deliveryAddress](order.md#optional-deliveryaddress)
* [deliveryComment](order.md#optional-deliverycomment)
* [deliveryDate](order.md#deliverydate)
* [department](order.md#optional-department)
* [id](order.md#optional-id)
* [invoiceComment](order.md#optional-invoicecomment)
* [invoicesDueIn](order.md#optional-invoicesduein)
* [isClosed](order.md#optional-isclosed)
* [isPrioritizeAmountsIncludingVat](order.md#optional-isprioritizeamountsincludingvat)
* [isShowOpenPostsOnInvoices](order.md#optional-isshowopenpostsoninvoices)
* [isSubscription](order.md#optional-issubscription)
* [isSubscriptionAutoInvoicing](order.md#optional-issubscriptionautoinvoicing)
* [number](order.md#optional-number)
* [orderDate](order.md#orderdate)
* [orderLines](order.md#optional-orderlines)
* [ourContact](order.md#optional-ourcontact)
* [ourContactEmployee](order.md#optional-ourcontactemployee)
* [overdueNoticeEmail](order.md#optional-overduenoticeemail)
* [project](order.md#optional-project)
* [receiverEmail](order.md#optional-receiveremail)
* [reference](order.md#optional-reference)
* [subscriptionDuration](order.md#optional-subscriptionduration)
* [subscriptionInvoicingTime](order.md#optional-subscriptioninvoicingtime)
* [subscriptionPeriodsOnInvoice](order.md#optional-subscriptionperiodsoninvoice)
* [url](order.md#optional-readonly-url)
* [version](order.md#optional-version)

## Properties

### `Optional` attn

• **attn**? : *[Contact](../interfaces/contact.md)*

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` contact

• **contact**? : *[Contact](../interfaces/contact.md)*

___

### `Optional` currency

• **currency**? : *[Currency](../interfaces/currency.md)*

___

###  customer

• **customer**: *[Customer](customer.md)*

___

### `Optional` deliveryAddress

• **deliveryAddress**? : *[DeliveryAddress](../interfaces/deliveryaddress.md)*

Delivery address of this order. This can be a new or existing address
(useful to know, especially if the delivery is to a private person: if 'deliveryAddress.name' is set, we ignore the state of 'customer.id')

___

### `Optional` deliveryComment

• **deliveryComment**? : *string*

___

###  deliveryDate

• **deliveryDate**: *string*

___

### `Optional` department

• **department**? : *[Department](../interfaces/department.md)*

___

### `Optional` id

• **id**? : *number*

___

### `Optional` invoiceComment

• **invoiceComment**? : *string*

Comment to be displayed in the invoice based on this order. Can be also found in Invoice.invoiceComment on Invoice objects.

___

### `Optional` invoicesDueIn

• **invoicesDueIn**? : *number*

Number of days/months in which invoices created from this order is due

___

### `Optional` isClosed

• **isClosed**? : *boolean*

Denotes if this order is closed. A closed order can no longer be invoiced unless it is opened again.

___

### `Optional` isPrioritizeAmountsIncludingVat

• **isPrioritizeAmountsIncludingVat**? : *boolean*

___

### `Optional` isShowOpenPostsOnInvoices

• **isShowOpenPostsOnInvoices**? : *boolean*

Show account statement - open posts on invoices created from this order

___

### `Optional` isSubscription

• **isSubscription**? : *boolean*

If true, the order is a subscription, which enables periodical invoicing of order lines. First, create an order with isSubscription=true, then approve it for subscription invoicing with the :approveSubscriptionInvoice method.

___

### `Optional` isSubscriptionAutoInvoicing

• **isSubscriptionAutoInvoicing**? : *boolean*

Automatic invoicing. Starts when the subscription is approved

___

### `Optional` number

• **number**? : *string*

___

###  orderDate

• **orderDate**: *string*

___

### `Optional` orderLines

• **orderLines**? : *Array‹[OrderLine](../interfaces/orderline.md)›*

Order lines tied to the order. New OrderLines may be embedded here, in some endpoints.

___

### `Optional` ourContact

• **ourContact**? : *[Contact](../interfaces/contact.md)*

If the contact is not an employee

___

### `Optional` ourContactEmployee

• **ourContactEmployee**? : *[Employee](employee.md)*

If the contact is an employee

___

### `Optional` overdueNoticeEmail

• **overdueNoticeEmail**? : *string*

___

### `Optional` project

• **project**? : *[Project](project.md)*

___

### `Optional` receiverEmail

• **receiverEmail**? : *string*

___

### `Optional` reference

• **reference**? : *string*

___

### `Optional` subscriptionDuration

• **subscriptionDuration**? : *number*

Number of months/years the subscription shall run

___

### `Optional` subscriptionInvoicingTime

• **subscriptionInvoicingTime**? : *number*

Number of days/months invoicing in advance/in arrears

___

### `Optional` subscriptionPeriodsOnInvoice

• **subscriptionPeriodsOnInvoice**? : *number*

Number of periods on each invoice

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` version

• **version**? : *number*
