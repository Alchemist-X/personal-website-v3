# AGENTS.md

## Cursor Cloud specific instructions

This is a purely frontend React + Vite + TailwindCSS personal portfolio site. No backend, database, or external services required.

### Quick reference

- **Dev server**: `npm run dev` (Vite, default port 5173)
- **Type check**: `npx tsc --noEmit`
- **Build**: `npm run build` (runs `tsc && vite build`, outputs to `dist/`)
- **No lint script or test framework** is configured in `package.json`.

### Notes

- The build emits a CJS deprecation warning from Vite — this is harmless and expected with Vite 5 on Node 22.
- `postcss.config.js` triggers a `MODULE_TYPELESS_PACKAGE_JSON` warning because `package.json` lacks `"type": "module"`. This is cosmetic and does not affect the build.
