import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, W as WandSparkles, D as Download, E as ExternalLink } from "./index-BswHPZfj.js";
import { B as Badge } from "./badge-DldjBNgd.js";
import { B as Button } from "./button-RJc8STgg.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CwQygHmS.js";
import { T as Textarea } from "./textarea-DLv4I17j.js";
import { S as Sparkles } from "./sparkles-D6UFf9v9.js";
import { R as RefreshCw } from "./refresh-cw-R5Bd-4Cq.js";
import "./index-Bx21pQed.js";
import "./index-BdAFL0UN.js";
import "./index-DP0dbc0v.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
];
const Film = createLucideIcon("film", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
];
const Music = createLucideIcon("music", __iconNode);
function ImageGenerator() {
  const [prompt, setPrompt] = reactExports.useState("");
  const [imageUrl, setImageUrl] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [imageError, setImageError] = reactExports.useState(false);
  const generate = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageError(false);
    const newSeed = Math.floor(Math.random() * 1e5);
    const encoded = encodeURIComponent(prompt.trim());
    const url = `https://image.pollinations.ai/prompt/${encoded}?width=512&height=512&seed=${newSeed}&nologo=true`;
    setImageUrl(url);
  };
  const handleImageLoad = () => {
    setLoading(false);
    setImageError(false);
  };
  const handleImageError = () => {
    setLoading(false);
    setImageError(true);
  };
  const suggestions = [
    "A diagram showing photosynthesis process for science class",
    "Cartoon map of India showing major rivers for geography",
    "A friendly robot teaching mathematics to children",
    "Solar system with labeled planets in colorful space",
    "Human digestive system diagram for biology study",
    "Historical scene of Indian independence movement"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-4 border border-purple-500/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-5 h-5 text-purple-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white", children: "AI Image Generator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-600 text-white text-xs", children: "Free" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm mb-4", children: "Describe any image and AI will create it for you instantly." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        "data-ocid": "ai_create.image.textarea",
        placeholder: "Describe the image you want to create...",
        value: prompt,
        onChange: (e) => setPrompt(e.target.value),
        className: "bg-slate-800/80 border-slate-600 text-white placeholder:text-slate-500 min-h-[80px] mb-3"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "ai_create.image.primary_button",
          onClick: generate,
          disabled: !prompt.trim() || loading,
          className: "bg-purple-600 hover:bg-purple-700 text-white flex-1",
          children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin mr-2" }),
            "Generating..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-4 h-4 mr-2" }),
            "Generate Image"
          ] })
        }
      ),
      imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "ai_create.image.secondary_button",
          onClick: generate,
          variant: "outline",
          className: "border-purple-500 text-purple-300",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mb-2", children: "Try these ideas:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: suggestions.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": `ai_create.image_suggestion.item.${i + 1}`,
          onClick: () => setPrompt(s),
          className: "text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-2 py-1 rounded-full transition-colors",
          children: s.length > 40 ? `${s.slice(0, 40)}...` : s
        },
        s
      )) })
    ] }),
    imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden border border-purple-500/30 bg-slate-900", children: [
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "ai_create.image.loading_state",
          className: "flex items-center justify-center h-64",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-purple-400 mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: "Creating your image..." })
          ] })
        }
      ),
      imageError ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "ai_create.image.error_state",
          className: "flex flex-col items-center justify-center h-64 p-6 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-red-900/40 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-6 h-6 text-red-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 font-semibold text-sm mb-1", children: "Image generation failed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xs mb-4 max-w-xs", children: "This can happen due to content filters or network issues. Try a different description." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "ai_create.image.secondary_button",
                onClick: generate,
                size: "sm",
                variant: "outline",
                className: "border-purple-500 text-purple-300 hover:bg-purple-900/40",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 mr-2" }),
                  "Try Again"
                ]
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: imageUrl,
            alt: "AI Generated",
            onLoad: handleImageLoad,
            onError: handleImageError,
            className: `w-full rounded-xl transition-opacity ${loading ? "opacity-0 h-0" : "opacity-100"}`
          }
        ),
        !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 truncate max-w-xs", children: prompt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: imageUrl,
              target: "_blank",
              rel: "noreferrer",
              className: "flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                "Save"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
function SongGenerator() {
  var _a;
  const [topic, setTopic] = reactExports.useState("");
  const [style, setStyle] = reactExports.useState("rap");
  const [lyrics, setLyrics] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const styles = [
    { id: "rap", label: "Rap / Hip-Hop" },
    { id: "song", label: "Pop Song" },
    { id: "poem", label: "Hindi Poem" },
    { id: "mnemonic", label: "Memory Trick" }
  ];
  const generateLyrics = () => {
    if (!topic.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const t = topic.trim();
      let generated = "";
      if (style === "rap") {
        generated = `🎤 RAP: ${t.toUpperCase()}

[Verse 1]
Listen up students, let me tell you about ${t}
It's in the syllabus, so you gotta know it flat
Remember the formula, keep it in your brain
Study it once more, then study it again

[Chorus]
${t}, yeah we learning today
${t}, gonna ace this on exam day
Understand the concept, don't just memorize
With knowledge like this, we gonna rise rise rise

[Verse 2]
Open up your textbook, chapter by chapter
Smart Notes and Q&A, getting smarter and smarter
Board exams coming, but we're not afraid
Dubal DS E-learning Hub got us made

[Bridge]
Repeat it, practice it, write it down
With every answer correct, you're wearing the crown

[Outro]
So that's the lesson on ${t}
Dubal DS, we keep it lit! 🔥`;
      } else if (style === "song") {
        generated = `🎵 SONG: ${t}

[Verse 1]
Under the golden light of learning
We open our books with hearts that are yearning
${t} is the topic for today
Let knowledge guide us all the way

[Chorus]
Oh ${t}, flowing through my mind
Every formula and concept, one of a kind
With every chapter, I grow strong and bright
Studying ${t} with all my might

[Verse 2]
From morning to evening, pages we turn
Every lesson, a new thing to learn
${t} holds the key to understand
With Dubal DS, knowledge is at hand

[Bridge]
Don't give up when it gets tough
Keep revising, you've got what it takes
Success awaits beyond these pages
History is written by those who study

[Outro]
So sing it with me, students today
${t} will light our way 🌟`;
      } else if (style === "poem") {
        generated = `📜 HINDI POEM: ${t}

${t} की बात सुनो ध्यान से,
इस विषय को समझो आसान से।
किताब खोलो, नोट्स लो हाथ में,
ज्ञान मिलेगा, हर बात में।

परीक्षा में जब यह आएगा,
तुम्हारा उत्तर चमकाएगा।
Dubal DS के साथ पढ़ो रोज़,
सफलता मिलेगी, खुलेगा हर दरवाज़।

${t} है नाम तेरा,
ज्ञान का दीप जले सबेरा।
हर बच्चा पढ़े, हर बच्चा बढ़े,
शिक्षा की राह पर चढ़ते रहे। 📚`;
      } else {
        generated = `🧠 MEMORY TRICK for: ${t}

📌 ACRONYM METHOD:
Create a word from first letters of key points

📌 STORY METHOD:
Imagine a short story connecting all facts about ${t}
Visualize each fact as a character in the story

📌 RHYME TRICK:
"To remember ${t}, just think of..."
Make a silly rhyme with the key terms

📌 VISUAL METHOD:
Draw a diagram or mind-map of ${t}
Connect related concepts with arrows

📌 REPEAT METHOD:
Write it 5 times = Remember for 1 day
Teach someone else = Remember forever

💡 EXAM TIP:
Revise ${t} the night before exam
Read once slowly, then recall without looking
If you can recall 80% = You're ready! ✅`;
      }
      setLyrics(generated);
      setLoading(false);
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-900/40 to-teal-900/40 rounded-xl p-4 border border-green-500/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-5 h-5 text-green-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white", children: "AI Song & Lyrics Generator" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm mb-4", children: "Turn any study topic into a song, rap, poem, or memory trick!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        "data-ocid": "ai_create.song.textarea",
        placeholder: "Enter a topic (e.g. Photosynthesis, Newton's Laws, French Revolution)",
        value: topic,
        onChange: (e) => setTopic(e.target.value),
        className: "bg-slate-800/80 border-slate-600 text-white placeholder:text-slate-500 min-h-[70px] mb-3"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: styles.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "ai_create.song_style.toggle",
        onClick: () => setStyle(s.id),
        className: `px-3 py-1 rounded-full text-sm font-medium transition-all ${style === s.id ? "bg-green-600 text-white shadow-lg" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`,
        children: s.label
      },
      s.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        "data-ocid": "ai_create.song.primary_button",
        onClick: generateLyrics,
        disabled: !topic.trim() || loading,
        className: "bg-green-600 hover:bg-green-700 text-white w-full mb-4",
        children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin mr-2" }),
          "Composing..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-4 h-4 mr-2" }),
          "Generate ",
          (_a = styles.find((s) => s.id === style)) == null ? void 0 : _a.label
        ] })
      }
    ),
    lyrics && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 rounded-xl p-4 border border-green-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-sm font-medium", children: "Generated Content" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var _a2;
              return (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(lyrics);
            },
            className: "text-xs text-slate-400 hover:text-white",
            children: "Copy"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-slate-200 text-sm whitespace-pre-wrap font-sans leading-relaxed", children: lyrics })
    ] }),
    lyrics && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 bg-slate-800/50 rounded-xl border border-green-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-300 font-medium mb-2", children: "🎵 Turn this into real music:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://suno.com",
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-1 px-3 py-1.5 bg-green-700 hover:bg-green-600 text-white text-sm rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
              "Suno AI (Free)"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://udio.com",
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-1 px-3 py-1.5 bg-teal-700 hover:bg-teal-600 text-white text-sm rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
              "Udio AI (Free)"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-2", children: "Copy your lyrics and paste into these free tools to generate actual music audio." })
    ] })
  ] }) });
}
function VideoGenerator() {
  var _a;
  const [topic, setTopic] = reactExports.useState("");
  const [vtype, setVtype] = reactExports.useState("explainer");
  const [script, setScript] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const vtypes = [
    { id: "explainer", label: "Explainer Video" },
    { id: "shortfilm", label: "Short Film" },
    { id: "reel", label: "30-sec Reel" },
    { id: "animation", label: "Animation Script" }
  ];
  const generateScript = () => {
    if (!topic.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const t = topic.trim();
      let generated = "";
      if (vtype === "explainer") {
        generated = `🎬 EXPLAINER VIDEO SCRIPT: ${t}

DURATION: 2-3 minutes

━━━ SCENE 1: HOOK (0-15 sec) ━━━
[Visual: Bold title card with ${t}]
Narrator: "Did you know about ${t}? Let's find out!"
[Animated intro with upbeat music]

━━━ SCENE 2: INTRODUCTION (15-45 sec) ━━━
[Visual: Animated character introducing the topic]
Narrator: "Today we're going to learn about ${t}. This is one of the most important topics in your syllabus."
[Show textbook reference and chapter number]

━━━ SCENE 3: MAIN CONTENT (45 sec - 2 min) ━━━
[Visual: Step-by-step animated diagrams]
Narrator: "First, let's understand the basics..."
• Point 1: [First key concept of ${t}]
• Point 2: [Second key concept]
• Point 3: [Third key concept]
[Show formula/diagram if applicable]

━━━ SCENE 4: REAL-LIFE EXAMPLE (2-2:30 min) ━━━
[Visual: Real world application]
Narrator: "In real life, ${t} is used when..."
[Show relatable examples for students]

━━━ SCENE 5: EXAM TIPS (2:30-3 min) ━━━
[Visual: Exam paper close-up]
Narrator: "For your board exam, remember these key points about ${t}:"
✅ Key fact 1
✅ Key fact 2
✅ Key formula or definition

━━━ OUTRO ━━━
[Visual: Dubal DS E-learning Hub logo]
Narrator: "Keep studying with Dubal DS E-learning Hub. All the best! 📚"`;
      } else if (vtype === "reel") {
        generated = `📱 30-SECOND REEL SCRIPT: ${t}

[0-3 sec] Hook:
"${t} explained in 30 seconds! 🔥"
[Fast zoom in / trending audio]

[3-15 sec] Key Points (fast cuts):
⚡ Point 1 about ${t}
⚡ Point 2 about ${t}
⚡ Point 3 about ${t}
[Each point = 3-4 second cut with text overlay]

[15-25 sec] One example:
"Here's how ${t} works in real life..."
[Single clear visual / animation]

[25-30 sec] CTA:
"Save this! Exam season is coming 📌"
#${t.replace(/\s+/g, "")} #StudyTips #BoardExams #DubalDS

🎵 Suggested BGM: Lo-fi study beats`;
      } else if (vtype === "shortfilm") {
        generated = `🎭 SHORT FILM SCRIPT: Learning ${t}

TITLE: "The Day I Understood ${t}"
DURATION: 5 minutes
GENRE: Educational Drama

━━━ ACT 1: THE PROBLEM ━━━
[Scene: Student looking stressed at textbook]
RAHUL: "I don't understand ${t} at all! Exam is tomorrow!"
[Friend enters]
PRIYA: "Relax! Let me explain it simply."

━━━ ACT 2: THE LESSON ━━━
[Scene: Two students sitting together]
PRIYA: "Okay, so ${t} is basically..."
[Explains concept in simple language]
RAHUL: "Oh! So that means..."
[Student understands - lightbulb moment animation]

━━━ ACT 3: PRACTICE ━━━
[Scene: Both solving questions together]
NARRATOR: "They practiced ${t} questions all night."
[Montage of studying, writing, solving]

━━━ ACT 4: SUCCESS ━━━
[Scene: Exam hall, student writing confidently]
NARRATOR: "The next day..."
RAHUL: [Smiling] "I know every answer about ${t}!"

━━━ CREDITS ━━━
"Study Smart with Dubal DS E-learning Hub" 🌟`;
      } else {
        generated = `🎨 ANIMATION SCRIPT: ${t}

STYLE: 2D Whiteboard Animation
DURATION: 90 seconds

[Frame 1 - 0-5s]
Blank whiteboard. Hand draws title: "${t}"
Sound: Marker squeaking

[Frame 2 - 5-20s]
Hand draws simple diagram of ${t}
Labels appear one by one with pop sound
Voiceover: "This is ${t}. Let me show you how it works."

[Frame 3 - 20-50s]
Step-by-step process shown as connected boxes
Arrows animate between steps
Key terms highlighted in yellow
Voiceover explains each step clearly

[Frame 4 - 50-70s]
Formula or definition written in big letters
Underlined with emphasis animation
Voiceover: "The most important thing to remember is..."

[Frame 5 - 70-90s]
Checkmark animation: "Key Points Covered!"
Dubal DS logo animates in
Voiceover: "Now you understand ${t}. Practice more at Dubal DS!"

📤 EXPORT: 1080p MP4, landscape for YouTube / portrait for Reels`;
      }
      setScript(generated);
      setLoading(false);
    }, 1400);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-xl p-4 border border-orange-500/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-5 h-5 text-orange-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white", children: "AI Video Script Generator" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm mb-4", children: "Generate a full video script for any study topic. Use it with free video tools to create actual videos." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        "data-ocid": "ai_create.video.textarea",
        placeholder: "Enter a topic (e.g. Photosynthesis, Trigonometry, Indian Independence)",
        value: topic,
        onChange: (e) => setTopic(e.target.value),
        className: "bg-slate-800/80 border-slate-600 text-white placeholder:text-slate-500 min-h-[70px] mb-3"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: vtypes.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "ai_create.video_type.toggle",
        onClick: () => setVtype(v.id),
        className: `px-3 py-1 rounded-full text-sm font-medium transition-all ${vtype === v.id ? "bg-orange-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`,
        children: v.label
      },
      v.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        "data-ocid": "ai_create.video.primary_button",
        onClick: generateScript,
        disabled: !topic.trim() || loading,
        className: "bg-orange-600 hover:bg-orange-700 text-white w-full mb-4",
        children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin mr-2" }),
          "Writing Script..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4 mr-2" }),
          "Generate ",
          (_a = vtypes.find((v) => v.id === vtype)) == null ? void 0 : _a.label,
          " Script"
        ] })
      }
    ),
    script && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 rounded-xl p-4 border border-orange-500/20 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400 text-sm font-medium", children: "Video Script Ready" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var _a2;
              return (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(script);
            },
            className: "text-xs text-slate-400 hover:text-white",
            children: "Copy Script"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-slate-200 text-sm whitespace-pre-wrap font-sans leading-relaxed max-h-96 overflow-y-auto", children: script })
    ] }),
    script && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-800/50 rounded-xl border border-orange-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-orange-300 font-medium mb-2", children: "🎬 Create the actual video:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://canva.com/video",
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-1 px-2 py-2 bg-orange-700 hover:bg-orange-600 text-white text-xs rounded-lg text-center justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
              "Canva Video"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://clipchamp.com",
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-1 px-2 py-2 bg-red-700 hover:bg-red-600 text-white text-xs rounded-lg text-center justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
              "Clipchamp"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.kapwing.com",
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-1 px-2 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg text-center justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
              "Kapwing"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://invideo.io",
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-1 px-2 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg text-center justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
              "InVideo AI"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-2", children: "Copy the script above and paste into any of these free tools to produce the full video." })
    ] })
  ] }) });
}
function AICreatePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-3 shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
        "AI Creative Studio"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold text-white mb-1", children: "Create with AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: "Generate images, songs, and videos using artificial intelligence" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "image", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-3 w-full mb-6 bg-slate-800 border border-slate-700 rounded-xl h-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            "data-ocid": "ai_create.image.tab",
            value: "image",
            className: "flex items-center gap-1.5 data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Image" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            "data-ocid": "ai_create.song.tab",
            value: "song",
            className: "flex items-center gap-1.5 data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Song" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            "data-ocid": "ai_create.video.tab",
            value: "video",
            className: "flex items-center gap-1.5 data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Video" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageGenerator, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "song", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SongGenerator, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "video", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoGenerator, {}) })
    ] })
  ] });
}
export {
  AICreatePage as default
};
