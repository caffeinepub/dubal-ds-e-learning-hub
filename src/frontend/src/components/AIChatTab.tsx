import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  Copy,
  Mic,
  MicOff,
  Paperclip,
  Plus,
  RefreshCw,
  Send,
  Sparkles,
  Trash2,
  User,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

// ── Web Speech API types ──────────────────────────────────────────────────────
interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: ISpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}
interface ISpeechRecognitionEvent {
  results: { [index: number]: { [index: number]: { transcript: string } } };
}
type SpeechRecognitionConstructor = new () => ISpeechRecognition;

function getSpeechRecognition(): SpeechRecognitionConstructor | null {
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

// ── Voice Search Hook ─────────────────────────────────────────────────────────
function useVoiceInput(
  onResult: (text: string) => void,
  onAutoSend?: (text: string) => void,
) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const onResultRef = useRef(onResult);
  const onAutoSendRef = useRef(onAutoSend);
  onResultRef.current = onResult;
  onAutoSendRef.current = onAutoSend;

  useEffect(() => {
    const SpeechRecognitionAPI = getSpeechRecognition();
    if (SpeechRecognitionAPI) {
      setIsSupported(true);
      const rec = new SpeechRecognitionAPI();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-IN";
      rec.onresult = (event: ISpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        onResultRef.current(transcript);
        setIsListening(false);
        // Auto-send after a short delay so input state can update
        if (onAutoSendRef.current && transcript.trim()) {
          setTimeout(() => onAutoSendRef.current?.(transcript.trim()), 200);
        }
      };
      rec.onerror = () => setIsListening(false);
      rec.onend = () => setIsListening(false);
      recognitionRef.current = rec;
    }
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || isListening) return;
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      setIsListening(false);
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { isListening, isSupported, startListening, stopListening };
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
  displayText?: string; // shown in bubble (may differ from text sent to AI)
  timestamp: Date;
  isError?: boolean;
}

interface AttachedFile {
  name: string;
  text: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT =
  "You are an expert education assistant for Indian students studying CBSE Class 10, Class 12, JEE, NEET, and competitive exams (UPSC, SSC, Bank PO, NDA, SSB). Answer any question clearly and thoroughly. For math and science, use step-by-step examples. You can also answer general knowledge, current affairs, history, geography, English grammar, and any other topic a student may ask. Keep answers detailed but easy to understand.";

const STARTER_QUESTIONS = [
  "Explain Newton's laws of motion with examples",
  "What is photosynthesis? Explain the process",
  "Solve: x² + 5x + 6 = 0 step by step",
  "What is SSB interview process?",
  "Explain the French Revolution",
  "What is DNA replication?",
  "Describe the process of electrolysis",
  "What are the main causes of World War I?",
];

const MAX_CHARS = 1000;
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB

// ── Utility ───────────────────────────────────────────────────────────────────
function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function extractTextFromArrayBuffer(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let text = "";
  let run = "";
  for (let i = 0; i < bytes.length; i++) {
    const c = bytes[i];
    if (c >= 32 && c <= 126) {
      run += String.fromCharCode(c);
    } else {
      if (run.length > 4) text += `${run} `;
      run = "";
    }
  }
  if (run.length > 4) text += run;
  return text.replace(/\s{3,}/g, "  ").trim();
}

async function fetchAIResponse(userMessage: string): Promise<string> {
  const encodedPrompt = encodeURIComponent(userMessage);
  const encodedSystem = encodeURIComponent(SYSTEM_PROMPT);
  const url = `https://text.pollinations.ai/${encodedPrompt}?model=openai&system=${encodedSystem}&seed=42`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const text = await response.text();
  return text.trim();
}

const AI_AVATAR_SRC =
  "/assets/uploads/Screenshot_2026-02-22-23-49-52-28_6012fa4d4ddec268fc5c7112cbb265e7-2-1.jpg";

// ── Typing Indicator ──────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div
      className="flex items-end gap-3 mb-4"
      data-ocid="aihelp.chat.loading_state"
    >
      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-md ring-2 ring-indigo-400/50">
        <img
          src={AI_AVATAR_SRC}
          alt="डुबल डी एस सेवा केंद्र"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1.5 h-5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-indigo-500"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Message Bubble ────────────────────────────────────────────────────────────
function MessageBubble({
  message,
  index,
  speakingId,
  onSpeak,
}: {
  message: ChatMessage;
  index: number;
  speakingId: string | null;
  onSpeak: (id: string, text: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";
  const isSpeaking = speakingId === message.id;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const displayContent = message.displayText ?? message.text;

  return (
    <motion.div
      className={`flex items-end gap-3 mb-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      data-ocid={`aihelp.chat.message.${index + 1}`}
    >
      {/* Avatar */}
      {isUser ? (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
          <User className="w-4 h-4 text-white" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-md ring-2 ring-indigo-400/50">
          <img
            src={AI_AVATAR_SRC}
            alt="डुबल डी एस सेवा केंद्र"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Bubble */}
      <div
        className={`flex flex-col gap-1 max-w-[80%] ${isUser ? "items-end" : "items-start"}`}
      >
        {message.isError ? (
          <div
            className="bg-destructive/10 border border-destructive/30 text-destructive rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm"
            data-ocid="aihelp.chat.error_state"
          >
            {displayContent}
          </div>
        ) : isUser ? (
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed shadow-md">
            {displayContent}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed shadow-sm text-foreground whitespace-pre-wrap">
            {displayContent}
          </div>
        )}

        {/* Footer: timestamp + copy + speak */}
        <div
          className={`flex items-center gap-2 px-1 ${isUser ? "flex-row-reverse" : "flex-row"}`}
        >
          <span className="text-xs text-muted-foreground">
            {formatTime(message.timestamp)}
          </span>
          {!isUser && !message.isError && (
            <>
              <button
                type="button"
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground transition-colors p-0.5 rounded"
                aria-label="Copy message"
              >
                {copied ? (
                  <Check className="w-3 h-3 text-green-500" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
              <button
                type="button"
                onClick={() => onSpeak(message.id, message.text)}
                className={`transition-colors p-0.5 rounded ${
                  isSpeaking
                    ? "text-indigo-500 hover:text-destructive"
                    : "text-muted-foreground hover:text-indigo-500"
                }`}
                aria-label={isSpeaking ? "Stop speaking" : "Speak this reply"}
                title={isSpeaking ? "Stop speaking" : "Hear this reply"}
                data-ocid={`aihelp.chat.speak_button.${index + 1}`}
              >
                {isSpeaking ? (
                  <VolumeX className="w-3 h-3" />
                ) : (
                  <Volume2 className="w-3 h-3" />
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Empty State ───────────────────────────────────────────────────────────────
function EmptyState({
  onSuggestionClick,
}: { onSuggestionClick: (q: string) => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-full py-8 px-4 text-center"
      data-ocid="aihelp.chat.empty_state"
    >
      <motion.div
        className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow-xl ring-4 ring-indigo-400/40"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <img
          src={AI_AVATAR_SRC}
          alt="डुबल डी एस सेवा केंद्र"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <h3 className="font-display font-bold text-xl text-foreground mb-1">
        डुबल डी एस सेवा केंद्र मे आपका स्वागत है
      </h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
        कोई भी सवाल पूछें — पढ़ाई, परीक्षा, सामान्य ज्ञान, या कुछ भी।
        <br />
        <span className="text-xs opacity-70">
          Ask anything in English or Hindi
        </span>
        <br />
        <span className="text-xs opacity-50 italic flex items-center justify-center gap-1 mt-1">
          <Volume2 className="w-3 h-3 inline-block" />
          Voice greeting plays on first visit
        </span>
      </p>
      <div className="flex items-center gap-1.5 mb-4">
        <Sparkles className="w-4 h-4 text-indigo-500" />
        <span className="text-xs font-semibold text-indigo-600">
          Powered by Advanced AI
        </span>
      </div>

      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Try these questions
      </p>
      <div className="flex flex-wrap gap-2 justify-center max-w-lg">
        {STARTER_QUESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => onSuggestionClick(q)}
            className="text-xs px-3 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-foreground hover:bg-indigo-500/15 hover:border-indigo-500/50 transition-all font-medium text-left"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Welcome Voice Greeting ────────────────────────────────────────────────────
const WELCOME_GREETING = "Thank you for choosing Dubal DS E-learning Hub";
const WELCOME_SESSION_KEY = "dubaldsDSWelcomeVoicePlayed";

function useWelcomeGreeting(onPlay: () => void) {
  // Store onPlay in a ref so it never needs to be in the dependency array
  const onPlayRef = useRef(onPlay);
  onPlayRef.current = onPlay;

  useEffect(() => {
    if (!window.speechSynthesis) return;
    if (sessionStorage.getItem(WELCOME_SESSION_KEY)) return;

    const timer = setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(WELCOME_GREETING);
      utterance.lang = "en-IN";
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      utterance.onend = () => {
        sessionStorage.setItem(WELCOME_SESSION_KEY, "true");
      };
      utterance.onerror = () => {
        sessionStorage.setItem(WELCOME_SESSION_KEY, "true");
      };
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
      // Mark immediately to prevent double-play on fast re-mounts
      sessionStorage.setItem(WELCOME_SESSION_KEY, "true");
      onPlayRef.current();
    }, 800);

    return () => clearTimeout(timer);
  }, []);
}

// ── Welcome Toast Banner ──────────────────────────────────────────────────────
function WelcomeBanner({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome-banner"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg border border-indigo-400/40 bg-gradient-to-r from-indigo-700 to-violet-700 text-white text-sm font-semibold pointer-events-none select-none whitespace-nowrap"
          aria-live="polite"
        >
          {/* Animated voice wave — static bars, no keying needed */}
          <span className="flex items-end gap-0.5">
            {(
              [
                { h: 1, delay: 0 },
                { h: 2, delay: 0.1 },
                { h: 3, delay: 0.2 },
                { h: 2, delay: 0.3 },
                { h: 1, delay: 0.4 },
              ] as const
            ).map(({ h, delay }) => (
              <motion.span
                key={delay}
                className="block w-0.5 bg-white/80 rounded-full"
                style={{ height: `${h * 4}px` }}
                animate={{ scaleY: [1, 2.2, 1] }}
                transition={{
                  duration: 0.7,
                  repeat: Number.POSITIVE_INFINITY,
                  delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </span>
          🎙 Welcome to Dubal DS E-learning Hub
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main Chat Component ───────────────────────────────────────────────────────
export default function AIChatTab() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [voiceReplyEnabled, setVoiceReplyEnabled] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [attachedFile, setAttachedFile] = useState<AttachedFile | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Play welcome greeting once per session
  useWelcomeGreeting(() => {
    setShowWelcomeBanner(true);
    setTimeout(() => setShowWelcomeBanner(false), 4000);
  });

  const handleVoiceResult = useCallback((text: string) => {
    setInputValue((prev) => (prev ? `${prev} ${text}` : text));
    setTimeout(() => textareaRef.current?.focus(), 100);
  }, []);

  // sendMessage is defined below; use a ref to avoid circular dependency
  const sendMessageRef = useRef<(text: string) => Promise<void>>(
    async () => {},
  );

  const { isListening, isSupported, startListening, stopListening } =
    useVoiceInput(handleVoiceResult, (text) => sendMessageRef.current(text));

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: messages and isLoading are intentional triggers
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  // Auto-resize textarea
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > MAX_CHARS) return;
    setInputValue(value);

    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
  };

  // ── Per-message speak handler ────────────────────────────────────────────
  const handleSpeak = useCallback(
    (id: string, text: string) => {
      if (!window.speechSynthesis) return;
      if (speakingId === id) {
        // Already speaking this one — stop
        window.speechSynthesis.cancel();
        setSpeakingId(null);
        return;
      }
      // Cancel any current speech then start new
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-IN";
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    },
    [speakingId],
  );

  // Auto-speak AI replies when voice reply toggle is ON
  const speakText = useCallback(
    (id: string, text: string) => {
      if (!voiceReplyEnabled || !window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-IN";
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    },
    [voiceReplyEnabled],
  );

  // ── File attachment ──────────────────────────────────────────────────────
  const processAttachment = (file: File) => {
    setFileError("");
    if (file.size > MAX_FILE_SIZE) {
      setFileError(
        `File is too large. Maximum size is 50 MB (file is ${(file.size / 1024 / 1024).toFixed(1)} MB).`,
      );
      return;
    }
    const ext = file.name.split(".").pop()?.toLowerCase();
    const imageExts = ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg"];
    const isImage =
      imageExts.includes(ext ?? "") || file.type.startsWith("image/");

    if (isImage) {
      // For images: store as data URL so AI can describe it; show placeholder text
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setAttachedFile({
          name: file.name,
          text: `[Image attached: ${file.name}]\nData URL: ${dataUrl.substring(0, 200)}...\nDescribe or analyze this image.`,
        });
      };
      reader.onerror = () => setFileError("Failed to read image.");
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    if (ext === "txt" || file.type === "text/plain") {
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setAttachedFile({ name: file.name, text: result || "" });
      };
      reader.onerror = () => setFileError("Failed to read file.");
      reader.readAsText(file);
    } else {
      // PDF and all other binary files
      reader.onload = (e) => {
        const buffer = e.target?.result as ArrayBuffer;
        const extracted = extractTextFromArrayBuffer(buffer);
        setAttachedFile({
          name: file.name,
          text:
            extracted.length > 50
              ? extracted
              : `(Could not extract readable text from ${file.name}. It may be image-based or a binary format.)`,
        });
      };
      reader.onerror = () => setFileError(`Failed to read ${file.name}.`);
      reader.readAsArrayBuffer(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) processAttachment(selected);
    // Reset input so same file can be re-attached
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Keep sendMessageRef up-to-date so voice auto-send always uses latest version
  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setInputValue("");
      setFileError("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }

      // Build what's shown in the user bubble
      const displayText = attachedFile
        ? `📎 ${attachedFile.name} attached\n\n${trimmed}`
        : trimmed;

      // Build what's sent to AI (prepend doc context if attached)
      const apiText = attachedFile
        ? `Document: ${attachedFile.name}\n\n${attachedFile.text}\n\nUser question: ${trimmed}`
        : trimmed;

      // Clear attachment after use
      setAttachedFile(null);

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        text: apiText,
        displayText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        const responseText = await fetchAIResponse(apiText);
        const aiId = `ai-${Date.now()}`;
        const aiMsg: ChatMessage = {
          id: aiId,
          role: "ai",
          text: responseText,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMsg]);
        speakText(aiId, responseText);
      } catch {
        const errMsg: ChatMessage = {
          id: `err-${Date.now()}`,
          role: "ai",
          text: "Couldn't reach AI — please check your internet connection and try again.",
          timestamp: new Date(),
          isError: true,
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setIsLoading(false);
        setTimeout(() => textareaRef.current?.focus(), 100);
      }
    },
    [isLoading, speakText, attachedFile],
  );

  // Keep ref updated
  useEffect(() => {
    sendMessageRef.current = sendMessage;
  }, [sendMessage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const handleClear = () => {
    abortControllerRef.current?.abort();
    setMessages([]);
    setInputValue("");
    setIsLoading(false);
    setAttachedFile(null);
    setFileError("");
    setSpeakingId(null);
    window.speechSynthesis?.cancel();
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const [plusMenuOpen, setPlusMenuOpen] = useState(false);
  const plusMenuRef = useRef<HTMLDivElement>(null);
  const plusButtonRef = useRef<HTMLButtonElement>(null);

  // Close plus menu on outside click
  useEffect(() => {
    if (!plusMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        plusMenuRef.current &&
        !plusMenuRef.current.contains(e.target as Node) &&
        plusButtonRef.current &&
        !plusButtonRef.current.contains(e.target as Node)
      ) {
        setPlusMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [plusMenuOpen]);

  const charsLeft = MAX_CHARS - inputValue.length;
  const canSend = inputValue.trim().length > 0 && !isLoading;

  return (
    <div className="flex flex-col h-full relative">
      {/* Welcome banner (absolute, overlays top of chat) */}
      <WelcomeBanner visible={showWelcomeBanner} />

      {/* Chat header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card/50 backdrop-blur-sm flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 shadow-md ring-2 ring-indigo-400/60">
            <img
              src={AI_AVATAR_SRC}
              alt="डुबल डी एस सेवा केंद्र"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">
              डुबल डी एस सेवा केंद्र
            </p>
            <p className="text-xs text-green-500 font-medium leading-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Online · Powered by AI
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {/* Voice reply toggle — prominent, professional */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const next = !voiceReplyEnabled;
              setVoiceReplyEnabled(next);
              if (!next) {
                window.speechSynthesis?.cancel();
                setSpeakingId(null);
              }
            }}
            className={`gap-1.5 h-8 px-3 text-xs font-semibold transition-all duration-200 rounded-lg border ${
              voiceReplyEnabled
                ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white border-green-500 hover:from-green-500 hover:to-emerald-500 shadow-sm shadow-green-500/30"
                : "text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
            }`}
            data-ocid="aihelp.voice.toggle"
            aria-label={
              voiceReplyEnabled ? "Disable voice reply" : "Enable voice reply"
            }
            title={
              voiceReplyEnabled
                ? "Voice reply ON — click to mute"
                : "Enable AI voice reply"
            }
          >
            {voiceReplyEnabled ? (
              <>
                {/* Pulsing green dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <Volume2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Voice</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mute</span>
              </>
            )}
          </Button>

          {messages.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="text-muted-foreground hover:text-destructive gap-1.5 h-8"
              data-ocid="aihelp.chat.clear_button"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear
            </Button>
          )}
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 min-h-0">
        {messages.length === 0 && !isLoading ? (
          <EmptyState onSuggestionClick={(q) => sendMessage(q)} />
        ) : (
          <div>
            <AnimatePresence initial={false}>
              {messages.map((msg, idx) => (
                <MessageBubble
                  key={msg.id}
                  message={msg}
                  index={idx}
                  speakingId={speakingId}
                  onSpeak={handleSpeak}
                />
              ))}
            </AnimatePresence>
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".txt,.pdf,.jpg,.jpeg,.png,.gif,.webp,.bmp,.svg,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,.json,.xml,.md,image/*"
        className="sr-only"
        onChange={handleFileInputChange}
        aria-label="Attach file (up to 50 MB)"
      />

      {/* ── Professional Floating Input Card ─────────────────────────────── */}
      <div className="px-3 pb-3 pt-1 flex-shrink-0">
        {/* File error — above card */}
        <AnimatePresence>
          {fileError && (
            <motion.div
              key="file-error"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-2"
              data-ocid="aihelp.chat.error_state"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs font-medium">
                <X className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{fileError}</span>
                <button
                  type="button"
                  onClick={() => setFileError("")}
                  className="ml-auto hover:opacity-70 transition-opacity"
                  aria-label="Dismiss error"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The floating card */}
        <div className="rounded-2xl border border-border bg-card shadow-lg overflow-visible">
          {/* Attached file pill — inside card, at top */}
          <AnimatePresence>
            {attachedFile && (
              <motion.div
                key="attached-pill"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-3 pt-3 pb-0"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-sm font-medium max-w-full mb-1">
                  <span className="text-base">📎</span>
                  <span className="truncate max-w-[180px] text-xs text-indigo-700 dark:text-indigo-300">
                    {attachedFile.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    · up to 50 MB ✓
                  </span>
                  <button
                    type="button"
                    onClick={() => setAttachedFile(null)}
                    className="flex-shrink-0 text-muted-foreground hover:text-destructive transition-colors ml-0.5"
                    aria-label="Remove attached file"
                    data-ocid="aihelp.chat.close_button"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Textarea */}
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder={
              isListening
                ? "🎙 Listening… speak now"
                : "Ask any question… (Enter to send, Shift+Enter for new line)"
            }
            className="resize-none min-h-[52px] max-h-[120px] py-3.5 px-4 text-sm leading-relaxed border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent rounded-none rounded-t-2xl"
            disabled={isLoading}
            data-ocid="aihelp.chat.input"
            aria-label="Type your question"
            rows={1}
          />

          {/* Divider */}
          <div className="h-px bg-border/60 mx-3" />

          {/* Bottom strip: [+] · [char count] · [send] */}
          <div className="flex items-center gap-2 px-3 py-2 relative">
            {/* + button with popup */}
            <div className="relative flex-shrink-0">
              <button
                ref={plusButtonRef}
                type="button"
                onClick={() => setPlusMenuOpen((v) => !v)}
                disabled={isLoading}
                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  plusMenuOpen
                    ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-indigo-500/30"
                    : "bg-gradient-to-br from-slate-600 to-slate-700 text-white hover:from-slate-500 hover:to-slate-600"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="More options"
                aria-expanded={plusMenuOpen}
                data-ocid="aihelp.chat.open_modal_button"
              >
                <motion.span
                  animate={{ rotate: plusMenuOpen ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <Plus className="w-5 h-5" />
                </motion.span>
              </button>

              {/* Popup menu — appears above */}
              <AnimatePresence>
                {plusMenuOpen && (
                  <motion.div
                    ref={plusMenuRef}
                    key="plus-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute bottom-full left-0 mb-2 w-64 rounded-2xl border border-border bg-card shadow-2xl z-50 overflow-hidden"
                    data-ocid="aihelp.chat.popover"
                  >
                    {/* Upload Document */}
                    <button
                      type="button"
                      onClick={() => {
                        setPlusMenuOpen(false);
                        fileInputRef.current?.click();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/60 transition-colors text-left group"
                      data-ocid="aihelp.chat.upload_button"
                    >
                      <span className="w-9 h-9 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                        <Paperclip className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          Upload File
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          PDF, TXT, JPEG, PNG & more · up to 50 MB
                        </p>
                      </div>
                    </button>

                    {/* Divider */}
                    <div className="h-px bg-border mx-3" />

                    {/* Voice Reply toggle */}
                    <button
                      type="button"
                      onClick={() => {
                        const next = !voiceReplyEnabled;
                        setVoiceReplyEnabled(next);
                        if (!next) {
                          window.speechSynthesis?.cancel();
                          setSpeakingId(null);
                        }
                        setPlusMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/60 transition-colors text-left group"
                      data-ocid="aihelp.voice.toggle"
                    >
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          voiceReplyEnabled
                            ? "bg-green-500/15 group-hover:bg-green-500/25"
                            : "bg-muted group-hover:bg-muted/80"
                        }`}
                      >
                        {voiceReplyEnabled ? (
                          <Volume2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <VolumeX className="w-4 h-4 text-muted-foreground" />
                        )}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          Voice Reply
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {voiceReplyEnabled
                            ? "AI reads replies aloud"
                            : "Replies are silent"}
                        </p>
                      </div>
                      {/* Status indicator */}
                      <span
                        className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                          voiceReplyEnabled
                            ? "bg-green-500/15 text-green-700 dark:text-green-400"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {voiceReplyEnabled && (
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                        )}
                        {voiceReplyEnabled ? "ON" : "OFF"}
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standalone Voice Button */}
            {isSupported && (
              <button
                type="button"
                onClick={() => {
                  if (isListening) {
                    stopListening();
                  } else {
                    startListening();
                  }
                }}
                disabled={isLoading}
                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isListening
                    ? "bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-red-500/40 animate-pulse"
                    : "bg-gradient-to-br from-emerald-500 to-green-600 text-white hover:from-emerald-400 hover:to-green-500 shadow-emerald-500/30"
                }`}
                aria-label={
                  isListening ? "Stop voice input" : "Start voice input"
                }
                title={
                  isListening
                    ? "Stop — AI will reply automatically"
                    : "Speak your question (auto-sends when done)"
                }
                data-ocid="aihelp.chat.voice_button"
              >
                {isListening ? (
                  <MicOff className="w-4 h-4" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Listening indicator badge */}
            <AnimatePresence>
              {isListening && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Listening…
                </motion.span>
              )}
            </AnimatePresence>

            {/* Character count — spacer */}
            <span className="flex-1" />
            {inputValue.length > MAX_CHARS * 0.75 && (
              <span
                className={`text-xs tabular-nums mr-1 ${
                  charsLeft < 50
                    ? "text-destructive font-semibold"
                    : "text-muted-foreground/70"
                }`}
              >
                {charsLeft}
              </span>
            )}

            {/* Send button */}
            <Button
              onClick={() => sendMessage(inputValue)}
              disabled={!canSend}
              className="h-9 w-9 p-0 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 border-0 flex-shrink-0 shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
              data-ocid="aihelp.chat.send_button"
              aria-label="Send message"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 text-white animate-spin" />
              ) : (
                <Send className="w-4 h-4 text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Hint text — below card */}
        <p className="text-xs text-muted-foreground/60 mt-1.5 text-center">
          🎙 Voice auto-sends · + to upload files · Enter to send
        </p>
      </div>
    </div>
  );
}
