# Git Workflow Guidelines

This project uses **Husky** Git hooks to enforce consistent branch naming and commit message conventions.

## ✅ Requirements

Before committing code, make sure you follow these rules:

---

## 1️⃣ Branch Naming Convention

Your branch name **must match one of the following formats**:

| Branch Type | Example                                |
| ----------- | -------------------------------------- |
| `main`      | `main`                                 |
| `develop`   | `develop`                              |
| `feature`   | `feature/hub-1234-my-feature`          |
| `release`   | `release/hub-456-some-release`         |
| `hotfix`    | `hotfix/hub-789-urgent-fix`            |
| `Nested`    | `hub-101-task/hub-202-fix-login-issue` |

### ❌ Invalid Examples

- `fix/login-bug`
- `bug/123-broken`
- `hub-abc/xyz/123`
- `feature/login` (missing ticket)

If your branch name doesn’t follow these patterns, **the commit will be blocked** with a descriptive error.

---

## 2️⃣ Commit Message Convention

We use [`commitlint`](https://github.com/conventional-changelog/commitlint) to enforce **Conventional Commits**:

### ✅ Allowed Formats

```bash
type: short description
```

**Types**:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Formatting (no logic changes)
- `refactor`: Code refactoring
- `test`: Adding or fixing tests
- `chore`: Other changes (build, CI, tooling)

### ✅ Examples

```bash
feat: add login form
fix: handle null values in user data
docs: update README with new API usage
```

### ❌ Invalid Examples

```bash
- quick fix
- updated stuff
- fixed bug in prod
```

If your commit message is invalid, the commit will be rejected with an explanation.

### 💡 Tips

    Use git commit as usual, but ensure your message follows the required format.

    Run npm install after cloning the repo to ensure Husky hooks are initialized.

### 🧪 Troubleshooting

- If your **commit is rejected**:
  - Make sure your **branch name** follows the allowed pattern
  - Make sure your **commit message** follows the Conventional Commits format

Still stuck? Open the `.husky/` folder or `commitlint.config.js` and check the validation rules.

---

## 3️⃣ ESLint

Your commit will be blocked if there are any files that do not follow linting rules.

Useful commands:

To check linting errors in the codebase:

```bash
npm lint
```

To check linting errors + fix easily fixable errors in the codebase:

```bash
npm lintfix
```
