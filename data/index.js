import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
  ServiceIcon6,
} from "@/icons";

export const navbar = [
  {
    id: 1,
    url: "/about",
    title: "О компании",
  },
  {
    id: 2,
    url: "/contact",
    title: "Контакт",
  },
  {
    id: 3,
    url: "/projects",
    title: "Наши проекты",
  },
  {
    id: 4,
    url: "/partners",
    title: "Наши партнёры",
  },
];

export const footer = [
  {
    id: 1,
    name: "О компании",
    url: "/about"
  },
  {
    id: 2,
    name: "Контакт",
    url: "/contact"
  },
  {
    id: 3,
    name: "Блоги",
    url: "/blogs"
  },
  {
    id: 4,
    name: "Тарифные планы",
    url: "#pricing"
  },
];

export const statistics = [
  {
    id: 1,
    number: 70,
    title: "Лорем испум",
  },
  {
    id: 2,
    number: 15,
    title: "Лорем испум",
  },
  {
    id: 3,
    number: 4,
    title: "Лорем испум",
  },
];

export const services = [
  {
    id: 1,
    title: "Проектирование малой и средней мощности",
    desc: "Малая и средняя мощность играют важную роль в современной энергетике и технике. Проектирование систем средней мощности требует специализированных знаний и опыта, чтобы эффективно использовать ресурсы и обеспечивать устойчивую энергетическую производительность.",
    icon: ServiceIcon1,
  },
  {
    id: 2,
    title: "План расположения оборудований и кабелей",
    desc: "Планирование расположения оборудования и кабелей является ключевым этапом в процессе разработки инфраструктуры.",
    icon: ServiceIcon2,
  },
  {
    id: 3,
    title: "Подготовка документации по дизельной электро-станции",
    desc: "Подготовка документации по дизельной электро-станции - это неотъемлемый этап в создании и эксплуатации данного энергетического объекта.",
    icon: ServiceIcon3,
  },
  {
    id: 4,
    title: "Расчет мощности электроустановок",
    desc: "Расчет мощности электроустановок - важный этап в проектировании и эксплуатации энергетических систем. Этот процесс направлен на определение необходимой электрической мощности, обеспечивающей эффективное функционирование установки в соответствии с требованиями и стандартами.",
    icon: ServiceIcon4,
  },
  {
    id: 5,
    title: "Система снабжение топливом",
    desc: "Система снабжения топливом представляет собой ключевой компонент в инфраструктуре, обеспечивающей поступление топлива для различных видов энергетических установок.",
    icon: ServiceIcon5,
  },
  {
    id: 6,
    title: "Система автоматизации и пожарной безопасности",
    desc: "Система автоматизации и пожарной безопасности представляет собой комплексное решение, обеспечивающее эффективное управление процессами и защиту от возможных пожаров.",
    icon: ServiceIcon6,
  },
];

export const pricing = [
  {
    id: 1,
    price: "$10",
    name: "Базовый план",
    desc: "Счет выставляется ежегодно.",
    isSupport: false,
    buttonText: "Learn more",
    features: [
      {
        id: 1,
        title: "Доступ ко всем основным функциям",
      },
      {
        id: 2,
        title: "Базовая отчетность и аналитика",
      },
      {
        id: 3,
        title: "До 10 пользователей",
      },
      {
        id: 4,
        title: "20 ГБ индивидуальных данных",
      },
    ],
  },
  {
    id: 2,
    price: "$20",
    name: "Бизнес-план",
    desc: "Счет выставляется ежегодно.",
    isSupport: true,
    buttonText: "Learn more",
    features: [
      {
        id: 1,
        title: "Более 200 интеграций",
      },
      {
        id: 2,
        title: "Расширенная отчетность",
      },
      {
        id: 3,
        title: "До 20 пользователей",
      },
      {
        id: 4,
        title: "40 ГБ индивидуальных данных",
      },
    ],
  },
  {
    id: 3,
    price: "$40",
    name: "Корпоративный план",
    desc: "Счет выставляется ежегодно.",
    isSupport: false,
    buttonText: "Learn more",
    features: [
      {
        id: 1,
        title: "Расширенные поля",
      },
      {
        id: 2,
        title: "Журнал история данных",
      },
      {
        id: 3,
        title: "Неограниченное пользователей",
      },
      {
        id: 4,
        title: "Неограниченное пользователей",
      },
    ],
  },
];

export const clients = [
  {
    id: 1,
    photo: "/images/client-1.jpg",
    comment:
      "Отличный выбор генераторов на этом сайте! Я заказала здесь свой генератор, и качество обслуживания меня приятно удивило. Быстрая обработка заказа и оперативная доставка. Спасибо за профессионализм!",
    name: "Елена Смирнова",
    companyLogo: "/images/partners/3.png"
  },
  {
    id: 2,
    photo: "/images/client-2.jpg",
    comment:
      "Сайт очень удобный в использовании. Нашел здесь подробную информацию о генераторах, что помогло мне сделать правильный выбор. Обслуживание клиентов на высшем уровне. Рекомендую!",
    name: "Александр Иванов",
    companyLogo: "/images/partners/1.png"
  },
  {
    id: 3,
    photo: "/images/client-3.jpg",
    comment:
      "Заказала генератор для загородного дома на этом сайте. Процесс покупки был легким и прозрачным. Генератор пришел в указанные сроки, и работает отлично. Благодарю за отличное обслуживание!",
    name: "Ольга Козлова",
    companyLogo: "/images/partners/2.png"
  },
  {
    id: 4,
    photo: "/images/client-4.jpg",
    comment:
      "Очень удовлетворен работой сайта. Внимательные менеджеры, готовые помочь в любой ситуации. Генератор, который я заказал, полностью соответствует моим ожиданиям. Большое спасибо за отличный сервис!",
    name: "Дмитрий Николаев",
    companyLogo: "/images/partners/6.png"
  }
];

export const partners = [
  {
    id: 1,
    logo: "/images/partners/1.png",
  },
  {
    id: 2,
    logo: "/images/partners/2.png",
  },
  {
    id: 3,
    logo: "/images/partners/3.png",
  },
  {
    id: 4,
    logo: "/images/partners/4.png",
  },
  {
    id: 5,
    logo: "/images/partners/5.png",
  },
  {
    id: 6,
    logo: "/images/partners/6.png",
  },
  {
    id: 7,
    logo: "/images/partners/7.png",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Как начать покупку генератора на вашем сайте?",
    answer:
      "Перейдите на главную страницу и нажмите кнопку 'Купить'. Затем следуйте инструкциям для оформления заказа и введите необходимую информацию.",
  },
  {
    id: 2,
    question: "Чем отличаются различные типы генераторов, представленные на вашем сайте?",
    answer:
      "Наши генераторы различаются по мощности, типу топлива, размеру и дополнительным функциям. Вы можете выбрать оптимальный вариант в зависимости от ваших потребностей.",
  },
  {
    id: 3,
    question: "Каковы условия гарантии на ваши генераторы?",
    answer:
      "Мы предоставляем гарантию на все наши генераторы в течение определенного периода времени. Пожалуйста, ознакомьтесь с разделом 'Гарантия' для получения подробной информации.",
  },
  {
    id: 4,
    question: "Какие методы оплаты вы принимаете?",
    answer:
      "Мы принимаем различные методы оплаты, включая банковские карты, электронные платежи и другие удобные варианты. Все подробности указаны на странице оформления заказа.",
  },
  {
    id: 5,
    question: "Каковы сроки доставки генератора?",
    answer:
      "Сроки доставки зависят от вашего местоположения. После оформления заказа вы получите подробную информацию о времени доставки.",
  },
];

export const generators = [
  {
    id: 1,
    photo: "/images/alimator.png"
  },
  {
    id: 2,
    photo: "/images/generator.png"
  },
  {
    id: 3,
    photo: "/images/generator-1.png"
  },
  // {
  //   id: 4,
  //   photo: "/images/generator-4.png"
  // },
]

export const projects = [
  {
    id: 1,
    name: "Tashkent City Hilton Hotel and Congress center",
    photo: "/images/projects/1.jpg",
    numberInfos: [
      {
        id: 1,
        title: "2 x 2250 kVA",
      },
      {
        id: 2,
        title: "2 x 2000kVA",
      },
      {
        id: 3,
        title: "4 x 1675 kVA",
      },
      {
        id: 4,
        title: "ATS for 4 units of generators",
      },
    ]
  },
  {
    id: 2,
    name: "Tashkent City Hilton Hotel and Congress center",
    photo: "/images/projects/1.jpg",
    numberInfos: [
      {
        id: 1,
        title: "2 x 2250 kVA",
      },
      {
        id: 2,
        title: "2 x 2000kVA",
      },
      {
        id: 3,
        title: "4 x 1675 kVA",
      },
      {
        id: 4,
        title: "ATS for 4 units of generators",
      },
    ]
  },
  {
    id: 3,
    name: "Tashkent City Hilton Hotel and Congress center",
    photo: "/images/projects/1.jpg",
    numberInfos: [
      {
        id: 1,
        title: "2 x 2250 kVA",
      },
      {
        id: 2,
        title: "2 x 2000kVA",
      },
      {
        id: 3,
        title: "4 x 1675 kVA",
      },
      {
        id: 4,
        title: "ATS for 4 units of generators",
      },
    ]
  },
  {
    id: 4,
    name: "Tashkent City Hilton Hotel and Congress center",
    photo: "/images/projects/1.jpg",
    numberInfos: [
      {
        id: 1,
        title: "2 x 2250 kVA",
      },
      {
        id: 2,
        title: "2 x 2000kVA",
      },
      {
        id: 3,
        title: "4 x 1675 kVA",
      },
      {
        id: 4,
        title: "ATS for 4 units of generators",
      },
    ]
  },
  {
    id: 4,
    name: "Tashkent City Hilton Hotel and Congress center",
    photo: "/images/projects/1.jpg",
    numberInfos: [
      {
        id: 1,
        title: "2 x 2250 kVA",
      },
      {
        id: 2,
        title: "2 x 2000kVA",
      },
      {
        id: 3,
        title: "4 x 1675 kVA",
      },
      {
        id: 4,
        title: "ATS for 4 units of generators",
      },
    ]
  },
]