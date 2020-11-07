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
`fields` | undefined &#124; string | Fields filter pattern |
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
`customerId` | undefined &#124; number | - | Equals |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`invoiceId` | undefined &#124; number | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |
`termOfPaymentFrom` | undefined &#124; string | - | From and including |
`termOfPaymentTo` | undefined &#124; string | - | To and excluding |

**Returns:** *Promise‹[ListResponseReminder](../interfaces/listresponsereminder.md)›*
