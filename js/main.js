/**
 * ===================================================================
 * A Little Christmas Story ❤️ - Main Controller
 * ===================================================================
 */

(function () {
  'use strict';

  // Navigation State
  let currentScreenId = '1';
  let isTransitioning = false;
  let touchStartX = 0;
  let touchStartY = 0;

  // DOM Elements
  const screens = document.querySelectorAll('.screen-card');
  const progressDots = document.querySelectorAll('.progress-dot');
  const btnBackHeader = document.getElementById('btn-back-header');
  const navPrev = document.getElementById('nav-prev');
  const navNext = document.getElementById('nav-next');
  const swipeHint = document.getElementById('swipe-hint');
  const musicToggle = document.getElementById('music-toggle');
  const snowCanvas = document.getElementById('snow-canvas');
  const sparklesContainer = document.getElementById('sparkles-container');

  // Outcome buttons
  const btnChoiceYes = document.getElementById('btn-choice-yes');
  const btnChoiceFriendship = document.getElementById('btn-choice-friendship');
  const btnYesCelebrate = document.getElementById('btn-yes-celebrate');
  const btnFriendshipChaos = document.getElementById('btn-friendship-chaos');

  /* ===================================================================
     1. INJECT DOODLE AVATARS
     =================================================================== */
  function injectDoodles() {
    if (typeof Doodles === 'undefined') return;

    const slot1 = document.getElementById('doodle-slot-1');
    const slot2 = document.getElementById('doodle-slot-2');
    const slot3 = document.getElementById('doodle-slot-3');
    const slot4 = document.getElementById('doodle-slot-4');
    const slot5A = document.getElementById('doodle-slot-5A');
    const slot5B = document.getElementById('doodle-slot-5B');

    if (slot1) slot1.innerHTML = Doodles.boyReadingBook();
    if (slot2) slot2.innerHTML = Doodles.boyConfession();
    if (slot3) slot3.innerHTML = Doodles.boyOverthinkingPhone();
    if (slot4) slot4.innerHTML = Doodles.boyInvitationTicket();
    if (slot5A) slot5A.innerHTML = Doodles.boyCelebratingYes();
    if (slot5B) slot5B.innerHTML = Doodles.boyPeacefulFriendship();
  }

  /* ===================================================================
     2. POPULATE DYNAMIC CONFIGURATION
     =================================================================== */
  function applyConfig() {
    if (typeof CONFIG === 'undefined') return;

    // Date in Plan Details
    const planDateText = document.getElementById('plan-date-text');
    if (planDateText && CONFIG.proposedDate) {
      planDateText.textContent = CONFIG.proposedDate;
    }
  }

  /* ===================================================================
     3. NAVIGATION CONTROLLER
     =================================================================== */
  function goToScreen(targetId, direction = 'next') {
    if (isTransitioning || targetId === currentScreenId) return;

    const oldScreenEl = document.getElementById(`screen-${currentScreenId}`);
    const newScreenEl = document.getElementById(`screen-${targetId}`);
    if (!newScreenEl) return;

    isTransitioning = true;

    // Animate old screen out
    if (oldScreenEl) {
      oldScreenEl.classList.remove('active');
      oldScreenEl.classList.add(direction === 'next' ? 'exit-next' : 'exit-prev');
    }

    // Animate new screen in
    newScreenEl.classList.remove('exit-next', 'exit-prev');
    newScreenEl.classList.add('active');

    // Update Progress Indicator
    let progressStep = 1;
    if (targetId === '1') progressStep = 1;
    else if (targetId === '2') progressStep = 2;
    else if (targetId === '3') progressStep = 3;
    else if (targetId === '4') progressStep = 4;
    else if (targetId === '5A' || targetId === '5B') progressStep = 5;

    progressDots.forEach((dot) => {
      const step = parseInt(dot.dataset.step, 10);
      dot.classList.remove('active', 'passed');
      if (step === progressStep) {
        dot.classList.add('active');
      } else if (step < progressStep) {
        dot.classList.add('passed');
      }
    });

    const progressContainer = document.getElementById('story-progress');
    if (progressContainer) {
      progressContainer.setAttribute('aria-valuenow', progressStep);
    }

    currentScreenId = targetId;

    // Update Header Back Button
    if (btnBackHeader) {
      btnBackHeader.style.display = (currentScreenId === '1') ? 'none' : 'flex';
    }

    // Update Global Floating Arrow Buttons
    if (navPrev) {
      navPrev.style.display = (currentScreenId === '1') ? 'none' : 'flex';
    }
    if (navNext) {
      // Hide on outcome screens or invitation screen
      navNext.style.display = (currentScreenId === '4' || currentScreenId === '5A' || currentScreenId === '5B') ? 'none' : 'flex';
    }

    // Hide swipe hint after first interaction
    if (swipeHint && currentScreenId !== '1') {
      swipeHint.style.opacity = '0';
    }

    // Trigger celebration effects if Yes outcome
    if (targetId === '5A') {
      createCelebrationBurst();
      if (musicBox.audioCtx) {
        musicBox.playChime(783.99, 1.2);
        setTimeout(() => musicBox.playChime(1174.66, 1.8), 220);
      }
    }

    setTimeout(() => {
      if (oldScreenEl) {
        oldScreenEl.classList.remove('exit-next', 'exit-prev');
      }
      isTransitioning = false;
    }, 600);
  }

  function getPreviousScreenId(currentId) {
    if (currentId === '2') return '1';
    if (currentId === '3') return '2';
    if (currentId === '4') return '3';
    if (currentId === '5A' || currentId === '5B') return '4';
    return '1';
  }

  function getNextScreenId(currentId) {
    if (currentId === '1') return '2';
    if (currentId === '2') return '3';
    if (currentId === '3') return '4';
    return null;
  }

  // Next-step buttons in cards
  document.querySelectorAll('.next-step-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.dataset.target;
      if (target) goToScreen(target, 'next');

      // Soft start music on first button click if enabled
      if (CONFIG.enableMusicBox && !musicBox.isPlaying) {
        musicBox.start();
      }
    });
  });

  // Header Back Button
  if (btnBackHeader) {
    btnBackHeader.addEventListener('click', () => {
      const prevId = getPreviousScreenId(currentScreenId);
      goToScreen(prevId, 'prev');
    });
  }

  // Floating Arrows
  if (navPrev) {
    navPrev.addEventListener('click', () => {
      const prevId = getPreviousScreenId(currentScreenId);
      goToScreen(prevId, 'prev');
    });
  }
  if (navNext) {
    navNext.addEventListener('click', () => {
      const nextId = getNextScreenId(currentScreenId);
      if (nextId) goToScreen(nextId, 'next');
    });
  }

  // Progress Dot Clicks
  progressDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const step = dot.dataset.step;
      if (step === '1' || step === '2' || step === '3' || step === '4') {
        goToScreen(step, parseInt(step, 10) > parseInt(currentScreenId, 10) ? 'next' : 'prev');
      }
    });
  });

  // Invitation Choice Buttons (Page 4)
  if (btnChoiceYes) {
    btnChoiceYes.addEventListener('click', () => {
      goToScreen('5A', 'next');
    });
  }

  if (btnChoiceFriendship) {
    btnChoiceFriendship.addEventListener('click', () => {
      goToScreen('5B', 'next');
    });
  }

  // Outcome Final Buttons
  if (btnYesCelebrate) {
    btnYesCelebrate.addEventListener('click', () => {
      // Re-trigger celebratory chime
      createCelebrationBurst();
      if (musicBox.audioCtx) {
        musicBox.playChime(1046.50, 1.2);
      }
    });
  }

  if (btnFriendshipChaos) {
    btnFriendshipChaos.addEventListener('click', () => {
      // Return gently to Page 1
      goToScreen('1', 'prev');
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      const next = getNextScreenId(currentScreenId);
      if (next) {
        e.preventDefault();
        goToScreen(next, 'next');
      }
    } else if (e.key === 'ArrowLeft') {
      const prev = getPreviousScreenId(currentScreenId);
      if (currentScreenId !== '1') {
        e.preventDefault();
        goToScreen(prev, 'prev');
      }
    }
  });

  // Mobile Touch Swipe Gestures
  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (touchStartX === 0 && touchStartY === 0) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        const next = getNextScreenId(currentScreenId);
        if (next) goToScreen(next, 'next');
      } else {
        const prev = getPreviousScreenId(currentScreenId);
        if (currentScreenId !== '1') goToScreen(prev, 'prev');
      }
    }

    touchStartX = 0;
    touchStartY = 0;
  }, { passive: true });

  /* ===================================================================
     4. CELEBRATION CONFETTI BURST (YES PAGE)
     =================================================================== */
  function createCelebrationBurst() {
    const screenYes = document.getElementById('screen-5A');
    if (!screenYes) return;

    for (let i = 0; i < 35; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-sparkle';
      const size = Math.random() * 8 + 4;
      const colors = ['#d4a843', '#d93848', '#ffffff', '#2d4a3e', '#ffd770'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      particle.style.left = `${Math.random() * 80 + 10}vw`;
      particle.style.top = `${Math.random() * 60 + 20}vh`;
      particle.style.animation = `sparkle-float ${Math.random() * 2 + 1.5}s ease-out forwards`;
      screenYes.appendChild(particle);

      setTimeout(() => particle.remove(), 2500);
    }
  }

  /* ===================================================================
     5. 60FPS SNOWFALL CANVAS SIMULATION
     =================================================================== */
  function initSnowfall() {
    if (!snowCanvas) return;
    const ctx = snowCanvas.getContext('2d');
    if (!ctx) return;

    let width = (snowCanvas.width = window.innerWidth);
    let height = (snowCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = snowCanvas.width = window.innerWidth;
      height = snowCanvas.height = window.innerHeight;
    });

    const flakeCount = Math.min(Math.floor(width / 18), 50);
    const flakes = [];

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.6 + 0.25,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01
      });
    }

    let isTabActive = true;
    document.addEventListener('visibilitychange', () => {
      isTabActive = !document.hidden;
      if (isTabActive) render();
    });

    function render() {
      if (!isTabActive) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.swayAngle += f.swaySpeed;
        f.y += f.speedY;
        f.x += Math.sin(f.swayAngle) * 0.4 + f.speedX;

        if (f.y > height + 5) {
          f.y = -5;
          f.x = Math.random() * width;
        }
        if (f.x > width + 5) f.x = -5;
        if (f.x < -5) f.x = width + 5;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 3;
        ctx.fill();
      }

      requestAnimationFrame(render);
    }

    render();
  }

  /* ===================================================================
     6. AMBIENT SPARKLES
     =================================================================== */
  function initSparkles() {
    if (!sparklesContainer) return;
    const count = 16;
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'floating-sparkle';
      const size = Math.random() * 4 + 2;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.top = `${Math.random() * 100}vh`;
      sparkle.style.animationDuration = `${Math.random() * 4 + 3}s`;
      sparkle.style.animationDelay = `${Math.random() * 3}s`;
      sparklesContainer.appendChild(sparkle);
    }
  }

  /* ===================================================================
     7. PROCEDURAL ENCHANTED MUSIC BOX (Web Audio API)
     Plays crystalline celesta / music box melody
     =================================================================== */
  const musicBox = {
    audioCtx: null,
    isPlaying: false,
    intervalId: null,

    notes: [
      { f: 587.33, d: 0.6 }, // D5
      { f: 783.99, d: 0.9 }, // G5
      { f: 932.33, d: 0.5 }, // Bb5
      { f: 880.00, d: 0.5 }, // A5
      { f: 783.99, d: 1.0 }, // G5
      { f: 1174.66, d: 0.6 }, // D6
      { f: 1046.50, d: 1.2 }, // C6
      { f: 880.00, d: 1.2 }, // A5
      { f: 783.99, d: 0.8 }, // G5
      { f: 932.33, d: 0.5 }, // Bb5
      { f: 880.00, d: 0.5 }, // A5
      { f: 698.46, d: 1.0 }, // F5
      { f: 830.61, d: 0.8 }, // Ab5
      { f: 587.33, d: 1.5 }  // D5
    ],

    init() {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      this.audioCtx = new AudioContextClass();
    },

    playChime(freq, duration) {
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const osc2 = this.audioCtx.createOscillator();
      const gain2 = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2.004, now);

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2800, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.07, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.03, now + 0.015);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + (duration * 0.7));

      osc.connect(gain);
      osc2.connect(gain2);
      gain.connect(filter);
      gain2.connect(filter);
      filter.connect(this.audioCtx.destination);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + duration + 0.1);
      osc2.stop(now + duration + 0.1);
    },

    start() {
      if (!this.audioCtx) this.init();
      if (!this.audioCtx) return;

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.isPlaying = true;
      if (musicToggle) {
        musicToggle.classList.add('playing');
        musicToggle.setAttribute('aria-label', 'Pause magical music box');
      }

      let step = 0;
      const playNext = () => {
        if (!this.isPlaying) return;
        const note = this.notes[step % this.notes.length];
        this.playChime(note.f, note.d * 1.5);
        step++;
        const nextDelay = (note.d * 750) + 150;
        this.intervalId = setTimeout(playNext, nextDelay);
      };

      playNext();
    },

    stop() {
      this.isPlaying = false;
      if (this.intervalId) clearTimeout(this.intervalId);
      if (musicToggle) {
        musicToggle.classList.remove('playing');
        musicToggle.setAttribute('aria-label', 'Play magical music box');
      }
    },

    toggle() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    }
  };

  if (musicToggle) {
    musicToggle.addEventListener('click', () => {
      musicBox.toggle();
    });
  }

  /* ===================================================================
     8. INITIALIZATION
     =================================================================== */
  function init() {
    injectDoodles();
    applyConfig();
    initSnowfall();
    initSparkles();

    if (btnBackHeader) btnBackHeader.style.display = 'none';
    if (navPrev) navPrev.style.display = 'none';
    if (navNext) navNext.style.display = 'flex';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
