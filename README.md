# BHILANI Interop SDK Suite by kantini, chanchali

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
<img width="1920" height="1017" alt="tauri1" src="https://github.com/user-attachments/assets/b6cdb603-7b6d-4ee0-a61f-d749c5d76205" />

Screenshot (Page 4)
<img width="1920" height="1015" alt="tauri2" src="https://github.com/user-attachments/assets/bf776469-e6e3-4165-93da-27e614548b64" />

**🙏 Mata Shabri 🙏**
