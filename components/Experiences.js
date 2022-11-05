import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { MdOutlineWork } from "react-icons/md";

function Experiences() {
  return (
    <section id="experiences" className="mt-20 mx-4">
      <h1 className="text-white font-bold font-Kanit text-lg mb-2 md:text-xl lg:text-center lg:text-2xl">
        Experiences
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(107 114 128 / 0.1)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(107 114 128 / 0.1)",
          }}
          date="Oct 2022 - Now"
          iconStyle={{ background: "#201F1F", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="font-Kanit text-base text-primary font-bold md:text-lg lg:text-xl">
            Freelance
          </h3>
          <h4 className="font-Kanit text-sm font-semibold mt-1 md:text-base">
            Front-End Web Developer
          </h4>
          <p className="text-sm text-body font-Roboto font-light mt-2 lg:text-base !important">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et libero
            atque ducimus nulla. Sunt eum voluptates adipisci facilis! Ipsam,
            quam?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(107 114 128 / 0.1)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(107 114 128 / 0.1)",
          }}
          date="Sep 2018 - Feb 2019"
          iconStyle={{ background: "#201F1F", color: "#fff" }}
          icon={
            <Image
              className="mx-auto mt-2.5 lg:mt-5"
              src="/experience_logo/logo_sritex.png"
              width={35}
              height={35}
              alt="logo Sritex"
            />
          }
        >
          <h3 className="font-Kanit text-base text-primary font-bold md:text-lg lg:text-xl">
            PT. Sri Rejeki Isman, Tbk (Sritex)
          </h3>
          <h4 className="font-Kanit text-sm font-semibold mt-1 md:text-base">
            Production Operator in Spinning Department
          </h4>
          <p className="text-sm text-body font-Roboto font-light mt-2 lg:text-base !important">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et libero
            atque ducimus nulla. Sunt eum voluptates adipisci facilis! Ipsam,
            quam?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(107 114 128 / 0.1)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(107 114 128 / 0.1)",
          }}
          date="-"
          iconStyle={{ background: "#201F1F", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="font-Kanit text-base text-primary font-bold md:text-lg lg:text-xl">
            CV. Citra Mandiri Komputindo (Internship)
          </h3>
          <h4 className="font-Kanit text-sm font-semibold mt-1 md:text-base">
            Computer technician
          </h4>
          <p className="text-sm text-body font-Roboto font-light mt-2 lg:text-base !important">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et libero
            atque ducimus nulla. Sunt eum voluptates adipisci facilis! Ipsam,
            quam?
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experiences;
