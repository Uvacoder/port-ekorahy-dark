import Link from 'next/link';
import React from 'react';

function ButtonBgPrimary({to, icon, description}) {
  return <Link href={to} className="flex items-center w-max px-3 py-3 bg-primary text-white text-sm font-bold rounded hover:bg-fuchsia-600 sm:px-4 md:px-5 lg:px-6"><span className="text-lg mr-2">{icon}</span> {description}</Link>;
}

export default ButtonBgPrimary;