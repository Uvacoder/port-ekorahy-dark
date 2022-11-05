import React from 'react';
import Image from 'next/image';
import LinkBackHome from '../components/LinkBackHome';
import Head from 'next/head';

function Error404() {
  return (
    <>
      <Head>
        <title>ERROR 404 | Page Not Found</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <main className="mt-8 mb-20 md:mt-10 md:container">
        <section id="error404" className="mt-20 mx-4">
          <div className="w-full min-h-screen text-center block mx-auto">
            <h1 className="text-secondary font-Bungee text-2xl font-bold md:text-3xl">- ERROR 404 -</h1>
            <h2 className="text-lg text-secondary font-Kanit font-bold lg:text-xl">Page Not Found</h2>
            <p className="text-body font-Kanit font-light text-sm">Sorry, the URL you requested was not found on this server</p>
            <Image src="/illustration_of_error_404.png" className="mx-auto my-4" height={500} width={500} alt="illustration image for error page 404" />
            <LinkBackHome />
          </div>
        </section>
      </main>
    </>
  );
}

export default Error404;