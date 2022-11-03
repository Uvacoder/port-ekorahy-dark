import React from 'react';

function ItemTech({icon, colorIcon, description}) {
  return <p className="flex items-center text-sm font-Roboto text-body mt-2" ><span className={`${colorIcon} mr-2 text-base`}>{icon}</span>{description}</p>
}

export default ItemTech;