# BHILANI Interoperability by kantini, chanchali

Run SDK

    npm run tauri dev

Usage

    // Define the interface
    interface FilterParams {
        language: string | null;
        integration: string | null;
        crates: string | null;
        developmentkit: string | null;
        page: string | null;
        ids: string | null;
    }
    
    // Data fetcher for Web (WASM)
    export async function fetchDataFromWasm(pageNumber: number): Promise<any> {
        
        // 1. Ensure WASM is loaded (singleton logic)
        await ensureWasmInitialized();
    
        // 2. Prepare the parameters
        const params: FilterParams = {
            language: null,
            integration: null,
            crates: null,
            developmentkit: null,
            page: pageNumber.toString(),
            ids: null,
        };
    
        // 3. Call the bridge function
        try {
            const response = await fetch_from_js(params);
            return response;
        } catch (error) {
            console.error("WASM Bridge Error:", error);
            throw error;
        }
    }

Screenshot (Page 1)
<img width="1920" height="1080" alt="tauri1" src="https://github.com/user-attachments/assets/b6467bd0-d67f-4cae-9bf1-cd25d92bd6ba" />

Screenshot (Page 4)
<img width="1920" height="1080" alt="tauri2" src="https://github.com/user-attachments/assets/d6d49f4d-8a4c-4c46-ad70-2f199b7fd857" />

**@AIAmitSuri, Co-creator/Co-founder (🙏 Mata Shabri 🙏)**
