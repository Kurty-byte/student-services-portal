# Agent Guidelines & Installed Skills

This document provides instructions, project context, and reference guides for AI agents working on the **Student Services Portal** codebase.

---

## 🛠️ Project Overview & Development Guidelines

The **Student Services Portal** is a TypeScript project emphasizing strict type safety, defensive programming without `any`, runtime type validation via custom type guards, and generic API response models.

### Key Commands

- **Development**: `pnpm dev` (Runs TypeScript code directly using `tsx`)
- **Build / Type Check**: `pnpm build` (`tsc --noEmit` or compilation check)
- **Lint**: `pnpm lint` / `pnpm lint:fix` (ESLint validation)
- **Format**: `pnpm format` (Prettier code formatting)

### Coding Standards for Agents

1. **Strict Type Safety**: Never use `any`. Use `unknown` with runtime type guards, generics, or discriminating unions.
2. **Defensive Edge Case Handling**: Provide safe fallbacks and handle variations (e.g., whitespace, casing, nullable values).
3. **Verification**: Always run `pnpm lint` and `pnpm build` after making modifications to ensure clean compilation and conformance.

---

## 📦 Installed Agent Skills

The repository includes custom agent skills configured under [`.agents/skills/`](file:///home/kurt/LabActs/student-services-portal/.agents/skills):

### 1. `find-skills`

- **Location**: [`.agents/skills/find-skills/SKILL.md`](file:///home/kurt/LabActs/student-services-portal/.agents/skills/find-skills/SKILL.md)
- **Source**: `vercel-labs/skills`
- **Description**: Helps discover and install agent skills from the open agent skills ecosystem when extending capabilities or searching for specialized tools, templates, and workflows.

#### When to Use:
- User asks "how do I do X", "find a skill for X", or "is there a skill that can..."
- User expresses interest in extending agent tools or capabilities for specific domains (e.g., testing, deployment, UI frameworks).
- Searching the ecosystem leaderboard (https://skills.sh/) or searching via the CLI.

#### Key Operations:
```bash
# Search for skills
npx skills find [query]

# Add a skill globally or locally
npx skills add <owner/repo@skill> -g -y

# Update installed skills
npx skills update
```

---

### 2. `typescript-magician`

- **Location**: [`.agents/skills/typescript-magician/SKILL.md`](file:///home/kurt/LabActs/student-services-portal/.agents/skills/typescript-magician/SKILL.md)
- **Source**: `mcollina/skills`
- **Description**: Expert guidance for designing complex generic types, refactoring `any` types to strict type-safe alternatives, crafting custom type guards and utility types, and resolving TypeScript compiler errors.

#### When to Use:
- Diagnosing and fixing TypeScript errors (`tsc --noEmit`).
- Eliminating `any` and replacing with strict types, generics, or type narrowing.
- Building complex inference patterns, conditional types, template literal types, mapped types, or brand/opaque types.
- Implementing robust custom type guards (`value is T`).

#### Workflow:
1. Run `pnpm build` (or `tsc --noEmit`) to identify exact compiler errors.
2. Analyze root cause and apply type-level programming patterns.
3. Replace loose types with generics or discriminating unions.
4. Verify changes compile cleanly with zero type errors.

#### Included Rule References:
Detailed pattern guides are available in [`.agents/skills/typescript-magician/rules/`](file:///home/kurt/LabActs/student-services-portal/.agents/skills/typescript-magician/rules):
- **Core Patterns**: `as-const-typeof.md`, `array-index-access.md`, `utility-types.md`
- **Advanced Generics**: `generics-basics.md`, `builder-pattern.md`, `deep-inference.md`
- **Type-Level Programming**: `conditional-types.md`, `infer-keyword.md`, `template-literal-types.md`, `mapped-types.md`
- **Type Safety**: `opaque-types.md`, `type-narrowing.md`, `function-overloads.md`
- **Debugging**: `error-diagnosis.md`

---

### 3. `ponytail`

- **Location**: [`.agents/skills/ponytail/SKILL.md`](file:///home/kurt/LabActs/student-services-portal/.agents/skills/ponytail/SKILL.md)
- **Description**: Enforces the simplest, shortest, and most minimal working solution (YAGNI). Promotes stdlib and native platform features over dependencies, and minimal code over boilerplate. Supports intensity levels: `lite`, `full` (default), and `ultra`.

#### When to Use:
- Writing, refactoring, fixing, reviewing, or designing code while avoiding over-engineering and bloat.
- When the user asks for "simplest solution", "minimal solution", "yagni", "lazy mode", "be lazy", or uses `/ponytail`.
- Questioning whether speculative features, unnecessary abstractions, or new dependencies need to exist at all.

#### Key Principles & Intensity Levels:
- **The Ladder**:
  1. Does this need to exist at all? (YAGNI)
  2. Already in this codebase? Reuse existing helpers/types.
  3. Stdlib does it? Use it.
  4. Native platform feature covers it? Use it.
  5. Already-installed dependency solves it? Use it.
  6. Can it be one line? One line.
  7. Minimum working code with root-cause bug fixes.
- **Intensity Levels**:
  - `lite`: Build requested solution, suggest lazier alternative in one line.
  - `full` (default): Enforce the ladder, shortest diff, code-first output.
  - `ultra`: YAGNI extremist; deletion before addition, challenge unnecessary requirements.

