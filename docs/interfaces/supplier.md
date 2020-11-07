[tripletexjs](../README.md) › [Supplier](supplier.md)

# Interface: Supplier

## Hierarchy

* **Supplier**

## Index

### Properties

* [accountManager](supplier.md#optional-readonly-accountmanager)
* [bankAccounts](supplier.md#optional-bankaccounts)
* [category1](supplier.md#optional-category1)
* [category2](supplier.md#optional-category2)
* [category3](supplier.md#optional-category3)
* [changes](supplier.md#optional-readonly-changes)
* [customerNumber](supplier.md#optional-customernumber)
* [deliveryAddress](supplier.md#optional-deliveryaddress)
* [description](supplier.md#optional-description)
* [email](supplier.md#optional-email)
* [id](supplier.md#optional-id)
* [invoiceEmail](supplier.md#optional-invoiceemail)
* [isCustomer](supplier.md#optional-iscustomer)
* [isInactive](supplier.md#optional-readonly-isinactive)
* [isPrivateIndividual](supplier.md#optional-isprivateindividual)
* [isSupplier](supplier.md#optional-readonly-issupplier)
* [name](supplier.md#name)
* [organizationNumber](supplier.md#optional-organizationnumber)
* [overdueNoticeEmail](supplier.md#optional-overduenoticeemail)
* [phoneNumber](supplier.md#optional-phonenumber)
* [phoneNumberMobile](supplier.md#optional-phonenumbermobile)
* [physicalAddress](supplier.md#optional-physicaladdress)
* [postalAddress](supplier.md#optional-postaladdress)
* [showProducts](supplier.md#optional-showproducts)
* [supplierNumber](supplier.md#optional-suppliernumber)
* [url](supplier.md#optional-readonly-url)
* [version](supplier.md#optional-version)

## Properties

### `Optional` `Readonly` accountManager

• **accountManager**? : *[Employee](../modules/employee.md)*

___

### `Optional` bankAccounts

• **bankAccounts**? : *Array‹string›*

List of the bank account numbers for this supplier.  Norwegian bank account numbers only.

___

### `Optional` category1

• **category1**? : *[CustomerCategory](customercategory.md)*

Category 1 of this supplier

___

### `Optional` category2

• **category2**? : *[CustomerCategory](customercategory.md)*

Category 2 of this supplier

___

### `Optional` category3

• **category3**? : *[CustomerCategory](customercategory.md)*

Category 3 of this supplier

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` customerNumber

• **customerNumber**? : *undefined | number*

___

### `Optional` deliveryAddress

• **deliveryAddress**? : *[DeliveryAddress](deliveryaddress.md)*

___

### `Optional` description

• **description**? : *undefined | string*

___

### `Optional` email

• **email**? : *undefined | string*

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` invoiceEmail

• **invoiceEmail**? : *undefined | string*

___

### `Optional` isCustomer

• **isCustomer**? : *undefined | false | true*

Determine if the supplier is also a customer

___

### `Optional` `Readonly` isInactive

• **isInactive**? : *undefined | false | true*

___

### `Optional` isPrivateIndividual

• **isPrivateIndividual**? : *undefined | false | true*

___

### `Optional` `Readonly` isSupplier

• **isSupplier**? : *undefined | false | true*

___

###  name

• **name**: *string*

___

### `Optional` organizationNumber

• **organizationNumber**? : *undefined | string*

___

### `Optional` overdueNoticeEmail

• **overdueNoticeEmail**? : *undefined | string*

The email address of the customer where the noticing emails are sent in case of an overdue

___

### `Optional` phoneNumber

• **phoneNumber**? : *undefined | string*

___

### `Optional` phoneNumberMobile

• **phoneNumberMobile**? : *undefined | string*

___

### `Optional` physicalAddress

• **physicalAddress**? : *[Address](address.md)*

___

### `Optional` postalAddress

• **postalAddress**? : *[Address](address.md)*

___

### `Optional` showProducts

• **showProducts**? : *undefined | false | true*

___

### `Optional` supplierNumber

• **supplierNumber**? : *undefined | number*

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*
