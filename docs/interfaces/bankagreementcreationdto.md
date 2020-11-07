[tripletexjs](../README.md) › [BankAgreementCreationDTO](bankagreementcreationdto.md)

# Interface: BankAgreementCreationDTO

## Hierarchy

* **BankAgreementCreationDTO**

## Index

### Properties

* [accountInBankId](bankagreementcreationdto.md#optional-accountinbankid)
* [bankAccounts](bankagreementcreationdto.md#bankaccounts)
* [bankId](bankagreementcreationdto.md#bankid)
* [ccmAgreementId](bankagreementcreationdto.md#optional-ccmagreementid)
* [division](bankagreementcreationdto.md#optional-division)
* [electronicCreation](bankagreementcreationdto.md#optional-electroniccreation)
* [organizationNumber](bankagreementcreationdto.md#optional-organizationnumber)

## Properties

### `Optional` accountInBankId

• **accountInBankId**? : *undefined | string*

Customer number in bank

___

###  bankAccounts

• **bankAccounts**: *Array‹[Account](../modules/account.md)›*

JSON representing a list of new object to be created. Should not have ID and version set.

___

###  bankId

• **bankId**: *number*

Bank ID

___

### `Optional` ccmAgreementId

• **ccmAgreementId**? : *undefined | string*

Customer Id from Bank

___

### `Optional` division

• **division**? : *undefined | string*

Division (DNB only)

___

### `Optional` electronicCreation

• **electronicCreation**? : *undefined | false | true*

Electronic agreement creation initiated.

___

### `Optional` organizationNumber

• **organizationNumber**? : *undefined | string*

Organization number
