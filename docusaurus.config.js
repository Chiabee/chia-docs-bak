const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Chia Documentation',
  tagline: 'A new blockchain and smart transaction platform that is easier to use, more efficient, and secure.',
  url: 'https://docs.chia.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/chia_leaf_green.svg',
  organizationName: 'Chia-Network', // Usually your GitHub org/user name.
  projectName: 'chia-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cn'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Chia-Network/chia-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: ' Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/chia_logo.svg',
        },
        items: [
          {to: 'https://www.chia.net/approach/', label: 'Approach', position: 'right'},
          {to: 'https://www.chia.net/technology/', label: 'Technology', position: 'right'},
          {to: 'https://www.chia.net/developers/', label: 'Developers', position: 'right'},
          {to: 'https://www.chia.net/blog/', label: 'Blog', position: 'right'},
          {to: 'https://www.chia.net/news/', label: 'News', position: 'right'},
          {to: 'https://www.chia.net/about/', label: 'About', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Approach',
            items: [
              {
                label: 'White Paper',
                to: 'https://www.chia.net/approach',
              },
            ],
          },
          {
            title: 'Technology',
            items: [
              {
                label: 'Green Paper',
                to: 'https://www.chia.net/greenpaper',
              },
              {
                label: 'Consensus 1.1',
                to: 'https://www.chia.net/assets/Chia-New-Consensus-0.9.pdf',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Grants',
                to: 'https://www.chia.net/grants',
              },
              {
                label: 'Chialisp',
                to: 'https://www.chialisp.com',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                to: 'https://chia.net/about',
              },
              {
                label: 'Blog',
                to: 'https://chia.net/blog',
              },
              {
                label: 'Contact',
                to: 'https://chia.net/contact',
              },
            ],
          },
        ],
        copyright: `© Chia Network ${new Date().getFullYear()} | <a href="https://www.chia.net/terms">Terms</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
