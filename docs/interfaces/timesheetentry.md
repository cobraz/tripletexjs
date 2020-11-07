[tripletexjs](../README.md) › [TimesheetEntry](timesheetentry.md)

# Interface: TimesheetEntry

## Hierarchy

* **TimesheetEntry**

## Index

### Properties

* [activity](timesheetentry.md#activity)
* [changes](timesheetentry.md#optional-readonly-changes)
* [chargeable](timesheetentry.md#optional-readonly-chargeable)
* [chargeableHours](timesheetentry.md#optional-readonly-chargeablehours)
* [comment](timesheetentry.md#optional-comment)
* [date](timesheetentry.md#date)
* [employee](timesheetentry.md#employee)
* [hourlyCost](timesheetentry.md#optional-readonly-hourlycost)
* [hourlyCostPercentage](timesheetentry.md#optional-readonly-hourlycostpercentage)
* [hourlyRate](timesheetentry.md#optional-readonly-hourlyrate)
* [hours](timesheetentry.md#hours)
* [id](timesheetentry.md#optional-id)
* [invoice](timesheetentry.md#optional-readonly-invoice)
* [locked](timesheetentry.md#optional-readonly-locked)
* [project](timesheetentry.md#optional-project)
* [timeClocks](timesheetentry.md#optional-readonly-timeclocks)
* [url](timesheetentry.md#optional-readonly-url)
* [version](timesheetentry.md#optional-version)

## Properties

###  activity

• **activity**: *[Activity](../modules/activity.md)*

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` `Readonly` chargeable

• **chargeable**? : *undefined | false | true*

___

### `Optional` `Readonly` chargeableHours

• **chargeableHours**? : *undefined | number*

___

### `Optional` comment

• **comment**? : *undefined | string*

___

###  date

• **date**: *string*

___

###  employee

• **employee**: *[Employee](../modules/employee.md)*

___

### `Optional` `Readonly` hourlyCost

• **hourlyCost**? : *undefined | number*

___

### `Optional` `Readonly` hourlyCostPercentage

• **hourlyCostPercentage**? : *undefined | number*

___

### `Optional` `Readonly` hourlyRate

• **hourlyRate**? : *undefined | number*

___

###  hours

• **hours**: *number*

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` `Readonly` invoice

• **invoice**? : *[Invoice](../modules/invoice.md)*

___

### `Optional` `Readonly` locked

• **locked**? : *undefined | false | true*

Indicates if the hour can be changed.

___

### `Optional` project

• **project**? : *[Project](../modules/project.md)*

___

### `Optional` `Readonly` timeClocks

• **timeClocks**? : *Array‹[TimeClock](timeclock.md)›*

Link to stop watches on this hour.

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*
