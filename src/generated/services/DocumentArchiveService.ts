/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentArchive } from '../models/DocumentArchive';
import type { ListResponseDocumentArchive } from '../models/ListResponseDocumentArchive';
import type { ResponseWrapperDocumentArchive } from '../models/ResponseWrapperDocumentArchive';
import { request as __request } from '../core/request';

export class DocumentArchiveService {

    /**
     * [BETA] Find documents archived associated with account object type.
     * @param id Element ID
     * @param periodDateFrom From and including
     * @param periodDateTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseDocumentArchive successful operation
     * @throws ApiError
     */
    public static async documentArchiveAccountGetAccount({
        id,
        periodDateFrom,
        periodDateTo,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id: number,
        periodDateFrom?: string,
        periodDateTo?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseDocumentArchive> {
    const result = await __request({
        method: 'GET',
        path: `/documentArchive/account/${id}`,
        query: {
            'periodDateFrom': periodDateFrom,
            'periodDateTo': periodDateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload file to Account Document Archive.
 * @param file The file
 * @param id Element ID
 * @result ResponseWrapperDocumentArchive successfully created
 * @throws ApiError
 */
public static async documentArchiveAccountAccountPost({
    file,
    id,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    id: number,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'POST',
        path: `/documentArchive/account/${id}`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Find documents archived associated with customer object type.
 * @param id Element ID
 * @param periodDateFrom From and including
 * @param periodDateTo To and excluding
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseDocumentArchive successful operation
 * @throws ApiError
 */
public static async documentArchiveCustomerGetCustomer({
    id,
    periodDateFrom,
    periodDateTo,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    id: number,
    periodDateFrom?: string,
    periodDateTo?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseDocumentArchive> {
    const result = await __request({
        method: 'GET',
        path: `/documentArchive/customer/${id}`,
        query: {
            'periodDateFrom': periodDateFrom,
            'periodDateTo': periodDateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload file to Customer Document Archive.
 * @param file The file
 * @param id Element ID
 * @result ResponseWrapperDocumentArchive successfully created
 * @throws ApiError
 */
public static async documentArchiveCustomerCustomerPost({
    file,
    id,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    id: number,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'POST',
        path: `/documentArchive/customer/${id}`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Find documents archived associated with employee object type.
 * @param id Element ID
 * @param periodDateFrom From and including
 * @param periodDateTo To and excluding
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseDocumentArchive successful operation
 * @throws ApiError
 */
public static async documentArchiveEmployeeGetEmployee({
    id,
    periodDateFrom,
    periodDateTo,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    id: number,
    periodDateFrom?: string,
    periodDateTo?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseDocumentArchive> {
    const result = await __request({
        method: 'GET',
        path: `/documentArchive/employee/${id}`,
        query: {
            'periodDateFrom': periodDateFrom,
            'periodDateTo': periodDateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload file to Employee Document Archive.
 * @param file The file
 * @param id Element ID
 * @result ResponseWrapperDocumentArchive successfully created
 * @throws ApiError
 */
public static async documentArchiveEmployeeEmployeePost({
    file,
    id,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    id: number,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'POST',
        path: `/documentArchive/employee/${id}`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Find documents archived associated with product object type.
 * @param id Element ID
 * @param periodDateFrom From and including
 * @param periodDateTo To and excluding
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseDocumentArchive successful operation
 * @throws ApiError
 */
public static async documentArchiveProductGetProduct({
    id,
    periodDateFrom,
    periodDateTo,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    id: number,
    periodDateFrom?: string,
    periodDateTo?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseDocumentArchive> {
    const result = await __request({
        method: 'GET',
        path: `/documentArchive/product/${id}`,
        query: {
            'periodDateFrom': periodDateFrom,
            'periodDateTo': periodDateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload file to Product Document Archive.
 * @param file The file
 * @param id Element ID
 * @result ResponseWrapperDocumentArchive successfully created
 * @throws ApiError
 */
public static async documentArchiveProductProductPost({
    file,
    id,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    id: number,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'POST',
        path: `/documentArchive/product/${id}`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Find documents archived associated with project object type.
 * @param id Element ID
 * @param periodDateFrom From and including
 * @param periodDateTo To and excluding
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseDocumentArchive successful operation
 * @throws ApiError
 */
public static async documentArchiveProjectGetProject({
    id,
    periodDateFrom,
    periodDateTo,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    id: number,
    periodDateFrom?: string,
    periodDateTo?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseDocumentArchive> {
    const result = await __request({
        method: 'GET',
        path: `/documentArchive/project/${id}`,
        query: {
            'periodDateFrom': periodDateFrom,
            'periodDateTo': periodDateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload file to Project Document Archive.
 * @param file The file
 * @param id Element ID
 * @result ResponseWrapperDocumentArchive successfully created
 * @throws ApiError
 */
public static async documentArchiveProjectProjectPost({
    file,
    id,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    id: number,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'POST',
        path: `/documentArchive/project/${id}`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Find documents archived associated with prospect object type.
 * @param id Element ID
 * @param periodDateFrom From and including
 * @param periodDateTo To and excluding
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseDocumentArchive successful operation
 * @throws ApiError
 */
public static async documentArchiveProspectGetProspect({
    id,
    periodDateFrom,
    periodDateTo,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    id: number,
    periodDateFrom?: string,
    periodDateTo?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseDocumentArchive> {
    const result = await __request({
        method: 'GET',
        path: `/documentArchive/prospect/${id}`,
        query: {
            'periodDateFrom': periodDateFrom,
            'periodDateTo': periodDateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload file to Prospect Document Archive.
 * @param file The file
 * @param id Element ID
 * @result ResponseWrapperDocumentArchive successfully created
 * @throws ApiError
 */
public static async documentArchiveProspectProspectPost({
    file,
    id,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    id: number,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'POST',
        path: `/documentArchive/prospect/${id}`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload a file to the document archive reception. Send as multipart form.
 * @param file The file
 * @result ResponseWrapperDocumentArchive successfully created
 * @throws ApiError
 */
public static async documentArchiveReceptionReceptionPost({
    file,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'POST',
        path: `/documentArchive/reception`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Find documents archived associated with supplier object type.
 * @param id Element ID
 * @param periodDateFrom From and including
 * @param periodDateTo To and excluding
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseDocumentArchive successful operation
 * @throws ApiError
 */
public static async documentArchiveSupplierGetSupplier({
    id,
    periodDateFrom,
    periodDateTo,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    id: number,
    periodDateFrom?: string,
    periodDateTo?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseDocumentArchive> {
    const result = await __request({
        method: 'GET',
        path: `/documentArchive/supplier/${id}`,
        query: {
            'periodDateFrom': periodDateFrom,
            'periodDateTo': periodDateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload file to Supplier Document Archive.
 * @param file The file
 * @param id Element ID
 * @result ResponseWrapperDocumentArchive successfully created
 * @throws ApiError
 */
public static async documentArchiveSupplierSupplierPost({
    file,
    id,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    id: number,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'POST',
        path: `/documentArchive/supplier/${id}`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Update document archive.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperDocumentArchive successful operation
 * @throws ApiError
 */
public static async documentArchivePut({
    id,
    body,
}: {
    id: number,
    body?: DocumentArchive,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'PUT',
        path: `/documentArchive/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete document archive.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async documentArchiveDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/documentArchive/${id}`,
    });
    return result.body;
}

}