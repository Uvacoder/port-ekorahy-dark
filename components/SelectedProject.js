import Link from 'next/link';
import React from 'react';
import ListProject from './ListProject';

function SelectedProject(props) {
  return (
    <section id="selectedProject" className="mt-20 mx-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold font-Kanit text-lg md:text-xl lg:text-2xl">Selected Project</h1>
        <Link href="/project" className="transition duration-300 ease-in-out text-primary font-Roboto text-sm hover:text-fuchsia-600">View All</Link>
      </div>
      <ListProject />
    </section>
  );
}

export default SelectedProject;