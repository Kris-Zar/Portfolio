/**
 * =========================================================================
 * THE GRAPHIC NOVEL MEMOIR — APPLICATION LOGIC
 * Master Scroll Scrub · Pupil Tracking · Dynamic Tabs · Kanpur Auto Physics
 * =========================================================================
 */

(function () {
  'use strict';

  // 1. Data Validation
  const DATA = window.PORTFOLIO_DATA || {};
  if (!DATA.personal) {
    console.error("PORTFOLIO_DATA is missing or not loaded.");
    return;
  }

  // DOM Elements
  const stage = document.getElementById("stage");
  const dustCanvas = document.getElementById("dustCanvas");
  const rulerHead = document.getElementById("rulerHead");
  const rulerMarkers = document.getElementById("rulerMarkers");
  const projectsGrid = document.getElementById("projectsGrid");
  const worksTabs = document.getElementById("worksTabs");
  const caseDrawer = document.getElementById("caseDrawer");
  const drawerPanel = document.getElementById("drawerPanel");
  const drawerContent = document.getElementById("drawerContent");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  let lenis = null;
  const soundBtn = document.getElementById("soundBtn");
  const soundLabel = document.getElementById("soundLabel");
  const copyMailBtn = document.getElementById("copyMailBtn");
  const honkBtn = document.getElementById("honkBtn");
  const comicCursor = document.getElementById("comicCursor");
  const cursorPill = document.getElementById("cursorPill");
  const selBox = document.getElementById("selBox");
  const dimTag = document.getElementById("dimTag");

  // 2. Populate Static Narrative Data
  function populateData() {
    // Brand & Hero
    document.getElementById("brandName").textContent = DATA.personal.name || "AI Engineer";
    document.getElementById("brandStatus").textContent = "Building Systems";
    document.getElementById("heroName").textContent = DATA.personal.name || "AI Engineer";
    document.getElementById("heroRole").textContent = DATA.personal.role;
    document.getElementById("heroTagline").textContent = `"${DATA.personal.tagline}"`;
    document.getElementById("heroHook").textContent = DATA.personal.hook;

    // Social Links
    const socialsBar = document.getElementById("socialsBar");
    socialsBar.innerHTML = "";
    (DATA.personal.socials || []).forEach(soc => {
      const a = document.createElement("a");
      a.className = "btn-comic";
      a.href = soc.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = soc.name;
      socialsBar.appendChild(a);
    });

    // Bottom Navigation Markers with Proportional Content Spacing
    const CHAPTER_POSITIONS = {
      hero: 0,
      belief: 10.5,
      craft: 19.5,
      origin: 28.5,
      works: 35.0,
      philosophy: 77.0,
      kanpur: 86.5,
      contact: 100
    };

    rulerMarkers.innerHTML = "";
    (DATA.chapters || []).forEach(chap => {
      const btn = document.createElement("button");
      btn.className = "ruler-marker-btn" + (chap.id === "hero" ? " active" : "");
      btn.dataset.jump = chap.id;
      btn.textContent = chap.label;
      btn.title = chap.title;
      const pos = CHAPTER_POSITIONS[chap.id] ?? 0;
      btn.style.left = pos + "%";
      rulerMarkers.appendChild(btn);
    });

    // Initialize Works Tabs & Projects Carousel
    initWorksTabs();
    renderProjects("all");
  }

  // 3. Dynamic Category Tabs & Nesil Noble Horizontal Track
  function initWorksTabs() {
    if (!worksTabs) return;
    worksTabs.innerHTML = "";
    const allProjects = DATA.projects || [];

    const categories = ["All"];
    allProjects.forEach(p => {
      if (p.tab && !categories.includes(p.tab)) {
        categories.push(p.tab);
      }
    });

    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (cat === "All" ? " active" : "");
      btn.dataset.filter = cat;
      const count = cat === "All" ? allProjects.length : allProjects.filter(p => p.tab === cat).length;
      btn.textContent = `${cat} (${count})`;
      btn.setAttribute("role", "tab");
      worksTabs.appendChild(btn);

      btn.addEventListener("click", () => {
        worksTabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (cat === "All") {
          jumpToScene("works", 0.15);
        } else {
          const cardIndex = allProjects.findIndex(p => p.tab === cat);
          if (cardIndex !== -1) {
            jumpToProjectCard(cardIndex, allProjects.length);
          }
        }
      });
    });
  }

  function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";
    const list = DATA.projects || [];

    list.forEach((p, idx) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.dataset.id = p.id;

      card.innerHTML = `
        <div>
          <div class="project-card-header">
            <div class="project-title-meta">
              <span class="project-num">ISSUE 0${idx + 1}</span>
              <span class="project-tag" style="background:${p.accent}">${p.tab}</span>
            </div>
            <span class="project-status">● ${p.status}</span>
          </div>

          <div class="project-cover-art" style="border-bottom: 3.5px solid ${p.accent}">
            <div class="cover-schematic-bg"></div>
            <div class="cover-content">
              <div class="cover-badge">${p.tab === 'Fraud AI' ? '🛡️ FRAUD INTELLIGENCE' : p.tab === 'Human AI' ? '🧠 MULTIMODAL EMOTION' : p.tab === 'GenAI' ? '⚡ VISION LLM' : p.tab === 'RecSys' ? '🎬 HYBRID RECOMMENDER' : p.tab === 'Healthcare AI' ? '❤️ CLINICAL PREDICTOR' : '⏱️ FOCUS CADENCE'}</div>
              <div class="cover-lead-title">${p.title}</div>
              <div class="cover-lead-subtitle">${p.tagline}</div>
            </div>
          </div>

          <div class="project-body" style="margin-top: 10px;">
            <div class="project-before-quote">"${p.beforeQuote}"</div>
            <div class="project-after-quote">"${p.afterQuote}"</div>
            <p class="project-summary">${p.description}</p>
          </div>
        </div>

        <div class="project-card-bottom">
          <div class="project-stack">
            ${p.stack.map(s => `<span class="stack-pill">${s}</span>`).join("")}
          </div>
          <div class="card-footer">
            <span class="open-case-btn">Read Case Study →</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openCaseStudy(p));
      projectsGrid.appendChild(card);
    });

    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  }

  const SCENE_TARGETS = {
    hero: 0.0,
    belief: 0.105,
    craft: 0.195,
    origin: 0.285,
    works: 0.350,
    philosophy: 0.770,
    kanpur: 0.865,
    contact: 0.955
  };

  function jumpToScene(key) {
    const targetProgress = SCENE_TARGETS[key] !== undefined ? SCENE_TARGETS[key] : 0;
    jumpToProgress(targetProgress);
  }

  function jumpToProjectCard(cardIndex, totalCards) {
    // Works track scrub runs from progress 0.354 to 0.708 (span: 0.354)
    const startScrubProgress = 0.354;
    const scrubProgressSpan = 0.354;
    const frac = totalCards > 1 ? cardIndex / (totalCards - 1) : 0;
    const targetProgress = Math.min(0.72, startScrubProgress + frac * scrubProgressSpan);
    jumpToProgress(targetProgress);
  }

  function jumpToProgress(targetProgress) {
    const scrollSpace = document.getElementById("scrollSpace");
    if (!scrollSpace) return;
    const scrollDistance = scrollSpace.offsetHeight - window.innerHeight;
    const targetY = targetProgress * scrollDistance;
    if (lenis) {
      lenis.scrollTo(targetY, { duration: 1.4 });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  }

  // 4. In-Situ Case Study Drawer
  function onDrawerWheel(e) {
    e.stopPropagation();
  }

  function openCaseStudy(project) {
    drawerContent.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-top:10px;">
        <span class="project-tag" style="background:${project.accent}; font-size:12px; padding:3px 10px;">${project.tab}</span>
        <span style="font-family:var(--font-mono); font-size:12px; font-weight:700;">${project.status}</span>
      </div>
      <h2 style="font-family:var(--font-display); font-size: clamp(28px, 3.5vw, 42px); font-weight:900; line-height:1.1; margin-top:8px;">
        ${project.title}
      </h2>
      <p style="font-size:16px; font-weight:600; color:var(--ink-soft);">${project.tagline}</p>

      <div class="comic-box" style="margin-top:16px; border-left: 5px solid ${project.accent};">
        <div class="comic-kicker">THE PROBLEM</div>
        <p style="font-size:15px; color:var(--ink);">${project.problem}</p>
      </div>

      <div class="comic-box" style="margin-top:14px; border-left: 5px solid var(--accent-teal);">
        <div class="comic-kicker" style="color:var(--accent-teal)">THE SOLUTION</div>
        <p style="font-size:15px; color:var(--ink);">${project.solution}</p>
      </div>

      <div style="margin-top:16px;">
        <h4 style="font-family:var(--font-display); font-size:16px; font-weight:700; margin-bottom:8px;">Key Engineering Highlights</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">
          ${project.highlights.map(h => `
            <li style="display:flex; align-items:flex-start; gap:8px; font-size:14.5px;">
              <span style="color:var(--accent-terracotta); font-weight:900;">✦</span>
              <span>${h}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div style="margin-top:22px; padding-top:16px; border-top:2px dashed rgba(24,23,28,0.2); display:flex; flex-wrap:wrap; gap:12px;">
        ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-comic solid">🚀 Launch Live App ↗</a>` : ''}
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-comic">📂 View Repository ↗</a>` : ''}
      </div>
    `;

    // 1. Pause Lenis smooth scroll so background does not scrub
    if (lenis && typeof lenis.stop === "function") {
      lenis.stop();
    } else if (window.__lenis && typeof window.__lenis.stop === "function") {
      window.__lenis.stop();
    }

    // 2. Set overflow-y: auto on drawer inner content container
    drawerContent.style.overflowY = "auto";
    if (drawerPanel) drawerPanel.style.overflowY = "auto";

    // 3. Stop wheel / touch scroll events from bubbling up to Lenis
    caseDrawer.addEventListener("wheel", onDrawerWheel, { passive: false });
    caseDrawer.addEventListener("touchmove", onDrawerWheel, { passive: false });

    caseDrawer.classList.add("open");
    caseDrawer.setAttribute("aria-hidden", "false");
    drawerContent.scrollTop = 0;
    if (drawerPanel) drawerPanel.scrollTop = 0;
  }

  // 4b. Technical Dossier (Skills, Education, Certifications)
  function openDossierModal() {
    const skills = DATA.skills || {};
    const edu = DATA.education || [];
    const certs = DATA.certifications || [];

    drawerContent.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-top:10px;">
        <span class="project-tag" style="background:#0A6FC2; font-size:12px; padding:3px 10px;">ENGINEER DOSSIER</span>
        <span style="font-family:var(--font-mono); font-size:12px; font-weight:700;">Parth Saxena · AI/ML Systems</span>
      </div>
      <h2 style="font-family:var(--font-display); font-size: clamp(28px, 3.5vw, 40px); font-weight:900; line-height:1.1; margin-top:8px;">
        Technical Specs & Credentials
      </h2>
      <p style="font-size:15px; font-weight:600; color:var(--ink-soft);">
        Deep-dive capabilities, academic trajectory, and certified skill proficiencies.
      </p>

      <!-- Technical Skills Grid -->
      <div style="margin-top:16px;">
        <div class="comic-kicker" style="color:var(--accent-terracotta);">✦ TECHNICAL ARSENAL</div>
        <div class="dossier-grid">
          ${Object.entries(skills).map(([category, items]) => `
            <div class="dossier-card">
              <h4>${category}</h4>
              <div class="dossier-tags">
                ${items.map(skill => `<span class="dossier-pill">${skill}</span>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Education Timeline -->
      <div class="comic-box" style="margin-top:20px; border-left: 5px solid var(--accent-gold);">
        <div class="comic-kicker">🎓 ACADEMIC BACKGROUND</div>
        <div>
          ${edu.map(e => `
            <div class="edu-item">
              <div>
                <strong style="font-family:var(--font-display); font-size:14.5px; color:var(--ink);">${e.degree}</strong>
                <p style="font-size:13px; color:var(--ink-soft);">${e.institution}</p>
              </div>
              <div style="text-align:right;">
                <span style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:var(--accent-terracotta);">${e.period}</span>
                <p style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:var(--accent-teal);">${e.score}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Certifications -->
      <div class="comic-box" style="margin-top:16px; border-left: 5px solid var(--accent-teal);">
        <div class="comic-kicker" style="color:var(--accent-teal);">🏆 VERIFIED CERTIFICATIONS</div>
        <div>
          ${certs.map(c => `
            <div class="cert-item">
              <div>
                <strong style="font-size:14px; color:var(--ink);">${c.title}</strong>
                <p style="font-size:12.5px; color:var(--ink-soft);">→ ${c.issuer}</p>
              </div>
              <span class="project-tag" style="background:var(--ink); font-size:10px;">${c.badge}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div style="margin-top:22px; padding-top:16px; border-top:2px dashed rgba(24,23,28,0.2); display:flex; flex-wrap:wrap; gap:12px;">
        <a href="mailto:${DATA.personal.email}" class="btn-comic solid">✉️ Get in Touch (Email)</a>
        <a href="${(DATA.personal.socials && DATA.personal.socials[0]) ? DATA.personal.socials[0].url : 'https://github.com/Kris-Zar'}" target="_blank" rel="noopener noreferrer" class="btn-comic">📂 GitHub Profile ↗</a>
      </div>
    `;

    // 1. Pause Lenis smooth scroll so background does not scrub
    if (lenis && typeof lenis.stop === "function") {
      lenis.stop();
    } else if (window.__lenis && typeof window.__lenis.stop === "function") {
      window.__lenis.stop();
    }

    drawerContent.style.overflowY = "auto";
    if (drawerPanel) drawerPanel.style.overflowY = "auto";

    caseDrawer.addEventListener("wheel", onDrawerWheel, { passive: false });
    caseDrawer.addEventListener("touchmove", onDrawerWheel, { passive: false });

    caseDrawer.classList.add("open");
    caseDrawer.setAttribute("aria-hidden", "false");
    drawerContent.scrollTop = 0;
    if (drawerPanel) drawerPanel.scrollTop = 0;
  }

  function closeCaseStudy() {
    caseDrawer.classList.remove("open");
    caseDrawer.setAttribute("aria-hidden", "true");

    // Remove wheel event listener from the drawer
    caseDrawer.removeEventListener("wheel", onDrawerWheel);
    caseDrawer.removeEventListener("touchmove", onDrawerWheel);

    // Resume Lenis smooth scroll
    if (lenis && typeof lenis.start === "function") {
      lenis.start();
    } else if (window.__lenis && typeof window.__lenis.start === "function") {
      window.__lenis.start();
    }
  }

  drawerCloseBtn.addEventListener("click", closeCaseStudy);

  caseDrawer.addEventListener("click", (e) => {
    if (e.target === caseDrawer) {
      closeCaseStudy();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && caseDrawer.classList.contains("open")) {
      closeCaseStudy();
    }
  });

  // 5. Canvas Floating Comic Dust Specks
  let dctx = dustCanvas.getContext("2d");
  let dw = 0, dh = 0;
  let particles = [];

  function resizeDust() {
    dw = stage.clientWidth;
    dh = stage.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dustCanvas.width = dw * dpr;
    dustCanvas.height = dh * dpr;
    dctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(65, Math.floor((dw * dh) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * dw,
      y: Math.random() * dh,
      r: 0.8 + Math.random() * 1.8,
      vy: 0.15 + Math.random() * 0.35,
      sway: Math.random() * Math.PI * 2,
      opacity: 0.2 + Math.random() * 0.5
    }));
  }

  // 6. Character Interactive Pupil Tracking
  const pupilL = document.getElementById("pupil-l");
  const pupilR = document.getElementById("pupil-r");
  let eyeMoveL = null, eyeMoveR = null;

  if (window.gsap && pupilL && pupilR) {
    eyeMoveL = {
      x: gsap.quickTo(pupilL, "x", { duration: 0.35, ease: "power2.out" }),
      y: gsap.quickTo(pupilL, "y", { duration: 0.35, ease: "power2.out" })
    };
    eyeMoveR = {
      x: gsap.quickTo(pupilR, "x", { duration: 0.35, ease: "power2.out" }),
      y: gsap.quickTo(pupilR, "y", { duration: 0.35, ease: "power2.out" })
    };

    window.addEventListener("pointermove", (e) => {
      const rectL = pupilL.getBoundingClientRect();
      const rectR = pupilR.getBoundingClientRect();

      const dxL = e.clientX - (rectL.left + rectL.width / 2);
      const dyL = e.clientY - (rectL.top + rectL.height / 2);
      const distL = Math.hypot(dxL, dyL) || 1;
      const moveLimit = 4.5;
      const kL = Math.min(1, distL / 260);

      eyeMoveL.x((dxL / distL) * moveLimit * kL);
      eyeMoveL.y((dyL / distL) * (moveLimit * 0.6) * kL);

      const dxR = e.clientX - (rectR.left + rectR.width / 2);
      const dyR = e.clientY - (rectR.top + rectR.height / 2);
      const distR = Math.hypot(dxR, dyR) || 1;
      const kR = Math.min(1, distR / 260);

      eyeMoveR.x((dxR / distR) * moveLimit * kR);
      eyeMoveR.y((dyR / distR) * (moveLimit * 0.6) * kR);
    });

    document.documentElement.addEventListener("pointerleave", () => {
      eyeMoveL.x(0);
      eyeMoveL.y(0);
      eyeMoveR.x(0);
      eyeMoveR.y(0);
    });
  }

  // 7. Initialize Lenis Smooth Scroll
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.95,
      smoothTouch: false
    });
    window.__lenis = lenis;

    if (window.ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 8. Master GSAP Scrubbed Timeline
  function initMasterTimeline() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const masterTL = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "#scrollSpace",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          // Update Bottom Ruler Progress Indicator
          if (rulerHead) {
            rulerHead.style.left = (self.progress * 100) + "%";
          }

          // Dynamically toggle active chapter button on ruler
          const p = self.progress;
          const activeId = 
            p < 0.062 ? "hero" :
            p < 0.150 ? "belief" :
            p < 0.242 ? "craft" :
            p < 0.333 ? "origin" :
            p < 0.729 ? "works" :
            p < 0.821 ? "philosophy" :
            p < 0.917 ? "kanpur" : "contact";

          document.querySelectorAll(".ruler-marker-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.jump === activeId);
          });
        }
      }
    });

    const S = masterTL;

    // SCENE 0 -> SCENE 1: Dive through laptop terminal screen into the belief (0.0s to 1.5s)
    S.addLabel("hero", 0)
     .to("#scrollHint", { autoAlpha: 0, duration: 0.2 }, 0)
     .to("#heroTextWrap", { y: -50, autoAlpha: 0, duration: 0.4 }, 0)
     // Zoom desk SVG 24x specifically into the laptop screen center (x=550, y=182)
     .to("#deskContainer", { scale: 24, transformOrigin: "78.6% 43.3%", duration: 1.1, ease: "power2.in" }, 0)
     .to("#deskContainer", { autoAlpha: 0, duration: 0.2 }, 0.9)
     // Concentric tunnel ring expansion originating from laptop screen
     .fromTo("#tunnelStage", 
       { autoAlpha: 0, scale: 0.4, transformOrigin: "78.6% 43.3%" }, 
       { autoAlpha: 1, scale: 2.5, transformOrigin: "78.6% 43.3%", duration: 0.7 }, 0.4)
     .to("#tunnelStage", { autoAlpha: 0, scale: 8, duration: 0.4 }, 1.0)
     .to(stage, { "--stage-bg": "#1A2634", duration: 0.7 }, 0.5);

    // SCENE 2: The Stance (1.5s to 3.6s) - Active center: ~2.5s (10.4%)
    S.addLabel("belief", 1.5)
     .set("#scene-hero", { autoAlpha: 0 }, 1.45)
     .set("#scene-belief", { autoAlpha: 1, pointerEvents: "auto" }, 1.5)
     .fromTo("#scene-belief .comic-box", 
       { y: 40, scale: 0.94, autoAlpha: 0 }, 
       { y: 0, scale: 1, autoAlpha: 1, duration: 0.5, ease: "power2.out" }, 1.55)
     .fromTo("#chiselStrike", { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: "power3.inOut" }, 1.85)
     .to("#scene-belief .comic-box", { y: -30, autoAlpha: 0, duration: 0.4 }, 3.2)
     .to(stage, { "--stage-bg": "#2E4057", duration: 0.5 }, 3.1)
     .set("#scene-belief", { autoAlpha: 0, pointerEvents: "none" }, 3.6);

    // SCENE 3: What I Actually Do / The Craft (3.6s to 5.8s) - Active center: ~4.7s (19.6%)
    S.addLabel("craft", 3.6)
     .set("#scene-craft", { autoAlpha: 1, pointerEvents: "auto" }, 3.55)
     .fromTo("#scene-craft .craft-left", { x: -45, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 3.65)
     .fromTo("#scene-craft .pipeline-node", 
       { x: 35, autoAlpha: 0 }, 
       { x: 0, autoAlpha: 1, stagger: 0.14, duration: 0.45, ease: "back.out(1.4)" }, 3.8)
     .to("#scene-craft", { y: -25, autoAlpha: 0, duration: 0.4 }, 5.4)
     .to(stage, { "--stage-bg": "#3A2E39", duration: 0.5 }, 5.3)
     .set("#scene-craft", { autoAlpha: 0, pointerEvents: "none" }, 5.8);

    // SCENE 4: The Origin (5.8s to 8.0s) - Active center: ~6.9s (28.7%)
    S.addLabel("origin", 5.8)
     .set("#scene-origin", { autoAlpha: 1, pointerEvents: "auto" }, 5.75)
     .fromTo("#scene-origin .comic-box", { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, 5.85)
     .fromTo("#scene-origin .comic-panel", 
       { y: 50, rotate: i => [-2, 0, 2][i % 3], autoAlpha: 0 }, 
       { y: 0, rotate: 0, autoAlpha: 1, stagger: 0.12, duration: 0.5, ease: "power3.out" }, 6.0)
     .to("#scene-origin", { scale: 0.95, autoAlpha: 0, duration: 0.4 }, 7.6)
     .to(stage, { "--stage-bg": "#233142", duration: 0.5 }, 7.5)
     .set("#scene-origin", { autoAlpha: 0, pointerEvents: "none" }, 8.0);

    // SCENE 5: Selected Work (8.0s to 17.5s) - Active span: 33.3% to 72.9%
    S.addLabel("works", 8.0)
     .set("#track", { x: 0 }, 0)
     .set("#scene-works", { autoAlpha: 1, pointerEvents: "auto" }, 7.95)
     .fromTo("#scene-works .work-head", 
       { y: 35, autoAlpha: 0 }, 
       { y: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" }, 8.05)
     .fromTo("#projectsGrid .project-card", 
       { y: 45, autoAlpha: 0 }, 
       { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }, 8.15)
     // Horizontal film strip track scrub: smooth scroll across all 6 cards
     .fromTo("#track", { x: 0 }, {
       x: () => {
         const track = document.getElementById("track");
         const stageEl = document.getElementById("stage");
         if (!track || !stageEl) return 0;
         const totalScroll = track.scrollWidth - stageEl.clientWidth + 80;
         return -Math.max(0, totalScroll);
       },
       duration: 8.5,
       ease: "none",
       immediateRender: false
     }, 8.5)
     // Graceful exit after full track has finished scrubbing
     .to("#scene-works", { yPercent: -10, autoAlpha: 0, duration: 0.5, ease: "power2.in" }, 17.0)
     .to(stage, { "--stage-bg": "#263859", duration: 0.5 }, 16.9)
     .set("#scene-works", { autoAlpha: 0, pointerEvents: "none" }, 17.5);

    // SCENE 6: The Philosophy (17.5s to 19.7s) - Active center: ~18.6s (77.5%)
    S.addLabel("philosophy", 17.5)
     .set("#scene-philosophy", { autoAlpha: 1, pointerEvents: "auto" }, 17.45)
     .fromTo("#scene-philosophy .comic-box", { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, 17.55)
     .fromTo(".balance-scale-svg", { scale: 0.85, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(1.5)" }, 17.7)
     .to("#scene-philosophy", { y: -25, autoAlpha: 0, duration: 0.4 }, 19.3)
     .to(stage, { "--stage-bg": "#FAF7F0", duration: 0.5 }, 19.2)
     .set("#scene-philosophy", { autoAlpha: 0, pointerEvents: "none" }, 19.7);

    // SCENE 7: Based in Kanpur (19.7s to 22.0s) - Active center: ~20.8s (86.7%)
    S.addLabel("kanpur", 19.7)
     .set("#scene-kanpur", { autoAlpha: 1, pointerEvents: "auto" }, 19.65)
     .fromTo("#scene-kanpur .kanpur-header", { x: -30, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.45 }, 19.75)
     // Drive the Kanpur Vikram auto across the road
     .fromTo("#kanpurAuto", { left: "-220px" }, { left: "115%", duration: 1.8, ease: "power1.inOut" }, 19.95)
     // Wheel rotations with precise SVG axle origins
     .fromTo("#autoWheelFront", { rotation: 0, svgOrigin: "180 120" }, { rotation: 1440, svgOrigin: "180 120", duration: 1.8 }, 19.95)
     .fromTo("#autoWheelRear", { rotation: 0, svgOrigin: "65 120" }, { rotation: 1440, svgOrigin: "65 120", duration: 1.8 }, 19.95)
     .to("#scene-kanpur", { autoAlpha: 0, duration: 0.35 }, 21.75)
     .to(stage, { "--stage-bg": "#1E293B", duration: 0.5 }, 21.65)
     .set("#scene-kanpur", { autoAlpha: 0, pointerEvents: "none" }, 22.0);

    // SCENE 8: The Signal / Handover & Contact (22.0s to 24.0s) - Active center: ~23.0s (95.8%)
    S.addLabel("contact", 22.0)
     .set("#scene-contact", { autoAlpha: 1, pointerEvents: "auto" }, 21.95)
     .fromTo("#scene-contact .comic-box", 
       { scale: 0.9, autoAlpha: 0 }, 
       { scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(1.5)" }, 22.05)
     // Reverse zoom cursor handover animation
     .to(comicCursor, {
       opacity: 1,
       x: () => {
         const btn = copyMailBtn.getBoundingClientRect();
         const st = stage.getBoundingClientRect();
         return (btn.left - st.left + btn.width * 0.85);
       },
       y: () => {
         const btn = copyMailBtn.getBoundingClientRect();
         const st = stage.getBoundingClientRect();
         return (btn.top - st.top + btn.height * 0.5);
       },
       duration: 0.7,
       ease: "power3.inOut"
     }, 22.25)
     .add(() => {
       cursorPill.textContent = "Your turn";
       cursorPill.style.background = "#D95338";
     }, 22.7);

    // Expose masterTL for card jumping
    window.masterTL = masterTL;

    // Ruler marker button jumps
    document.querySelectorAll("[data-jump]").forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.jump;
        jumpToScene(key);
      });
    });
  }

  // 9. Startup Selection Box Animation on Hero Title
  function initHeroMarquee() {
    if (!window.gsap) return;
    const heroTitleBox = document.getElementById("heroTitleBox");
    const nameEl = document.getElementById("heroName");
    if (!heroTitleBox || !nameEl) return;

    gsap.set(comicCursor, {
      x: () => heroTitleBox.offsetLeft + heroTitleBox.offsetWidth + 80,
      y: () => heroTitleBox.offsetTop + heroTitleBox.offsetHeight + 100,
      opacity: 0
    });

    const introTL = gsap.timeline({ delay: 0.4 });
    introTL
      .fromTo(nameEl, { letterSpacing: "0.2em", opacity: 0 }, { letterSpacing: "-0.03em", opacity: 1, duration: 1.2, ease: "expo.out" })
      .to(comicCursor, { opacity: 1, x: () => heroTitleBox.offsetLeft - 12, y: () => heroTitleBox.offsetTop - 6, duration: 0.8, ease: "power2.inOut" }, 0.6)
      .to(selBox, { opacity: 1, duration: 0.1 }, 1.4)
      .to(comicCursor, { x: () => heroTitleBox.offsetLeft + heroTitleBox.offsetWidth + 12, y: () => heroTitleBox.offsetTop + heroTitleBox.offsetHeight + 6, duration: 0.7, ease: "power2.inOut" }, 1.4)
      .to(dimTag, { opacity: 1, duration: 0.3 }, 2.0)
      .to(comicCursor, { opacity: 0, duration: 0.5 }, 2.5);
  }

  // 10. Web Audio API Synth Honk for Kanpur Rickshaw
  function setupHonk() {
    if (!honkBtn) return;
    honkBtn.addEventListener("click", () => {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(420, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.18);

        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);

        // Visual bounce on button
        gsap.fromTo(honkBtn, { scale: 1.4 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
      } catch (err) {
        console.log("Audio not allowed yet", err);
      }
    });
  }

  // 11. Copy Email Interaction
  copyMailBtn.addEventListener("click", () => {
    const email = DATA.personal.email || "parth_saxena44@yahoo.com";
    navigator.clipboard.writeText(email).then(() => {
      const orig = copyMailBtn.innerHTML;
      copyMailBtn.innerHTML = `<span>${email}</span> <span style="color:var(--accent-teal);">✓ Copied!</span>`;
      setTimeout(() => { copyMailBtn.innerHTML = orig; }, 2200);
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  });

  // 11b. Technical Dossier Modal Triggers
  const dossierBtn = document.getElementById("dossierBtn");
  const navDossierBtn = document.getElementById("navDossierBtn");
  if (dossierBtn) dossierBtn.addEventListener("click", openDossierModal);
  if (navDossierBtn) navDossierBtn.addEventListener("click", openDossierModal);

  // 12. Animation Loop (Dust specks + Velocity tilt)
  function renderLoop() {
    dctx.clearRect(0, 0, dw, dh);
    const scrollVel = lenis ? (lenis.velocity || 0) * 0.08 : 0;

    for (let p of particles) {
      p.sway += 0.015;
      p.y -= (p.vy + scrollVel);
      p.x += Math.sin(p.sway) * 0.25;

      if (p.y < -5) { p.y = dh + 5; p.x = Math.random() * dw; }
      if (p.y > dh + 5) { p.y = -5; p.x = Math.random() * dw; }

      dctx.fillStyle = `rgba(24, 23, 28, ${p.opacity.toFixed(2)})`;
      dctx.beginPath();
      dctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      dctx.fill();
    }

    requestAnimationFrame(renderLoop);
  }

  // 13. Sound Ambience Toggle
  let audioPlaying = false;
  soundBtn.addEventListener("click", () => {
    audioPlaying = !audioPlaying;
    soundBtn.classList.toggle("playing", audioPlaying);
    soundLabel.textContent = audioPlaying ? "Sound On" : "Sound Off";
    
    // Play subtle synthetic white noise or lo-fi filter if audio element is silent
    const audioEl = document.getElementById("ambientAudio");
    if (audioPlaying) {
      audioEl.play().catch(() => {});
    } else {
      audioEl.pause();
    }
  });

  // 14. Initialize Everything on DOM Load
  window.addEventListener("DOMContentLoaded", () => {
    populateData();
    resizeDust();
    initHeroMarquee();
    initMasterTimeline();
    setupHonk();
    renderLoop();
  });

  window.addEventListener("resize", () => {
    resizeDust();
  });

})();
