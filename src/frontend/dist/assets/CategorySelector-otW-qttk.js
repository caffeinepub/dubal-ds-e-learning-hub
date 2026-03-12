import { j as jsxRuntimeExports, C as Category } from "./index-CwPteKd5.js";
const categories = [
  {
    id: Category.Class10,
    label: "CBSE Class 10",
    short: "Class 10",
    colorClass: "hover:bg-[oklch(0.86_0.08_142)] hover:text-[oklch(0.20_0.14_142)] hover:border-[oklch(0.68_0.12_142)]",
    activeClass: "bg-[oklch(0.44_0.18_142)] text-white border-[oklch(0.44_0.18_142)] shadow-sm",
    ocid: "category.class10.toggle"
  },
  {
    id: Category.Class12,
    label: "CBSE Class 12",
    short: "Class 12",
    colorClass: "hover:bg-[oklch(0.84_0.09_264)] hover:text-[oklch(0.20_0.14_264)] hover:border-[oklch(0.65_0.12_264)]",
    activeClass: "bg-[oklch(0.38_0.20_264)] text-white border-[oklch(0.38_0.20_264)] shadow-sm",
    ocid: "category.class12.toggle"
  },
  {
    id: Category.JEE,
    label: "JEE",
    short: "JEE",
    colorClass: "hover:bg-[oklch(0.88_0.09_30)] hover:text-[oklch(0.20_0.16_30)] hover:border-[oklch(0.68_0.14_30)]",
    activeClass: "bg-[oklch(0.46_0.22_30)] text-white border-[oklch(0.46_0.22_30)] shadow-sm",
    ocid: "category.jee.toggle"
  },
  {
    id: Category.NEET,
    label: "NEET",
    short: "NEET",
    colorClass: "hover:bg-[oklch(0.85_0.09_335)] hover:text-[oklch(0.20_0.15_335)] hover:border-[oklch(0.66_0.12_335)]",
    activeClass: "bg-[oklch(0.40_0.20_335)] text-white border-[oklch(0.40_0.20_335)] shadow-sm",
    ocid: "category.neet.toggle"
  }
];
function CategorySelector({
  activeCategory,
  onCategoryChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "fieldset",
    {
      className: "flex flex-wrap gap-2 border-0 p-0 m-0",
      "aria-label": "Select category",
      children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": cat.ocid,
          onClick: () => onCategoryChange(cat.id),
          className: `px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${activeCategory === cat.id ? cat.activeClass : `bg-secondary text-foreground border-border ${cat.colorClass}`}`,
          "aria-pressed": activeCategory === cat.id,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: cat.short }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: cat.label })
          ]
        },
        cat.id
      ))
    }
  );
}
export {
  CategorySelector as C
};
