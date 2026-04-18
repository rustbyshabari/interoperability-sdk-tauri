import wasmInit, { fetch_from_js } from "@aiamitsuri/interoperability-wrapper-wasm";

interface FilterParams {
    integration: string | null;
    developmentkit: string | null;
    language: string | null;
    crates: string | null;
    page: string | null;
    ids: string | null;
}

export interface FilterResponse {
    message: string;
    data: any[]; 
    pagination: {
        current_page: number;
        items_per_page: number;
        total_pages: number;
        total_items: number;
        next_page_url?: string | null;
        prev_page_url?: string | null;
    } | null;
}

let wasmPromise: Promise<void> | null = null;

async function ensureWasmInitialized() {
    if (!wasmPromise) {
        wasmPromise = wasmInit().then(() => {});
    }
    return wasmPromise;
}

export async function fetchDataFromWasm(pageNumber: number): Promise<FilterResponse> {
    await ensureWasmInitialized();

    const params: FilterParams = {
        integration: null,
        developmentkit: null,
        language: null,
        crates: null,
        page: pageNumber.toString(),
        ids: null,
    };

    const response = await fetch_from_js(params);
    return response as FilterResponse;
}