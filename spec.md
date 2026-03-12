# Dubal DS E-learning Hub

## Current State
The app has Class 10 (CBSE), Class 12, JEE, NEET, Competitive Exams, SSB tabs with full ClassPage (Syllabus, Question Papers, Smart Notes, Chapter Q&A tabs). AICreatePage has an Image Generator using Pollinations AI, a Song/Lyrics Generator, and a Video Script Generator.

## Requested Changes (Diff)

### Add
- Maharashtra Board Class 10 tab in Navbar with same full ClassPage structure (Syllabus, Question Papers, Smart Notes, Chapter Q&A, Watch)
- Bengal Board (West Bengal Board / WBBSE) Class 10 tab in Navbar with same full ClassPage structure
- New Category enum values: `Maharashtra10` and `Bengal10` in types.ts
- New sections in App.tsx: `"maharashtra10"` and `"bengal10"`
- categoryMeta entries in ClassPage for both new boards with appropriate colors, labels, badges
- Maharashtra Board Class 10 syllabus data (Maths, Science, Social Science, English, Marathi, Hindi) in SyllabusPage
- Bengal Board Class 10 syllabus data (Maths, Physical Science, Life Science, History, Geography, English, Bengali) in SyllabusPage
- Maharashtra Board question paper links (Maha Board official: mahahsscboard.in) in QuestionPapersPage
- Bengal Board question paper links (WBBSE official: wbbse.wb.gov.in) in QuestionPapersPage
- Smart Notes content for Maharashtra & Bengal board subjects

### Modify
- `src/frontend/src/types.ts` — add `Maharashtra10 = "Maharashtra10"` and `Bengal10 = "Bengal10"` to Category enum
- `src/frontend/src/App.tsx` — add `"maharashtra10"` and `"bengal10"` to Section type, add routes
- `src/frontend/src/components/Navbar.tsx` — add nav items for Maharashtra 10 and Bengal 10 after the existing Class 10 tab
- `src/frontend/src/components/ClassPage.tsx` — add categoryMeta for Maharashtra10 and Bengal10
- `src/frontend/src/components/SyllabusPage.tsx` — add Maharashtra10 and Bengal10 subject/chapter data
- `src/frontend/src/components/QuestionPapersPage.tsx` — add Maharashtra10 and Bengal10 paper links
- `src/frontend/src/components/SmartNotesPage.tsx` — add Maharashtra10 and Bengal10 notes data
- `src/frontend/src/components/AICreatePage.tsx` — fix image error state: when image fails to load, show a clear error message with a retry button instead of a broken image

### Remove
- Nothing removed

## Implementation Plan
1. Update `types.ts` — add Maharashtra10 and Bengal10 to Category enum
2. Update `App.tsx` — add sections and routes for both boards
3. Update `Navbar.tsx` — add nav items for Maharashtra 10 (orange/saffron color) and Bengal 10 (green/teal color)
4. Update `ClassPage.tsx` — add categoryMeta for both new boards
5. Update `SyllabusPage.tsx` — add chapter data for Maharashtra10 (Maths, Science, Social Science, English, Marathi) and Bengal10 (Maths, Physical Science, Life Science, History, Geography, English, Bengali)
6. Update `QuestionPapersPage.tsx` — add paper links for both boards pointing to official board websites
7. Update `SmartNotesPage.tsx` — add notes entries for Maharashtra10 and Bengal10
8. Fix `AICreatePage.tsx` — add `imageError` state; in `handleImageError` set error state; show error UI instead of broken image; provide retry button
