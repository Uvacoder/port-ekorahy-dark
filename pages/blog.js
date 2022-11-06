import Head from 'next/head';
import React from 'react';
import UnderDevelopmentSection from '../components/UnderDevelopmentSection';

function blog() {
  return (
    <>
      <Head>
        <title>Blog - Ekorahy</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <main className="mt-8 mb-20 md:mt-10 md:container">
        <section id="blog" className="mt-20 mx-4">
          <UnderDevelopmentSection />
        </section>
      </main>
    </>
  );
}

export default blog;