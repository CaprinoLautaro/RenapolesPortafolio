/* =====================================================
   Selector de idioma ES / EN
   - El español es el idioma base (vive en el HTML).
   - Cada elemento con data-i18n="kXXX" tiene su traducción al inglés acá abajo.
   - Si una clave no está en EN, se deja el texto original.
   - Prioridad al elegir idioma: ?lang=en|es en la URL > lo guardado > idioma del navegador > es
   ===================================================== */
const EN = {
  k001: "Reels",
  k002: "Pricing",
  k003: "About",
  k004: "Contact",
  k005: "Video Editor · Content Creator",
  k006: "I turn ideas into content that <strong>hooks from the very first frame.</strong> Reels, Shorts and clips built to hold attention, not just to add volume.",
  k007: "I focus on quality over quantity: I pick the most interesting clips and edit them so they feel that way. Every video in this portfolio is here because it worked, not just because.",
  k011: "Viral Reels",
  k013: "AI-Generated Content",
  k015: "Featured Reels",
  k016: "Instagram Reel",
  k017: "• 62.8K views",
  k018: "View on Instagram ↗",
  k019: "• 27.1K views",
  k020: "• 49.2K views",
  k021: "• 7K views",
  k022: "• 6,052 views",
  k023: "• 10.4K views",
  k024: "• 13.1K views",
  k025: "• 20.1K views",
  k026: "• 2,822 views",
  k027: "• 3,443 views",
  k028: "Rates",
  k029: "Pricing & terms",
  k030: "All prices are in US dollars (USD) and include VAT where applicable. I accept international bank transfer, PayPal, <strong>Binance (USDT/crypto)</strong> and other crypto wallets. Transaction fees and taxes are covered by the client.",
  k031: "Single video",
  k033: "Full edit in Premiere + After Effects, up to 60 seconds long.",
  k034: "Up to 3 subtitle versions adapted to different platforms",
  k035: "Professional sound and color correction",
  k036: "Transitions, b-rolls and basic effects",
  k037: "AI-generated content integration if needed",
  k038: "Longer videos or videos with complex motion graphics are quoted separately.",
  k039: "Video packages",
  k040: "Ideal for clients who need a steady flow of content without requiring full exclusivity. Pick the option that fits your timeline:",
  k041: "Package",
  k042: "Number of videos",
  k043: "Standard",
  k044: "Express",
  k045: "<strong>Basic</strong>",
  k046: "20 videos",
  k047: '<span class="table-price">$350 USD</span> <span class="table-sub">Delivery in 2 weeks</span>',
  k048: '<span class="table-price">$420 USD</span> <span class="table-sub">Delivery in 1 week</span>',
  k050: "30 videos",
  k051: '<span class="table-price">$500 USD</span> <span class="table-sub">Delivery in 3 weeks</span>',
  k052: '<span class="table-price">$600 USD</span> <span class="table-sub">Delivery in 2 weeks</span>',
  k053: "Package terms",
  k054: "<strong>Standard:</strong> a sustainable pace of 2 videos per business day. Ideal if you want quality without rushing.",
  k055: "<strong>Express:</strong> an intensive pace to get all your content ready in half the time. Includes priority in my schedule.",
  k056: "All packages include everything in the single-video price (subtitles, color/sound correction, basic effects, etc.).",
  k057: "Valid for 60 days from the payment date.",
  k058: '👑 Full Time Service <span class="badge-exclusive">Exclusive</span>',
  k059: "$1,500 <span>USD</span>",
  k060: "Designed for those who want total dedication and top priority for their content. It's a premium, limited service: I only take one full-time client at a time.",
  k061: "<strong>50 videos.</strong> I deliver up to 3 videos per business day if you need it, or keep 2 per day with more attention to detail and effects. We adjust the pace to your needs. Includes everything above, plus:",
  k062: "Absolute priority in my schedule",
  k063: "Advanced After Effects work at no extra cost",
  k064: "Direct communication and fast replies during working hours",
  k065: "Unlimited minor revisions",
  k066: "Full content management, including creative suggestions to improve your channel",
  k067: "Working terms",
  k068: "These rules exist so we can both work well, so I can deliver quality and you get the best possible result.",
  k069: "💳 Payments",
  k070: "50% upfront + 50% on delivery of the complete work. I don't start working until the deposit has been received.",
  k071: "Accepted payment methods: international bank transfer, PayPal, Binance or other cryptocurrencies.",
  k072: "Transaction fees and taxes are covered by the client.",
  k073: "⏰ Timelines & availability",
  k074: "I work Monday to Friday. I don't work weekends or holidays unless agreed beforehand, with a 75% surcharge.",
  k075: "Raw footage must be sent at least 24 hours before the agreed delivery. If it arrives late, the delivery date shifts proportionally.",
  k076: "Rush jobs (same-day delivery): charged at double the normal rate.",
  k077: "📁 Materials you need to provide",
  k078: "Raw video, scripts and b-rolls organized in a Drive folder with clear file names.",
  k079: "If you have a visual script or editing references, include them: the result will be faster and more accurate.",
  k080: "Disorganized materials that I have to sort out: 30% extra for management and organization.",
  k081: "Your own b-rolls are recommended. If you don't have any, I can find stock footage at an additional cost.",
  k082: "✏️ Revisions & changes",
  k083: "2 rounds of revisions included per video (pacing, subtitles, minor details).",
  k084: "Additional revisions: $5 USD per round.",
  k085: "Changes that require redoing more than 50% of the video are quoted as a new job.",
  k086: "📞 Communication",
  k087: "I reply Monday to Friday, 10:00 AM to 7:00 PM (Argentina time, GMT-3).",
  k088: "Outside those hours I only respond to emergencies agreed and paid for in advance.",
  k089: "Any important agreement is put in writing (chat or email).",
  k090: "📜 General terms",
  k091: "Once 100% of the work is paid, you get all usage rights to the edited content.",
  k092: "I reserve the right to show the work in my portfolio and social media, unless a confidentiality agreement is made at an additional cost.",
  k093: "Cancellation after work has started: the proportional percentage of work completed is charged, and the deposit is non-refundable.",
  k094: "Scope changes not agreed at the start are quoted separately before being carried out.",
  k095: "Ready to work together? Message me through the contact section with the type of content, the number of videos or the package you're interested in, reference examples and your timeline.",
  k096: "Go to contact ↓",
  k097: "Profile",
  k098: "I'm <strong>Lautaro Caprino</strong>, a video editor and digital content creator specialized in short-form video. I don't publish just to publish: <strong>I pick the most interesting clips and work on them until they feel high quality</strong>, prioritizing that over volume.",
  k099: "I work with <strong>Premiere Pro, After Effects and CapCut</strong> depending on what each project needs: Premiere and After Effects for more polished edits with motion graphics, and CapCut when the production pace needs to be faster. That selection judgment is, for me, as important as the editing itself.",
  k100: "Socials",
  k101: "Experience",
  k102: "Video Editor &amp; Content Creator",
  k103: "Pao — Fitness content",
  k104: "2026 — Present · Remote",
  k105: "Recurring production and editing of roughly 2 videos per day for social media.",
  k106: "Clip selection, assembly, subtitling and adaptation of content for vertical formats.",
  k107: "Editing focused on maintaining pacing, retention and visual consistency across posts.",
  k108: "Use of Premiere Pro, After Effects, CapCut and AI tools depending on the needs of each piece.",
  k109: "Video Editor",
  k110: "Mauro Stendel — Social media content",
  k111: "2026 · Remote",
  k112: "Short-form content editing within a high-volume production workflow.",
  k113: "Selecting and trimming relevant segments to improve the pacing and dynamics of the videos.",
  k114: "Adapting pieces to vertical formats for social media.",
  k115: "Work focused on speed, consistency and meeting deadlines.",
  k116: "Tools",
  k118: "Clip Selection",
  k119: "Subtitling",
  k120: "Basic Motion Graphics",
  k121: "Work style",
  k122: "Remote",
  k123: "Hybrid",
  k124: "Part-time",
  k125: "High autonomy",
  k126: "Let's talk",
  k127: "Have a project, channel or brand that needs content that hooks? Message me and we'll figure it out"
};

const I18N_TITLE = { es: "Renapoles — Editor de Video", en: "Renapoles — Video Editor" };
const nodes = document.querySelectorAll('[data-i18n]');
nodes.forEach(el => { el.dataset.es = el.innerHTML; });

function setLang(lang) {
  nodes.forEach(el => {
    const t = lang === 'en' ? EN[el.dataset.i18n] : null;
    el.innerHTML = t !== undefined && t !== null ? t : el.dataset.es;
  });
  document.documentElement.lang = lang;
  document.title = I18N_TITLE[lang];
  document.querySelectorAll('.lang-btn').forEach(b => {
    const on = b.dataset.lang === lang;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on);
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'es') return q;
  try { const s = localStorage.getItem('lang'); if (s === 'en' || s === 'es') return s; } catch (e) {}
  return (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
}

document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
const start = initialLang();
if (start !== 'es') setLang(start); else setLang('es');
