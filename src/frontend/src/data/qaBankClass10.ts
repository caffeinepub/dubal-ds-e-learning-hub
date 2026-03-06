import { Category } from "../types";
import type { QABankEntry } from "./qaBank";

export const QA_BANK_CLASS10: QABankEntry[] = [
  // ── Mathematics: Real Numbers ──────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Real Numbers",
    question: "State Euclid's Division Lemma.",
    answer:
      "For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b. This is the basis for finding the HCF using Euclid's Division Algorithm.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Real Numbers",
    question:
      "How do you find the HCF of 135 and 225 using Euclid's algorithm?",
    answer:
      "Apply: 225 = 135×1 + 90; 135 = 90×1 + 45; 90 = 45×2 + 0. Since remainder = 0, HCF = 45.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Real Numbers",
    question: "State the Fundamental Theorem of Arithmetic.",
    answer:
      "Every composite number can be expressed as a product of prime numbers, and this factorisation is unique (ignoring the order of factors). Example: 252 = 2² × 3² × 7.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Real Numbers",
    question: "Prove that √2 is irrational.",
    answer:
      "Assume √2 = p/q (coprime). Then 2 = p²/q² → p² = 2q² → p is even (p = 2m). Substituting: 4m² = 2q² → q² = 2m² → q is even. Both p and q even contradicts coprimeness. ∴ √2 is irrational.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Real Numbers",
    question: "What makes a decimal expansion terminating?",
    answer:
      "A rational number p/q (in lowest terms) has a terminating decimal if and only if q has no prime factors other than 2 and 5. Example: 7/20 = 7/(2²×5) terminates; 1/6 = 1/(2×3) does not.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Real Numbers",
    question: "What is the HCF × LCM relation?",
    answer:
      "For any two positive integers a and b: HCF(a,b) × LCM(a,b) = a × b. Example: HCF(12,18) = 6; LCM = 36; 6×36 = 216 = 12×18 ✓.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Real Numbers",
    question:
      "Is the sum of a rational and irrational number rational or irrational?",
    answer:
      "The sum of a rational number and an irrational number is always irrational. Example: 3 + √5 is irrational. Proof by contradiction: if 3 + √5 = r (rational), then √5 = r − 3 (rational), contradiction.",
  },

  // ── Mathematics: Polynomials ───────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Polynomials",
    question:
      "What is the relationship between zeros and coefficients of a quadratic polynomial?",
    answer:
      "For p(x) = ax² + bx + c with zeros α and β: Sum of zeros = α + β = −b/a; Product of zeros = αβ = c/a.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Polynomials",
    question: "Find a quadratic polynomial with zeros 3 and −4.",
    answer:
      "Sum of zeros = 3 + (−4) = −1; Product = 3 × (−4) = −12. Polynomial = x² − (sum)x + product = x² + x − 12.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Polynomials",
    question: "What is a zero of a polynomial?",
    answer:
      "A zero (or root) of a polynomial p(x) is the value of x for which p(x) = 0. Geometrically, zeros are the x-coordinates where the graph of the polynomial crosses the x-axis.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Polynomials",
    question: "What does the graph of a quadratic polynomial look like?",
    answer:
      "The graph of a quadratic polynomial is a parabola. If the coefficient of x² is positive, it opens upward; if negative, it opens downward. The number of zeros corresponds to how many times the parabola crosses the x-axis (0, 1, or 2).",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Polynomials",
    question: "What is the division algorithm for polynomials?",
    answer:
      "For any polynomial p(x) and non-zero polynomial g(x): p(x) = g(x) × q(x) + r(x), where r(x) = 0 or degree of r(x) < degree of g(x). Here q(x) is quotient and r(x) is remainder.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Polynomials",
    question:
      "For cubic polynomial p(x) = ax³ + bx² + cx + d with zeros α, β, γ, what are the relations?",
    answer:
      "Sum of zeros: α+β+γ = −b/a; Sum of product of pairs: αβ+βγ+γα = c/a; Product of zeros: αβγ = −d/a.",
  },

  // ── Mathematics: Quadratic Equations ──────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    question: "What is the discriminant and what does it tell us?",
    answer:
      "Discriminant D = b² − 4ac for ax² + bx + c = 0. If D > 0: two distinct real roots; D = 0: two equal real roots; D < 0: no real roots (complex roots).",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    question: "Solve 2x² − 5x + 3 = 0 by factorisation.",
    answer:
      "2x² − 5x + 3 = 0 → 2x² − 2x − 3x + 3 = 0 → 2x(x−1) − 3(x−1) = 0 → (2x−3)(x−1) = 0. So x = 3/2 or x = 1.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    question: "State the quadratic formula.",
    answer:
      "For ax² + bx + c = 0, the roots are x = [−b ± √(b²−4ac)] / (2a). This formula works for all quadratic equations and is derived by completing the square.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    question: "For what value of k does x² − kx + 4 = 0 have equal roots?",
    answer: "For equal roots, D = 0 → k² − 4(1)(4) = 0 → k² = 16 → k = ±4.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    question:
      "The product of two consecutive positive integers is 306. Find them.",
    answer:
      "Let integers be x and x+1. Then x(x+1) = 306 → x² + x − 306 = 0 → (x+18)(x−17) = 0. Since positive, x = 17. Integers are 17 and 18.",
  },

  // ── Mathematics: Arithmetic Progressions ──────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Arithmetic Progressions",
    question: "Find the nth term of the AP 7, 11, 15, 19, ...",
    answer:
      "Here a = 7, d = 4. General term: aₙ = a + (n−1)d = 7 + (n−1)×4 = 7 + 4n − 4 = 4n + 3.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Arithmetic Progressions",
    question:
      "How many terms of the AP 9, 17, 25, ... must be taken to give a sum of 636?",
    answer:
      "a = 9, d = 8. Sₙ = n/2[2(9) + (n−1)8] = n/2[18 + 8n − 8] = n/2[8n + 10] = n(4n+5) = 636. 4n² + 5n − 636 = 0 → n = 12. Take 12 terms.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Arithmetic Progressions",
    question:
      "The 17th term of an AP exceeds the 10th term by 7. Find the common difference.",
    answer: "a₁₇ − a₁₀ = [a + 16d] − [a + 9d] = 7d = 7. So d = 1.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Arithmetic Progressions",
    question: "If the sum of first n terms is 3n² + 5n, find the nth term.",
    answer:
      "nth term = Sₙ − Sₙ₋₁ = (3n²+5n) − (3(n−1)²+5(n−1)) = (3n²+5n) − (3n²−6n+3+5n−5) = (3n²+5n) − (3n²−n−2) = 6n+2.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Arithmetic Progressions",
    question:
      "For what value of n is the nth term of two APs (63, 65, 67, ...) and (3, 10, 17, ...) equal?",
    answer:
      "AP1: aₙ = 63 + (n−1)2 = 61 + 2n. AP2: bₙ = 3 + (n−1)7 = 7n − 4. Setting equal: 61 + 2n = 7n − 4 → 65 = 5n → n = 13.",
  },

  // ── Mathematics: Triangles ─────────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Triangles",
    question: "State the Basic Proportionality Theorem (Thales' Theorem).",
    answer:
      "If a line is drawn parallel to one side of a triangle, it divides the other two sides in the same ratio. If DE ∥ BC in △ABC, then AD/DB = AE/EC.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Triangles",
    question: "What are the criteria for similarity of triangles?",
    answer:
      "Three criteria: (1) AA: two angles equal; (2) SAS: one angle equal and sides including that angle proportional; (3) SSS: all three pairs of corresponding sides proportional.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Triangles",
    question: "If △ABC ~ △DEF and BC:EF = 3:4, what is the ratio of areas?",
    answer:
      "Ratio of areas of similar triangles = square of the ratio of corresponding sides. Area(△ABC)/Area(△DEF) = (BC/EF)² = (3/4)² = 9/16.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Triangles",
    question: "State the Pythagoras Theorem and its converse.",
    answer:
      "Pythagoras: In a right triangle, the square of the hypotenuse = sum of squares of the other two sides: AC² = AB² + BC². Converse: If AC² = AB² + BC², then ∠B = 90°.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Triangles",
    question:
      "In △ABC and △PQR, if ∠A = ∠P and AB/PQ = AC/PR, are the triangles similar?",
    answer:
      "Yes. By SAS similarity criterion: if one pair of angles is equal AND the sides including those angles are proportional, the triangles are similar. △ABC ~ △PQR.",
  },

  // ── Mathematics: Coordinate Geometry ──────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    question: "Find the distance between A(3, 4) and B(7, 1).",
    answer: "AB = √[(7−3)² + (1−4)²] = √[16 + 9] = √25 = 5 units.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    question: "Find the midpoint of the segment joining (2, −3) and (6, 5).",
    answer: "Midpoint = [(2+6)/2, (−3+5)/2] = [8/2, 2/2] = (4, 1).",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    question:
      "Find the point that divides the segment joining A(1, 3) and B(5, 9) in ratio 1:2 internally.",
    answer:
      "Section formula: [(1×5 + 2×1)/(1+2), (1×9 + 2×3)/(1+2)] = [7/3, 15/3] = (7/3, 5).",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    question:
      "Find the area of a triangle with vertices (1, 2), (3, 4), and (5, 2).",
    answer:
      "Area = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)| = ½|1(4−2) + 3(2−2) + 5(2−4)| = ½|2 + 0 − 10| = ½×8 = 4 sq units.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    question: "What condition tells us that three points are collinear?",
    answer:
      "Three points are collinear if the area of the triangle formed by them is zero. Alternatively, if slopes between any two pairs of points are equal, the points are collinear.",
  },

  // ── Mathematics: Trigonometry ──────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    question: "What is sin 30°, cos 60°, tan 45°?",
    answer:
      "sin 30° = 1/2; cos 60° = 1/2; tan 45° = 1. These are standard values. Remember: sin 0°=0, sin 30°=1/2, sin 45°=1/√2, sin 60°=√3/2, sin 90°=1.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    question: "Prove the identity: sin²θ + cos²θ = 1.",
    answer:
      "In a right triangle, sin θ = P/H and cos θ = B/H. So sin²θ + cos²θ = P²/H² + B²/H² = (P²+B²)/H² = H²/H² = 1, by Pythagoras (P² + B² = H²).",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    question: "What are the three fundamental trigonometric identities?",
    answer:
      "(1) sin²θ + cos²θ = 1; (2) 1 + tan²θ = sec²θ; (3) 1 + cot²θ = cosec²θ. These are derived from Pythagorean theorem.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    question: "Evaluate: (sin 45° + cos 45°)².",
    answer: "(sin 45° + cos 45°)² = (1/√2 + 1/√2)² = (2/√2)² = (√2)² = 2.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    question: "What is sin(90°−θ) equal to?",
    answer:
      "sin(90°−θ) = cos θ. Similarly: cos(90°−θ) = sin θ; tan(90°−θ) = cot θ; cot(90°−θ) = tan θ; sec(90°−θ) = cosec θ; cosec(90°−θ) = sec θ.",
  },

  // ── Mathematics: Circles ──────────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Circles",
    question: "What is the tangent-radius relationship?",
    answer:
      "A tangent to a circle is perpendicular to the radius drawn to the point of tangency. If OA is radius and PA is tangent at A, then OA ⊥ PA (∠OAP = 90°).",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Circles",
    question:
      "If two tangents are drawn from an external point to a circle, prove they are equal.",
    answer:
      "Let PA and PB be tangents from P to a circle with centre O. In △OAP and △OBP: OA = OB (radii), OP = OP (common), ∠OAP = ∠OBP = 90°. By RHS congruence, △OAP ≅ △OBP. So PA = PB.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Circles",
    question:
      "From a point 10 cm from centre, tangent length is 8 cm. Find the radius.",
    answer:
      "Using Pythagoras: radius² + tangent² = distance². r² + 8² = 10² → r² = 100 − 64 = 36 → r = 6 cm.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Circles",
    question: "What is the angle in a semicircle?",
    answer:
      "The angle inscribed in a semicircle is always 90°. If AB is a diameter and C is any point on the circle (semicircle), then ∠ACB = 90°. This is called Thales' theorem.",
  },

  // ── Mathematics: Statistics ────────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Statistics",
    question: "What is the formula for mean using the assumed mean method?",
    answer:
      "Mean x̄ = A + (Σfᵢdᵢ/Σfᵢ), where A = assumed mean, dᵢ = xᵢ − A (deviation from assumed mean), fᵢ = frequency.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Statistics",
    question: "What is the formula for the median of grouped data?",
    answer:
      "Median = l + [(n/2 − cf)/f] × h, where l = lower boundary of median class, n = total frequency, cf = cumulative frequency before median class, f = frequency of median class, h = class width.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Statistics",
    question: "What is the formula for mode of grouped data?",
    answer:
      "Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h, where l = lower limit of modal class, f₁ = frequency of modal class, f₀ = frequency of class before modal class, f₂ = frequency of class after modal class, h = class width.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Statistics",
    question:
      "What is the empirical relationship between mean, median, and mode?",
    answer:
      "Mode = 3 Median − 2 Mean. This is an empirical (approximate) relationship. If you know two of these central tendencies, you can estimate the third.",
  },

  // ── Mathematics: Probability ───────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Probability",
    question: "What is the classical definition of probability?",
    answer:
      "Probability of event E = Number of favourable outcomes / Total number of equally likely outcomes. P(E) = n(E)/n(S), where S is the sample space. Value ranges from 0 to 1.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Probability",
    question: "A card is drawn from a deck of 52 cards. Find P(king).",
    answer: "There are 4 kings in 52 cards. P(king) = 4/52 = 1/13 ≈ 0.077.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Probability",
    question: "Two dice are thrown. Find P(sum = 7).",
    answer:
      "Total outcomes = 36. Favourable (sum=7): (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes. P(sum=7) = 6/36 = 1/6.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Probability",
    question: "What is the complement of an event?",
    answer:
      "The complement of event E (written Ē or E') is the event that E does NOT occur. P(Ē) = 1 − P(E). Example: P(not getting 6 on a die) = 1 − 1/6 = 5/6.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    chapter: "Probability",
    question: "A bag has 5 red and 3 blue balls. Find P(red ball drawn).",
    answer: "Total balls = 5 + 3 = 8. Favourable = 5 red balls. P(red) = 5/8.",
  },

  // ── Science: Chemical Reactions and Equations ─────────────────────────────
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Chemical Reactions and Equations",
    question: "What are the types of chemical reactions?",
    answer:
      "Five types: (1) Combination: A+B→AB; (2) Decomposition: AB→A+B; (3) Displacement: A+BC→AC+B; (4) Double displacement: AB+CD→AD+CB; (5) Redox (oxidation-reduction): one substance oxidised, another reduced.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Chemical Reactions and Equations",
    question: "What is a redox reaction? Give an example.",
    answer:
      "A redox reaction involves simultaneous oxidation and reduction. CuO + H₂ → Cu + H₂O. Here H₂ is oxidised (loses H, gains O — actually H₂ gains O), and CuO is reduced (Cu gains electrons, loses O). Oxidation: gain of O or loss of H or loss of electrons. Reduction: loss of O or gain of H or gain of electrons.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Chemical Reactions and Equations",
    question: "What is rancidity and how can it be prevented?",
    answer:
      "Rancidity is the deterioration of fats and oils due to oxidation, giving them an unpleasant smell and taste. Prevention: (1) Adding antioxidants (BHA); (2) storing food in airtight containers; (3) refrigeration; (4) replacing air with nitrogen in chip packets.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Chemical Reactions and Equations",
    question: "Give an example of a displacement reaction.",
    answer:
      "Fe + CuSO₄ → FeSO₄ + Cu. Iron displaces copper because iron is more reactive than copper. The blue colour of CuSO₄ fades and a reddish copper coating appears on the iron nail. This confirms displacement.",
  },

  // ── Science: Acids Bases and Salts ────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Acids Bases and Salts",
    question: "How does a universal indicator work?",
    answer:
      "Universal indicator is a mixture of dyes that shows different colours at different pH values. pH 0–3 (red/orange): strongly acidic; pH 4–6 (yellow/green): weakly acidic; pH 7 (green): neutral; pH 8–10 (blue): weakly basic; pH 11–14 (violet): strongly basic.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Acids Bases and Salts",
    question: "What happens when zinc reacts with hydrochloric acid?",
    answer:
      "Zn + 2HCl → ZnCl₂ + H₂↑. Zinc displaces hydrogen from hydrochloric acid to form zinc chloride. The hydrogen gas evolved can be tested with a burning splinter (it burns with a pop sound).",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Acids Bases and Salts",
    question: "What is baking soda and what is its chemical formula?",
    answer:
      "Baking soda is sodium hydrogen carbonate (NaHCO₃). When heated, it decomposes: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. CO₂ makes dough rise. It is also used as an antacid to neutralise excess stomach acid.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Acids Bases and Salts",
    question: "What is washing soda and its uses?",
    answer:
      "Washing soda is sodium carbonate decahydrate (Na₂CO₃·10H₂O). Uses: (1) Removing hardness of water; (2) Manufacturing glass, soap, and paper; (3) Cleaning agent (removes grease).",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Acids Bases and Salts",
    question: "What is bleaching powder and how is it made?",
    answer:
      "Bleaching powder is calcium oxychloride Ca(OCl)Cl. Made by passing chlorine gas over dry slaked lime: Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O. Uses: (1) Bleaching cotton and linen; (2) Disinfecting drinking water; (3) Making chloroform.",
  },

  // ── Science: Life Processes ────────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Life Processes",
    question: "What is the role of bile in digestion?",
    answer:
      "Bile is produced in the liver and stored in the gall bladder. It is alkaline and neutralises acidic chyme from the stomach. Its main function is emulsification of fats — breaking large fat globules into smaller droplets, increasing surface area for lipase enzymes.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Life Processes",
    question: "What are stomata and how do they function?",
    answer:
      "Stomata are tiny pores on leaf surfaces surrounded by guard cells. Functions: (1) Gas exchange — CO₂ in, O₂ out during photosynthesis; (2) Transpiration — water vapour out. Guard cells swell (open stomata) when they absorb water and shrink (close) when water is lost.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Life Processes",
    question: "What is excretion in plants?",
    answer:
      "Plants excrete: (1) O₂ and H₂O during photosynthesis (as by-products); (2) CO₂ and H₂O during respiration; (3) Waste stored in old leaves, bark, fruits — removed when these fall; (4) Resins and gums stored in old xylem; (5) Some waste stored in vacuoles.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Life Processes",
    question: "What is the difference between arteries and veins?",
    answer:
      "Arteries: carry oxygenated blood (except pulmonary artery) away from heart; thick elastic walls; no valves; blood under high pressure. Veins: carry deoxygenated blood (except pulmonary vein) toward heart; thin walls; have valves to prevent backflow; blood under low pressure.",
  },

  // ── Science: Heredity and Evolution ───────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Heredity and Evolution",
    question: "What are homologous and analogous organs?",
    answer:
      "Homologous organs: Same anatomical structure (same origin/blueprint), different functions. Example: forelimbs of whale, bat, human (same bone pattern). Evidence of common ancestry. Analogous organs: Different structure/origin, same function. Example: wings of butterfly and birds. Evidence of convergent evolution.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Heredity and Evolution",
    question: "What is the basis of natural selection?",
    answer:
      "Natural selection (Darwin): (1) Variation exists in a population; (2) Struggle for existence due to limited resources; (3) Individuals with useful variations survive and reproduce (survival of the fittest); (4) Favourable variations are inherited. Over generations, this leads to evolution.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Heredity and Evolution",
    question: "What are acquired and inherited variations?",
    answer:
      "Acquired variations: changes due to environment, not inherited. Example: a scar from an injury, tanned skin. Inherited variations: genetic changes, passed to offspring. Example: height, eye colour, blood group. Only inherited variations can drive evolution.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    chapter: "Heredity and Evolution",
    question: "What is speciation?",
    answer:
      "Speciation is the process by which new species arise from existing species. Causes: (1) Geographical isolation (mountains, rivers separate populations); (2) Accumulated genetic differences over time; (3) Reproductive isolation (organisms can no longer interbreed successfully). Example: Galapagos finches.",
  },

  // ── History: The Rise of Nationalism in Europe ───────────────────────────
  {
    category: Category.Class10,
    subject: "History",
    chapter: "The Rise of Nationalism in Europe",
    question: "What was the significance of the Congress of Vienna (1815)?",
    answer:
      "After Napoleon's defeat, European powers met to restore conservative order. Led by Metternich (Austria), it restored the monarchies deposed by Napoleon. Nationalist and liberal movements were suppressed. It established the Concert of Europe — a system of cooperation between major powers to maintain stability.",
  },
  {
    category: Category.Class10,
    subject: "History",
    chapter: "The Rise of Nationalism in Europe",
    question: "Who were the Romantics and how did they promote nationalism?",
    answer:
      "Romantics were artists, poets, and intellectuals who glorified emotion, nature, and national culture. They promoted nationalism through: (1) Folk songs, poetry, and vernacular languages (Grimm brothers); (2) Music (Beethoven, Liszt); (3) Painting — depicting historic battles and landscapes. They created a sense of shared cultural identity among people.",
  },
  {
    category: Category.Class10,
    subject: "History",
    chapter: "The Rise of Nationalism in Europe",
    question: "How was Germany unified?",
    answer:
      "German unification was achieved by Prussia under Otto von Bismarck through 'Blood and Iron' policy. Three wars: (1) Austro-Prussian War 1866; (2) Franco-Prussian War 1870-71. Kaiser Wilhelm I was proclaimed German Emperor at Versailles on January 18, 1871. German states were united into a single nation-state.",
  },
  {
    category: Category.Class10,
    subject: "History",
    chapter: "The Rise of Nationalism in Europe",
    question: "What was Zollverein and its significance?",
    answer:
      "Zollverein was a customs union established in Prussia in 1834, gradually including most German states. Significance: (1) Abolished tariff barriers between German states; (2) Created a single economic market; (3) Strengthened economic ties among German states; (4) Helped prepare the ground for political unification.",
  },

  // ── History: Nationalism in India ─────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "History",
    chapter: "Nationalism in India",
    question: "What was the Jallianwala Bagh Massacre?",
    answer:
      "On 13 April 1919, General Reginald Dyer ordered troops to fire on a large, peaceful gathering at Jallianwala Bagh, Amritsar, Punjab. People had gathered to protest the Rowlatt Act. Hundreds were killed. This shocking event turned many moderate Indians into nationalists and convinced them that British rule was unjust and must end.",
  },
  {
    category: Category.Class10,
    subject: "History",
    chapter: "Nationalism in India",
    question: "What was the Salt March and its significance?",
    answer:
      "In March 1930, Gandhi led a 240-mile march from Sabarmati Ashram to Dandi (Gujarat coastline) to make salt and defy the Salt Tax (a British monopoly). Significance: (1) Salt is essential for all — symbolised British injustice; (2) It was visible and understandable to all classes; (3) Turned into a nationwide civil disobedience movement; (4) World press coverage embarrassed the British.",
  },
  {
    category: Category.Class10,
    subject: "History",
    chapter: "Nationalism in India",
    question: "Who participated in the Civil Disobedience Movement (1930)?",
    answer:
      "Rich and poor: peasants, tribals, women, workers, industrialists (Bombay mill owners supported). Women: participated in large numbers for the first time. Dalits: not initially involved; Dr. Ambedkar was sceptical. Many Muslim leaders joined; many did not (tension over separate electorates). The movement was truly mass-based.",
  },
  {
    category: Category.Class10,
    subject: "History",
    chapter: "Nationalism in India",
    question: "What were the limitations of the Non-Cooperation Movement?",
    answer:
      "Limitations: (1) Not everyone participated — some industries continued working; (2) Khilafat issue alienated some Hindus; (3) Economic consequences of boycott were severe — some traders suffered; (4) Violence at Chauri Chaura forced Gandhi to call it off prematurely; (5) Not everyone agreed with Gandhi's sudden decision to stop.",
  },

  // ── Geography: Resources and Development ─────────────────────────────────
  {
    category: Category.Class10,
    subject: "Geography",
    chapter: "Resources and Development",
    question:
      "What is the difference between renewable and non-renewable resources?",
    answer:
      "Renewable resources: Regenerate naturally and can be replenished — solar energy, wind energy, water, forests (if managed sustainably). Non-renewable resources: Formed over millions of years; finite and non-replenishable — coal, petroleum, natural gas, minerals. Over-exploitation of non-renewable resources leads to resource depletion.",
  },
  {
    category: Category.Class10,
    subject: "Geography",
    chapter: "Resources and Development",
    question: "What are the types of soil in India?",
    answer:
      "India has 6 main soil types: (1) Alluvial soil: most fertile; in Indo-Gangetic plains; suitable for wheat, rice, sugarcane; (2) Black soil (Regur): Deccan plateau; retains moisture; good for cotton; (3) Red and Yellow soil: Eastern and Southern India; less fertile; (4) Laterite soil: in high rainfall areas; acidic; tea, coffee; (5) Arid soil: desert regions; low humus; (6) Forest soil: mountain slopes.",
  },
  {
    category: Category.Class10,
    subject: "Geography",
    chapter: "Resources and Development",
    question: "What is land degradation and how can it be prevented?",
    answer:
      "Land degradation is the deterioration of land quality through soil erosion, waterlogging, salinity, desertification. Causes: deforestation, overgrazing, improper irrigation, mining. Prevention: (1) Afforestation and shelter belts; (2) Controlled grazing; (3) Proper crop rotation; (4) Contour ploughing and terracing on slopes; (5) Check dams to reduce run-off.",
  },

  // ── Political Science: Power Sharing ──────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Political Science",
    chapter: "Power Sharing",
    question: "What was the Belgian model of power sharing?",
    answer:
      "Belgium had Dutch (59%), French (40%), and German (1%) speakers. The Belgian solution: (1) Equal representation of Dutch and French in central cabinet regardless of population; (2) State governments for Flanders (Dutch) and Wallonia (French); (3) Brussels: equal number of French and Dutch ministers; (4) Community governments for cultural matters. This accommodated all groups and prevented conflict.",
  },
  {
    category: Category.Class10,
    subject: "Political Science",
    chapter: "Power Sharing",
    question: "What are the four forms of power sharing?",
    answer:
      "Power is shared: (1) Among government organs: Legislature (makes laws), Executive (implements), Judiciary (interprets) — horizontal distribution; (2) Among levels of government: central, state, local — vertical distribution (federalism); (3) Among social groups: minorities, linguistic groups; (4) Among political parties, pressure groups, movements.",
  },

  // ── Economics: Development ────────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Economics",
    chapter: "Development",
    question: "What is Human Development Index (HDI) and who publishes it?",
    answer:
      "HDI is a composite index measuring: (1) Health — life expectancy at birth; (2) Education — mean years of schooling and expected years; (3) Standard of living — GNI per capita (PPP). Published annually by UNDP (United Nations Development Programme) since 1990. Countries ranked from Very High to Low HDI.",
  },
  {
    category: Category.Class10,
    subject: "Economics",
    chapter: "Development",
    question:
      "Why is per capita income not a sufficient measure of development?",
    answer:
      "Per capita income (average income) has limitations: (1) It is an average — hides inequality (10 people earning ₹100 each vs 9 earning ₹10 and 1 earning ₹910 — same average, very different lives); (2) Doesn't measure health, education, or freedom; (3) Doesn't show distribution of wealth. Need HDI, Gini coefficient, literacy rates, infant mortality rate etc.",
  },
  {
    category: Category.Class10,
    subject: "Economics",
    chapter: "Development",
    question: "What is sustainable development?",
    answer:
      "Sustainable development meets the needs of the present generation without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987). Requires: (1) Using renewable energy; (2) Not over-exploiting natural resources; (3) Protecting biodiversity; (4) Reducing pollution. Example: solar power instead of coal for electricity.",
  },

  // ── English: Class 10 stories ─────────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "English",
    chapter: "A Letter to God",
    question: "How does irony function in 'A Letter to God'?",
    answer:
      "The story uses dramatic irony throughout. The readers know the post office workers generously donated their own money to help Lencho. Lencho does not know this. He blames these same people for stealing 30 pesos. The irony deepens when Lencho writes a second letter calling his benefactors 'a bunch of crooks.' His absolute faith in God ironically blinds him to the genuine human goodness around him.",
  },
  {
    category: Category.Class10,
    subject: "English",
    chapter: "Nelson Mandela Long Walk to Freedom",
    question: "What does Mandela mean by 'twin obligations'?",
    answer:
      "Mandela says every man has two obligations: (1) to his family, parents, wife, and children; and (2) to his people, his community, his country. He argues that under apartheid, fulfilling one obligation made it impossible to fulfil the other. A Black man could not both be a good family man and fight for freedom simultaneously. This is why he had to choose his country over his family.",
  },
  {
    category: Category.Class10,
    subject: "English",
    chapter: "From the Diary of Anne Frank",
    question: "Why did Anne Frank start writing a diary?",
    answer:
      "Anne Frank started writing a diary because she lacked a true confidante — someone she could trust completely. She had acquaintances but felt she could not share her deepest thoughts. She says 'paper is more patient than people.' She also named her diary 'Kitty' and treated it as her best friend. The diary became her way of expressing feelings, recording history, and preserving hope during the Holocaust.",
  },
];
