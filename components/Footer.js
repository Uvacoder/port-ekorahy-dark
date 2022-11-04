import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonIconSocial from './ButtonIconSocial';
import { AiFillLinkedin, AiFillGithub, AiFillYoutube, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

function Footer() {
  return (
    <footer className="w-full bg-bgSecondary">
      <div className="flex flex-col p-4 md:container md:px-12 md:flex-row">
        <div className="flex flex-col border-b border-body md:justify-center md:border-none">
          <Image src="/logo.png" className="pr-6 md:mx-auto md:pr-2 lg:pr-0" width={70} height={70} alt="logo ekorahy image" />
          <h1 className="text-xl font-Kanit font-bold text-primary my-1">Ekorahy</h1>
        </div>
        <div className="flex flex-col mt-2 w-full md:items-end">
          <h2 className="font-Kanit text-white font-bold text-lg lg:text-2xl">Get in touch</h2>
          <p className="font-Roboto text-body text-sm">For business inquiry please send email to <Link href="mailto:ekorahy@gmail.com" className="transition duration-300 ease-in-out underline font-semibold hover:text-white">ekorahy@gmail.com</Link></p>
          <div className="flex items-center mt-3 lg:mt-4">
            <ButtonIconSocial to="/" icon={<AiFillLinkedin />} color="text-body" title="button to Linkedin" />
            <ButtonIconSocial to="/" icon={<AiFillGithub />} color="text-body" title="button to Github" />
            <ButtonIconSocial to="/" icon={<AiFillYoutube />} color="text-body" title="button to Youtube" />
            <ButtonIconSocial to="/" icon={<AiOutlineInstagram />} color="text-body" title="button to Instagram" />
            <ButtonIconSocial to="/" icon={<AiOutlineWhatsApp />} color="text-body" title="button to WhatsApp" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;