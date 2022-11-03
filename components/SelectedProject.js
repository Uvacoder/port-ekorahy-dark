import React from 'react';
import ListProject from './ListProject';

function SelectedProject(props) {
  return (
    <section id="selectedProject" className="mt-20 mx-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold font-Kanit text-lg md:text-xl">Selected Project</h1>
        <p className="text-primary font-Roboto text-sm hover:text-fuchsia-600">View All</p>
      </div>
      <ListProject />
    </section>
  );
}

export default SelectedProject;