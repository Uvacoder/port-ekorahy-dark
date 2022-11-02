import Image from 'next/image';
import React from 'react';
import ButtonBgPrimary from './ButtonBgPrimary';
import { SiGmail } from "react-icons/si";
import ButtonIconSocial from './ButtonIconSocial';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import Link from 'next/link';

function Hero() {
  return (
    <section id="hero" className="mt-8 mx-4">
      <div className="flex flex-wrap flex-row-reverse">
        <div className="w-full flex items-center md:w-1/2 md:pl-4">
          <div className="inline-block md:mx-auto">
            <Image src="/profile-hero.jpg" height={450} width={450} className="rounded lg:rounded-full" alt="Profile Image" />
          </div>
        </div>
        <div className="w-full self-center md:w-1/2 mt-2">
          <h2 className="font-semibold text-primary text-lg font-Kanit md:text-2xl lg:text-3xl">{`Hi, I'm Eko Rahayu Widodo`}</h2>
          <h1 className="text-secondary font-Kanit font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-1">Front-End Web Developer.</h1>
          <p className="text-body font-Roboto text-sm mt-3 leading-relaxed lg:text-base lg:mt-4 lg:w-4/5">{`from Jakarta, Indonesia. Someone who is highly motivated to continue to grow, likes challenges and able to work in a team or individually. I always give the best effort for each projects I did and I give a solution with my creative app.`}</p>
          <div className="flex items-center mt-2 lg:mt-4">
            <ButtonBgPrimary to="/" icon={<SiGmail />} description="Email Me" />
            <ButtonIconSocial to="/" icon={<AiFillLinkedin />} color="text-linkedin" title="button to Linkedin" />
            <ButtonIconSocial to="/" icon={<AiFillGithub />} color="text-github" title="button to Github" />
            <ButtonIconSocial to="/" icon={<AiOutlineInstagram />} color="text-instagram" title="button to Instagram" />
            <ButtonIconSocial to="/" icon={<AiOutlineWhatsApp />} color="text-whatsapp" title="button to WhatsApp" />
          </div>
          <div className="mt-2 md:ml-1 lg:mt-4 lg:ml-2">
            <Link href="/" className="flex items-center text-sm font-bold text-primary hover:text-fuchsia-600"><HiDownload className="text-lg mr-2" /> Download CV</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;