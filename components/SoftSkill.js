import React from 'react';
import ItemSoftSkill from './ItemSoftSkill';
import { VscCommentDiscussion } from "react-icons/vsc";
import { RiTeamFill } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";

function SoftSkill() {
  return (
    <section id="softSkill" className="mt-20 mx-4">
      <h1 className="text-white font-bold font-Kanit text-lg md:text-xl md:text-center lg:text-2xl">Why Hire Me?</h1>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
        <ItemSoftSkill icon={<VscCommentDiscussion />} title="Communicative" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestiae nihil tempore. Eum laborum veritatis, adipisci delectus fuga pariatur totam." />
        <ItemSoftSkill icon={<RiTeamFill />} title="Collaborative" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestiae nihil tempore. Eum laborum veritatis, adipisci delectus fuga pariatur totam." />
        <ItemSoftSkill icon={<AiOutlineFieldTime />} title="Time Management" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestiae nihil tempore. Eum laborum veritatis, adipisci delectus fuga pariatur totam." />
        <ItemSoftSkill icon={<MdReportProblem />} title="Problem Solving" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestiae nihil tempore. Eum laborum veritatis, adipisci delectus fuga pariatur totam." />
      </div>
    </section>
  );
}

export default SoftSkill;