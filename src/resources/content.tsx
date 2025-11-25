import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aref",
  lastName: "Rezai",
  name: `Aref Rezai`,
  role: "Student",
  avatar: "/images/avatar.jpg",
  email: "aref.rezaie@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Persian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and cybersecurity</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ar3f-Rezai",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Aref Rezai Portfolio</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">George Brown College</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Aref Rezai, Cybersecurity Student at George Brown College
      , And This is my Portfolio
      <br /> Here, You can find more about my Projects and my educational background
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
    <>
    Aref is a Toronto-based IT Technician and aspiring SOC analyst with a passion
    for transforming complex security challenges into clear, actionable solutions.
    His work spans network configuration, system troubleshooting, and cybersecurity, with hands-on
    experience in SIEM tools, incident response, and digital forensics.
    <br />
    <br />
    <div>
      <strong>
        Work samples are available on my GitHub page. It can be accessed by clicking the GitHub Button on top.
      </strong>
    </div>
    </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DYNEX TECHNOLOGIES",
        timeframe: "Apr 2025 – Aug 2025",
        role: "MATERIAL HANDLER",
        achievements: [
          <>
            Inspected incoming and outgoing goods for quality and quantity
            against purchase orders and shipping
          </>,
          <>
            Managed and organized inventory for a fast-paced warehouse, and 
            Collaborated with team members to optimize storage solutions and improve material flow
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "EasyTech4Business Inc",
        timeframe: "2018 - 2022",
        role: "IT TECHNICIAN",
        achievements: [
          <>
            Configured and optimized network systems, 
            enhancing data transmission efficiency and significantly improving user experience.
          </>,
          <>
            Installed, terminated, and tested Ethernet (Cat6) cabling, including RJ45
            connectors and keystone jacks, for residential and commercial data/voice networks.
          </>,
          <>
            Performed comprehensive hardware and software troubleshooting to diagnose and resolve system issues, 
            ensuring optimal performance and minimal downtime.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "George Brown College",
        description: <>CYBERSECURITY (POSTGRADUATE CERTIFICATE)</>,
      },
      {
        name: "George Brown College",
        description: <>CLOUD COMPUTING TECHNOLOGIES (POSTGRADUATE CERTIFICATE)</>,
      },
       {
        name: "George Brown College",
        description: <>COMPUTER SYSTEMS TECHNOLOGY (3 YEARS ADVANCED DIPLOMA)</>,
      },
    ],
  },
  technical: {
  display: true, // set to false to hide this section
  title: "Technical Skills",
  skills: [
    {
      title: "SIEM Tools",
      description: (
        <>Experience with Security Information and Event Management (SIEM) tools for monitoring and analyzing security events.</>
      ),
      tags: [
        { name: "SIEM", icon: "siem" },
        { name: "Splunk", icon: "splunk" },
        { name: "LogRhythm", icon: "logrhythm" },
      ],
      images: [],
    },
    {
      title: "Endpoint Detection & Response (EDR) Tools",
      description: (
        <>Hands-on experience with EDR solutions for detecting, investigating, and responding to endpoint threats.</>
      ),
      tags: [
        { name: "EDR", icon: "edr" },
        { name: "CrowdStrike", icon: "crowdstrike" },
        { name: "SentinelOne", icon: "sentinelone" },
      ],
      images: [],
    },
    {
      title: "Incident Response and Triage",
      description: (
        <>Skilled in incident response processes, triaging alerts, and coordinating remediation actions.</>
      ),
      tags: [
        { name: "Incident Response", icon: "incident" },
        { name: "Triage", icon: "triage" },
        { name: "Forensics", icon: "forensics" },
      ],
      images: [],
    },
    {
      title: "Malware & Network Attack Analysis",
      description: (
        <>Understanding of malware behavior, network attack vectors, and threat analysis techniques.</>
      ),
      tags: [
        { name: "Malware Analysis", icon: "malware" },
        { name: "Network Security", icon: "network" },
        { name: "Threat Hunting", icon: "threat" },
      ],
      images: [],
    },
    {
      title: "DDoS Attack Concepts",
      description: (
        <>Knowledge of Distributed Denial-of-Service (DDoS) attack types, mitigation strategies, and defense techniques.</>
      ),
      tags: [
        { name: "DDoS", icon: "ddos" },
        { name: "Mitigation", icon: "firewall" },
      ],
      images: [],
    },
    {
      title: "Basic Scripting (Python)",
      description: (
        <>Proficient in Python scripting for automating security tasks, data analysis, and vulnerability assessments.</>
      ),
      tags: [
        { name: "Python", icon: "python" },
        { name: "Automation", icon: "automation" },
      ],
      images: [],
    },
    {
      title: "Web Application Security",
      description: (
        <>Understanding of web app vulnerabilities such as SQL Injection, XSS, and secure coding practices.</>
      ),
      tags: [
        { name: "SQL Injection", icon: "sql" },
        { name: "XSS", icon: "xss" },
        { name: "Secure Coding", icon: "web" },
      ],
      images: [],
    },
    {
      title: "Cloud Technologies & Security",
      description: (
        <>Experience with cloud platforms, cloud security best practices, and securing cloud infrastructure.</>
      ),
      tags: [
        { name: "Cloud", icon: "cloud" },
        { name: "AWS", icon: "aws" },
        { name: "Azure", icon: "azure" },
      ],
      images: [],
    },
  ],
},
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };





