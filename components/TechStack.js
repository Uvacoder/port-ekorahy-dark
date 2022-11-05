import React from 'react';
import ItemTech from './ItemTech';
import TitleTechStack from './TitleTechStack';
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiDart, SiMysql, SiMongodb, SiNodedotjs, SiNextdotjs, SiReact, SiBootstrap, SiTailwindcss, SiVisualstudiocode, SiAndroidstudio, SiFlutter, SiNetlify, SiVercel, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

function TechStack() {
  return (
    <section id="techStack" className="mx-4 mt-20">
      <h1 className="text-white font-bold font-Kanit text-lg text-center md:text-xl lg:text-2xl">Tech Stack</h1>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
       {/* language Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="Language" />
          <div className="mx-2">
            <ItemTech icon={<SiHtml5 />} colorIcon="text-html5" description="HTML5" />
            <ItemTech icon={<SiCss3 />} colorIcon="text-css3" description="CSS3" />
            <ItemTech icon={<SiJavascript />} colorIcon="text-js" description="Javascript" />
            <ItemTech icon={<SiPhp />} colorIcon="text-php" description="PHP" />
            <ItemTech icon={<SiDart />} colorIcon="text-dart" description="Dart" />
          </div>
        </div>

        {/* Databases Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="Databases" />
          <div className="mx-2">
            <ItemTech icon={<SiMysql />} colorIcon="text-mysql" description="MySQL" />
            <ItemTech icon={<SiMongodb />} colorIcon="text-mongodb" description="MongoDB" />
          </div>
        </div>

        {/* Frameworks (Full Stack) Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="Frameworks (Full Stack)" />
          <div className="mx-2">
            <ItemTech icon={<SiNodedotjs />} colorIcon="text-nodejs" description="Node.js" />
            <ItemTech icon={<SiNextdotjs />} colorIcon="text-nextjs" description="Next.js" />
          </div>
        </div>

        {/* Javascript UI Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="Javascript UI" />
          <div className="mx-2">
            <ItemTech icon={<SiReact />} colorIcon="text-reactjs" description="React.js" />
          </div>
        </div>

        {/* Front-End Frameworks Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="Front-End Frameworks" />
          <div className="mx-2">
            <ItemTech icon={<SiBootstrap />} colorIcon="text-bootstrap" description="Bootstrap" />
            <ItemTech icon={<SiTailwindcss />} colorIcon="text-tailwind" description="Tailwind" />
          </div>
        </div>

        {/* IDE Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="IDE" />
          <div className="mx-2">
            <ItemTech icon={<SiVisualstudiocode />} colorIcon="text-vcs" description="Visual Studio Code" />
            <ItemTech icon={<SiAndroidstudio />} colorIcon="text-androidstd" description="Android Studio" />
          </div>
        </div>

        {/* Cross-Platform Mobile Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="Cross-Platform Mobile" />
          <div className="mx-2">
            <ItemTech icon={<SiFlutter />} colorIcon="text-flutter" description="Flutter" />
          </div>
        </div>

        {/* Static Web Hosting Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="Static Web Hosting" />
          <div className="mx-2">
            <ItemTech icon={<SiNetlify />} colorIcon="text-netlify" description="Netlify" />
            <ItemTech icon={<SiVercel />} colorIcon="text-vercel" description="Vercel" />
          </div>
        </div>

        {/* Graphic Design Section */}
        <div className="p-4 border rounded">
          <TitleTechStack title="Graphic Design" />
          <div className="mx-2">
            <ItemTech icon={<SiAdobephotoshop />} colorIcon="text-ps" description="Adobe Photoshop" />
            <ItemTech icon={<SiAdobeillustrator />} colorIcon="text-ai" description="Adobe Illustrator" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;