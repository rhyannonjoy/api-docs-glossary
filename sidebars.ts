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
    'get-started',
    'quick-reference',
    {
     type: 'category',
     label: 'Core Concepts',
     items: [
       'core-concepts/api-fundamentals',
       'core-concepts/documentation-specific'
    ],
   },
    'api-types-architectures',
    'ai-and-apis',
    {
     type: 'category',
     label: 'Tools & Techniques',
     items: [
       'tools-techniques/development-essentials',
       'tools-techniques/diagramming-visualization',
       'tools-techniques/documentation-specific',
       'tools-techniques/infrastructure-platforms',
       'tools-techniques/testing-validation',
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