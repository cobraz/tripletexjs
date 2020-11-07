[tripletexjs](../README.md) › [MileageAllowance](mileageallowance.md)

# Interface: MileageAllowance

## Hierarchy

* **MileageAllowance**

## Index

### Properties

* [amount](mileageallowance.md#optional-amount)
* [changes](mileageallowance.md#optional-readonly-changes)
* [date](mileageallowance.md#date)
* [departureLocation](mileageallowance.md#departurelocation)
* [destination](mileageallowance.md#destination)
* [id](mileageallowance.md#optional-id)
* [isCompanyCar](mileageallowance.md#optional-iscompanycar)
* [km](mileageallowance.md#optional-km)
* [passengerSupplement](mileageallowance.md#optional-passengersupplement)
* [passengers](mileageallowance.md#optional-readonly-passengers)
* [rate](mileageallowance.md#optional-rate)
* [rateCategory](mileageallowance.md#optional-ratecategory)
* [rateType](mileageallowance.md#optional-ratetype)
* [tollCost](mileageallowance.md#optional-tollcost)
* [travelExpense](mileageallowance.md#optional-travelexpense)
* [url](mileageallowance.md#optional-readonly-url)
* [version](mileageallowance.md#optional-version)

## Properties

### `Optional` amount

• **amount**? : *number*

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

###  date

• **date**: *string*

___

###  departureLocation

• **departureLocation**: *string*

___

###  destination

• **destination**: *string*

___

### `Optional` id

• **id**? : *number*

___

### `Optional` isCompanyCar

• **isCompanyCar**? : *boolean*

___

### `Optional` km

• **km**? : *number*

___

### `Optional` passengerSupplement

• **passengerSupplement**? : *[MileageAllowance](mileageallowance.md)*

Passenger mileage allowance associated with this mileage allowance.

___

### `Optional` `Readonly` passengers

• **passengers**? : *Array‹[Passenger](passenger.md)›*

Link to individual passengers.

___

### `Optional` rate

• **rate**? : *number*

___

### `Optional` rateCategory

• **rateCategory**? : *[TravelExpenseRateCategory](../modules/travelexpenseratecategory.md)*

___

### `Optional` rateType

• **rateType**? : *[TravelExpenseRate](travelexpenserate.md)*

___

### `Optional` tollCost

• **tollCost**? : *[Cost](cost.md)*

Toll cost associated with this mileage allowance.

___

### `Optional` travelExpense

• **travelExpense**? : *[TravelExpense](../modules/travelexpense.md)*

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` version

• **version**? : *number*
