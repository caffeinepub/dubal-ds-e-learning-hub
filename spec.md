# Dubal DS E-learning Hub

## Current State
The AI Help page (`AIHelpPage.tsx`) uses a static keyword-matching system that searches a pre-loaded QA bank and topic answers data. It does not connect to any real AI/LLM. Users type a question, and it finds the best match from local data. If no match is found, it shows "No Direct Answer Found".

## Requested Changes (Diff)

### Add
- A real conversational AI chat interface inside AI Help, powered by the Pollinations AI API (free, no API key needed) — `https://text.pollinations.ai/` endpoint
- A full DeepSeek-style chat UI: message bubbles (user on right, AI on left), typing indicator, scrollable history, copy-to-clipboard per message
- System prompt configured for education assistant: CBSE, JEE, NEET, competitive exams, general knowledge — any purpose
- The AI chat is the PRIMARY tab in AI Help (first tab, called "AI Chat")
- The existing "Ask AI" keyword search is kept as a second tab ("Quick Search")
- AI model used: `openai` via Pollinations text API (GET request to `https://text.pollinations.ai/{prompt}?model=openai&system={systemPrompt}`)
- Graceful error handling: if the API fails, show a friendly retry message

### Modify
- `AIHelpPage.tsx`: add tabbed layout with "AI Chat" as primary tab and "Quick Search" as secondary tab
- The header of AI Help updated to reflect the new conversational AI capability

### Remove
- Nothing removed — existing search is preserved as a tab

## Implementation Plan
1. Add `AIChatTab.tsx` component: full chat UI, handles API calls to Pollinations AI, manages message history array, shows typing animation, copy button per message
2. Modify `AIHelpPage.tsx` to use a two-tab layout: "AI Chat" (new) and "Quick Search" (existing content)
3. The Pollinations API is called directly from the frontend via fetch() using a GET request — no backend changes needed
4. System prompt: "You are an expert education assistant for Indian students studying CBSE Class 10, Class 12, JEE, NEET, and competitive exams. Answer any question clearly and thoroughly. For math/science use examples. You can also answer general knowledge, current affairs, and any other topic."
