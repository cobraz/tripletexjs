[tripletexjs](../README.md) › [SalaryCompilationService](salarycompilationservice.md)

# Class: SalaryCompilationService

## Hierarchy

* **SalaryCompilationService**

## Index

### Methods

* [salaryCompilationGet](salarycompilationservice.md#static-salarycompilationget)
* [salaryCompilationPdfDownloadPdf](salarycompilationservice.md#static-salarycompilationpdfdownloadpdf)

## Methods

### `Static` salaryCompilationGet

▸ **salaryCompilationGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperSalaryCompilation](../interfaces/responsewrappersalarycompilation.md)›*

[BETA] Find salary compilation by employee.

**`result`** ResponseWrapperSalaryCompilation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | number | Element ID |
`fields` | undefined &#124; string | Fields filter pattern |
`year` | undefined &#124; number | Must be between 1900-2100. Defaults to previous year. |

**Returns:** *Promise‹[ResponseWrapperSalaryCompilation](../interfaces/responsewrappersalarycompilation.md)›*

___

### `Static` salaryCompilationPdfDownloadPdf

▸ **salaryCompilationPdfDownloadPdf**(`__namedParameters`: object): *Promise‹string›*

[BETA] Find salary compilation (PDF document) by employee.

**`result`** string successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | number | Element ID |
`year` | undefined &#124; number | Must be between 1900-2100. Defaults to previous year. |

**Returns:** *Promise‹string›*
