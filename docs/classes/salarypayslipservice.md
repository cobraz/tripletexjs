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
`fields` | undefined &#124; string | Fields filter pattern |
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
`activityId` | undefined &#124; string | - | List of IDs |
`comment` | undefined &#124; string | - | Containing |
`count` | number | 1000 | Number of elements to return |
`employeeId` | undefined &#124; string | - | List of IDs |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`monthFrom` | undefined &#124; number | - | From and including |
`monthTo` | undefined &#124; number | - | To and excluding |
`sorting` | undefined &#124; string | - | Sorting pattern |
`voucherDateFrom` | undefined &#124; string | - | From and including |
`voucherDateTo` | undefined &#124; string | - | To and excluding |
`wageTransactionId` | undefined &#124; string | - | List of IDs |
`yearFrom` | undefined &#124; number | - | From and including |
`yearTo` | undefined &#124; number | - | To and excluding |

**Returns:** *Promise‹[ListResponsePayslip](../interfaces/listresponsepayslip.md)›*
