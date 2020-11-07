[tripletexjs](../README.md) › [ProjectHourlyRate](projecthourlyrate.md)

# Namespace: ProjectHourlyRate

## Index

### Enumerations

* [hourlyRateModel](../enums/projecthourlyrate.hourlyratemodel.md)

### Properties

* [changes](projecthourlyrate.md#optional-readonly-changes)
* [fixedRate](projecthourlyrate.md#optional-fixedrate)
* [id](projecthourlyrate.md#optional-id)
* [project](projecthourlyrate.md#optional-project)
* [projectSpecificRates](projecthourlyrate.md#optional-projectspecificrates)
* [showInProjectOrder](projecthourlyrate.md#optional-showinprojectorder)
* [startDate](projecthourlyrate.md#startdate)
* [url](projecthourlyrate.md#optional-readonly-url)
* [version](projecthourlyrate.md#optional-version)

## Properties

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` fixedRate

• **fixedRate**? : *undefined | number*

Fixed Hourly rates if hourlyRateModel is TYPE_FIXED_HOURLY_RATE.

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` project

• **project**? : *[Project](project.md)*

___

### `Optional` projectSpecificRates

• **projectSpecificRates**? : *Array‹[ProjectSpecificRate](../interfaces/projectspecificrate.md)›*

Project specific rates if hourlyRateModel is TYPE_PROJECT_SPECIFIC_HOURLY_RATES.

___

### `Optional` showInProjectOrder

• **showInProjectOrder**? : *undefined | false | true*

Show on contract confirmation/offers

___

###  startDate

• **startDate**: *string*

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*
