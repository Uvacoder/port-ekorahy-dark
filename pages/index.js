import Head from 'next/head';
import AffirmationSection from '../components/AffirmationSection';
import Education from '../components/Education';
import Experiences from '../components/Experiences';
import Hero from '../components/Hero';
import SelectedProject from '../components/SelectedProject';
import SoftSkill from '../components/SoftSkill';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eko Rahayu Widodo | Web Developer | Mobile Developer</title>
        <meta
          name="description"
          content="Front-end Web developer portfolio | make your website modern and minimalist using React.js."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <main className="mt-8 mb-20 md:mt-10 md:container">
        <Hero />
        <Education />
        <Experiences />
        <SelectedProject />
        <TechStack />
        <AffirmationSection />
        <SoftSkill />
      </main>
    </>
  )
}
