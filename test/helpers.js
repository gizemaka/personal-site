const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Cem Aslan',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Cem Aslan',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Cem Aslan',
    heading: 'PROJECTS',
  },
  // {
  //   route: '/stats',
  //   title: 'Stats | Cem Aslan',
  //   heading: 'STATS',
  // },
  {
    route: '/contact',
    title: 'Contact | Cem Aslan',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
