# Custom Development Guidelines

## Programming Language: TypeScript

**TypeScript Best Practices:**

- Use strict TypeScript configuration with `"strict": true`
- Prefer interfaces over type aliases for object shapes
- Use explicit return types for all public functions
- Avoid `any` type - use `unknown` or proper typing instead
- Use utility types (Pick, Omit, Partial) for type transformations
- Implement proper null/undefined checking

## Framework: React Native

## Code Style: Clean Code

**Clean Code Principles:**

- Write self-documenting code with meaningful names
- Keep functions small and focused on a single responsibility
- Avoid deep nesting and complex conditional statements
- Use consistent formatting and indentation
- Write code that tells a story and is easy to understand
- Refactor ruthlessly to eliminate code smells

## Testing: Vitest

**Testing Guidelines:**

- Write comprehensive unit tests for all business logic
- Follow the AAA pattern: Arrange, Act, Assert
- Maintain good test coverage (aim for 80%+ for critical paths)
- Write descriptive test names that explain the expected behavior
- Use test doubles (mocks, stubs, spies) appropriately
- Implement integration tests for API endpoints and user flows
- Keep tests fast, isolated, and deterministic

## Project-Specific Guidelines

# 🔧 Coding Standards

- All code must be **clean, readable, reusable, secure**, and written using **short, clear functions**.
- Avoid long or deeply nested logic. Split logic into:
  - Local helpers (if used only in that file)
  - Utils/service files (if shared)
- Any new util or service must include **accompanying unit tests**.
- Folder structure expectations:
  - `/components/ui` → smallest building blocks
  - `/components/common` → composed reusable components
  - `/screens` → higher-level UI
- Identify duplicated logic and replace it with a **shared implementation**, updating all callsites.
- Behavioural test coverage:
  - Shared logic → full behavioural coverage
  - Callers → test usage/interaction, not the shared behaviour
- File structure must follow this order:
  1. Imports
  2. File-specific constants (**UPPERCASE_WITH_UNDERSCORES**)
  3. Default exported function/class/component
  4. Helper functions
  5. Types
  6. Interfaces
- Avoid magic values; define constants at the top, e.g.:

  ```ts
  const DEFAULT_SOMETHING = 123;
  ```

# 🤖 AI Assistant Behaviour

- Keep explanations brief unless explicitly asked for detail.
- When a fix or refactor is obvious, **apply it directly** — do not ask for confirmation.
- If multiple valid approaches exist, briefly describe them and ask which direction to take.
- When code is provided, modify the code directly rather than explaining how to modify it.
- When asked to fix something, assume it means “fix it in code now” unless told otherwise.

# 📘 Documentation Requirements

## TS Docs

Add TS docs to:

- every exported method/function
- all utils

TS docs must include:

- a brief summary at the top
- parameter and return types
- usage examples for utils only (simple examples)
- no examples for regular functions unless needed

## README.md

Keep README.md up to date automatically when code changes.

- Components must include examples for each **variant** or major prop behaviour.
- Functions/services must include examples demonstrating **real business use-cases**, not just API shapes.

Any time code is added, modified, or removed:

- update TS docs
- update README.md  
  **without waiting for the user to prompt you**

# 🧪 Testing Requirements

## General Rules

- Every file must have a corresponding `*.test.ts[x]` file.
- When adding or removing code, update the tests automatically.
- Do not test private methods; test behaviour through public/protected APIs.
- Do not test other components’ logic:
  - `/ui` components test themselves
  - `/common` tests only its composed behaviour
  - screens test high-level UI presence and behaviour, not component internals

## Component Testing Philosophy

- Use React Testing Library (or React Native Testing Library).
- Test **UI output**, not internal functions.
- Example (do NOT test `isBlue()` directly):

  ```tsx
  <CustomComponent variant="blue" />
  ```

- Assert that the UI reflects the expected blue styling.

## Service / Controller Testing

- Test public methods directly with complete input/output coverage.
- Cover edge cases.
- Mock/stub dependencies; do not reproduce their behaviour in these tests.

## Test File Structure

At the top of each test file, after imports, define:

```tsx
const SELECTORS = {
  button: 'button-testid',
  header: 'header-testid',
};
```

Tests should reflect:

- business use-cases
- edge cases
- expected UI states

# 📁 Project Structure Requirements

Copilot should assume the project uses:

- src/
- components/
- ui/
- common/
- screens/
- utils/
- services/
- navigation/
- hooks/
- theme/

Any new code must be placed in the correct folder automatically.

# 🔥 Behaviour Override (Important)

To avoid unhelpful behaviour:

- Do not rewrite or restate instructions unless explicitly asked.
- Do not refuse to modify code due to uncertainty — ask clarifying questions only when multiple valid options exist.
- Assume the user’s intention is always to **change code**, not describe it.
- Always apply the fix rather than explaining the fix.

## AI Code Generation Preferences

When generating code, please:

- Generate complete, working code examples with proper imports
- Include inline comments for complex logic and business rules
- Follow the established patterns and conventions in this project
- Suggest improvements and alternative approaches when relevant
- Consider performance, security, and maintainability
- Include error handling and edge case considerations
- Generate appropriate unit tests when creating new functions
- Follow accessibility best practices for UI components
- Use semantic HTML and proper ARIA attributes when applicable
