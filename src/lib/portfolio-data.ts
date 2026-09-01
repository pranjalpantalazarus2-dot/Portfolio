export const PROFILE = {
  name: "Pranjal Panta",
  initials: "PP",
  tagline: "Network Engineer & Cybersecurity Enthusiast",
  location: "Kathmandu, Nepal",
  email: "pranjalpantalazarus2@gmail.com",
  phone: "+977 9861490158",
  whatsapp: "https://wa.me/9779861490159?text=Hello%20Pranjal",
  viber: "viber://contact?number=9779861490159",
  github: "https://github.com/pranjalpanta",
  linkedin: "https://www.linkedin.com/in/pranjal-p-49ab59293/",
  medium: "https://medium.com/@pranjalpanta2.0",
  researchgate: "https://www.researchgate.net/profile/Pranjal-Panta",
  about:
    "Networking and Cybersecurity student passionate about designing and securing modern network infrastructures. Experienced in configuring and troubleshooting LANs, WANs, and VLANs, with knowledge of routing protocols including RIP, EIGRP, OSPF, and BGP. I enjoy analyzing complex networks, solving performance and security challenges, and continuously improving my skills through hands-on labs and real-world projects to build reliable and scalable systems.",
};

export const SKILLS = [
  {
    title: "Networking",
    blocks: [
      {
        label: "Network Fundamentals",
        tags: ["OSI Model", "TCP/IP", "Cable Types", "Network Protocols", "Subnetting", "VLSM", "Supernetting"],
      },
      {
        label: "Switching Protocols",
        tags: ["VLANs", "STP", "SVI", "DHCP Snooping", "Port Security", "EtherChannel", "MPLS"],
      },
      { label: "Routing Protocols", tags: ["RIP", "OSPF", "EIGRP", "BGP", "IS-IS"] },
      { label: "Redundancy Protocols", tags: ["HSRP", "VRRP", "GLBP"] },
    ],
  },
  {
    title: "Security, Firewalls & Tools",
    blocks: [
      { label: "Security & Firewalls", tags: ["Cisco ASA Firewall", "ACLs", "VPN Concepts", "NAT/PAT"] },
      {
        label: "Cybersecurity & Ethical Hacking",
        tags: ["Operating Systems", "Network Forensics", "Linux Fundamentals", "Basic Web Security"],
      },
      {
        label: "Tools & Simulation",
        tags: [
          "Cisco Packet Tracer",
          "GNS3",
          "Wireshark",
          "PyCharm",
          "FTK Imager",
          "Autopsy",
          "Hack The Box",
          "BurpSuite",
          "Kali Linux",
          "TryHackMe",
          "PingMyNetwork",
        ],
      },
    ],
  },
];

export const EDUCATION = [
  {
    title: "BSc Hons Cybersecurity and Ethical Hacking (Coventry University)",
    place: "Softwarica College of IT & E-Commerce, Kathmandu, Nepal",
  },
  {
    title: "+2 (National Examination Board)",
    place: "Ace Higher Secondary School, Kathmandu, Nepal",
  },
];

export type Project = {
  title: string;
  desc: string;
  stack: string[];
  link: { label: string; href: string; download?: boolean };
};

export const PROJECTS: Project[] = [
  {
    title: "Three-Tier Enterprise Network Architecture",
    desc: "Scalable and secure enterprise-style network architecture with proper segmentation and hierarchical design. Designed in Cisco Packet Tracer using routing, VLANs and best practices.",
    stack: ["Packet Tracer", "VLANs", "Routing"],
    link: {
      label: "Download .pkt",
      href: "https://raw.githubusercontent.com/pranjalpanta/Three-Tier-Network-Architecture-Networking-project/main/230238-Networking%20.pkt",
      download: true,
    },
  },
  {
    title: "Web Enumeration Tool (Python)",
    desc: "Script that gathers important information about web applications (headers, technologies, endpoints, etc.) to support security testing and reconnaissance.",
    stack: ["Python", "BurpSuite", "Recon"],
    link: { label: "View on GitHub", href: "https://github.com/pranjalpanta/Python" },
  },
  {
    title: "Cisco ASA Firewall Configuration",
    desc: "Implemented security policies on Cisco ASA using ACLs, NAT and VPN concepts to control and protect traffic between internal and external networks.",
    stack: ["Cisco ASA", "ACL", "VPN"],
    link: {
      label: "Download .pkt",
      href: "https://raw.githubusercontent.com/pranjalpanta/-Firewall-Configuration-Networking-Project-/main/230238-Firewall.pkt",
      download: true,
    },
  },
  {
    title: "Enterprise Networking Mini Project",
    desc: "Multi-department enterprise network with VLANs, inter-VLAN routing, DHCP, and secure wireless using /26 subnetting.",
    stack: ["Packet Tracer", "DHCP", "VLANs"],
    link: {
      label: "Download .pkt",
      href: "https://raw.githubusercontent.com/pranjalpanta/Networking-Project-/main/Networking-Mini-Project.pkt",
      download: true,
    },
  },
  {
    title: "Secure File Encryption Tool (Python)",
    desc: "Python-based tool to encrypt and decrypt files securely, focusing on basic cryptography concepts and security best practices.",
    stack: ["Python", "Cryptography"],
    link: { label: "View on GitHub", href: "https://github.com/pranjalpanta/secure-file-tool" },
  },
  {
    title: "Password Manager Using Cryptography",
    desc: "A password manager that stores all your passwords securely using strong encryption. Only one master password to remember.",
    stack: ["Python", "Encryption", "Security"],
    link: { label: "View on GitHub", href: "https://github.com/pranjalpanta/Password-Manager-Using-Cryptography" },
  },
];

export const CERTIFICATIONS = [
  {
    name: "ISO/IEC 27001:2022 Lead Auditor",
    issuer: "Mastermind",
    date: "Issued Nov 23, 2025 · 16 credit hours",
    href: "https://learn.mastermindassurance.com/certificates/aojmcj0jin",
  },
  {
    name: "Cisco Networking Foundations: IP Addressing",
    issuer: "LinkedIn Learning",
    date: "Completed Nov 29, 2025 · 1h 35m",
    href: "https://drive.google.com/file/d/11j_UBY2XTcTFSGib2LdPmJAxEU_vPfxn/view?usp=sharing",
  },
  {
    name: "Fundamentals of Cisco Networking",
    issuer: "LinkedIn Learning",
    date: "Completed Sep 18, 2025 · 2h 3m",
    href: "https://drive.google.com/file/d/1ywDB_rSJu3MMy4kH3LWPb52f_EEZxe74/view?usp=sharing",
  },
  {
    name: "Diploma in ICND1 v3 CCNA",
    issuer: "Alison",
    date: "Completed May 10, 2025 · 53h 12m (93% score)",
    href: "https://alison.com/certification/check/d349c0dd32",
  },
  {
    name: "Wireless Networking Essential Training",
    issuer: "LinkedIn Learning",
    date: "Completed Mar 23, 2026 · 1h 19m",
    href: "https://drive.google.com/file/d/1NusPSdqFvN3G0aDl8uvrfTDDM74sBFpX/view?usp=sharing",
  },
  {
    name: "Cisco Certified Technician (CCT) Routing and Switching",
    issuer: "LinkedIn Learning",
    date: "Completed Mar 20, 2026 · 6h 34m",
    href: "https://drive.google.com/file/d/13pA6iOyCqG6IjbYBnFoLwBQN6eHPKi7V/view?usp=sharing",
  },
  {
    name: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "Red Team Leaders",
    date: "Issued Dec 29, 2025",
    href: "https://courses.redteamleaders.com/exam-completion/01e584edc365eb2d",
  },
  {
    name: "Certified C++ Practitioner (CCPC)",
    issuer: "Red Team Leaders",
    date: "Issued Dec 29, 2025",
    href: "https://courses.redteamleaders.com/exam-completion/63d2768ce0a639fc",
  },
  {
    name: "Digital Forensics & Incident Investigation",
    issuer: "Red Team Leaders",
    date: "Issued Apr 20, 2026",
    href: "https://courses.redteamleaders.com/completion/5889dc55ca3b908d",
  },
  {
    name: "Introduction to Critical Infrastructure Protection",
    issuer: "OPSWAT Academy",
    date: "Issued Nov 25, 2024 · Expires Nov 25, 2025",
    href: "https://learn.opswatacademy.com/certificate/hjM7efiJwQ",
  },
  {
    name: "Foundations of Log Analysis for Cyber Defense",
    issuer: "Red Team Leaders",
    date: "Issued Jan 2026",
    href: "https://courses.redteamleaders.com/completion/6ec659f37ffa4049",
  },
];

export const BLOGS = [
  {
    title: "Understanding RIP Auto-Summarization",
    desc: "A practical deep dive into classful vs classless routing.",
    href: "https://medium.com/@pranjalpanta2.0/understanding-rip-auto-summarization-a-practical-deep-dive-into-classful-vs-classless-routing-2463b7db22d6",
  },
  {
    title: "Static Routing",
    desc: "How static routes shape deterministic network paths.",
    href: "https://medium.com/@pranjalpanta2.0/static-routing-8f63feb76701",
  },
  {
    title: "Carrier Sense Multiple Access (CSMA)",
    desc: "The access method behind shared-medium networks.",
    href: "https://medium.com/@pranjalpanta2.0/carries-sense-multiple-access-csma-041229099a79",
  },
];
