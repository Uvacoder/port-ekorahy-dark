import React from 'react';

function ItemSoftSkill({icon, title, description}) {
  return (
    <div className="p-4 shadow-xl rounded">
      <div className="w-max flex text-4xl font-bold text-primary mx-auto p-4 border-2 border-primary rounded-full">
        {icon}
      </div>
      <div className="text-center mt-3">
        <h1 className="text-white text-sm font-bold font-Kanit mb-1 lg:text-base">{title}</h1>
        <p className="text-body text-sm font-light font-Roboto">{description}</p>
      </div>
    </div>
  );
}

export default ItemSoftSkill;