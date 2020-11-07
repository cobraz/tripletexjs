[tripletexjs](../README.md) › [ReportGroup](reportgroup.md)

# Interface: ReportGroup

## Hierarchy

* **ReportGroup**

## Index

### Properties

* [cellFormat](reportgroup.md#optional-cellformat)
* [changes](reportgroup.md#optional-readonly-changes)
* [children](reportgroup.md#optional-children)
* [description](reportgroup.md#optional-description)
* [endDate](reportgroup.md#optional-enddate)
* [expression](reportgroup.md#optional-expression)
* [hideChildren](reportgroup.md#optional-hidechildren)
* [hideSelf](reportgroup.md#optional-hideself)
* [id](reportgroup.md#optional-id)
* [name](reportgroup.md#optional-name)
* [numberEnd](reportgroup.md#optional-numberend)
* [numberStart](reportgroup.md#optional-numberstart)
* [periodType](reportgroup.md#optional-periodtype)
* [precedence](reportgroup.md#optional-precedence)
* [startDate](reportgroup.md#optional-startdate)
* [type](reportgroup.md#optional-type)
* [url](reportgroup.md#optional-readonly-url)
* [valueFormat](reportgroup.md#optional-valueformat)
* [variableName](reportgroup.md#optional-variablename)
* [version](reportgroup.md#optional-version)

## Properties

### `Optional` cellFormat

• **cellFormat**? : *undefined | string*

Format string for cell (indentation, font size etc)

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` children

• **children**? : *Array‹[ReportGroup](reportgroup.md)›*

Child groups

___

### `Optional` description

• **description**? : *undefined | string*

Currently not in use

___

### `Optional` endDate

• **endDate**? : *undefined | string*

End date when periodType == 0. Exclusive.

___

### `Optional` expression

• **expression**? : *undefined | string*

Expression / formula according to Rule Engine Expression Language

___

### `Optional` hideChildren

• **hideChildren**? : *undefined | false | true*

Hide the subgroups of this group?

___

### `Optional` hideSelf

• **hideSelf**? : *undefined | false | true*

Hide this group?

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` name

• **name**? : *undefined | string*

The name to be shown for the column or row.

___

### `Optional` numberEnd

• **numberEnd**? : *undefined | number*

End number for object type given by type

___

### `Optional` numberStart

• **numberStart**? : *undefined | number*

Start number for object type given by type

___

### `Optional` periodType

• **periodType**? : *undefined | number*

Specifies period filter: 0 = Absolute, 2 = Inherit, 4 = Last year

___

### `Optional` precedence

• **precedence**? : *undefined | number*

Used to select expression if both column and row expression is set. The bigger value wins.

___

### `Optional` startDate

• **startDate**? : *undefined | string*

Start date when periodType == 0. Inclusive.

___

### `Optional` type

• **type**? : *undefined | number*

How to generate subgroups: 0 = None, 100 = Accounts, 101 = Departments, 200 = Months

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` valueFormat

• **valueFormat**? : *undefined | string*

Format string for value (how to print number, date etc)

___

### `Optional` variableName

• **variableName**? : *undefined | string*

Variable name that can be used to reference this group

___

### `Optional` version

• **version**? : *undefined | number*
