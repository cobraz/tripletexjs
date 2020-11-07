[tripletexjs](../README.md) › [CustomerTripletexAccount](customertripletexaccount.md)

# Namespace: CustomerTripletexAccount

## Index

### Enumerations

* [accountType](../enums/customertripletexaccount.accounttype.md)
* [chartOfAccountsType](../enums/customertripletexaccount.chartofaccountstype.md)
* [numberOfVouchers](../enums/customertripletexaccount.numberofvouchers.md)
* [type](../enums/customertripletexaccount.type.md)

### Properties

* [administrator](customertripletexaccount.md#optional-administrator)
* [administratorPassword](customertripletexaccount.md#optional-administratorpassword)
* [autoValidateUserLogin](customertripletexaccount.md#optional-autovalidateuserlogin)
* [createApiToken](customertripletexaccount.md#optional-createapitoken)
* [customerId](customertripletexaccount.md#optional-customerid)
* [customerInvoiceEmail](customertripletexaccount.md#optional-customerinvoiceemail)
* [modules](customertripletexaccount.md#modules)
* [numberOfEmployees](customertripletexaccount.md#optional-numberofemployees)
* [sendEmails](customertripletexaccount.md#optional-sendemails)
* [sendInvoiceToCustomer](customertripletexaccount.md#optional-sendinvoicetocustomer)

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

• **modules**: *[Modules](../interfaces/modules.md)*

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
