import React from 'react';
   import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
   import useBaseUrl from '@docusaurus/useBaseUrl';
   import Layout from '@theme/Layout';
   import styles from './index.module.css';
   import { JSX } from 'react';

   export default function Home(): JSX.Element {
     const {siteConfig} = useDocusaurusContext();
     return (
       <Layout
         title={`${siteConfig.title}`}
         description="Fundamental concepts, tools, processes, and best practices">
         <main className={styles.heroBanner}>
           <div className="container">
             <img 
               src={useBaseUrl('/img/glossary-logo.svg')}
               alt="API Docs Glossary Logo" 
               className={styles.logo}
             />
           </div>
         </main>
       </Layout>
     );
   }