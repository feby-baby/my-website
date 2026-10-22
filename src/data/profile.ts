// ─────────────────────────────────────────────────────────────
//  All the website's text lives here. Edit this file to update
//  the site — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Feby Baby",
  title: "Principal Technical Lead",
  focus: "Python · Cloud · Healthcare & Life Sciences",
  location: "Victoria, Australia",
  email: "febybaby.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/feby-baby",
  photo: "/feby-baby.jpg",
  // Set to "/Feby_Baby_CV.pdf" after placing a CV (without phone number)
  // in the /public folder. While null, the button becomes "Request my CV".
  cvUrl: null as string | null,
  openToWork: true,
  openToWorkText: "Open to Principal / Lead engineering roles",
  tagline:
    "Technology leader building software that powers healthcare, life sciences and enterprise operations.",
  intro:
    "15+ years turning complex, regulated workflows into reliable, automated systems — from genomic analysis pipelines on AWS to AI-assisted digital pathology and enterprise calibration platforms used across global facilities.",
  roles: [
    "Technical Leader",
    "Python Architect",
    "Cloud & AWS",
    "Healthcare & Life Sciences",
    "Data & Automation",
    "Team Leadership",
  ],
};

export const highlights = [
  { value: "80%", label: "less manual effort", detail: "Automated calibration platform · Lonza" },
  { value: "3h → 15m", label: "analysis time", detail: "Data intelligence application · Lonza" },
  { value: "60%", label: "faster turnaround", detail: "Genomic pipelines on AWS · Q² Solutions" },
  { value: "2×", label: "Bravo Awards", detail: "Innovation & Initiative · Lonza" },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years in software" },
  { value: 12, suffix: "+", label: "Clients delivered for" },
  { value: 25, suffix: "+", label: "Projects shipped" },
  { value: 5, suffix: "", label: "Industries served" },
];

export type Role = {
  period: string;
  title: string;
  org: string;
  client?: string;
  location?: string;
  summary: string;
  tech: string[];
  award?: string;
};

export type Chapter = { heading: string; years: string; roles: Role[] };

export const story: Chapter[] = [
  {
    heading: "Leading healthcare & life-sciences platforms",
    years: "2019 — 2026",
    roles: [
      {
        period: "Sep 2024 — Mar 2026",
        title: "Principal Technical Lead",
        org: "UVJ Technologies",
        client: "Lonza",
        location: "Kingston, Canada",
        summary:
          "Led the digital transformation of calibration operations with an automated system that cut manual effort by 80% and eliminated operational errors across global facilities. Built enterprise-wide data traceability for compliance and audit readiness, and drove 100% adoption through training and cross-team collaboration.",
        tech: ["Python", "PyQt5", "SQL Server", "Qt Designer"],
        award: "Bravo Award for Innovation",
      },
      {
        period: "Mar 2024 — Aug 2024",
        title: "Technical Lead",
        org: "UVJ Technologies",
        client: "Lonza",
        location: "Kingston, Canada",
        summary:
          "Delivered a data intelligence application that reduced analysis time from 3 hours to 15 minutes, automating 70% of diagnostic workloads for four global teams, with analytics-ready datasets and interactive dashboards.",
        tech: ["Python", "Pandas", "openpyxl", "matplotlib", "SQL", "PyQt5"],
        award: "Bravo Award for Initiative",
      },
      {
        period: "May 2023 — Feb 2024",
        title: "Technical Lead",
        org: "UVJ Technologies",
        client: "Tel Aviv Sourasky Medical Center",
        location: "Israel",
        summary:
          "Designed and delivered a next-generation digital pathology platform with FastAPI and React — slide review, annotation tools and real-time visualisation — and integrated AI-driven automated annotation and model-training workflows.",
        tech: ["Python", "FastAPI", "SQLAlchemy", "React", "MySQL", "Docker"],
        award: "Recognised for advancing dataset generation for image-analysis models",
      },
      {
        period: "May 2019 — May 2023",
        title: "Technical Lead",
        org: "UVJ Technologies",
        client: "Q² Solutions",
        location: "North Carolina, USA",
        summary:
          "Directed the modernisation of genomic data analysis pipelines, deploying containerised workflows on AWS and Slurm Grid that reduced turnaround time by 60%, and integrated the Illumina DRAGEN Bio-IT Platform for high-accuracy clinical analysis.",
        tech: ["Python", "Docker", "AWS", "Slurm", "Illumina DRAGEN"],
      },
    ],
  },
  {
    heading: "Building scalable backends & genomics systems",
    years: "2012 — 2019",
    roles: [
      {
        period: "Dec 2017 — Jun 2019",
        title: "Technical Lead",
        org: "UVJ Technologies",
        client: "neteXpose",
        location: "USA",
        summary:
          "Led development of the neteXpose-DNA Network Discovery Engine, integrating IPMI, Redfish, SNMP and WMI protocols for full-stack IP network visibility.",
        tech: ["Java", "Spring Boot", "IPMI", "Redfish", "SNMP", "WMI"],
        award: "Client accolades for scalable network discovery",
      },
      {
        period: "Apr 2015 — Feb 2017",
        title: "Senior Software Engineer",
        org: "UVJ Technologies",
        client: "Elegantra, Inc.",
        location: "USA",
        summary:
          "Architected backend APIs and Spring-based microservices for the Joyous mobile platform, powering restaurant ordering and delivery across hundreds of restaurants.",
        tech: ["Java", "Spring MVC", "JPA", "REST APIs"],
      },
      {
        period: "Apr 2012 — Jan 2015",
        title: "Software Engineer",
        org: "UVJ Technologies",
        client: "Knome, Inc.",
        location: "USA",
        summary:
          "Built the Knome Genome Analysis Platform (KGAP) for clinical interpretation of large-scale genomic data, integrating BWA, GATK and SAMtools pipelines to cut analysis time by 70%.",
        tech: ["Java", "Python", "GATK", "BWA", "MySQL", "AWS"],
      },
    ],
  },
  {
    heading: "Foundations in enterprise software",
    years: "2009 — 2011",
    roles: [
      {
        period: "Feb 2011 — Apr 2011",
        title: "Software Engineer",
        org: "Moonraft Innovation Labs",
        client: "ICICI Lombard General Insurance",
        location: "India",
        summary:
          "Digitised marine claims processing with an automated workflow system and real-time tracking dashboards for claims adjusters.",
        tech: ["C#", ".NET", "ASP.NET", "Oracle"],
      },
      {
        period: "Dec 2009 — Jan 2011",
        title: "Consultant Engineering",
        org: "Subex Limited",
        location: "Bangalore, India",
        summary:
          "Developed enterprise intranet applications integrating HR, IT, Finance and Engineering, automating request handling and approvals.",
        tech: ["J2EE", "MySQL"],
        award: "Acknowledgement from VP & Global Head of HR",
      },
    ],
  },
];

export type ExpertiseArea = {
  icon: "code" | "cloud" | "dna" | "chart" | "users";
  title: string;
  description: string;
  points: string[];
};

export const expertise: ExpertiseArea[] = [
  {
    icon: "code",
    title: "Python application engineering",
    description:
      "Desktop and web applications that technicians and scientists actually enjoy using.",
    points: ["PyQt5 & Qt Designer UIs", "FastAPI & Pydantic services", "SQLAlchemy & Alembic", "PyInstaller packaging"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description: "Scalable, containerised workloads with automated build and release pipelines.",
    points: ["AWS — EC2, S3, ECR, Lambda", "Docker & Slurm Grid", "Jenkins & ADO pipelines", "Serverless on AWS"],
  },
  {
    icon: "dna",
    title: "Healthcare, genomics & life sciences",
    description: "Software for regulated, high-accuracy environments where traceability matters.",
    points: ["Genomic pipelines (DRAGEN, GATK)", "Digital pathology & AI annotation", "Calibration & compliance systems", "Audit-ready data traceability"],
  },
  {
    icon: "chart",
    title: "Data, analytics & automation",
    description: "Replacing slow manual work with automated analysis and clear dashboards.",
    points: ["Pandas & matplotlib", "Excel automation (openpyxl)", "Interactive dashboards", "Process automation"],
  },
  {
    icon: "users",
    title: "Technical leadership",
    description: "Leading cross-functional teams from estimation to enterprise-wide adoption.",
    points: ["12+ clients, 25+ projects", "Agile, CI/CD & TDD", "Stakeholder engagement", "Training & documentation"],
  },
];

export type Project = {
  title: string;
  client: string;
  impact: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Automated Calibration Platform",
    client: "Lonza · Life sciences",
    impact: "80% less manual effort",
    description:
      "Enterprise calibration system with an intelligent PyQt5 interface and end-to-end data traceability, adopted by 100% of teams across Manufacturing, Sustaining and Service.",
    tech: ["Python", "PyQt5", "SQL Server"],
  },
  {
    title: "Diagnostic Data Intelligence App",
    client: "Lonza · Life sciences",
    impact: "3 hours → 15 minutes",
    description:
      "Automated 70% of diagnostic workloads with analytics-ready datasets and dashboards used by four global teams.",
    tech: ["Python", "Pandas", "matplotlib", "PyQt5"],
  },
  {
    title: "Digital Pathology Platform",
    client: "Tel Aviv Sourasky Medical Center · Healthcare",
    impact: "56% accuracy improvement",
    description:
      "High-precision diagnostic platform with slide review, annotation tools and AI-assisted automated annotation and model training.",
    tech: ["FastAPI", "React", "SQLAlchemy", "Docker"],
  },
  {
    title: "Cloud Genomic Analysis Pipelines",
    client: "Q² Solutions · Clinical genomics",
    impact: "60% faster turnaround",
    description:
      "Containerised genomic workflows on AWS and Slurm Grid with Illumina DRAGEN integration for secondary and tertiary analysis.",
    tech: ["Python", "AWS", "Docker", "DRAGEN"],
  },
  {
    title: "Network Discovery Engine",
    client: "neteXpose · Networking",
    impact: "Full-stack IP visibility",
    description:
      "Multi-protocol discovery engine combining IPMI, Redfish, SNMP and WMI, shipped as scalable backend services for enterprise clients.",
    tech: ["Java", "Spring Boot", "SNMP", "Redfish"],
  },
  {
    title: "Knome Genome Analysis Platform",
    client: "Knome, Inc. · Genomics",
    impact: "70% faster analysis",
    description:
      "Clinical interpretation platform for large-scale genomic data with clinical-grade variant reporting for physicians.",
    tech: ["Java", "Python", "GATK", "AWS"],
  },
];

export const recognition = [
  { title: "Bravo Award for Innovation", by: "Lonza", note: "Automated calibration platform" },
  { title: "Bravo Award for Initiative", by: "Lonza", note: "Productivity improvements in diagnostics" },
  { title: "Research recognition", by: "Tel Aviv Sourasky Medical Center", note: "Dataset generation for image-analysis models" },
  { title: "Client accolades", by: "neteXpose", note: "Scalable network discovery solutions" },
  { title: "Leadership acknowledgement", by: "Subex Limited", note: "From the VP & Global Head of HR" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python 3.11", "Java", "Shell scripting", "Unix"] },
  { group: "Python stack", items: ["Pandas", "PyQt5", "FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "openpyxl", "xlsxwriter", "matplotlib"] },
  { group: "Java stack", items: ["Spring Boot", "Spring MVC", "Hibernate", "JPA", "EclipseLink"] },
  { group: "Cloud & DevOps", items: ["AWS (EC2, S3, ECR, Lambda)", "Docker", "Jenkins", "ADO Pipelines"] },
  { group: "Databases", items: ["SQL Server", "PostgreSQL", "MySQL", "Oracle", "H2"] },
  { group: "Web", items: ["React", "Angular", "REST APIs", "JavaScript", "jQuery"] },
  { group: "Testing & GUI", items: ["pytest", "JUnit", "Qt Designer", "PyInstaller"] },
  { group: "Ways of working", items: ["Agile", "CI/CD", "TDD", "Git", "Jira"] },
];

export const certifications = [
  { name: "Building Serverless Applications in AWS", issuer: "AWS", year: "2026" },
  { name: "100 Board Members Program", issuer: "Iron Lady", year: "2025–26" },
  { name: "AWS SimuLearn: Cloud First Steps & Cloud Computing Essentials", issuer: "AWS", year: "2025" },
  { name: "Explore the Amazon Bedrock Playgrounds", issuer: "AWS", year: "2025" },
  { name: "AI Tools Workshop", issuer: "IITian Teaches", year: "2023" },
  { name: "Lean Six Sigma Yellow Belt", issuer: "Six Sigma", year: "2022" },
  { name: "Agile Development Practices", issuer: "LinkedIn Learning", year: "2022" },
  { name: "Leadership Essentials Program", issuer: "Iron Lady", year: "2022" },
];

export const education = {
  degree: "Bachelor of Technology — Information Technology",
  school: "Rajagiri School of Engineering & Technology, Mahatma Gandhi University",
  location: "Kerala, India",
  year: "2009",
};
