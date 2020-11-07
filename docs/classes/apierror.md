[tripletexjs](../README.md) › [ApiError](apierror.md)

# Class: ApiError

## Hierarchy

* [Error](apierror.md#static-error)

  ↳ **ApiError**

## Index

### Constructors

* [constructor](apierror.md#constructor)

### Properties

* [body](apierror.md#readonly-body)
* [code](apierror.md#optional-code)
* [developerMessage](apierror.md#optional-developermessage)
* [link](apierror.md#optional-link)
* [message](apierror.md#message)
* [name](apierror.md#name)
* [requestId](apierror.md#optional-requestid)
* [stack](apierror.md#optional-stack)
* [status](apierror.md#readonly-status)
* [statusText](apierror.md#readonly-statustext)
* [url](apierror.md#readonly-url)
* [validationMessages](apierror.md#optional-validationmessages)
* [Error](apierror.md#static-error)

## Constructors

###  constructor

\+ **new ApiError**(`response`: [ApiResult](../interfaces/apiresult.md), `message`: string): *[ApiError](apierror.md)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [ApiResult](../interfaces/apiresult.md) |
`message` | string |

**Returns:** *[ApiError](apierror.md)*

## Properties

### `Readonly` body

• **body**: *any*

___

### `Optional` code

• **code**? : *number*

___

### `Optional` developerMessage

• **developerMessage**? : *string*

___

### `Optional` link

• **link**? : *string*

___

###  message

• **message**: *string*

*Inherited from [ApiError](apierror.md).[message](apierror.md#message)*

___

###  name

• **name**: *string*

*Inherited from [ApiError](apierror.md).[name](apierror.md#name)*

___

### `Optional` requestId

• **requestId**? : *string*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [ApiError](apierror.md).[stack](apierror.md#optional-stack)*

___

### `Readonly` status

• **status**: *number*

___

### `Readonly` statusText

• **statusText**: *string*

___

### `Readonly` url

• **url**: *string*

___

### `Optional` validationMessages

• **validationMessages**? : *Array‹[ApiValidationMessage](../interfaces/apivalidationmessage.md)›*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*
