// gitprofile.config.js

const config = {
  github: {
    username: 'sdxqw', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://sdxqw.github.io',
    phone: '',
    email: 'xntrowdev@gmail.com',
  },
  skills: [
    'Java',
    'JavaScript',
    'Kotlin',
    'HTML',
    'CSS',
    'C++',
    'C#',
    'Lua',
    'PHP',
    'Python',
  ],
  experiences: [
    {
      company: 'DarkClient Team',
      position: 'Developer',
      from: '',
      to: '',
    },
    {
      company: 'Verish Optimizer',
      position: 'Developer',
      from: '',
      to: '',
    },
  ],
  education: [],
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme
    customTheme: { },
  },
};

export default config;
