[tripletexjs](../README.md) › [TripletexAccount2](tripletexaccount2.md)

# Namespace: TripletexAccount2

## Index

### Enumerations

* [accountType](../enums/tripletexaccount2.accounttype.md)
* [chartOfAccountsType](../enums/tripletexaccount2.chartofaccountstype.md)
* [numberOfVouchers](../enums/tripletexaccount2.numberofvouchers.md)
* [vatStatusType](../enums/tripletexaccount2.vatstatustype.md)

### Properties

* [accountingOffice](tripletexaccount2.md#optional-accountingoffice)
* [administrator](tripletexaccount2.md#optional-administrator)
* [administratorPassword](tripletexaccount2.md#administratorpassword)
* [auditor](tripletexaccount2.md#optional-auditor)
* [autoValidateUserLogin](tripletexaccount2.md#optional-autovalidateuserlogin)
* [bankAccount](tripletexaccount2.md#optional-bankaccount)
* [company](tripletexaccount2.md#company)
* [createAdministratorApiToken](tripletexaccount2.md#optional-createadministratorapitoken)
* [createCompanyOwnedApiToken](tripletexaccount2.md#optional-createcompanyownedapitoken)
* [mayCreateTripletexAccounts](tripletexaccount2.md#optional-maycreatetripletexaccounts)
* [modules](tripletexaccount2.md#modules)
* [postAccount](tripletexaccount2.md#optional-postaccount)
* [reseller](tripletexaccount2.md#optional-reseller)
* [sendEmails](tripletexaccount2.md#optional-sendemails)

## Properties

### `Optional` accountingOffice

• **accountingOffice**? : *boolean*

___

### `Optional` administrator

• **administrator**? : *[Employee](employee.md)*

Employee to create. Department on this object will also be created if supplied. If null a dummy user and department will be created instead

___

###  administratorPassword

• **administratorPassword**: *string*

Password for the administrator user to create. Not a part of the administrator employee object since this is a value that never can be read (it is salted and hashed before storing)

___

### `Optional` auditor

• **auditor**? : *boolean*

___

### `Optional` autoValidateUserLogin

• **autoValidateUserLogin**? : *boolean*

If true, the users created will be allowed to log in without validating their email address. ONLY USE THIS IF YOU ALREADY HAVE VALIDATED THE USER EMAILS.

___

### `Optional` bankAccount

• **bankAccount**? : *string*

Main bank account

___

###  company

• **company**: *[Company](company.md)*

Information about the company to create. Supply as much info as you have, but at least name, type and address.

___

### `Optional` createAdministratorApiToken

• **createAdministratorApiToken**? : *boolean*

Create an API token for the administrator user for the consumer token used during this call. The token will be returned in the response.

___

### `Optional` createCompanyOwnedApiToken

• **createCompanyOwnedApiToken**? : *boolean*

Create an API token for the company to use to call their clients, only possible for accounting and auditor accounts. The token will be returned in the response.

___

### `Optional` mayCreateTripletexAccounts

• **mayCreateTripletexAccounts**? : *boolean*

Should the company we are creating be able to create new Tripletex accounts?

___

###  modules

• **modules**: *Array‹[SalesModuleDTO](salesmoduledto.md)›*

Sales modules (functionality in the application) to activate for the newly created account. Some modules have extra costs.

___

### `Optional` postAccount

• **postAccount**? : *string*

Swedish post account number (PlusGirot)

___

### `Optional` reseller

• **reseller**? : *boolean*

___

### `Optional` sendEmails

• **sendEmails**? : *boolean*

Should the regular creation emails be sent to the company created and its users? If false you probably want to set autoValidateUserLogin to true
