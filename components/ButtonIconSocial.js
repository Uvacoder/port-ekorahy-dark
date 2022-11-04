import Link from 'next/link';
import React from 'react';

function ButtonIconSocial({to, icon, color, title}) {
  return <Link href={to} title={title} className={`transition duration-300 ease-in-out p-1 rounded text-2xl ${color} mr-3 bg-body/5 hover:bg-body/50 md:p-2`}>{icon}</Link>
}

export default ButtonIconSocial;