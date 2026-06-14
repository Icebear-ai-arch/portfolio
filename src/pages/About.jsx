import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";

import "react-vertical-timeline-component/style.min.css";

const skillGroups = [
  {
    title: "Programming",
    items: ["C++", "C#", "Java", "Python", "PHP"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Django"],
  },
  {
    title: "Database & Tools",
    items: ["MySQL", "SQL", "Git/GitHub", "VS Code", "XAMPP", "NetBeans", "Unity"],
  },
  {
    title: "Other Strengths",
    items: ["Troubleshooting", "Networking", "UI/UX basics", "Software Testing", "Animation"],
  },
];

const education = [
  {
    title: "Bachelor of Science in Information Technology",
    subtitle: "Major in Mobile Application and Web Development",
    meta: "Bulacan State University • Hagonoy, Bulacan",
    date: "Batch 2025 - 2026",
  },
  {
    title: "STEM Strand",
    subtitle: "Senior High School",
    meta: "La Consolacion University of the Philippines • City of Malolos, Bulacan",
    date: "2020 - 2022",
  },
];

const projects = [
  {
    name: "Barangay Case Management System",
    description:
      "Complaint submission, case hearing tracking, and notification flow for residents.",
    tech: "PHP • MySQL • Tailwind",
  },
  {
    name: "E-Commerce Website (Core Gear Tech)",
    description:
      "Product catalog, search filter, and cart system for a dynamic shopping experience.",
    tech: "PHP • MySQL • JavaScript • CSS • HTML",
  },
  {
    name: "2D Platformer Game (Space Explorer)",
    description:
      "Game with collectible items, objectives, UI panels, and player mechanics.",
    tech: "C# • Unity",
  },
  {
    name: "Booking System (TITAN CRUISE)",
    description: "Reservation-focused system built for organized booking workflows.",
    tech: "Java • MySQL",
  },
];

const certifications = [
  "Back-End Web Development (BPI TECHVOC Training Program)",
  "Legacy Responsive Web Design V8 (freeCodeCamp)",
];

const strengths = [
  "Fast learner",
  "Detail-oriented",
  "Analytical thinker",
  "Strong problem solver",
  "Good communication",
  "Time management",
  "Can work independently",
  "Patient and persistent",
  "Willing to continuously learn",
  "Responsible and professional",
];

const About = () => {
  return (
    <section className='relative max-container overflow-hidden rounded-[32px] border border-white/10 bg-[#070b16] px-6 py-10 text-slate-100 shadow-2xl shadow-black/40 sm:px-10 lg:px-14'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[32px]'>
        <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl' />
        <div className='absolute right-0 top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl' />
        <div className='absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
      </div>

      <div className='relative'>
        <div className='grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start'>
          <div>
            <p className='mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200'>
              About Me
            </p>

            <h1 className='head-text text-slate-50'>
              Hello, I&apos;m{" "}
              <span className='font-semibold text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.28)]'>
                Justfer F. Carabuena
              </span>
            </h1>

            <div className='mt-5 max-w-3xl space-y-4 text-base leading-8 text-slate-300 sm:text-lg'>
              <p>
                Motivated and detail-oriented BS Information Technology graduate specializing in Mobile Application and Web Development.
                I focus on building practical systems, clean interfaces, and reliable user experiences.
              </p>
              <p>
                I am eager to contribute to real-world projects, strengthen my technical skills, and keep growing in a dynamic and innovative environment.
              </p>
            </div>

            <div className='mt-8 flex flex-wrap gap-3'>
              {[
                "Hagonoy, Bulacan",
                "Software / Web Development",
                "Mobile Application Focus",
                "Open to opportunities",
              ].map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl'>
            <h3 className='text-lg font-semibold text-slate-50'>Quick Details</h3>
            <div className='mt-5 space-y-4 text-sm text-slate-300'>
              <div>
                <p className='text-slate-500'>Location</p>
                <p className='mt-1 font-medium text-slate-100'>Hagonoy, Bulacan</p>
              </div>
              <div>
                <p className='text-slate-500'>Contact</p>
                <p className='mt-1 font-medium text-slate-100'>0998-349-9383</p>
                <p className='font-medium text-slate-100'>carabuenajustfer@gmail.com</p>
              </div>
              <div>
                <p className='text-slate-500'>Best Fit</p>
                <p className='mt-1 font-medium text-slate-100'>Web Developer, Software Systems, Mobile App Development</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {[
            {
              title: "Education",
              text: "BS Information Technology, Major in Mobile Application and Web Development.",
            },
            {
              title: "Focus",
              text: "Web development, software systems, and practical project building.",
            },
            {
              title: "Strengths",
              text: "Troubleshooting, UI/UX basics, software testing, and strong problem solving.",
            },
            {
              title: "Recognition",
              text: "Dean’s Lister and Cum Laude.",
            },
          ].map((card) => (
            <div key={card.title} className='rounded-[24px] border border-white/10 bg-[#0c1224]/80 p-5'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300'>
                {card.title}
              </p>
              <p className='mt-3 text-sm leading-7 text-slate-300'>{card.text}</p>
            </div>
          ))}
        </div>

        <div className='py-14'>
          <h3 className='subhead-text text-slate-50'>Technical Skills</h3>

          <div className='mt-8 grid gap-5 lg:grid-cols-2'>
            {skillGroups.map((group) => (
              <div key={group.title} className='rounded-[24px] border border-white/10 bg-white/5 p-6'>
                <h4 className='text-base font-semibold text-slate-50'>{group.title}</h4>
                <div className='mt-4 flex flex-wrap gap-3'>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className='rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-6'>
          <h3 className='subhead-text text-slate-50'>Education</h3>
          <div className='mt-8 space-y-4'>
            {education.map((item) => (
              <div key={item.title} className='rounded-[24px] border border-white/10 bg-white/5 p-6'>
                <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                  <div>
                    <h4 className='text-lg font-semibold text-slate-50'>{item.title}</h4>
                    <p className='mt-1 text-slate-300'>{item.subtitle}</p>
                    <p className='mt-2 text-sm text-slate-400'>{item.meta}</p>
                  </div>
                  <span className='inline-flex w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200'>
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-6'>
          <h3 className='subhead-text text-slate-50'>Projects</h3>
          <div className='mt-8 grid gap-5 lg:grid-cols-2'>
            {projects.map((project) => (
              <div key={project.name} className='rounded-[24px] border border-white/10 bg-[#0d1428] p-6'>
                <h4 className='text-lg font-semibold text-slate-50'>{project.name}</h4>
                <p className='mt-3 text-sm leading-7 text-slate-300'>{project.description}</p>
                <p className='mt-4 text-sm font-medium text-cyan-300'>{project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='py-6'>
          <h3 className='subhead-text text-slate-50'>Certifications & Trainings</h3>
          <div className='mt-6 grid gap-4 md:grid-cols-2'>
            {certifications.map((item) => (
              <div key={item} className='rounded-[24px] border border-white/10 bg-white/5 p-5 text-slate-200'>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className='py-6'>
          <h3 className='subhead-text text-slate-50'>Personal Strengths</h3>
          <div className='mt-6 flex flex-wrap gap-3'>
            {strengths.map((item) => (
              <span
                key={item}
                className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200'
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className='py-6'>
          <h3 className='subhead-text text-slate-50'>Experience Snapshot</h3>
          <div className='mt-8'>
            <VerticalTimeline>
              {[
                {
                  title: "Software Tester and Troubleshooting Support",
                  company_name: "Academic and project-based work",
                  iconBg: "#0ea5e9",
                  date: "Ongoing",
                  points: [
                    "Builds and evaluates systems with a focus on reliability and usability.",
                    "Works on debugging, problem solving, and improving user-facing flows.",
                    "Applies clean structure and practical implementation across projects.",
                  ],
                },
                {
                  title: "Web and Systems Developer",
                  company_name: "Portfolio and school projects",
                  iconBg: "#22c55e",
                  date: "2020 - 2026",
                  points: [
                    "Developed PHP, Java, and C# projects for academic and practical use.",
                    "Used MySQL, JavaScript, HTML, CSS, Tailwind, and Bootstrap in projects.",
                    "Focused on functional interfaces, data handling, and project presentation.",
                  ],
                },
              ].map((experience) => (
                <VerticalTimelineElement
                  key={experience.title}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex h-full w-full items-center justify-center'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                    background: "#0d1428",
                    color: "#e2e8f0",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid #0d1428" }}
                >
                  <div>
                    <h3 className='text-xl font-semibold text-slate-50'>{experience.title}</h3>
                    <p className='mt-1 text-base font-medium text-slate-300'>{experience.company_name}</p>
                  </div>

                  <ul className='my-5 ml-5 list-disc space-y-2'>
                    {experience.points.map((point) => (
                      <li key={point} className='pl-1 text-sm text-slate-300'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className='border-white/10' />

        <CTA />
      </div>
    </section>
  );
};

export default About;
