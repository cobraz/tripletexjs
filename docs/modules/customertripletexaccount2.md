[tripletexjs](../README.md) › [CustomerTripletexAccount2](customertripletexaccount2.md)

# Namespace: CustomerTripletexAccount2

## Index

### Enumerations

* [accountType](../enums/customertripletexaccount2.accounttype.md)
* [chartOfAccountsType](../enums/customertripletexaccount2.chartofaccountstype.md)
* [type](../enums/customertripletexaccount2.type.md)
* [vatStatusType](../enums/customertripletexaccount2.vatstatustype.md)

### Properties

* [administrator](customertripletexaccount2.md#optional-administrator)
* [administratorPassword](customertripletexaccount2.md#optional-administratorpassword)
* [autoValidateUserLogin](customertripletexaccount2.md#optional-autovalidateuserlogin)
* [createApiToken](customertripletexaccount2.md#optional-createapitoken)
* [customerId](customertripletexaccount2.md#optional-customerid)
* [customerInvoiceEmail](customertripletexaccount2.md#optional-customerinvoiceemail)
* [modules](customertripletexaccount2.md#modules)
* [numberOfEmployees](customertripletexaccount2.md#optional-numberofemployees)
* [sendEmails](customertripletexaccount2.md#optional-sendemails)
* [sendInvoiceToCustomer](customertripletexaccount2.md#optional-sendinvoicetocustomer)

## Properties

### `Optional` administrator

• **administrator**? : *[Employee](employee.md)*

Administrator user to create in the new company. Leave empty if calling this enpoint as an auditor og accountant company

___

### `Optional` administratorPassword

• **administratorPassword**? : *string*

The password of the administrator user.

___

### `Optional` autoValidateUserLogin

• **autoValidateUserLogin**? : *boolean*

Should the user be automatically validated?

___

### `Optional` createApiToken

• **createApiToken**? : *boolean*

Creates a token for the admin user. The accounting office could also use their tokens so you might not need this.

___

### `Optional` customerId

• **customerId**? : *number*

The customer id to an already created customer to create a Tripletex account for.

___

### `Optional` customerInvoiceEmail

• **customerInvoiceEmail**? : *string*

The address to send the invoice to at the customer.

___

###  modules

• **modules**: *Array‹[SalesModuleDTO](salesmoduledto.md)›*

___

### `Optional` numberOfEmployees

• **numberOfEmployees**? : *number*

The number of employees in the customer company. Is used for calculating prices and setting some default settings, i.e. approval settings for timesheet.

___

### `Optional` sendEmails

• **sendEmails**? : *boolean*

Should the emails normally sent during creation be sent in this case?

___

### `Optional` sendInvoiceToCustomer

• **sendInvoiceToCustomer**? : *boolean*

Should the invoices for this account be sent to the customer?
