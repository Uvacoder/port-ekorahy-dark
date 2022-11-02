import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function NavLink({to, children}) {
  const router = useRouter();

  return <Link href={to} className={`flex items-center font-medium font-Kanit p-4 hover:text-primary active:text-primary ${router.asPath === to ? "text-primary" : "text-body"}`}>
    {children}
  </Link>
}

function NavLinkMobile({to, setOpen, children}) {
  const router = useRouter();

  return <Link href={to} className={`px-8 text-center py-3 font-medium text-md border-b hover:text-primary ${router.asPath === to ? "text-primary" : "text-body"}`} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
    {children}
  </Link>
}

function MobileNav({open, setOpen}) {
  return (
    <div className={`absolute top-12 right-10 h-max w-max px-2 rounded-lg bg-white transform ${open ? "visible" : "hidden"} drop-shadow-xl`}>
        <div className="flex flex-col">
          <NavLinkMobile to="/" setOpen={setOpen}>Home</NavLinkMobile>
          <NavLinkMobile to="/project" setOpen={setOpen}>Project</NavLinkMobile>
          <NavLinkMobile to="/youtube" setOpen={setOpen}>Youtube</NavLinkMobile>
          <NavLinkMobile to="/blog" setOpen={setOpen}>Blog</NavLinkMobile>
          <NavLinkMobile to="/contact" setOpen={setOpen}>Contact</NavLinkMobile>
        </div>  
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState("drop-shadow-none");

  const listenScrollEvent = (event) => {
    if (window.scrollY > 64) {
      return setShadow("drop-shadow-md");
    } else {
      return setShadow("drop-shadow-none");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);  
  }, [])

  return (
    <header className={`sticky top-0 z-10 ${shadow}`}>
    <nav className="flex items-center w-screen filter bg-white py-4 h-16 md:container">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center lg:w-2/12 xl:w-3/12">
                <NavLink to="/">
                  <Image src={"/logo.png"} width={35} height={35} alt="Logo Ekorahy" /><span className="hidden ml-2 text-xl text-primary lg:block">Ekorahy</span>
                </NavLink>
            </div>
            <div className="w-9/12 flex justify-end items-center lg:w-10/12">
                <div className="flex relative w-14 h-14 p-4 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-secondary rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-secondary rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-secondary rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
                <div className="hidden bg-white md:flex md:space-x-4 lg:space-x-2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/project">Project</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/youtube">Youtube</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
      </header>
  );
}

export default Navbar;
