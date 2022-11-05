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
      <VerticalTimeline animate={false}>
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
              alt="Logo Universitas Persada Indonesia Y.A.I"
            />
          }
        >
          <h3 className="font-Kanit text-base text-primary font-bold md:text-lg lg:text-xl">
            Universitas Persada Indonesia Y.A.I
          </h3>
          <h4 className="font-Kanit text-sm font-semibold mt-1 md:text-base">
            Informatics/Computer Science
          </h4>
          <p className="text-sm text-body font-Roboto font-light mt-2 !important">
            In my lectures I learned a lot of material about informatics study
            programs such as networks, artificial intelligence and software
            engineering. but I chose to focus on studying software engineering,
            such as web and mobile development, because I really like and am
            very passionate about learning these fields.
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
              alt="Logo Dicoding Academy"
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
          <p className="text-sm text-body font-Roboto font-light mt-2 !important">
            In this program I learned many things, in terms of hard-skill I
            learned about front-end web development using HTML, CSS, and
            Javascript. and from Back-End side, I learned to create RESTful API
            using node.js or Hapi Framework. In terms of soft skills, I learned
            many things to improve communication skills, think critically, and
            manage time well. and at the end of the program I made a project
            (big task/capstone project) with the group, based on existing
            problems and was required to provide solutions to these problems
            using digital solutions, in this project we created a project with
            the theme of travel and culture, namely an information system and
            mapping website geographical tourist destinations in the city of
            Malang which were built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
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
              alt="Logo SMK Negeri Ngraho"
            />
          }
        >
          <h3 className="font-Kanit text-base text-primary font-bold md:text-lg lg:text-xl">
            SMK Negeri Ngraho
          </h3>
          <h4 className="font-Kanit text-sm font-semibold mt-1 md:text-base">
            Computer and Network Engineering
          </h4>
          <p className="text-sm text-body font-Roboto font-light mt-2 !important">
          learn many things about computer and network engineering majors, such as assembling computers, operating system installations, peripheral maintenance, installing UTP cables, installing and configuring Local Networks (LAN), Internet Networks (WAN), Wireless Networks (WLAN), Servers/ Router (Hotspot), and DHCP Server.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Education;
