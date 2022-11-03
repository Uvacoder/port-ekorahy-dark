import Link from 'next/link';
import React from 'react';
import ButtonBgPrimary from './ButtonBgPrimary';
import { TfiEmail } from "react-icons/tfi";

function AffirmationSection() {
  return (
    <section id="affirmationSection" className="bg-body/10 p-6 flex flex-wrap justify-center items-center mt-20 mx-4 md: lg:justify-between">
      <p className="text-white font-Kanit font-bold text-lg sm:mr-8 lg:text-xl">Interested Working with Me?</p>
      <div className="flex items-center mt-2">
        <Link href="/" className="p-3 border border-primary text-white text-center text-sm font-bold rounded mr-3 hover:border-fuchsia-600 sm:px-4 md:px-5 lg:px-6" >See More Project</Link>
        <ButtonBgPrimary to="/" icon={<TfiEmail />} description="Email Me" />
      </div>
    </section>
  );
}

export default AffirmationSection;