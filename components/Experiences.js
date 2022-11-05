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
      <VerticalTimeline animate={false}>
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
            Make the website look attractive, minimalist and modern using
            React.js, Next.js and Tailwind CSS Framework. also slicing the
            design from figma to be implemented into the Front-End display on
            the website.
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
              alt="Logo PT. Sri Rejeki Isman, Tbk (Sritex)"
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
            {`Responsible for ensuring that the yarn spinning machine is kept clean so that the resulting yarn production is of high quality and also temporarily replaces the position of the production operator in the yarn spinning section when they are at rest, so that the machine can continue to run and can achieve the production targets that have been set.`}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(107 114 128 / 0.1)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(107 114 128 / 0.1)",
          }}
          date="Jul 2016 - Sep 2016"
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
            Take responsibility and learn about the ability to assemble
            computers, install operating systems and software, fix problems on
            laptops or PCs and fix problems on printers (spesific to modification printers). And also be responsible and learn to
            communicate with customers.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experiences;
