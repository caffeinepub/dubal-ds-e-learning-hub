# Dubal DS E-learning Hub

## Current State
- App has a Navbar with 11 nav tabs (Home, Syllabus, Papers, AI Help, Notes, Dict, Calc, Translate, News, Govt, SSB) plus an external English Hub link
- HomePage has a Tabs component with tabs: "AI Help", "Class 10", "Class 12", "JEE", "NEET"
- No dedicated nav tabs for Class 10, Class 12, JEE, NEET in the main Navbar
- No AI voice welcome greeting on app load
- App name is "Dubal DS E-learning Hub"

## Requested Changes (Diff)

### Add
- 4 new dedicated nav tabs in Navbar: "Class 10", "Class 12", "JEE", "NEET" — each navigates directly to a class-specific page (ClassPage) showing Syllabus, Papers, Smart Notes, Q&A tabs all in one place for that class/category
- A new ClassPage component that takes a Category prop and renders category-specific content tabs (Syllabus, Papers, Smart Notes, Q&A) without needing to change sections
- AI voice welcome greeting: when the app first loads (on initial mount, using browser Web Speech Synthesis API), the AI speaks "Welcome to Dubal DS E-learning Hub" in a clear voice. This plays once per session (use sessionStorage to avoid replaying on tab switch)
- Voice reply option in AI Help: AI responses are also spoken aloud via Web Speech Synthesis when the user receives an AI reply (text-to-speech), with a toggle to enable/disable voice replies

### Modify
- App.tsx: add 4 new Section values: "class10", "class12", "jee", "neet" — each maps to the corresponding Category
- Navbar: add 4 new nav tabs for Class 10, Class 12, JEE, NEET (with appropriate icons, colors, and animations matching existing style). These should appear after "Home" and before or alongside "Syllabus". Since there are now many tabs, the mobile grid may need to be 4 columns with more rows.
- HomePage: keep the existing Tabs (AI Help, Class 10, 12, JEE, NEET) — the home page default tab remains "AI Help" as it currently is
- AIHelpPage: add voice reply toggle button (speaker icon) in the AI Chat area so AI responses are spoken aloud when voice is on

### Remove
- Nothing removed

## Implementation Plan
1. Add new Section values "class10" | "class12" | "jee" | "neet" to App.tsx Section type
2. Create ClassPage.tsx component — renders a page for a specific Category with internal tabs: Syllabus, Papers, Smart Notes, Chapter Q&A. Reuses SyllabusPage, QuestionPapersPage, SmartNotesPage components with the category pre-selected and locked.
3. Update App.tsx to lazy-load ClassPage and render it for the 4 new sections, passing the appropriate Category
4. Update Navbar to add 4 new nav items for "class10", "class12", "jee", "neet" with icons (GraduationCap or similar), unique colors, and the same animated button style
5. Add AI welcome voice greeting in App.tsx using useEffect + window.speechSynthesis on first load (sessionStorage gate)
6. Add voice reply toggle in AIHelpPage AIChatTab — when enabled, speak AI responses aloud using speechSynthesis
