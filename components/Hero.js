import Image from 'next/image';
import React, { useEffect } from 'react';
import ButtonBgPrimary from './ButtonBgPrimary';
import { TfiEmail } from "react-icons/tfi";
import ButtonIconSocial from './ButtonIconSocial';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import Link from 'next/link';
import TextTransition, { presets } from "react-text-transition";

function Hero() {
  const [index, setIndex] = React.useState(0);

  const profession = [
    "Web Developer",
    "Mobile Developer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section id="hero" className="mx-4 md:mt-20">
      <div className="flex flex-wrap flex-row-reverse">
        <div className="w-full flex items-center md:w-1/2 md:pl-4">
          <div className="inline-block md:mx-auto">
            <Image src="/profile-hero.jpg" height={450} width={450} className="rounded lg:rounded-full" alt="Profile Image" />
          </div>
        </div>
        <div className="w-full self-center md:w-1/2 mt-2">
          <h2 className="font-semibold text-primary text-lg font-Kanit md:text-2xl lg:text-3xl">{`Hi, I'm Eko Rahayu Widodo`}</h2>
          <h1 className="text-white font-Kanit font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-1">
            <TextTransition springConfig={presets.stiff}>{profession[index % profession.length]}</TextTransition>
        </h1>
          <p className="text-body font-Roboto text-sm mt-3 leading-relaxed lg:text-base lg:mt-4 lg:w-4/5">{`from Jakarta, Indonesia. Someone who is highly motivated to continue to grow, likes challenges and able to work in a team or individually. I always give the best effort for each projects I did and I give a solution with my creative app.`}</p>
          <div className="flex items-center mt-3 lg:mt-4">
            <ButtonBgPrimary to="mailto:ekorahy@gmail.com" icon={<TfiEmail />} className="mr-3" description="Email Me" />
            <ButtonIconSocial to="https://www.linkedin.com/in/eko-rahayu-widodo-989416231/" icon={<AiFillLinkedin />} color="text-body" title="button to Linkedin" />
            <ButtonIconSocial to="https://github.com/ekorahy" icon={<AiFillGithub />} color="text-body" title="button to Github" />
            <ButtonIconSocial to="https://www.instagram.com/ekorahy/" icon={<AiOutlineInstagram />} color="text-body" title="button to Instagram" />
            <ButtonIconSocial to="https://wa.me/+628813536127" icon={<AiOutlineWhatsApp />} color="text-body" title="button to WhatsApp" />
          </div>
          <div className="mt-3 lg:mt-4 lg:ml-2">
            <Link href="/" className="flex items-center transition duration-300 ease-in-out text-sm font-bold text-primary hover:text-fuchsia-600"><HiDownload className="text-lg mr-2" /> Download CV</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;