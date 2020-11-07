[tripletexjs](../README.md) › [SalesForceOpportunity](salesforceopportunity.md)

# Interface: SalesForceOpportunity

## Hierarchy

* **SalesForceOpportunity**

## Index

### Properties

* [accountantMonthlyProvision](salesforceopportunity.md#optional-accountantmonthlyprovision)
* [accountantStartupProvision](salesforceopportunity.md#optional-accountantstartupprovision)
* [allPrices](salesforceopportunity.md#optional-allprices)
* [listPriceCategory1UserService](salesforceopportunity.md#optional-listpricecategory1userservice)
* [listPriceCategory1UserStartup](salesforceopportunity.md#optional-listpricecategory1userstartup)
* [noOfUsersIncluded](salesforceopportunity.md#optional-noofusersincluded)
* [noOfUsersPrepaid](salesforceopportunity.md#optional-noofusersprepaid)
* [sumAdditionalServices](salesforceopportunity.md#optional-sumadditionalservices)
* [sumService](salesforceopportunity.md#optional-sumservice)
* [sumServiceCategory1Users](salesforceopportunity.md#optional-sumservicecategory1users)
* [sumStartup](salesforceopportunity.md#optional-sumstartup)
* [sumStartupCategory1Users](salesforceopportunity.md#optional-sumstartupcategory1users)

## Properties

### `Optional` accountantMonthlyProvision

• **accountantMonthlyProvision**? : *undefined | number*

The monthly provision for the accountant of the monthly price (percentage)

___

### `Optional` accountantStartupProvision

• **accountantStartupProvision**? : *undefined | number*

The initial provision for the accountant of the startup price (percentage)

___

### `Optional` allPrices

• **allPrices**? : *Record‹string, Record‹string, number››*

A nested map of all active sales modules. The key in the outer map is the sales module, whilest the inner map contains the different pricing types for the given sales module. A pricing type could be PER_USE(10).

___

### `Optional` listPriceCategory1UserService

• **listPriceCategory1UserService**? : *undefined | number*

The monthly list price per user.

___

### `Optional` listPriceCategory1UserStartup

• **listPriceCategory1UserStartup**? : *undefined | number*

The startup list price per user.

___

### `Optional` noOfUsersIncluded

• **noOfUsersIncluded**? : *undefined | number*

The number of users included for free in the purchased module.

___

### `Optional` noOfUsersPrepaid

• **noOfUsersPrepaid**? : *undefined | number*

The number of users prepaid when creating the company.

___

### `Optional` sumAdditionalServices

• **sumAdditionalServices**? : *undefined | number*

The total startup price for additional services.

___

### `Optional` sumService

• **sumService**? : *undefined | number*

The monthly price for the company.

___

### `Optional` sumServiceCategory1Users

• **sumServiceCategory1Users**? : *undefined | number*

The total price per monthly price for users of category 1.

___

### `Optional` sumStartup

• **sumStartup**? : *undefined | number*

The startup price for the company.

___

### `Optional` sumStartupCategory1Users

• **sumStartupCategory1Users**? : *undefined | number*

The total startup price for users of category 1.
