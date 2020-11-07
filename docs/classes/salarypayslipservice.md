[tripletexjs](../README.md) › [SalaryPayslipService](salarypayslipservice.md)

# Class: SalaryPayslipService

## Hierarchy

* **SalaryPayslipService**

## Index

### Methods

* [salaryPayslipGet](salarypayslipservice.md#static-salarypayslipget)
* [salaryPayslipPdfDownloadPdf](salarypayslipservice.md#static-salarypayslippdfdownloadpdf)
* [salaryPayslipSearch](salarypayslipservice.md#static-salarypayslipsearch)

## Methods

### `Static` salaryPayslipGet

▸ **salaryPayslipGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPayslip](../interfaces/responsewrapperpayslip.md)›*

[BETA] Find payslip by ID.

**`result`** ResponseWrapperPayslip successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPayslip](../interfaces/responsewrapperpayslip.md)›*

___

### `Static` salaryPayslipPdfDownloadPdf

▸ **salaryPayslipPdfDownloadPdf**(`__namedParameters`: object): *Promise‹string›*

[BETA] Find payslip (PDF document) by ID.

**`result`** string successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹string›*

___

### `Static` salaryPayslipSearch

▸ **salaryPayslipSearch**(`__namedParameters`: object): *Promise‹[ListResponsePayslip](../interfaces/listresponsepayslip.md)›*

[BETA] Find payslips corresponding with sent data.

**`result`** ListResponsePayslip successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`activityId` | string | - | List of IDs |
`comment` | string | - | Containing |
`count` | number | 1000 | Number of elements to return |
`employeeId` | string | - | List of IDs |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`monthFrom` | number | - | From and including |
`monthTo` | number | - | To and excluding |
`sorting` | string | - | Sorting pattern |
`voucherDateFrom` | string | - | From and including |
`voucherDateTo` | string | - | To and excluding |
`wageTransactionId` | string | - | List of IDs |
`yearFrom` | number | - | From and including |
`yearTo` | number | - | To and excluding |

**Returns:** *Promise‹[ListResponsePayslip](../interfaces/listresponsepayslip.md)›*
