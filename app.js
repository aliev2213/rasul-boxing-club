/**
 * RASUL BOXING CLUB - APP LOGIC
 * Russian First (RU) with instant EN toggle
 * Streamlined, quality-focused version
 */

// ─────────────────────────────────────────────────────────────────────────────
// TRANSLATION STRINGS
// ─────────────────────────────────────────────────────────────────────────────
const translations = {
  ru: {
    bannerBadge:    "ОГРАНИЧЕННЫЙ НАБОР",
    bannerText:     "Осталось всего <strong>3 места</strong> на персональный аудит в",
    bannerApply:    "Подать заявку",

    navHome:        "Главная",
    navPillars:     "Программа",
    navCoach:       "О тренере",
    navBooking:     "Запись",

    btnHeaderBook:  "Записаться",
    heroSubBadge:   "ПРИВАТНЫЕ ТРЕНИРОВКИ • ТОЛЬКО ПО ЗАЯВКАМ",
    heroTitleLine1: "ЭЛИТНАЯ 1-НА-1",
    heroTitleLine2: "ПОДГОТОВКА БОЙЦОВ.",
    heroSubtitle:   "Персональная постановка техники, механика ринга и подготовка спортсменов для выхода на профессиональный уровень.",
    heroCtaPrimary: "Записаться на аудит",
    heroGuarantee:  "Прямой 1-на-1 доступ к Тренеру Расулу. Без фитнес-групп. 100% фокус на ваш результат.",

    stat1Label: "Чемпионов и обладателей поясов",
    stat2Label: "Побед и нокаутов",
    stat3Label: "Индивидуальный разбор",
    stat4Label: "Макс. новых атлетов / мес",

    pillarsTag:   "МЕТОДОЛОГИЯ РАСУЛА",
    pillarsTitle: "3 СТОЛПА ПРОФЕССИОНАЛЬНОЙ ПОДГОТОВКИ",
    pillarsDesc:  "Авторская система персональных тренировок для перехода от любительского бокса к чемпионской механике.",

    pillar1Title: "Техническое мастерство",
    pillar1Text:  "Точная работа ног, движение головы, контратаки и биомеханика удара. Полная перестройка стойки и защиты для исключения ошибок.",
    p1f1: "Оптимизация биомеханики удара",
    p1f2: "Уклоны, нырки и контратаки",
    p1f3: "Работа ног и углы атаки",

    badgeCritical: "КЛЮЧЕВОЙ ЭЛЕМЕНТ",
    pillar2Title: "Бойцовский IQ и стратегия",
    pillar2Text:  "Разбор спаррингов, управление дистанцией и тактика под соперника. Обучение чтению ритма оппонента и контролю ринга.",
    p2f1: "Анализ финтов и ритма соперника",
    p2f2: "Тактические ловушки (Левша / Правша)",
    p2f3: "Контроль углов ринга",

    pillar3Title: "Про-кондиция",
    pillar3Text:  "Специфическая выносливость, взрывная сила и готовность к бою. Подготовка тела к 10–12 раундам.",
    p3f1: "Анаэробная выносливость",
    p3f2: "Взрывная кинетическая цепь",
    p3f3: "Восстановление и сгонка веса",

    coachTag:       "О ТРЕНЕРЕ",
    coachTitle:     '"ЧЕМПИОНАМИ НЕ СТАНОВЯТСЯ СЛУЧАЙНО. ИХ СТРОЯТ В ТИШИНЕ."',
    coachBio:       "Более 15 лет в элитном боксе. Подготовка чемпионов страны, претендентов на мировые титулы и профессиональных спортсменов. В отличие от массовых фитнес-клубов, Rasul Boxing Club работает как приватная лаборатория бокса.",
    coachBadgeTitle: "ГЛАВНЫЙ ТРЕНЕР",
    coachBadgeSub:  "Мастер бойцовской тактики",
    cp1Title: "Строго 1-на-1",
    cp1Desc:  "100% внимания тренера на вашей технике, стойке и балансе.",
    cp2Title: "Видео-анализ кадр за кадром",
    cp2Desc:  "Разбор работы ног и ударов на замедленном повторе.",
    coachQuote: '"Если хотите боксировать как все — идите в обычный зал. Если хотите стать неуязвимым и точным — добро пожаловать на мой ринг."',

    bookingTag:      "ЗАПИСЬ НА АУДИТ",
    bookingTitle:    "ЗАБРОНИРОВАТЬ ПРИВАТНЫЙ АУДИТ",
    bookingSubtitle: "Первый шаг к профессиональной технике. 60-минутный аудит включает оценку биомеханики, разбор ошибок и индивидуальный план развития.",
    ah1Title: "60 Минут 1-на-1",
    ah1Desc:  "Полная оценка техники на персональном ринге.",
    ah2Title: "Замедленный Видео-Разбор",
    ah2Desc:  "Поиск брешей в защите и балансе.",
    ah3Title: "Персональный План Бойца",
    ah3Desc:  "Пошаговая программа под ваш стиль и телосложение.",
    urgencyTitle: "Ограниченный набор:",
    urgencyDesc:  "Тренер Расул берёт не более 4 новых спортсменов в месяц.",

    labelSlot:    "Предпочтительное время",
    slot1Day:     "Утреннее время",
    slot2Day:     "Вечернее время",
    slot3Day:     "Субботний слот",
    formHeader:   "АНКЕТА КАНДИДАТА",
    formStatus:   "ПРИЕМ ЗАЯВОК",
    labelName:    "1. Имя и Фамилия",
    labelContact: "2. Телефон или Email",
    labelExp:     "3. Опыт в боксе",
    optExpDefault:"Выберите ваш опыт...",
    optExp1:      "Новичок (0-1 год / Постановка базы)",
    optExp2:      "Любитель (1-10 боёв / Соревнования)",
    optExp3:      "Опытный любитель (10+ боёв / Разрядник)",
    optExp4:      "Профессиональный боец (Про-лицензия)",
    labelGoal:    "4. Главная цель тренировок",
    btnSubmit:    "Отправить заявку на аудит",
    formSecurity: "Конфиденциально. Без спама. Прямой ответ от штаба Тренера Расула.",
    errName:      "Пожалуйста, укажите ваше имя.",
    errContact:   "Укажите корректный номер телефона или email.",
    errExp:       "Выберите уровень опыта.",
    errGoal:      "Пожалуйста, опишите вашу цель.",

    modalTitle:    "ЗАЯВКА ПРИНЯТА",
    modalSubtitle: "Ваша анкета внесена в очередь кандидатов на аудит.",
    ticketLabel:   "КОД РЕГИСТРАЦИИ",
    tKeyName:      "Кандидат:",
    tKeyContact:   "Контакты:",
    tKeyExp:       "Уровень:",
    tKeySlot:      "Слот:",
    tKeyStatus:    "Статус:",
    statusPending: "НА РАССМОТРЕНИИ",
    btnIcs:        "Сохранить в календарь (.ics)",
    btnDone:       "Вернуться на сайт",

    fTitleNav:     "Навигация",
    fTitleContact: "Контакты",
  },

  en: {
    bannerBadge:    "LIMITED SLOTS",
    bannerText:     "Only <strong>3 spots</strong> remaining for private assessment in",
    bannerApply:    "Apply Now",

    navHome:        "Home",
    navPillars:     "Program",
    navCoach:       "Coach",
    navBooking:     "Book",

    btnHeaderBook:  "Book Session",
    heroSubBadge:   "PRIVATE TRAINING • BY APPLICATION ONLY",
    heroTitleLine1: "ELITE 1-ON-1",
    heroTitleLine2: "FIGHT DEVELOPMENT.",
    heroSubtitle:   "Tailored technical coaching, ring mechanics, and fight preparation for athletes aiming for the professional ranks.",
    heroCtaPrimary: "Book Your Assessment",
    heroGuarantee:  "Direct 1-on-1 access to Head Coach Rasul. Zero group classes. 100% focused on your fight record.",

    stat1Label: "Title Belt Winners Trained",
    stat2Label: "Win & KO Ratio",
    stat3Label: "Dedicated 1-on-1 Focus",
    stat4Label: "Max New Athletes / Month",

    pillarsTag:   "RASUL'S METHODOLOGY",
    pillarsTitle: "3 PILLARS OF PRO DEVELOPMENT",
    pillarsDesc:  "A proprietary 1-on-1 system that bridges amateur athleticism and championship fight mechanics.",

    pillar1Title: "Technical Mastery",
    pillar1Text:  "Precision footwork, head movement, counter-punching, and biomechanical punch efficiency. Full guard reconstruction to eliminate mechanical flaws.",
    p1f1: "Biomechanical leverage optimization",
    p1f2: "Slip, roll & counter geometry",
    p1f3: "Footwork pivots & angle creation",

    badgeCritical: "MOST CRITICAL",
    pillar2Title: "Ring IQ & Strategy",
    pillar2Text:  "Sparring breakdown, distance management, and style customization. Learn to read opponent rhythm and dictate ring generalship.",
    p2f1: "Opponent rhythm & feint analysis",
    p2f2: "Southpaw / Orthodox tactical traps",
    p2f3: "Ring boundary & corner control",

    pillar3Title: "Pro Conditioning",
    pillar3Text:  "Fight-specific energy systems, explosive power, and fight-night readiness — engineered for 10–12 round output.",
    p3f1: "Anaerobic threshold conditioning",
    p3f2: "Explosive kinetic chain training",
    p3f3: "Weight cut optimization & recovery",

    coachTag:       "MEET THE COACH",
    coachTitle:     '"CHAMPIONS ARE NOT MADE BY CHANCE. THEY ARE BUILT IN ISOLATION."',
    coachBio:       "Over 15 years in elite fight development — coaching national champions, world title contenders, and professional prospects. Unlike commercial gyms, Rasul Boxing Club operates as a private fight laboratory.",
    coachBadgeTitle: "HEAD COACH",
    coachBadgeSub:  "Master Fight Tactician",
    cp1Title: "Strict 1-on-1 Exclusivity",
    cp1Desc:  "100% of Coach Rasul's attention on your guard, balance, and kinetic transfer.",
    cp2Title: "Frame-by-Frame Video Analysis",
    cp2Desc:  "Identify guard holes and balance breaks in high-speed playback.",
    coachQuote: '"If you want to fight like everyone else, join a commercial gym. If you want to become un-touchable and precise — step into my ring."',

    bookingTag:      "ASSESSMENT REGISTRATION",
    bookingTitle:    "RESERVE YOUR PRIVATE ASSESSMENT",
    bookingSubtitle: "Your 60-minute private assessment includes full biomechanical evaluation, footwork audit, video review, and a personalized 12-month blueprint.",
    ah1Title: "60-Minute Intensive 1-on-1",
    ah1Desc:  "Full technical evaluation inside Coach Rasul's private ring.",
    ah2Title: "Slow-Motion Video Analysis",
    ah2Desc:  "Identify guard holes and balance breaks frame by frame.",
    ah3Title: "Custom Fighter Blueprint",
    ah3Desc:  "Detailed tactical plan tailored to your body type and style.",
    urgencyTitle: "Strict Application Filter:",
    urgencyDesc:  "Coach Rasul accepts only 4 new assessment candidates per month.",

    labelSlot:    "Preferred Session Slot",
    slot1Day:     "Weekday Morning",
    slot2Day:     "Weekday Evening",
    slot3Day:     "Saturday Pro Slot",
    formHeader:   "ASSESSMENT APPLICATION",
    formStatus:   "LIVE ACCEPTANCE",
    labelName:    "1. Full Name",
    labelContact: "2. Phone or Email",
    labelExp:     "3. Fight Experience",
    optExpDefault:"Select your experience level...",
    optExp1:      "Beginner Contender (0-1 Year / Fundamentals)",
    optExp2:      "Amateur Fighter (1-10 Bouts / Tournament Level)",
    optExp3:      "Experienced Amateur (10+ Bouts / National Level)",
    optExp4:      "Active Professional Fighter (Pro License)",
    labelGoal:    "4. Primary Training Objective",
    btnSubmit:    "Submit Session Request",
    formSecurity: "100% Confidential. No spam. Direct response from Coach Rasul's office.",
    errName:      "Please enter your full name.",
    errContact:   "Please enter a valid email or phone number.",
    errExp:       "Please select your experience level.",
    errGoal:      "Please describe your primary goal.",

    modalTitle:    "REQUEST SUBMITTED",
    modalSubtitle: "Your application has been locked into the assessment queue.",
    ticketLabel:   "APPLICATION REFERENCE CODE",
    tKeyName:      "Applicant:",
    tKeyContact:   "Contact:",
    tKeyExp:       "Experience:",
    tKeySlot:      "Slot:",
    tKeyStatus:    "Status:",
    statusPending: "PENDING COACH REVIEW",
    btnIcs:        "Save Calendar Reminder (.ics)",
    btnDone:       "Return to Site",

    fTitleNav:     "Navigation",
    fTitleContact: "Contact",
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// LANGUAGE ENGINE
// ─────────────────────────────────────────────────────────────────────────────
let currentLang = 'ru';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;

  // Update all data-key elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (!t[key]) return;
    // Use innerHTML only for keys that may contain HTML tags
    if (key === 'bannerText') {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  // Update select options explicitly
  const expSelect = document.getElementById('fightExperience');
  if (expSelect) {
    const opts = expSelect.querySelectorAll('option');
    const keys = ['optExpDefault', 'optExp1', 'optExp2', 'optExp3', 'optExp4'];
    opts.forEach((opt, i) => {
      if (keys[i] && t[keys[i]]) opt.textContent = t[keys[i]];
    });
  }

  // Update form placeholders
  const nameInput = document.getElementById('fullName');
  if (nameInput) nameInput.placeholder = lang === 'ru' ? 'Например: Александр Ванин' : 'e.g. Alexander Vance';

  const contactInput = document.getElementById('contactInfo');
  if (contactInput) contactInput.placeholder = lang === 'ru' ? '+7 (999) 000-00-00 или email@mail.ru' : 'e.g. alex@fighter.com or (555) 234-5678';

  const goalInput = document.getElementById('primaryObjective');
  if (goalInput) goalInput.placeholder = lang === 'ru'
    ? 'Что нужно исправить (защита, тайминг, подготовка к бою)...'
    : 'What should Coach Rasul fix or optimize (e.g. defense, timing, pro debut prep)...';

  // Update month in banner
  setCurrentMonth();

  // Sync all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langTarget === lang);
  });
}

function setCurrentMonth() {
  const months = {
    ru: ['Январе','Феврале','Марте','Апреле','Мае','Июне','Июле','Августе','Сентябре','Октябре','Ноябре','Декабре'],
    en: ['January','February','March','April','May','June','July','August','September','October','November','December']
  };
  const now = new Date();
  const m = months[currentLang][now.getMonth()];
  const el = document.getElementById('currentMonthYear');
  if (el) el.textContent = `${m} ${now.getFullYear()}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply default Russian
  applyLanguage('ru');

  // Language toggle buttons (desktop + mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.langTarget));
  });

  initHeader();
  initMobileDrawer();
  initSmoothScrollActiveLink();
  initSlotPicker();
  initBookingForm();
  initModal();
});

// ─────────────────────────────────────────────────────────────────────────────
// HEADER SCROLL SHADOW
// ─────────────────────────────────────────────────────────────────────────────
function initHeader() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 40 ? '0 8px 30px rgba(0,0,0,0.8)' : 'none';
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE DRAWER
// ─────────────────────────────────────────────────────────────────────────────
function initMobileDrawer() {
  const toggle = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const close  = document.getElementById('drawerClose');

  toggle?.addEventListener('click', () => drawer.classList.add('open'));
  close?.addEventListener('click',  () => drawer.classList.remove('open'));
  drawer?.querySelectorAll('.mobile-link').forEach(l =>
    l.addEventListener('click', () => drawer.classList.remove('open'))
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACTIVE NAV LINK ON SCROLL
// ─────────────────────────────────────────────────────────────────────────────
function initSmoothScrollActiveLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY + 200 >= s.offsetTop) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLOT PICKER
// ─────────────────────────────────────────────────────────────────────────────
function initSlotPicker() {
  const opts  = document.querySelectorAll('.slot-option');
  const input = document.getElementById('selectedSlotInput');

  opts.forEach(opt => {
    opt.addEventListener('click', () => {
      opts.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      if (input) input.value = opt.dataset.slot;
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// BOOKING FORM VALIDATION
// ─────────────────────────────────────────────────────────────────────────────
let submittedData = null;

function initBookingForm() {
  const form       = document.getElementById('assessmentForm');
  const submitBtn  = document.getElementById('submitFormBtn');
  if (!form) return;

  const nameEl    = document.getElementById('fullName');
  const contactEl = document.getElementById('contactInfo');
  const expEl     = document.getElementById('fightExperience');
  const goalEl    = document.getElementById('primaryObjective');

  nameEl.addEventListener('blur',    () => validateRequired(nameEl, 'fullNameError'));
  contactEl.addEventListener('blur', () => validateContact(contactEl, 'contactInfoError'));
  expEl.addEventListener('change',   () => validateRequired(expEl, 'experienceError'));
  goalEl.addEventListener('blur',    () => validateRequired(goalEl, 'objectiveError'));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const v1 = validateRequired(nameEl, 'fullNameError');
    const v2 = validateContact(contactEl, 'contactInfoError');
    const v3 = validateRequired(expEl, 'experienceError');
    const v4 = validateRequired(goalEl, 'objectiveError');

    if (!v1 || !v2 || !v3 || !v4) return;

    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    submitBtn.disabled = true;
    btnText.textContent = currentLang === 'ru' ? 'Отправляем заявку...' : 'Submitting...';
    btnIcon.className = 'fa-solid fa-spinner fa-spin btn-icon';

    setTimeout(() => {
      submitBtn.disabled = false;
      const t = translations[currentLang];
      btnText.textContent = t.btnSubmit;
      btnIcon.className = 'fa-solid fa-paper-plane btn-icon';

      submittedData = {
        code:    'RBC-2026-' + Math.floor(1000 + Math.random() * 9000),
        name:    nameEl.value.trim(),
        contact: contactEl.value.trim(),
        exp:     expEl.value,
        slot:    document.getElementById('selectedSlotInput').value,
      };

      document.getElementById('resTicketCode').textContent = submittedData.code;
      document.getElementById('resName').textContent       = submittedData.name;
      document.getElementById('resContact').textContent    = submittedData.contact;
      document.getElementById('resExp').textContent        = submittedData.exp;
      document.getElementById('resSlot').textContent       = submittedData.slot;

      const modal = document.getElementById('confirmationModal');
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');

      form.reset();
      document.querySelectorAll('.slot-option').forEach((o, i) => o.classList.toggle('active', i === 0));
    }, 1200);
  });
}

function validateRequired(el, errId) {
  const err = document.getElementById(errId);
  const ok  = el.value.trim() !== '';
  el.classList.toggle('invalid', !ok);
  err?.classList.toggle('visible', !ok);
  return ok;
}

function validateContact(el, errId) {
  const val  = el.value.trim();
  const ok   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^[\d\+\-\(\)\s]{7,}$/.test(val);
  el.classList.toggle('invalid', !ok);
  document.getElementById(errId)?.classList.toggle('visible', !ok);
  return ok;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONFIRMATION MODAL + .ICS DOWNLOAD
// ─────────────────────────────────────────────────────────────────────────────
function initModal() {
  const modal = document.getElementById('confirmationModal');
  const close = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); };

  document.getElementById('modalCloseBtn')?.addEventListener('click', close);
  document.getElementById('modalDoneBtn')?.addEventListener('click', close);
  modal?.addEventListener('click', e => { if (e.target === modal) close(); });

  document.getElementById('downloadIcsBtn')?.addEventListener('click', () => {
    const d = submittedData || { name: 'Candidate', code: 'RBC-2026-0001', slot: 'TBD' };
    const ics = [
      'BEGIN:VCALENDAR','VERSION:2.0',
      'PRODID:-//Rasul Boxing Club//Assessment//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Rasul Boxing Club — Private 1-on-1 Assessment',
      `DESCRIPTION:Fighter: ${d.name}. Ref: ${d.code}. Slot: ${d.slot}.`,
      'LOCATION:Rasul Boxing Club Private Fight Lab',
      'DTSTART:20260810T100000Z','DTEND:20260810T110000Z',
      'END:VEVENT','END:VCALENDAR'
    ].join('\r\n');

    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = `Rasul_Boxing_${d.code}.ics`;
    a.click();
  });
}
