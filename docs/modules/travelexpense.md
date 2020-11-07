[tripletexjs](../README.md) › [TravelExpense](travelexpense.md)

# Namespace: TravelExpense

## Index

### Enumerations

* [state](../enums/travelexpense.state.md)

### Properties

* [accommodationAllowances](travelexpense.md#optional-readonly-accommodationallowances)
* [accountingPeriodClosed](travelexpense.md#optional-readonly-accountingperiodclosed)
* [accountingPeriodVATClosed](travelexpense.md#optional-readonly-accountingperiodvatclosed)
* [actions](travelexpense.md#optional-readonly-actions)
* [amount](travelexpense.md#optional-readonly-amount)
* [approvedBy](travelexpense.md#optional-readonly-approvedby)
* [approvedDate](travelexpense.md#optional-readonly-approveddate)
* [attachment](travelexpense.md#optional-readonly-attachment)
* [attachmentCount](travelexpense.md#optional-readonly-attachmentcount)
* [changes](travelexpense.md#optional-readonly-changes)
* [chargeableAmount](travelexpense.md#optional-readonly-chargeableamount)
* [completedBy](travelexpense.md#optional-readonly-completedby)
* [completedDate](travelexpense.md#optional-readonly-completeddate)
* [costs](travelexpense.md#optional-costs)
* [date](travelexpense.md#optional-readonly-date)
* [department](travelexpense.md#optional-department)
* [employee](travelexpense.md#employee)
* [fixedInvoicedAmount](travelexpense.md#optional-fixedinvoicedamount)
* [highRateVAT](travelexpense.md#optional-readonly-highratevat)
* [id](travelexpense.md#optional-id)
* [invoice](travelexpense.md#optional-readonly-invoice)
* [isApproved](travelexpense.md#optional-readonly-isapproved)
* [isChargeable](travelexpense.md#optional-ischargeable)
* [isCompleted](travelexpense.md#optional-readonly-iscompleted)
* [isFixedInvoicedAmount](travelexpense.md#optional-isfixedinvoicedamount)
* [isIncludeAttachedReceiptsWhenReinvoicing](travelexpense.md#optional-isincludeattachedreceiptswhenreinvoicing)
* [isSalaryAdmin](travelexpense.md#optional-readonly-issalaryadmin)
* [lowRateVAT](travelexpense.md#optional-readonly-lowratevat)
* [mediumRateVAT](travelexpense.md#optional-readonly-mediumratevat)
* [mileageAllowances](travelexpense.md#optional-readonly-mileageallowances)
* [number](travelexpense.md#optional-readonly-number)
* [paymentAmount](travelexpense.md#optional-readonly-paymentamount)
* [paymentAmountCurrency](travelexpense.md#optional-readonly-paymentamountcurrency)
* [paymentCurrency](travelexpense.md#optional-paymentcurrency)
* [payslip](travelexpense.md#optional-readonly-payslip)
* [perDiemCompensations](travelexpense.md#optional-perdiemcompensations)
* [project](travelexpense.md#optional-project)
* [showPayslip](travelexpense.md#optional-readonly-showpayslip)
* [title](travelexpense.md#optional-title)
* [travelAdvance](travelexpense.md#optional-traveladvance)
* [travelDetails](travelexpense.md#optional-traveldetails)
* [url](travelexpense.md#optional-readonly-url)
* [vatType](travelexpense.md#optional-vattype)
* [version](travelexpense.md#optional-version)
* [voucher](travelexpense.md#optional-readonly-voucher)

## Properties

### `Optional` `Readonly` accommodationAllowances

• **accommodationAllowances**? : *Array‹[AccommodationAllowance](../interfaces/accommodationallowance.md)›*

Link to individual accommodation allowances.

___

### `Optional` `Readonly` accountingPeriodClosed

• **accountingPeriodClosed**? : *undefined | false | true*

___

### `Optional` `Readonly` accountingPeriodVATClosed

• **accountingPeriodVATClosed**? : *undefined | false | true*

___

### `Optional` `Readonly` actions

• **actions**? : *Array‹[Link](link.md)›*

___

### `Optional` `Readonly` amount

• **amount**? : *undefined | number*

___

### `Optional` `Readonly` approvedBy

• **approvedBy**? : *[Employee](employee.md)*

___

### `Optional` `Readonly` approvedDate

• **approvedDate**? : *undefined | string*

___

### `Optional` `Readonly` attachment

• **attachment**? : *[Document](../interfaces/document.md)*

___

### `Optional` `Readonly` attachmentCount

• **attachmentCount**? : *undefined | number*

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

### `Optional` `Readonly` chargeableAmount

• **chargeableAmount**? : *undefined | number*

___

### `Optional` `Readonly` completedBy

• **completedBy**? : *[Employee](employee.md)*

___

### `Optional` `Readonly` completedDate

• **completedDate**? : *undefined | string*

___

### `Optional` costs

• **costs**? : *Array‹[Cost](../interfaces/cost.md)›*

Link to individual costs.

___

### `Optional` `Readonly` date

• **date**? : *undefined | string*

___

### `Optional` department

• **department**? : *[Department](../interfaces/department.md)*

___

###  employee

• **employee**: *[Employee](employee.md)*

___

### `Optional` fixedInvoicedAmount

• **fixedInvoicedAmount**? : *undefined | number*

___

### `Optional` `Readonly` highRateVAT

• **highRateVAT**? : *undefined | number*

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` `Readonly` invoice

• **invoice**? : *[Invoice](invoice.md)*

___

### `Optional` `Readonly` isApproved

• **isApproved**? : *undefined | false | true*

___

### `Optional` isChargeable

• **isChargeable**? : *undefined | false | true*

___

### `Optional` `Readonly` isCompleted

• **isCompleted**? : *undefined | false | true*

___

### `Optional` isFixedInvoicedAmount

• **isFixedInvoicedAmount**? : *undefined | false | true*

___

### `Optional` isIncludeAttachedReceiptsWhenReinvoicing

• **isIncludeAttachedReceiptsWhenReinvoicing**? : *undefined | false | true*

___

### `Optional` `Readonly` isSalaryAdmin

• **isSalaryAdmin**? : *undefined | false | true*

___

### `Optional` `Readonly` lowRateVAT

• **lowRateVAT**? : *undefined | number*

___

### `Optional` `Readonly` mediumRateVAT

• **mediumRateVAT**? : *undefined | number*

___

### `Optional` `Readonly` mileageAllowances

• **mileageAllowances**? : *Array‹[MileageAllowance](../interfaces/mileageallowance.md)›*

Link to individual mileage allowances.

___

### `Optional` `Readonly` number

• **number**? : *undefined | number*

___

### `Optional` `Readonly` paymentAmount

• **paymentAmount**? : *undefined | number*

___

### `Optional` `Readonly` paymentAmountCurrency

• **paymentAmountCurrency**? : *undefined | number*

___

### `Optional` paymentCurrency

• **paymentCurrency**? : *[Currency](../interfaces/currency.md)*

___

### `Optional` `Readonly` payslip

• **payslip**? : *[Payslip](../interfaces/payslip.md)*

___

### `Optional` perDiemCompensations

• **perDiemCompensations**? : *Array‹[PerDiemCompensation](perdiemcompensation.md)›*

Link to individual per diem compensations.

___

### `Optional` project

• **project**? : *[Project](project.md)*

___

### `Optional` `Readonly` showPayslip

• **showPayslip**? : *undefined | false | true*

___

### `Optional` title

• **title**? : *undefined | string*

___

### `Optional` travelAdvance

• **travelAdvance**? : *undefined | number*

___

### `Optional` travelDetails

• **travelDetails**? : *[TravelDetails](../interfaces/traveldetails.md)*

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` vatType

• **vatType**? : *[VatType](../interfaces/vattype.md)*

___

### `Optional` version

• **version**? : *undefined | number*

___

### `Optional` `Readonly` voucher

• **voucher**? : *[Voucher](../interfaces/voucher.md)*
