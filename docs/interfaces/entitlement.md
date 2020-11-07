[tripletexjs](../README.md) › [Entitlement](entitlement.md)

# Interface: Entitlement

## Hierarchy

* **Entitlement**

## Index

### Properties

* [changes](entitlement.md#optional-readonly-changes)
* [customer](entitlement.md#customer)
* [employee](entitlement.md#employee)
* [entitlementId](entitlement.md#entitlementid)
* [id](entitlement.md#optional-id)
* [name](entitlement.md#optional-readonly-name)
* [url](entitlement.md#optional-readonly-url)
* [version](entitlement.md#optional-version)

## Properties

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

###  customer

• **customer**: *[Company](../modules/company.md)*

The company this role applies for

___

###  employee

• **employee**: *[Employee](../modules/employee.md)*

Employee which has this privilege

___

###  entitlementId

• **entitlementId**: *number*

Unique id for the type of privilege.

___

### `Optional` id

• **id**? : *number*

___

### `Optional` `Readonly` name

• **name**? : *string*

Descriptive name for the privilege. Might change between releases.

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` version

• **version**? : *number*
