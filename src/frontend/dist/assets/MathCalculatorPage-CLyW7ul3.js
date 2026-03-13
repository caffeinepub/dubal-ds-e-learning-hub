import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, d as Calculator } from "./index-BswHPZfj.js";
import { C as ChevronRight } from "./chevron-right-CufdvDqD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
      key: "1yo7s0"
    }
  ],
  ["path", { d: "m12 9 6 6", key: "anjzzh" }],
  ["path", { d: "m18 9-6 6", key: "1fp51s" }]
];
const Delete = createLucideIcon("delete", __iconNode);
function safeMathEval(expr) {
  try {
    let e = expr.replace(/π/g, String(Math.PI)).replace(/e(?![a-zA-Z])/g, String(Math.E)).replace(/sec\(([^)]+)\)/g, (_m, a) => `(1/Math.cos((${a})*Math.PI/180))`).replace(/csc\(([^)]+)\)/g, (_m, a) => `(1/Math.sin((${a})*Math.PI/180))`).replace(/cot\(([^)]+)\)/g, (_m, a) => `(1/Math.tan((${a})*Math.PI/180))`).replace(/sin\(/g, "Math.sin(").replace(/cos\(/g, "Math.cos(").replace(/tan\(/g, "Math.tan(").replace(/log\(/g, "Math.log10(").replace(/ln\(/g, "Math.log(").replace(/sqrt\(/g, "Math.sqrt(").replace(/abs\(/g, "Math.abs(").replace(/\^/g, "**");
    e = e.replace(
      /Math\.sin\(([^)]+)\)/g,
      (_, a) => `Math.sin((${a})*Math.PI/180)`
    ).replace(
      /Math\.cos\(([^)]+)\)/g,
      (_, a) => `Math.cos((${a})*Math.PI/180)`
    ).replace(
      /Math\.tan\(([^)]+)\)/g,
      (_, a) => `Math.tan((${a})*Math.PI/180)`
    );
    if (/[^0-9+\-*/.()%Math.sincotaglqrebdPI\s]/.test(e)) {
      return "Error";
    }
    const result = new Function(`"use strict"; return (${e})`)();
    if (!Number.isFinite(result)) return "Error";
    const rounded = Number.parseFloat(result.toPrecision(12));
    return String(rounded);
  } catch {
    return "Error";
  }
}
const BUTTONS = [
  // Row 1 - memory + clear (5 buttons)
  { label: "MC", value: "MC", type: "memory" },
  { label: "MR", value: "MR", type: "memory" },
  { label: "M+", value: "M+", type: "memory" },
  { label: "C", value: "C", type: "action" },
  { label: "⌫", value: "⌫", type: "action" },
  // Row 2 - basic trig + log (5 buttons)
  { label: "sin", value: "sin(", type: "sci" },
  { label: "cos", value: "cos(", type: "sci" },
  { label: "tan", value: "tan(", type: "sci" },
  { label: "log", value: "log(", type: "sci" },
  { label: "ln", value: "ln(", type: "sci" },
  // Row 3 - reciprocal trig + constants (5 buttons)
  { label: "sec", value: "sec(", type: "sci" },
  { label: "csc", value: "csc(", type: "sci" },
  { label: "cot", value: "cot(", type: "sci" },
  { label: "π", value: "π", type: "sci" },
  { label: "e", value: "e", type: "sci" },
  // Row 4 - powers + brackets (5 buttons)
  { label: "√", value: "sqrt(", type: "sci" },
  { label: "x²", value: "**2", type: "sci" },
  { label: "xʸ", value: "^", type: "sci" },
  { label: "(", value: "(", type: "op" },
  { label: ")", value: ")", type: "op" },
  // Row 5 - 7 8 9 % ÷ (5 buttons)
  { label: "7", value: "7", type: "number" },
  { label: "8", value: "8", type: "number" },
  { label: "9", value: "9", type: "number" },
  { label: "%", value: "%", type: "op" },
  { label: "÷", value: "/", type: "op" },
  // Row 6 - 4 5 6 |x| × (5 buttons)
  { label: "4", value: "4", type: "number" },
  { label: "5", value: "5", type: "number" },
  { label: "6", value: "6", type: "number" },
  { label: "|x|", value: "abs(", type: "sci" },
  { label: "×", value: "*", type: "op" },
  // Row 7 - 1 2 3 − + (5 buttons)
  { label: "1", value: "1", type: "number" },
  { label: "2", value: "2", type: "number" },
  { label: "3", value: "3", type: "number" },
  { label: "−", value: "-", type: "op" },
  { label: "+", value: "+", type: "op" },
  // Row 8 - 0 . = (0 is wide = 2 cols, + . = = 3)
  { label: "0", value: "0", type: "number", wide: true },
  { label: ".", value: ".", type: "number" },
  { label: "=", value: "=", type: "equals" }
];
const typeStyles = {
  // Neutral white/slate — clear hierarchy without competing with actions
  number: "bg-[oklch(0.97_0.005_258)] border border-[oklch(0.88_0.02_258)] text-[oklch(0.22_0.04_258)] hover:bg-[oklch(0.93_0.015_258)] active:bg-[oklch(0.90_0.02_258)] font-semibold text-base shadow-sm",
  // Rich indigo operators — bold and immediately recognisable
  op: "bg-[oklch(0.42_0.15_264)] text-white hover:bg-[oklch(0.38_0.16_264)] active:bg-[oklch(0.34_0.14_264)] font-bold text-lg shadow-md",
  // Violet scientific — different hue family from operators
  sci: "bg-[oklch(0.52_0.18_300)] text-white hover:bg-[oklch(0.47_0.19_300)] active:bg-[oklch(0.43_0.17_300)] font-medium text-sm shadow-md",
  // Vivid red for clear/backspace — danger-coded like all good calculators
  action: "bg-[oklch(0.55_0.22_27)] text-white hover:bg-[oklch(0.50_0.23_27)] active:bg-[oklch(0.46_0.21_27)] font-bold text-base shadow-md",
  // Rich emerald green for equals — unmistakable primary action
  equals: "bg-[oklch(0.52_0.18_145)] text-white hover:bg-[oklch(0.47_0.19_145)] active:bg-[oklch(0.43_0.17_145)] font-bold text-xl shadow-lg",
  // Warm rose memory — soft but distinct
  memory: "bg-[oklch(0.88_0.07_335)] text-[oklch(0.28_0.14_335)] hover:bg-[oklch(0.82_0.09_335)] active:bg-[oklch(0.78_0.1_335)] font-medium text-xs border border-[oklch(0.78_0.1_335)]"
};
function MathCalculatorPage() {
  const [expr, setExpr] = reactExports.useState("");
  const [result, setResult] = reactExports.useState("");
  const [memory, setMemory] = reactExports.useState(0);
  const [justEvaled, setJustEvaled] = reactExports.useState(false);
  const handleBtn = reactExports.useCallback(
    (btn) => {
      if (btn.value === "C") {
        setExpr("");
        setResult("");
        setJustEvaled(false);
        return;
      }
      if (btn.value === "⌫") {
        setExpr((prev) => prev.slice(0, -1));
        setResult("");
        setJustEvaled(false);
        return;
      }
      if (btn.value === "=") {
        const r = safeMathEval(expr);
        setResult(r);
        if (r !== "Error") {
          setExpr(r);
          setJustEvaled(true);
        }
        return;
      }
      if (btn.value === "MC") {
        setMemory(0);
        return;
      }
      if (btn.value === "MR") {
        const base = justEvaled ? "" : expr;
        setExpr(base + String(memory));
        setJustEvaled(false);
        return;
      }
      if (btn.value === "M+") {
        const cur = Number.parseFloat(result || expr) || 0;
        setMemory((prev) => prev + cur);
        return;
      }
      if (justEvaled && (btn.type === "number" || btn.type === "sci")) {
        setExpr(btn.value);
        setResult("");
        setJustEvaled(false);
        return;
      }
      if (justEvaled && btn.type === "op") {
        setExpr((prev) => prev + btn.value);
        setResult("");
        setJustEvaled(false);
        return;
      }
      setExpr((prev) => prev + btn.value);
      setJustEvaled(false);
      if (expr.length > 0) {
        const live = safeMathEval(expr + btn.value);
        if (live !== "Error") setResult(live);
        else setResult("");
      }
    },
    [expr, result, memory, justEvaled]
  );
  const handleKeyDown = reactExports.useCallback(
    (e) => {
      const key = e.key;
      if (/[0-9+\-*/.()%]/.test(key)) {
        handleBtn({ label: key, value: key, type: "number" });
      } else if (key === "Enter" || key === "=") {
        handleBtn({ label: "=", value: "=", type: "equals" });
      } else if (key === "Backspace") {
        handleBtn({ label: "⌫", value: "⌫", type: "action" });
      } else if (key === "Escape") {
        handleBtn({ label: "C", value: "C", type: "action" });
      }
    },
    [handleBtn]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10 max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.38_0.18_280)] to-[oklch(0.25_0.14_264)] p-6 text-white shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white/60 text-xs font-medium mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90", children: "Scientific Calculator" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-4xl text-white mb-2", children: "Math Calculator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-base", children: "Scientific calculator with trigonometry, logarithms, powers, and memory functions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-4", children: ["sin cos tan", "sec csc cot", "log ln √", "π e x²"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 font-mono border border-white/15",
          children: tag
        },
        tag
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-[oklch(0.13_0.04_264)] rounded-2xl shadow-2xl overflow-hidden border border-[oklch(0.28_0.08_264)]",
        onKeyDown: handleKeyDown,
        role: "application",
        "aria-label": "Scientific Calculator",
        "data-ocid": "calculator.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-[oklch(0.13_0.05_264)] to-[oklch(0.17_0.06_280)] p-6 min-h-[130px] flex flex-col justify-end border-b border-[oklch(0.24_0.07_264)]", children: [
            memory !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[oklch(0.75_0.18_52)] text-xs text-right mb-1 font-mono font-semibold tracking-wider", children: [
              "MEM: ",
              memory
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[oklch(0.55_0.07_258)] text-sm min-h-[22px] text-right font-mono truncate tracking-wide", children: expr || "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `text-right font-mono font-bold text-4xl mt-1.5 truncate tracking-tight ${result === "Error" ? "text-[oklch(0.65_0.22_27)]" : result ? "text-[oklch(0.98_0.02_258)]" : "text-[oklch(0.45_0.04_258)]"}`,
                children: result || (expr ? "" : "0")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 grid grid-cols-5 gap-2 bg-[oklch(0.15_0.04_264)]", children: BUTTONS.map((btn) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `calculator.${btn.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.button`,
              onClick: () => handleBtn(btn),
              className: `
                ${btn.wide ? "col-span-2" : ""}
                ${typeStyles[btn.type]}
                rounded-xl h-13 min-h-[52px] flex items-center justify-center
                transition-all duration-100 active:scale-[0.93] cursor-pointer
                focus-visible:ring-2 focus-visible:ring-white/50
              `,
              "aria-label": btn.label,
              children: btn.value === "⌫" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Delete, { className: "w-4 h-4" }) : btn.label
            },
            btn.label + btn.value
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 bg-[oklch(0.15_0.04_264)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-[oklch(0.48_0.05_258)] text-center", children: [
            "All trig in degrees: sin/cos/tan/sec/csc/cot. Try",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-[oklch(0.22_0.06_264)] px-1.5 py-0.5 rounded text-[oklch(0.78_0.12_264)]", children: "sec(60)" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-[oklch(0.22_0.06_264)] px-1.5 py-0.5 rounded text-[oklch(0.78_0.12_264)]", children: "cot(45)" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-[oklch(0.22_0.06_264)] px-1.5 py-0.5 rounded text-[oklch(0.78_0.12_264)]", children: "log(1000)" })
          ] }) })
        ]
      }
    ),
    memory !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 bg-[oklch(0.94_0.04_335)] border border-[oklch(0.82_0.08_335)] rounded-xl text-center text-sm text-[oklch(0.28_0.12_335)] font-semibold", children: [
      "📌 Memory: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: memory }),
      " — press",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[oklch(0.45_0.15_335)]", children: "MR" }),
      " to recall,",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[oklch(0.45_0.15_335)]", children: "MC" }),
      " to clear"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 bg-secondary/40 rounded-2xl border border-border p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground mb-3", children: "Quick Reference" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-muted-foreground", children: [
        ["sin(30)", "= 0.5"],
        ["cos(60)", "= 0.5"],
        ["tan(45)", "= 1"],
        ["sec(60)", "= 2"],
        ["csc(30)", "= 2"],
        ["cot(45)", "= 1"],
        ["log(1000)", "= 3"],
        ["sqrt(144)", "= 12"],
        ["2^8", "= 256"],
        ["ln(e)", "= 1"],
        ["π**2", "≈ 9.87"],
        ["(3+4)×2", "= 14"]
      ].map(([ex, res]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "calculator.secondary_button",
            className: "text-primary hover:underline cursor-pointer text-left",
            onClick: () => {
              setExpr(ex ?? "");
              setResult("");
              setJustEvaled(false);
            },
            children: ex
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: res })
      ] }, ex)) })
    ] })
  ] });
}
export {
  MathCalculatorPage as default
};
