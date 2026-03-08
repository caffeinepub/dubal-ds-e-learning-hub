import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Bot,
  Check,
  Copy,
  RefreshCw,
  Send,
  Sparkles,
  Trash2,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: Date;
  isError?: boolean;
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

// ── Utility ───────────────────────────────────────────────────────────────────
function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
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

// ── Typing Indicator ──────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div
      className="flex items-end gap-3 mb-4"
      data-ocid="aihelp.chat.loading_state"
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-md">
        <Bot className="w-4 h-4 text-white" />
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
}: {
  message: ChatMessage;
  index: number;
}) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <motion.div
      className={`flex items-end gap-3 mb-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      data-ocid={`aihelp.chat.message.${index + 1}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
          isUser
            ? "bg-gradient-to-br from-violet-500 to-indigo-600"
            : "bg-gradient-to-br from-indigo-500 to-violet-600"
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <Bot className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Bubble */}
      <div
        className={`flex flex-col gap-1 max-w-[80%] ${isUser ? "items-end" : "items-start"}`}
      >
        {message.isError ? (
          <div
            className="bg-destructive/10 border border-destructive/30 text-destructive rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm"
            data-ocid="aihelp.chat.error_state"
          >
            {message.text}
          </div>
        ) : isUser ? (
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed shadow-md">
            {message.text}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed shadow-sm text-foreground whitespace-pre-wrap">
            {message.text}
          </div>
        )}

        {/* Footer: timestamp + copy */}
        <div
          className={`flex items-center gap-2 px-1 ${isUser ? "flex-row-reverse" : "flex-row"}`}
        >
          <span className="text-xs text-muted-foreground">
            {formatTime(message.timestamp)}
          </span>
          {!isUser && !message.isError && (
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
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center mb-4"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-8 h-8 text-indigo-500" />
      </motion.div>

      <h3 className="font-display font-bold text-lg text-foreground mb-1">
        Ask me anything!
      </h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
        I'm your AI study assistant powered by advanced AI. Ask about any
        subject, exam, or topic.
      </p>

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

// ── Main Chat Component ───────────────────────────────────────────────────────
export default function AIChatTab() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

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

    // Auto-resize
    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
  };

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setInputValue("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        text: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        const responseText = await fetchAIResponse(trimmed);

        const aiMsg: ChatMessage = {
          id: `ai-${Date.now()}`,
          role: "ai",
          text: responseText,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMsg]);
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
    [isLoading],
  );

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
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const charsLeft = MAX_CHARS - inputValue.length;
  const canSend = inputValue.trim().length > 0 && !isLoading;

  return (
    <div className="flex flex-col h-full">
      {/* Chat header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card/50 backdrop-blur-sm flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">
              AI Study Assistant
            </p>
            <p className="text-xs text-green-500 font-medium leading-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Online · Powered by AI
            </p>
          </div>
        </div>
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

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 min-h-0">
        {messages.length === 0 && !isLoading ? (
          <EmptyState onSuggestionClick={(q) => sendMessage(q)} />
        ) : (
          <div>
            <AnimatePresence initial={false}>
              {messages.map((msg, idx) => (
                <MessageBubble key={msg.id} message={msg} index={idx} />
              ))}
            </AnimatePresence>
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input area — sticky bottom */}
      <div className="border-t border-border bg-card/80 backdrop-blur-sm px-4 py-3 flex-shrink-0">
        <div className="flex gap-2 items-end">
          <div className="flex-1 relative">
            <Textarea
              ref={textareaRef}
              value={inputValue}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask any question… (Enter to send, Shift+Enter for new line)"
              className="resize-none min-h-[44px] max-h-[120px] py-3 pr-4 text-sm leading-relaxed rounded-xl border-border focus:border-indigo-500/50 focus:ring-indigo-500/20"
              disabled={isLoading}
              data-ocid="aihelp.chat.input"
              aria-label="Type your question"
              rows={1}
            />
            {/* Character counter */}
            {inputValue.length > MAX_CHARS * 0.8 && (
              <span
                className={`absolute bottom-2 right-2 text-xs ${charsLeft < 50 ? "text-destructive" : "text-muted-foreground"}`}
              >
                {charsLeft}
              </span>
            )}
          </div>

          <Button
            onClick={() => sendMessage(inputValue)}
            disabled={!canSend}
            className="h-11 w-11 p-0 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 border-0 flex-shrink-0 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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

        <p className="text-xs text-muted-foreground mt-2 text-center">
          AI can make mistakes. Verify important answers from textbooks.
        </p>
      </div>
    </div>
  );
}
