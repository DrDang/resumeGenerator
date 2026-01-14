# Architectural Concepts

## Data Flow
1. **Source:** User edits `data/resume.yaml`.
2. **Watcher:** A Node.js watcher (`chokidar`) detects changes.
3. **Transformer:** Script validates YAML and converts it to a typed JSON object (ResumeSchema).
4. **Store:** React Context pushes the new JSON object to the ResumeView component.
5. **Render:** The view updates without a full page refresh.

## Separation of Concerns
* **Content vs. Style:** The actual resume data must NOT contain HTML. All bolding/formatting happens in the React components, not the YAML strings.
* **Themes:** We will use a "Theme Adapter" pattern.
    * `src/themes/Modern.tsx`
    * `src/themes/Classic.tsx`
    * All themes accept the exact same `ResumeData` prop.

## PDF Strategy
We will not generate PDFs from scratch. We will use "Print CSS".
* The App will have a route `/print` that renders *only* the resume (no sidebars, no buttons).
* Puppeteer will visit `localhost:3000/print` and save the page as PDF.