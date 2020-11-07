[tripletexjs](../README.md) › [Project](project.md)

# Namespace: Project

## Index

### Enumerations

* [displayNameFormat](../enums/project.displaynameformat.md)

### Properties

* [changes](project.md#optional-readonly-changes)
* [contact](project.md#optional-readonly-contact)
* [contributionMarginPercent](project.md#optional-readonly-contributionmarginpercent)
* [currency](project.md#optional-currency)
* [customer](project.md#optional-customer)
* [deliveryAddress](project.md#optional-readonly-deliveryaddress)
* [department](project.md#optional-department)
* [description](project.md#optional-description)
* [discountPercentage](project.md#optional-readonly-discountpercentage)
* [displayName](project.md#optional-readonly-displayname)
* [endDate](project.md#optional-enddate)
* [externalAccountsNumber](project.md#optional-externalaccountsnumber)
* [fixedprice](project.md#optional-fixedprice)
* [forParticipantsOnly](project.md#optional-forparticipantsonly)
* [generalProjectActivitiesPerProjectOnly](project.md#optional-generalprojectactivitiesperprojectonly)
* [hierarchyNameAndNumber](project.md#optional-readonly-hierarchynameandnumber)
* [id](project.md#optional-id)
* [invoicingPlan](project.md#optional-readonly-invoicingplan)
* [isClosed](project.md#optional-isclosed)
* [isFixedPrice](project.md#optional-isfixedprice)
* [isInternal](project.md#isinternal)
* [isOffer](project.md#optional-readonly-isoffer)
* [isPriceCeiling](project.md#optional-ispriceceiling)
* [isReadyForInvoicing](project.md#optional-isreadyforinvoicing)
* [mainProject](project.md#optional-mainproject)
* [markUpFeesEarned](project.md#optional-markupfeesearned)
* [markUpOrderLines](project.md#optional-markuporderlines)
* [name](project.md#name)
* [number](project.md#optional-number)
* [numberOfProjectParticipants](project.md#optional-readonly-numberofprojectparticipants)
* [numberOfSubProjects](project.md#optional-readonly-numberofsubprojects)
* [orderLines](project.md#optional-readonly-orderlines)
* [participants](project.md#optional-participants)
* [preliminaryInvoice](project.md#optional-readonly-preliminaryinvoice)
* [priceCeilingAmount](project.md#optional-priceceilingamount)
* [projectActivities](project.md#optional-projectactivities)
* [projectCategory](project.md#optional-projectcategory)
* [projectHourlyRates](project.md#optional-projecthourlyrates)
* [projectManager](project.md#projectmanager)
* [startDate](project.md#startdate)
* [url](project.md#optional-readonly-url)
* [vatType](project.md#optional-vattype)
* [version](project.md#optional-version)

## Properties

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` `Readonly` contact

• **contact**? : *[Contact](../interfaces/contact.md)*

___

### `Optional` `Readonly` contributionMarginPercent

• **contributionMarginPercent**? : *number*

___

### `Optional` currency

• **currency**? : *[Currency](../interfaces/currency.md)*

___

### `Optional` customer

• **customer**? : *[Customer](customer.md)*

The project's customer

___

### `Optional` `Readonly` deliveryAddress

• **deliveryAddress**? : *[DeliveryAddress](../interfaces/deliveryaddress.md)*

___

### `Optional` department

• **department**? : *[Department](../interfaces/department.md)*

___

### `Optional` description

• **description**? : *string*

___

### `Optional` `Readonly` discountPercentage

• **discountPercentage**? : *number*

Project discount percentage.

___

### `Optional` `Readonly` displayName

• **displayName**? : *string*

___

### `Optional` endDate

• **endDate**? : *string*

___

### `Optional` externalAccountsNumber

• **externalAccountsNumber**? : *string*

___

### `Optional` fixedprice

• **fixedprice**? : *number*

Fixed price amount, in the project's currency.

___

### `Optional` forParticipantsOnly

• **forParticipantsOnly**? : *boolean*

Set to true if only project participants can register information on the project

___

### `Optional` generalProjectActivitiesPerProjectOnly

• **generalProjectActivitiesPerProjectOnly**? : *boolean*

Set to true if a general project activity must be linked to project to allow time tracking.

___

### `Optional` `Readonly` hierarchyNameAndNumber

• **hierarchyNameAndNumber**? : *string*

___

### `Optional` id

• **id**? : *number*

___

### `Optional` `Readonly` invoicingPlan

• **invoicingPlan**? : *Array‹[Invoice](invoice.md)›*

Invoicing plans tied to the project

___

### `Optional` isClosed

• **isClosed**? : *boolean*

___

### `Optional` isFixedPrice

• **isFixedPrice**? : *boolean*

Project is fixed price if set to true, hourly rate if set to false.

___

###  isInternal

• **isInternal**: *boolean*

___

### `Optional` `Readonly` isOffer

• **isOffer**? : *boolean*

___

### `Optional` isPriceCeiling

• **isPriceCeiling**? : *boolean*

Set to true if an hourly rate project has a price ceiling.

___

### `Optional` isReadyForInvoicing

• **isReadyForInvoicing**? : *boolean*

___

### `Optional` mainProject

• **mainProject**? : *[Project](project.md)*

___

### `Optional` markUpFeesEarned

• **markUpFeesEarned**? : *number*

Set mark-up (%) for fees earned.

___

### `Optional` markUpOrderLines

• **markUpOrderLines**? : *number*

Set mark-up (%) for order lines.

___

###  name

• **name**: *string*

___

### `Optional` number

• **number**? : *string*

___

### `Optional` `Readonly` numberOfProjectParticipants

• **numberOfProjectParticipants**? : *number*

___

### `Optional` `Readonly` numberOfSubProjects

• **numberOfSubProjects**? : *number*

___

### `Optional` `Readonly` orderLines

• **orderLines**? : *Array‹[ProjectOrderLine](../interfaces/projectorderline.md)›*

Order lines tied to the order

___

### `Optional` participants

• **participants**? : *Array‹[ProjectParticipant](../interfaces/projectparticipant.md)›*

Link to individual project participants.

___

### `Optional` `Readonly` preliminaryInvoice

• **preliminaryInvoice**? : *[Invoice](invoice.md)*

___

### `Optional` priceCeilingAmount

• **priceCeilingAmount**? : *number*

Price ceiling amount, in the project's currency.

___

### `Optional` projectActivities

• **projectActivities**? : *Array‹[ProjectActivity](../interfaces/projectactivity.md)›*

Project Activities

___

### `Optional` projectCategory

• **projectCategory**? : *[ProjectCategory](../interfaces/projectcategory.md)*

___

### `Optional` projectHourlyRates

• **projectHourlyRates**? : *Array‹[ProjectHourlyRate](projecthourlyrate.md)›*

Project Rate Types tied to the project.

___

###  projectManager

• **projectManager**: *[Employee](employee.md)*

___

###  startDate

• **startDate**: *string*

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` vatType

• **vatType**? : *[VatType](../interfaces/vattype.md)*

The default vat type for this project.

___

### `Optional` version

• **version**? : *number*
