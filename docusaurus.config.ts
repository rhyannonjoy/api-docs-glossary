import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'API Documentation Glossary',
  tagline: 'Fundamental concepts, tools, processes, and best practices',
  url: 'https://rhyannonjoy.github.io',
  baseUrl: '/api-docs-glossary/',
  organizationName: 'rhyannonjoy', // Usually your GitHub org/user name.
  projectName: 'api-docs-glossary', // Usually your repo name.
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  // Add custom fields to access env variables
  customFields: {
    posthogApiKey: process.env.DOCUSAURUS_POSTHOG_API_KEY,
    posthogAppUrl: process.env.DOCUSAURUS_POSTHOG_APP_URL || 'https://us.i.posthog.com',
  },

  // Add PostHog plugin here
  plugins: [
    [
      'posthog-docusaurus',
      {
        apiKey: process.env.DOCUSAURUS_POSTHOG_API_KEY || 'placeholder',
        appUrl: process.env.DOCUSAURUS_POSTHOG_APP_URL || 'https://us.i.posthog.com',
        enableInDevelopment: false, // set to true only for local testing, never deploy as true
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    tableOfContents: {
    minHeadingLevel: 2,
    maxHeadingLevel: 4, // Shows h2, h3, and h4
    },
    navbar: {
      title: 'API Docs Glossary',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Explore',
        },
        {
          href: 'https://github.com/rhyannonjoy/api-docs-glossary',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // Your footer links
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rhyannon Rodriguez`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Add custom CSS
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;500;600;700&display=swap',
      rel: 'stylesheet',
    },
  ],

  themes: [
    '@docusaurus/theme-mermaid',
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      indexDocs: true,
      indexBlog: false,
    },
  ],
]
};

export default config;
