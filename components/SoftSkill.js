import React from 'react';
import ItemSoftSkill from './ItemSoftSkill';
import { VscCommentDiscussion } from "react-icons/vsc";
import { RiTeamFill } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";

function SoftSkill() {
  return (
    <section id="softSkill" className="mt-20 mx-4">
      <h1 className="text-white font-bold font-Kanit text-center text-lg md:text-xl lg:text-2xl">Why Hire Me?</h1>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
        <ItemSoftSkill icon={<VscCommentDiscussion />} title="Communicative" description="I can communicate well, good in interpersonal communication, convey ideas, and I am also a good listener." />
        <ItemSoftSkill icon={<RiTeamFill />} title="Collaborative" description="I can work individually or collaborate in a team to create high quality products." />
        <ItemSoftSkill icon={<AiOutlineFieldTime />} title="Time Management" description="I can manage my time well at work so that I can increase the effectiveness, efficiency and productivity in making a product." />
        <ItemSoftSkill icon={<MdReportProblem />} title="Problem Solving" description="I have high motivation and enthusiasm to find solutions to existing problems." />
      </div>
    </section>
  );
}

export default SoftSkill;