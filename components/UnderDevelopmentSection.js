import React from 'react';
import Image from 'next/image';
import LinkBackHome from './LinkBackHome';

function UnderDevelopmentSection() {
  return (
    <div className="w-full h-max text-center block mx-auto">
        <h1 className="text-primary font-Bungee text-2xl font-bold md:text-3xl">- Coming Soon -</h1>
        <h2 className="text-lg text-primary font-Kanit font-bold lg:text-xl">This page is under Development</h2>
        <p className="text-body font-Kanit font-light text-sm">{`We'll be launching soon, please try again later :)`}</p>
        <Image src="/illustration_of_development.png" className="mx-auto my-4" height={500} width={500} alt="illustration image for development" />
        <LinkBackHome />
      </div>
  );
}

export default UnderDevelopmentSection;