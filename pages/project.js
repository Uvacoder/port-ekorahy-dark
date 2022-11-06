import Head from 'next/head';
import React from 'react';
import UnderDevelopmentSection from '../components/UnderDevelopmentSection';

function project() {
  return (
    <>
      <Head>
        <title>All Project - Ekorahy</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <main className="mt-8 mb-20 md:mt-10 md:container">
        <section id="project" className="mt-20 mx-4">
          <UnderDevelopmentSection />
        </section>
      </main>
    </>
  );
}

export default project;