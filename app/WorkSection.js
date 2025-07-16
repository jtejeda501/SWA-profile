
"use client";
import { useState } from "react";

const jobs = [
    {
    company: "Motivus",
    title: "Senior Frontend React Developer",
    location: "Motivus",
    period: "October 2024 - June 2025",
    points: [
      "Developed a render server side and static content app with Next.js and Tailwind CSS, improving user engagement by 15%.",
      "Developed responsive web applications using React.js and Redux, improving user operability by 20%.",
      "Configured CI/CD pipelines using GitHub Actions for automated builds, testing, and deployments.."
    ],
    skills: ["JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "GitHub Actions", "Node.js"]
  },
  {
    company: "AgileThought",
    title: "Senior Java Developer",
    location: "AgileThought",
    period: "October 2021 - October 2024",
    points: [
      "Designed and developed reusable APIs, reducing duplicated code by 35% and improving frontend-backend integration efficiency.",
      "Collaborated with a team of four team members to implement a RESTful API with java Spring Boot, ensuring seamless data flow between the frontend and backend.",
      "Co-directed and Developed a dynamic and responsive web application to upload and validate multiple file formats, automating form filling improving user efficiency by 50%.",
      "Developed new modules within the systems by analyzing and researching the needs of users.",
      "Migrated modules of a legacy application to a modern user interface with React, improving maintainability and reducing technical debt by 30%.",
      "Implemented a reusable component library (LWC), across multiple repositories, reducing debt tech and improving maintainability 25%.",
      
    ],
    skills: ["Java", "Spring Boot", "React.js", "Redux", "JavaScript", "Jenkins", "SCSS", "Git"]
  },
  {
    company: "Quarksoft",
    title: "Software Engineer",
    location: "Quarksoft",
    period: "May 2019 - October 2021",
    points: [
      "Designed, implemented, and exposed both REST and SOAP web services with Spring Boot and Spring MVC, improving backend-client communication efficiency by 15% and reducing request failures by 20%.",
      "Refactored the monolithic architecture core app using SOLID principles and Clean Code, reducing technical debt by 35% and improving maintainability for a smooth RESTful microservices migration.",
      "Managed complex form logic using JSF with Ajax to display dynamic data fetched from backend catalogs, reducing rendering time by 25% and ensuring data consistency.",
      "Implemented robust exception-handling mechanisms, reducing API response failures by 35% and improving system reliability",
      "Developed and consumed SOAP and RESTful web services, improving system interoperability.",
      "Developed a secure, interactive web application with a React and an intuitive user interface, increasing user engagement in 25%."
      
    ],
    skills: ["Java", "Spring MVC"," Spring Boot", "Hibernate", "Webservices", "XML", "Ajax", "React", "Oracle", "Git"]
  }  
];


export default function WorkSection() {
  const [selected, setSelected] = useState(0);
  return (
    <section id="work" className="w-full flex justify-center mb-32">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 md:gap-16 items-start mt-16">
        {/* Left column: company list, left aligned */}
        <div className="flex flex-col w-full md:w-1/3 items-start">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 mt-8 w-full">
            <span className="text-[#fdb86b] text-lg sm:text-xl font-medium">02.</span>
            <span className="text-[#e6e6e6] text-lg sm:text-xl font-medium">Work</span>
            <div className="hidden sm:block flex-1 h-px bg-[#b3b3b3] ml-4" />
          </div>
          <div className="flex flex-col gap-6 pl-4 w-full">
            {jobs.map((job, idx) => (
              <button
                key={job.company}
                className={`text-left font-medium cursor-pointer transition-colors px-2 py-1 w-full ${selected === idx ? "text-[#fdb86b] border-l-4 border-[#fdb86b]" : "text-[#b3b3b3] border-l-4 border-transparent"}`}
                style={{background: "none", outline: "none"}}
                onClick={() => setSelected(idx)}
              >
                {job.company}
              </button>
            ))}
          </div>
        </div>
        {/* Right column: job details, left aligned */}
        <div className="flex flex-col w-full md:w-2/3 items-start min-h-[400px] py-8">
          <h2 className="text-2xl sm:text-3xl font-medium mb-2 text-left w-full">
            <span className="text-[#fdb86b]">{jobs[selected].title}</span> <span className="text-[#e6e6e6]">at {jobs[selected].location}</span>
          </h2>
          <div className="text-[#b3b3b3] mb-2 text-left w-full">{jobs[selected].period}</div>
          <ul className="list-none text-base sm:text-lg text-[#e6e6e6] mb-8 pl-0 w-full">
            {jobs[selected].points.map((point, i) => (
              <li className="mb-4 text-left" key={i}>&raquo; {point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 sm:gap-8 text-[#fdb86b] text-base font-medium w-full">
            {jobs[selected].skills.map(skill => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
