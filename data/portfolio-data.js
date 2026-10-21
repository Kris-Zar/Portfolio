/**
 * =========================================================================
 * PARTH SAXENA — PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Mapped to: kris-zar.github.io/Portfolio
 * Every section matches the verified narrative copy. Bold. No fluff.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // Identity & Opening Hook
  personal: {
    name: "Parth Saxena",
    role: "AI Engineer · Building Systems",
    roleLabel: "AI Engineer · Building Systems",
    tagline: "Making things that make machines think.",
    subTagline: "AI Engineer · Automation Systems",
    status: "Building Systems",
    terminalLine: "> systems.run() — 4 projects shipped. 2 live. Still building.",
    email: "parth_saxena44@yahoo.com",
    location: "Based in Kanpur, UP",
    experience: "~2 years in. Still building.",
    socials: [
      { name: "GitHub", url: "https://github.com/Kris-Zar", icon: "github", label: "Code & Repos" },
      { name: "LinkedIn", url: "https://linkedin.com/in/parth-saxena-dev", icon: "linkedin", label: "Professional" },
      { name: "Hugging Face", url: "https://huggingface.co/Parth-Saxena", icon: "cpu", label: "Live Spaces" },
      { name: "Portfolio", url: "https://kris-zar.github.io/Portfolio", icon: "globe", label: "Live Site" }
    ]
  },

  // Section 2: The Stance (Belief Statement)
  belief: {
    kicker: "✦ THE STANCE",
    headline: "I don't train models to get metrics. I train them to solve things.",
    leadPrefix: "I don't train models to get metrics.",
    highlight: "I train them to solve things.",
    body: "I don't stop at accuracy scores. A model that hits 92% in a notebook and breaks in production isn't a win — it's a warning sign.\n\nEvery project I build goes all the way. Data pipeline. Training. Evaluation. Deployment. Real users. That's the standard I hold myself to, even as a student.",
    punchline: "If it doesn't ship, it doesn't count."
  },

  // Section 3: The Craft (What I Actually Do)
  whatIDo: {
    kicker: "⚙️ THE CRAFT",
    headline: "I build AI systems that actually run.",
    subQuote: "Not demos. Not Colab notebooks. Deployed, working products.",
    capabilities: [
      {
        icon: "⚡",
        title: "ML Pipelines & Fraud Intelligence",
        desc: "End-to-end data pipelines built for real-world noise — class imbalance, missing data, adversarial edge cases. Every model ships with explainability baked in."
      },
      {
        icon: "👁️",
        title: "Multimodal & Emotion AI",
        desc: "Audio. Vision. Text. Combining signals to make machines that understand context — not just classify inputs."
      },
      {
        icon: "🧱",
        title: "Full-Stack AI Deployment",
        desc: "FastAPI backends. React frontboards. MongoDB. Docker. I deploy my own models because I want to understand every layer they run on."
      }
    ]
  },

  // Section 4: The Origin (~2 Years In)
  origin: {
    kicker: "⏳ THE ORIGIN",
    headline: "~2 years in. Every project started as a frustration.",
    body: "I didn't get into AI because it was trending. I got into it because I kept running into problems that existing tools were too dumb, too expensive, or too inflexible to solve. So I built the tools myself.",
    panels: [
      {
        num: "PANEL 01 · NUTRITION",
        art: "🥑",
        problem: "Calorie apps made me enter every ingredient by hand.",
        resolution: "→ BUILT NUTRITRACK-PRO",
        detail: "Photograph food. Get macros instantly. Gemini Vision API. 92% accuracy. 80% less manual work."
      },
      {
        num: "PANEL 02 · FOCUS",
        art: "⏱️",
        problem: "Studying without structure was pure chaos.",
        resolution: "→ BUILT TRACKDOWN",
        detail: "Pomodoro tracker with streaks and visual progress. Built it in a weekend. Still use it every day."
      },
      {
        num: "PANEL 03 · EMPATHY",
        art: "🤍",
        problem: "Wanted a quiet way to know if someone around me was struggling.",
        resolution: "→ BUILT MOODWAVE",
        detail: "Speak into it. It reads your emotional state. CNN on audio features. 87% accuracy. Live on Hugging Face."
      },
      {
        num: "PANEL 04 · TRUST",
        art: "🔍",
        problem: "Fraud detection systems shouldn't be a black box.",
        resolution: "→ BUILT FRAUDLENS",
        detail: "284,807 real transactions. Random Forest + SHAP. Every decision explained. Live on Hugging Face."
      }
    ]
  },

  // Section 5: Selected Work (6 Project Cards)
  projectsMeta: {
    kicker: "📁 SELECTED WORK",
    headline: "Selected Projects.",
    subline: "Things I've engineered and shipped.",
    shippedCount: "06 Projects",
    focusAreas: "Vision AI · RecSys · NLP · Fraud · GenAI"
  },

  projects: [
    {
      id: "fraudlens",
      num: "ISSUE 01",
      tab: "Fraud AI",
      status: "Live on Hugging Face",
      title: "FraudLens",
      tagline: "Real-Time Credit Card Fraud Detection",
      accent: "#E25241",
      beforeQuote: "Every fraudulent transaction left a pattern. I just made a machine that reads it.",
      afterQuote: "284,807 transactions. 0.17% fraud. It catches what humans miss — and explains exactly why.",
      description: "An end-to-end ML pipeline trained on real credit card transaction data. Built to handle extreme class imbalance using MCC + F1 dual-metric strategy — because accuracy alone is a lie when fraud is 0.17% of your data. Deployed on Hugging Face with real-time fraud probability scoring, a risk gauge, and full SHAP feature contribution breakdown. Every prediction is auditable. No black boxes.",
      problem: "Credit card transaction datasets suffer from extreme 0.17% fraud skew. Naive classifiers achieve 99.8% nominal accuracy while failing on actual fraud cases, leaving financial institutions vulnerable with zero decision explainability.",
      solution: "Engineered an end-to-end Random Forest pipeline optimized on MCC and F1 dual metrics. Integrated live TreeSHAP attribution to extract auditable per-transaction risk factors with an interactive risk gauge deployed on Hugging Face Spaces.",
      highlights: [
        "Trained on 284,807 real European credit card transactions with strict validation discipline",
        "MCC + F1-score dual metric strategy neutralizing extreme 0.17% fraud class imbalance",
        "Real-time SHAP feature contribution waterfalls — every single decision is transparently auditable",
        "Containerized interactive deployment on Hugging Face Spaces with instant probability scoring"
      ],
      stack: ["Python", "Random Forest", "Scikit-learn", "SHAP", "Pandas", "NumPy"],
      githubUrl: "https://github.com/Kris-Zar/FraudLens",
      demoUrl: "https://huggingface.co/spaces/Parth-Saxena/FraudLens"
    },
    {
      id: "moodwave",
      num: "ISSUE 02",
      tab: "Human AI",
      status: "Live on Hugging Face",
      title: "MoodWave",
      tagline: "Multimodal Voice & Text Emotion Detection",
      accent: "#8B5CF6",
      beforeQuote: "A quiet sanity check.",
      afterQuote: "For the moments when you don't know if someone is okay — including yourself.",
      description: "Speak into it. It classifies your emotional state across 6 categories — Angry, Sad, Happy, Fear, Disgust, Neutral. Not just audio. Multimodal. The CNN reads your voice (96 Mel bands + 40 MFCCs). The text layer reads your words via Web Speech API. When they disagree, the system resolves the contradiction intelligently. Plays mood-matched YouTube playlists. Serves mindfulness prompts per emotion. Dockerised. Deployed. Cyberpunk UI built from scratch.\n\nMy role: Full frontend, system integration & repo maintainer. ML & backend: Atharva Shukla.",
      problem: "Emotion detection often relies on single modality models that fail when vocal tone and verbal sentiment contradict each other (e.g., sarcasm or emotional suppression).",
      solution: "Engineered a multimodal fusion system coupling a 2D CNN acoustic model with client-side Web Speech text analysis, intelligent contradiction resolution, mood-matched audio therapy, and Docker containerization.",
      highlights: [
        "87% test accuracy on voice acoustics using 2D CNN across 96 Mel spectrogram bands & 40 MFCCs",
        "Multimodal fusion resolving acoustic vs semantic verbal discrepancies in real-time",
        "Curated mood-matched YouTube playlists and contextual mindfulness exercises per emotional state",
        "Full frontend architecture, Web Audio API DSP pipeline, Docker packaging & Hugging Face deployment"
      ],
      stack: ["TensorFlow", "CNN", "Librosa", "FastAPI", "Docker", "Web Audio API", "React"],
      githubUrl: "https://github.com/Kris-Zar/Emotion-Detection-System-",
      demoUrl: "https://huggingface.co/spaces/Atharv-Parth/Emotion-Detection-System"
    },
    {
      id: "nutritrack-pro",
      num: "ISSUE 03",
      tab: "GenAI",
      status: "Live",
      title: "NutriTrack-PRO",
      tagline: "Multimodal GenAI Nutrition Tracker",
      accent: "#10B981",
      beforeQuote: "Meal logging was a chore. I made it a photo.",
      afterQuote: "Photograph your food. Get your macros. No manual entry. No guessing.",
      description: "Photograph food, get instant calorie and macro breakdowns powered by Google Gemini Vision API. 92% accuracy against labelled datasets. 80% reduction in manual logging time. Iterative prompt engineering drove the LLM output to production-grade quality — not just 'pretty good,' but actually reliable. Full-stack product: React dashboard, FastAPI backend, MongoDB.",
      problem: "Traditional calorie tracking requires tedious manual search and ingredient weighing, causing over 80% of users to abandon tracking within days.",
      solution: "Built an end-to-end multimodal GenAI web application combining Gemini Vision API with production-tuned prompt chains to deliver structured, high-accuracy macronutrient analysis from a single photograph.",
      highlights: [
        "92% macronutrient estimation accuracy benchmarked against labelled nutritional datasets",
        "80% reduction in user logging overhead through zero-friction camera capture",
        "Production-grade prompt engineering enforcing deterministic, error-resilient JSON schemas",
        "Complete full-stack architecture: React frontend, FastAPI asynchronous backend, and MongoDB database"
      ],
      stack: ["React", "FastAPI", "MongoDB", "Gemini Vision API", "Prompt Engineering"],
      githubUrl: "https://github.com/Kris-Zar/NutriTrack-PRO",
      demoUrl: "https://nutritrack-frontend-behf.onrender.com"
    },
    {
      id: "movierec",
      num: "ISSUE 04",
      tab: "RecSys",
      status: "Interactive ML App",
      title: "MovieRec",
      tagline: "Collaborative Filtering & TMDB Hybrid Recommender",
      accent: "#3B82F6",
      beforeQuote: "People don't want 800,000 choices. They want the 5 that matter.",
      afterQuote: "Item-item collaborative filtering meets real-time TMDB metadata. Finding cinematic resonance beyond keyword tags.",
      description: "An ML-powered movie recommendation engine built on item-item collaborative filtering and cosine similarity across user-item interaction matrices. Blends offline matrix factorization embeddings with live TMDB API metadata for real-time recommendations, deep similarity retrieval, and dynamic genre filtering inside a custom Streamlit dashboard.",
      problem: "Content discovery in entertainment platforms suffers from cold-start bottlenecks, sparse ratings data, and superficial keyword matching that misses thematic and directorial nuances across film catalogs.",
      solution: "Engineered an item-item collaborative filtering matrix using Scikit-learn and SciPy, generating precomputed cosine similarity mappings for fast lookups. Built a hybrid enrichment layer querying TMDB's 800,000+ film catalog for live trailers, posters, and multi-favorite preference scoring in an interactive Streamlit application.",
      highlights: [
        "Item-Item collaborative filtering matrix precomputed with cosine similarity over user-item rating matrices",
        "Hybrid recommendation pipeline integrating offline matrix embeddings with TMDB's live 800,000+ title catalog",
        "Multi-film preference aggregation allowing users to blend multiple favorites into tailored suggestion sets",
        "Interactive dark-mode Streamlit dashboard with instant search, genre filtering, and YouTube trailer embeds"
      ],
      stack: ["Python", "Streamlit", "Scikit-learn", "SciPy", "Collaborative Filtering", "Pandas", "Cosine Similarity", "TMDB API"],
      githubUrl: "https://github.com/Kris-Zar/Movie-Recommendation-App",
      demoUrl: "https://github.com/Kris-Zar/Movie-Recommendation-App"
    },
    {
      id: "heart-disease-predictor",
      num: "ISSUE 05",
      tab: "Healthcare AI",
      status: "Research & Prototype",
      title: "Heart Disease Predictor",
      tagline: "10-Year CHD Risk Classification",
      accent: "#EF4444",
      beforeQuote: "Numbers in a dataset. Lives on the other end.",
      afterQuote: "4,000 patient records. 6 engineered features. One question: will this person develop heart disease?",
      description: "A coronary heart disease risk classifier trained on the Framingham Heart Study. Logistic Regression with clean feature engineering, StandardScaler normalisation, and proper 70/30 train-test discipline. ~85% accuracy. No shortcuts. No data leakage. Real clinical data, treated with the care it deserves. Currently upgrading the pipeline with a fully leakage-safe version.",
      problem: "Clinical risk prediction models often suffer from data leakage during normalization and lack transparent interpretability for physicians.",
      solution: "Structured an interpretable Logistic Regression pipeline on 4,000 Framingham records with 6 domain-engineered clinical features and strict 70/30 train-test separation to safeguard against data leakage.",
      highlights: [
        "Trained on 4,000 real patient records from the landmark Framingham Heart Study",
        "~85% classification accuracy with clinical feature selection and StandardScaler preprocessing",
        "Strict prevention of data leakage across transformation and imputation steps",
        "Transparent, interpretable odds ratios allowing medical practitioners to understand risk factors"
      ],
      stack: ["Python", "Logistic Regression", "Scikit-learn", "Pandas", "StandardScaler"],
      githubUrl: "https://github.com/Kris-Zar/Heart-Disease-Prediction",
      demoUrl: "https://github.com/Kris-Zar/Heart-Disease-Prediction"
    },
    {
      id: "trackdown",
      num: "ISSUE 06",
      tab: "Productivity",
      status: "Active Daily Driver",
      title: "TrackDown",
      tagline: "Pomodoro Focus & Study Tracker",
      accent: "#F59E0B",
      beforeQuote: "Built it because I needed it.",
      afterQuote: "Studying without a system was chaos. So I built the system.",
      description: "A clean, distraction-free Pomodoro tracker with visual session progress and streak tracking. No logins. No accounts. No noise. Client-side only. Fast. Always available. Built in a weekend. Still in daily use.",
      problem: "Modern timer applications are cluttered with subscription paywalls, intrusive tracking, forced logins, and notification bloat that disrupts deep focus.",
      solution: "Engineered a zero-dependency, ultra-lightweight client-side focus cadence engine utilizing HTML5 Canvas for real-time visual progress arcs and local streak persistence.",
      highlights: [
        "100% client-side with zero dependencies — built with Vanilla JavaScript, Canvas, and CSS",
        "Instant launch with zero logins, zero network latency, and complete privacy",
        "Visual circular progress rendering and persistent habit-streak counters",
        "Personal daily driver shipped and running live on GitHub Pages"
      ],
      stack: ["Vanilla JS", "HTML5 Canvas", "CSS3"],
      githubUrl: "https://github.com/Kris-Zar/TrackDown",
      demoUrl: "https://kris-zar.github.io/TrackDown/"
    }
  ],

  // Section 6: Philosophy
  philosophy: {
    kicker: "⚖️ THE PHILOSOPHY",
    headline: "Intelligence should feel invisible.",
    body: "A model that needs a manual isn't smart — it's just complicated. The real work is making something powerful enough to handle the hard parts, and simple enough that you trust it without thinking about it.\n\nThat's where I build. Not at the boundary of capability. At the boundary of capability and clarity.",
    axisLeft: "CAPABILITY",
    axisRight: "SIMPLICITY"
  },

  // Section 7: Based in Kanpur (The Human Anchor)
  kanpur: {
    kicker: "📍 THE HUMAN ANCHOR",
    city: "Based in Kanpur, UP.",
    subtitle: "The Manchester of the East",
    story: "The Manchester of the East — industrial by heritage, Biryani and Thandai by soul, and the Ganga flowing quietly through all of it.",
    atmosphere: [
      "It's a city that doesn't perform. It just works. Directly. Without pretense.",
      "That's shaped how I build too: no unnecessary weight, no overengineering, just clear thinking applied to real problems.",
      "Fast to start. Hard to stop. Kanpuriya by default."
    ],
    closing: "Fast to start. Hard to stop. Kanpuriya by default."
  },

  // Section 8: The Signal (Contact)
  contact: {
    kicker: "📡 THE SIGNAL",
    headline: "Let's build something real.",
    body: "Open to AI/ML engineering roles — internships, full-time, freelance. Remote or on-site. Pan-India.\n\nIf you're working on something that needs a machine to think, I'd like to hear about it. Over email, or over chai.",
    email: "parth_saxena44@yahoo.com"
  },

  // Technical Skills Dossier
  skills: {
    "ML & AI": ["Scikit-learn", "TensorFlow", "Keras", "CNN", "RNN/LSTM", "Transformers", "GANs", "Autoencoders", "Reinforcement Learning", "Random Forest", "Logistic Regression", "SHAP", "MCC", "Collaborative Filtering", "Cosine Similarity", "SciPy"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Feature Engineering"],
    "GenAI & LLMs": ["Gemini Vision API", "Prompt Engineering", "Hugging Face", "NLP"],
    "Audio & Signal": ["Librosa", "Mel Spectrogram", "MFCCs", "Web Audio API"],
    "Backend & Infra": ["FastAPI", "Uvicorn", "MongoDB", "MySQL", "Docker", "REST APIs", "TMDB API"],
    "Frontend": ["React", "HTML5", "CSS3", "Vanilla JS", "TailwindCSS", "Canvas API", "Streamlit"],
    "Languages": ["Python (primary)", "JavaScript", "Java", "C", "C++", "C#"],
    "Tools": ["Git", "GitHub", "Jupyter", "VS Code"]
  },

  // Education Timeline
  education: [
    {
      degree: "B.Tech — CS (AI & ML)",
      institution: "Axis Institute of Technology, AKTU",
      period: "2023–2027",
      score: "CGPA: 7.1/10"
    },
    {
      degree: "Class XII — CBSE",
      institution: "Jai Narayan Vidya Mandir, Kanpur",
      period: "2023",
      score: "72%"
    },
    {
      degree: "Class X — ICSE",
      institution: "Sun Shine Public School, Kanpur",
      period: "2021",
      score: "81%"
    }
  ],

  // Verified Certifications
  certifications: [
    {
      title: "Complete ML & Data Science — RNNs, LSTMs, Transformers, GANs, RL",
      issuer: "GFG × NationSkillup",
      badge: "ML Expert"
    },
    {
      title: "ML Essentials for Decision Makers + Art of the Possible",
      issuer: "AWS (×2)",
      badge: "Cloud AI"
    },
    {
      title: "Intro to Generative AI · LLMs · Responsible AI",
      issuer: "Google Cloud (×3)",
      badge: "GenAI"
    },
    {
      title: "HackerRank Gold Badge — Python & SQL",
      issuer: "HackerRank",
      badge: "Gold Badge"
    }
  ],

  // Bottom Navigation Chapters for the Scrubber Ruler
  chapters: [
    { id: "hero", label: "Hook", title: "First Principles" },
    { id: "belief", label: "Stance", title: "The Stance" },
    { id: "craft", label: "What", title: "AI & Automation" },
    { id: "origin", label: "Origin", title: "~2 Years In" },
    { id: "works", label: "Works", title: "Selected Projects" },
    { id: "philosophy", label: "Philosophy", title: "Invisible Intelligence" },
    { id: "kanpur", label: "Kanpur", title: "Roots & Soul" },
    { id: "contact", label: "Signal", title: "Get in Touch" }
  ]
};

// Expose globally for browser script tag and modular contexts
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
