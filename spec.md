# Dubal DS E-learning Hub

## Current State
WB NEET page has a Syllabus tab that simply renders the generic SyllabusPage with Category.NEET — it does not show the actual NTA NEET exam syllabus.

## Requested Changes (Diff)

### Add
- A dedicated WB NEET syllabus section inside WBNeetPage showing the actual NTA NEET 2024 syllabus (Physics, Chemistry, Biology) with chapter-wise topic lists and direct NCERT PDF links.

### Modify
- Replace the Syllabus tab in WBNeetPage from a generic SyllabusPage to a custom component `WBNeetSyllabusTab` with the real NEET syllabus.

### Remove
- Nothing removed

## Implementation Plan
1. Define actual NEET syllabus data: Physics (Class 11 & 12 chapters), Chemistry (Class 11 & 12 chapters), Biology/Botany & Zoology (Class 11 & 12 chapters) — each with NCERT PDF links and key topics listed.
2. Build WBNeetSyllabusTab component inside WBNeetPage.tsx showing subject tabs (Physics, Chemistry, Biology) → chapter cards with PDF button and topic list.
3. Replace the Syllabus TabsContent in WBNeetPage to use WBNeetSyllabusTab.
