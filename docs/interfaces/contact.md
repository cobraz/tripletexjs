[tripletexjs](../README.md) › [Contact](contact.md)

# Interface: Contact

## Hierarchy

* **Contact**

## Index

### Properties

* [changes](contact.md#optional-readonly-changes)
* [customer](contact.md#optional-customer)
* [email](contact.md#optional-email)
* [firstName](contact.md#optional-firstname)
* [id](contact.md#optional-id)
* [lastName](contact.md#optional-lastname)
* [phoneNumberMobile](contact.md#optional-phonenumbermobile)
* [phoneNumberMobileCountry](contact.md#optional-phonenumbermobilecountry)
* [phoneNumberWork](contact.md#optional-phonenumberwork)
* [url](contact.md#optional-readonly-url)
* [version](contact.md#optional-version)

## Properties

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` customer

• **customer**? : *[Customer](../modules/customer.md)*

___

### `Optional` email

• **email**? : *undefined | string*

___

### `Optional` firstName

• **firstName**? : *undefined | string*

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` lastName

• **lastName**? : *undefined | string*

___

### `Optional` phoneNumberMobile

• **phoneNumberMobile**? : *undefined | string*

___

### `Optional` phoneNumberMobileCountry

• **phoneNumberMobileCountry**? : *[Country](country.md)*

The country of the mobile phone number. If not set, the country is derived as best as possible from phoneNumberMobile. NB! 8 digit numbers are assumed to be Norwegian.

___

### `Optional` phoneNumberWork

• **phoneNumberWork**? : *undefined | string*

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*
