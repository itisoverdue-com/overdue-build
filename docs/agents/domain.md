# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root, or
- **`CONTEXT-MAP.md`** at the repo root if it exists; it points at one `CONTEXT.md` per context. Read each one relevant to the topic.
- **`docs/adr/`** for ADRs that touch the area being worked on. In multi-context repos, also check `src/<context>/docs/adr/` for context-scoped decisions.

If any of these files do not exist, proceed silently. Do not flag their absence or suggest creating them upfront. The producer skill (`/grill-with-docs`) creates them lazily when terms or decisions get resolved.

## File structure

Single-context repo:

```text
/
|-- CONTEXT.md
|-- docs/adr/
|   |-- 0001-example-decision.md
|   `-- 0002-example-decision.md
`-- app/
```

Multi-context repo:

```text
/
|-- CONTEXT-MAP.md
|-- docs/adr/
`-- src/
    |-- frontend/
    |   |-- CONTEXT.md
    |   `-- docs/adr/
    `-- backend/
        |-- CONTEXT.md
        `-- docs/adr/
```

## Use the glossary's vocabulary

When output names a domain concept in an issue title, refactor proposal, hypothesis, or test name, use the term as defined in `CONTEXT.md`. Do not drift to synonyms the glossary explicitly avoids.

If the concept needed is not in the glossary yet, either reconsider the language or note it as a gap for `/grill-with-docs`.

## Flag ADR conflicts

If output contradicts an existing ADR, surface it explicitly instead of silently overriding it.
