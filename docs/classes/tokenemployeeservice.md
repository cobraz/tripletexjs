[tripletexjs](../README.md) › [TokenEmployeeService](tokenemployeeservice.md)

# Class: TokenEmployeeService

## Hierarchy

* **TokenEmployeeService**

## Index

### Methods

* [tokenEmployeeCreateCreate](tokenemployeeservice.md#static-tokenemployeecreatecreate)

## Methods

### `Static` tokenEmployeeCreateCreate

▸ **tokenEmployeeCreateCreate**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmployeeToken](../interfaces/responsewrapperemployeetoken.md)›*

Create an employee token. Only selected consumers are allowed

**`result`** ResponseWrapperEmployeeToken successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`companyOwned` | boolean | Is the key company owned |
`consumerName` | string | The name of the consumer |
`employeeId` | number | The id of the employee |
`expirationDate` | string | Expiration date for the employeeToken |
`tokenName` | string | A user defined name for the new token |

**Returns:** *Promise‹[ResponseWrapperEmployeeToken](../interfaces/responsewrapperemployeetoken.md)›*
