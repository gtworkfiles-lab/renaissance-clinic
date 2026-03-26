export type Locale = 'ua' | 'ru' | 'en';

export async function getContent(lang: Locale = 'ua') {
  // Захист від того, щоб мова не злітала при переході
  const currentLang = lang;

  const translations = {
    ua: {
      metadata: {
        siteName: "Ренесанс Центр Чернівці — Анонімна допомога та реабілітація", 
        siteDescription: "Професійна допомога при алкоголізмі, наркоманії та ігроманії у Чернівцях. Анонімно 24/7. Понад 15 років досвіду. Поверніть спокій у вашу родину.",
      },
      ui: {
        servicePage: {
          backLink: "Всі напрямки допомоги",
          locationSuffix: "у Чернівцях",
          consultationLabel: "Безкоштовна консультація:",
          atmosphereTitle: "Атмосфера нашого центру",
          offersTitle: "Що ми пропонуємо:",
          ctaTitle: "Важливо почати вже сьогодні",
          ctaDesc: "Просто поговоріть з нами. Це анонімно і ні до чого вас не зобов'язує.",
          benefits: [
            { title: "Безкоштовна підтримка", desc: "Первинна консультація є безкоштовною" },
            { title: "Анонімно 24/7", desc: "Ми поруч у будь-який час" },
            { title: "Турбота", desc: "Безпечне середовище для відновлення" }
          ]
        }
      },
      navigation: {
        menuItems: [
          { id: "1", label: "Послуги", href: `/${currentLang}/#services` },
          { id: "2", label: "Варто знати", href: `/${currentLang}/#articles` },
          { id: "3", label: "Відгуки", href: `/${currentLang}/#reviews` },
          { id: "4", label: "Контакти", href: `/${currentLang}/#contacts` },
        ],
      },
      hero: {
        title: "Професійна допомога при залежностях у Чернівцях",
        subtitle: "Повертаємо до повноцінного життя за допомогою перевірених методик та підтримки 24/7",
        cta: "Зателефонуйте нам",
        backgroundImage: "/gallery/1.jpg", 
      },
      services: [
        { 
          id: "likuvannya-alkogolizmu", 
          title: "Анонімна допомога при алкоголізмі | Ренесанс", 
          desc: "Анонімна допомога, безпечний детокс та повна психологічна реабілітація.",
          href: `/${currentLang}/services/likuvannya-alkogolizmu`,
          fullDesc: `Алкоголізм — це важке захворювання, яке потребує професійного підходу. У нашому центрі ми фокусуємося не лише на фізичному очищенні, а й на повній зміні способу життя пацієнта.\n\nОсновні етапи відновлення:\n• Детоксикація: безпечне виведення, стабілізація стану під цілодобовим наглядом фахівців.\n• Психологічна реабілітація: індивідуальні консультації та групова терапія за програмою "12 кроків".\n• Підтримка організму: відновлення нервової системи та внутрішніх органів.\n• Ресоціалізація: допомога у поверненні до соціуму та навчання навичкам подолання стресу.`,
          features: ["Плавне відновлення стану", "Бесіди з психологом", "Групи підтримки", "Комфортний стаціонар", "Анонімний супровід", "Допомога родині"]
        },
        { 
          id: "likuvannya-narkomaniyi", 
          title: "Реабілітація та детокс (наркологія) | Ренесанс", 
          desc: "Комплексна допомога при залежності від важких наркотиків, солей та психостимуляторів.",
          href: `/${currentLang}/services/likuvannya-narkomaniyi`,
          fullDesc: `Відновлення при наркотичній залежності — це процес, що вимагає індивідуального підходу та поєднання сучасних методів.\n\nНаша програма включає:\n• Очищення організму: зняття абстинентного синдрому та виведення токсинів.\n• Робота з усіма видами залежностей: солі, психостимулятори, опіати.\n• Психокорекція: зміна поведінки, робота з тягою та формування мотивації на тверезе життя.\n• Соціальна адаптація: підтримка після виходу з центру.`,
          features: ["Зняття ломки (детокс)", "Цілодобовий нагляд", "Сучасні методики", "Робота з тягою", "Безпечне середовище", "Повна конфіденційність"]
        },
        { 
          id: "likuvannya-igromaniyi", 
          title: "Позбавлення від ігроманії | Ренесанс Центр", 
          desc: "Подолання психологічної залежності від азартних та комп'ютерних ігор (лудоманії).",
          href: `/${currentLang}/services/likuvannya-igromaniyi`,
          fullDesc: `Ігроманія руйнує фінанси та сім'ї. Наш підхід допомагає повернути контроль над своїм життям.\n\nОсобливості програми:\n• Когнітивно-поведінкова терапія: виявлення тригерів гри.\n• Робота з емоціями: подолання тривоги, депресії та почуття провини.\n• Фінансова відповідальність: планування бюджету.\n• Сімейна підтримка: відновлення довіри з близькими.`,
          features: ["Терапія поведінки", "Емоційна стабільність", "Аналіз тригерів", "Сімейна підтримка", "Відновлення довіри", "Нові хобі та цілі"]
        },
        { 
          id: "dopomoga-rodini", 
          title: "Допомога родині та близьким | Ренесанс", 
          desc: "Професійна підтримка близьких залежних, робота з співзалежністю та відновлення стосунків.",
          href: `/${currentLang}/services/dopomoga-rodini`,
          fullDesc: `Залежність — це виклик для всієї родини. Ми допомагаємо близьким вийти з пастки співзалежності.\n\nНапрямки допомоги:\n• Групи підтримки: обмін досвідом та поради фахівців.\n• Індивідуальні сесії: робота над власним психологічним станом.\n• Сімейні консультації: налагодження здорового діалогу в родині.\n• Профілактика зриву: навчання правильній взаємодії.`,
          features: ["Групи для близьких", "Психологічна допомога", "Вихід із співзалежності", "Межі у спілкуванні", "Зцілення родини", "Консультації фахівців"]
        }
      ],
      features: [
        { id: "f1", title: "100% Анонімність", desc: "Повна конфіденційність кожного пацієнта." },
        { id: "f2", title: "Досвід 15+ років", desc: "Кваліфіковані фахівці з великим стажем." },
        { id: "f3", title: "Комфортні умови", desc: "Затишні кімнати та збалансоване харчування." },
        { id: "f4", title: "Підтримка 24/7", desc: "Цілодобовий нагляд та професійна допомога." }
      ],
      steps: [
        { id: "step1", title: "Зв'язок", desc: "Анонімна консультація та розробка плану дій." },
        { id: "step2", title: "Очищення", desc: "Детоксикація та відновлення фізичного стану." },
        { id: "step3", title: "Психологія", desc: "Глибока робота з причинами залежності." },
        { id: "step4", title: "Результат", desc: "Повернення до соціуму та стійка тверезість." },
      ],
      gallery: [ "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg", "/gallery/5.jpg", "/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg" ],
      articles: [
        { id: "a1", title: "Перші ознаки залежності", excerpt: "Дізнайтеся, на що звернути увагу, щоб вчасно розпізнати проблему.", link: "https://telegra.ph/Persh%D1%96-oznaki-zalezhnost%D1%96-na-shcho-zvernuti-uvagu-01-24" },
        { id: "a2", title: "Співзалежність у родині", excerpt: "Чому надмірна опіка заважає і як вийти з ролі рятівника.", link: "https://telegra.ph/Sp%D1%96vzalezhn%D1%96st-u-rodin%D1%96-pastka-ryat%D1%96vnika-01-24" },
        { id: "a3", title: "Програма 12 кроків", excerpt: "Чому цей метод є найефективнішим у світі для подолання залежності.", link: "https://telegra.ph/Programa-12-krok%D1%96v-chomu-ce-pracyuye-vzhe-90-rok%D1%96v-01-24" },
        { id: "a4", title: "Життя без зривів", excerpt: "Як зберегти тверезість та адаптуватися до нормального життя.", link: "https://telegra.ph/ZHittya-p%D1%96slya-reab%D1%96l%D1%96tac%D1%96i-yak-uniknuti-zrivu-01-24" }
      ],
      reviews: [
        { id: "r1", name: "Олександр", text: "Дякую команді за підтримку. Умови дуже комфортні.", date: "12.11.2025" },
        { id: "r2", name: "Тетяна", text: "Консультації допомогли нам як сім'ї почати все спочатку.", date: "05.01.2026" },
        { id: "r3", name: "Ігор", text: "Професійний підхід і реальний результат. Рекомендую.", date: "20.01.2026" }
      ],
      faq: [
        { question: "Чи це конфіденційно?", answer: "Так, ми гарантуємо 100% анонімність." },
        { question: "Яка тривалість курсу?", answer: "Програма підбирається індивідуально, зазвичай від 28 днів." },
        { question: "Чи є підтримка родичів?", answer: "Так, ми проводимо сімейні сесії та групи підтримки." }
      ],
      helpForFamily: {
        title: "Ваша близька людина не хоче приймати допомогу?",
        subtitle: "Ми знаємо, як почати діалог м'яко.",
        guideUrl: "https://telegra.ph/YAk-p%D1%96dtrimati-blizku-lyudinu-na-shlyahu-oduzhannya-10-27",
        advice: ["Не звинувачуйте, а пропонуйте підтримку", "Створіть межі", "Зверніться за фаховою консультацією", "Дізнайтеся про методи мотивації"]
      },
      form: { title: "Потрібна консультація?", subtitle: "Ми передзвонимо впродовж 15 хвилин.", buttonText: "Отримати допомогу" },
      contacts: {
        phone: "+38 (068) 420 94 40",
        rawPhone: "380684209440",
        address: "м.Чернівці, вул. Хутірська, 23а",
        email: "maxrenes2020@gmail.com",
        socials: { telegram: "https://t.me/+380684209440", viber: "viber://chat?number=%2B380684209440", whatsapp: "https://wa.me/380684209440" }
      }
    },

    ru: {
      metadata: {
        siteName: "Ренессанс Центр Черновцы — Анонимная помощь и реабилитация", 
        siteDescription: "Профессиональная помощь при алкоголизме, наркомании и игромании в Черновцах. Анонимно 24/7.",
      },
      ui: {
        servicePage: {
          backLink: "Все направления помощи",
          locationSuffix: "в Черновцах",
          consultationLabel: "Бесплатная консультация:",
          atmosphereTitle: "Атмосфера нашего центра",
          offersTitle: "Что мы предлагаем:",
          ctaTitle: "Важно начать уже сегодня",
          ctaDesc: "Просто поговорите с нами. Это анонимно.",
          benefits: [
            { title: "Бесплатная поддержка", desc: "Первичная консультация бесплатна" },
            { title: "Анонимно 24/7", desc: "Мы рядом в любое время" },
            { title: "Забота", desc: "Безопасная среда" }
          ]
        }
      },
      navigation: {
        menuItems: [
          { id: "1", label: "Услуги", href: `/${currentLang}/#services` },
          { id: "2", label: "Важно знать", href: `/${currentLang}/#articles` },
          { id: "3", label: "Отзывы", href: `/${currentLang}/#reviews` },
          { id: "4", label: "Контакты", href: `/${currentLang}/#contacts` },
        ],
      },
      hero: {
        title: "Профессиональная помощь при зависимостях в Черновцах",
        subtitle: "Возвращаем к полноценной жизни",
        cta: "Позвоните нам",
        backgroundImage: "/gallery/1.jpg", 
      },
      services: [
        { 
          id: "likuvannya-alkogolizmu", 
          title: "Анонимная помощь при алкоголизме | Ренессанс", 
          desc: "Анонимная помощь, безопасный детокс и полная психологическая реабилитация.",
          href: `/${currentLang}/services/likuvannya-alkogolizmu`,
          fullDesc: `Алкоголизм — это тяжелое заболевание. В нашем центре мы фокусируемся не только на детоксе, но и на психологическом восстановлении.`,
          features: ["Плавное восстановление", "Беседы с психологом", "Группы поддержки", "Комфортный стационар", "Анонимное сопровождение", "Помощь семье"]
        },
        { 
          id: "likuvannya-narkomaniyi", 
          title: "Реабилитация и детокс (наркология) | Ренессанс", 
          desc: "Комплексная помощь при зависимости от тяжелых наркотиков, солей и психостимуляторов.",
          href: `/${currentLang}/services/likuvannya-narkomaniyi`,
          fullDesc: `Восстановление при наркозависимости включает детокс, психокоррекцию и социальную адаптацию.`,
          features: ["Снятие ломки (детокс)", "Круглосуточное наблюдение", "Современные методики", "Работа с тягой", "Безопасная среда", "Конфиденциальность"]
        },
        { 
          id: "likuvannya-igromaniyi", 
          title: "Избавление от игромании | Ренессанс Центр", 
          desc: "Преодоление психологической зависимости от азартных игр.",
          href: `/${currentLang}/services/likuvannya-igromaniyi`,
          fullDesc: `Мы помогаем вернуть контроль над финансами и жизнью через когнитивную терапию.`,
          features: ["Терапия поведения", "Эмоциональная стабильность", "Анализ триггеров", "Семейная поддержка", "Восстановление доверия", "Новые цели"]
        },
        { 
          id: "dopomoga-rodini", 
          title: "Помощь семье и близким | Ренессанс", 
          desc: "Профессиональная поддержка близких, работа с созависимостью.",
          href: `/${currentLang}/services/dopomoga-rodini`,
          fullDesc: `Помогаем родственникам справиться со стрессом и наладить здоровые границы.`,
          features: ["Группы для близких", "Психологическая помощь", "Выход из созависимости", "Границы в общении", "Исцеление семьи", "Консультации профи"]
        }
      ],
      features: [
        { id: "f1", title: "100% Анонимность", desc: "Полная конфиденциальность." },
        { id: "f2", title: "Опыт 15+ лет", desc: "Квалифицированные специалисты." },
        { id: "f3", title: "Комфортные условия", desc: "Уютные комнаты." },
        { id: "f4", title: "Поддержка 24/7", desc: "Круглосуточная помощь." }
      ],
      steps: [
        { id: "step1", title: "Связь", desc: "Консультация и план действий." },
        { id: "step2", title: "Очищение", desc: "Детоксикация организма." },
        { id: "step3", title: "Психология", desc: "Работа с причинами тяги." },
        { id: "step4", title: "Результат", desc: "Трезвая жизнь." },
      ],
      gallery: [ "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg", "/gallery/5.jpg", "/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg" ],
      articles: [
        { id: "a1", title: "Первые признаки зависимости", excerpt: "Как вовремя распознать проблему.", link: "https://telegra.ph/Persh%D1%96-oznaki-zalezhnost%D1%96-na-shcho-zvernuti-uvagu-01-24" },
        { id: "a2", title: "Созависимость в семье", excerpt: "Как выйти из роли спасателя.", link: "https://telegra.ph/Sp%D1%96vzalezhn%D1%96st-u-rodin%D1%96-pastka-ryat%D1%96vnika-01-24" },
        { id: "a3", title: "Программа 12 шагов", excerpt: "Самый эффективный метод в мире.", link: "https://telegra.ph/Programa-12-krok%D1%96v-chomu-ce-pracyuye-vzhe-90-rok%D1%96v-01-24" },
        { id: "a4", title: "Жизнь без срывов", excerpt: "Как сохранить трезвость.", link: "https://telegra.ph/ZHittya-p%D1%96slya-reab%D1%96l%D1%96tac%D1%96i-yak-uniknuti-zrivu-01-24" }
      ],
      reviews: [
        { id: "r1", name: "Александр", text: "Спасибо команде за поддержку. Условия комфортные.", date: "12.11.2025" },
        { id: "r2", name: "Татьяна", text: "Помогли начать все сначала. Благодарим.", date: "05.01.2026" },
        { id: "r3", name: "Игорь", text: "Реальный результат. Рекомендую центр.", date: "20.01.2026" }
      ],
      faq: [
        { question: "Это анонимно?", answer: "Да, гарантируем 100% конфиденциальность." },
        { question: "Длительность курса?", answer: "Индивидуально, обычно от 28 дней." },
        { question: "Есть помощь семье?", answer: "Да, группы поддержки для близких." }
      ],
      helpForFamily: {
        title: "Близкий не хочет помощи?",
        subtitle: "Знаем, как начать диалог мягко.",
        guideUrl: "https://telegra.ph/YAk-p%D1%96dtrimati-blizku-lyudinu-na-shlyahu-oduzhannya-10-27",
        advice: ["Не обвиняйте", "Создайте границы", "Обратитесь к профи", "Методы мотивации"]
      },
      form: { title: "Нужна консультация?", subtitle: "Перезвоним через 15 минут.", buttonText: "Получить помощь" },
      contacts: {
        phone: "+38 (068) 420 94 40",
        rawPhone: "380684209440",
        address: "г.Черновцы, ул. Хуторская, 23а",
        email: "maxrenes2020@gmail.com",
        socials: { telegram: "https://t.me/+380684209440", viber: "viber://chat?number=%2B380684209440", whatsapp: "https://wa.me/380684209440" }
      }
    },

    en: {
      metadata: {
        siteName: "Renaissance Center Chernivtsi — Anonymous Help & Rehab", 
        siteDescription: "Professional help for alcoholism, drug addiction, and gambling in Chernivtsi. 24/7. 15+ years of experience.",
      },
      ui: {
        servicePage: {
          backLink: "All Directions",
          locationSuffix: "in Chernivtsi",
          consultationLabel: "Free consultation:",
          atmosphereTitle: "Our Atmosphere",
          offersTitle: "What we offer:",
          ctaTitle: "Start today",
          ctaDesc: "Just talk to us. It's anonymous.",
          benefits: [
            { title: "Free Support", desc: "First consultation is free" },
            { title: "24/7 Anonymous", desc: "We are here for you" },
            { title: "Care", desc: "Safe environment" }
          ]
        }
      },
      navigation: {
        menuItems: [
          { id: "1", label: "Services", href: `/${currentLang}/#services` },
          { id: "2", label: "Articles", href: `/${currentLang}/#articles` },
          { id: "3", label: "Reviews", href: `/${currentLang}/#reviews` },
          { id: "4", label: "Contacts", href: `/${currentLang}/#contacts` },
        ],
      },
      hero: {
        title: "Professional Addiction Help in Chernivtsi",
        subtitle: "Returning to a full life with 24/7 support",
        cta: "Call us",
        backgroundImage: "/gallery/1.jpg", 
      },
      services: [
        { 
          id: "likuvannya-alkogolizmu", 
          title: "Alcoholism Treatment | Renaissance", 
          desc: "Anonymous help, safe detox, and psychological rehabilitation.",
          href: `/${currentLang}/services/likuvannya-alkogolizmu`,
          fullDesc: `Alcoholism treatment includes detoxification and the 12-step program.`,
          features: ["Physical recovery", "Psychological sessions", "Support groups", "Comfortable stay", "Anonymous support", "Family help"]
        },
        { 
          id: "likuvannya-narkomaniyi", 
          title: "Drug Rehab & Detox | Renaissance", 
          desc: "Comprehensive help for drug addiction.",
          href: `/${currentLang}/services/likuvannya-narkomaniyi`,
          fullDesc: `We provide 24/7 monitoring and modern addiction treatment methods.`,
          features: ["Detoxification", "24/7 Monitoring", "Modern methods", "Craving management", "Safe environment", "Confidentiality"]
        },
        { 
          id: "likuvannya-igromaniyi", 
          title: "Gambling Recovery | Renaissance", 
          desc: "Overcoming gambling and gaming addiction.",
          href: `/${currentLang}/services/likuvannya-igromaniyi`,
          fullDesc: `Behavioral therapy to regain control over your life and finances.`,
          features: ["Behavioral therapy", "Emotional stability", "Trigger analysis", "Family support", "Trust restoration", "New life goals"]
        },
        { 
          id: "dopomoga-rodini", 
          title: "Family Support | Renaissance", 
          desc: "Professional support for relatives and loved ones.",
          href: `/${currentLang}/services/dopomoga-rodini`,
          fullDesc: `Support groups and sessions for families dealing with addiction.`,
          features: ["Support groups", "Psychological aid", "Ending co-dependency", "Communication limits", "Family healing", "Expert advice"]
        }
      ],
      features: [
        { id: "f1", title: "100% Anonymity", desc: "Full confidentiality." },
        { id: "f2", title: "15+ Years", desc: "Qualified specialists." },
        { id: "f3", title: "Comfort", desc: "Cozy rooms." },
        { id: "f4", title: "24/7 Help", desc: "Monitoring." }
      ],
      steps: [
        { id: "step1", title: "Contact", desc: "Consultation and plan." },
        { id: "step2", title: "Detox", desc: "Body purification." },
        { id: "step3", title: "Therapy", desc: "Deep psychological work." },
        { id: "step4", title: "Sobriety", desc: "Healthy life." },
      ],
      gallery: [ "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg", "/gallery/5.jpg", "/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg" ],
      articles: [
        { id: "a1", title: "Signs of Addiction", excerpt: "How to recognize the problem.", link: "https://telegra.ph/Persh%D1%96-oznaki-zalezhnost%D1%96-na-shcho-zvernuti-uvagu-01-24" },
        { id: "a2", title: "Co-dependency", excerpt: "Help for the family.", link: "https://telegra.ph/Sp%D1%96vzalezhn%D1%96st-u-rodin%D1%96-pastka-ryat%D1%96vnika-01-24" },
        { id: "a3", title: "12 Steps", excerpt: "World's best method.", link: "https://telegra.ph/Programa-12-krok%D1%96v-chomu-ce-pracyuye-vzhe-90-rok%D1%96v-01-24" },
        { id: "a4", title: "Relapse Prevention", excerpt: "Living sober.", link: "https://telegra.ph/ZHittya-p%D1%96slya-reab%D1%96l%D1%96tac%D1%96i-yak-uniknuti-zrivu-01-24" }
      ],
      reviews: [
        { id: "r1", name: "Alex", text: "Thanks for the support. Great conditions.", date: "12.11.2025" },
        { id: "r2", name: "Tanya", text: "Helped us start over. Highly recommend.", date: "05.01.2026" },
        { id: "r3", name: "Igor", text: "Professional approach. Real result.", date: "20.01.2026" }
      ],
      faq: [
        { question: "Is it anonymous?", answer: "Yes, 100% confidential." },
        { question: "Course duration?", answer: "Starting from 28 days." },
        { question: "Family support?", answer: "Yes, we have groups for relatives." }
      ],
      helpForFamily: {
        title: "Loved one refuses help?",
        subtitle: "We know how to start.",
        guideUrl: "https://telegra.ph/YAk-p%D1%96dtrimati-blizku-lyudinu-na-shlyahu-oduzhannya-10-27",
        advice: ["Don't blame", "Set boundaries", "Consult experts", "Motivation"]
      },
      form: { title: "Need help?", subtitle: "We'll call you back.", buttonText: "Get Help" },
      contacts: {
        phone: "+38 (068) 420 94 40",
        rawPhone: "380684209440",
        address: "Chernivtsi, Khutirska St, 23a",
        email: "maxrenes2020@gmail.com",
        socials: { telegram: "https://t.me/+380684209440", viber: "viber://chat?number=%2B380684209440", whatsapp: "https://wa.me/380684209440" }
      }
    }
  };

  return translations[currentLang] || translations.ua;
}