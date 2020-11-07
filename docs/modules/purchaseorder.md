[tripletexjs](../README.md) › [PurchaseOrder](purchaseorder.md)

# Namespace: PurchaseOrder

## Index

### Enumerations

* [status](../enums/purchaseorder.status.md)

### Properties

* [attention](purchaseorder.md#optional-attention)
* [changes](purchaseorder.md#optional-readonly-changes)
* [comments](purchaseorder.md#optional-comments)
* [creationDate](purchaseorder.md#optional-creationdate)
* [currency](purchaseorder.md#optional-currency)
* [deliveryAddress](purchaseorder.md#optional-deliveryaddress)
* [deliveryDate](purchaseorder.md#deliverydate)
* [department](purchaseorder.md#optional-department)
* [discount](purchaseorder.md#optional-discount)
* [id](purchaseorder.md#optional-id)
* [isClosed](purchaseorder.md#optional-isclosed)
* [number](purchaseorder.md#optional-readonly-number)
* [orderLines](purchaseorder.md#optional-readonly-orderlines)
* [ourContact](purchaseorder.md#ourcontact)
* [packingNoteMessage](purchaseorder.md#optional-packingnotemessage)
* [project](purchaseorder.md#optional-project)
* [receiverEmail](purchaseorder.md#optional-receiveremail)
* [restorder](purchaseorder.md#optional-readonly-restorder)
* [supplier](purchaseorder.md#supplier)
* [supplierContact](purchaseorder.md#optional-suppliercontact)
* [transportType](purchaseorder.md#optional-transporttype)
* [transporterMessage](purchaseorder.md#optional-transportermessage)
* [url](purchaseorder.md#optional-readonly-url)
* [version](purchaseorder.md#optional-version)

## Properties

### `Optional` attention

• **attention**? : *[Employee](employee.md)*

Attention

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` comments

• **comments**? : *string*

Delivery information and invoice comments

___

### `Optional` creationDate

• **creationDate**? : *string*

___

### `Optional` currency

• **currency**? : *[Currency](../interfaces/currency.md)*

Company currency

___

### `Optional` deliveryAddress

• **deliveryAddress**? : *[Address](../interfaces/address.md)*

Delivery address

___

###  deliveryDate

• **deliveryDate**: *string*

___

### `Optional` department

• **department**? : *[Department](../interfaces/department.md)*

Department/order

___

### `Optional` discount

• **discount**? : *number*

Discount Percentage

___

### `Optional` id

• **id**? : *number*

___

### `Optional` isClosed

• **isClosed**? : *boolean*

___

### `Optional` `Readonly` number

• **number**? : *string*

Purchase order number

___

### `Optional` `Readonly` orderLines

• **orderLines**? : *Array‹[PurchaseOrderline](../interfaces/purchaseorderline.md)›*

Order lines tied to the purchase order

___

###  ourContact

• **ourContact**: *[Employee](employee.md)*

___

### `Optional` packingNoteMessage

• **packingNoteMessage**? : *string*

Message on packing note.Wholesaler specific.

___

### `Optional` project

• **project**? : *[Project](project.md)*

Project/order

___

### `Optional` receiverEmail

• **receiverEmail**? : *string*

Email when purchase order is send by email.

___

### `Optional` `Readonly` restorder

• **restorder**? : *[PurchaseOrder](purchaseorder.md)*

___

###  supplier

• **supplier**: *[Supplier](../interfaces/supplier.md)*

___

### `Optional` supplierContact

• **supplierContact**? : *[Employee](employee.md)*

Recipient when purchase order is send by email.

___

### `Optional` transportType

• **transportType**? : *[TransportType](../interfaces/transporttype.md)*

Transport type

___

### `Optional` transporterMessage

• **transporterMessage**? : *string*

Message to transporter.Wholesaler specific.

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` version

• **version**? : *number*
