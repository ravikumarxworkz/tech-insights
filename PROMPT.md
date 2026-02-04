# God Prompt for Tech Insights Project

Copy and paste this prompt into an AI coding assistant to generate the full application logic and components.

***

**Role:** You are an expert Senior Frontend Developer and UI/UX Designer.

**Task:** Create a modern, developer-centric "Tech Insights" blog application using **React.js (Standard/CRA) and Normal CSS**.

**Structure:**
1.  **Home Page:** A dashboard-style layout showing different categories: "Java", "Python", "DSA", and "Tips & Tricks".
2.  **Category Pages:** When I click "Java", show a list of card-based topics (e.g., "OOPs Concepts", "Java 8 Features").
3.  **Content View:** A dedicated component to display the articles. **Crucial:** It must support syntax highlighting for code blocks (use `react-syntax-highlighter` or similar) so my Java/Python code looks like it does in an IDE (e.g., Dracula or VS Code Dark theme).

**Design Requirements (Aesthetic):**
*   **Theme:** Dark mode by default (cyberpunk/developer vibe). Use deep blues/purples (`#0f0c29`, `#302b63`) and neon accents (Cyan/Pink) for buttons/links.
*   **Components:** Glassmorphism effects on cards. Animated transitions between pages.
*   **Navigation:** A top sticky navbar with a "Back to Portfolio" link.
*   **Footer:** "Built by Ravikumar | Tech For Good".

**Content Placeholders:**
*   Create one dummy article for **Java** (e.g., "Mastering Streams API").
*   Create one dummy article for **DSA** (e.g., "Binary Search Explained").

**Tech Stack:** 
*   React.js (Standard `react-scripts`)
*   Normal CSS (Modules or global `App.css`) - NO Tailwind
*   `react-router-dom` (for routing)
*   `react-syntax-highlighter` (for code snippets)

**Instructions:**
Please implement the `App.js`, `index.css`, and necessary components (Navbar, Sidebar, ArticleCard, CodeBlock) to achieve this.
