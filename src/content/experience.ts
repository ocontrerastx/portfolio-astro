export interface Experience {
  date: string;
  role: string;
  company: string;
  description: string; // Summary for About/Home
  bullets?: string[]; // Full detail for Resume
}

export const experiences: Experience[] = [
  {
    date: "JULY 2018 — JUNE 2025",
    role: "Program Manager",
    company: "Google",
    description:
      "Developed and scaled reporting infrastructure for Recruiting Enablement Operations using SQL and internal data visualization tools.",
    bullets: [
      "Developed and scaled a reporting infrastructure for Recruiting Enablement Operations by leveraging SQL and internal data visualization tools, increasing data accessibility and enabling more informed strategic decisions.",
      "Drove efficiency by leading quarterly cross-functional reviews of program initiatives, resulting in the identification and implementation of key process optimizations and automation.",
      "Established and led mentorship office hours, increasing proficiency in SQL and data visualization tools across the People Operations team.",
      "UX Designer (Rotation): Facilitated a cross-functional workshop to align UX, PM, and Engineering; designed wireframes and information architecture for an internal directory site; and conducted a comprehensive heuristic analysis of a curriculum site.",
    ],
  },
  {
    date: "JUNE 2017 — JULY 2018",
    role: "Product Manager",
    company: "The Appraisal Lane",
    description:
      "Owned the product roadmap and backlog prioritization, aligning platform capabilities with business strategy and client needs.",
    bullets: [
      "Owned the product roadmap and backlog prioritization, successfully aligning the platform's capabilities with business strategy and emerging client needs.",
      "Translated business goals into technical requirements by authoring detailed user stories and acceptance criteria, improving delivery velocity for the engineering team.",
      "Partnered with full-stack engineering and product design teams to execute the product roadmap, leading to more predictable release cycles and a more reliable platform.",
      "Led product demonstrations for sales, executive, and operations departments to gather critical feedback for feature refinement and ensure alignment with client outcomes.",
    ],
  },
  {
    date: "SEP 2015 — JUNE 2017",
    role: "Software Development Manager",
    company: "OnPrem",
    description:
      "Key technical consultant for high-profile media clients, delivering complex, tailored software solutions and leading cross-functional engineering teams.",
    bullets: [
      "Functioned as a key technical consultant for high-profile media clients like Fox and NBCUniversal, successfully delivering complex, tailored software solutions.",
      "Led cross-functional teams of software developers and project managers, consistently delivering complex projects on time and within budget.",
      "Translated complex customer requirements into clear, actionable user stories and process flows, effectively bridging the gap between non-technical stakeholders and engineering teams.",
      "Created wireframes and mockups to visualize user needs, facilitating productive discussions between stakeholders and engineering to achieve alignment before development.",
    ],
  },
  {
    date: "OCT 2013 — SEP 2015",
    role: "Product Manager",
    company: "Alliance Tech",
    description:
      "Managed a product portfolio for global events and drove a $200,000 contract win through the design of a self-service enterprise solution.",
    bullets: [
      "Managed a product portfolio for events hosted by high-profile clients like IBM, Salesforce, and Google I/O, ensuring alignment with customer needs and business objectives.",
      "Drove a $200,000 contract win by spearheading the design and development of a self-service version of an enterprise event solution.",
      "Informed roadmap decisions by analyzing product feature usage data and strategically prioritizing the product backlog based on customer feedback and stakeholder input.",
      "Collaborated with QA throughout sprints to triage bugs and assess deployment risk, ensuring seamless product launches and minimizing customer-facing issues.",
    ],
  },
  {
    date: "MAR 2013 — OCT 2013",
    role: "Technical Consultant",
    company: "Project Made Easy",
    description:
      "Led client requirement gathering and directed developer teams in the creation of custom components and reports.",
    bullets: [
      "Led client requirement gathering sessions to define system configurations and custom report development, ensuring client needs were accurately captured.",
      "Directed a team of developers in the creation of custom components and reports for client projects, ensuring that deliverables met quality standards and aligned with client expectations.",
      "Performed user acceptance testing for custom workflows, reports, and system configurations before new features were deployed into production.",
    ],
  },
  {
    date: "MAY 2011 — MAR 2013",
    role: "Implementation Manager",
    company: "Alliance Tech",
    description:
      "Managed concurrent event projects for major clients and utilized SQL to generate custom reports and insights.",
    bullets: [
      "Managed 10-15 concurrent client event website and app projects for major clients like IBM and Salesforce, ensuring on-time and on-budget delivery.",
      "Educated clients in a sales engineer capacity during pre-sale pitches to determine custom event solutions.",
      "Monitored and deployed solutions onsite at events to gather real-world feedback on product use, ensuring products met client needs and were user-friendly.",
      "Utilized SQL to manipulate data and generate custom reports, providing clients with key insights into their event data.",
    ],
  },
  {
    date: "AUG 2008 — MAY 2011",
    role: "Business Systems Analyst",
    company: "Cognitive Technologies",
    description:
      "Managed infrastructure upgrades and redesigned .NET applications utilized by the US Military.",
    bullets: [
      "Successfully managed 6-9 month client infrastructure upgrade projects by gathering client requirements and collaborating with cross-functional teams.",
      "Regularly communicated project progress to clients through weekly status reports, ensuring transparency and customer satisfaction.",
      "Designed and delivered training materials, providing onsite training sessions for external clients to improve their understanding of new software solutions.",
      "Redesigned a .NET software application utilized by the US Military, enhancing its usability and functionality.",
    ],
  },
];
