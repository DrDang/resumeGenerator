# ResumeGenerator
ResumeGenerator is a developer-centric resume authoring tool that bridges the gap between human-readable data and machine-parsable PDFs. By leveraging the JSON Resume standard and a YAML-first workflow, ResumeGenerator allows you to maintain your professional history in a clean, version-controllable format while generating beautiful, ATS-optimized resumes in real-time.

### ✨ Key Features
- YAML-First Authoring: Stop wrestling with JSON brackets or Word document formatting. Write your resume in clean, intuitive YAML.

- Live React Preview: A high-performance dev server (powered by Vite) that renders your changes instantly as you type.

- ATS-Engineered Themes: Built-in themes designed specifically to pass through Applicant Tracking Systems (ATS) without losing your personal brand.

- Single Source of Truth: Fully compatible with the JSON Resume schema. Import/export your data to any tool in the ecosystem.

- High-Fidelity PDF Export: Uses Puppeteer (Headless Chrome) to ensure the PDF you send is exactly what you see in the browser—perfectly paginated and text-searchable.

### 🛠 The Workflow
1. Initialize: Run rf init to generate your resume.yaml.

2. Edit: Populate your experience, skills, and projects in your favorite code editor.

3. Preview: View the live rendering in your browser with hot-reloading.

4. Export: Generate a production-ready PDF that recruiters (and their bots) will love.

### 🚀 Tech Stack
- Data: YAML / JSON Resume Schema

- Frontend: React + Vite + Tailwind CSS

- Engine: Node.js + js-yaml

- Generation: Puppeteer

---

### Why ResumeGenerator?
Most resume builders force you into a proprietary GUI or produce "pretty" PDFs that are unreadable by automated scanners. ResumeGenerator treats your resume like code:
- Portable: Your data is yours, stored in a simple text file.

- Versionable: Track your career growth via Git commits.

- Optimized: No more "parsing errors" on job boards.