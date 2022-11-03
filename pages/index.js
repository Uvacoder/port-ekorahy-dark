import Head from 'next/head';
import AffirmationSection from '../components/AffirmationSection';
import Hero from '../components/Hero';
import SelectedProject from '../components/SelectedProject';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eko Rahayu Widodo | Front-End Developer</title>
        <meta
          name="description"
          content="Front-end Web developer portfolio | make your website modern and minimalist using React.js."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <main className="md:py-10 md:container">
        <Hero />
        <SelectedProject />
        <TechStack />
        <AffirmationSection />
      </main>
    </>
  )
}
