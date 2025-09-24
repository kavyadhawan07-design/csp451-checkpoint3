# WORKFLOWS.md

## 1. Purpose of Each Workflow

- **CI Workflow (`ci.yml`)**  
  Ensures code quality by running linting, testing, and build jobs every time new code is pushed or a pull request is created.

- **Dependency Check Workflow (`dependency-check.yml`)**  
  Runs daily to scan for outdated or vulnerable dependencies and creates an issue if any are found.

- **Deployment Workflow (`deploy.yml`)**  
  Automatically builds and deploys your project to **GitHub Pages** whenever changes are pushed to the `main` branch.

---

## 2. Trigger Conditions

- `ci.yml`: Runs on **push** or **pull request** to `main` or `develop`.
- `dependency-check.yml`: Runs **daily** using a cron schedule.
- `deploy.yml`: Runs on **push** to the `main` branch.

---

## 3. Job Dependencies

- In `ci.yml`:  
  - Linting → Testing → Build (each depends on the previous one finishing successfully).
- In `dependency-check.yml`:  
  - Single job runs independently on schedule.
- In `deploy.yml`:  
  - Build job runs first, then Deploy job runs.

---

## 4. Secrets Required

- **`GITHUB_TOKEN`** – Automatically provided by GitHub to allow deployment to the `gh-pages` branch.  
- No other secrets are needed unless external services are used.

---

## 5. Troubleshooting Guide

- ❌ **Permission denied error:**  
  Go to **Settings → Actions → General → Workflow permissions → Read and write**.

- ❌ **`gh-pages` branch not found:**  
  Let the deploy workflow run once to create the branch automatically.

- ❌ **Dependency check fails:**  
  Update dependencies locally and push again.

- ✅ **General tip:**  
  Always check **Actions → Run logs** for detailed error messages.
