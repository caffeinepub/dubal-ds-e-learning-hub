import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Languages, u as ue } from "./index-D7Bnl27d.js";
import { B as Badge } from "./badge-DiBBPkbV.js";
import { B as Button } from "./button-BJmEzQ53.js";
import { T as Textarea } from "./textarea-CQ5q3KAr.js";
import { C as ChevronRight } from "./chevron-right-BPWNPai_.js";
import { C as Copy } from "./copy-CEdqjeX6.js";
import "./index-DtTjcueB.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const WORDS = {
  // Greetings & basics
  hello: {
    hi: "नमस्ते",
    ta: "வணக்கம்",
    te: "నమస్కారం",
    bn: "নমস্কার",
    mr: "नमस्कार",
    gu: "નમસ્તે",
    kn: "ನಮಸ್ಕಾರ",
    ml: "നമസ്കാരം",
    pa: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    or: "ନମସ୍କାର"
  },
  hi: {
    hi: "नमस्ते",
    ta: "வணக்கம்",
    te: "నమస్కారం",
    bn: "হাই",
    mr: "नमस्ते",
    gu: "હાઇ",
    kn: "ಹಾಯ್",
    ml: "ഹായ്",
    pa: "ਹੈਲੋ",
    or: "ହେଲୋ"
  },
  goodbye: {
    hi: "अलविदा",
    ta: "விடைபெறுகிறேன்",
    te: "వీడ్కోలు",
    bn: "বিদায়",
    mr: "निरोप",
    gu: "આવજો",
    kn: "ವಿದಾಯ",
    ml: "വിട",
    pa: "ਅਲਵਿਦਾ",
    or: "ବିଦାୟ"
  },
  bye: {
    hi: "अलविदा",
    ta: "பை",
    te: "వెళ్తాను",
    bn: "বিদায়",
    mr: "बाय",
    gu: "આવજો",
    kn: "ಬೈ",
    ml: "ബൈ",
    pa: "ਬਾਏ",
    or: "ବାଇ"
  },
  thank: {
    hi: "धन्यवाद",
    ta: "நன்றி",
    te: "ధన్యవాదాలు",
    bn: "ধন্যবাদ",
    mr: "धन्यवाद",
    gu: "આભાર",
    kn: "ಧನ್ಯವಾದ",
    ml: "നന്ദി",
    pa: "ਧੰਨਵਾਦ",
    or: "ଧନ୍ୟବାଦ"
  },
  thanks: {
    hi: "धन्यवाद",
    ta: "நன்றி",
    te: "ధన్యవాదాలు",
    bn: "ধন্যবাদ",
    mr: "धन्यवाद",
    gu: "આભાર",
    kn: "ಧನ್ಯವಾದ",
    ml: "നന്ദി",
    pa: "ਧੰਨਵਾਦ",
    or: "ଧନ୍ୟବାଦ"
  },
  please: {
    hi: "कृपया",
    ta: "தயவுசெய்து",
    te: "దయచేసి",
    bn: "দয়া করে",
    mr: "कृपया",
    gu: "કૃપા કરીને",
    kn: "ದಯವಿಟ್ಟು",
    ml: "ദയവായി",
    pa: "ਕਿਰਪਾ ਕਰਕੇ",
    or: "ଦୟାକରି"
  },
  yes: {
    hi: "हाँ",
    ta: "ஆம்",
    te: "అవును",
    bn: "হ্যাঁ",
    mr: "होय",
    gu: "હા",
    kn: "ಹೌದು",
    ml: "അതെ",
    pa: "ਹਾਂ",
    or: "ହଁ"
  },
  no: {
    hi: "नहीं",
    ta: "இல்லை",
    te: "లేదు",
    bn: "না",
    mr: "नाही",
    gu: "ના",
    kn: "ಇಲ್ಲ",
    ml: "ഇല്ല",
    pa: "ਨਹੀਂ",
    or: "ନା"
  },
  sorry: {
    hi: "माफ़ करें",
    ta: "மன்னிக்கவும்",
    te: "క్షమించండి",
    bn: "দুঃখিত",
    mr: "माफ करा",
    gu: "માફ કરો",
    kn: "ಕ್ಷಮಿಸಿ",
    ml: "ക്ഷമിക്കണം",
    pa: "ਮਾਫ਼ ਕਰਨਾ",
    or: "ଦୟାକରି ମାଫ କରନ୍ତୁ"
  },
  // Water, food, nature
  water: {
    hi: "पानी",
    ta: "தண்ணீர்",
    te: "నీరు",
    bn: "জল",
    mr: "पाणी",
    gu: "પાણી",
    kn: "ನೀರು",
    ml: "വെള്ളം",
    pa: "ਪਾਣੀ",
    or: "ପାଣି"
  },
  food: {
    hi: "खाना",
    ta: "உணவு",
    te: "ఆహారం",
    bn: "খাবার",
    mr: "अन्न",
    gu: "ભોજન",
    kn: "ಆಹಾರ",
    ml: "ഭക്ഷണം",
    pa: "ਖਾਣਾ",
    or: "ଖାଦ୍ୟ"
  },
  fruit: {
    hi: "फल",
    ta: "பழம்",
    te: "పండు",
    bn: "ফল",
    mr: "फळ",
    gu: "ફળ",
    kn: "ಹಣ್ಣು",
    ml: "പഴം",
    pa: "ਫਲ",
    or: "ଫଳ"
  },
  flower: {
    hi: "फूल",
    ta: "பூ",
    te: "పువ్వు",
    bn: "ফুল",
    mr: "फूल",
    gu: "ફૂલ",
    kn: "ಹೂವು",
    ml: "പൂ",
    pa: "ਫੁੱਲ",
    or: "ଫୁଲ"
  },
  tree: {
    hi: "पेड़",
    ta: "மரம்",
    te: "చెట్టు",
    bn: "গাছ",
    mr: "झाड",
    gu: "ઝાડ",
    kn: "ಮರ",
    ml: "മരം",
    pa: "ਰੁੱਖ",
    or: "ଗଛ"
  },
  sun: {
    hi: "सूर्य",
    ta: "சூரியன்",
    te: "సూర్యుడు",
    bn: "সূর্য",
    mr: "सूर्य",
    gu: "સૂર્ય",
    kn: "ಸೂರ್ಯ",
    ml: "സൂര്യൻ",
    pa: "ਸੂਰਜ",
    or: "ସୂର୍ଯ୍ୟ"
  },
  moon: {
    hi: "चंद्रमा",
    ta: "நிலவு",
    te: "చంద్రుడు",
    bn: "চাঁদ",
    mr: "चंद्र",
    gu: "ચંદ્ર",
    kn: "ಚಂದ್ರ",
    ml: "ചന്ദ്രൻ",
    pa: "ਚੰਦ",
    or: "ଚନ୍ଦ୍ର"
  },
  earth: {
    hi: "पृथ्वी",
    ta: "பூமி",
    te: "భూమి",
    bn: "পৃথিবী",
    mr: "पृथ्वी",
    gu: "પૃથ્વી",
    kn: "ಭೂಮಿ",
    ml: "ഭൂമി",
    pa: "ਧਰਤੀ",
    or: "ପୃଥ୍ବୀ"
  },
  sky: {
    hi: "आकाश",
    ta: "வானம்",
    te: "ఆకాశం",
    bn: "আকাশ",
    mr: "आकाश",
    gu: "આકાશ",
    kn: "ಆಕಾಶ",
    ml: "ആകാശം",
    pa: "ਅਸਮਾਨ",
    or: "ଆକାଶ"
  },
  fire: {
    hi: "आग",
    ta: "நெருப்பு",
    te: "అగ్ని",
    bn: "আগুন",
    mr: "आग",
    gu: "આગ",
    kn: "ಬೆಂಕಿ",
    ml: "തീ",
    pa: "ਅੱਗ",
    or: "ଅଗ୍ନି"
  },
  air: {
    hi: "हवा",
    ta: "காற்று",
    te: "గాలి",
    bn: "বায়ু",
    mr: "हवा",
    gu: "હવા",
    kn: "ಗಾಳಿ",
    ml: "വായു",
    pa: "ਹਵਾ",
    or: "ବାୟୁ"
  },
  rain: {
    hi: "बारिश",
    ta: "மழை",
    te: "వర్షం",
    bn: "বৃষ্টি",
    mr: "पाऊस",
    gu: "વરસાદ",
    kn: "ಮಳೆ",
    ml: "മഴ",
    pa: "ਮੀਂਹ",
    or: "ବର୍ଷା"
  },
  river: {
    hi: "नदी",
    ta: "நதி",
    te: "నది",
    bn: "নদী",
    mr: "नदी",
    gu: "નદી",
    kn: "ನದಿ",
    ml: "നദി",
    pa: "ਦਰਿਆ",
    or: "ନଦୀ"
  },
  // Education
  book: {
    hi: "किताब",
    ta: "புத்தகம்",
    te: "పుస్తకం",
    bn: "বই",
    mr: "पुस्तक",
    gu: "પુસ્તક",
    kn: "ಪುಸ್ತಕ",
    ml: "പുസ്തകം",
    pa: "ਕਿਤਾਬ",
    or: "ପୁସ୍ତକ"
  },
  school: {
    hi: "विद्यालय",
    ta: "பள்ளி",
    te: "పాఠశాల",
    bn: "বিদ্যালয়",
    mr: "शाळा",
    gu: "શાળા",
    kn: "ಶಾಲೆ",
    ml: "വിദ്യാലയം",
    pa: "ਸਕੂਲ",
    or: "ବିଦ୍ୟାଳୟ"
  },
  teacher: {
    hi: "शिक्षक",
    ta: "ஆசிரியர்",
    te: "ఉపాధ్యాయుడు",
    bn: "শিক্ষক",
    mr: "शिक्षक",
    gu: "શિક્ષક",
    kn: "ಶಿಕ್ಷಕ",
    ml: "അദ്ധ്യാപകൻ",
    pa: "ਅਧਿਆਪਕ",
    or: "ଶିକ୍ଷକ"
  },
  student: {
    hi: "छात्र",
    ta: "மாணவர்",
    te: "విద్యార్థి",
    bn: "ছাত্র",
    mr: "विद्यार्थी",
    gu: "વિદ્યાર્થી",
    kn: "ವಿದ್ಯಾರ್ಥಿ",
    ml: "വിദ്യാർഥി",
    pa: "ਵਿਦਿਆਰਥੀ",
    or: "ଛାତ୍ର"
  },
  science: {
    hi: "विज्ञान",
    ta: "அறிவியல்",
    te: "విజ్ఞానం",
    bn: "বিজ্ঞান",
    mr: "विज्ञान",
    gu: "વિજ્ઞાન",
    kn: "ವಿಜ್ಞಾನ",
    ml: "ശാസ്ത്രം",
    pa: "ਵਿਗਿਆਨ",
    or: "ବିଜ୍ଞାନ"
  },
  mathematics: {
    hi: "गणित",
    ta: "கணிதம்",
    te: "గణితం",
    bn: "গণিত",
    mr: "गणित",
    gu: "ગણિત",
    kn: "ಗಣಿತ",
    ml: "ഗണിതം",
    pa: "ਗਣਿਤ",
    or: "ଗଣିତ"
  },
  math: {
    hi: "गणित",
    ta: "கணிதம்",
    te: "గణితం",
    bn: "গণিত",
    mr: "गणित",
    gu: "ગણિત",
    kn: "ಗಣಿತ",
    ml: "ഗണിതം",
    pa: "ਗਣਿਤ",
    or: "ଗଣିତ"
  },
  history: {
    hi: "इतिहास",
    ta: "வரலாறு",
    te: "చరిత్ర",
    bn: "ইতিহাস",
    mr: "इतिहास",
    gu: "ઇતિહાસ",
    kn: "ಇತಿಹಾಸ",
    ml: "ചരിത്രം",
    pa: "ਇਤਿਹਾਸ",
    or: "ଇତିହାସ"
  },
  geography: {
    hi: "भूगोल",
    ta: "புவியியல்",
    te: "భూగోళశాస్త్రం",
    bn: "ভূগোল",
    mr: "भूगोल",
    gu: "ભૂગોળ",
    kn: "ಭೂಗೋಳ",
    ml: "ഭൂമിശാസ്ത്രം",
    pa: "ਭੂਗੋਲ",
    or: "ଭୂଗୋଳ"
  },
  english: {
    hi: "अंग्रेज़ी",
    ta: "ஆங்கிலம்",
    te: "ఆంగ్లం",
    bn: "ইংরেজি",
    mr: "इंग्रजी",
    gu: "અંગ્રેજી",
    kn: "ಇಂಗ್ಲೀಷ್",
    ml: "ഇംഗ്ലീഷ്",
    pa: "ਅੰਗਰੇਜ਼ੀ",
    or: "ଇଂରାଜୀ"
  },
  hindi: {
    hi: "हिंदी",
    ta: "இந்தி",
    te: "హిందీ",
    bn: "হিন্দি",
    mr: "हिंदी",
    gu: "હિન્દી",
    kn: "ಹಿಂದಿ",
    ml: "ഹിന്ദി",
    pa: "ਹਿੰਦੀ",
    or: "ହିନ୍ଦୀ"
  },
  chemistry: {
    hi: "रसायन विज्ञान",
    ta: "வேதியியல்",
    te: "రసాయన శాస్త్రం",
    bn: "রসায়ন",
    mr: "रसायनशास्त्र",
    gu: "રસાયણ",
    kn: "ರಸಾಯನ ವಿಜ್ಞಾನ",
    ml: "രസതന്ത്രം",
    pa: "ਕੈਮਿਸਟਰੀ",
    or: "ରସାୟନ"
  },
  physics: {
    hi: "भौतिक विज्ञान",
    ta: "இயற்பியல்",
    te: "భౌతిక శాస్త్రం",
    bn: "পদার্থবিজ্ঞান",
    mr: "भौतिकशास्त्र",
    gu: "ભૌતિક",
    kn: "ಭೌತಶಾಸ್ತ್ರ",
    ml: "ഭൗതികശാസ്ത്രം",
    pa: "ਭੌਤਿਕੀ",
    or: "ଭୌତ ବିଜ୍ଞାନ"
  },
  biology: {
    hi: "जीव विज्ञान",
    ta: "உயிரியல்",
    te: "జీవ శాస్త్రం",
    bn: "জীববিজ্ঞান",
    mr: "जीवशास्त्र",
    gu: "જીવ",
    kn: "ಜೀವ ವಿಜ್ಞಾನ",
    ml: "ജീവശാസ്ത്രം",
    pa: "ਜੀਵ ਵਿਗਿਆਨ",
    or: "ଜୀବ ବିଜ୍ଞାନ"
  },
  exam: {
    hi: "परीक्षा",
    ta: "தேர்வு",
    te: "పరీక్ష",
    bn: "পরীক্ষা",
    mr: "परीक्षा",
    gu: "પરીક્ષા",
    kn: "ಪರೀಕ್ಷೆ",
    ml: "പരീക്ഷ",
    pa: "ਪ੍ਰੀਖਿਆ",
    or: "ପରୀକ୍ଷା"
  },
  study: {
    hi: "अध्ययन",
    ta: "படிப்பு",
    te: "చదువు",
    bn: "পড়াশোনা",
    mr: "अभ्यास",
    gu: "અભ્યાસ",
    kn: "ಅಭ್ಯಾಸ",
    ml: "പഠനം",
    pa: "ਪੜ੍ਹਾਈ",
    or: "ଅଧ୍ୟୟନ"
  },
  college: {
    hi: "महाविद्यालय",
    ta: "கல்லூரி",
    te: "కళాశాల",
    bn: "কলেজ",
    mr: "महाविद्यालय",
    gu: "કૉલેજ",
    kn: "ಕಾಲೇಜು",
    ml: "കോളേജ്",
    pa: "ਕਾਲਜ",
    or: "କଲେଜ"
  },
  university: {
    hi: "विश्वविद्यालय",
    ta: "பல்கலைக்கழகம்",
    te: "విశ్వవిద్యాలయం",
    bn: "বিশ্ববিদ্যালয়",
    mr: "विद्यापीठ",
    gu: "યુનિવર્સિટી",
    kn: "ವಿಶ್ವವಿದ್ಯಾಲಯ",
    ml: "സർവകലാശാല",
    pa: "ਯੂਨੀਵਰਸਿਟੀ",
    or: "ବିଶ୍ୱବିଦ୍ୟାଳୟ"
  },
  // Family
  home: {
    hi: "घर",
    ta: "வீடு",
    te: "ఇల్లు",
    bn: "বাড়ি",
    mr: "घर",
    gu: "ઘર",
    kn: "ಮನೆ",
    ml: "വീട്",
    pa: "ਘਰ",
    or: "ଘର"
  },
  family: {
    hi: "परिवार",
    ta: "குடும்பம்",
    te: "కుటుంబం",
    bn: "পরিবার",
    mr: "कुटुंब",
    gu: "કુટુંબ",
    kn: "ಕುಟುಂಬ",
    ml: "കുടുംബം",
    pa: "ਪਰਿਵਾਰ",
    or: "ପରିବାର"
  },
  mother: {
    hi: "माँ",
    ta: "அம்மா",
    te: "అమ్మ",
    bn: "মা",
    mr: "आई",
    gu: "માં",
    kn: "ತಾಯಿ",
    ml: "അമ്മ",
    pa: "ਮਾਂ",
    or: "ମା"
  },
  father: {
    hi: "पिता",
    ta: "அப்பா",
    te: "నాన్న",
    bn: "বাবা",
    mr: "बाबा",
    gu: "પિતા",
    kn: "ತಂದೆ",
    ml: "അച്ഛൻ",
    pa: "ਪਿਤਾ",
    or: "ବାପ"
  },
  sister: {
    hi: "बहन",
    ta: "அக்கா",
    te: "అక్క",
    bn: "বোন",
    mr: "बहीण",
    gu: "બહેન",
    kn: "ಅಕ್ಕ",
    ml: "അക്ക",
    pa: "ਭੈਣ",
    or: "ଭଉଣୀ"
  },
  brother: {
    hi: "भाई",
    ta: "அண்ணன்",
    te: "అన్నయ్య",
    bn: "ভাই",
    mr: "भाऊ",
    gu: "ભાઈ",
    kn: "ಅಣ್ಣ",
    ml: "ജ്യേഷ്ഠൻ",
    pa: "ਭਰਾ",
    or: "ଭାଇ"
  },
  friend: {
    hi: "दोस्त",
    ta: "நண்பர்",
    te: "స్నేహితుడు",
    bn: "বন্ধু",
    mr: "मित्र",
    gu: "મિત્ર",
    kn: "ಗೆಳೆಯ",
    ml: "കൂട്ടുകാരൻ",
    pa: "ਦੋਸਤ",
    or: "ବନ୍ଧୁ"
  },
  // Colors
  red: {
    hi: "लाल",
    ta: "சிவப்பு",
    te: "ఎరుపు",
    bn: "লাল",
    mr: "लाल",
    gu: "લાલ",
    kn: "ಕೆಂಪು",
    ml: "ചുവപ്പ്",
    pa: "ਲਾਲ",
    or: "ଲାଲ"
  },
  blue: {
    hi: "नीला",
    ta: "நீலம்",
    te: "నీలం",
    bn: "নীল",
    mr: "निळा",
    gu: "વાદળી",
    kn: "ನೀಲಿ",
    ml: "നീലം",
    pa: "ਨੀਲਾ",
    or: "ନୀଳ"
  },
  green: {
    hi: "हरा",
    ta: "பச்சை",
    te: "ఆకుపచ్చ",
    bn: "সবুজ",
    mr: "हिरवा",
    gu: "લીલો",
    kn: "ಹಸಿರು",
    ml: "പച്ച",
    pa: "ਹਰਾ",
    or: "ସବୁଜ"
  },
  yellow: {
    hi: "पीला",
    ta: "மஞ்சள்",
    te: "పసుపు",
    bn: "হলুদ",
    mr: "पिवळा",
    gu: "પીળો",
    kn: "ಹಳದಿ",
    ml: "മഞ്ഞ",
    pa: "ਪੀਲਾ",
    or: "ହଳଦିଆ"
  },
  white: {
    hi: "सफेद",
    ta: "வெள்ளை",
    te: "తెలుపు",
    bn: "সাদা",
    mr: "पांढरा",
    gu: "સફેદ",
    kn: "ಬಿಳಿ",
    ml: "വെള്ള",
    pa: "ਚਿੱਟਾ",
    or: "ଧଳା"
  },
  black: {
    hi: "काला",
    ta: "கறுப்பு",
    te: "నలుపు",
    bn: "কালো",
    mr: "काळा",
    gu: "કાળો",
    kn: "ಕಪ್ಪು",
    ml: "കറുപ്പ്",
    pa: "ਕਾਲਾ",
    or: "କଳା"
  },
  // Numbers
  one: {
    hi: "एक",
    ta: "ஒன்று",
    te: "ఒకటి",
    bn: "এক",
    mr: "एक",
    gu: "એક",
    kn: "ಒಂದು",
    ml: "ഒന്ന്",
    pa: "ਇੱਕ",
    or: "ଏକ"
  },
  two: {
    hi: "दो",
    ta: "இரண்டு",
    te: "రెండు",
    bn: "দুই",
    mr: "दोन",
    gu: "બે",
    kn: "ಎರಡು",
    ml: "രണ്ട്",
    pa: "ਦੋ",
    or: "ଦୁଇ"
  },
  three: {
    hi: "तीन",
    ta: "மூன்று",
    te: "మూడు",
    bn: "তিন",
    mr: "तीन",
    gu: "ત્રણ",
    kn: "ಮೂರು",
    ml: "മൂന്ന്",
    pa: "ਤਿੰਨ",
    or: "ତିନି"
  },
  four: {
    hi: "चार",
    ta: "நான்கு",
    te: "నాలుగు",
    bn: "চার",
    mr: "चार",
    gu: "ચાર",
    kn: "ನಾಲ್ಕು",
    ml: "നാല്",
    pa: "ਚਾਰ",
    or: "ଚାରି"
  },
  five: {
    hi: "पाँच",
    ta: "ஐந்து",
    te: "అయిదు",
    bn: "পাঁচ",
    mr: "पाच",
    gu: "પાંચ",
    kn: "ಐದು",
    ml: "അഞ്ച്",
    pa: "ਪੰਜ",
    or: "ପାଞ୍ଚ"
  },
  six: {
    hi: "छह",
    ta: "ஆறு",
    te: "ఆరు",
    bn: "ছয়",
    mr: "सहा",
    gu: "છ",
    kn: "ಆರು",
    ml: "ആറ്",
    pa: "ਛੇ",
    or: "ଛ"
  },
  seven: {
    hi: "सात",
    ta: "ஏழு",
    te: "ఏడు",
    bn: "সাত",
    mr: "सात",
    gu: "સાત",
    kn: "ಏಳು",
    ml: "ഏഴ്",
    pa: "ਸੱਤ",
    or: "ସାତ"
  },
  eight: {
    hi: "आठ",
    ta: "எட்டு",
    te: "ఎనిమిది",
    bn: "আট",
    mr: "आठ",
    gu: "આઠ",
    kn: "ಎಂಟು",
    ml: "എട്ട്",
    pa: "ਅੱਠ",
    or: "ଆଠ"
  },
  nine: {
    hi: "नौ",
    ta: "ஒன்பது",
    te: "తొమ్మిది",
    bn: "নয়",
    mr: "नऊ",
    gu: "નવ",
    kn: "ಒಂಬತ್ತು",
    ml: "ഒൻപത്",
    pa: "ਨੌਂ",
    or: "ନଅ"
  },
  ten: {
    hi: "दस",
    ta: "பத்து",
    te: "పది",
    bn: "দশ",
    mr: "दहा",
    gu: "દસ",
    kn: "ಹತ್ತು",
    ml: "പത്ത്",
    pa: "ਦਸ",
    or: "ଦଶ"
  },
  // Days
  monday: {
    hi: "सोमवार",
    ta: "திங்கள்",
    te: "సోమవారం",
    bn: "সোমবার",
    mr: "सोमवार",
    gu: "સોમવાર",
    kn: "ಸೋಮವಾರ",
    ml: "തിങ്കൾ",
    pa: "ਸੋਮਵਾਰ",
    or: "ସୋମବାର"
  },
  tuesday: {
    hi: "मंगलवार",
    ta: "செவ்வாய்",
    te: "మంగళవారం",
    bn: "মঙ্গলবার",
    mr: "मंगळवार",
    gu: "મંગળવાર",
    kn: "ಮಂಗಳವಾರ",
    ml: "ചൊവ്വ",
    pa: "ਮੰਗਲਵਾਰ",
    or: "ମଙ୍ଗଳବାର"
  },
  wednesday: {
    hi: "बुधवार",
    ta: "புதன்",
    te: "బుధవారం",
    bn: "বুধবার",
    mr: "बुधवार",
    gu: "બુધવાર",
    kn: "ಬುಧವಾರ",
    ml: "ബുധൻ",
    pa: "ਬੁੱਧਵਾਰ",
    or: "ବୁଧବାର"
  },
  thursday: {
    hi: "गुरुवार",
    ta: "வியாழன்",
    te: "గురువారం",
    bn: "বৃহস্পতিবার",
    mr: "गुरुवार",
    gu: "ગુરૂવાર",
    kn: "ಗುರುವಾರ",
    ml: "വ്യാഴം",
    pa: "ਵੀਰਵਾਰ",
    or: "ଗୁରୁବାର"
  },
  friday: {
    hi: "शुक्रवार",
    ta: "வெள்ளி",
    te: "శుక్రవారం",
    bn: "শুক্রবার",
    mr: "शुक्रवार",
    gu: "શુક્રવાર",
    kn: "ಶುಕ್ರವಾರ",
    ml: "വെള്ളി",
    pa: "ਸ਼ੁੱਕਰਵਾਰ",
    or: "ଶୁକ୍ରବାର"
  },
  saturday: {
    hi: "शनिवार",
    ta: "சனி",
    te: "శనివారం",
    bn: "শনিবার",
    mr: "शनिवार",
    gu: "શનિવાર",
    kn: "ಶನಿವಾರ",
    ml: "ശനി",
    pa: "ਸ਼ਨੀਵਾਰ",
    or: "ଶନିବାର"
  },
  sunday: {
    hi: "रविवार",
    ta: "ஞாயிறு",
    te: "ఆదివారం",
    bn: "রবিবার",
    mr: "रविवार",
    gu: "રવિવાર",
    kn: "ಭಾನುವಾರ",
    ml: "ഞായർ",
    pa: "ਐਤਵਾਰ",
    or: "ରବିବାର"
  },
  // Emotions & adjectives
  good: {
    hi: "अच्छा",
    ta: "நல்லது",
    te: "మంచి",
    bn: "ভালো",
    mr: "चांगले",
    gu: "સારું",
    kn: "ಒಳ್ಳೆಯ",
    ml: "നല്ല",
    pa: "ਚੰਗਾ",
    or: "ଭଲ"
  },
  bad: {
    hi: "बुरा",
    ta: "கெட்டது",
    te: "చెడు",
    bn: "খারাপ",
    mr: "वाईट",
    gu: "ખરાબ",
    kn: "ಕೆಟ್ಟ",
    ml: "ചീത്ത",
    pa: "ਮਾੜਾ",
    or: "ଖରାପ"
  },
  big: {
    hi: "बड़ा",
    ta: "பெரிய",
    te: "పెద్ద",
    bn: "বড়",
    mr: "मोठा",
    gu: "મોટો",
    kn: "ದೊಡ್ಡ",
    ml: "വലിയ",
    pa: "ਵੱਡਾ",
    or: "ବଡ"
  },
  small: {
    hi: "छोटा",
    ta: "சிறிய",
    te: "చిన్న",
    bn: "ছোট",
    mr: "लहान",
    gu: "નાનો",
    kn: "ಚಿಕ್ಕ",
    ml: "ചെറിയ",
    pa: "ਛੋਟਾ",
    or: "ଛୋଟ"
  },
  happy: {
    hi: "खुश",
    ta: "மகிழ்ச்சி",
    te: "సంతోషం",
    bn: "খুশি",
    mr: "आनंदी",
    gu: "ખુશ",
    kn: "ಸಂತೋಷ",
    ml: "സന്തോഷം",
    pa: "ਖੁਸ਼",
    or: "ଖୁସି"
  },
  sad: {
    hi: "दुखी",
    ta: "சோகம்",
    te: "దుఃఖం",
    bn: "দুঃখিত",
    mr: "दुःखी",
    gu: "દુઃખી",
    kn: "ದುಃಖ",
    ml: "സങ്കടം",
    pa: "ਉਦਾਸ",
    or: "ଦୁଃଖ"
  },
  love: {
    hi: "प्यार",
    ta: "அன்பு",
    te: "ప్రేమ",
    bn: "ভালোবাসা",
    mr: "प्रेम",
    gu: "પ્રેમ",
    kn: "ಪ್ರೀತಿ",
    ml: "സ്നേഹം",
    pa: "ਪਿਆਰ",
    or: "ପ୍ରେମ"
  },
  // Verbs
  run: {
    hi: "दौड़ना",
    ta: "ஓடு",
    te: "పరుగు",
    bn: "দৌড়ানো",
    mr: "धावणे",
    gu: "દોડ",
    kn: "ಓಡು",
    ml: "ഓടുക",
    pa: "ਦੌੜਨਾ",
    or: "ଦୌଡ଼"
  },
  walk: {
    hi: "चलना",
    ta: "நடக்க",
    te: "నడక",
    bn: "হাঁটা",
    mr: "चालणे",
    gu: "ચાલ",
    kn: "ನಡೆ",
    ml: "നടക്കുക",
    pa: "ਤੁਰਨਾ",
    or: "ଚାଲ"
  },
  eat: {
    hi: "खाना",
    ta: "சாப்பிட",
    te: "తినడం",
    bn: "খাওয়া",
    mr: "जेवणे",
    gu: "ખાવ",
    kn: "ತಿನ್ನು",
    ml: "കഴിക്കുക",
    pa: "ਖਾਣਾ",
    or: "ଖାଇବା"
  },
  drink: {
    hi: "पीना",
    ta: "குடிக்க",
    te: "తాగడం",
    bn: "পান করা",
    mr: "पिणे",
    gu: "પીઓ",
    kn: "ಕುಡಿ",
    ml: "കുടിക്കുക",
    pa: "ਪੀਣਾ",
    or: "ପିଇବା"
  },
  sleep: {
    hi: "सोना",
    ta: "தூங்கு",
    te: "నిద్ర",
    bn: "ঘুমানো",
    mr: "झोपणे",
    gu: "સૂઓ",
    kn: "ನಿದ್ದೆ",
    ml: "ഉറങ്ങുക",
    pa: "ਸੌਣਾ",
    or: "ଶୋଇବା"
  },
  read: {
    hi: "पढ़ना",
    ta: "படிக்க",
    te: "చదవడం",
    bn: "পড়া",
    mr: "वाचणे",
    gu: "વાંચ",
    kn: "ಓದು",
    ml: "വായിക്കുക",
    pa: "ਪੜ੍ਹਨਾ",
    or: "ପଢ଼"
  },
  write: {
    hi: "लिखना",
    ta: "எழுது",
    te: "రాయడం",
    bn: "লেখা",
    mr: "लिहिणे",
    gu: "લખ",
    kn: "ಬರೆ",
    ml: "എഴുതുക",
    pa: "ਲਿਖਣਾ",
    or: "ଲେଖ"
  },
  // Places
  hospital: {
    hi: "अस्पताल",
    ta: "மருத்துவமனை",
    te: "ఆసుపత్రి",
    bn: "হাসপাতাল",
    mr: "रुग्णालय",
    gu: "હૉસ્પિટલ",
    kn: "ಆಸ್ಪತ್ರೆ",
    ml: "ആശുപത്രി",
    pa: "ਹਸਪਤਾਲ",
    or: "ହସ୍ପିଟାଲ"
  },
  market: {
    hi: "बाजार",
    ta: "சந்தை",
    te: "మార్కెట్",
    bn: "বাজার",
    mr: "बाजार",
    gu: "બજાર",
    kn: "ಮಾರುಕಟ್ಟೆ",
    ml: "ചന്ത",
    pa: "ਬਾਜ਼ਾਰ",
    or: "ବଜାର"
  },
  city: {
    hi: "शहर",
    ta: "நகரம்",
    te: "నగరం",
    bn: "শহর",
    mr: "शहर",
    gu: "શહેર",
    kn: "ನಗರ",
    ml: "നഗരം",
    pa: "ਸ਼ਹਿਰ",
    or: "ସହର"
  },
  village: {
    hi: "गाँव",
    ta: "கிராமம்",
    te: "గ్రామం",
    bn: "গ্রাম",
    mr: "गाव",
    gu: "ગામ",
    kn: "ಹಳ್ಳಿ",
    ml: "ഗ്രാമം",
    pa: "ਪਿੰਡ",
    or: "ଗ୍ରାମ"
  },
  // Animals
  dog: {
    hi: "कुत्ता",
    ta: "நாய்",
    te: "కుక్క",
    bn: "কুকুর",
    mr: "कुत्रा",
    gu: "કૂતરો",
    kn: "ನಾಯಿ",
    ml: "നായ",
    pa: "ਕੁੱਤਾ",
    or: "କୁକୁର"
  },
  cat: {
    hi: "बिल्ली",
    ta: "பூனை",
    te: "పిల్లి",
    bn: "বিড়াল",
    mr: "मांजर",
    gu: "બિલાડી",
    kn: "ಬೆಕ್ಕು",
    ml: "പൂച്ച",
    pa: "ਬਿੱਲੀ",
    or: "ବିଲେଇ"
  },
  bird: {
    hi: "पक्षी",
    ta: "பறவை",
    te: "పక్షి",
    bn: "পাখি",
    mr: "पक्षी",
    gu: "પંખી",
    kn: "ಹಕ್ಕಿ",
    ml: "പക്ഷി",
    pa: "ਪੰਛੀ",
    or: "ପକ୍ଷୀ"
  },
  fish: {
    hi: "मछली",
    ta: "மீன்",
    te: "చేప",
    bn: "মাছ",
    mr: "मासा",
    gu: "માछ",
    kn: "ಮೀನು",
    ml: "മത്സ്യം",
    pa: "ਮੱਛੀ",
    or: "ମାଛ"
  },
  // Common phrases
  i: {
    hi: "मैं",
    ta: "நான்",
    te: "నేను",
    bn: "আমি",
    mr: "मी",
    gu: "હું",
    kn: "ನಾನು",
    ml: "ഞാൻ",
    pa: "ਮੈਂ",
    or: "ମୁଁ"
  },
  you: {
    hi: "आप",
    ta: "நீங்கள்",
    te: "మీరు",
    bn: "আপনি",
    mr: "तुम्ही",
    gu: "તમે",
    kn: "ನೀವು",
    ml: "നിങ്ങൾ",
    pa: "ਤੁਸੀਂ",
    or: "ଆପଣ"
  },
  we: {
    hi: "हम",
    ta: "நாம்",
    te: "మేము",
    bn: "আমরা",
    mr: "आम्ही",
    gu: "આપણે",
    kn: "ನಾವು",
    ml: "നാം",
    pa: "ਅਸੀਂ",
    or: "ଆମେ"
  },
  they: {
    hi: "वे",
    ta: "அவர்கள்",
    te: "వారు",
    bn: "তারা",
    mr: "ते",
    gu: "તેઓ",
    kn: "ಅವರು",
    ml: "അവർ",
    pa: "ਉਹ",
    or: "ସେମାନେ"
  },
  what: {
    hi: "क्या",
    ta: "என்ன",
    te: "ఏమిటి",
    bn: "কী",
    mr: "काय",
    gu: "શું",
    kn: "ಏನು",
    ml: "എന്ത്",
    pa: "ਕੀ",
    or: "କ'ଣ"
  },
  where: {
    hi: "कहाँ",
    ta: "எங்கே",
    te: "ఎక్కడ",
    bn: "কোথায়",
    mr: "कुठे",
    gu: "ક્યાં",
    kn: "ಎಲ್ಲಿ",
    ml: "എവിടെ",
    pa: "ਕਿੱਥੇ",
    or: "କୋଉଠି"
  },
  when: {
    hi: "कब",
    ta: "எப்போது",
    te: "ఎప్పుడు",
    bn: "কখন",
    mr: "केव्हा",
    gu: "ક્યારે",
    kn: "ಯಾವಾಗ",
    ml: "എപ്പോൾ",
    pa: "ਕਦੋਂ",
    or: "କ'ଣବେ"
  },
  why: {
    hi: "क्यों",
    ta: "ஏன்",
    te: "ఎందుకు",
    bn: "কেন",
    mr: "का",
    gu: "કેમ",
    kn: "ಯಾಕೆ",
    ml: "എന്തുകൊണ്ട്",
    pa: "ਕਿਉਂ",
    or: "କାହିଁକି"
  },
  how: {
    hi: "कैसे",
    ta: "எப்படி",
    te: "ఎలా",
    bn: "কীভাবে",
    mr: "कसे",
    gu: "કેવી રીતે",
    kn: "ಹೇಗೆ",
    ml: "എങ്ങനെ",
    pa: "ਕਿਵੇਂ",
    or: "କିପରି"
  },
  // More adjectives & misc
  beautiful: {
    hi: "सुंदर",
    ta: "அழகான",
    te: "అందమైన",
    bn: "সুন্দর",
    mr: "सुंदर",
    gu: "સુંદર",
    kn: "ಸುಂದರ",
    ml: "സുന്ദരം",
    pa: "ਸੁੰਦਰ",
    or: "ସୁନ୍ଦର"
  },
  strong: {
    hi: "मजबूत",
    ta: "வலிமையான",
    te: "బలమైన",
    bn: "শক্তিশালী",
    mr: "मजबूत",
    gu: "મજબૂત",
    kn: "ಬಲಶಾಲಿ",
    ml: "ശക്തമായ",
    pa: "ਮਜ਼ਬੂਤ",
    or: "ଶକ୍ତିଶାଳୀ"
  },
  new: {
    hi: "नया",
    ta: "புதிய",
    te: "కొత్త",
    bn: "নতুন",
    mr: "नवीन",
    gu: "નવો",
    kn: "ಹೊಸ",
    ml: "പുതിയ",
    pa: "ਨਵਾਂ",
    or: "ନୂଆ"
  },
  old: {
    hi: "पुराना",
    ta: "பழைய",
    te: "పాత",
    bn: "পুরনো",
    mr: "जुना",
    gu: "જૂનો",
    kn: "ಹಳೆಯ",
    ml: "പഴയ",
    pa: "ਪੁਰਾਣਾ",
    or: "ପୁରୁଣା"
  },
  fast: {
    hi: "तेज",
    ta: "வேகமான",
    te: "వేగంగా",
    bn: "দ্রুত",
    mr: "वेगाने",
    gu: "ઝડપી",
    kn: "ವೇಗ",
    ml: "വേഗം",
    pa: "ਤੇਜ਼",
    or: "ଦ୍ରୁତ"
  },
  slow: {
    hi: "धीमा",
    ta: "மெதுவான",
    te: "నెమ్మది",
    bn: "ধীর",
    mr: "धीमे",
    gu: "ધીમો",
    kn: "ನಿಧಾನ",
    ml: "സ്ലോ",
    pa: "ਹੌਲੀ",
    or: "ଧୀର"
  },
  work: {
    hi: "काम",
    ta: "வேலை",
    te: "పని",
    bn: "কাজ",
    mr: "काम",
    gu: "કામ",
    kn: "ಕೆಲಸ",
    ml: "ജോലി",
    pa: "ਕੰਮ",
    or: "କାମ"
  },
  play: {
    hi: "खेल",
    ta: "விளையாட்டு",
    te: "ఆట",
    bn: "খেলা",
    mr: "खेळ",
    gu: "રમો",
    kn: "ಆಟ",
    ml: "കളി",
    pa: "ਖੇਡ",
    or: "ଖେଳ"
  },
  time: {
    hi: "समय",
    ta: "நேரம்",
    te: "సమయం",
    bn: "সময়",
    mr: "वेळ",
    gu: "સમય",
    kn: "ಸಮಯ",
    ml: "സമയം",
    pa: "ਸਮਾਂ",
    or: "ସମୟ"
  },
  money: {
    hi: "पैसा",
    ta: "பணம்",
    te: "డబ్బు",
    bn: "টাকা",
    mr: "पैसा",
    gu: "પૈસા",
    kn: "ಹಣ",
    ml: "പണം",
    pa: "ਪੈਸਾ",
    or: "ଟଙ୍କା"
  },
  road: {
    hi: "सड़क",
    ta: "சாலை",
    te: "రహదారి",
    bn: "রাস্তা",
    mr: "रस्ता",
    gu: "રોડ",
    kn: "ರಸ್ತೆ",
    ml: "റോഡ്",
    pa: "ਸੜਕ",
    or: "ରାସ୍ତା"
  },
  door: {
    hi: "दरवाजा",
    ta: "கதவு",
    te: "తలుపు",
    bn: "দরজা",
    mr: "दरवाजा",
    gu: "દરવાજો",
    kn: "ಬಾಗಿಲು",
    ml: "വാതിൽ",
    pa: "ਦਰਵਾਜ਼ਾ",
    or: "ଦ୍ୱାର"
  },
  window: {
    hi: "खिड़की",
    ta: "சாளரம்",
    te: "కిటికీ",
    bn: "জানালা",
    mr: "खिडकी",
    gu: "બારી",
    kn: "ಕಿಟಕಿ",
    ml: "ജനൽ",
    pa: "ਖਿੜਕੀ",
    or: "ଝରକା"
  },
  light: {
    hi: "प्रकाश",
    ta: "ஒளி",
    te: "వెలుతురు",
    bn: "আলো",
    mr: "प्रकाश",
    gu: "પ્રકાશ",
    kn: "ಬೆಳಕು",
    ml: "വെളിച்ചം",
    pa: "ਰੋਸ਼ਨੀ",
    or: "ଆଲୋକ"
  },
  dark: {
    hi: "अंधेरा",
    ta: "இருள்",
    te: "చీకటి",
    bn: "অন্ধকার",
    mr: "अंधार",
    gu: "અંધારું",
    kn: "ಕತ್ತಲೆ",
    ml: "ഇരുട്ട്",
    pa: "ਹਨੇਰਾ",
    or: "ଅନ୍ଧକାର"
  },
  day: {
    hi: "दिन",
    ta: "நாள்",
    te: "రోజు",
    bn: "দিন",
    mr: "दिवस",
    gu: "દિવસ",
    kn: "ದಿನ",
    ml: "ദിവസം",
    pa: "ਦਿਨ",
    or: "ଦିନ"
  },
  night: {
    hi: "रात",
    ta: "இரவு",
    te: "రాత్రి",
    bn: "রাত",
    mr: "रात्र",
    gu: "રાત",
    kn: "ರಾತ್ರಿ",
    ml: "രാത്രി",
    pa: "ਰਾਤ",
    or: "ରାତ"
  },
  year: {
    hi: "साल",
    ta: "ஆண்டு",
    te: "సంవత్సరం",
    bn: "বছর",
    mr: "वर्ष",
    gu: "વર્ષ",
    kn: "ವರ್ಷ",
    ml: "വർഷം",
    pa: "ਸਾਲ",
    or: "ବର୍ଷ"
  },
  month: {
    hi: "महीना",
    ta: "மாதம்",
    te: "నెల",
    bn: "মাস",
    mr: "महिना",
    gu: "મહિના",
    kn: "ತಿಂಗಳು",
    ml: "മാസം",
    pa: "ਮਹੀਨਾ",
    or: "ମାସ"
  }
};
const LANGUAGES = [
  { code: "hi", name: "Hindi", flag: "🇮🇳", script: "हिंदी" },
  { code: "ta", name: "Tamil", flag: "🇮🇳", script: "தமிழ்" },
  { code: "te", name: "Telugu", flag: "🇮🇳", script: "తెలుగు" },
  { code: "bn", name: "Bengali", flag: "🇮🇳", script: "বাংলা" },
  { code: "mr", name: "Marathi", flag: "🇮🇳", script: "मराठी" },
  { code: "gu", name: "Gujarati", flag: "🇮🇳", script: "ગુજરાતી" },
  { code: "kn", name: "Kannada", flag: "🇮🇳", script: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", flag: "🇮🇳", script: "മലയാളം" },
  { code: "pa", name: "Punjabi", flag: "🇮🇳", script: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", flag: "🇮🇳", script: "ଓଡ଼ିଆ" }
];
function translateText(text, lang) {
  const words = text.trim().toLowerCase().split(/\s+/);
  return words.map((w) => {
    var _a;
    const clean = w.replace(/[^a-z]/g, "");
    const t = (_a = WORDS[clean]) == null ? void 0 : _a[lang];
    return { word: w, translation: t ?? `[${w}]` };
  });
}
function LanguageTranslatorPage() {
  const [inputText, setInputText] = reactExports.useState("");
  const [targetLang, setTargetLang] = reactExports.useState("hi");
  const [result, setResult] = reactExports.useState(null);
  const handleTranslate = () => {
    if (!inputText.trim()) {
      ue.error("Please enter some text to translate");
      return;
    }
    const translated = translateText(inputText, targetLang);
    setResult(translated);
  };
  const handleCopy = () => {
    if (!result) return;
    const text = result.map((r) => r.translation).join(" ");
    navigator.clipboard.writeText(text);
    ue.success("Translation copied!");
  };
  const handleClear = () => {
    setInputText("");
    setResult(null);
  };
  const selectedLang = LANGUAGES.find((l) => l.code === targetLang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.52_0.18_335)] to-[oklch(0.36_0.14_310)] p-6 text-white shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white/60 text-xs font-medium mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90", children: "Language Translator" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-4xl text-white mb-2", children: "Language Translator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-base", children: "Translate English words and phrases to 10 Indian languages. Type words and choose your target language." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: [
        "🇮🇳 Hindi",
        "தமிழ் Tamil",
        "తెలుగు Telugu",
        "বাংলা Bengali",
        "+6 more"
      ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/15",
          children: tag
        },
        tag
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-3", children: "Translate to:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: LANGUAGES.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": `translator.${lang.code}.toggle`,
          onClick: () => {
            setTargetLang(lang.code);
            setResult(null);
          },
          className: `flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium border-2 transition-all duration-150 ${targetLang === lang.code ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang.flag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70", children: lang.script })
          ]
        },
        lang.code
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs font-semibold", children: "🇬🇧 English" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "translator.cancel_button",
            onClick: handleClear,
            className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" }),
              "Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          "data-ocid": "translator.textarea",
          value: inputText,
          onChange: (e) => setInputText(e.target.value),
          placeholder: "Type English words or phrases... e.g. hello friend, school book, water river",
          className: "min-h-[100px] text-base resize-none border-0 p-0 focus-visible:ring-0 bg-transparent",
          onKeyDown: (e) => {
            if (e.key === "Enter" && e.ctrlKey) handleTranslate();
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Tip: Ctrl+Enter to translate" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "translator.submit_button",
        onClick: handleTranslate,
        size: "lg",
        className: "w-full mb-6 h-12 text-base font-semibold",
        disabled: !inputText.trim(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "w-5 h-5 mr-2" }),
          "Translate to ",
          selectedLang.name,
          " (",
          selectedLang.script,
          ")"
        ]
      }
    ),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border-2 border-primary/20 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-sm font-semibold px-3 py-1", children: [
          selectedLang.flag,
          " ",
          selectedLang.name,
          " — ",
          selectedLang.script
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            "data-ocid": "translator.secondary_button",
            onClick: handleCopy,
            className: "h-8 px-3 text-xs gap-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" }),
              "Copy"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: result.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `translator.item.${i + 1}`,
          className: `px-3 py-2 rounded-xl text-center ${item.translation.startsWith("[") ? "bg-secondary border border-border" : "bg-[oklch(0.86_0.07_264)] border border-[oklch(0.68_0.12_264)]"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-0.5", children: item.word }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `font-semibold text-sm leading-tight ${item.translation.startsWith("[") ? "text-muted-foreground italic" : "text-[oklch(0.18_0.14_264)]"}`,
                children: item.translation
              }
            )
          ]
        },
        `${item.word}-${i}`
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-secondary/40 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide", children: "Full Translation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground leading-relaxed", children: result.map((r) => r.translation).join(" ") })
      ] }),
      result.some((r) => r.translation.startsWith("[")) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "Words in [brackets] are not yet in our dictionary. We support 200+ common words across education, nature, family, and everyday life." })
    ] }),
    !result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/30 rounded-2xl border border-border p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-3", children: "Try these example phrases:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
        "hello friend",
        "good morning",
        "water fire air",
        "mother father family",
        "science mathematics biology",
        "one two three four five",
        "monday tuesday wednesday",
        "red blue green yellow"
      ].map((phrase) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "translator.secondary_button",
          onClick: () => {
            setInputText(phrase);
            setResult(null);
          },
          className: "text-left px-3 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors",
          children: [
            '"',
            phrase,
            '"'
          ]
        },
        phrase
      )) })
    ] })
  ] });
}
export {
  LanguageTranslatorPage as default
};
