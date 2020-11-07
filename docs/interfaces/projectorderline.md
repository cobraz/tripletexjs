[tripletexjs](../README.md) › [ProjectOrderLine](projectorderline.md)

# Interface: ProjectOrderLine

## Hierarchy

* **ProjectOrderLine**

## Index

### Properties

* [amountExcludingVatCurrency](projectorderline.md#optional-readonly-amountexcludingvatcurrency)
* [amountIncludingVatCurrency](projectorderline.md#optional-readonly-amountincludingvatcurrency)
* [changes](projectorderline.md#optional-readonly-changes)
* [count](projectorderline.md#optional-count)
* [currency](projectorderline.md#optional-readonly-currency)
* [date](projectorderline.md#date)
* [description](projectorderline.md#optional-description)
* [discount](projectorderline.md#optional-discount)
* [id](projectorderline.md#optional-id)
* [inventory](projectorderline.md#optional-inventory)
* [invoice](projectorderline.md#optional-readonly-invoice)
* [isBudget](projectorderline.md#optional-readonly-isbudget)
* [isChargeable](projectorderline.md#optional-ischargeable)
* [markup](projectorderline.md#optional-markup)
* [product](projectorderline.md#optional-product)
* [project](projectorderline.md#project)
* [unitCostCurrency](projectorderline.md#optional-unitcostcurrency)
* [unitPriceExcludingVatCurrency](projectorderline.md#optional-unitpriceexcludingvatcurrency)
* [url](projectorderline.md#optional-readonly-url)
* [vatType](projectorderline.md#optional-vattype)
* [version](projectorderline.md#optional-version)

## Properties

### `Optional` `Readonly` amountExcludingVatCurrency

• **amountExcludingVatCurrency**? : *undefined | number*

Total amount on order line excluding VAT in the order's currency

___

### `Optional` `Readonly` amountIncludingVatCurrency

• **amountIncludingVatCurrency**? : *undefined | number*

Total amount on order line including VAT in the order's currency

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` count

• **count**? : *undefined | number*

___

### `Optional` `Readonly` currency

• **currency**? : *[Currency](currency.md)*

The order line's currency. Determined by the order's currency.

___

###  date

• **date**: *string*

___

### `Optional` description

• **description**? : *undefined | string*

___

### `Optional` discount

• **discount**? : *undefined | number*

Discount given as a percentage (%)

___

### `Optional` id

• **id**? : *undefined | number*

___

### `Optional` inventory

• **inventory**? : *[Inventory](inventory.md)*

___

### `Optional` `Readonly` invoice

• **invoice**? : *[Invoice](../modules/invoice.md)*

___

### `Optional` `Readonly` isBudget

• **isBudget**? : *undefined | false | true*

___

### `Optional` isChargeable

• **isChargeable**? : *undefined | false | true*

___

### `Optional` markup

• **markup**? : *undefined | number*

Markup given as a percentage (%)

___

### `Optional` product

• **product**? : *[Product](product.md)*

___

###  project

• **project**: *[Project](../modules/project.md)*

___

### `Optional` unitCostCurrency

• **unitCostCurrency**? : *undefined | number*

Unit price purchase (cost) excluding VAT in the order's currency

___

### `Optional` unitPriceExcludingVatCurrency

• **unitPriceExcludingVatCurrency**? : *undefined | number*

Unit price of purchase excluding VAT in the order's currency

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` vatType

• **vatType**? : *[VatType](vattype.md)*

___

### `Optional` version

• **version**? : *undefined | number*
