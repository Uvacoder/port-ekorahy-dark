import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

function Education() {
  return (
    <section id="education" className="mt-20 mx-4">
      <h1 className="text-white font-bold font-Kanit text-lg mb-2 md:text-xl lg:text-center lg:text-2xl">
        Education
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(107 114 128 / 0.1)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(107 114 128 / 0.1)",
          }}
          date="2019 - Now"
          iconStyle={{ background: "#201F1F", color: "#fff" }}
          icon={
            <Image
              className="mx-auto mt-1 lg:mt-3.5"
              src="/education_logo/logo_yai.png"
              width={30}
              height={30}
              alt="logo YAI"
            />
          }
        >
          <h3 className="font-Kanit text-base text-primary font-bold md:text-lg lg:text-xl">
            Universitas Persada Indonesia Y.A.I
          </h3>
          <h4 className="font-Kanit text-sm font-semibold mt-1 md:text-base">
            Informatics/Computer Science
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
          date="Feb 2022 - Aug 2022"
          iconStyle={{ background: "#201F1F", color: "#fff" }}
          icon={
            <Image
              className="mx-auto mt-1.5 lg:mt-4"
              src="/education_logo/logo_dicoding.png"
              width={27}
              height={27}
              alt="logo YAI"
            />
          }
        >
          <h3 className="font-Kanit text-base text-primary font-bold md:text-lg lg:text-xl">
            Dicoding Academy
          </h3>
          <h4 className="font-Kanit text-sm font-semibold mt-1 md:text-base">
            Studi Independen Bersertifikat Kampus Merdeka Program Batch 2 -
            Learning Path (Front-End Web and Back-End Developer)
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
          date="2015 - 2018"
          iconStyle={{ background: "#201F1F", color: "#fff" }}
          icon={
            <Image
              className="mx-auto mt-1 lg:mt-3.5"
              src="/education_logo/logo_smknngraho.png"
              width={30}
              height={30}
              alt="logo YAI"
            />
          }
        >
          <h3 className="font-Kanit text-base text-primary font-bold md:text-lg lg:text-xl">
            SMK Negeri Ngraho
          </h3>
          <h4 className="font-Kanit text-sm font-semibold mt-1 md:text-base">
            Computer and Network Engineering
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

export default Education;
