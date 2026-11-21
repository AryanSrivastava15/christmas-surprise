/**
 * ===================================================================
 * A Little Christmas Surprise 🎄✨ - Main Script
 * ===================================================================
 */

(function () {
  'use strict';

  // State Management
  let currentScreen = 1;
  const totalScreens = 6;
  let isTransitioning = false;
  let touchStartX = 0;
  let touchStartY = 0;

  // DOM Elements
  const screens = document.querySelectorAll('.screen-card');
  const progressDots = document.querySelectorAll('.progress-dot');
  const navPrev = document.getElementById('nav-prev');
  const navNext = document.getElementById('nav-next');
  const swipeHint = document.getElementById('swipe-hint');
  const musicToggle = document.getElementById('music-toggle');
  const snowCanvas = document.getElementById('snow-canvas');
  const sparklesContainer = document.getElementById('sparkles-container');

  // Reply Form Elements
  const responseForm = document.getElementById('response-form');
  const replyMessage = document.getElementById('reply-message');
  const replyFormContainer = document.getElementById('reply-form-container');
  const replySuccessContainer = document.getElementById('reply-success-container');
  const btnSubmitReply = document.getElementById('btn-submit-reply');
  const formError = document.getElementById('form-error');
  const quickChipsContainer = document.getElementById('quick-chips');
  const btnReplayStory = document.getElementById('btn-replay-story');

  /* ===================================================================
     1. POPULATE DYNAMIC CONFIGURATION
     =================================================================== */
  function applyConfig() {
    if (typeof CONFIG === 'undefined') return;

    // Screen 1
    const s1Tagline = document.getElementById('s1-tagline');
    const s1Heading = document.getElementById('s1-heading');
    const s1Message = document.getElementById('s1-message');
    const s1Button = document.getElementById('s1-button');
    if (s1Tagline && CONFIG.screen1?.tagline) s1Tagline.textContent = CONFIG.screen1.tagline;
    if (s1Heading && CONFIG.screen1?.heading) s1Heading.innerHTML = `${CONFIG.screen1.heading} <span class="sparkle-gold">✨</span>`;
    if (s1Message && CONFIG.screen1?.message) s1Message.textContent = CONFIG.screen1.message;
    if (s1Button && CONFIG.screen1?.buttonText) s1Button.textContent = CONFIG.screen1.buttonText;

    // Screen 2
    const s2Title = document.getElementById('s2-title');
    const s2List = document.getElementById('s2-list');
    if (s2Title && CONFIG.screen2?.title) s2Title.textContent = CONFIG.screen2.title;
    if (s2List && Array.isArray(CONFIG.screen2?.items)) {
      s2List.innerHTML = '';
      const iconMap = {
        book: '📖',
        music: '🎵',
        chat: '💬',
        star: '⭐'
      };
      CONFIG.screen2.items.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'noticed-item';
        
        const iconSpan = document.createElement('span');
        iconSpan.className = 'noticed-icon';
        iconSpan.textContent = iconMap[item.icon] || '✨';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'noticed-content';

        if (item.highlight && item.text.includes(item.highlight)) {
          const parts = item.text.split(item.highlight);
          contentDiv.innerHTML = `<span>${parts[0]}<strong>${item.highlight}</strong>${parts[1]}</span>`;
        } else {
          contentDiv.textContent = item.text;
        }

        li.appendChild(iconSpan);
        li.appendChild(contentDiv);
        s2List.appendChild(li);
      });
    }

    // Screen 3
    const s3Intro = document.getElementById('s3-intro');
    const s3Badge = document.getElementById('s3-badge');
    const s3Body = document.getElementById('s3-body');
    if (s3Intro && CONFIG.screen3?.intro) s3Intro.textContent = CONFIG.screen3.intro;
    if (s3Badge && CONFIG.screen3?.confessionBadge) {
      s3Badge.querySelector('.confession-text').textContent = CONFIG.screen3.confessionBadge;
    }
    if (s3Body && CONFIG.screen3?.body) s3Body.textContent = CONFIG.screen3.body;

    // Screen 4
    const s4Title = document.getElementById('s4-title');
    const s4Subtitle = document.getElementById('s4-subtitle');
    const s4Desc = document.getElementById('s4-description');
    if (s4Title && CONFIG.screen4?.title) s4Title.textContent = CONFIG.screen4.title;
    if (s4Subtitle && CONFIG.screen4?.subtitle) s4Subtitle.innerHTML = `I'd really like to <strong>know you better</strong> —`;
    if (s4Desc && CONFIG.screen4?.description) s4Desc.textContent = CONFIG.screen4.description;

    // Screen 5
    const s5Title = document.getElementById('s5-title');
    const s5Question = document.getElementById('s5-question');
    const s5Details = document.getElementById('s5-details');
    const s5NoPressure = document.getElementById('s5-nopressure');
    const s5DateText = document.getElementById('s5-date-text');
    if (s5Question && CONFIG.screen5?.question) s5Question.textContent = CONFIG.screen5.question;
    if (s5Details && CONFIG.screen5?.details) s5Details.textContent = CONFIG.screen5.details;
    if (s5NoPressure && CONFIG.screen5?.noPressureText) s5NoPressure.textContent = CONFIG.screen5.noPressureText;
    if (s5DateText && CONFIG.proposedDate) s5DateText.textContent = `Proposed: ${CONFIG.proposedDate}`;

    // Screen 6
    const s6Title = document.getElementById('s6-title');
    const s6Subtitle = document.getElementById('s6-subtitle');
    const s6Expl = document.getElementById('s6-explanation');
    const s6SendBtn = document.getElementById('s6-send-btn');
    const successTitle = document.getElementById('success-title');
    const successText = document.getElementById('success-text');

    if (s6Title && CONFIG.screen6?.title) s6Title.textContent = CONFIG.screen6.title;
    if (s6Subtitle && CONFIG.screen6?.subtitle) s6Subtitle.textContent = CONFIG.screen6.subtitle;
    if (s6Expl && CONFIG.screen6?.explanation) s6Expl.textContent = CONFIG.screen6.explanation;
    if (s6SendBtn && CONFIG.screen6?.sendButtonText) s6SendBtn.textContent = CONFIG.screen6.sendButtonText;
    if (replyMessage && CONFIG.screen6?.placeholder) replyMessage.placeholder = CONFIG.screen6.placeholder;
    if (successTitle && CONFIG.screen6?.successMessage?.title) successTitle.textContent = CONFIG.screen6.successMessage.title;
    if (successText && CONFIG.screen6?.successMessage?.text) successText.textContent = CONFIG.screen6.successMessage.text;

    // Quick Chips
    if (quickChipsContainer && Array.isArray(CONFIG.screen6?.quickChips)) {
      quickChipsContainer.innerHTML = '';
      CONFIG.screen6.quickChips.forEach((chipText) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chip-btn';
        btn.dataset.message = chipText;
        btn.textContent = chipText;
        btn.addEventListener('click', () => {
          document.querySelectorAll('.chip-btn').forEach(c => c.classList.remove('selected'));
          btn.classList.add('selected');
          replyMessage.value = chipText;
          replyMessage.focus();
        });
        quickChipsContainer.appendChild(btn);
      });
    }
  }

  /* ===================================================================
     2. NAVIGATION & SCREEN TRANSITIONS
     =================================================================== */
  function goToScreen(targetIndex, direction = 'next') {
    if (isTransitioning || targetIndex === currentScreen) return;
    if (targetIndex < 1 || targetIndex > totalScreens) return;

    isTransitioning = true;
    const oldScreenEl = document.querySelector(`.screen-card[data-index="${currentScreen}"]`);
    const newScreenEl = document.querySelector(`.screen-card[data-index="${targetIndex}"]`);

    if (!newScreenEl) {
      isTransitioning = false;
      return;
    }

    // Set transition exit classes
    if (oldScreenEl) {
      oldScreenEl.classList.remove('active');
      oldScreenEl.classList.add(direction === 'next' ? 'exit-next' : 'exit-prev');
    }

    newScreenEl.classList.remove('exit-next', 'exit-prev');
    newScreenEl.classList.add('active');

    // Update progress bar
    progressDots.forEach((dot) => {
      const step = parseInt(dot.dataset.step, 10);
      dot.classList.remove('active', 'passed');
      if (step === targetIndex) {
        dot.classList.add('active');
      } else if (step < targetIndex) {
        dot.classList.add('passed');
      }
    });

    const progressContainer = document.getElementById('story-progress');
    if (progressContainer) {
      progressContainer.setAttribute('aria-valuenow', targetIndex);
    }

    currentScreen = targetIndex;

    // Update arrow visibility
    if (navPrev) {
      navPrev.style.display = currentScreen > 1 ? 'flex' : 'none';
    }
    if (navNext) {
      navNext.style.display = currentScreen < totalScreens ? 'flex' : 'none';
    }

    // Hide swipe hint once user moves past Screen 1
    if (swipeHint && currentScreen > 1) {
      swipeHint.style.opacity = '0';
    }

    setTimeout(() => {
      if (oldScreenEl) {
        oldScreenEl.classList.remove('exit-next', 'exit-prev');
      }
      isTransitioning = false;
    }, 650);
  }

  // Step Buttons (buttons within cards)
  document.querySelectorAll('.next-step-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = parseInt(btn.dataset.target, 10) || (currentScreen + 1);
      goToScreen(target, 'next');
    });
  });

  const btnStart = document.getElementById('btn-start');
  if (btnStart) {
    btnStart.addEventListener('click', () => {
      goToScreen(2, 'next');
      // If music wasn't started yet and music box is enabled, start it softly on first interaction!
      if (CONFIG.enableMusicBox && !musicBox.isPlaying) {
        musicBox.start();
      }
    });
  }

  // Global Arrows
  if (navPrev) {
    navPrev.addEventListener('click', () => goToScreen(currentScreen - 1, 'prev'));
  }
  if (navNext) {
    navNext.addEventListener('click', () => goToScreen(currentScreen + 1, 'next'));
  }

  // Progress Dot Clicks
  progressDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const step = parseInt(dot.dataset.step, 10);
      if (step !== currentScreen) {
        goToScreen(step, step > currentScreen ? 'next' : 'prev');
      }
    });
  });

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    // Avoid hijacking when typing inside textarea
    if (e.target && e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      goToScreen(currentScreen + 1, 'next');
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      goToScreen(currentScreen - 1, 'prev');
    }
  });

  // Touch Swipe Gestures
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

    // Check if horizontal swipe is dominant and exceeds threshold
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        goToScreen(currentScreen + 1, 'next');
      } else {
        goToScreen(currentScreen - 1, 'prev');
      }
    }

    touchStartX = 0;
    touchStartY = 0;
  }, { passive: true });

  /* ===================================================================
     3. 60FPS SNOWFALL CANVAS SIMULATION
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

    const flakeCount = Math.min(Math.floor(width / 16), 55);
    const flakes = [];

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01
      });
    }

    let animationFrameId;
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

        // Wrap around
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

      animationFrameId = requestAnimationFrame(render);
    }

    render();
  }

  /* ===================================================================
     4. FLOATING MAGIC SPARKLES
     =================================================================== */
  function initSparkles() {
    if (!sparklesContainer) return;
    const count = 18;
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
     5. PROCEDURAL ENCHANTED MUSIC BOX (Web Audio API)
     Plays a serene, crystalline celesta / music box melody
     Zero external files or network requests needed!
     =================================================================== */
  const musicBox = {
    audioCtx: null,
    isPlaying: false,
    intervalId: null,

    // Gentle arpeggio notes in frequency (Hz) - Harry Potter / Winter motif
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

      // Primary tone
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      // Shimmer harmonic overtone (gives music-box crystal bell character)
      const osc2 = this.audioCtx.createOscillator();
      const gain2 = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2.004, now); // slight detune sparkle

      // Subtle lowpass filter for warmth
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2800, now);

      // Envelopes
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.015);
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
     6. FORM SUBMISSION & HER RESPONSE
     =================================================================== */
  if (responseForm) {
    responseForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const messageText = replyMessage ? replyMessage.value.trim() : '';

      if (formError) formError.style.display = 'none';
      if (btnSubmitReply) {
        btnSubmitReply.disabled = true;
        btnSubmitReply.querySelector('.btn-text').textContent = 'Sending ✨...';
      }

      const payload = {
        recipient: CONFIG.recipientName || 'Mehak',
        message: messageText || '(Sent an empty response with love)',
        timestamp: new Date().toISOString()
      };

      // Always save a local copy so no message is ever lost
      try {
        const stored = JSON.parse(localStorage.getItem('christmas_surprises') || '[]');
        stored.push(payload);
        localStorage.setItem('christmas_surprises', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage unavailable:', err);
      }

      // Check if real endpoint is provided
      if (CONFIG.formEndpoint && CONFIG.formEndpoint.trim() !== '') {
        try {
          const response = await fetch(CONFIG.formEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            console.warn('Form service responded with status', response.status);
          }
        } catch (fetchErr) {
          console.warn('Network issue delivering to endpoint:', fetchErr);
        }
      }

      // Display graceful warm confirmation
      setTimeout(() => {
        if (replyFormContainer) replyFormContainer.style.display = 'none';
        if (replySuccessContainer) replySuccessContainer.style.display = 'block';

        // Play gentle celebratory chime
        if (musicBox.audioCtx) {
          musicBox.playChime(783.99, 1.2); // G5
          setTimeout(() => musicBox.playChime(1174.66, 2.0), 200); // D6
        }
      }, 500);
    });
  }

  // Replay Story
  if (btnReplayStory) {
    btnReplayStory.addEventListener('click', () => {
      if (replySuccessContainer) replySuccessContainer.style.display = 'none';
      if (replyFormContainer) replyFormContainer.style.display = 'block';
      if (btnSubmitReply) {
        btnSubmitReply.disabled = false;
        btnSubmitReply.querySelector('.btn-text').textContent = CONFIG.screen6?.sendButtonText || 'Send Note 🕊️';
      }
      if (replyMessage) replyMessage.value = '';
      document.querySelectorAll('.chip-btn').forEach(c => c.classList.remove('selected'));
      goToScreen(1, 'prev');
    });
  }

  /* ===================================================================
     7. INITIALIZATION
     =================================================================== */
  function init() {
    applyConfig();
    initSnowfall();
    initSparkles();

    // Set initial nav arrow states
    if (navPrev) navPrev.style.display = 'none';
    if (navNext) navNext.style.display = 'flex';
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
