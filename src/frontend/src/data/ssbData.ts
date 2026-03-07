// SSB (Services Selection Board) Data
// 5-day evaluation process for Indian Armed Forces

export interface SSBTask {
  name: string;
  description: string;
  tips: string;
  videoUrl: string;
}

export interface SSBDay {
  day: number;
  title: string;
  subtitle: string;
  color: string;
  tasks: SSBTask[];
  dayNotes: string;
}

export interface SSBQAEntry {
  q: string;
  a: string;
  section: string;
}

const YT = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const SSB_OVERVIEW = {
  title: "Services Selection Board (SSB)",
  subtitle: "Indian Armed Forces Officer Selection Process",
  description:
    "The Services Selection Board (SSB) is the selection body for officers in the Indian Army, Navy, and Air Force. The SSB process is a comprehensive 5-day psychological and physical evaluation designed to identify candidates with Officer Like Qualities (OLQs). Unlike written exams, SSB tests your personality, leadership potential, and mental strength.",
  eligibility:
    "Candidates who have cleared NDA, CDS, AFCAT, or TGC written exams. Also direct entries: SSC (Short Service Commission), Women Special Entry, Technical Entry, etc.",
  olqs: [
    "Effective Intelligence",
    "Reasoning Ability",
    "Organising Ability",
    "Power of Expression",
    "Social Adaptability",
    "Cooperation",
    "Sense of Responsibility",
    "Initiative",
    "Self-Confidence",
    "Speed of Decision",
    "Ability to Influence the Group",
    "Stamina (Physical & Mental)",
    "Courage",
    "Fighting Spirit",
    "Officer Like Potential (OLP)",
  ],
};

export const SSB_DAYS: SSBDay[] = [
  // ── DAY 1 ────────────────────────────────────────────────────────────────
  {
    day: 1,
    title: "Day 1 – Screening Tests",
    subtitle: "OIR Test + PPDT",
    color: "oklch(0.48 0.18 264)",
    dayNotes:
      "Day 1 is the screening day. On this day, approximately 50-70% of candidates are screened out. Only those who pass Day 1 continue for the remaining 4 days. The two tests on Day 1 are OIR (Officer Intelligence Rating Test) and PPDT (Picture Perception and Description Test). Your chest number is allotted after reporting — treat it as your identity for all 5 days.",
    tasks: [
      {
        name: "OIR Test (Officer Intelligence Rating)",
        description:
          "The OIR Test measures your verbal and non-verbal intelligence. It consists of two booklets: Verbal (analogies, classification, series, coding-decoding, comprehension) and Non-Verbal (figure series, figure classification, mirror image, embedded figures). Approximately 50-60 questions per booklet. Time: about 17-20 minutes per booklet. No negative marking. The test gives an intelligence rating from 1 (highest) to 5 (lowest). OIR rating combined with PPDT performance determines if you are screened in.",
        tips: "Attempt maximum questions — accuracy matters but so does attempt rate. For verbal: read question carefully but move fast. For non-verbal: use elimination method — cancel obviously wrong options. Practice 50+ OIR questions daily for 3 weeks before SSB. Target: attempt at least 80% of questions with 75%+ accuracy.",
        videoUrl: YT("OIR test SSB preparation tips"),
      },
      {
        name: "PPDT – Picture Perception",
        description:
          "A hazy/unclear picture is shown on screen for 30 seconds. You observe the picture and note: number of characters, approximate age and mood of characters, and what is happening. You then write a 4-minute story (approx 60-80 words) based on what you perceived. The story must have a hero/main character, a past (what led to this situation), present (what is happening), and future (positive outcome). After writing, all candidates in your group (10-15 persons) narrate their stories aloud in 1 minute each.",
        tips: "Always write a POSITIVE story — hero must take initiative and achieve something. Include at least 3 characters with clear roles. Your hero should be proactive, responsible, and successful. In group narration: speak clearly, make eye contact with the group, maintain confident body language. During group discussion: contribute your story's theme, be logical and persuasive, don't shout but ensure you speak at least 3-4 times.",
        videoUrl: YT("PPDT SSB picture perception tips stories"),
      },
    ],
  },

  // ── DAY 2 ────────────────────────────────────────────────────────────────
  {
    day: 2,
    title: "Day 2 – Psychology Tests",
    subtitle: "TAT + WAT + SRT + SD",
    color: "oklch(0.52 0.17 335)",
    dayNotes:
      "Day 2 is the Psychology Test day. All four tests together take approximately 3-4 hours. These tests are designed to reveal your subconscious personality, values, and responses. Your responses are compared with your real behaviour (GTO and Interview). Consistency is key — be genuine throughout all tests. The psychologist is not looking for 'perfect' answers but for genuine Officer Like Qualities.",
    tasks: [
      {
        name: "TAT – Thematic Apperception Test",
        description:
          "Similar to PPDT but 11 pictures + 1 blank slide (12 total). Each picture is shown for 30 seconds. You write a story (4 minutes each) for the first 11 pictures, and for the blank slide you write any story of your choice. Total time: approximately 60 minutes. Pictures are hazy/unclear to allow interpretation. Stories reveal your personality, motivations, and values.",
        tips: "All stories MUST have: hero who takes positive initiative, a problem/challenge, a concrete action by hero, and a positive/successful outcome. Hero should ideally be in a service/helping/leadership role. Avoid negative themes: death, failure, conflict without resolution, victim mentality. Blank slide story: write your most positive, confident story — this is your best chance to show your ideal self. Each story should be 8-12 lines. Work fast: don't overthink.",
        videoUrl: YT("TAT SSB thematic apperception test tips stories"),
      },
      {
        name: "WAT – Word Association Test",
        description:
          "60 words are flashed on screen, one at a time, for 15 seconds each. For each word, write the first positive/meaningful sentence that comes to your mind. Words can be common nouns (courage, fear, failure, mother, country) or action words (fight, run, help, lead) or abstract (justice, honour, sacrifice). Total: 60 sentences in 15 minutes.",
        tips: "Do NOT overthink — write the first meaningful sentence. Each sentence must show positive qualities: courage, patriotism, responsibility, teamwork, service. For negative words like 'failure', 'fear', 'problem' — write how to overcome them. Example: Word: FAILURE → Sentence: 'Failure is a stepping stone to success if one learns from mistakes.' Avoid: 'I am afraid of failure.' Practice by reading WAT words and forming instant sentences daily for 3 weeks.",
        videoUrl: YT("WAT SSB word association test preparation"),
      },
      {
        name: "SRT – Situation Reaction Test",
        description:
          "60 situations are given in a booklet. Time: 30 minutes (30 seconds per situation). Each situation describes a real-life challenge/emergency. You write what you would do in that situation. Situations cover: natural disaster, accident, social injustice, group conflict, administrative challenge, moral dilemma.",
        tips: "Your response reveals your: quick thinking, decision-making, social responsibility, initiative. Always respond as the FIRST person (I would...). Actions must be: practical, quick, responsible, helpful to others. Avoid passive responses like 'I would wait for help'. Example situation: 'You see a road accident and the driver needs urgent help but bystanders are hesitant' → 'I would immediately stop, call 108, administer first aid if trained, coordinate bystanders to manage traffic, and stay till ambulance arrives.' Write brief but clear actions.",
        videoUrl: YT("SRT SSB situation reaction test examples"),
      },
      {
        name: "SD – Self Description",
        description:
          "5 paragraphs to write about yourself as perceived by: (1) Your Parents, (2) Your Teachers, (3) Your Friends, (4) Yourself, (5) Your ideal self (who you want to become). Time: 15 minutes. Each paragraph: 3-5 sentences.",
        tips: "Be genuine — IO (Interviewing Officer) will ask questions based on your SD. Don't write only positives — mention 1-2 weaknesses and how you are working on them. Show consistency across all four views. Self (Para 4): be honest about your personality traits. Ideal Self (Para 5): connect to officer qualities you genuinely aspire to develop. Avoid: copy-paste military phrases you don't mean. Be specific: don't write 'I am good at sports' — write 'I play cricket at district level.' This specificity makes you memorable.",
        videoUrl: YT("self description SSB psychology test"),
      },
    ],
  },

  // ── DAYS 3–4 ─────────────────────────────────────────────────────────────
  {
    day: 3,
    title: "Days 3–4 – GTO Tasks",
    subtitle: "Group Testing Officer Tasks (Outdoor)",
    color: "oklch(0.55 0.16 142)",
    dayNotes:
      "GTO (Group Testing Officer) tasks take place over Days 3 and 4. These are outdoor group activities designed to observe leadership, teamwork, communication, initiative, and physical ability. Your group is 8-12 candidates with the same chest numbers. GTO observes from a distance without interfering. Some centres split GTO over 2 days differently — Day 3 may be full day GTO, Day 4 half day GTO + part of IO round.",
    tasks: [
      {
        name: "GD – Group Discussion",
        description:
          "Two rounds: (1) General topic (social/national issue), (2) Current affairs topic or a given case study. 10-15 minutes per round. The group discusses without a moderator. No one is designated as leader.",
        tips: "DO NOT shout or dominate by volume. Speak clearly, confidently, and add value. Initiate the discussion if possible — it shows leadership. Listen actively: reference what others said, build on it. Bring the group to a consensus if discussion is going nowhere. Quality > Quantity: 3-4 well-structured contributions are better than 10 scattered interruptions. Facts matter: support your point with data/examples. Maintain eye contact with the group (not the GTO).",
        videoUrl: YT("group discussion SSB GTO preparation"),
      },
      {
        name: "GPE – Group Planning Exercise",
        description:
          "The group is given a model (physical layout of a disaster/emergency area) and a written narrative describing the problem. The group must plan a solution in 10 minutes, then give a group plan in 10-15 minutes. Individual plans are written first (5 min), then the group discusses and presents a common plan.",
        tips: "Study the model carefully — note resources, obstacles, distances, time constraints. Your individual plan: prioritise tasks by urgency and importance, assign roles, set timeline. In group discussion: contribute your best ideas, accept better suggestions graciously. The group plan presenter should summarise all contributions — volunteer for this. Key skills tested: analytical thinking, time management, resource allocation, teamwork.",
        videoUrl: YT("GPE group planning exercise SSB GTO"),
      },
      {
        name: "PGT & HGT – Progressive/Half Group Task",
        description:
          "Obstacle tasks done on a field using limited resources (wooden planks, ropes, barrel, balli/pole). The group must cross from point A to B without touching 'out-of-bounds' areas using only the given equipment. PGT: full group (10-12). HGT: half group (5-6). Both have 3-4 obstacles in a series.",
        tips: "OBSERVE first: understand the obstacle geometry before acting. Suggest a plan LOUDLY and CLEARLY — don't just do things silently. Help teammates cross — lifting/supporting others scores very high. Don't give up on a failed attempt: quickly suggest a new approach. Physical fitness helps but is not the primary criterion. Leadership = giving practical solutions + executing them + helping others. Stay calm when your approach fails.",
        videoUrl: YT("PGT HGT SSB GTO group task preparation"),
      },
      {
        name: "IO – Individual Obstacles",
        description:
          "A series of 10 individual obstacles (Tarzan swing, Burma bridge, Jumping Ditch, Commando Net, Figure 8, Balancing Beam, etc.) with different point values (3, 2, 1). Time limit: 3 minutes. Attempt in any order you choose.",
        tips: "Start with high-value obstacles (3 points) you are confident about. Continuous motion scores better than standing still thinking. Don't skip low-value obstacles — attempt everything. Physical training: practice climbing, jumping, balancing. 3 months before SSB: daily physical training including running (5km daily), push-ups (50+), pull-ups (10+), rope climbing. GTO is looking at your energy level, fearlessness, and stamina — not just success at each obstacle.",
        videoUrl: YT("individual obstacles IO SSB preparation"),
      },
      {
        name: "Command Task",
        description:
          "You are the commander. Select 2 of your group members as your subordinates. With their help, complete an obstacle (similar to PGT) in 10-15 minutes. GTO gives you a specific task — plan and execute.",
        tips: "This tests LEADERSHIP DIRECTLY. Give clear, concise instructions to your subordinates. Keep them motivated — say 'well done', 'we can do this'. Execute your own plan first, then adapt if needed. Physical strength helps but communication and decision-making matter more. After the task: debrief briefly — thank your team, reflect on what worked. Avoid blaming subordinates if things go wrong.",
        videoUrl: YT("command task SSB GTO preparation"),
      },
      {
        name: "Lecturette",
        description:
          "Individual task. Pick one of 4 topics (cards face-down). Prepare for 3 minutes. Deliver a 3-minute lecture/talk on the chosen topic to the group. Topics can be: social issues, current affairs, military/defence, general knowledge, abstract themes.",
        tips: "Structure: 30-sec introduction → 2 key points (1 min each) → 30-sec conclusion. Maintain eye contact with the entire group — look at everyone, not just the GTO. Speak clearly and with confidence (not speed). Use examples and facts. For current affairs topics: know recent events. For abstract topics: connect to practical/social relevance. Voice modulation: vary your pace and tone to keep audience engaged. Body language: stand straight, no fidgeting.",
        videoUrl: YT("lecturette SSB GTO topic preparation"),
      },
      {
        name: "FGT – Final Group Task",
        description:
          "Same as PGT but done at the end of all GTO activities. Full group again. GTO observes any changes in group dynamics and individual performance over the full 2 days.",
        tips: "By FGT, you know your groupmates' strengths. Utilise them: assign the physically strong one for carrying loads, the creative one for planning. Show growth: if you were quiet earlier, be more assertive now. Consistent performance across PGT and FGT shows genuine personality. Encourage group members who are struggling — this shows OLQs like social adaptability and cooperation.",
        videoUrl: YT("final group task SSB GTO FGT"),
      },
    ],
  },

  // ── DAY 4 (IO Interview) ──────────────────────────────────────────────────
  {
    day: 4,
    title: "Day 4 – Personal Interview",
    subtitle: "IO (Interviewing Officer) Round",
    color: "oklch(0.58 0.19 30)",
    dayNotes:
      "The Personal Interview (PI) with the Interviewing Officer (IO) usually happens on Day 4 or Day 5, scheduled individually. Duration: 45-60 minutes. The IO has read your PIQ (Personal Information Questionnaire) that you filled on Day 1. All questions are based on your PIQ and SD (Self Description from Day 2). The IO is friendly — this is a professional conversation, not an interrogation.",
    tasks: [
      {
        name: "PIQ – Personal Information Questionnaire",
        description:
          "Filled on Day 1, the PIQ contains: educational background, family details, hobbies, sports, achievements, current affairs knowledge, reasons for joining the forces, extra-curricular activities, home district details. The IO uses PIQ as the base for interview questions. Every detail you write in PIQ will be questioned.",
        tips: "Fill PIQ truthfully — never exaggerate. If you write a hobby, be prepared to discuss it deeply (if chess: know basic openings, recent world chess news). For achievements: quantify them (district level, state level, national level). Explain your reasons for joining the forces clearly — it should sound genuine, not rehearsed. Know your home district (important sites, industries, historical significance, current news).",
        videoUrl: YT("PIQ personal information questionnaire SSB tips"),
      },
      {
        name: "Personal Interview Questions",
        description:
          "The IO asks about: your life story, family background, education, why you want to join the forces, awareness of current affairs, knowledge about the arm you are applying for (Army/Navy/Air Force), your strengths and weaknesses, leadership experiences, hobbies and interests, failures and how you dealt with them.",
        tips: "Prepare your life story as a 3-minute narrative (childhood → education → achievements → future plan). Know your service (Army/Navy/AF) in depth: ranks, regiments, famous battles, current operations, equipment. Current affairs: read newspaper daily (Hindu or Indian Express) for 3 months before SSB. Be honest about weaknesses — say what you are doing to improve. Maintain eye contact. Sit straight. Speak in English confidently (or Hindi if you are more comfortable — some centres allow). Never lie: IO can sense inconsistency.",
        videoUrl: YT("personal interview SSB IO questions preparation"),
      },
    ],
  },

  // ── DAY 5 ────────────────────────────────────────────────────────────────
  {
    day: 5,
    title: "Day 5 – Conference & Result",
    subtitle: "Conference Board + Final Selection Announcement",
    color: "oklch(0.75 0.18 52)",
    dayNotes:
      "Day 5 is the Conference day. All board members (Psychologist, GTO, IO, Deputy President) sit together. Each candidate appears before the full board for 2-3 minutes. This is NOT a fresh interview — the board members already know you from their individual assessments. The conference is a final check: the board members discuss any inconsistencies or borderline cases. After all conferences, results are announced the same afternoon.",
    tasks: [
      {
        name: "Conference Procedure",
        description:
          "You will be called into the conference room where all board members sit at a table. You sit facing them. The President of the Board may ask 1-3 quick questions: 'How was your experience?', 'Are you confident of your performance?', 'What would you do if you are not selected today?'. Then you are asked to wait outside. After all candidates appear, the board discusses and announces the recommended candidates.",
        tips: "Dress properly: ironed shirt/trousers, polished shoes, clean shave. Be confident in conference — this is your last impression. Answer honestly: if asked 'How was your performance?', be honest (don't say 'excellent' if it wasn't, but don't be falsely modest either). For 'What if you are not selected': answer positively — you will identify weaknesses, train harder, and try again. Never show desperation or pressure. The board respects candidates who are at peace with the process.",
        videoUrl: YT("SSB conference day procedure tips"),
      },
      {
        name: "After Result – Recommended & Not Recommended",
        description:
          "If recommended: you will appear for a medical board (3-5 days) to check physical and medical fitness. If medically fit and merit allows, you join the academy. If not recommended: you can attempt again (Army allows multiple attempts; Navy/AF have attempt limits). Use the feedback (if given) to improve.",
        tips: "If recommended: medical board check-up covers vision (6/6 corrected, no colour blindness for pilot), hearing, orthopaedics, blood pressure, ECG, chest X-ray. Keep a healthy lifestyle before medical. If not recommended: request a debrief from the GTO/IO. Common reasons for rejection: inconsistency between psych tests and reality, very low OIR grade, poor communication, lack of initiative. Treat failure as data — identify exactly which OLQ was weak and train that specifically.",
        videoUrl: YT("SSB result recommended not recommended what next"),
      },
    ],
  },
];

export const SSB_QA: SSBQAEntry[] = [
  {
    section: "General SSB",
    q: "What is OLQ and why is it important in SSB?",
    a: "OLQ stands for Officer Like Qualities — 15 qualities the Indian Armed Forces seek in officers. They include Effective Intelligence, Reasoning Ability, Organising Ability, Power of Expression, Social Adaptability, Cooperation, Responsibility, Initiative, Self-Confidence, Speed of Decision, Ability to Influence the Group, Physical Stamina, Mental Stamina, Courage, Fighting Spirit, and Officer Like Potential. OLQs are assessed through all SSB tests collectively — no single test reveals all OLQs. A candidate is recommended only when board members independently observe consistent OLQs across all activities.",
  },
  {
    section: "General SSB",
    q: "How many times can one attempt SSB?",
    a: "Army: Unlimited attempts if you keep clearing the written exam (NDA, CDS, etc.). Navy: Usually limited to 3-4 attempts total. Air Force (AFCAT): Usually 3-4 attempts. NDA: 6 attempts (if age allows). Once screened in to SSB, the attempt does not count unless you attend fully. Always check the latest official notification for current attempt limits.",
  },
  {
    section: "Day 1 – OIR",
    q: "What is the scoring in OIR and what is a good OIR rating?",
    a: "OIR (Officer Intelligence Rating) is scored from 1 to 5: Rating 1 = Excellent (top 5-10%), Rating 2 = Above Average, Rating 3 = Average, Rating 4 = Below Average, Rating 5 = Poor. To be recommended, a candidate ideally needs OIR 1 or 2. OIR 3 is borderline — you need very strong performance in GTO, Psych, and Interview to compensate. OIR 4 or 5 makes recommendation very unlikely. Practice verbal and non-verbal reasoning for at least 4-6 weeks to improve your OIR score.",
  },
  {
    section: "Day 1 – PPDT",
    q: "What makes a good PPDT story?",
    a: "A good PPDT story must have: (1) A clear central character (hero) who is proactive and takes initiative; (2) A past — what situation led to the current scene; (3) A present — the challenge or action happening in the picture; (4) A positive future — the hero succeeds, helps others, or achieves the goal. The story should be 60-90 words in 4 minutes. Always make the hero a doer (not a victim). The hero should show: courage, leadership, social responsibility, or service to others. Avoid negative endings, death, or failure without resolution.",
  },
  {
    section: "Day 2 – Psychology",
    q: "Can you lie or exaggerate in TAT stories to impress the psychologist?",
    a: "No — and this is a common mistake. The psychologist is trained to detect inconsistency. If your TAT stories are uniformly heroic and perfect but your SRT responses are hesitant or your SD shows insecurity, the inconsistency flags you. Be genuine: it is okay to write a character who struggles but ultimately perseveres. Show growth, initiative, and positive values — but do so through authentic-sounding situations. Candidates who try too hard to appear perfect often come across as fake. Consistency across TAT, WAT, SRT, and SD is more important than perfection in any one test.",
  },
  {
    section: "Day 2 – WAT",
    q: "What are some example WAT words and ideal responses?",
    a: "COURAGE: 'Courage is the cornerstone of leadership; it means doing what is right even when it is difficult.' | FAILURE: 'Every failure is a lesson; an officer learns from mistakes and comes back stronger.' | MOTHER: 'My mother's sacrifices and values shaped who I am today.' | COUNTRY: 'Serving the nation is the highest honour a citizen can aspire to.' | ENEMY: 'Understanding the enemy's strategy is essential to defeating them effectively.' | PROBLEM: 'I face every problem as an opportunity to demonstrate my ability to find solutions.' Key rule: always frame words positively — show initiative, service, resilience, and patriotism.",
  },
  {
    section: "Day 3-4 – GTO",
    q: "What are the most important things GTO observes?",
    a: "GTO primarily observes: (1) Initiative — do you start tasks or wait for others? (2) Communication — do you give clear, loud, actionable instructions? (3) Cooperation — do you help teammates, or only focus on personal performance? (4) Decision-making under time pressure — do you change approach quickly when something fails? (5) Physical energy — are you always active and engaged? (6) Leadership without authority — can you lead when no one appointed you as leader? Common mistakes: being silent during discussions, physically dominant but silent, or talking a lot without contributing solutions.",
  },
  {
    section: "Day 3-4 – GTO",
    q: "How do I prepare physically for GTO tasks?",
    a: "Physical preparation (3 months before SSB): Running: 5km daily at 6-minute/km pace. Upper body: 50+ push-ups, 10+ pull-ups. Core: 50 sit-ups, planks. Obstacle practice: rope climbing, box jumps, hurdles. Swimming (useful for Navy SSB). Target physical standards: 1.6 km in 7 minutes, push-ups 40 in 2 minutes. GTO is not primarily about strength — it is about energy, fearlessness, and teamwork. A fit but arrogant candidate scores less than a moderately fit but cooperative, communicative one.",
  },
  {
    section: "Personal Interview",
    q: "What current affairs topics are important for SSB interview?",
    a: "For Army SSB: ongoing military operations, Indian Army equipment (tanks, helicopters, missiles — Arjun, ALH Dhruv, BrahMos), border tensions (Line of Actual Control, Line of Control), recent Army exercises (Yudh Abhyas, Shakti), Agnipath scheme, welfare of soldiers. For Navy: INS Vikrant (first indigenous aircraft carrier), submarine fleet, maritime borders, South China Sea. For Air Force: Rafale jets, Tejas LCA, AFCAT details. General: India's foreign policy, recent PM/President visits, India-China-Pakistan relations, Quad, BRICS, SCO. Also: local state affairs, economics basics, budget highlights.",
  },
  {
    section: "Personal Interview",
    q: "How should I answer 'Why do you want to join the Armed Forces?'",
    a: "This is the most important interview question. Avoid clichéd answers like 'I want to serve my country' without substance. A good answer: (1) Personal motivation — connect it to a real experience (saw soldiers during a flood relief, came from a family with defence background, was inspired by a specific event). (2) Specific attraction to the service — what specifically draws you to Army/Navy/AF (the discipline, the leadership culture, the physical lifestyle, the camaraderie, the career structure). (3) Long-term vision — what kind of officer do you want to be, what contribution you hope to make. The answer should be personal, specific, and delivered with conviction — not rehearsed sounding.",
  },
  {
    section: "Day 5 – Conference",
    q: "What happens if all three board members (Psych, GTO, IO) disagree on a candidate?",
    a: "During conference, the Deputy President of the Board reviews all reports. If there is a disagreement (e.g., Psych recommends, GTO does not), the candidate is called for a brief conference with the full board. The board discusses the inconsistency. If the majority recommends and the inconsistency can be explained, the candidate may be recommended. However, if the inconsistency is serious (e.g., excellent psych profile but clearly poor GTO performance), the candidate is likely not recommended. This is why consistency across all 5 days is critical — you cannot 'win' only one section.",
  },
  {
    section: "Preparation Tips",
    q: "What books and resources should I use to prepare for SSB?",
    a: "Essential books: (1) 'Let's Crack SSB Interview' by Arihant Publications — comprehensive, covers all tests. (2) 'Word Power Made Easy' by Norman Lewis — for WAT vocabulary. (3) 'Screening Test (OIR and PPDT)' by SSBCrack — practice problems. Online: SSBCrack.com (free articles, GTO strategies), YouTube channels: SSBCrack (detailed video lessons), MKC Defence (strategy), Major Kalshi Classes (NDA/SSB). Newspapers: The Hindu or Hindustan Times daily (30-min reading). Apps: SSBCrack app for daily practice questions.",
  },
  {
    section: "Preparation Tips",
    q: "How many months does it take to prepare for SSB?",
    a: "For first-time candidates: 3-6 months of dedicated preparation. Week 1-4: Basic OIR practice (verbal + non-verbal reasoning). Week 5-8: TAT story writing practice (2 stories/day), WAT practice (50 words/day), SRT practice (60 situations/week). Week 9-12: Physical training, GTO mock sessions (join a mock SSB center if possible), newspaper reading for current affairs. Week 13-16: Interview preparation — PIQ filling practice, mock interviews, current affairs revision. Candidates who attend mock SSBs (available in Allahabad, Bhopal, Pune, Delhi) have significantly higher success rates.",
  },
];
