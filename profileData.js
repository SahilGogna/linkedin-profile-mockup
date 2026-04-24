const profileData = {
  header: {
    name: "Priya Nair",
    pronouns: "She/Her",
    headline: "Aspiring Data Analyst | SQL · Python · Power BI | Turning Raw Data into Business Decisions",
    location: "Toronto, Ontario, Canada",
    contactInfo: "Contact info",
    followers: 847,
    connections: 312,
    isOwnProfile: true,
    avatar: "assets/avatar.png",
    banner: "assets/banner.jpeg",
    openToWork: true,
    degree: "2nd",
    mutualConnections: [
      { name: "Alex Chen", initials: "AC", color: "#057642" },
      { name: "Meera Singh", initials: "MS", color: "#b24020" }
    ],
    currentCompany: { name: "Vantage Retail Analytics", initials: "VR", color: "#0a66c2" },
    currentSchool: { name: "Conestoga College", initials: "CC", color: "#7d4cdb" }
  },

  about: {
    text: `I'm a data-driven problem solver and recent graduate of Conestoga College's Business Analytics program, passionate about transforming messy, real-world data into clear, actionable insights that drive smarter business decisions.

During my co-op at Vantage Retail Analytics, I built three Power BI dashboards that saved the operations team six hours of manual reporting per week, wrote 20+ optimized SQL queries that contributed to a 12% revenue uplift in seasonal campaigns, and automated a Python-based data validation workflow that reduced errors by 40%. I thrive in environments where data tells a story — and I make sure it's one that stakeholders can actually act on.

What sets me apart is my ability to bridge the gap between technical analysis and business context. I don't just surface numbers — I ask why they matter, who needs them, and what decision they should inform. Whether it's cleaning a messy dataset, designing a dashboard from scratch, or presenting findings to a non-technical audience, I bring both precision and clarity to every step.

I'm currently seeking full-time Data Analyst roles in the GTA where I can contribute from day one. If you're looking for someone who is detail-first, business-aware, and genuinely excited about data — let's connect.`,
    topSkills: ["SQL", "Microsoft Power BI", "Python"]
  },

  featured: [
    {
      type: "Link",
      icon: "💻",
      title: "SQL Practice Repository — 50+ Problems with Solutions",
      subtitle: "github.com · Shared by Priya Nair",
      url: "#"
    },
    {
      type: "Link",
      icon: "📊",
      title: "Retail Sales Dashboard — Power BI Capstone Project",
      subtitle: "app.powerbi.com · Shared by Priya Nair",
      url: "#"
    },
    {
      type: "Post",
      icon: "📝",
      title: "I just finished my Business Analytics co-op — here's what I learned about real-world data work",
      subtitle: "Priya Nair · 34 reactions",
      url: "#"
    }
  ],

  activity: {
    posts: [
      {
        timeAgo: "2w",
        content: "Just wrapped up my Business Analytics co-op at Vantage Retail Analytics — and I have so much to reflect on. Here's what real-world data work actually looks like vs. what I expected in class...",
        imageEmoji: "📊",
        imageBg: "#e8f0fe",
        reactions: 34,
        comments: 8
      },
      {
        timeAgo: "1mo",
        content: "SQL tip of the week: Window Functions. If you're analyzing trends, rankings, or running totals — window functions will save your life. Here's a breakdown with real examples...",
        imageEmoji: "💻",
        imageBg: "#f0fdf4",
        reactions: 51,
        comments: 12
      }
    ],
    comments: [
      {
        timeAgo: "1w",
        action: "commented on a post",
        text: "This SQL window function explanation is exactly what I needed when I was starting out with CTEs. Sharing this with my entire cohort at Conestoga!"
      },
      {
        timeAgo: "2w",
        action: "commented on a post",
        text: "Congrats on the Power BI certification! It's such a powerful tool once you get past the DAX learning curve 😄 The calculated columns vs. measures distinction tripped me up for weeks."
      },
      {
        timeAgo: "3w",
        action: "commented on a post",
        text: "Such a clean breakdown of star vs. snowflake schema. Bookmarked this for my data warehousing assignment — exactly the kind of real-world context that makes the theory click."
      }
    ]
  },

  experience: [
    {
      title: "Data Analyst Co-op",
      company: "Vantage Retail Analytics",
      initials: "VR",
      color: "#0a66c2",
      type: "Co-op",
      start: "May 2024",
      end: "Aug 2024",
      duration: "4 mos",
      location: "Mississauga, Ontario, Canada · Hybrid",
      bullets: [
        "Built 3 Power BI dashboards tracking inventory, sales, and promotional performance — reduced manual reporting by 6 hrs/week across the operations team.",
        "Wrote 20+ SQL queries (PostgreSQL) to analyze seasonal campaign data; findings contributed to a 12% revenue uplift in Q3.",
        "Automated a Python data validation workflow using pandas; reduced data entry errors by 40% and improved pipeline reliability.",
        "Collaborated with cross-functional teams (marketing, logistics) to translate business questions into data requirements and deliver insight-ready reports."
      ]
    },
    {
      title: "Sales Associate",
      company: "Indigo Books & Music",
      initials: "IB",
      color: "#b24020",
      type: "Part-time",
      start: "Sep 2022",
      end: "Apr 2024",
      duration: "1 yr 8 mos",
      location: "Mississauga, Ontario, Canada · On-site",
      bullets: [
        "Ranked in top 10% of sales associates across 3 consecutive quarters by applying product knowledge and consultative selling techniques.",
        "Trained 4 new team members on POS systems, store procedures, and customer service standards — reduced average onboarding time by 2 days."
      ]
    },
    {
      title: "Data Analyst Volunteer",
      company: "NPower Canada",
      initials: "NP",
      color: "#057642",
      type: "Volunteer",
      start: "Jan 2024",
      end: "Apr 2024",
      duration: "4 mos",
      location: "Toronto, Ontario, Canada · Remote",
      bullets: [
        "Analyzed program enrollment and completion data for 500+ participants using Excel and Python to identify trends in learner outcomes.",
        "Identified a 22% drop-off rate at the mid-program checkpoint; surfaced findings to program leadership with visualizations and recommendations.",
        "Created 2 Power BI summary dashboards used in executive reporting to funders and board members."
      ]
    }
  ],

  education: [
    {
      school: "Conestoga College",
      initials: "CC",
      color: "#7d4cdb",
      degree: "Graduate Certificate",
      field: "Business Analytics",
      start: "Jan 2023",
      end: "Aug 2024",
      gpa: "3.8/4.0",
      honours: "Dean's List 2024",
      coursework: ["Data Warehousing & ETL", "Predictive Analytics", "Business Intelligence Tools", "Applied Statistics", "Database Design (SQL)"],
      activities: "Analytics Club Member · 2nd Place, Conestoga Data Hackathon 2024"
    },
    {
      school: "Panjab University",
      initials: "PU",
      color: "#b24020",
      degree: "Bachelor of Commerce",
      field: "Finance",
      start: "2018",
      end: "2022",
      gpa: null,
      honours: null,
      coursework: ["Financial Accounting", "Corporate Finance", "Business Statistics", "Economics"],
      activities: "Finance Society — Treasurer (2020–2022)"
    }
  ],

  certifications: [
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      initials: "G",
      color: "#4285F4",
      issueDate: "Nov 2023",
      credentialId: "GDA-2023-11-PNAIR",
      credentialUrl: "#"
    },
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      initials: "HR",
      color: "#00EA64",
      issueDate: "Jul 2024",
      credentialId: "HR-SQL-ADV-2024",
      credentialUrl: "#"
    },
    {
      name: "Microsoft Power BI Data Analyst Associate",
      issuer: "Microsoft",
      initials: "MS",
      color: "#0078D4",
      issueDate: "Mar 2024",
      credentialId: "MS-PBI-DA-2024-PN",
      credentialUrl: "#"
    },
    {
      name: "Python for Everybody Specialization",
      issuer: "Coursera / University of Michigan",
      initials: "Py",
      color: "#3776AB",
      issueDate: "Feb 2023",
      credentialId: "COURSERA-PY4E-2023",
      credentialUrl: "#"
    }
  ],

  projects: [
    {
      title: "Retail Sales Dashboard — Power BI Capstone",
      start: "Jun 2024",
      end: "Aug 2024",
      associatedWith: "Conestoga College",
      associatedInitials: "CC",
      associatedColor: "#7d4cdb",
      url: "#",
      description: "Built an end-to-end retail sales dashboard in Power BI tracking inventory, promotional performance, and seasonal revenue trends across 12 store locations. Integrated with a PostgreSQL data warehouse via DirectQuery. Dashboard reduced manual reporting by 6 hrs/week across the operations team.",
      contributors: [
        { initials: "KP", color: "#0a66c2" },
        { initials: "SR", color: "#b24020" }
      ]
    },
    {
      title: "SQL Practice Repository — 50+ Problems with Solutions",
      start: "Mar 2024",
      end: "May 2024",
      associatedWith: "Conestoga College",
      associatedInitials: "CC",
      associatedColor: "#7d4cdb",
      url: "#",
      description: "A curated GitHub repository of 50+ SQL problems spanning window functions, joins, CTEs, subqueries, and query optimization — each with documented solutions, explanations, and sample datasets. Used by peers as a study resource.",
      contributors: []
    }
  ],

  volunteering: [
    {
      role: "Data Analyst Volunteer",
      org: "NPower Canada",
      initials: "NP",
      color: "#057642",
      start: "Jan 2024",
      end: "Apr 2024",
      duration: "4 mos",
      cause: "Education",
      description: "Analyzed program enrollment data for 500+ participants, identified a 22% mid-program drop-off rate, and created Power BI dashboards for executive reporting to funders and board members."
    },
    {
      role: "Community Ambassador",
      org: "ORU Community",
      initials: "OR",
      color: "#7d4cdb",
      start: "Mar 2026",
      end: "Present",
      duration: null,
      cause: "Education",
      description: "Representing ORU's mission to connect internationally trained professionals with career opportunities in Canada. Facilitate peer networking events and share resources with newcomers entering the tech job market."
    }
  ],

  skills: [
    { name: "SQL", category: "Data Analytics", endorsements: 18, verified: true, pinned: true },
    { name: "Microsoft Power BI", category: "Data Analytics", endorsements: 14, verified: true, pinned: true },
    { name: "Python", category: "Data Analytics", endorsements: 11, verified: false, pinned: true },
    { name: "Data Analysis", category: "Data Analytics", endorsements: 9, verified: false, pinned: false },
    { name: "Excel (Advanced)", category: "Data Analytics", endorsements: 7, verified: false, pinned: false },
    { name: "DAX", category: "Business Intelligence", endorsements: 6, verified: false, pinned: false },
    { name: "Data Visualization", category: "Business Intelligence", endorsements: 8, verified: false, pinned: false },
    { name: "ETL / Data Pipelines", category: "Business Intelligence", endorsements: 5, verified: false, pinned: false },
    { name: "PostgreSQL", category: "Tools & Platforms", endorsements: 9, verified: false, pinned: false },
    { name: "Google Analytics", category: "Tools & Platforms", endorsements: 4, verified: false, pinned: false }
  ],

  recommendations: {
    received: [
      {
        author: "Rajan Mehta",
        initials: "RM",
        color: "#0a66c2",
        title: "Senior Data Analyst at Vantage Retail Analytics",
        date: "August 15, 2024",
        relationship: "Rajan managed Priya directly",
        text: `I had the pleasure of supervising Priya during her co-op term at Vantage Retail Analytics, and I can say without hesitation that she is one of the most capable and self-directed analysts I have worked with at the co-op level.

From her first week, Priya took ownership of her projects and delivered production-quality SQL queries and dashboards that our full-time team now relies on daily. What impressed me most was her ability to translate ambiguous business questions into structured analytical frameworks — a skill that takes most analysts years to develop.

Priya's communication style is equally strong. She never just handed over a report; she walked stakeholders through the findings, explained the methodology, and proactively flagged limitations. I'd hire her full-time without hesitation.`
      },
      {
        author: "Alicia Fernandez",
        initials: "AF",
        color: "#057642",
        title: "Program Manager at NPower Canada",
        date: "May 3, 2024",
        relationship: "Alicia worked with Priya on the same team",
        text: `Priya volunteered with us during a critical reporting period, and her contribution was exceptional. She came in, learned our data structure quickly, and within two weeks had built dashboards we've been asking for months.

Beyond the technical output, Priya stood out for her organizational skills and proactive communication — she sent weekly updates, flagged blockers early, and always asked the right questions before diving into work. She would be a strong asset to any data or analytics team.`
      }
    ],
    given: [
      {
        author: "Meera Singh",
        initials: "MS",
        color: "#b24020",
        title: "Business Analyst Co-op at RBC",
        date: "September 2, 2024",
        relationship: "Priya worked with Meera on the same team",
        text: `Meera was an outstanding collaborator during our time in the Conestoga Analytics program. Her ability to break down complex problems and communicate findings clearly made our group projects consistently stronger. She's exactly the kind of team player any data team would be lucky to have.`
      }
    ]
  },

  languages: [
    { language: "English", proficiency: "Full Professional Proficiency" },
    { language: "French", proficiency: "Professional Working Proficiency" }
  ],

  interests: [
    { company: "Google", initials: "G", color: "#4285F4", followers: "34.2M followers" },
    { company: "Microsoft", initials: "Ms", color: "#0078D4", followers: "22.8M followers" },
    { company: "Tableau (Salesforce)", initials: "T", color: "#E8702A", followers: "410K followers" },
    { company: "dbt Labs", initials: "dbt", color: "#FF694A", followers: "98K followers" }
  ]
};
