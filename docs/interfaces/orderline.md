[tripletexjs](../README.md) › [OrderLine](orderline.md)

# Interface: OrderLine

## Hierarchy

* **OrderLine**

## Index

### Properties

* [amountExcludingVatCurrency](orderline.md#optional-readonly-amountexcludingvatcurrency)
* [amountIncludingVatCurrency](orderline.md#optional-readonly-amountincludingvatcurrency)
* [changes](orderline.md#optional-readonly-changes)
* [count](orderline.md#optional-count)
* [currency](orderline.md#optional-readonly-currency)
* [description](orderline.md#optional-description)
* [discount](orderline.md#optional-discount)
* [id](orderline.md#optional-id)
* [inventory](orderline.md#optional-inventory)
* [isSubscription](orderline.md#optional-issubscription)
* [markup](orderline.md#optional-markup)
* [order](orderline.md#optional-order)
* [orderGroup](orderline.md#optional-ordergroup)
* [product](orderline.md#optional-product)
* [subscriptionPeriodEnd](orderline.md#optional-subscriptionperiodend)
* [subscriptionPeriodStart](orderline.md#optional-subscriptionperiodstart)
* [unitCostCurrency](orderline.md#optional-unitcostcurrency)
* [unitPriceExcludingVatCurrency](orderline.md#optional-unitpriceexcludingvatcurrency)
* [unitPriceIncludingVatCurrency](orderline.md#optional-unitpriceincludingvatcurrency)
* [url](orderline.md#optional-readonly-url)
* [vatType](orderline.md#optional-vattype)
* [version](orderline.md#optional-version)

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

### `Optional` isSubscription

• **isSubscription**? : *undefined | false | true*

___

### `Optional` markup

• **markup**? : *undefined | number*

Markup given as a percentage (%)

___

### `Optional` order

• **order**? : *[Order](../modules/order.md)*

The related Order for this OrderLine. This field is required when creating a new OrderLine in the API.

___

### `Optional` orderGroup

• **orderGroup**? : *[OrderGroup](ordergroup.md)*

___

### `Optional` product

• **product**? : *[Product](product.md)*

___

### `Optional` subscriptionPeriodEnd

• **subscriptionPeriodEnd**? : *undefined | string*

___

### `Optional` subscriptionPeriodStart

• **subscriptionPeriodStart**? : *undefined | string*

___

### `Optional` unitCostCurrency

• **unitCostCurrency**? : *undefined | number*

Unit price purchase (cost) excluding VAT in the order's currency

___

### `Optional` unitPriceExcludingVatCurrency

• **unitPriceExcludingVatCurrency**? : *undefined | number*

Unit price of purchase excluding VAT in the order's currency

___

### `Optional` unitPriceIncludingVatCurrency

• **unitPriceIncludingVatCurrency**? : *undefined | number*

Unit price of purchase including VAT in the order's currency

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` vatType

• **vatType**? : *[VatType](vattype.md)*

___

### `Optional` version

• **version**? : *undefined | number*
