[tripletexjs](../README.md) › [EventSubscriptionService](eventsubscriptionservice.md)

# Class: EventSubscriptionService

## Hierarchy

* **EventSubscriptionService**

## Index

### Methods

* [eventSubscriptionDelete](eventsubscriptionservice.md#static-eventsubscriptiondelete)
* [eventSubscriptionGet](eventsubscriptionservice.md#static-eventsubscriptionget)
* [eventSubscriptionPost](eventsubscriptionservice.md#static-eventsubscriptionpost)
* [eventSubscriptionPut](eventsubscriptionservice.md#static-eventsubscriptionput)
* [eventSubscriptionSearch](eventsubscriptionservice.md#static-eventsubscriptionsearch)

## Methods

### `Static` eventSubscriptionDelete

▸ **eventSubscriptionDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete the given subscription.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` eventSubscriptionGet

▸ **eventSubscriptionGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperSubscription](../interfaces/responsewrappersubscription.md)›*

[BETA] Get subscription by ID.

**`result`** ResponseWrapperSubscription successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperSubscription](../interfaces/responsewrappersubscription.md)›*

___

### `Static` eventSubscriptionPost

▸ **eventSubscriptionPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperSubscription](../interfaces/responsewrappersubscription.md)›*

[BETA] Create a new subscription for current EmployeeToken.

**`result`** ResponseWrapperSubscription successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Subscription](../modules/subscription.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperSubscription](../interfaces/responsewrappersubscription.md)›*

___

### `Static` eventSubscriptionPut

▸ **eventSubscriptionPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperSubscription](../interfaces/responsewrappersubscription.md)›*

[BETA] Change a current subscription, based on id.

**`result`** ResponseWrapperSubscription successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Subscription](../modules/subscription.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperSubscription](../interfaces/responsewrappersubscription.md)›*

___

### `Static` eventSubscriptionSearch

▸ **eventSubscriptionSearch**(`__namedParameters`: object): *Promise‹[ListResponseSubscription](../interfaces/listresponsesubscription.md)›*

[BETA] Find all ongoing subscriptions.

**`result`** ListResponseSubscription successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseSubscription](../interfaces/listresponsesubscription.md)›*
