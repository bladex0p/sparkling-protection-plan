
Fix the Cloudflare deploy by syncing the npm lockfile.

The current failure is no longer about Bun. Cloudflare is now correctly using npm, but it runs `npm clean-install` / `npm ci`, which requires `package-lock.json` to exactly match `package.json`.

I checked the files:
- `package.json` requires `@lovable.dev/vite-tanstack-config` `^1.4.0`
- `package-lock.json` still has `@lovable.dev/vite-tanstack-config` `^1.2.0`
- The lockfile is also missing `@lovable.dev/vite-plugin-hmr-gate@1.0.0`

## Plan

1. Regenerate the npm lockfile
   - Run npm install/update against the current `package.json`
   - This will update `package-lock.json` so Cloudflare’s `npm ci` step succeeds

2. Prevent Bun from coming back into the repo
   - Add `bun.lockb` to `.gitignore`
   - If `bun.lockb` exists locally, remove it from the project before committing

3. Keep Cloudflare deploy settings simple
   - Path: empty
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy --cwd dist/server`

4. Verify the project still builds
   - Run the production build locally after the lockfile is updated
   - Confirm Cloudflare can pass dependency install and reach the build/deploy steps

## Technical details

The actual repository change needed is small:
- Update `package-lock.json`
- Update `.gitignore` to include `bun.lockb`
- Do not change app routing or page code for this issue

After this is committed to GitHub, Cloudflare should stop failing at the dependency installation stage.