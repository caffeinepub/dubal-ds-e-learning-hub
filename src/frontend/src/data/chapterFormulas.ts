// Formula sheets for chapters that have key formulas
// These appear as an additional "Formulas" button next to the Smart Notes button in Syllabus

export interface FormulaEntry {
  title: string;
  formula: string;
  description?: string;
}

export interface ChapterFormulaSheet {
  formulas: FormulaEntry[];
}

export const CHAPTER_FORMULAS: Record<string, ChapterFormulaSheet> = {
  // ── CLASS 10 MATHEMATICS ────────────────────────────────────────────────────
  "Mathematics::Real Numbers": {
    formulas: [
      {
        title: "Euclid's Division Lemma",
        formula: "a = bq + r, where 0 ≤ r < b",
        description: "For any two positive integers a and b",
      },
      {
        title: "HCF × LCM",
        formula: "HCF(a,b) × LCM(a,b) = a × b",
        description:
          "Product of two numbers equals product of their HCF and LCM",
      },
    ],
  },
  "Mathematics::Polynomials": {
    formulas: [
      {
        title: "Sum of Zeros (Quadratic)",
        formula: "α + β = -b/a",
        description: "For ax² + bx + c = 0",
      },
      {
        title: "Product of Zeros (Quadratic)",
        formula: "αβ = c/a",
        description: "For ax² + bx + c = 0",
      },
      {
        title: "Sum of Zeros (Cubic)",
        formula: "α + β + γ = -b/a",
        description: "For ax³ + bx² + cx + d = 0",
      },
      {
        title: "Product of Zeros (Cubic)",
        formula: "αβγ = -d/a",
        description: "For ax³ + bx² + cx + d = 0",
      },
    ],
  },
  "Mathematics::Quadratic Equations": {
    formulas: [
      {
        title: "Quadratic Formula",
        formula: "x = (-b ± √(b²-4ac)) / 2a",
        description: "Roots of ax² + bx + c = 0",
      },
      {
        title: "Discriminant",
        formula: "D = b² - 4ac",
        description:
          "D > 0: two real roots, D = 0: equal roots, D < 0: no real roots",
      },
      { title: "Sum of Roots", formula: "x₁ + x₂ = -b/a" },
      { title: "Product of Roots", formula: "x₁ × x₂ = c/a" },
    ],
  },
  "Mathematics::Arithmetic Progressions": {
    formulas: [
      {
        title: "General Term (nth term)",
        formula: "aₙ = a + (n-1)d",
        description: "a = first term, d = common difference",
      },
      {
        title: "Sum of n terms",
        formula: "Sₙ = n/2 [2a + (n-1)d]",
        description: "Sum of first n terms of AP",
      },
      {
        title: "Sum (last term known)",
        formula: "Sₙ = n/2 [a + l]",
        description: "l = last term",
      },
      { title: "Common Difference", formula: "d = aₙ - aₙ₋₁" },
    ],
  },
  "Mathematics::Triangles": {
    formulas: [
      {
        title: "Basic Proportionality Theorem",
        formula: "AD/DB = AE/EC",
        description: "If DE || BC in triangle ABC",
      },
      {
        title: "Area of Similar Triangles",
        formula: "ar(△ABC)/ar(△DEF) = (AB/DE)²",
        description: "Ratio of areas = square of ratio of corresponding sides",
      },
      {
        title: "Pythagoras Theorem",
        formula: "AC² = AB² + BC²",
        description: "In a right triangle with right angle at B",
      },
    ],
  },
  "Mathematics::Coordinate Geometry": {
    formulas: [
      {
        title: "Distance Formula",
        formula: "d = √[(x₂-x₁)² + (y₂-y₁)²]",
        description: "Distance between two points",
      },
      {
        title: "Section Formula",
        formula: "P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
        description: "Point dividing in ratio m:n internally",
      },
      { title: "Midpoint Formula", formula: "M = ((x₁+x₂)/2, (y₁+y₂)/2)" },
      {
        title: "Area of Triangle",
        formula: "A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|",
      },
    ],
  },
  "Mathematics::Introduction to Trigonometry": {
    formulas: [
      { title: "sin θ", formula: "sin θ = Opposite / Hypotenuse" },
      { title: "cos θ", formula: "cos θ = Adjacent / Hypotenuse" },
      {
        title: "tan θ",
        formula: "tan θ = Opposite / Adjacent = sin θ / cos θ",
      },
      { title: "cosec θ", formula: "cosec θ = 1 / sin θ" },
      { title: "sec θ", formula: "sec θ = 1 / cos θ" },
      { title: "cot θ", formula: "cot θ = 1 / tan θ = cos θ / sin θ" },
      { title: "Identity 1", formula: "sin²θ + cos²θ = 1" },
      { title: "Identity 2", formula: "1 + tan²θ = sec²θ" },
      { title: "Identity 3", formula: "1 + cot²θ = cosec²θ" },
      { title: "sin 0°", formula: "0", description: "Standard values" },
      { title: "sin 30°", formula: "1/2" },
      { title: "sin 45°", formula: "1/√2" },
      { title: "sin 60°", formula: "√3/2" },
      { title: "sin 90°", formula: "1" },
    ],
  },
  "Mathematics::Some Applications of Trigonometry": {
    formulas: [
      {
        title: "Angle of Elevation",
        formula: "tan θ = height / horizontal distance",
      },
      {
        title: "Angle of Depression",
        formula: "tan θ = vertical drop / horizontal distance",
      },
      {
        title: "Height Formula",
        formula: "h = d × tan θ",
        description: "d = horizontal distance, θ = angle of elevation",
      },
    ],
  },
  "Mathematics::Circles": {
    formulas: [
      {
        title: "Tangent length",
        formula: "PT² = PA × PB",
        description: "P is external point, A and B are points on circle",
      },
      {
        title: "Equal tangents",
        formula: "PA = PB",
        description: "Tangents from external point are equal",
      },
    ],
  },
  "Mathematics::Areas Related to Circles": {
    formulas: [
      { title: "Area of Circle", formula: "A = πr²" },
      { title: "Circumference", formula: "C = 2πr" },
      {
        title: "Arc Length",
        formula: "l = (θ/360) × 2πr",
        description: "θ in degrees",
      },
      { title: "Area of Sector", formula: "A = (θ/360) × πr²" },
      {
        title: "Area of Segment",
        formula: "A = Area of Sector - Area of Triangle",
      },
    ],
  },
  "Mathematics::Surface Areas and Volumes": {
    formulas: [
      { title: "Cube SA", formula: "6a²" },
      { title: "Cuboid SA", formula: "2(lb + bh + hl)" },
      { title: "Cylinder SA", formula: "2πr(r + h)" },
      {
        title: "Cone SA",
        formula: "πr(r + l)",
        description: "l = slant height = √(r² + h²)",
      },
      { title: "Sphere SA", formula: "4πr²" },
      { title: "Cube Volume", formula: "a³" },
      { title: "Cuboid Volume", formula: "l × b × h" },
      { title: "Cylinder Volume", formula: "πr²h" },
      { title: "Cone Volume", formula: "(1/3)πr²h" },
      { title: "Sphere Volume", formula: "(4/3)πr³" },
      { title: "Hemisphere Volume", formula: "(2/3)πr³" },
    ],
  },
  "Mathematics::Statistics": {
    formulas: [
      { title: "Mean (Direct Method)", formula: "x̄ = Σfᵢxᵢ / Σfᵢ" },
      {
        title: "Mean (Assumed Mean)",
        formula: "x̄ = a + Σfᵢdᵢ / Σfᵢ",
        description: "dᵢ = xᵢ - a",
      },
      {
        title: "Median",
        formula: "M = l + ((n/2 - cf) / f) × h",
        description:
          "l=lower boundary, cf=cumulative freq, f=freq, h=class width",
      },
      {
        title: "Mode",
        formula: "Mode = l + ((f₁-f₀) / (2f₁-f₀-f₂)) × h",
        description: "f₁=modal freq, f₀=preceding freq, f₂=succeeding freq",
      },
      { title: "Empirical relation", formula: "Mode = 3 Median - 2 Mean" },
    ],
  },
  "Mathematics::Probability": {
    formulas: [
      {
        title: "Probability",
        formula:
          "P(E) = Number of favourable outcomes / Total number of outcomes",
      },
      { title: "Complement", formula: "P(Ē) = 1 - P(E)" },
      { title: "Range", formula: "0 ≤ P(E) ≤ 1" },
    ],
  },

  // ── CLASS 10 SCIENCE ─────────────────────────────────────────────────────────
  "Science::Chemical Reactions and Equations": {
    formulas: [
      { title: "General Combination", formula: "A + B → AB" },
      { title: "General Decomposition", formula: "AB → A + B" },
      { title: "Displacement", formula: "A + BC → AC + B" },
      { title: "Double Displacement", formula: "AB + CD → AD + CB" },
    ],
  },
  "Science::Electricity": {
    formulas: [
      {
        title: "Ohm's Law",
        formula: "V = IR",
        description: "V=voltage, I=current, R=resistance",
      },
      { title: "Resistance in Series", formula: "R = R₁ + R₂ + R₃ + ..." },
      {
        title: "Resistance in Parallel",
        formula: "1/R = 1/R₁ + 1/R₂ + 1/R₃ + ...",
      },
      { title: "Electric Power", formula: "P = VI = I²R = V²/R" },
      { title: "Electrical Energy", formula: "W = VIt = Pt" },
      {
        title: "Resistivity",
        formula: "R = ρL/A",
        description: "ρ=resistivity, L=length, A=cross-section area",
      },
      { title: "Heat generated", formula: "H = I²Rt (Joule's law)" },
    ],
  },
  "Science::Light Reflection and Refraction": {
    formulas: [
      {
        title: "Mirror Formula",
        formula: "1/v + 1/u = 1/f",
        description: "v=image dist, u=object dist, f=focal length",
      },
      { title: "Magnification (Mirror)", formula: "m = -v/u = h'/h" },
      {
        title: "Focal Length",
        formula: "f = R/2",
        description: "R = radius of curvature",
      },
      { title: "Snell's Law", formula: "n₁ sin θ₁ = n₂ sin θ₂" },
      { title: "Refractive Index", formula: "n = c/v = sin i / sin r" },
      { title: "Lens Formula", formula: "1/v - 1/u = 1/f" },
      { title: "Magnification (Lens)", formula: "m = v/u = h'/h" },
      {
        title: "Lens Power",
        formula: "P = 1/f (in metres)",
        description: "Unit: Dioptre (D)",
      },
      { title: "Combined Power", formula: "P = P₁ + P₂" },
    ],
  },
  "Science::Magnetic Effects of Electric Current": {
    formulas: [
      {
        title: "Force on conductor",
        formula: "F = BIL sin θ",
        description: "B=field, I=current, L=length",
      },
      {
        title: "Fleming's LHR",
        formula:
          "Direction of force on a current-carrying conductor in magnetic field",
      },
    ],
  },

  // ── CLASS 12 PHYSICS ─────────────────────────────────────────────────────────
  "Physics::Electric Charges and Fields": {
    formulas: [
      {
        title: "Coulomb's Law",
        formula: "F = kq₁q₂/r²",
        description: "k = 9×10⁹ Nm²/C²",
      },
      { title: "Electric Field", formula: "E = F/q = kq/r²" },
      { title: "Electric Flux", formula: "φ = E·A = EA cos θ" },
      { title: "Gauss's Law", formula: "φ = Q_enclosed / ε₀" },
    ],
  },
  "Physics::Electrostatic Potential and Capacitance": {
    formulas: [
      { title: "Electric Potential", formula: "V = kq/r = W/q" },
      { title: "Potential Energy", formula: "U = kq₁q₂/r" },
      { title: "Capacitance", formula: "C = Q/V" },
      { title: "Parallel Plate Capacitor", formula: "C = ε₀A/d" },
      { title: "Series Capacitors", formula: "1/C = 1/C₁ + 1/C₂" },
      { title: "Parallel Capacitors", formula: "C = C₁ + C₂" },
      { title: "Energy stored", formula: "U = ½CV² = Q²/2C" },
    ],
  },
  "Physics::Current Electricity": {
    formulas: [
      { title: "Ohm's Law", formula: "V = IR" },
      { title: "Resistivity", formula: "R = ρL/A" },
      { title: "Kirchhoff's Current Law", formula: "ΣI = 0 (at a junction)" },
      {
        title: "Kirchhoff's Voltage Law",
        formula: "ΣV = 0 (in a closed loop)",
      },
      { title: "Wheatstone Bridge", formula: "P/Q = R/S (balanced condition)" },
      {
        title: "EMF",
        formula: "ε = V + Ir",
        description: "r = internal resistance",
      },
      { title: "Power", formula: "P = VI = I²R = V²/R" },
    ],
  },
  "Physics::Moving Charges and Magnetism": {
    formulas: [
      { title: "Magnetic Force on charge", formula: "F = qv×B = qvB sin θ" },
      { title: "Biot-Savart Law", formula: "dB = μ₀Idl sin θ / 4πr²" },
      { title: "Ampere's Law", formula: "∮B·dl = μ₀I" },
      { title: "Magnetic field (wire)", formula: "B = μ₀I / 2πr" },
      { title: "Cyclotron frequency", formula: "ν = qB / 2πm" },
      { title: "Torque on coil", formula: "τ = NIAB sin θ" },
    ],
  },
  "Physics::Alternating Current": {
    formulas: [
      { title: "RMS Voltage", formula: "Vrms = V₀/√2" },
      { title: "RMS Current", formula: "Irms = I₀/√2" },
      { title: "Impedance (RLC)", formula: "Z = √(R² + (XL-XC)²)" },
      { title: "Inductive Reactance", formula: "XL = ωL = 2πfL" },
      { title: "Capacitive Reactance", formula: "XC = 1/ωC = 1/2πfC" },
      { title: "Resonant Frequency", formula: "f₀ = 1 / 2π√(LC)" },
      { title: "Power", formula: "P = Vrms × Irms × cos φ" },
      { title: "Power Factor", formula: "cos φ = R/Z" },
    ],
  },
  "Physics::Wave Optics": {
    formulas: [
      {
        title: "Fringe Width (Young's)",
        formula: "β = λD/d",
        description: "λ=wavelength, D=screen dist, d=slit separation",
      },
      { title: "Path Difference (maxima)", formula: "Δ = nλ" },
      { title: "Path Difference (minima)", formula: "Δ = (2n-1)λ/2" },
      { title: "Brewster's Angle", formula: "tan θ_B = n" },
    ],
  },
  "Physics::Dual Nature of Radiation and Matter": {
    formulas: [
      {
        title: "Planck's equation",
        formula: "E = hν = hc/λ",
        description: "h = 6.626×10⁻³⁴ Js",
      },
      {
        title: "Photoelectric equation",
        formula: "KE_max = hν - φ",
        description: "φ = work function",
      },
      { title: "de Broglie wavelength", formula: "λ = h/mv = h/p" },
      { title: "Stopping potential", formula: "eV₀ = KE_max" },
    ],
  },

  // ── CLASS 12 MATHEMATICS ─────────────────────────────────────────────────────
  "Mathematics::Inverse Trigonometric Functions": {
    formulas: [
      { title: "Domain of sin⁻¹", formula: "[-1, 1] → [-π/2, π/2]" },
      { title: "Domain of cos⁻¹", formula: "[-1, 1] → [0, π]" },
      { title: "Domain of tan⁻¹", formula: "ℝ → (-π/2, π/2)" },
      { title: "sin⁻¹(-x)", formula: "= -sin⁻¹(x)" },
      { title: "cos⁻¹(-x)", formula: "= π - cos⁻¹(x)" },
      { title: "sin⁻¹x + cos⁻¹x", formula: "= π/2" },
      { title: "tan⁻¹x + cot⁻¹x", formula: "= π/2" },
      { title: "tan⁻¹x + tan⁻¹y", formula: "= tan⁻¹((x+y)/(1-xy)), xy < 1" },
    ],
  },
  "Mathematics::Determinants": {
    formulas: [
      { title: "2×2 Determinant", formula: "|a b; c d| = ad - bc" },
      {
        title: "Area of Triangle",
        formula: "A = ½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|",
      },
      { title: "Adjoint", formula: "adj(A) = transpose of cofactor matrix" },
      { title: "Inverse", formula: "A⁻¹ = adj(A)/|A|, if |A| ≠ 0" },
    ],
  },
  "Mathematics::Continuity and Differentiability": {
    formulas: [
      { title: "d/dx(xⁿ)", formula: "= nxⁿ⁻¹" },
      { title: "d/dx(eˣ)", formula: "= eˣ" },
      { title: "d/dx(ln x)", formula: "= 1/x" },
      { title: "d/dx(sin x)", formula: "= cos x" },
      { title: "d/dx(cos x)", formula: "= -sin x" },
      { title: "d/dx(tan x)", formula: "= sec²x" },
      { title: "Chain Rule", formula: "dy/dx = (dy/du)(du/dx)" },
      { title: "Product Rule", formula: "d/dx(uv) = u(dv/dx) + v(du/dx)" },
      { title: "Quotient Rule", formula: "d/dx(u/v) = (v·du/dx - u·dv/dx)/v²" },
      {
        title: "Rolle's Theorem",
        formula: "f'(c) = 0, c ∈ (a,b) if f(a)=f(b)",
      },
      { title: "Mean Value Theorem", formula: "f'(c) = (f(b)-f(a))/(b-a)" },
    ],
  },
  "Mathematics::Application of Derivatives": {
    formulas: [
      { title: "Slope of tangent", formula: "m = dy/dx at point (x₀, y₀)" },
      { title: "Normal slope", formula: "m_normal = -1/(dy/dx)" },
      { title: "Maxima condition", formula: "f'(x) = 0 and f''(x) < 0" },
      { title: "Minima condition", formula: "f'(x) = 0 and f''(x) > 0" },
      { title: "Rate of change", formula: "dy/dt = (dy/dx)(dx/dt)" },
    ],
  },
  "Mathematics::Integrals": {
    formulas: [
      { title: "∫xⁿ dx", formula: "= xⁿ⁺¹/(n+1) + C" },
      { title: "∫eˣ dx", formula: "= eˣ + C" },
      { title: "∫1/x dx", formula: "= ln|x| + C" },
      { title: "∫sin x dx", formula: "= -cos x + C" },
      { title: "∫cos x dx", formula: "= sin x + C" },
      { title: "∫sec²x dx", formula: "= tan x + C" },
      { title: "∫1/√(1-x²) dx", formula: "= sin⁻¹x + C" },
      { title: "∫1/(1+x²) dx", formula: "= tan⁻¹x + C" },
      { title: "Integration by Parts", formula: "∫u dv = uv - ∫v du" },
      { title: "Definite Integral", formula: "∫ₐᵇ f(x) dx = F(b) - F(a)" },
    ],
  },
  "Mathematics::Differential Equations": {
    formulas: [
      { title: "Order", formula: "Highest order derivative in the equation" },
      {
        title: "Degree",
        formula: "Power of highest order derivative (when polynomial)",
      },
      {
        title: "Variable Separable",
        formula: "dy/dx = f(x)g(y) → ∫dy/g(y) = ∫f(x)dx",
      },
      { title: "Linear DE", formula: "dy/dx + Py = Q → IF = e^∫P dx" },
    ],
  },
  "Mathematics::Vector Algebra": {
    formulas: [
      { title: "Magnitude", formula: "|a| = √(a₁² + a₂² + a₃²)" },
      { title: "Dot Product", formula: "a·b = |a||b|cos θ = a₁b₁+a₂b₂+a₃b₃" },
      { title: "Cross Product Magnitude", formula: "|a×b| = |a||b|sin θ" },
      { title: "Angle between vectors", formula: "cos θ = (a·b)/(|a||b|)" },
      { title: "Unit vector", formula: "â = a/|a|" },
    ],
  },
  "Mathematics::Three Dimensional Geometry": {
    formulas: [
      {
        title: "Distance formula",
        formula: "d = √[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]",
      },
      { title: "Direction cosines", formula: "l²+m²+n² = 1" },
      { title: "Angle between lines", formula: "cos θ = |l₁l₂+m₁m₂+n₁n₂|" },
      { title: "Equation of plane", formula: "ax + by + cz = d" },
      {
        title: "Distance point to plane",
        formula: "d = |ax₁+by₁+cz₁-d| / √(a²+b²+c²)",
      },
    ],
  },

  // ── CLASS 12 CHEMISTRY ───────────────────────────────────────────────────────
  "Chemistry::Solutions": {
    formulas: [
      {
        title: "Molarity",
        formula: "M = n/V (mol/L)",
        description: "n = moles of solute, V = volume in litres",
      },
      { title: "Molality", formula: "m = n/W_solvent (mol/kg)" },
      { title: "Mole Fraction", formula: "χ_A = n_A / (n_A + n_B)" },
      { title: "Raoult's Law", formula: "p_A = χ_A × p°_A" },
      { title: "Henry's Law", formula: "p = K_H × χ" },
      { title: "Elevation of BP", formula: "ΔT_b = K_b × m" },
      { title: "Depression of FP", formula: "ΔT_f = K_f × m" },
      { title: "Osmotic Pressure", formula: "π = CRT = (n/V)RT" },
    ],
  },
  "Chemistry::Electrochemistry": {
    formulas: [
      {
        title: "Nernst Equation",
        formula: "E = E° - (RT/nF) ln Q",
        description: "At 25°C: E = E° - (0.0592/n) log Q",
      },
      { title: "ΔG and E", formula: "ΔG° = -nFE°" },
      { title: "Faraday's 1st Law", formula: "m = ZIt = (M/nF)It" },
      { title: "Conductance", formula: "G = 1/R" },
      { title: "Molar Conductivity", formula: "Λ_m = κ × 1000/M" },
    ],
  },
  "Chemistry::Chemical Kinetics": {
    formulas: [
      {
        title: "Rate Law",
        formula: "r = k[A]ᵐ[B]ⁿ",
        description: "m+n = overall order",
      },
      { title: "First Order", formula: "k = (2.303/t) log([A]₀/[A])" },
      { title: "Half-life (1st order)", formula: "t₁/₂ = 0.693/k" },
      { title: "Arrhenius Equation", formula: "k = Ae^(-Ea/RT)" },
      {
        title: "Activation Energy",
        formula: "log(k₂/k₁) = Ea/2.303R × (1/T₁ - 1/T₂)",
      },
    ],
  },

  // ── JEE PHYSICS ──────────────────────────────────────────────────────────────
  "JEE Physics::Laws of Motion": {
    formulas: [
      { title: "Newton's 2nd Law", formula: "F = ma" },
      { title: "Impulse", formula: "J = F·Δt = Δp" },
      { title: "Friction (static)", formula: "f ≤ μₛN" },
      { title: "Friction (kinetic)", formula: "f = μₖN" },
    ],
  },
  "JEE Physics::Work Energy Power": {
    formulas: [
      { title: "Work", formula: "W = F·d·cos θ" },
      { title: "Kinetic Energy", formula: "KE = ½mv²" },
      { title: "Potential Energy (gravity)", formula: "PE = mgh" },
      { title: "Power", formula: "P = W/t = F·v" },
      { title: "Work-Energy Theorem", formula: "W_net = ΔKE" },
    ],
  },
};
