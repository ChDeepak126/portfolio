// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ChDeepak126', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Featured Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
        'ChDeepak126/mvc-auth-app-main',
        'ChDeepak126/postgresql-relationships-api',
        'ChDeepak126/amazone-clone',
        'ChDeepak126/express-auth-system',
        'ChDeepak126/mern-crud-app',
        'ChDeepak126/react-chatbot',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {

    },
  },
 seo: {
  title: 'Deepak Chillarige | Full Stack Developer',
  description:
    'Deepak Chillarige is a Computer Science student at VVIT with an interest in full-stack development, backend engineering, React, Node.js, Express.js, MongoDB and PostgreSQL.',
  imageURL: '',
},
social: {
  linkedin: 'chillarigedeepak',
  x: '',
  mastodon: '',
  researchGate: '',
  facebook: '',
  instagram: '',
  reddit: '',
  threads: '',
  youtube: '',
  udemy: '',
  dribbble: '',
  behance: '',
  medium: '',
  dev: '',
  stackoverflow: '',
  discord: '',
  telegram: '',
  website: '',
  phone: '',
  email: 'chdeepak623@gmail.com',
},
  resume: {
    fileUrl:
      'https://chdeepak126.github.io/portfolio/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
  'Python',
  'JavaScript',
  'C',
  'SQL',
  'HTML5',
  'CSS3',
  'React.js',
  'Vite',
  'Node.js',
  'Express.js',
  'REST APIs',
  'Passport.js',
  'MongoDB',
  'PostgreSQL',
  'Git',
  'GitHub',
  'Jasmine',
  ],
  experiences: [
  ],
  certifications: [
     {
    name: 'AWS Certified Cloud Practitioner',
    body: 'Amazon Web Services (AWS)',
    year: '',
    link: 'https://www.credly.com/badges/eedac3f3-0d06-4785-8541-d46d8dc4ed92/public_url',
  },
  {
    name: 'Red Hat System Administration I (RH124)',
    body: 'Red Hat | Version 9.3',
    year: '',
    link: 'https://www.credly.com/badges/e37da6fa-eda2-4583-8865-77b04017205f/public_url',
  },
  {
    name: 'Introduction to Cybersecurity',
    body: 'Credly',
    year: '',
    link: 'https://www.credly.com/badges/2ab2574a-8dc1-4827-92fe-0a03aa203045/public_url',
  },
  {
    name: 'MongoDB Node.js Developer Path',
    body: 'MongoDB | Course completion | Credential ID: MDBkcubawhnkd',
    year: 'October 2026',
    link: 'https://chdeepak126.github.io/portfolio/certificates/mongodb-nodejs-developer-path.pdf',
  },
  {
    name: 'Introduction to MongoDB',
    body: 'Simplilearn SkillUp',
    year: '',
    link: 'https://simpli-web.app.link/e/g70N7CN4J7b',
  },
  {
    name: 'Introduction to Computer Networking',
    body: 'Simplilearn SkillUp',
    year: '',
    link: 'https://simpli-web.app.link/e/uLtGh8W4J7b',
  },
  ],
  educations: [
    {
    institution:
      'Vasireddy Venkatadri Institute of Technology',
    degree:
      'Bachelor of Engineering in Computer Science | CGPA: 8.79/10 | Specialization: Cybersecurity, Blockchain Technology and IoT',
    from: 'August 2024',
    to: 'May 2028 (Expected)',
  },
  {
    institution: 'Chalapathi Junior College',
    degree: 'Class XII (MPC) | 96.2%',
    from: 'June 2022',
    to: 'March 2024',
  },
  {
    institution: 'St Josephs High School',
    degree: 'Secondary Education (Class X) | 87%',
    from: 'June 2021',
    to: 'March 2022',
  },
  ],
  publications: [
   
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  source: 'dev',
  username: '',
  limit: 2,
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Built with ❤️ by Deepak Chillarige | Powered by GitProfile`,

  enablePWA: true,
};

export default CONFIG;
