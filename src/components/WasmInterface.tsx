'use client';
import { useState, useEffect, useRef } from 'react';
import wasmInit, { fetch_from_js } from "@aiamitsuri/interoperability-wrapper-wasm";

// Global variable to track if WASM is already loaded in this session
let isWasmLoaded = false;

export default function WasmInterface() {
  const [response, setResponse] = useState<string>("Initializing Wasm...");
  const [isDesktop, setIsDesktop] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    // 1. Detect Tauri
    if (typeof window !== 'undefined' && (window as any).__TAURI_INTERNALS__) {
      setIsDesktop(true);
    }

    // 2. Prevent double-initialization (Strict Mode fix)
    if (initialized.current) return;
    initialized.current = true;

    const runWasm = async () => {
      try {
        // Only run wasmInit if it hasn't been loaded yet
        if (!isWasmLoaded) {
          await wasmInit();
          isWasmLoaded = true;
        }

        const data = await fetch_from_js({ page: "1" });
        setResponse(JSON.stringify(data, null, 2));
      } catch (e) {
        console.error("WASM Error:", e);
        setResponse(`Error: ${e}`);
      }
    };

    runWasm();
  }, []);

  return (
     <main style={{ padding: '40px', fontFamily: 'monospace' }}>
       <h2>{isDesktop ? "Tauri Desktop" : "Tauri Browser"}</h2>
       <hr />
       <pre style={{ background: '#eee', padding: '20px' }}>{response}</pre>
     </main>
  );
}