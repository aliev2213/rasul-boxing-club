/**
 * RASUL BOXING CLUB - INTERACTIVE APPLICATION & BOOKING ENGINE
 * Dynamic Client-Side Logic, Form Validation & High-Status Confirmation System
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic dates and interactive features
  initDynamicHeader();
  initMobileDrawer();
  initSmoothScroll();
  initPillarInteractivity();
  initQualifierQuiz();
  initRingIQLab();
  initSlotPicker();
  initBookingFormValidation();
  initModalActions();
});

/* -------------------------------------------------------------------------- */
/* 1. Dynamic Banner & Date Setup                                             */
/* -------------------------------------------------------------------------- */
function initDynamicHeader() {
  const currentMonthYearEl = document.getElementById('currentMonthYear');
  if (currentMonthYearEl) {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    currentMonthYearEl.textContent = `${months[now.getMonth()]} ${now.getFullYear()}`;
  }

  // Header background shade on scroll
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8)';
    } else {
      siteHeader.style.boxShadow = 'none';
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 2. Mobile Navigation Drawer                                                */
/* -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 3. Smooth Scrolling & Active Section Tracking                             */
/* -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 4. Pillar Interactive Micro-Widgets                                       */
/* -------------------------------------------------------------------------- */
function initPillarInteractivity() {
  // Punch Selector Data
  const punchData = {
    jab: {
      title: "Jab Mechanics:",
      desc: "Lead foot torque, shoulder snap, 100% reach extension without over-committing off-balance."
    },
    cross: {
      title: "Straight Rear Cross:",
      desc: "Rear hip rotation, rear heel pivot, driving power through kinetic chain directly through target center."
    },
    hook: {
      title: "Lead Hook Leverage:",
      desc: "Lead foot pivot, 90-degree elbow lock, generating rotational force from core torque while keeping rear hand tight."
    },
    uppercut: {
      title: "Inside Uppercut Geometry:",
      desc: "Slight dip of lead knee, driving upward through legs into target solar plexus or chin with compact guard."
    }
  };

  const punchBtns = document.querySelectorAll('.punch-btn');
  const punchDisplay = document.getElementById('punchDisplay');

  punchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      punchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const punchKey = btn.dataset.punch;
      if (punchData[punchKey] && punchDisplay) {
        punchDisplay.innerHTML = `
          <span class="punch-stat-title">${punchData[punchKey].title}</span>
          <span class="punch-stat-desc">${punchData[punchKey].desc}</span>
        `;
      }
    });
  });

  // Strategy Selector Data
  const styleData = {
    counter: {
      title: "Counter-Puncher Blueprint:",
      desc: "Baiting with high guard, pull-counter timing, shoulder roll defense, punishing off-balance missed jabs."
    },
    pressure: {
      title: "Inside Presser Tactics:",
      desc: "Head movement while closing distance, smothering opponent punches, heavy body work in the pocket."
    },
    outboxer: {
      title: "Outside Master Strategy:",
      desc: "Lateral footwork, jab control, maintaining long distance, trapping aggressors as they charge in straight lines."
    }
  };

  const styleBtns = document.querySelectorAll('.style-btn');
  const styleDisplay = document.getElementById('styleDisplay');

  styleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      styleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const styleKey = btn.dataset.style;
      if (styleData[styleKey] && styleDisplay) {
        styleDisplay.innerHTML = `
          <span class="punch-stat-title">${styleData[styleKey].title}</span>
          <span class="punch-stat-desc">${styleData[styleKey].desc}</span>
        `;
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 5. Interactive Fighter Qualifier Quiz                                     */
/* -------------------------------------------------------------------------- */
let quizAnswers = {
  experience: '',
  commitment: '',
  objective: ''
};

function initQualifierQuiz() {
  const quizSteps = document.querySelectorAll('.quiz-step');
  const quizResult = document.getElementById('quizResult');
  const quizOpts = document.querySelectorAll('.quiz-opt');
  const applyQuizDataBtn = document.getElementById('applyQuizDataBtn');

  quizOpts.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const stepEl = opt.closest('.quiz-step');
      const stepNum = parseInt(stepEl.dataset.step);
      const val = opt.dataset.value;

      if (stepNum === 1) quizAnswers.experience = val;
      if (stepNum === 2) quizAnswers.commitment = val;
      if (stepNum === 3) quizAnswers.objective = val;

      // Advance step
      stepEl.classList.remove('active');
      const nextStep = document.querySelector(`.quiz-step[data-step="${stepNum + 1}"]`);

      if (nextStep) {
        nextStep.classList.add('active');
      } else {
        // Quiz complete - Show results
        if (quizResult) {
          quizResult.style.display = 'block';
          quizResult.classList.add('fadeIn');
        }
      }
    });
  });

  // When user clicks "Fast-Track Your Application", prefill booking form!
  if (applyQuizDataBtn) {
    applyQuizDataBtn.addEventListener('click', () => {
      const expSelect = document.getElementById('fightExperience');
      const objTextarea = document.getElementById('primaryObjective');

      if (expSelect && quizAnswers.experience) {
        // Find matching option
        for (let i = 0; i < expSelect.options.length; i++) {
          if (expSelect.options[i].value.includes(quizAnswers.experience.split(' ')[0])) {
            expSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (objTextarea && quizAnswers.objective) {
        objTextarea.value = `Primary Goal: ${quizAnswers.objective}. Dedicated Time: ${quizAnswers.commitment}.`;
      }
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 6. Ring IQ Lab Scenario Selector                                         */
/* -------------------------------------------------------------------------- */
function initRingIQLab() {
  const iqTabs = document.querySelectorAll('.iq-tab');
  const iqPanel = document.getElementById('iqPanel');

  const iqScenarios = {
    southpaw: {
      badge: "SCENARIO ANALYSIS: SOUTHPAW TRAP",
      title: "Lead Foot Domination & Overhand Countering",
      mistake: "Stepping inside the southpaw's lead foot, exposing your chin directly to their straight left hand while smothering your own jab.",
      solution: "Relentless outside lead-foot positioning. Establishing the outside foot angle opens the straight right hand down the pipe and sets up the lead hook around their guard.",
      stat1: "94%", label1: "Lead Foot Win Rate",
      stat2: "+3.2x", label2: "Right Hand Clean Land Rate",
      stat3: "0.18s", label3: "Counter Reaction Speed"
    },
    aggressor: {
      badge: "SCENARIO ANALYSIS: SWARMING PRESSER",
      title: "Pivot Angles & Upper Torso Smother Defense",
      mistake: "Backing up in a straight line toward the ropes while throwing single jabs that get slipped effortlessly.",
      solution: "Side-step check hooks coupled with sharp 45-degree angle pivots off the back foot, forcing the presser into empty space and off-balance positions.",
      stat1: "88%", label1: "Ring Boundary Escape Rate",
      stat2: "+4.1x", label2: "Check Hook Precision",
      stat3: "0.12s", label3: "Angle Creation Speed"
    },
    'tall-boxer': {
      badge: "SCENARIO ANALYSIS: TALL OUTSIDE JABBER",
      title: "Slip-Inside Entry & Body-Head Combination Breakdown",
      mistake: "Reaching for head strikes from outside range, taking counter right hands on entry.",
      solution: "Head movement feints while stepping past their jab extension into the liver zone, breaking down the taller fighter's gas tank in early rounds.",
      stat1: "92%", label1: "Liver Shot Entry Rate",
      stat2: "+2.8x", label2: "Stamina Depletion Impact",
      stat3: "0.22s", label3: "Inside Pocket Stay"
    }
  };

  iqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      iqTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const scenarioKey = tab.dataset.scenario;
      const data = iqScenarios[scenarioKey];

      if (data && iqPanel) {
        iqPanel.innerHTML = `
          <div class="iq-card fadeIn">
            <div class="iq-meta">
              <span class="iq-badge">${data.badge}</span>
              <span class="iq-difficulty"><i class="fa-solid fa-circle-exclamation"></i> HIGH TACTICAL PRIORITY</span>
            </div>
            
            <h3 class="iq-title">${data.title}</h3>
            
            <div class="iq-details-grid">
              <div class="iq-column">
                <h4><i class="fa-solid fa-triangle-exclamation"></i> Common Amateur Mistake:</h4>
                <p>${data.mistake}</p>
              </div>

              <div class="iq-column pro-solution">
                <h4><i class="fa-solid fa-circle-check"></i> Rasul 1-on-1 Adjustment:</h4>
                <p>${data.solution}</p>
              </div>
            </div>

            <div class="iq-metrics-row">
              <div class="metric-item">
                <span class="m-val">${data.stat1}</span>
                <span class="m-lbl">${data.label1}</span>
              </div>
              <div class="metric-item">
                <span class="m-val">${data.stat2}</span>
                <span class="m-lbl">${data.label2}</span>
              </div>
              <div class="metric-item">
                <span class="m-val">${data.stat3}</span>
                <span class="m-lbl">${data.label3}</span>
              </div>
            </div>
          </div>
        `;
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 7. Slot Time Picker                                                       */
/* -------------------------------------------------------------------------- */
function initSlotPicker() {
  const slotOptions = document.querySelectorAll('.slot-option');
  const selectedSlotInput = document.getElementById('selectedSlotInput');

  slotOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      slotOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      if (selectedSlotInput) {
        selectedSlotInput.value = opt.dataset.slot;
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 8. Booking Engine Form Validation & Submission                            */
/* -------------------------------------------------------------------------- */
let submittedBookingData = null;

function initBookingFormValidation() {
  const form = document.getElementById('assessmentForm');
  if (!form) return;

  const fullNameInput = document.getElementById('fullName');
  const contactInfoInput = document.getElementById('contactInfo');
  const experienceSelect = document.getElementById('fightExperience');
  const objectiveTextarea = document.getElementById('primaryObjective');
  const submitBtn = document.getElementById('submitFormBtn');

  // Input blur real-time validation
  fullNameInput.addEventListener('blur', () => validateInput(fullNameInput, 'fullNameError'));
  contactInfoInput.addEventListener('blur', () => validateContact(contactInfoInput, 'contactInfoError'));
  experienceSelect.addEventListener('change', () => validateSelect(experienceSelect, 'experienceError'));
  objectiveTextarea.addEventListener('blur', () => validateInput(objectiveTextarea, 'objectiveError'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateInput(fullNameInput, 'fullNameError');
    const isContactValid = validateContact(contactInfoInput, 'contactInfoError');
    const isExpValid = validateSelect(experienceSelect, 'experienceError');
    const isObjValid = validateInput(objectiveTextarea, 'objectiveError');

    if (isNameValid && isContactValid && isExpValid && isObjValid) {
      // Simulate submission loading
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Confidential Request...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span class="btn-text">Submit Session Request</span> <i class="fa-solid fa-paper-plane btn-icon"></i>`;

        // Generate Booking Confirmation Data
        const ticketCode = 'RBC-2026-' + Math.floor(1000 + Math.random() * 9000);
        const slotValue = document.getElementById('selectedSlotInput').value;

        submittedBookingData = {
          code: ticketCode,
          name: fullNameInput.value.trim(),
          contact: contactInfoInput.value.trim(),
          experience: experienceSelect.value,
          objective: objectiveTextarea.value.trim(),
          slot: slotValue
        };

        // Populate Confirmation Modal
        document.getElementById('resTicketCode').textContent = ticketCode;
        document.getElementById('resName').textContent = submittedBookingData.name;
        document.getElementById('resContact').textContent = submittedBookingData.contact;
        document.getElementById('resExp').textContent = submittedBookingData.experience;
        document.getElementById('resSlot').textContent = submittedBookingData.slot;

        // Open Confirmation Modal
        const modal = document.getElementById('confirmationModal');
        if (modal) {
          modal.classList.add('open');
          modal.setAttribute('aria-hidden', 'false');
        }

        // Reset form
        form.reset();
        document.querySelectorAll('.slot-option').forEach(o => o.classList.remove('active'));
        document.querySelector('.slot-option').classList.add('active');

      }, 1200);
    }
  });
}

function validateInput(input, errorId) {
  const errorEl = document.getElementById(errorId);
  if (!input.value.trim()) {
    input.classList.add('invalid');
    if (errorEl) errorEl.classList.add('visible');
    return false;
  } else {
    input.classList.remove('invalid');
    if (errorEl) errorEl.classList.remove('visible');
    return true;
  }
}

function validateSelect(select, errorId) {
  const errorEl = document.getElementById(errorId);
  if (!select.value) {
    select.classList.add('invalid');
    if (errorEl) errorEl.classList.add('visible');
    return false;
  } else {
    select.classList.remove('invalid');
    if (errorEl) errorEl.classList.remove('visible');
    return true;
  }
}

function validateContact(input, errorId) {
  const errorEl = document.getElementById(errorId);
  const val = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\+\-\(\)\s]{7,}$/;

  if (!val || (!emailRegex.test(val) && !phoneRegex.test(val))) {
    input.classList.add('invalid');
    if (errorEl) errorEl.classList.add('visible');
    return false;
  } else {
    input.classList.remove('invalid');
    if (errorEl) errorEl.classList.remove('visible');
    return true;
  }
}

/* -------------------------------------------------------------------------- */
/* 9. Modal Actions & Downloadable .ics Calendar File Generator               */
/* -------------------------------------------------------------------------- */
function initModalActions() {
  const modal = document.getElementById('confirmationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const downloadIcsBtn = document.getElementById('downloadIcsBtn');

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Download .ics calendar reminder generator
  if (downloadIcsBtn) {
    downloadIcsBtn.addEventListener('click', () => {
      const data = submittedBookingData || {
        name: "Fighter Candidate",
        code: "RBC-2026-9842",
        slot: "Private 1-on-1 Assessment"
      };

      const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Rasul Boxing Club//Private Assessment Invite//EN",
        "BEGIN:VEVENT",
        "SUMMARY:Rasul Boxing Club - Private 1-on-1 Fight Assessment",
        `DESCRIPTION:Private Fight Assessment session for ${data.name}. Ref Code: ${data.code}. Preferred Slot: ${data.slot}. Bring hand wraps, mouthguard, and clean boxing shoes.`,
        "LOCATION:Rasul Boxing Club Downtown Fight Lab",
        "STATUS:CONFIRMED",
        "DTSTART:20260810T120000Z",
        "DTEND:20260810T130000Z",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', `Rasul_Boxing_Assessment_${data.code}.ics`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}
