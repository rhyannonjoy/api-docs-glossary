import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'introduction',
    'getting-started',
    'quick-reference',
    'core-concepts',
    'api-types-architectures',
    'ai-and-apis',
    'tools-techniques',
    {
     type: 'category',
     label: 'Tools & Techniques - Temp',
     items: [
       'tools-techniques-temp/development-essentials',
       'tools-techniques-temp/documentation-specific',
       'tools-techniques-temp/testing-validation',
    ],
   },
    'workflows-methodologies',
    'frameworks-strategy',
    'writing-style',
    {
     type: 'category',
     label: 'Meta',
     items: [
       'meta/how-glossary-built',
       'meta/style-guide',
       'meta/contribution-guide',
    ],
   },
  ],
};

export default sidebars;