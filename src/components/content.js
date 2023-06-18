export const mailto = "mailto:federico@federic.ooo";
export const work = [
  {
    title: "Dissolution",
    url: "https://dissolution.itsoffbrand.com/",
    agency: "itsoffbrand",
    agencyUrl: "https://www.itsoffbrand.com/",
    date: "2023",
  },
  {
    title: "Offfice Studio",
    url: "https://offficestud.io",
    date: "2023",
  },
  {
    title: "Loewe Craft Prize",
    url: "https://craftprizeexhibition.loewe.com/",
    agency: "gigadesignstudio",
    agencyUrl: "https://www.gigadesignstudio.com/",
    date: "2023",
  },
  // {
  //   title: "Gabriel Contassot",
  //   url: "gabrielcontassot.com/",
  //   // agency: "gigadesignstudio",
  //   agencyUrl: "https://www.gigadesignstudio.com/",
  //   date: "2023",
  // },
  // {
  //   title: "Filippo Ruffini",
  //   url: "filipporuffini.com/",
  //   agency: "@IlyaVH",
  //   agencyUrl: "https://www.gigadesignstudio.com/",
  //   date: "2023",
  // },
];

// ------ LINKS
const base = "/s/";
const defaults = {
  hidden: false,
};

export const links = {
  social: [
    // {
    //   ...defaults,
    //   title: "Instagram",
    //   url: base + "instagram",
    //   hidden: true,
    // },
    // {
    //   ...defaults,
    //   title: "Awwwards",
    //   url: base + "awwwards",
    // },
    {
      ...defaults,
      title: "Twitter",
      url: base + "twitter",
    },
    {
      ...defaults,
      title: "Dribbble",
      url: base + "dribbble",
    },
    {
      ...defaults,
      title: "Behance",
      url: base + "behance",
    },
    {
      ...defaults,
      title: "Savee",
      url: base + "savee",
    },
    {
      ...defaults,
      title: "Linkedin",
      url: base + "linkedin",
    },
  ],
  code: [
    {
      ...defaults,
      title: "Github",
      url: base + "github",
    },
    {
      ...defaults,
      title: "CodeSandbox",
      url: base + "codesandbox",
    },
  ],
};