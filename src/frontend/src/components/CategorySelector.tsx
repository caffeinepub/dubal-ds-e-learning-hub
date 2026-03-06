import { Category } from "../types";

interface CategorySelectorProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}

const categories: {
  id: Category;
  label: string;
  short: string;
  colorClass: string;
  activeClass: string;
  ocid: string;
}[] = [
  {
    id: Category.Class10,
    label: "CBSE Class 10",
    short: "Class 10",
    colorClass:
      "hover:bg-[oklch(0.9_0.06_142)] hover:text-[oklch(0.25_0.12_142)] hover:border-[oklch(0.7_0.12_142)]",
    activeClass:
      "bg-[oklch(0.55_0.16_142)] text-white border-[oklch(0.55_0.16_142)] shadow-sm",
    ocid: "category.class10.toggle",
  },
  {
    id: Category.Class12,
    label: "CBSE Class 12",
    short: "Class 12",
    colorClass:
      "hover:bg-[oklch(0.88_0.07_264)] hover:text-[oklch(0.25_0.12_264)] hover:border-[oklch(0.7_0.12_264)]",
    activeClass:
      "bg-[oklch(0.48_0.18_264)] text-white border-[oklch(0.48_0.18_264)] shadow-sm",
    ocid: "category.class12.toggle",
  },
  {
    id: Category.JEE,
    label: "JEE",
    short: "JEE",
    colorClass:
      "hover:bg-[oklch(0.92_0.07_30)] hover:text-[oklch(0.3_0.14_30)] hover:border-[oklch(0.7_0.12_30)]",
    activeClass:
      "bg-[oklch(0.58_0.19_30)] text-white border-[oklch(0.58_0.19_30)] shadow-sm",
    ocid: "category.jee.toggle",
  },
  {
    id: Category.NEET,
    label: "NEET",
    short: "NEET",
    colorClass:
      "hover:bg-[oklch(0.9_0.07_335)] hover:text-[oklch(0.3_0.13_335)] hover:border-[oklch(0.7_0.12_335)]",
    activeClass:
      "bg-[oklch(0.52_0.17_335)] text-white border-[oklch(0.52_0.17_335)] shadow-sm",
    ocid: "category.neet.toggle",
  },
];

export { categories };

export default function CategorySelector({
  activeCategory,
  onCategoryChange,
}: CategorySelectorProps) {
  return (
    <fieldset
      className="flex flex-wrap gap-2 border-0 p-0 m-0"
      aria-label="Select category"
    >
      {categories.map((cat) => (
        <button
          type="button"
          key={cat.id}
          data-ocid={cat.ocid}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
            activeCategory === cat.id
              ? cat.activeClass
              : `bg-card text-muted-foreground border-border ${cat.colorClass}`
          }`}
          aria-pressed={activeCategory === cat.id}
        >
          <span className="sm:hidden">{cat.short}</span>
          <span className="hidden sm:inline">{cat.label}</span>
        </button>
      ))}
    </fieldset>
  );
}
