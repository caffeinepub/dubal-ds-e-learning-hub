import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  ExternalLink,
  Film,
  ImageIcon,
  Loader2,
  Music,
  RefreshCw,
  Sparkles,
  Wand2,
} from "lucide-react";
import { useState } from "react";

// ── Image Generator ───────────────────────────────────────────────────────────
function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const generate = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageError(false);
    const newSeed = Math.floor(Math.random() * 100000);
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
    "Historical scene of Indian independence movement",
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-4 border border-purple-500/30">
        <div className="flex items-center gap-2 mb-3">
          <ImageIcon className="w-5 h-5 text-purple-400" />
          <h3 className="font-bold text-white">AI Image Generator</h3>
          <Badge className="bg-purple-600 text-white text-xs">Free</Badge>
        </div>
        <p className="text-slate-400 text-sm mb-4">
          Describe any image and AI will create it for you instantly.
        </p>

        <Textarea
          data-ocid="ai_create.image.textarea"
          placeholder="Describe the image you want to create..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="bg-slate-800/80 border-slate-600 text-white placeholder:text-slate-500 min-h-[80px] mb-3"
        />

        <div className="flex gap-2 mb-4">
          <Button
            data-ocid="ai_create.image.primary_button"
            onClick={generate}
            disabled={!prompt.trim() || loading}
            className="bg-purple-600 hover:bg-purple-700 text-white flex-1"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 mr-2" />
                Generate Image
              </>
            )}
          </Button>
          {imageUrl && (
            <Button
              data-ocid="ai_create.image.secondary_button"
              onClick={generate}
              variant="outline"
              className="border-purple-500 text-purple-300"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Suggestions */}
        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">Try these ideas:</p>
          <div className="flex flex-wrap gap-1">
            {suggestions.map((s, i) => (
              <button
                type="button"
                key={s}
                data-ocid={`ai_create.image_suggestion.item.${i + 1}`}
                onClick={() => setPrompt(s)}
                className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-2 py-1 rounded-full transition-colors"
              >
                {s.length > 40 ? `${s.slice(0, 40)}...` : s}
              </button>
            ))}
          </div>
        </div>

        {/* Generated Image */}
        {imageUrl && (
          <div className="rounded-xl overflow-hidden border border-purple-500/30 bg-slate-900">
            {loading && (
              <div
                data-ocid="ai_create.image.loading_state"
                className="flex items-center justify-center h-64"
              >
                <div className="text-center">
                  <Loader2 className="w-8 h-8 animate-spin text-purple-400 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">
                    Creating your image...
                  </p>
                </div>
              </div>
            )}
            {imageError ? (
              <div
                data-ocid="ai_create.image.error_state"
                className="flex flex-col items-center justify-center h-64 p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-red-900/40 flex items-center justify-center mb-3">
                  <ImageIcon className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-red-400 font-semibold text-sm mb-1">
                  Image generation failed
                </p>
                <p className="text-slate-400 text-xs mb-4 max-w-xs">
                  This can happen due to content filters or network issues. Try
                  a different description.
                </p>
                <Button
                  data-ocid="ai_create.image.secondary_button"
                  onClick={generate}
                  size="sm"
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-900/40"
                >
                  <RefreshCw className="w-3.5 h-3.5 mr-2" />
                  Try Again
                </Button>
              </div>
            ) : (
              <>
                <img
                  src={imageUrl}
                  alt="AI Generated"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  className={`w-full rounded-xl transition-opacity ${loading ? "opacity-0 h-0" : "opacity-100"}`}
                />
                {!loading && (
                  <div className="p-3 flex justify-between items-center">
                    <p className="text-xs text-slate-500 truncate max-w-xs">
                      {prompt}
                    </p>
                    <a
                      href={imageUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300"
                    >
                      <Download className="w-3 h-3" />
                      Save
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Song / Lyrics Generator ───────────────────────────────────────────────────
function SongGenerator() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("rap");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);

  const styles = [
    { id: "rap", label: "Rap / Hip-Hop" },
    { id: "song", label: "Pop Song" },
    { id: "poem", label: "Hindi Poem" },
    { id: "mnemonic", label: "Memory Trick" },
  ];

  const generateLyrics = () => {
    if (!topic.trim()) return;
    setLoading(true);

    // Generate educational lyrics based on topic and style
    setTimeout(() => {
      const t = topic.trim();
      let generated = "";
      if (style === "rap") {
        generated = `🎤 RAP: ${t.toUpperCase()}\n\n[Verse 1]\nListen up students, let me tell you about ${t}\nIt's in the syllabus, so you gotta know it flat\nRemember the formula, keep it in your brain\nStudy it once more, then study it again\n\n[Chorus]\n${t}, yeah we learning today\n${t}, gonna ace this on exam day\nUnderstand the concept, don't just memorize\nWith knowledge like this, we gonna rise rise rise\n\n[Verse 2]\nOpen up your textbook, chapter by chapter\nSmart Notes and Q&A, getting smarter and smarter\nBoard exams coming, but we're not afraid\nDubal DS E-learning Hub got us made\n\n[Bridge]\nRepeat it, practice it, write it down\nWith every answer correct, you're wearing the crown\n\n[Outro]\nSo that's the lesson on ${t}\nDubal DS, we keep it lit! 🔥`;
      } else if (style === "song") {
        generated = `🎵 SONG: ${t}\n\n[Verse 1]\nUnder the golden light of learning\nWe open our books with hearts that are yearning\n${t} is the topic for today\nLet knowledge guide us all the way\n\n[Chorus]\nOh ${t}, flowing through my mind\nEvery formula and concept, one of a kind\nWith every chapter, I grow strong and bright\nStudying ${t} with all my might\n\n[Verse 2]\nFrom morning to evening, pages we turn\nEvery lesson, a new thing to learn\n${t} holds the key to understand\nWith Dubal DS, knowledge is at hand\n\n[Bridge]\nDon't give up when it gets tough\nKeep revising, you've got what it takes\nSuccess awaits beyond these pages\nHistory is written by those who study\n\n[Outro]\nSo sing it with me, students today\n${t} will light our way 🌟`;
      } else if (style === "poem") {
        generated = `📜 HINDI POEM: ${t}\n\n${t} की बात सुनो ध्यान से,\nइस विषय को समझो आसान से।\nकिताब खोलो, नोट्स लो हाथ में,\nज्ञान मिलेगा, हर बात में।\n\nपरीक्षा में जब यह आएगा,\nतुम्हारा उत्तर चमकाएगा।\nDubal DS के साथ पढ़ो रोज़,\nसफलता मिलेगी, खुलेगा हर दरवाज़।\n\n${t} है नाम तेरा,\nज्ञान का दीप जले सबेरा।\nहर बच्चा पढ़े, हर बच्चा बढ़े,\nशिक्षा की राह पर चढ़ते रहे। 📚`;
      } else {
        generated = `🧠 MEMORY TRICK for: ${t}\n\n📌 ACRONYM METHOD:\nCreate a word from first letters of key points\n\n📌 STORY METHOD:\nImagine a short story connecting all facts about ${t}\nVisualize each fact as a character in the story\n\n📌 RHYME TRICK:\n"To remember ${t}, just think of..."\nMake a silly rhyme with the key terms\n\n📌 VISUAL METHOD:\nDraw a diagram or mind-map of ${t}\nConnect related concepts with arrows\n\n📌 REPEAT METHOD:\nWrite it 5 times = Remember for 1 day\nTeach someone else = Remember forever\n\n💡 EXAM TIP:\nRevise ${t} the night before exam\nRead once slowly, then recall without looking\nIf you can recall 80% = You're ready! ✅`;
      }
      setLyrics(generated);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-900/40 to-teal-900/40 rounded-xl p-4 border border-green-500/30">
        <div className="flex items-center gap-2 mb-3">
          <Music className="w-5 h-5 text-green-400" />
          <h3 className="font-bold text-white">AI Song & Lyrics Generator</h3>
        </div>
        <p className="text-slate-400 text-sm mb-4">
          Turn any study topic into a song, rap, poem, or memory trick!
        </p>

        <Textarea
          data-ocid="ai_create.song.textarea"
          placeholder="Enter a topic (e.g. Photosynthesis, Newton's Laws, French Revolution)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="bg-slate-800/80 border-slate-600 text-white placeholder:text-slate-500 min-h-[70px] mb-3"
        />

        <div className="flex flex-wrap gap-2 mb-4">
          {styles.map((s) => (
            <button
              type="button"
              key={s.id}
              data-ocid="ai_create.song_style.toggle"
              onClick={() => setStyle(s.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                style === s.id
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <Button
          data-ocid="ai_create.song.primary_button"
          onClick={generateLyrics}
          disabled={!topic.trim() || loading}
          className="bg-green-600 hover:bg-green-700 text-white w-full mb-4"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Composing...
            </>
          ) : (
            <>
              <Music className="w-4 h-4 mr-2" />
              Generate {styles.find((s) => s.id === style)?.label}
            </>
          )}
        </Button>

        {lyrics && (
          <div className="bg-slate-900 rounded-xl p-4 border border-green-500/20">
            <div className="flex justify-between items-center mb-3">
              <span className="text-green-400 text-sm font-medium">
                Generated Content
              </span>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(lyrics)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Copy
              </button>
            </div>
            <pre className="text-slate-200 text-sm whitespace-pre-wrap font-sans leading-relaxed">
              {lyrics}
            </pre>
          </div>
        )}

        {lyrics && (
          <div className="mt-4 p-3 bg-slate-800/50 rounded-xl border border-green-500/20">
            <p className="text-sm text-green-300 font-medium mb-2">
              🎵 Turn this into real music:
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://suno.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 bg-green-700 hover:bg-green-600 text-white text-sm rounded-lg transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Suno AI (Free)
              </a>
              <a
                href="https://udio.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 bg-teal-700 hover:bg-teal-600 text-white text-sm rounded-lg transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Udio AI (Free)
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Copy your lyrics and paste into these free tools to generate
              actual music audio.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Video Script Generator ────────────────────────────────────────────────────
function VideoGenerator() {
  const [topic, setTopic] = useState("");
  const [vtype, setVtype] = useState("explainer");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const vtypes = [
    { id: "explainer", label: "Explainer Video" },
    { id: "shortfilm", label: "Short Film" },
    { id: "reel", label: "30-sec Reel" },
    { id: "animation", label: "Animation Script" },
  ];

  const generateScript = () => {
    if (!topic.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const t = topic.trim();
      let generated = "";
      if (vtype === "explainer") {
        generated = `🎬 EXPLAINER VIDEO SCRIPT: ${t}\n\nDURATION: 2-3 minutes\n\n━━━ SCENE 1: HOOK (0-15 sec) ━━━\n[Visual: Bold title card with ${t}]\nNarrator: "Did you know about ${t}? Let's find out!"\n[Animated intro with upbeat music]\n\n━━━ SCENE 2: INTRODUCTION (15-45 sec) ━━━\n[Visual: Animated character introducing the topic]\nNarrator: "Today we're going to learn about ${t}. This is one of the most important topics in your syllabus."\n[Show textbook reference and chapter number]\n\n━━━ SCENE 3: MAIN CONTENT (45 sec - 2 min) ━━━\n[Visual: Step-by-step animated diagrams]\nNarrator: "First, let's understand the basics..."\n• Point 1: [First key concept of ${t}]\n• Point 2: [Second key concept]\n• Point 3: [Third key concept]\n[Show formula/diagram if applicable]\n\n━━━ SCENE 4: REAL-LIFE EXAMPLE (2-2:30 min) ━━━\n[Visual: Real world application]\nNarrator: "In real life, ${t} is used when..."\n[Show relatable examples for students]\n\n━━━ SCENE 5: EXAM TIPS (2:30-3 min) ━━━\n[Visual: Exam paper close-up]\nNarrator: "For your board exam, remember these key points about ${t}:"\n✅ Key fact 1\n✅ Key fact 2\n✅ Key formula or definition\n\n━━━ OUTRO ━━━\n[Visual: Dubal DS E-learning Hub logo]\nNarrator: "Keep studying with Dubal DS E-learning Hub. All the best! 📚"`;
      } else if (vtype === "reel") {
        generated = `📱 30-SECOND REEL SCRIPT: ${t}\n\n[0-3 sec] Hook:\n"${t} explained in 30 seconds! 🔥"\n[Fast zoom in / trending audio]\n\n[3-15 sec] Key Points (fast cuts):\n⚡ Point 1 about ${t}\n⚡ Point 2 about ${t}\n⚡ Point 3 about ${t}\n[Each point = 3-4 second cut with text overlay]\n\n[15-25 sec] One example:\n"Here's how ${t} works in real life..."\n[Single clear visual / animation]\n\n[25-30 sec] CTA:\n"Save this! Exam season is coming 📌"\n#${t.replace(/\s+/g, "")} #StudyTips #BoardExams #DubalDS\n\n🎵 Suggested BGM: Lo-fi study beats`;
      } else if (vtype === "shortfilm") {
        generated = `🎭 SHORT FILM SCRIPT: Learning ${t}\n\nTITLE: "The Day I Understood ${t}"\nDURATION: 5 minutes\nGENRE: Educational Drama\n\n━━━ ACT 1: THE PROBLEM ━━━\n[Scene: Student looking stressed at textbook]\nRAHUL: "I don't understand ${t} at all! Exam is tomorrow!"\n[Friend enters]\nPRIYA: "Relax! Let me explain it simply."\n\n━━━ ACT 2: THE LESSON ━━━\n[Scene: Two students sitting together]\nPRIYA: "Okay, so ${t} is basically..."\n[Explains concept in simple language]\nRAHUL: "Oh! So that means..."\n[Student understands - lightbulb moment animation]\n\n━━━ ACT 3: PRACTICE ━━━\n[Scene: Both solving questions together]\nNARRATOR: "They practiced ${t} questions all night."\n[Montage of studying, writing, solving]\n\n━━━ ACT 4: SUCCESS ━━━\n[Scene: Exam hall, student writing confidently]\nNARRATOR: "The next day..."\nRAHUL: [Smiling] "I know every answer about ${t}!"\n\n━━━ CREDITS ━━━\n"Study Smart with Dubal DS E-learning Hub" 🌟`;
      } else {
        generated = `🎨 ANIMATION SCRIPT: ${t}\n\nSTYLE: 2D Whiteboard Animation\nDURATION: 90 seconds\n\n[Frame 1 - 0-5s]\nBlank whiteboard. Hand draws title: "${t}"\nSound: Marker squeaking\n\n[Frame 2 - 5-20s]\nHand draws simple diagram of ${t}\nLabels appear one by one with pop sound\nVoiceover: "This is ${t}. Let me show you how it works."\n\n[Frame 3 - 20-50s]\nStep-by-step process shown as connected boxes\nArrows animate between steps\nKey terms highlighted in yellow\nVoiceover explains each step clearly\n\n[Frame 4 - 50-70s]\nFormula or definition written in big letters\nUnderlined with emphasis animation\nVoiceover: "The most important thing to remember is..."\n\n[Frame 5 - 70-90s]\nCheckmark animation: "Key Points Covered!"\nDubal DS logo animates in\nVoiceover: "Now you understand ${t}. Practice more at Dubal DS!"\n\n📤 EXPORT: 1080p MP4, landscape for YouTube / portrait for Reels`;
      }
      setScript(generated);
      setLoading(false);
    }, 1400);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-xl p-4 border border-orange-500/30">
        <div className="flex items-center gap-2 mb-3">
          <Film className="w-5 h-5 text-orange-400" />
          <h3 className="font-bold text-white">AI Video Script Generator</h3>
        </div>
        <p className="text-slate-400 text-sm mb-4">
          Generate a full video script for any study topic. Use it with free
          video tools to create actual videos.
        </p>

        <Textarea
          data-ocid="ai_create.video.textarea"
          placeholder="Enter a topic (e.g. Photosynthesis, Trigonometry, Indian Independence)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="bg-slate-800/80 border-slate-600 text-white placeholder:text-slate-500 min-h-[70px] mb-3"
        />

        <div className="flex flex-wrap gap-2 mb-4">
          {vtypes.map((v) => (
            <button
              type="button"
              key={v.id}
              data-ocid="ai_create.video_type.toggle"
              onClick={() => setVtype(v.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                vtype === v.id
                  ? "bg-orange-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        <Button
          data-ocid="ai_create.video.primary_button"
          onClick={generateScript}
          disabled={!topic.trim() || loading}
          className="bg-orange-600 hover:bg-orange-700 text-white w-full mb-4"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Writing Script...
            </>
          ) : (
            <>
              <Film className="w-4 h-4 mr-2" />
              Generate {vtypes.find((v) => v.id === vtype)?.label} Script
            </>
          )}
        </Button>

        {script && (
          <div className="bg-slate-900 rounded-xl p-4 border border-orange-500/20 mb-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-orange-400 text-sm font-medium">
                Video Script Ready
              </span>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(script)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Copy Script
              </button>
            </div>
            <pre className="text-slate-200 text-sm whitespace-pre-wrap font-sans leading-relaxed max-h-96 overflow-y-auto">
              {script}
            </pre>
          </div>
        )}

        {script && (
          <div className="p-3 bg-slate-800/50 rounded-xl border border-orange-500/20">
            <p className="text-sm text-orange-300 font-medium mb-2">
              🎬 Create the actual video:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://canva.com/video"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2 py-2 bg-orange-700 hover:bg-orange-600 text-white text-xs rounded-lg text-center justify-center"
              >
                <ExternalLink className="w-3 h-3" />
                Canva Video
              </a>
              <a
                href="https://clipchamp.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2 py-2 bg-red-700 hover:bg-red-600 text-white text-xs rounded-lg text-center justify-center"
              >
                <ExternalLink className="w-3 h-3" />
                Clipchamp
              </a>
              <a
                href="https://www.kapwing.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg text-center justify-center"
              >
                <ExternalLink className="w-3 h-3" />
                Kapwing
              </a>
              <a
                href="https://invideo.io"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg text-center justify-center"
              >
                <ExternalLink className="w-3 h-3" />
                InVideo AI
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Copy the script above and paste into any of these free tools to
              produce the full video.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AICreatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-3 shadow-lg">
          <Sparkles className="w-4 h-4" />
          AI Creative Studio
        </div>
        <h1 className="text-2xl font-extrabold text-white mb-1">
          Create with AI
        </h1>
        <p className="text-slate-400 text-sm">
          Generate images, songs, and videos using artificial intelligence
        </p>
      </div>

      <Tabs defaultValue="image" className="w-full">
        <TabsList className="grid grid-cols-3 w-full mb-6 bg-slate-800 border border-slate-700 rounded-xl h-12">
          <TabsTrigger
            data-ocid="ai_create.image.tab"
            value="image"
            className="flex items-center gap-1.5 data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg font-medium"
          >
            <ImageIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Image</span>
          </TabsTrigger>
          <TabsTrigger
            data-ocid="ai_create.song.tab"
            value="song"
            className="flex items-center gap-1.5 data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg font-medium"
          >
            <Music className="w-4 h-4" />
            <span className="hidden sm:inline">Song</span>
          </TabsTrigger>
          <TabsTrigger
            data-ocid="ai_create.video.tab"
            value="video"
            className="flex items-center gap-1.5 data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg font-medium"
          >
            <Film className="w-4 h-4" />
            <span className="hidden sm:inline">Video</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="image">
          <ImageGenerator />
        </TabsContent>
        <TabsContent value="song">
          <SongGenerator />
        </TabsContent>
        <TabsContent value="video">
          <VideoGenerator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
