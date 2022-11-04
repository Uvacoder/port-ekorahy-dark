import Link from 'next/link';
import React from 'react';
import { IoMdArrowBack } from "react-icons/io";

function LinkBackHome() {
  return <Link href="/" className="flex items-center justify-center transition duration-300 ease-in-out text-Kanit text-sm text-primary rounded py-2 px-4 hover:text-fuchsia-600 md:text-base"><IoMdArrowBack className="text-lg mr-2 " />Back To Home</Link>
}

export default LinkBackHome;