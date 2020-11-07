[tripletexjs](../README.md) › [Employee](employee.md)

# Namespace: Employee

## Index

### Enumerations

* [userType](../enums/employee.usertype.md)

### Properties

* [address](employee.md#optional-address)
* [allowInformationRegistration](employee.md#optional-readonly-allowinformationregistration)
* [bankAccountNumber](employee.md#optional-bankaccountnumber)
* [bic](employee.md#optional-bic)
* [changes](employee.md#optional-readonly-changes)
* [comments](employee.md#optional-comments)
* [creditorBankCountryId](employee.md#optional-creditorbankcountryid)
* [dateOfBirth](employee.md#optional-dateofbirth)
* [department](employee.md#optional-department)
* [dnumber](employee.md#optional-dnumber)
* [email](employee.md#optional-email)
* [employeeNumber](employee.md#optional-employeenumber)
* [employments](employee.md#optional-employments)
* [firstName](employee.md#firstname)
* [holidayAllowanceEarned](employee.md#optional-holidayallowanceearned)
* [iban](employee.md#optional-iban)
* [id](employee.md#optional-id)
* [internationalId](employee.md#optional-internationalid)
* [isContact](employee.md#optional-readonly-iscontact)
* [lastName](employee.md#lastname)
* [nationalIdentityNumber](employee.md#optional-nationalidentitynumber)
* [phoneNumberHome](employee.md#optional-phonenumberhome)
* [phoneNumberMobile](employee.md#optional-phonenumbermobile)
* [phoneNumberMobileCountry](employee.md#optional-phonenumbermobilecountry)
* [phoneNumberWork](employee.md#optional-phonenumberwork)
* [url](employee.md#optional-readonly-url)
* [usesAbroadPayment](employee.md#optional-usesabroadpayment)
* [version](employee.md#optional-version)

## Properties

### `Optional` address

• **address**? : *[Address](../interfaces/address.md)*

Address tied to the employee

___

### `Optional` `Readonly` allowInformationRegistration

• **allowInformationRegistration**? : *boolean*

Determines if salary information can be registered on the user including hours, travel expenses and employee expenses. The user may also be selected as a project member on projects.

___

### `Optional` bankAccountNumber

• **bankAccountNumber**? : *string*

___

### `Optional` bic

• **bic**? : *string*

Bic (swift) field -- pilot program

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` comments

• **comments**? : *string*

___

### `Optional` creditorBankCountryId

• **creditorBankCountryId**? : *number*

Country of creditor bank field -- pilot program

___

### `Optional` dateOfBirth

• **dateOfBirth**? : *string*

___

### `Optional` department

• **department**? : *[Department](../interfaces/department.md)*

___

### `Optional` dnumber

• **dnumber**? : *string*

___

### `Optional` email

• **email**? : *string*

___

### `Optional` employeeNumber

• **employeeNumber**? : *string*

___

### `Optional` employments

• **employments**? : *Array‹[Employment](employment.md)›*

Employments tied to the employee

___

###  firstName

• **firstName**: *string*

___

### `Optional` holidayAllowanceEarned

• **holidayAllowanceEarned**? : *[HolidayAllowanceEarned](../interfaces/holidayallowanceearned.md)*

___

### `Optional` iban

• **iban**? : *string*

IBAN field -- pilot program

___

### `Optional` id

• **id**? : *number*

___

### `Optional` internationalId

• **internationalId**? : *[InternationalId](internationalid.md)*

___

### `Optional` `Readonly` isContact

• **isContact**? : *boolean*

___

###  lastName

• **lastName**: *string*

___

### `Optional` nationalIdentityNumber

• **nationalIdentityNumber**? : *string*

___

### `Optional` phoneNumberHome

• **phoneNumberHome**? : *string*

___

### `Optional` phoneNumberMobile

• **phoneNumberMobile**? : *string*

___

### `Optional` phoneNumberMobileCountry

• **phoneNumberMobileCountry**? : *[Country](../interfaces/country.md)*

The country of the mobile phone number. If not set, the country is derived as best as possible from phoneNumberMobile. NB! 8 digit numbers are assumed to be Norwegian.

___

### `Optional` phoneNumberWork

• **phoneNumberWork**? : *string*

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` usesAbroadPayment

• **usesAbroadPayment**? : *boolean*

UsesAbroadPayment field -- pilot program. Determines if we should use domestic or abroad remittance. To be able to use abroad remittance, one has to: 1: have Autopay 2: have valid combination of the fields Iban, Bic (swift) and Country of creditor bank.

___

### `Optional` version

• **version**? : *number*
