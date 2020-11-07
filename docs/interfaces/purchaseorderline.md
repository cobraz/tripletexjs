[tripletexjs](../README.md) › [PurchaseOrderline](purchaseorderline.md)

# Interface: PurchaseOrderline

## Hierarchy

* **PurchaseOrderline**

## Index

### Properties

* [amountExcludingVatCurrency](purchaseorderline.md#optional-readonly-amountexcludingvatcurrency)
* [amountIncludingVatCurrency](purchaseorderline.md#optional-readonly-amountincludingvatcurrency)
* [changes](purchaseorderline.md#optional-readonly-changes)
* [count](purchaseorderline.md#optional-count)
* [currency](purchaseorderline.md#optional-readonly-currency)
* [description](purchaseorderline.md#optional-description)
* [discount](purchaseorderline.md#optional-discount)
* [id](purchaseorderline.md#optional-id)
* [product](purchaseorderline.md#optional-product)
* [purchaseOrder](purchaseorderline.md#purchaseorder)
* [unitCostCurrency](purchaseorderline.md#optional-unitcostcurrency)
* [unitPriceExcludingVatCurrency](purchaseorderline.md#optional-unitpriceexcludingvatcurrency)
* [url](purchaseorderline.md#optional-readonly-url)
* [version](purchaseorderline.md#optional-version)

## Properties

### `Optional` `Readonly` amountExcludingVatCurrency

• **amountExcludingVatCurrency**? : *number*

Total amount on order line excluding VAT in the order's currency

___

### `Optional` `Readonly` amountIncludingVatCurrency

• **amountIncludingVatCurrency**? : *number*

Total amount on order line including VAT in the order's currency

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](../modules/change.md)›*

___

### `Optional` count

• **count**? : *number*

___

### `Optional` `Readonly` currency

• **currency**? : *[Currency](currency.md)*

The order line's currency. Determined by the order's currency.

___

### `Optional` description

• **description**? : *string*

___

### `Optional` discount

• **discount**? : *number*

Discount given as a percentage (%)

___

### `Optional` id

• **id**? : *number*

___

### `Optional` product

• **product**? : *[Product](product.md)*

___

###  purchaseOrder

• **purchaseOrder**: *[PurchaseOrder](../modules/purchaseorder.md)*

The purchase order to attach the orderline.

___

### `Optional` unitCostCurrency

• **unitCostCurrency**? : *number*

Unit price purchase (cost) excluding VAT in the order's currency

___

### `Optional` unitPriceExcludingVatCurrency

• **unitPriceExcludingVatCurrency**? : *number*

Unit price of purchase excluding VAT in the order's currency

___

### `Optional` `Readonly` url

• **url**? : *string*

___

### `Optional` version

• **version**? : *number*
