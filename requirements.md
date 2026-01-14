# Project Requirements: Resume Generator

## Goal
Build a local CLI tool and web interface that converts a YAML data file into an aesthetically pleasing, ATS-optimized PDF resume.

## Core Features
1. **Data Ingestion**
   - Must accept either a `resume.yaml` or `resume.json` file as the single source of truth.
   - Both formats must conform to the standard [JSON Resume](https://jsonresume.org/schema/) schema structure.
   - Auto-detect input format based on file extension (`.yaml`/`.yml` or `.json`).
   - Native JSON Resume support allows users to import existing resumes from the JSON Resume ecosystem.

2. **Live Preview (The "Editor")**
   - A local React web server that renders the resume in real-time.
   - Hot-reload: When the resume file (`resume.yaml` or `resume.json`) is saved, the browser view must update immediately.
   - Basic UI controls to switch between different visual themes.

3. **PDF Generation**
   - "Export to PDF" button/command.
   - Output must be selectable text (not an image) for ATS compatibility.
   - Must allow setting paper size (Letter/A4).

4. **Scaffolding**
   - Command `init` to generate a blank resume template for new users.
   - Support `--format yaml` (default) or `--format json` flag to choose output format.

## Technical Constraints
- **Frontend:** React + Vite (Fast, lightweight).
- **Styling:** Tailwind CSS (Easy for Claude to iterate on designs).
- **PDF Engine:** Puppeteer (Headless Chrome for high-fidelity rendering).
- **Language:** TypeScript (Strict typing prevents schema errors).