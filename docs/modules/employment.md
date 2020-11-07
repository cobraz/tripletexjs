[tripletexjs](../README.md) › [Employment](employment.md)

# Namespace: Employment

## Index

### Enumerations

* [taxDeductionCode](../enums/employment.taxdeductioncode.md)

### Properties

* [changes](employment.md#optional-readonly-changes)
* [division](employment.md#optional-division)
* [employee](employment.md#optional-employee)
* [employmentDetails](employment.md#optional-employmentdetails)
* [employmentId](employment.md#optional-employmentid)
* [endDate](employment.md#optional-enddate)
* [id](employment.md#optional-id)
* [isMainEmployer](employment.md#optional-ismainemployer)
* [lastSalaryChangeDate](employment.md#optional-lastsalarychangedate)
* [noEmploymentRelationship](employment.md#optional-noemploymentrelationship)
* [startDate](employment.md#startdate)
* [url](employment.md#optional-readonly-url)
* [version](employment.md#optional-version)

## Properties

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` division

• **division**? : *[Division](../interfaces/division.md)*

___

### `Optional` employee

• **employee**? : *[Employee](employee.md)*

___

### `Optional` employmentDetails

• **employmentDetails**? : *Array‹[EmploymentDetails](employmentdetails.md)›*

Employment types tied to the employment

___

### `Optional` employmentId

• **employmentId**? : *undefined | string*

Existing employment ID used by the current accounting system

___

### `Optional` endDate

• **endDate**? : *undefined | string*

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` isMainEmployer

• **isMainEmployer**? : *undefined | false | true*

Determines if company is main employer for the employee. Default value is true.<br />Some values will be default set if not sent upon creation of employment: <br/> If isMainEmployer is NOT sent and tax deduction code loennFraHovedarbeidsgiver is sent, isMainEmployer will be set to true. <br /> If isMainEmployer is NOT sent and tax deduction code loennFraBiarbeidsgiver is sent, isMainEmployer will be set to false. <br /> If true and deduction code is NOT sent, value of tax deduction code will be set to loennFraHovedarbeidsgiver. <br /> If false and deduction code is NOT sent, value of tax deduction code will be set to loennFraBiarbeidsgiver. <br /> For other types of Tax Deduction Codes, isMainEmployer does not influence anything.

___

### `Optional` lastSalaryChangeDate

• **lastSalaryChangeDate**? : *undefined | string*

___

### `Optional` noEmploymentRelationship

• **noEmploymentRelationship**? : *undefined | false | true*

Activate pensions and other benefits with no employment relationship.

___

###  startDate

• **startDate**: *string*

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*
