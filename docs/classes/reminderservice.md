[tripletexjs](../README.md) › [ReminderService](reminderservice.md)

# Class: ReminderService

## Hierarchy

* **ReminderService**

## Index

### Methods

* [reminderGet](reminderservice.md#static-reminderget)
* [reminderSearch](reminderservice.md#static-remindersearch)

## Methods

### `Static` reminderGet

▸ **reminderGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperReminder](../interfaces/responsewrapperreminder.md)›*

Get reminder by ID.

**`result`** ResponseWrapperReminder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperReminder](../interfaces/responsewrapperreminder.md)›*

___

### `Static` reminderSearch

▸ **reminderSearch**(`__namedParameters`: object): *Promise‹[ListResponseReminder](../interfaces/listresponsereminder.md)›*

Find reminders corresponding with sent data.

**`result`** ListResponseReminder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`customerId` | number | - | Equals |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`invoiceId` | number | - | Equals |
`sorting` | string | - | Sorting pattern |
`termOfPaymentFrom` | string | - | From and including |
`termOfPaymentTo` | string | - | To and excluding |

**Returns:** *Promise‹[ListResponseReminder](../interfaces/listresponsereminder.md)›*
