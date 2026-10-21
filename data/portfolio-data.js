/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION — GRAPHIC NOVEL MEMOIR
 * =========================================================================
 * 
 * Authentic narrative data for AI Engineer & Automation Systems builder.
 * All sections, dialogue caption boxes, project cards, philosophy quotes,
 * and Kanpur roots read dynamically from this file.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // Identity & Opening Hook
  personal: {
    name: "AI Engineer", // Placeholder or customizable in Quick-Edit modal
    role: "AI Engineer · Automation Systems",
    hook: "Built from first principles.",
    tagline: "Making things that make life work.",
    subtext: "Stepping into a space that's already purposeful. Not a showcase. A signal.",
    status: "Open to High-Impact Automation & AI Systems",
    email: "builder@firstprinciples.dev",
    location: "Kanpur, UP · Manchester of the East",
    experience: "~2 years in. Still building.",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "github", label: "Code & Systems" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin", label: "Professional" },
      { name: "X / Twitter", url: "https://x.com", icon: "twitter", label: "Thoughts & Builds" },
      { name: "Resume", url: "#resume", icon: "file-text", label: "Read Resume" }
    ]
  },

  // Section 2: The Belief Statement
  belief: {
    kicker: "The Stance",
    headline: "I don't follow paths that were already carved. I carve my own.",
    body: "I don't build things that just work. I build things that are meaningful, polished, and fitted so well to the problem that you wonder why they didn't exist before.",
    punchline: "That's the only kind of work I know how to do."
  },

  // Section 3: What I Actually Do
  whatIDo: {
    kicker: "The Craft",
    headline: "Automation systems powered by AI.",
    body: "Things that handle the repetitive, the tedious, and the easy-to-miss — so you can focus on what actually matters.",
    clarity: "Not magic. Just good thinking, applied carefully.",
    capabilities: [
      {
        title: "Intelligent Workflows",
        desc: "End-to-end agents and automated pipelines that replace manual friction with dependable precision.",
        icon: "cpu"
      },
      {
        title: "Computer Vision & Edge AI",
        desc: "Turning real-time imagery, feeds, and sensory inputs into structured, actionable understanding.",
        icon: "eye"
      },
      {
        title: "System Architecture",
        desc: "Lean, resilient backends designed from first principles with zero bloated dependencies.",
        icon: "layers"
      }
    ]
  },

  // Section 4: The Origin Journey
  origin: {
    kicker: "The Origin",
    timeline: "~2 years in. Still building.",
    premise: "I started because I had problems I couldn't find tools for. Not a textbook reason. A real one.",
    frustrations: [
      {
        problem: "Meal logging apps were too expensive.",
        catalyst: "Why should nutrition tracking cost a fortune just to understand what you eat?",
        outcome: "Built an image-based intelligent scanner."
      },
      {
        problem: "Studying without a system was chaos.",
        catalyst: "Distraction isn't a personality flaw. It is an unengineered workspace problem.",
        outcome: "Created a focused Pomodoro cadence."
      },
      {
        problem: "Wanted a quiet check if people around me were okay.",
        catalyst: "Human emotions are quiet and easy to overlook in the rush of life.",
        outcome: "Trained an empathetic vision model."
      }
    ],
    closing: "So I built things. Not because someone asked. Because I couldn't not. Every project started as a personal frustration and ended as something someone else might actually use."
  },

  // Section 5: The Works (Project tabs & deep dives)
  projects: [
    {
      id: "nutritrack",
      title: "NutriTrack",
      tagline: "Image-Based Meal Analysis",
      category: "Vision AI & Automation",
      tab: "AI & Vision",
      accent: "#2E7D32", // Forest green
      beforeQuote: "Meal logging was broken for me. The good tools cost too much.",
      afterQuote: "So I fixed it. Simple, accessible, done.",
      description: "A fast, privacy-focused visual nutrition assistant that breaks down meal macronutrients, portion sizes, and dietary insights from a single quick photo snapshot.",
      problem: "Popular macro-tracking apps lock basic camera logging behind steep recurring paywalls, clunky multi-step food database lookups, and intrusive ads.",
      solution: "Engineered a lightweight visual recognition pipeline combining quantized vision models and dietary knowledge bases to parse meals in under 400ms.",
      highlights: [
        "Real-time food item segmentation and volume estimation",
        "Calorie & macro breakdown with zero manual search friction",
        "100% accessible and designed for everyday meal habits"
      ],
      stack: ["Python", "FastAPI", "Vision AI", "React", "TailwindCSS"],
      status: "Shipped & Tested",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "trackdown",
      title: "TrackDown",
      tagline: "Pomodoro-Powered Productivity System",
      category: "Systems & Productivity",
      tab: "Systems",
      accent: "#E65100", // Clockwork amber
      beforeQuote: "Focus isn't a personality trait. It's a system.",
      afterQuote: "I built mine, then made it yours.",
      description: "An intentional focus operating system built around adaptive Pomodoro cycles, distraction blockers, and habit-loop feedback. Because distraction is a design problem, not a willpower problem.",
      problem: "Traditional productivity tools either overwhelm with complex kanbans or treat time as rigid stopwatch countdowns without accounting for cognitive fatigue.",
      solution: "Designed a clean, frictionless desktop and web companion that pairs timed deep-work sprints with ambient focus queues and honest session reflection.",
      highlights: [
        "Flow-state timer with non-intrusive sound cues",
        "Adaptive break pacing calibrated to session density",
        "Friction-free task queue that clears mental overhead"
      ],
      stack: ["TypeScript", "Electron / Web", "TailwindCSS", "State Engine"],
      status: "Active Daily Driver",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "emotion-detection",
      title: "Emotion Detection",
      tagline: "Empathetic Facial Expression Analysis",
      category: "Human AI & Vision",
      tab: "Human AI",
      accent: "#5E35B1", // Deep soothing violet
      beforeQuote: "A quiet sanity check.",
      afterQuote: "For the moments when you don't know if someone is okay — including yourself.",
      description: "The most human project. Not a gimmick. A genuine attempt at building an observant, empathetic machine vision assistant that quietly detects affective states and emotional fatigue.",
      problem: "Mental exhaustion and emotional burnout often remain unnoticed until it's too late. Most digital tools ignore how the person behind the screen is actually holding up.",
      solution: "Trained and benchmarked a lightweight facial landmark emotion classifier that runs on-device, offering gentle ambient check-ins without invasive cloud streaming.",
      highlights: [
        "Edge-based on-device emotion classification with total privacy",
        "Micro-expression tracking for stress and fatigue detection",
        "Quiet, non-intrusive ambient reflection prompts"
      ],
      stack: ["PyTorch", "OpenCV", "MediaPipe", "FastAPI", "Webcam Engine"],
      status: "Research & Prototype",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "pipeline-sentinel",
      title: "Pipeline Sentinel",
      tagline: "Autonomous Data Watchdog & Self-Healing Agent",
      category: "Automation & Systems",
      tab: "Systems",
      accent: "#D95338", // Factory oxide red / terracotta
      beforeQuote: "Silent pipeline stalls at 3 AM were killing weekend peace.",
      afterQuote: "Now it detects, heals, and reports before anyone wakes up.",
      description: "An autonomous watchdog agent that monitors mission-critical data pipelines, detects statistical anomalies in streaming records, and executes idempotent self-healing rollbacks with plain-English incident summaries.",
      problem: "Traditional alerting systems deluge engineers with noisy alerts while failing to provide root-cause diagnostics or safe automated recovery when schemas drift.",
      solution: "Engineered a lightweight daemon that couples real-time data drift tracking with deterministic state rollback playbooks, cutting critical incident MTTR by 85%.",
      highlights: [
        "Sub-second drift and anomaly detection on streaming workloads",
        "Deterministic recovery playbooks with automated zero-loss retry loops",
        "Clear, human-readable triage incident reports piped to Slack and CLI"
      ],
      stack: ["Python", "FastAPI", "Docker", "PostgreSQL", "Redis", "Kafka"],
      status: "Production Deployed",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "whisper-flow",
      title: "WhisperFlow",
      tagline: "100% On-Device Meeting & Speech Intelligence",
      category: "Speech AI & Local Models",
      tab: "AI & Vision",
      accent: "#0284C7", // Ocean steel cyan
      beforeQuote: "Cloud meeting tools upload your raw voice to unknown servers.",
      afterQuote: "Zero telemetry. Everything runs on local silicon.",
      description: "A private, zero-telemetry desktop voice assistant that performs offline speaker diarization, real-time transcription, and automated action-item synthesis using quantized local models.",
      problem: "High-value architectural debates and proprietary ideas are routinely exposed to privacy vulnerabilities when sent to cloud-hosted transcription providers.",
      solution: "Packaged quantized Whisper models and compact local LLMs into an ultra-low-latency desktop runtime with native hardware acceleration.",
      highlights: [
        "100% private, on-device transcription with zero network connectivity needed",
        "Speaker diarization and automated task extraction in real-time",
        "Optimized GPU quantization maintaining under 1.4GB unified memory footprint"
      ],
      stack: ["Python", "Whisper", "Ollama / Llama.cpp", "Electron", "SQLite"],
      status: "Shipped & Open Source",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "first-principles-lab",
      title: "Tactile Shader Lab",
      tagline: "Interactive Physics & Eulerian Fluid Simulation",
      category: "Creative Computing & WebGL",
      tab: "Human AI",
      accent: "#EAB308", // Radiant amber
      beforeQuote: "Formulas in textbooks don't teach physical intuition.",
      afterQuote: "Interactive tactile physics make complex algorithms feel alive.",
      description: "A laboratory of lightweight WebGPU and WebGL2 interactive shaders exploring Eulerian fluid dynamics, spring-damper lattices, and responsive digital glass refraction.",
      problem: "Technical concepts like navier-stokes or wave propagation remain dry and abstract without immediate tactile cause-and-effect experimentation.",
      solution: "Crafted interactive algorithmic canvases tuned for real-time 60fps cursor manipulation, letting users directly experience and manipulate computational dynamics.",
      highlights: [
        "Real-time Eulerian grid fluid solver running purely on the GPU",
        "Spring-mass damping system calibrated for organic tactile feedback",
        "Zero heavyweight frameworks — built with vanilla WebGL and math primitives"
      ],
      stack: ["JavaScript", "WebGL2 / WebGPU", "GLSL", "Canvas API", "Math"],
      status: "Interactive Lab",
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  // Section 6: Philosophy
  philosophy: {
    kicker: "The Balance",
    headline: "I care about the line between powerful and approachable.",
    principles: [
      {
        quote: "A system that needs a manual isn't smart — it's just complicated.",
        detail: "Complexity is easy. Restraint is the actual discipline."
      },
      {
        quote: "The real work is making something capable enough to handle the hard parts...",
        detail: "...and simple enough that you trust it without hesitation."
      }
    ],
    closing: "That's where I build."
  },

  // Section 7: Based in Kanpur (Human Anchor)
  kanpur: {
    kicker: "Roots & Soul",
    city: "Kanpur, UP",
    subtitle: "The Manchester of the East",
    story: "Industrial by heritage, street-food by soul, and the Ganga flowing quietly through all of it.",
    atmosphere: [
      "Kanpur is one of those cities that carries weight. Temples on every corner. Spirituality woven into the streets.",
      "A place where the sacred and the everyday sit side by side without feeling like a contradiction.",
      "It shapes how you think: direct, grounded, unhurried about the things that matter."
    ],
    personalNote: "When I'm not building, I'm probably eating something I shouldn't — or going deep into a rabbit hole that will definitely become a project."
  },

  // Bottom Navigation Chapters for the Scrubber Ruler
  chapters: [
    { id: "hero", label: "Hook", title: "First Principles" },
    { id: "belief", label: "Belief", title: "Carving Paths" },
    { id: "craft", label: "What", title: "AI & Automation" },
    { id: "origin", label: "Origin", title: "~2 Years In" },
    { id: "works", label: "Works", title: "Selected Projects" },
    { id: "philosophy", label: "Philosophy", title: "Approachability" },
    { id: "kanpur", label: "Kanpur", title: "Roots & Ride" },
    { id: "contact", label: "Signal", title: "Get in Touch" }
  ]
};

// Expose globally for both browser script tag and modules
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
