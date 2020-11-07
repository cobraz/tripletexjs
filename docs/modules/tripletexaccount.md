[tripletexjs](../README.md) › [TripletexAccount](tripletexaccount.md)

# Namespace: TripletexAccount

## Index

### Enumerations

* [accountType](../enums/tripletexaccount.accounttype.md)
* [chartOfAccountsType](../enums/tripletexaccount.chartofaccountstype.md)
* [numberOfVouchers](../enums/tripletexaccount.numberofvouchers.md)

### Properties

* [accountingOffice](tripletexaccount.md#optional-accountingoffice)
* [administrator](tripletexaccount.md#optional-administrator)
* [administratorPassword](tripletexaccount.md#administratorpassword)
* [auditor](tripletexaccount.md#optional-auditor)
* [autoValidateUserLogin](tripletexaccount.md#optional-autovalidateuserlogin)
* [company](tripletexaccount.md#company)
* [createAdministratorApiToken](tripletexaccount.md#optional-createadministratorapitoken)
* [createCompanyOwnedApiToken](tripletexaccount.md#optional-createcompanyownedapitoken)
* [mayCreateTripletexAccounts](tripletexaccount.md#optional-maycreatetripletexaccounts)
* [modules](tripletexaccount.md#modules)
* [reseller](tripletexaccount.md#optional-reseller)
* [sendEmails](tripletexaccount.md#optional-sendemails)

## Properties

### `Optional` accountingOffice

• **accountingOffice**? : *undefined | false | true*

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

• **auditor**? : *undefined | false | true*

___

### `Optional` autoValidateUserLogin

• **autoValidateUserLogin**? : *undefined | false | true*

If true, the users created will be allowed to log in without validating their email address. ONLY USE THIS IF YOU ALREADY HAVE VALIDATED THE USER EMAILS.

___

###  company

• **company**: *[Company](company.md)*

Information about the company to create. Supply as much info as you have, but at least name, type and address.

___

### `Optional` createAdministratorApiToken

• **createAdministratorApiToken**? : *undefined | false | true*

Create an API token for the administrator user for the consumer token used during this call. The token will be returned in the response.

___

### `Optional` createCompanyOwnedApiToken

• **createCompanyOwnedApiToken**? : *undefined | false | true*

Create an API token for the company to use to call their clients, only possible for accounting and auditor accounts. The token will be returned in the response.

___

### `Optional` mayCreateTripletexAccounts

• **mayCreateTripletexAccounts**? : *undefined | false | true*

Should the company we are creating be able to create new Tripletex accounts?

___

###  modules

• **modules**: *[Modules](../interfaces/modules.md)*

Modules (functionality in the application) to activate for the newly created account. Some modules have extra costs.

___

### `Optional` reseller

• **reseller**? : *undefined | false | true*

___

### `Optional` sendEmails

• **sendEmails**? : *undefined | false | true*

Should the regular creation emails be sent to the company created and its users? If false you probably want to set autoValidateUserLogin to true
