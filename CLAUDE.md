# Claude Code Instructions

## Commands
- `npm run dev`: Starts the Vite dev server.
- `npm run build`: Builds the static assets.
- `npm run pdf`: Executes the Puppeteer generation script.

## Coding Standards
- **Functional Components:** Use React functional components with Hooks.
- **Styling:** Use Tailwind utility classes. Do not create separate `.css` files unless absolutely necessary for print media queries.
- **Types:** All components must have TypeScript interfaces defined for their props.

## Behavior
- **Check Requirements:** Before starting any task, verify it aligns with `requirements.md`.
- **Mobile First:** Ensure the web preview looks good on mobile, but prioritize "Letter" dimensions for the PDF output.
- **Error Handling:** If YAML parsing fails, show a friendly error overlay in the web UI, do not crash the server.