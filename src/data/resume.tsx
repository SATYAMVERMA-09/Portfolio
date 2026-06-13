import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Satyam Verma",
  initials: "SV",
  url: "https://github.com/SATYAMVERMA-09",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  description:
    "Sophomore IT Undergrad @ GL Bajaj | MERN Stack Developer | Competitive Programmer.",
  summary:
    "Aspiring software developer pursuing a B.Tech in Information Technology. Focused on MERN stack development, data structures and algorithms, and open-source contributions to build strong software engineering skills.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "MySQL", icon: Postgresql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Typescript", icon: Typescript }, 
    { name: "React", icon: ReactLight },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // Blog has been removed
  ],
  contact: {
    email: "satyamverma0907@gmail.com",
    tel: "", 
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SATYAMVERMA-09",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/satyam-verma-01863a2a3/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SatyamVerm59058",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:satyamverma0907@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GirlScript Summer of Code (GSSoC)",
      href: "https://gssoc.girlscript.tech/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/gssoc.png", // You can add a GSSoC logo to your public folder and link it here (e.g., "/gssoc.png")
      start: "May 2026",
      end: "Present",
      description:
        "Actively contributing to various open-source projects, resolving issues, and collaborating with maintainers and other developers in the community.",
    }
  ],
  education: [
    {
      school: "GL Bajaj Institute of Technology and Management",
      href: "#",
      degree: "Bachelor of Technology in Information Technology (B.Tech '28)",
      logoUrl: "glbajaj.jpg",
      start: "2024",
      end: "2028",
    }
  ],
  projects: [
    {
      title: "Netflix Clone",
      href: "https://github.com/SATYAMVERMA-09/Netflix-Clone",
      dates: "2025", // Update with actual dates if preferred
      active: true,
      description:
        "Developed a full-stack responsive web application replicating the core user interface and functionalities of Netflix.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SATYAMVERMA-09/Netflix-Clone/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "netflix.png", // Add a screenshot to your public folder and link it here (e.g., "/netflix-clone.png")
      video: "",
    }
  ],
  certificates: [
    {
      title: "Cisco Certified Introduction to Modern AI",
      dates: "June 2026",
      location: "Cisco Networking Academy",
      description: "Covered AI fundamentals, modern AI concepts, and applications of artificial intelligence.",
      image: "/cisco.png", 
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/5241a5ff-b565-4147-9df8-9525bc680aad/public_url",
        }
      ],
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      dates: "May 2026",
      location: "Amazon Web Services",
      description: "Learned machine learning fundamentals, model development concepts, and AWS ML services.",
      image: "/aws.png", 
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/d02a8875-52c9-4f46-b6d6-643a54d495f0/print",
        }
      ],
    },
    {
      title: "Network Security Fundamentals",
      dates: "November 2025",
      location: "Palo Alto Networks",
      description: "Studied networking concepts, security principles, and network protection mechanisms. Credential ID: ZJJEo3V0jm",
      image: "/paloalto.png", 
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://paloaltonetworksacademy.net/mod/customcert/verify_certificate.php?code=ZJJEo3V0jm",
        }
      ],
    },
    {
      title: "Cybersecurity Foundation",
      dates: "November 2025",
      location: "Palo Alto Networks",
      description: "Learned cybersecurity fundamentals, threat landscapes, security practices, and risk management. Credential ID: 2tmktiJoBG",
      image: "/paloalto.png", 
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://paloaltonetworksacademy.net/mod/customcert/verify_certificate.php?code=2tmktiJoBG",
        }
      ],
    }
  ],
} as const;