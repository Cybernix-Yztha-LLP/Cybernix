"use client";

import { useTheme } from "next-themes";
import { MagicCard } from "../components/ui/magic-card";
import IconCloud from "../components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

 function About() {
  const { theme } = useTheme();

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white-100 dark:bg-white-900 p-4">
      {/* Page Header */}
      <h1 className="text-5xl font-extrabold text-center mt-8 mb-12 text-black dark:text-white">
        Know more about us
      </h1>

      {/* Icon and Card Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-8">
        {/* Custom IconCloud Component */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>

        {/* Content Card */}
        <MagicCard
          className="w-full md:w-1/2 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-black dark:text-gray-200"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            Who are we?
          </h2>

          {/* Content */}
          <p className="text-lg leading-7">
            Welcome to Cybernix, where innovation meets security. We are a
            cutting-edge cybersecurity and software solutions company dedicated
            to empowering individuals, businesses, and communities to thrive in
            a digitally secure environment.
            <br />
            <br />
            At Cybernix, we specialize in providing a comprehensive suite of
            services, including advanced cybersecurity solutions, expert
            consultation, and innovative software products tailored to meet the
            unique needs of individuals and enterprises. Our mission goes
            beyond protection; we aim to educate and inspire. Through our
            educational programs and initiatives, we equip individuals with the
            skills to navigate the ever-evolving world of cybersecurity
            confidently.
            <br />
            <br />
            Our commitment to building a strong community of aspiring
            cybersecurity enthusiasts sets us apart. We foster collaboration,
            learning, and growth, ensuring that our members are always one step
            ahead in their careers and endeavors.
            <br />
            <br />
            Whether you're looking to secure your organization, gain insights
            into the digital threat landscape, or explore groundbreaking
            software solutions, Cybernix is your trusted partner. Together,
            let’s redefine the boundaries of cybersecurity and innovation.
            <br />
            <br />
            Join us at Cybernix, where security and progress converge.
          </p>
        </MagicCard>
      </div>
    </div>
  );
}
export default  About;