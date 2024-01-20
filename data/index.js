import { ServiceIcon1, ServiceIcon2, ServiceIcon3, ServiceIcon4, ServiceIcon5, ServiceIcon6 } from "@/icons";

export const navbar = [
  {
    id: 1,
    url: "/about",
    title: "О компании",
  },
  {
    id: 2,
    url: "/services",
    title: "Наши услуги",
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
    name: "Company",
    links: [
      {
        id: 1,
        url: "/about",
        name: "About",
      },
      {
        id: 2,
        url: "/contact",
        name: "Contact",
      },
      {
        id: 3,
        url: "/blogs",
        name: "Blogs",
      },
    ],
  },
  {
    id: 2,
    name: "Legal",
    links: [
      {
        id: 1,
        url: "/about",
        name: "About",
      },
      {
        id: 2,
        url: "/privacy-policy",
        name: "Privacy Policy",
      },
      {
        id: 3,
        url: "/term-services",
        name: "Terms & Services",
      },
      {
        id: 4,
        url: "/term-use",
        name: "Terms of Use",
      },
      {
        id: 5,
        url: "/refund-policy",
        name: "Refund Policy",
      },
    ],
  },
  {
    id: 3,
    name: "Quick Links",
    links: [
      {
        id: 1,
        url: "/techlabz-keybox",
        name: "Techlabz Keybox",
      },
      {
        id: 2,
        url: "/techlabz-keybox",
        name: "Techlabz Keybox",
      },
      {
        id: 3,
        url: "/downloads",
        name: "Downloads",
      },
      {
        id: 3,
        url: "/forum",
        name: "Forum",
      },
    ],
  },
];

export const statistics = [
  {
    id: 1,
    number: 70,
    title: "Lorem ispum",
  },
  {
    id: 2,
    number: 15,
    title: "Lorem ispum",
  },
  {
    id: 3,
    number: 4,
    title: "Lorem ispum",
  },
];

export const services = [
  {
    id: 1,
    title: "Проектирование малой и средней мощности",
    desc: "Phasellus suspendisse non, convallis quam aliquet volutpat. Netus cras quam orc.",
    icon: ServiceIcon1,
  },
  {
    id: 2,
    title: "План расположения оборудований и кабелей",
    desc: "Diam eu, mauris, in amet viverra. Eget ut scelerisque eget nibh ut quis.",
    icon: ServiceIcon2,
  },
  {
    id: 3,
    title: "Подготовка документации по дизельной электро-станции",
    desc: "Velit, rutrum a cursus eleifend egestas.",
    icon: ServiceIcon3,
  },
  {
    id: 4,
    title: "Расчет мощности электроустановок",
    desc: "Расчеты и планы питающих сетей,  расчет электрических щитов,  расчет нагрузки,  планы заземления контура.",
    icon: ServiceIcon4,
  },
  {
    id: 5,
    title: "Система снабжение топливом",
    desc: "Tellus rhoncus enim nisl et lorem in sed. Congue nunc est habitant quam lectus neque.",
    icon: ServiceIcon5,
  },
  {
    id: 6,
    title: "Система автоматизации и пожарной безопасности",
    desc: "Pretium sodales vitae id gravida tempor. Erat adipiscing orci turpis fames nunc, id diam.",
    icon: ServiceIcon6,
  },
];
