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

Screenshot 1
<img width="1920" height="1080" alt="Screenshot (194)" src="https://github.com/user-attachments/assets/456fbf61-49bf-47f9-8d61-b0ee982c021e" />
Screenshot 2
<img width="1920" height="1080" alt="Screenshot (193)" src="https://github.com/user-attachments/assets/4abe054c-9d24-4d4c-931a-55ea8c30d0aa" />

**@AIAmitSuri, Co-creator/Co-founder (🙏 Mata Shabri 🙏)**
