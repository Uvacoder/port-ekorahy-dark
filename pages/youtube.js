import React from 'react';
import Head from 'next/head';
import UnderDevelopmentSection from '../components/UnderDevelopmentSection';

function youtube() {
  return (
    <>
      <Head>
        <title>Blog | Ekorahy</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <main className="mt-8 mb-20 md:mt-10 md:container">
        <section id="youtube" className="mt-20 mx-4">
          <UnderDevelopmentSection />
        </section>
      </main>
    </>
  );
}

export default youtube;