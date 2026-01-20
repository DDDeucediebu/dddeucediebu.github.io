# SPA Architecture Guidelines (DiebuAtelier)

## Core Principle
**Do Not Drop The Beat.**
The primary technical constraint of this website is to **keep the background music playing continuous** while the user navigates between pages.
To achieve this, the site operates as a "Soft SPA" (Single Page Application).

## Critical Rules for Future Development

### 1. Navigation
*   **Strict Prohibition**: Never allow the browser to perform a full page reload.
    *   ❌ `window.location.href = "..."`
    *   ❌ `<a href="..." target="_self">` (without interception)
    *   ❌ `<form action="...">`
*   **Correct Implementation**:
    *   ✅ Use standard `<a href="page.html">` tags. The global router in `main.js` automatically intercepts these.
    *   ✅ If JavaScript navigation is absolutely necessary, use `loadPage('page.html')`.

### 2. Adding New Pages
When adding a new HTML file (e.g., `event.html`):
1.  **Structure**: It MUST contain a `.content` container.
2.  **Router**: When `loadPage` fetches `event.html`, it parses the HTML, extracts the `.content` div, and replaces the current page's `.content`.
3.  **Sidebar**: The Sidebar and Audio Player are **never** replaced; they persist globally.

### 3. Adding New Interactive Components
If you add a new component (like a new Gallery or Form):
1.  **Initialization**: You must register its initialization logic in `initPageLogic()` in `main.js`.
    *   The router calls `initPageLogic()` after every page switch to "re-hydrate" the new HTML.
2.  **Event Delegation**: Prefer delegating events to `document` or static parents if possible, or re-bind them in your init function.

## How to Verify
Before finishing any task:
1.  Play music in the sidebar.
2.  Navigate to your new page.
3.  **If the music stops, you have broken the build.** Go back and fix the navigation link.
