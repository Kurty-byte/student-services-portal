# Student Services Portal

## Project Description

A TypeScript-based foundation for the University Student Services Portal. This project demonstrates strict type safety, generic API response structures, runtime validation using custom TypeScript type guards, and automated code-quality tooling.

## Requirements

- **Node.js**: v20.0.0 or higher
- **pnpm**: v9.0.0 or higher
- **Git**

## Installation Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd student-services-portal
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## How to Run the Project

- **Development Mode** (executes TypeScript directly with `tsx`):
  ```bash
  pnpm dev
  ```
- **Build / Compile** (compiles TypeScript to JavaScript via `tsc`):
  ```bash
  pnpm build
  ```

## How to Run Linting

- **Check for lint errors**:
  ```bash
  pnpm lint
  ```
- **Automatically fix lint errors**:
  ```bash
  pnpm lint:fix
  ```

## How to Format Code

- **Format all files using Prettier**:
  ```bash
  pnpm format
  ```

## Development Workflow

1. **Branch or Setup**: Ensure all dependencies are installed via `pnpm install`.
2. **Develop & Test**: Implement types and functions in `src/`, running `pnpm dev` to test changes in real-time.
3. **Format Code**: Run `pnpm format` to ensure uniform code style according to Prettier rules.
4. **Lint & Verify**: Run `pnpm lint` to check for syntax and type issues, fixing errors where necessary (`pnpm lint:fix`).
5. **Compile Check**: Run `pnpm build` to ensure error-free compilation before committing code.

## AI Usage Policy

- **Educational Assistance**: AI tools may be used for ideation, syntax reference, debugging assistance, and conceptual understanding.
- **Code Ownership & Comprehension**: All AI-assisted code must be reviewed, thoroughly understood, and verified by the author.
- **Integrity**: Generated code must not be submitted blindly; all runtime behaviors and type safety guarantees must be tested and validated against project requirements.
