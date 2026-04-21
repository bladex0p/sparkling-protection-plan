
## Update bun lockfile

Run `bun install` in the project root to regenerate `bun.lockb` against the current Bun version, then let the auto-sync push the updated lockfile to GitHub.

### Steps
1. Execute `bun install` at the project root — this reads `package.json` and rewrites the lockfile in place. No dependency versions change; only the lockfile format/metadata is refreshed.
2. Verify `bun.lockb` was modified (check file timestamp / git status).
3. The Lovable ↔ GitHub bidirectional sync will automatically commit and push the updated `bun.lockb` to your connected repository — no manual git commands needed.

### Notes
- `package.json` will not be modified.
- `bunfig.toml` currently has `saveTextLockfile = false`, so the regenerated lockfile stays as the binary `bun.lockb` (not converted to text `bun.lock`). Let me know if you'd prefer to switch to the text format at the same time.
- This requires switching out of plan mode to execute the install command.
