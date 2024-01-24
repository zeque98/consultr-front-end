/* eslint-disable unicorn/prevent-abbreviations */
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
