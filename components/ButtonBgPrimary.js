import Link from 'next/link';
import React from 'react';

function ButtonBgPrimary({to, icon, className, description}) {
  return <Link href={to} className={`flex items-center transition duration-300 ease-in-out py-3 px-4 ${className ? className : ""} bg-primary text-white text-sm font-bold rounded hover:bg-fuchsia-600 md:px-3 lg:px-6`}><span className="text-lg mr-2">{icon}</span> {description}</Link>;
}

export default ButtonBgPrimary;