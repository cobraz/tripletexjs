[tripletexjs](../README.md) › [Customer](customer.md)

# Namespace: Customer

## Index

### Enumerations

* [emailAttachmentType](../enums/customer.emailattachmenttype.md)
* [invoiceSendMethod](../enums/customer.invoicesendmethod.md)
* [invoicesDueInType](../enums/customer.invoicesdueintype.md)
* [language](../enums/customer.language.md)

### Properties

* [accountManager](customer.md#optional-accountmanager)
* [bankAccounts](customer.md#optional-bankaccounts)
* [category1](customer.md#optional-category1)
* [category2](customer.md#optional-category2)
* [category3](customer.md#optional-category3)
* [changes](customer.md#optional-readonly-changes)
* [customerNumber](customer.md#optional-customernumber)
* [deliveryAddress](customer.md#optional-deliveryaddress)
* [description](customer.md#optional-description)
* [email](customer.md#optional-email)
* [id](customer.md#optional-id)
* [invoiceEmail](customer.md#optional-invoiceemail)
* [invoicesDueIn](customer.md#optional-invoicesduein)
* [isCustomer](customer.md#optional-readonly-iscustomer)
* [isInactive](customer.md#optional-readonly-isinactive)
* [isPrivateIndividual](customer.md#optional-isprivateindividual)
* [isSupplier](customer.md#optional-issupplier)
* [name](customer.md#name)
* [organizationNumber](customer.md#optional-organizationnumber)
* [overdueNoticeEmail](customer.md#optional-overduenoticeemail)
* [phoneNumber](customer.md#optional-phonenumber)
* [phoneNumberMobile](customer.md#optional-phonenumbermobile)
* [physicalAddress](customer.md#optional-physicaladdress)
* [postalAddress](customer.md#optional-postaladdress)
* [singleCustomerInvoice](customer.md#optional-singlecustomerinvoice)
* [supplierNumber](customer.md#optional-suppliernumber)
* [url](customer.md#optional-readonly-url)
* [version](customer.md#optional-version)

## Properties

### `Optional` accountManager

• **accountManager**? : *[Employee](employee.md)*

___

### `Optional` bankAccounts

• **bankAccounts**? : *Array‹string›*

List of the bank account numbers for this customer. Norwegian bank account numbers only.

___

### `Optional` category1

• **category1**? : *[CustomerCategory](../interfaces/customercategory.md)*

Category 1 of this customer

___

### `Optional` category2

• **category2**? : *[CustomerCategory](../interfaces/customercategory.md)*

Category 2 of this customer

___

### `Optional` category3

• **category3**? : *[CustomerCategory](../interfaces/customercategory.md)*

Category 3 of this customer

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` customerNumber

• **customerNumber**? : *number*

___

### `Optional` deliveryAddress

• **deliveryAddress**? : *[DeliveryAddress](../interfaces/deliveryaddress.md)*

___

### `Optional` description

• **description**? : *string*

___

### `Optional` email

• **email**? : *string*

___

### `Optional` id

• **id**? : *number*

___

### `Optional` invoiceEmail

• **invoiceEmail**? : *string*

___

### `Optional` invoicesDueIn

• **invoicesDueIn**? : *number*

Number of days/months in which invoices created from this customer is due

___

### `Optional` `Readonly` isCustomer

• **isCustomer**? : *boolean*

___

### `Optional` `Readonly` isInactive

• **isInactive**? : *boolean*

___

### `Optional` isPrivateIndividual

• **isPrivateIndividual**? : *boolean*

___

### `Optional` isSupplier

• **isSupplier**? : *boolean*

Defines if the customer is also a supplier.

___

###  name

• **name**: *string*

___

### `Optional` organizationNumber

• **organizationNumber**? : *string*

___

### `Optional` overdueNoticeEmail

• **overdueNoticeEmail**? : *string*

The email address of the customer where the noticing emails are sent in case of an overdue

___

### `Optional` phoneNumber

• **phoneNumber**? : *string*

___

### `Optional` phoneNumberMobile

• **phoneNumberMobile**? : *string*

___

### `Optional` physicalAddress

• **physicalAddress**? : *[Address](../interfaces/address.md)*

___

### `Optional` postalAddress

• **postalAddress**? : *[Address](../interfaces/address.md)*

___

### `Optional` singleCustomerInvoice

• **singleCustomerInvoice**? : *boolean*

Enables various orders on one customer invoice.

___

### `Optional` supplierNumber

• **supplierNumber**? : *number*

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` version

• **version**? : *number*
