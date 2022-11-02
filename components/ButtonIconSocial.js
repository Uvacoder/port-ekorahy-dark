import Link from 'next/link';
import React from 'react';

function ButtonIconSocial({to, icon, color, title}) {
  return <Link href={to} title={title} className={`p-1 rounded text-2xl ${color} ml-3 hover:bg-gray-100 md:p-2 lg:p-3`}>{icon}</Link>
}

export default ButtonIconSocial;