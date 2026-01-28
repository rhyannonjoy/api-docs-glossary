import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './index.module.css';
import { JSX } from 'react';

function HeroContent() {
  const {colorMode} = useColorMode();
  
  // Choose logo based on current theme
  const logoSrc = colorMode === 'dark' ? '/img/glossary-logo.png' : '/img/light-logo.png';
  
  return (
    <main className={styles.heroBanner}>
      <div className="container">
        <img 
          src={useBaseUrl(logoSrc)}
          alt="API Docs Glossary Logo" 
          className={styles.logo}
        />
      </div>
    </main>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Fundamental concepts, tools, processes, and best practices">
      <HeroContent />
    </Layout>
  );
}