// ─── LinkedIn Guide Data ───────────────────────────────────────────────────
// Each key maps to a profile section or sub-element.
// blocks[] is rendered by the GuideDrawer component.
// Supported block types:
//   heading | subheading | text | bullet-list | do-list | dont-list |
//   numbered-list | formula | code-block | example-list | pro-tip

const guideData = {

  /* ═══════════════════════════════════════════════
     BANNER
  ═══════════════════════════════════════════════ */
  banner: {
    title: "Banner Image",
    icon: "🖼️",
    accentColor: "#0a66c2",
    blocks: [
      { type: "text", text: "Your banner is prime real estate for personal branding — it's the first thing people see when they visit your profile. Make it intentional." },

      { type: "heading", text: "Banner Dimensions" },
      { type: "bullet-list", items: [
        "Recommended size: 1584 × 396 pixels",
        "File size: Under 8MB",
        "Formats accepted: JPG, PNG, or GIF"
      ]},

      { type: "heading", text: "Banner Design Ideas" },
      { type: "subheading", text: "For Job Seekers" },
      { type: "bullet-list", items: [
        "Your tagline or value proposition",
        "Industry-related imagery (data visualizations, tech graphics, etc.)",
        "Your skills or tools you work with"
      ]},
      { type: "subheading", text: "For Business Owners / Freelancers" },
      { type: "bullet-list", items: [
        "Your services or products",
        "Brand colors and logo",
        "Customer testimonials or results"
      ]},
      { type: "subheading", text: "For Students" },
      { type: "bullet-list", items: [
        "University logo or campus imagery",
        "Academic achievements or certifications",
        "Career aspirations"
      ]},

      { type: "heading", text: "Canva Step-by-Step Guide" },
      { type: "numbered-list", items: [
        "Sign up at canva.com",
        "Search for \"LinkedIn Banner\" in the search bar",
        "Browse templates or start from scratch (1584 × 396 px)",
        "Customize: change background colors/images, add your headline or tagline, include icons representing your skills/tools, use your brand colors if applicable",
        "Download as PNG (highest quality)",
        "Upload to LinkedIn"
      ]},
      { type: "subheading", text: "Free Canva Templates to Try" },
      { type: "bullet-list", items: [
        "Professional gradient backgrounds",
        "Minimalist with quote",
        "Industry-specific (tech, finance, healthcare, etc.)",
        "Personal brand template"
      ]},

      { type: "heading", text: "Design Platforms" },
      { type: "bullet-list", items: [
        "Canva — free, most beginner-friendly",
        "Adobe Express — clean templates, free tier available",
        "Figma — full design control, free for individuals",
        "Visme — good for data-heavy or infographic styles"
      ]},

      { type: "heading", text: "Free Stock Photo Sources for Banners" },
      { type: "bullet-list", items: [
        "Unsplash (unsplash.com) — high-quality, completely free",
        "Pexels (pexels.com) — wide variety, no attribution needed",
        "Pixabay — free media including illustrations",
        "Burst by Shopify — business-focused photography"
      ]},

      { type: "pro-tip", text: "Don't leave the default blue banner. Even a simple gradient with your name and title is 10× better than the default. It takes 10 minutes in Canva and makes a huge first impression." }
    ]
  },

  /* ═══════════════════════════════════════════════
     PROFILE PHOTO
  ═══════════════════════════════════════════════ */
  photo: {
    title: "Profile Picture",
    icon: "📷",
    accentColor: "#057642",
    blocks: [
      { type: "text", text: "Profiles with professional photos get up to 21× more profile views and 9× more connection requests. Your photo is your first impression." },

      { type: "heading", text: "DO ✅" },
      { type: "do-list", items: [
        "Use a high-resolution headshot (400 × 400 pixels minimum)",
        "Face should take up 60% of the frame",
        "Use a clean, solid background (preferably plain or blurred)",
        "Wear professional attire appropriate for your industry",
        "Smile naturally and make eye contact with the camera",
        "Use good lighting — natural light works best",
        "Keep it recent (within the last 2 years)"
      ]},

      { type: "heading", text: "DON'T ❌" },
      { type: "dont-list", items: [
        "Use group photos or cropped-out images",
        "Include sunglasses, hats, or heavy filters",
        "Use casual selfies with distracting backgrounds",
        "Upload blurry or pixelated images",
        "Use logos instead of your face (unless it's a company page)"
      ]},

      { type: "heading", text: "AI-Generated Headshots Using Gemini (Free)" },
      { type: "numbered-list", items: [
        "Go to gemini.google.com",
        "Click on \"Create images\" from the tools menu",
        "Upload your casual photo (any clear face photo works)",
        "Use the prompt below",
        "Wait 10–30 seconds for generation",
        "Download the best result — test 2–3 different photos for best output"
      ]},
      { type: "code-block", text: `Generate a professional LinkedIn headshot from this photo. The image should have:
- Professional business attire (formal shirt/blazer)
- Clean, neutral background (office or solid color)
- Professional lighting
- Sharp focus on the face
- Confident, approachable expression
- Corporate/professional setting
Style: Corporate photography, high-quality professional headshot` },

      { type: "heading", text: "Other AI Profile Picture Generators" },
      { type: "bullet-list", items: [
        "ProfilePicture.ai — fast, multiple styles",
        "Secta.ai — highly realistic corporate headshots",
        "Aragon.ai — upload 12+ photos for best results",
        "BetterPic — affordable bulk generation"
      ]},

      { type: "heading", text: "Background Removal Tools" },
      { type: "text", text: "If you have a good photo but a distracting background, use these free tools to remove it and replace with a clean solid or blurred background:" },
      { type: "bullet-list", items: [
        "remove.bg — instant, free, very accurate",
        "PhotoRoom — mobile-friendly, great for quick edits",
        "Slazzer — free alternative with batch processing"
      ]},

      { type: "pro-tip", text: "The better quality your original photo (clear face, good lighting, looking straight at camera), the better your AI-generated headshot will be. Start with the best photo you have." }
    ]
  },

  /* ═══════════════════════════════════════════════
     NAME & HEADLINE
  ═══════════════════════════════════════════════ */
  headline: {
    title: "Name & Headline",
    icon: "🏷️",
    accentColor: "#0a66c2",
    blocks: [
      { type: "text", text: "Your headline appears everywhere on LinkedIn — search results, connection requests, comments, and posts. It's arguably the most important line on your profile." },

      { type: "heading", text: "DO ✅" },
      { type: "do-list", items: [
        "Be clear about who you are or what you aspire to be",
        "Use keywords recruiters search for (SQL, Python, Data Analyst, Marketing, etc.)",
        "Add your value proposition — how you help others",
        "Keep it scannable: the first 40 characters are most important on mobile",
        "Update it as your career evolves"
      ]},

      { type: "heading", text: "DON'T ❌" },
      { type: "dont-list", items: [
        "Just write your job title (e.g., \"Software Engineer\")",
        "Use vague descriptions (\"Passionate professional\")",
        "Overuse buzzwords without substance (\"Rockstar Ninja Guru\")",
        "Leave it as the LinkedIn default"
      ]},

      { type: "heading", text: "The Headline Formula" },
      { type: "formula", text: "[Role / Aspiration]  ·  [Key Skills / Tools]  ·  [Value Proposition]" },

      { type: "heading", text: "Industry-Specific Examples" },

      { type: "subheading", text: "Data Analytics" },
      { type: "example-list", items: [
        "Data Analyst | SQL, Python, Power BI | Turning Data into Actionable Business Insights",
        "Business Intelligence Analyst | Tableau, SQL, R | Helping Organizations Make Data-Driven Decisions",
        "Aspiring Data Scientist | Python, Machine Learning, Statistics | Building Predictive Models"
      ]},

      { type: "subheading", text: "Software Development" },
      { type: "example-list", items: [
        "Full-Stack Developer | React, Node.js, AWS | Building Scalable Web Applications",
        "Frontend Engineer | JavaScript, React, TypeScript | Creating Seamless User Experiences",
        "Software Engineer | Python, Django, PostgreSQL | Solving Complex Technical Challenges"
      ]},

      { type: "subheading", text: "Marketing" },
      { type: "example-list", items: [
        "Digital Marketing Specialist | SEO, Google Ads, Content Strategy | Driving Growth Through Data-Driven Campaigns",
        "Social Media Manager | Instagram, TikTok, Meta Ads | Building Engaged Online Communities",
        "Content Marketing Strategist | SEO, Copywriting, Analytics | Creating Content That Converts"
      ]},

      { type: "subheading", text: "Finance" },
      { type: "example-list", items: [
        "Financial Analyst | Excel, Financial Modeling, SQL | Transforming Numbers into Strategic Insights",
        "Investment Banking Analyst | M&A, Valuation, DCF | Supporting Strategic Financial Decisions",
        "Corporate Finance Professional | FP&A, Budgeting, Forecasting | Driving Financial Performance"
      ]},

      { type: "subheading", text: "Sales" },
      { type: "example-list", items: [
        "B2B Sales Executive | CRM, Lead Generation, Negotiation | Helping Businesses Find the Right Solutions",
        "Account Manager | Client Relations, Salesforce, Strategy | Building Long-Term Client Partnerships",
        "Sales Development Representative | Prospecting, Cold Calling, Pipeline Management | Driving Revenue Growth"
      ]},

      { type: "subheading", text: "Project Management" },
      { type: "example-list", items: [
        "Project Manager | Agile, Scrum, JIRA | Delivering Projects On Time and On Budget",
        "Product Manager | Roadmapping, User Research, Analytics | Building Products Users Love",
        "Operations Manager | Process Optimization, Lean, Six Sigma | Streamlining Business Operations"
      ]},

      { type: "pro-tip", text: "The first 40 characters of your headline show up on mobile search results. Lead with your strongest identifier — your role or aspiration — before anything else." }
    ]
  },

  /* ═══════════════════════════════════════════════
     LOCATION
  ═══════════════════════════════════════════════ */
  location: {
    title: "Location",
    icon: "📍",
    accentColor: "#b24020",
    blocks: [
      { type: "heading", text: "Why Location Matters" },
      { type: "text", text: "Recruiters actively filter candidates by location. If your location isn't specific enough, you may not appear in relevant searches — even if you're the perfect fit for a role." },

      { type: "heading", text: "Tips" },
      { type: "bullet-list", items: [
        "Be specific: instead of \"Canada,\" use \"Toronto, Ontario\" or \"Greater Toronto Area (GTA)\"",
        "If open to relocation, mention it explicitly in your headline or About section — e.g., \"Open to relocation across Canada\"",
        "If you work remotely or want remote roles, add \"Open to Remote Opportunities\" in your About section or headline",
        "Don't put a city you're not actually in — it can create awkward conversations with recruiters"
      ]},

      { type: "pro-tip", text: "City-level specificity dramatically improves your appearance in recruiter searches. \"Toronto, Ontario\" will surface you in far more relevant results than just \"Canada.\"" }
    ]
  },

  /* ═══════════════════════════════════════════════
     OPEN TO WORK
  ═══════════════════════════════════════════════ */
  openToWork: {
    title: "Open to Work",
    icon: "🟢",
    accentColor: "#057642",
    blocks: [
      { type: "text", text: "LinkedIn's \"Open to Work\" feature signals to recruiters that you're job hunting. But should you use it, and which setting should you choose?" },

      { type: "heading", text: "Option 1: Share with All LinkedIn Members" },
      { type: "text", text: "Adds a green \"Open to Work\" ring around your profile picture, visible to everyone." },
      { type: "bullet-list", items: [
        "✅ More visibility — anyone browsing your profile can see it",
        "✅ Signals active intent to recruiters and connections",
        "⚠️ Your current employer might see it",
        "⚠️ Can come across as desperate to some recruiters"
      ]},

      { type: "heading", text: "Option 2: Share with Recruiters Only" },
      { type: "text", text: "Hidden from the public. Only LinkedIn Recruiter users can see your status." },
      { type: "bullet-list", items: [
        "✅ Discreet — safe if you're currently employed",
        "✅ Reaches recruiters directly through their search filters",
        "⚠️ Lower overall visibility compared to public option"
      ]},

      { type: "heading", text: "Our Recommendation" },
      { type: "bullet-list", items: [
        "Unemployed → Use the public option. No reason to hide it — it increases your chances significantly.",
        "Employed but actively looking → Use recruiters-only. It's discreet and still effective.",
        "Passively open → Use recruiters-only or skip it entirely.",
        "Strong networker → You may not need it at all if you're proactively connecting and posting."
      ]},

      { type: "heading", text: "Better Strategy Than Relying on \"Open to Work\"" },
      { type: "text", text: "The most effective job seekers don't wait — they create their own pipeline:" },
      { type: "bullet-list", items: [
        "Network intentionally with people at target companies",
        "Engage with content daily (comments, posts, reactions)",
        "Reach out to recruiters directly with a personalized, relevant message",
        "Build your personal brand through consistent posting — let opportunities come to you"
      ]},

      { type: "pro-tip", text: "Being proactive — networking, posting, and reaching out — consistently outperforms passive job hunting behind a badge. Treat LinkedIn like an active tool, not a passive resume." }
    ]
  },

  /* ═══════════════════════════════════════════════
     CUSTOM URL
  ═══════════════════════════════════════════════ */
  customUrl: {
    title: "Custom Profile URL",
    icon: "🔗",
    accentColor: "#915907",
    blocks: [
      { type: "heading", text: "Why Customize Your URL?" },
      { type: "bullet-list", items: [
        "Looks more professional — compare linkedin.com/in/johndoe vs linkedin.com/in/john-doe-8b4f2a",
        "Easier to share — put it on your resume, email signature, business cards",
        "Better for personal branding and makes you more memorable",
        "Improves your visibility in Google search results (SEO)"
      ]},

      { type: "heading", text: "How to Customize Your URL" },
      { type: "numbered-list", items: [
        "Go to your LinkedIn profile page",
        "Click \"Edit public profile & URL\" in the top right",
        "Click the pencil ✏️ icon next to your current URL",
        "Enter your custom URL: linkedin.com/in/yourname",
        "Click \"Save\""
      ]},

      { type: "heading", text: "Best Practices" },
      { type: "bullet-list", items: [
        "Use your full professional name if available: linkedin.com/in/johndoe",
        "If your name is taken, try: linkedin.com/in/johndoe1, linkedin.com/in/john-doe, or linkedin.com/in/johndoecpa",
        "Keep it professional and easy to type from memory",
        "No special characters — only letters, numbers, and hyphens allowed",
        "Avoid numbers at the end unless necessary (e.g., linkedin.com/in/johndoe123 looks less clean)"
      ]},

      { type: "pro-tip", text: "Add your LinkedIn URL to your resume header and email signature right now. It takes 30 seconds and signals professionalism and attention to detail to every recruiter who sees it." }
    ]
  },

  /* ═══════════════════════════════════════════════
     ABOUT
  ═══════════════════════════════════════════════ */
  about: {
    title: "About Section",
    icon: "📝",
    accentColor: "#0a66c2",
    blocks: [
      { type: "text", text: "Your About section is your elevator pitch in written form. It's the first place recruiters and connections look to understand who you are. Aim for 400–500 words — detailed enough to be compelling, concise enough to be read." },

      { type: "heading", text: "Structure (400–500 words ideal)" },
      { type: "subheading", text: "Paragraph 1 — Who You Are (Present)" },
      { type: "bullet-list", items: ["Your current role or aspiration", "Key skills and expertise", "What you're passionate about in your field"] },
      { type: "subheading", text: "Paragraph 2 — What You've Done (Past)" },
      { type: "bullet-list", items: ["Relevant experience highlights", "Key achievements with numbers/metrics", "Notable projects or contributions"] },
      { type: "subheading", text: "Paragraph 3 — What You Offer (Value)" },
      { type: "bullet-list", items: ["How you help others/organizations", "Your unique approach or methodology", "Your career goals or what you're looking for"] },
      { type: "subheading", text: "Paragraph 4 — Call to Action" },
      { type: "bullet-list", items: ["How people can connect with you", "What opportunities you're open to", "Contact information or next steps"] },

      { type: "heading", text: "Writing Tips ✅" },
      { type: "do-list", items: [
        "Write in first person (\"I\" not \"John is...\")",
        "Use short paragraphs (2–3 sentences max)",
        "Add line breaks for readability",
        "Include keywords naturally (tools, skills, industries)",
        "Show personality while staying professional",
        "Use specific examples and numbers wherever possible",
        "NO emojis — keep it professional"
      ]},

      { type: "heading", text: "Avoid ❌" },
      { type: "dont-list", items: [
        "Generic buzzwords without context (\"passionate,\" \"dedicated,\" \"hardworking\")",
        "Writing your resume in paragraph form",
        "Being too humble or too boastful",
        "Copying someone else's About section word-for-word"
      ]},

      { type: "heading", text: "AI-Powered About Section — Prompt Template" },
      { type: "text", text: "Copy and paste this into ChatGPT, Claude, or Gemini. Fill in the bracketed fields with your actual info:" },
      { type: "code-block", text: `I need help creating an optimized LinkedIn About section. I want it to be keyword-rich, ATS-friendly, and compelling to both recruiters and hiring managers.

My Information:
- Current Role/Status: [e.g., "Data Analyst with 3 years of experience" or "Recent graduate in Computer Science"]
- Industry: [e.g., Finance, Tech, Healthcare, Marketing]
- Key Skills: [List 8-10 top skills]
- Career Goal: [What you want to do next]

Job Descriptions I'm Targeting:
[Paste 10 job descriptions here, labeled JD1, JD2, etc.]

My Resume:
[Paste your full resume here]

Requirements:
1. Write in first person ("I" not "he/she")
2. 400-500 words total
3. Four paragraphs: current role/expertise, key achievements with metrics, my approach and value, what I'm looking for + call to action
4. Include keywords naturally from the job descriptions
5. No emojis, professional but personable tone
6. Include specific tools, technologies, and methodologies from the JDs
7. Incorporate metrics and quantifiable achievements from my resume
8. Make it unique to my background — avoid generic phrases

Generate the LinkedIn About section now.` },

      { type: "heading", text: "Refinement Prompt (after first draft)" },
      { type: "code-block", text: `This is good, but please refine it further:

1. Make paragraph 1 more attention-grabbing with a compelling opening line
2. In paragraph 2, add more specific metrics and outcomes
3. Make paragraph 3 more about the unique value I bring (my differentiator)
4. In paragraph 4, be more specific about what opportunities I'm seeking
5. Ensure these specific keywords appear naturally: [list 5-7 must-have keywords]
6. Reduce any buzzwords that feel generic or overused
7. Make the tone slightly more [formal/conversational/confident — choose one]

Please rewrite with these adjustments.` },

      { type: "heading", text: "Before & After Example" },
      { type: "subheading", text: "❌ Generic (Before)" },
      { type: "example-list", items: ["I am a passionate and dedicated marketing professional with experience in digital marketing. I have worked on various campaigns and projects. I am a team player with excellent communication skills. I am looking for new opportunities to grow my career.\n\nProblems: Vague, no specifics, buzzwords, no metrics, generic."] },
      { type: "subheading", text: "✅ Optimized (After AI + Editing)" },
      { type: "example-list", items: ["I'm a Digital Marketing Specialist with 4+ years of experience driving growth for B2B SaaS companies through data-driven campaigns and content strategy. My expertise lies in SEO, Google Ads, email marketing, and automation tools like HubSpot and Marketo.\n\nAt TechCorp, I led campaigns that generated $2M in pipeline revenue and increased organic traffic by 180% YoY. I managed a $500K annual ad budget, achieving a 45% reduction in cost-per-lead. My content strategy resulted in 15+ pieces ranking on page 1 of Google.\n\nWhy it works: specific role, metrics, tools, achievements, personality, clear CTA."] },

      { type: "heading", text: "Student / Entry-Level Prompt Variation" },
      { type: "text", text: "If you're a student or entry-level professional without much work experience, use this variation:" },
      { type: "code-block", text: `I need help creating a LinkedIn About section for an entry-level professional / recent graduate.

My Information:
- Degree: [Your degree and major]
- University: [Your school]
- Graduation Year: [Year]
- Relevant Coursework: [List 3-5 relevant classes]
- Projects: [Brief description of 2-3 key projects]
- Internships/Part-time work: [Any relevant experience]
- Skills: [Technical and soft skills]
- Career Goal: [What role/industry you're targeting]

Job Descriptions I'm Targeting:
[Paste 5-10 entry-level job descriptions]

Requirements:
1. Write in first person
2. Focus on academic projects, internships, and skills rather than extensive work experience
3. Highlight relevant coursework and how it applies to real-world work
4. Show enthusiasm and willingness to learn
5. Include technical skills and tools I've used
6. 300-400 words
7. No emojis, professional tone
8. Include keywords from the job descriptions

Generate the About section now.` },

      { type: "heading", text: "When to Update Your About Section" },
      { type: "bullet-list", items: [
        "Every 6 months (or when you change roles)",
        "When pivoting to a new industry or role type",
        "After major achievements or certifications",
        "When your career goals shift"
      ]},
      { type: "pro-tip", text: "Keep a running document with your achievements, metrics, and projects. When you update your About section, you'll have fresh examples ready to drop in — instead of trying to remember everything from scratch." }
    ]
  },

  /* ═══════════════════════════════════════════════
     FEATURED
  ═══════════════════════════════════════════════ */
  featured: {
    title: "Featured Section",
    icon: "⭐",
    accentColor: "#915907",
    blocks: [
      { type: "text", text: "Your Featured section is your portfolio space — the first thing visitors see after your About section. Use it to showcase your best, most impressive work." },

      { type: "heading", text: "What to Add" },
      { type: "bullet-list", items: [
        "Portfolio projects — websites, dashboards, data reports, design work",
        "Published articles or blog posts you've written",
        "Case studies you've worked on",
        "Media appearances — interviews, podcasts, news features",
        "Presentations or talks you've given",
        "Resume (link to Google Drive or personal website)",
        "Video introductions or project demo recordings",
        "Certifications or awards (link to credential)"
      ]},

      { type: "heading", text: "How to Add to Featured" },
      { type: "numbered-list", items: [
        "Scroll to the Featured section on your profile",
        "Click the \"+\" button on the right",
        "Choose type: Post, Article, Link, or Media",
        "Add a title and description for each item",
        "Rearrange the order by dragging items — put your best work first"
      ]},

      { type: "heading", text: "What Makes a Strong Featured Item" },
      { type: "bullet-list", items: [
        "Clear, professional thumbnail or preview image",
        "Descriptive title that explains what it is",
        "Brief description of the outcome or impact",
        "Links that actually work and load quickly",
        "Recency — keep this updated with your latest work"
      ]},

      { type: "pro-tip", text: "Keep your Featured section to 3–5 items maximum. Quality over quantity — a curated set of 3 excellent pieces beats 10 mediocre ones. Update it every time you complete a major project or get a new certification." }
    ]
  },

  /* ═══════════════════════════════════════════════
     EXPERIENCE
  ═══════════════════════════════════════════════ */
  experience: {
    title: "Experience Section",
    icon: "💼",
    accentColor: "#0a66c2",
    blocks: [
      { type: "text", text: "The Experience section is where recruiters spend the most time. Every role should tell a clear story of impact — not just a list of tasks." },

      { type: "heading", text: "Essential Elements for Each Role" },
      { type: "bullet-list", items: [
        "Job Title — be clear and use industry-standard titles",
        "Company Name — include company type if not well-known (e.g., \"TechCorp — B2B SaaS Startup\")",
        "Duration — Month/Year to Month/Year (or Present)",
        "Location — City, Province (or \"Remote\")",
        "Description — 3–5 bullet points of impact and responsibilities"
      ]},

      { type: "heading", text: "The Bullet Point Formula" },
      { type: "formula", text: "[Action Verb]  +  [What You Did]  +  [How / Tool Used]  +  [Result / Impact]" },

      { type: "heading", text: "Good vs. Bad Examples" },
      { type: "subheading", text: "❌ Weak bullets" },
      { type: "dont-list", items: [
        "Responsible for data analysis",
        "Managed social media",
        "Worked on projects"
      ]},
      { type: "subheading", text: "✅ Strong bullets" },
      { type: "do-list", items: [
        "Analyzed customer behavior data using SQL and Python, identifying trends that increased retention by 15%",
        "Managed Instagram and LinkedIn accounts, growing followers by 200% and engagement by 150% in 6 months",
        "Led cross-functional team of 5 to deliver $2M project 2 weeks ahead of schedule, improving client satisfaction scores by 25%"
      ]},

      { type: "heading", text: "Power Action Verbs by Category" },
      { type: "subheading", text: "Leadership" },
      { type: "example-list", items: ["Led · Managed · Directed · Coordinated · Supervised · Mentored · Trained"] },
      { type: "subheading", text: "Achievement" },
      { type: "example-list", items: ["Achieved · Exceeded · Delivered · Generated · Increased · Reduced · Improved"] },
      { type: "subheading", text: "Creation" },
      { type: "example-list", items: ["Developed · Created · Designed · Built · Launched · Established · Implemented"] },
      { type: "subheading", text: "Analysis" },
      { type: "example-list", items: ["Analyzed · Evaluated · Assessed · Researched · Investigated · Identified · Optimized"] },
      { type: "subheading", text: "Communication" },
      { type: "example-list", items: ["Presented · Communicated · Collaborated · Partnered · Negotiated · Consulted"] },

      { type: "pro-tip", text: "Start every bullet with a past-tense action verb (even for current roles). Recruiters skim — leading with a strong verb immediately signals impact. Aim for at least one metric (%, $, time saved, team size) in every bullet." }
    ]
  },

  /* ═══════════════════════════════════════════════
     EDUCATION
  ═══════════════════════════════════════════════ */
  education: {
    title: "Education Section",
    icon: "🎓",
    accentColor: "#057642",
    blocks: [
      { type: "text", text: "Your Education section matters more than you think — especially for entry-level candidates and career changers. Fill it out completely." },

      { type: "heading", text: "What to Include for Each Institution" },
      { type: "bullet-list", items: [
        "Degree & Field of Study (e.g., Bachelor of Business Administration – Analytics)",
        "Institution Name",
        "Graduation Year (or expected graduation year)",
        "GPA — include it if 3.5 or higher, otherwise skip",
        "Relevant Coursework — especially important if you're entry-level (list 4–6 courses)",
        "Honors & Awards — Dean's List, scholarships, academic recognition",
        "Activities & Societies — clubs, student government, sports teams, case competitions"
      ]},

      { type: "heading", text: "Adding Descriptions" },
      { type: "text", text: "Use the description field to highlight major projects, thesis work, or capstone projects that are relevant to your career goals. This is valuable real estate that most students leave blank." },
      { type: "example-list", items: [
        "Capstone Project: Built a sales forecasting model using Python and Power BI for a local retail client, reducing inventory overstock by 18%",
        "Case Competition: Placed 2nd in the RBC Analytics Challenge — developed a churn prediction model with 89% accuracy"
      ]},

      { type: "heading", text: "Pro Tips by Career Stage" },
      { type: "subheading", text: "Students & Recent Grads" },
      { type: "bullet-list", items: [
        "Add 4–6 relevant courses to make up for limited work experience",
        "List academic projects in detail — these are equivalent to work experience",
        "Include extracurriculars — they show leadership and soft skills",
        "Add all scholarships and academic awards"
      ]},
      { type: "subheading", text: "Experienced Professionals" },
      { type: "bullet-list", items: [
        "Keep education concise — your experience section matters more now",
        "Still include degree, school, and graduation year",
        "Add certifications that are part of your education (MBA, PMP, CPA, etc.)"
      ]},

      { type: "pro-tip", text: "Don't leave the description field empty. Even a 2–3 sentence summary of your most relevant project or achievement makes your education entry stand out from the hundreds of blank ones recruiters scroll past." }
    ]
  },

  /* ═══════════════════════════════════════════════
     CERTIFICATIONS
  ═══════════════════════════════════════════════ */
  certifications: {
    title: "Licenses & Certifications",
    icon: "🏅",
    accentColor: "#915907",
    blocks: [
      { type: "text", text: "Certifications are one of the fastest ways to build credibility — especially if you're entry-level or switching industries. Every relevant cert you've earned belongs here." },

      { type: "heading", text: "What to Include for Each Certification" },
      { type: "bullet-list", items: [
        "Certification Name — use the exact official title",
        "Issuing Organization — the body that awarded it",
        "Issue Date — Month/Year",
        "Expiration Date — if applicable (e.g., AWS certs expire every 3 years)",
        "Credential ID — if provided, add it (shows authenticity)",
        "Credential URL — always link to the verification page"
      ]},

      { type: "heading", text: "Popular Certifications by Field" },
      { type: "subheading", text: "Data & Tech" },
      { type: "example-list", items: [
        "Google Data Analytics Certificate (Coursera)",
        "Microsoft Power BI Data Analyst (PL-300)",
        "AWS Certified Cloud Practitioner",
        "Microsoft Azure Fundamentals (AZ-900)",
        "CompTIA Data+",
        "IBM Data Analyst Professional Certificate"
      ]},
      { type: "subheading", text: "Marketing" },
      { type: "example-list", items: [
        "Google Ads Certification (Search, Display, Video)",
        "HubSpot Marketing Certification",
        "Meta Blueprint (Facebook/Instagram Ads)",
        "Hootsuite Social Marketing Certification"
      ]},
      { type: "subheading", text: "Finance" },
      { type: "example-list", items: [
        "CFA (Chartered Financial Analyst)",
        "CPA (Certified Public Accountant)",
        "FRM (Financial Risk Manager)",
        "Series 7 / Series 63"
      ]},
      { type: "subheading", text: "Project Management" },
      { type: "example-list", items: [
        "PMP (Project Management Professional)",
        "CAPM (Certified Associate in Project Management)",
        "Certified Scrum Master (CSM)",
        "PMI Agile Certified Practitioner (PMI-ACP)"
      ]},

      { type: "heading", text: "Where to Get Free / Low-Cost Certifications" },
      { type: "bullet-list", items: [
        "Google Career Certificates — free via financial aid on Coursera",
        "LinkedIn Learning — free via library card (check your local library!)",
        "Microsoft Learn — free self-paced modules + low-cost exams",
        "AWS Free Tier + Coursera financial aid",
        "HubSpot Academy — completely free",
        "Google Analytics Academy — completely free"
      ]},

      { type: "pro-tip", text: "Even completing a LinkedIn Skill Assessment adds a 'Verified' badge to your skill — and it's free. Take assessments for your top skills. They appear right on your profile and signal credibility to recruiters browsing your skills section." }
    ]
  },

  /* ═══════════════════════════════════════════════
     PROJECTS
  ═══════════════════════════════════════════════ */
  projects: {
    title: "Projects Section",
    icon: "🗂️",
    accentColor: "#5f3dc4",
    blocks: [
      { type: "text", text: "Projects are gold — especially for students, recent grads, and career changers. They demonstrate real-world skills when you don't have extensive work experience to show." },

      { type: "heading", text: "What Makes a Strong Project Entry" },
      { type: "bullet-list", items: [
        "Project Title — clear and descriptive (not 'Final Project')",
        "Associated With — link to your school or company if applicable",
        "Date Range — start and end month/year",
        "Description — what you built, tools used, and the outcome/impact",
        "Link — GitHub, live demo, or portfolio link whenever possible",
        "Contributors — tag teammates if it was collaborative"
      ]},

      { type: "heading", text: "The Project Description Formula" },
      { type: "formula", text: "[What you built]  +  [Tools/Tech used]  +  [Problem it solved / Impact]" },

      { type: "heading", text: "Strong vs. Weak Project Descriptions" },
      { type: "subheading", text: "❌ Weak" },
      { type: "dont-list", items: [
        "Built a sales dashboard for a class project.",
        "Worked on a data analysis project using Python."
      ]},
      { type: "subheading", text: "✅ Strong" },
      { type: "do-list", items: [
        "Built an interactive sales performance dashboard using Power BI and SQL for a real retail client, enabling the team to identify top-performing SKUs and reduce reporting time by 70%.",
        "Developed a customer churn prediction model in Python (scikit-learn, pandas) achieving 87% accuracy, trained on 50K+ customer records — presented findings to a panel of 5 industry judges."
      ]},

      { type: "heading", text: "Great Project Ideas by Field" },
      { type: "subheading", text: "Data Analytics" },
      { type: "example-list", items: [
        "Sales/revenue dashboard (Power BI or Tableau)",
        "Customer churn prediction model (Python + scikit-learn)",
        "Web scraping + EDA project (Python + Beautiful Soup)",
        "SQL data cleaning + analysis on a public dataset"
      ]},
      { type: "subheading", text: "Software Development" },
      { type: "example-list", items: [
        "Full-stack web app (React + Node.js + MongoDB)",
        "REST API with authentication (Python/Django or Node.js)",
        "Chrome extension or CLI tool",
        "Open-source contribution (even small PRs count)"
      ]},
      { type: "subheading", text: "Marketing" },
      { type: "example-list", items: [
        "SEO audit and content strategy for a local business",
        "Email marketing campaign with A/B test results",
        "Social media growth case study (before/after metrics)",
        "Google Ads campaign with performance analysis"
      ]},

      { type: "pro-tip", text: "If you don't have projects yet — build one this weekend. Pick a public dataset (Kaggle, data.gov), build something in your tool of choice, write about what you found, and post it. You now have a project AND content." }
    ]
  },

  /* ═══════════════════════════════════════════════
     VOLUNTEERING
  ═══════════════════════════════════════════════ */
  volunteering: {
    title: "Volunteer Experience",
    icon: "🤝",
    accentColor: "#057642",
    blocks: [
      { type: "text", text: "Volunteer experience is often overlooked — but it can be a powerful differentiator. It demonstrates initiative, leadership, and values that go beyond your day job." },

      { type: "heading", text: "Why Include It" },
      { type: "bullet-list", items: [
        "Shows character and community involvement — many recruiters value this",
        "Fills gaps in work experience (especially for students)",
        "Can demonstrate leadership or specialized skills",
        "Some LinkedIn users' volunteer experience appears at the top of their profile to certain viewers"
      ]},

      { type: "heading", text: "What to Include" },
      { type: "bullet-list", items: [
        "Role / Title — what you did (not just 'Volunteer')",
        "Organization Name",
        "Start & End Date",
        "Cause / Category — select from LinkedIn's list (e.g., Education, Animal Welfare, Poverty Alleviation)",
        "Description — 2–4 sentences on what you did and the impact"
      ]},

      { type: "heading", text: "How to Write a Strong Description" },
      { type: "formula", text: "[What you did]  +  [Who you helped]  +  [Measurable result or scale]" },
      { type: "example-list", items: [
        "Mentored 12 underrepresented students through the college application process, resulting in a 100% acceptance rate and $180K in combined scholarships.",
        "Led data literacy workshops for 50+ newcomers at a local settlement agency, covering Excel, job search tools, and LinkedIn profile basics."
      ]},

      { type: "heading", text: "Where to Find Volunteering Opportunities" },
      { type: "bullet-list", items: [
        "Catchafire.org — skill-based volunteering matched to your expertise",
        "Volunteer Canada (volunteer.ca) — local opportunities across Canada",
        "Your university's volunteer centre or student clubs",
        "Local food banks, shelters, and community organizations",
        "Industry associations that need committee members or event help"
      ]},

      { type: "pro-tip", text: "Skill-based volunteering (like building a website or dashboard for a non-profit) is especially powerful — it gives you real project experience, references, and a portfolio item all in one. Recruiters love seeing this." }
    ]
  },

  /* ═══════════════════════════════════════════════
     SKILLS
  ═══════════════════════════════════════════════ */
  skills: {
    title: "Skills Section",
    icon: "⚡",
    accentColor: "#0a66c2",
    blocks: [
      { type: "text", text: "LinkedIn allows up to 50 skills — use them all strategically. Your skills section directly impacts where you appear in recruiter searches." },

      { type: "heading", text: "The 3-Tier Strategy" },
      { type: "subheading", text: "Tier 1 — Top 3 Skills (shown by default)" },
      { type: "bullet-list", items: [
        "Your most important, in-demand skills",
        "Skills you most want to be known for",
        "Skills that appear most in your target job descriptions"
      ]},
      { type: "subheading", text: "Tier 2 — Next 10–15 Skills" },
      { type: "bullet-list", items: [
        "Core competencies for your role",
        "Industry-standard tools and technologies",
        "Transferable skills (project management, stakeholder communication, etc.)"
      ]},
      { type: "subheading", text: "Tier 3 — Remaining Skills (up to 50)" },
      { type: "bullet-list", items: [
        "Secondary and adjacent skills",
        "Soft skills (leadership, critical thinking, communication)",
        "Skills you're actively developing"
      ]},

      { type: "heading", text: "Getting Endorsements" },
      { type: "numbered-list", items: [
        "Endorse others first — reciprocity is real on LinkedIn",
        "Ask close colleagues, classmates, or managers directly (message them!)",
        "Take LinkedIn Skill Assessments — pass and get a verified badge",
        "Keep skills updated as you learn new tools and technologies"
      ]},

      { type: "heading", text: "LinkedIn Skill Assessments" },
      { type: "text", text: "Free 15-question multiple choice tests. Pass (top 30%) and a 'Verified' badge appears on your skill. Recruiters actively filter for these." },
      { type: "bullet-list", items: [
        "Take assessments for your top 5–10 skills",
        "You can retake after 3 months if you don't pass",
        "Focus on tools: Excel, SQL, Python, Power BI, Tableau, Google Analytics",
        "Also available for soft skills: Project Management, Communication, Problem Solving"
      ]},

      { type: "heading", text: "Skills Recruiters Search Most (by Field)" },
      { type: "subheading", text: "Data & Analytics" },
      { type: "example-list", items: ["SQL · Python · Power BI · Tableau · Excel · DAX · R · Machine Learning · Data Visualization · ETL"] },
      { type: "subheading", text: "Software Development" },
      { type: "example-list", items: ["JavaScript · React · Python · Node.js · TypeScript · AWS · Docker · Git · REST APIs · PostgreSQL"] },
      { type: "subheading", text: "Marketing" },
      { type: "example-list", items: ["Google Ads · SEO · Content Marketing · HubSpot · Meta Ads · Email Marketing · Google Analytics · Copywriting"] },
      { type: "subheading", text: "Finance" },
      { type: "example-list", items: ["Financial Modeling · Excel · SQL · Bloomberg · QuickBooks · Forecasting · Budgeting · Valuation · DCF"] },

      { type: "pro-tip", text: "Turn off endorsement notifications if they get overwhelming — go to Settings → Notifications → Endorsements and toggle them off. You'll still get the endorsements, you just won't be pinged every time." }
    ]
  },

  /* ═══════════════════════════════════════════════
     RECOMMENDATIONS
  ═══════════════════════════════════════════════ */
  recommendations: {
    title: "Recommendations",
    icon: "💬",
    accentColor: "#0a66c2",
    blocks: [
      { type: "text", text: "Recommendations are social proof — the LinkedIn equivalent of a reference letter. A strong recommendation from a credible person can be the difference between a recruiter reaching out or scrolling past." },

      { type: "heading", text: "Goal" },
      { type: "text", text: "Aim for at least 3–5 recommendations. Quality matters more than quantity — 3 strong, specific recommendations beat 10 generic ones." },

      { type: "heading", text: "Who to Ask" },
      { type: "bullet-list", items: [
        "Former or current managers — highest credibility",
        "Colleagues you worked closely with on significant projects",
        "Professors or academic advisors (great for students)",
        "Clients or external stakeholders (if applicable)",
        "People you've mentored or collaborated with on meaningful work"
      ]},

      { type: "heading", text: "How to Request a Recommendation" },
      { type: "numbered-list", items: [
        "Go to their LinkedIn profile",
        "Click 'More' → 'Request a Recommendation'",
        "Choose your relationship and the position you held",
        "Write a personalized message — never use LinkedIn's default template"
      ]},

      { type: "heading", text: "Sample Request Message" },
      { type: "code-block", text: `Hi [Name],

I hope you're doing well! I'm currently updating my LinkedIn profile and would greatly appreciate it if you could write a brief recommendation about our time working together at [Company/Project].

Specifically, it would be really helpful if you could mention [specific skill, project, or achievement — give them a prompt so they know what to focus on].

I'd be more than happy to return the favour and write one for you as well!

Thank you so much,
[Your Name]` },

      { type: "heading", text: "What Makes a Strong Recommendation" },
      { type: "do-list", items: [
        "Mentions a specific project or situation",
        "Highlights concrete skills they observed firsthand",
        "Includes measurable impact or results",
        "Speaks to personal qualities (reliability, creativity, leadership)",
        "Comes from someone with credibility in your field"
      ]},
      { type: "dont-list", items: [
        "Vague praise: 'She's a great worker and a team player.'",
        "Generic statements without any specific example",
        "Recommendations from people you barely worked with"
      ]},

      { type: "heading", text: "Writing Recommendations for Others" },
      { type: "text", text: "Give to receive. Proactively writing recommendations for colleagues builds goodwill and often results in them returning the favour." },
      { type: "bullet-list", items: [
        "Be specific about what they did and the results",
        "Reference a particular project or time period",
        "Mention 2–3 specific skills you witnessed",
        "End with a genuine endorsement of them for future roles"
      ]},

      { type: "pro-tip", text: "When asking for a recommendation, give the person a hint about what to focus on. Something like 'It would be great if you could mention the data migration project we led together' makes it much easier for them to write something specific and compelling." }
    ]
  },

  /* ═══════════════════════════════════════════════
     LANGUAGES
  ═══════════════════════════════════════════════ */
  languages: {
    title: "Languages",
    icon: "🌐",
    accentColor: "#b24020",
    blocks: [
      { type: "text", text: "If you speak more than one language, add it — it's a differentiator that many candidates forget. In multicultural markets like Canada, bilingualism is a real competitive advantage." },

      { type: "heading", text: "Proficiency Levels (LinkedIn's Scale)" },
      { type: "bullet-list", items: [
        "Elementary Proficiency — basic vocabulary and simple conversations",
        "Limited Working Proficiency — can handle basic professional tasks",
        "Professional Working Proficiency — can work fully in this language",
        "Full Professional Proficiency — near-fluent; handle complex discussions",
        "Native or Bilingual Proficiency — mother tongue or equivalent fluency"
      ]},

      { type: "heading", text: "Tips" },
      { type: "bullet-list", items: [
        "Be honest about your proficiency level — recruiters may test you",
        "Include any language you can professionally function in, even at a limited level",
        "Mention languages in your About section if bilingualism is relevant to your target roles",
        "For French in Canada — even conversational French can open doors in bilingual roles at federal agencies, banks, and national companies"
      ]},

      { type: "heading", text: "High-Value Languages in Canada's Job Market" },
      { type: "example-list", items: [
        "French — strong demand in government, banking, telecommunications, and national brands",
        "Mandarin / Cantonese — valuable in finance, real estate, and tech in Vancouver and Toronto",
        "Spanish — growing demand in international business and export-focused companies",
        "Arabic, Punjabi, Hindi — growing multicultural market roles, customer service, community liaison"
      ]},

      { type: "pro-tip", text: "If you're actively developing a language (e.g., taking French classes), list it at your current level and mention in your About section that you're actively improving. Shows initiative and self-development." }
    ]
  },

  /* ═══════════════════════════════════════════════
     INTERESTS
  ═══════════════════════════════════════════════ */
  interests: {
    title: "Interests",
    icon: "🔖",
    accentColor: "#5f3dc4",
    blocks: [
      { type: "text", text: "Your Interests section (Companies, Groups, Newsletters, and Schools you follow) quietly tells a story about your professional identity. It also unlocks a powerful networking hack." },

      { type: "heading", text: "Why It Matters More Than You Think" },
      { type: "bullet-list", items: [
        "Recruiters and connections can see what companies and thought leaders you follow",
        "Signals your areas of interest and professional curiosity",
        "Following target companies keeps their job posts in your feed",
        "Joining Groups unlocks the ability to message members for free (no Premium needed)"
      ]},

      { type: "heading", text: "The Free Messaging Hack via Groups" },
      { type: "numbered-list", items: [
        "Find the person you want to message (recruiter, hiring manager, etc.)",
        "Scroll to their 'Interests' section and look for Groups they're in",
        "Join the same group",
        "Go back to their profile — the 'Message' button is now unlocked",
        "Send a personalized note mentioning the shared group for context"
      ]},
      { type: "code-block", text: `Hi [Name],

I noticed we're both members of [Group Name] and I wanted to reach out. I'm really interested in [topic/industry], and your background in [their expertise] really caught my eye.

Would you be open to a brief 15-minute conversation about [specific topic]?

Best,
[Your Name]` },

      { type: "heading", text: "Best Groups to Join" },
      { type: "bullet-list", items: [
        "Industry-specific professional groups (e.g., 'Data Analytics Professionals')",
        "Your university's alumni group",
        "Target company's LinkedIn Group (if they have one)",
        "Role-specific groups (e.g., 'Project Managers Canada')",
        "Job seekers groups in your city or field"
      ]},

      { type: "heading", text: "Companies to Follow Strategically" },
      { type: "bullet-list", items: [
        "Your target employers — their job posts will surface in your feed first",
        "Industry leaders and innovators — stay informed on trends",
        "Recruiters' companies — engage with their content to stay top of mind",
        "Companies where your connections work — you'll see opportunities via your network"
      ]},

      { type: "pro-tip", text: "Don't just follow companies passively — engage with their posts (thoughtful comments, not just likes). When you apply, the hiring team may recognize your name from previous interactions. Early, consistent engagement is a low-effort, high-impact visibility strategy." }
    ]
  },

  /* ═══════════════════════════════════════════════
     ACTIVITY — POSTS
  ═══════════════════════════════════════════════ */
  activityPosts: {
    title: "Posting on LinkedIn",
    icon: "✍️",
    accentColor: "#0a66c2",
    blocks: [
      { type: "heading", text: "Why You Should Post" },
      { type: "text", text: "Every post you publish is a signal to LinkedIn's algorithm that you're an active, engaged member. The algorithm rewards that by pushing your profile to more people — including recruiters who aren't actively searching for you." },
      { type: "bullet-list", items: [
        "Posting consistently increases your profile views by 5–10× compared to passive users",
        "Recruiters browse creator profiles to find candidates before posting jobs publicly",
        "Your content builds a public track record of your thinking and expertise",
        "A single post with strong engagement can reach tens of thousands of people in your industry",
        "It positions you as a practitioner, not just a job seeker — which changes how recruiters perceive you"
      ]},
      { type: "pro-tip", text: "You don't need to go viral. Consistent, relevant posts seen by 500 people in your industry are worth more than one viral post seen by 50,000 random accounts." },

      { type: "heading", text: "What to Post" },
      { type: "subheading", text: "Share what you're learning and building" },
      { type: "do-list", items: [
        "A project you just completed — what problem it solved, what you built, what you learned",
        "A skill you're actively developing — with a concrete example of how you applied it",
        "A mistake you made and what you'd do differently (authenticity builds trust)",
        "A resource, tool, or technique that genuinely helped you (SQL tip, Power BI trick, Python shortcut)",
        "Behind-the-scenes of your job search — what you're learning, what's working",
        "Your reaction to an industry trend, news story, or tool announcement — with your actual opinion"
      ]},
      { type: "dont-list", items: [
        "Generic motivational quotes with no personal connection",
        "Reposting others' content without adding your own take or commentary",
        "Posting only when you need something (a job, a referral, a favour)",
        "Oversharing personal struggles with no professional angle",
        "Announcing certifications with just a badge image and no reflection on what you learned"
      ]},

      { type: "heading", text: "Post Formats That Perform Well" },
      { type: "bullet-list", items: [
        "Short text posts (3–5 lines) — quick insight or opinion, easy to read",
        "Numbered lists — \"5 things I learned from my first co-op\" — skimmable and shareable",
        "Before/after comparisons — raw data vs. a cleaned dashboard, ugly code vs. refactored",
        "Image or screenshot of your actual work — a chart, a query, a dashboard screenshot",
        "Short storytelling format — problem → what I tried → what worked → the lesson"
      ]},

      { type: "heading", text: "Posting Frequency" },
      { type: "text", text: "Consistency beats volume. You don't need to post daily — but you should post on a predictable cadence that you can maintain long-term." },
      { type: "bullet-list", items: [
        "Ideal for job seekers: 2–3 posts per week",
        "Minimum to stay visible in the algorithm: 1 post per week",
        "Maximum before quality drops: 1 post per day",
        "Consistency over 8–12 weeks builds a compounding follower effect"
      ]},

      { type: "heading", text: "Best Days & Times to Post" },
      { type: "subheading", text: "Days" },
      { type: "do-list", items: [
        "Tuesday, Wednesday, Thursday — peak professional engagement",
        "Monday — acceptable, slightly lower reach as people ease into the week"
      ]},
      { type: "dont-list", items: [
        "Saturday and Sunday — engagement drops by 30–50% on weekends",
        "Friday afternoon — people are mentally checked out"
      ]},
      { type: "subheading", text: "Times (all in your local timezone)" },
      { type: "bullet-list", items: [
        "7:30 AM – 9:00 AM — professionals check LinkedIn before their workday starts",
        "12:00 PM – 1:00 PM — lunch break scroll",
        "5:00 PM – 6:00 PM — end-of-workday check-in",
        "Avoid late evenings and overnight — your post will be stale by morning"
      ]},
      { type: "pro-tip", text: "Post at 7:45 AM on a Tuesday or Wednesday. The first 60–90 minutes of engagement (likes, comments, shares) tells the algorithm how broadly to distribute your post. Starting with a warm audience in the morning maximizes that early signal." }
    ]
  },

  /* ═══════════════════════════════════════════════
     ACTIVITY — COMMENTS
  ═══════════════════════════════════════════════ */
  activityComments: {
    title: "Commenting on LinkedIn",
    icon: "💬",
    accentColor: "#057642",
    blocks: [
      { type: "heading", text: "Why Comments Matter More Than Likes" },
      { type: "text", text: "A like takes one second and leaves no impression. A thoughtful comment takes 30 seconds and puts your name and perspective in front of everyone who reads that post — including the author's entire network. Comments are the highest-leverage, lowest-effort visibility tool on LinkedIn." },
      { type: "bullet-list", items: [
        "Every comment you write appears in your connections' feeds as an activity item",
        "Post authors often visit and follow commenters who add value to their posts",
        "Recruiters read the comment sections of posts in their industry — yours included",
        "A strong comment can earn you replies, new followers, and direct messages"
      ]},

      { type: "heading", text: "Comments That Add Zero Value" },
      { type: "text", text: "These comments waste everyone's time, including yours. They signal that you didn't actually read the post and add no visibility value because the algorithm deprioritises one-word engagement." },
      { type: "dont-list", items: [
        "\"Congratulations!\" — says nothing, adds nothing",
        "\"Well done!\" — same as the above",
        "\"Insightful!\" — if you found it insightful, say WHY",
        "\"Great post!\" — every post author knows this is noise",
        "\"So inspiring!\" — vague and forgettable",
        "A fire emoji, a clap emoji, or any lone emoji",
        "\"Thanks for sharing\" — you've said nothing about the content",
        "\"100%\" or \"Absolutely agree\" — with no explanation of what you agree with"
      ]},

      { type: "heading", text: "What a Good Comment Looks Like" },
      { type: "text", text: "A good comment does one or more of these things: adds context, shares your relevant experience, challenges a point respectfully, or asks a genuine follow-up question." },
      { type: "do-list", items: [
        "Reference something specific from the post — shows you actually read it",
        "Share a related experience: \"When I worked on X, I found that Y...\"",
        "Add a data point, tool, or resource that complements their point",
        "Respectfully offer a different angle: \"I'd add that... / One nuance here is...\"",
        "Ask a genuine follow-up question that shows intellectual curiosity"
      ]},

      { type: "heading", text: "Follow-Up Questions That Start Real Conversations" },
      { type: "subheading", text: "For projects or case studies" },
      { type: "example-list", items: [
        "\"What was the biggest technical challenge you hit while building this, and how did you get past it?\"",
        "\"How long did it take to get stakeholder buy-in on the final design? That part always trips me up.\"",
        "\"Did you consider [alternative approach]? I'm curious why you went with [their approach] instead.\""
      ]},
      { type: "subheading", text: "For career milestones or job updates" },
      { type: "example-list", items: [
        "\"What did the interview process look like for this role? Any prep resources you'd recommend?\"",
        "\"What's one thing you wish you knew before starting this position?\"",
        "\"How did you land your first conversation with this team — direct application, referral, or something else?\""
      ]},
      { type: "subheading", text: "For opinions or industry takes" },
      { type: "example-list", items: [
        "\"I see your point on X — how do you think that changes for companies that don't have [resource/scale]?\"",
        "\"Have you found this holds true across industries, or is it specific to [their sector]?\"",
        "\"This matches what I've seen in [your context]. Did you find [specific variable] made a difference?\""
      ]},

      { type: "heading", text: "The Comment Formula" },
      { type: "formula", text: "Specific reference from the post + Your related experience or perspective + A genuine question" },
      { type: "example-list", items: [
        "\"Your point about DAX calculated columns vs. measures really resonated — I made that exact mistake on my first Power BI project and it tanked my report performance. Did you find any good resources that finally made it click, or was it just trial and error?\"",
        "\"The 22% drop-off rate you found is striking. When you presented this to the executive team, how did they respond — was there pushback, or were they already aware something was off in the data?\""
      ]},

      { type: "pro-tip", text: "Spend 10 minutes a day leaving 3 thoughtful comments on posts in your target industry. Done consistently for 4 weeks, this puts your name in front of more decision-makers than most people achieve in a year of passive scrolling." }
    ]
  }

};
