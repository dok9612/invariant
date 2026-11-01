<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.


# Invariant Lab — Engineering Rules

## Project objective
Build a production-quality algorithm learning platform.
Prioritize transferable SWE fundamentals over framework trivia.

## Architecture
- Keep algorithm logic independent of React.
- Keep state transitions pure where practical.
- Separate presentation, application logic, and persistence.
- Define explicit data contracts.
- Validate untrusted input at boundaries.

## Correctness
- Every exercise has a formal invariant.
- Every transition must preserve its invariant.
- Add tests for domain logic.
- Explain assumptions and edge cases.

## AI-assisted development
For each new feature, explain:
1. Engineering invariants I must understand.
2. Operational knowledge needed to debug or change it.
3. Framework details safe to scaffold or vibe-code.

Do not introduce unnecessary dependencies or abstractions.
Do not modify unrelated files.
Do not run npm audit fix --force automatically.
```

<!-- END:nextjs-agent-rules -->
