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
        <title>Eko Rahayu Widodo - Web and Mobile Developer</title>
        <meta
          name="description"
          content="Hi there👋, welcome to my profile, I'm Eko Rahayu Widodo Web and Mobile Developer from Jakarta Indonesia. Someone who is highly motivated to continue to grow, likes challenges and able to work in a team or individually. I always give the best effort for each projects I did and I give a solution with my creative app."
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
