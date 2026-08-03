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
    navInstagram:   "Медиа",

    btnHeaderBook:  "Записаться",
    heroSubBadge:   "ПРИВАТНЫЕ ТРЕНИРОВКИ • ТОЛЬКО ПО ЗАЯВКАМ",
    heroTitleLine1: "СОВЕТСКАЯ ШКОЛА.",
    heroTitleLine2: "ЧЕМПИОНСКАЯ ТЕХНИКА.",
    heroSubtitle:   "Система, основанная на интеллекте, а не на силе. Советская школа бокса строит бойца, который меньше получает, контролирует каждый сантиметр ринга и побеждает точностью — не физическими данными.",
    heroCtaPrimary: "Записаться на аудит",
    heroGuarantee:  "Советская система делает боксёра умнее, долговечнее и труднее для попадания — вне зависимости от уровня.",

    stat1Label: "Чемпионов и обладателей поясов",
    stat2Label: "Побед и нокаутов",
    stat3Label: "Индивидуальный разбор",
    stat4Label: "Макс. новых атлетов / мес",

    pillarsTag:   "СОВЕТСКАЯ МЕТОДОЛОГИЯ",
    pillarsTitle: "3 ПРИНЦИПА СОВЕТСКОЙ БОКСЁРСКОЙ ШКОЛЫ",
    pillarsDesc:  "Построена на принципах, которые превращают бойца в стратега. Минимум получаемого урона. Максимум тактического контроля. Техника, которая работает на любом уровне и не стареет с годами.",

    pillar1Title: "Железная Защита и Стойка",
    pillar1Text:  "Советская школа строит боксёра с защиты, а не с удара. Глухой высокий гард, плотный локоть и минимальные движения в нужный момент — боец выходит из боя чистым, сохраняя энергию для точных контрударов. Ни одного лишнего движения.",
    p1f1: "Высокий гард советской школы (плечо — подбородок)",
    p1f2: "Минимальные уклоны — максимальная эффективность",
    p1f3: "Блокировка и перехват вместо ухода назад",

    badgeCritical: "КЛЮЧЕВОЙ ПРИНЦИП",
    pillar2Title: "Образованный Джеб и Контроль Дистанции",
    pillar2Text:  "Советский джеб — это не просто укол. Это инструмент измерения дистанции, нарушения ритма и создания углов для удара правой. Боец, владеющий советским джебом, управляет темпом боя и диктует условия — не силой, а тактическим превосходством.",
    p2f1: "Джеб как инструмент тактики, а не атаки",
    p2f2: "Контроль дистанции и разрыв ритма соперника",
    p2f3: "Создание углов под сильную руку через джеб",

    pillar3Title: "Контрудар и Генеральство Ринга",
    pillar3Text:  "Советские боксёры не гонятся за соперником — они заставляют его идти туда, где уже стоит удар. Терпение, позиционный контроль и точный контрудар в момент ошибки оппонента — именно так строится боксёр, которого сложно поймать и невозможно переиграть тактически.",
    p3f1: "Позиционный контроль и управление рингом",
    p3f2: "Контрудар на опережение — тайминг над силой",
    p3f3: "Терпение как тактическое оружие",

    coachTag:       "О ТРЕНЕРЕ",
    coachTitle:     '"СОВЕТСКАЯ ШКОЛА — ЭТО НЕ СТИЛЬ. ЭТО СИСТЕМА, КОТОРУЮ НЕЛЬЗЯ СКОПИРОВАТЬ ЗА МЕСЯЦ."',
    coachBio:       "Расул Такаев — тренер по боксу с базой восточноевропейской школы единоборств. Его подход основан на педагогической прогрессии, балансе, контроле дистанции и высокой плотности работы джебом. В отличие от фитнес-инструкторов, Расул сформировал опыт через интенсивные спарринги, лаповую работу и приватную тактическую подготовку, перенеся этот подход в Торонто.",
    coachBadgeTitle: "ГЛАВНЫЙ ТРЕНЕР",
    coachBadgeSub:  "Восточноевропейская школа",
    cp1Title: "Строго 1-на-1",
    cp1Desc:  "Каждая деталь техники ставится индивидуально — высота локтя, угол стойки, работа плечом в гарде.",
    cp2Title: "Видео-разбор кадр за кадром",
    cp2Desc:  "Кадр за кадром — как ваша стойка, джеб и контрудар соответствуют техническому эталону.",
    btnCoachLearnMore: "Узнать подробнее о методологии",

    modalCoachTitle: "БИОГРАФИЯ И МЕТОДОЛОГИЯ ТРЕНЕРА",
    modalCoachSub:   "Расул Такаев • Восточноевропейская школа и практика в Торонто",
    modalCoachSec1Title: "Методологическая база и стиль",
    modalCoachSec1Text:  "Подготовка Расула Такаева опирается на восточноевропейскую школу единоборств. В этой системе развитие атлета строится на строго педагогической прогрессии, структурном балансе, точнейшем контроле дистанции и высокой плотности работы джебом. Стиль характеризуется системными перемещениями (футворок), реактивной работой головой и эффективным переносом кинетической энергии от ног — фундаментом любительских и профессиональных систем Европы и Центральной Азии.",
    modalCoachSec2Title: "Практический опыт и квалификация",
    modalCoachSec2Text:  "В отличие от коммерческих фитнес-тренеров с краткосрочными сертификатами, Такаев сформировал технический потенциал через многолетнюю практическую работу в боксе и кондиционной подготовке. Он одинаково свободно работает из правосторонней (ортодокс) и левосторонней (левша) стоек, филигранно контролирует пространственные границы ринга и ставит серийную контрударную работу. В его активе — элитный уровень лаповой техники и спарринговая база, полученная в Восточной Европе до переезда в Канаду.",
    modalCoachSec3Title: "Тренерская деятельность в Торонто",
    modalCoachSec3Text:  "Основав практику в районе Большого Торонто (GTA) — на фоне таких известных центров, как United Boxing Club, Toronto Boxing Academy и Budo Canada, — Такаев занял нишу аутентичной восточноевропейской лаповой техники и персональной боевой кондиции. В отличие от групповых фитнес-классов, его работа сосредоточена исключительно на приватных индивидуальных сессиях высокой технической плотности.",
    btnCloseModal:       "Закрыть",


    bookingTag:      "ЗАПИСЬ НА АУДИТ",
    bookingTitle:    "ЗАБРОНИРОВАТЬ ПРИВАТНЫЙ АУДИТ",
    bookingSubtitle: "60-минутный аудит по советской методологии: оценка гарда и стойки, разбор джеба, анализ контрударного тайминга и индивидуальный план постановки техники.",
    ah1Title: "Оценка Гарда и Стойки",
    ah1Desc:  "Разбор советской базовой позиции — высота локтей, угол плеча, баланс.",
    ah2Title: "Анализ Джеба и Дистанции",
    ah2Desc:  "Ваш джеб под микроскопом: тайминг, направление, контроль дистанции.",
    ah3Title: "Индивидуальный Тактический План",
    ah3Desc:  "Программа постановки советской техники под ваши физические данные.",
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
    instaTag:      "СЛЕДИТЕ ЗА ТРЕНИРОВКАМИ",
    instaTitle:    "@RASUL.SPORT27",
    instaDesc:     "46,000+ подписчиков следят за тренировочным процессом. Реальные тренировки, спарринги и подготовка бойцов.",
    instaWatch:    "Смотреть",
    instaReel1:    "Спарринг & Работа на лапах",
    instaReel2:    "Постановка защиты",
    instaReel3:    "Работа ног & Углы",
    instaFollow:   "Подписаться — 46K подписчиков",
  },

  en: {
    bannerBadge:    "LIMITED SLOTS",
    bannerText:     "Only <strong>3 spots</strong> remaining for private assessment in",
    bannerApply:    "Apply Now",

    navHome:        "Home",
    navPillars:     "Program",
    navCoach:       "Coach",
    navBooking:     "Book",
    navInstagram:   "Media",

    btnHeaderBook:  "Book Session",
    heroSubBadge:   "PRIVATE TRAINING • BY APPLICATION ONLY",
    heroTitleLine1: "SOVIET SCHOOL.",
    heroTitleLine2: "CHAMPIONSHIP TECHNIQUE.",
    heroSubtitle:   "A system built on intelligence, not power. Soviet boxing produces fighters who take less damage, control every inch of the ring, and win through precision — not physical gifts.",
    heroCtaPrimary: "Book Your Assessment",
    heroGuarantee:  "The Soviet system makes you smarter, harder to hit, and more durable — at any level.",

    stat1Label: "Champions & Title Belt Winners",
    stat2Label: "Win & KO Ratio",
    stat3Label: "Dedicated 1-on-1 Focus",
    stat4Label: "Max New Athletes / Month",

    pillarsTag:   "SOVIET METHODOLOGY",
    pillarsTitle: "3 PILLARS OF THE SOVIET BOXING SCHOOL",
    pillarsDesc:  "Built on principles that turn a fighter into a strategist. Minimum damage absorbed. Maximum tactical control. Technique that works at every level and never ages.",

    pillar1Title: "The Educated Guard",
    pillar1Text:  "Soviet boxing builds the fighter from the defence outward. A high, tight guard with the shoulder kissing the chin allows the boxer to exit exchanges clean, preserving energy for precise counters. Minimal movement, maximum coverage — nothing wasted.",
    p1f1: "High Soviet guard — shoulder to chin at all times",
    p1f2: "Compact slips — efficiency over athleticism",
    p1f3: "Intercept and block instead of retreating",

    badgeCritical: "CORE PRINCIPLE",
    pillar2Title: "The Tactical Jab & Distance Control",
    pillar2Text:  "In Soviet boxing, the jab is not an attack — it is a measuring stick, a rhythm breaker, and an angle-setter for the right hand. A boxer who masters the Soviet jab controls the pace of every round and dictates terms — not through power, but through tactical superiority.",
    p2f1: "Jab as a tactical tool, not an offensive weapon",
    p2f2: "Distance control to break opponent timing",
    p2f3: "Angle creation through the jab for the power hand",

    pillar3Title: "Counter-Punching & Ring Generalship",
    pillar3Text:  "Soviet champions do not chase — they position. They control the ring, absorb nothing, and punish every mistake with surgical precision. The result is a fighter who is nearly impossible to catch cleanly and impossible to out-think tactically.",
    p3f1: "Positional ring control — own the centre",
    p3f2: "Timing-based counter over power-based aggression",
    p3f3: "Patience as a tactical weapon across 12 rounds",

    coachTag:       "MEET THE COACH",
    coachTitle:     '"SOVIET BOXING IS NOT A STYLE. IT IS A SYSTEM YOU CANNOT FAKE."',
    coachBio:       "Rasul Takaev's background is rooted in Eastern European combat sports methodology, emphasizing pedagogical progression, structural balance, distance management, and high-volume jab utilization. Unlike commercial fitness trainers, Takaev built his expertise through dedicated amateur sparring, specialized pad work, and tactical conditioning before establishing his private coaching practice in Toronto.",
    coachBadgeTitle: "HEAD COACH",
    coachBadgeSub:  "Eastern European Boxing School",
    cp1Title: "Strict 1-on-1 Methodology",
    cp1Desc:  "Every detail of the system is drilled individually — elbow height, guard angle, shoulder coverage, and jab geometry.",
    cp2Title: "Frame-by-Frame Technical Breakdown",
    cp2Desc:  "Your guard, jab, and counter timing reviewed against the rigorous technical standard.",
    btnCoachLearnMore: "Learn More About Coach",

    modalCoachTitle: "COACH BIOGRAPHY & METHODOLOGY",
    modalCoachSub:   "Rasul Takaev • Eastern European Training System & Toronto Practice",
    modalCoachSec1Title: "Combat Methodology & Style",
    modalCoachSec1Text:  "Rasul Takaev's background in martial arts is rooted in Eastern European combat sports methodology. Athletic development in this system emphasizes pedagogical progression, structural balance, precise distance management, and high-volume jab utilization. This regional style prioritizes systematic footwork patterns, reactive head movement, and kinetic power transfer through the lower body — forming the foundation for elite combat systems across Europe and Central Asia.",
    modalCoachSec2Title: "Technical Credentials & Background",
    modalCoachSec2Text:  "Unlike commercial fitness trainers who enter boxing through group certifications, Takaev built his foundational expertise through dedicated practice in boxing and combat conditioning. His skill set includes fluid operating from both orthodox and southpaw stances, managing spatial boundaries inside the ring, and executing advanced counter-punching routines. His credentials center on high-level amateur sparring, specialized pad work skills, and tactical training acquired in Eastern Europe before bringing his methodology to Canada.",
    modalCoachSec3Title: "Coaching Trajectory & Toronto Practice",
    modalCoachSec3Text:  "Establishing his coaching practice in the Greater Toronto Area (GTA) — alongside established hubs such as United Boxing Club on Bloor St West, Toronto Boxing Academy, and Budo Canada — Takaev identified strong demand for authentic Eastern European technical pad work and 1-on-1 combat conditioning. He positioned his practice strictly within the private technical instruction market rather than general fitness classes.",
    btnCloseModal:       "Close",

    bookingTag:      "ASSESSMENT REGISTRATION",
    bookingTitle:    "RESERVE YOUR PRIVATE ASSESSMENT",
    bookingSubtitle: "A 60-minute Soviet-methodology audit: guard and stance evaluation, jab mechanics breakdown, counter timing analysis, and a personalised technical development plan.",
    ah1Title: "Guard & Stance Evaluation",
    ah1Desc:  "Soviet baseline position — elbow height, shoulder angle, chin coverage.",
    ah2Title: "Jab & Distance Analysis",
    ah2Desc:  "Your jab under the microscope: timing, direction, distance management.",
    ah3Title: "Individual Tactical Blueprint",
    ah3Desc:  "Soviet technique programme built around your physical attributes.",
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
    instaTag:      "FOLLOW THE TRAINING",
    instaTitle:    "@RASUL.SPORT27",
    instaDesc:     "46,000+ followers watching real training footage. Sparring, pad work, and fighter preparation.",
    instaWatch:    "Watch",
    instaReel1:    "Sparring & Pad Work",
    instaReel2:    "Defence Drills",
    instaReel3:    "Footwork & Angles",
    instaFollow:   "Follow — 46K Followers",
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
  initCoachModal();
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

function initCoachModal() {
  const modal = document.getElementById('coachModal');
  if (!modal) return;

  const open  = () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); };
  const close = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); };

  document.getElementById('coachLearnMoreBtn')?.addEventListener('click', open);
  document.getElementById('coachModalClose')?.addEventListener('click', close);
  document.getElementById('coachModalCloseBtn')?.addEventListener('click', close);
  document.getElementById('coachModalBookBtn')?.addEventListener('click', close);

  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
}
