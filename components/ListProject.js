import React from 'react';
import ItemProject from './ItemProject';

function ListProject() {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <ItemProject src="/selected_project/personal-notes-app.png" alt="personal notes app image project" />
    </div>
  );
}

export default ListProject;