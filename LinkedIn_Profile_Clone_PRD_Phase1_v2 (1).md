# PRD: LinkedIn Profile Clone — Phase 1 (v2)
**Product:** LinkedIn Profile Masterclass Tool  
**Phase:** 1 — Static Interactive Profile Page  
**Version:** 2.0 — Entry-Level Profile, Optimized to Toolkit Standards  
**Date:** April 2026  

---

## 1. Overview

### 1.1 Purpose

This document defines the requirements for Phase 1 of a LinkedIn profile clone, built as a teaching tool for a live LinkedIn Masterclass. The goal of Phase 1 is to produce a pixel-accurate, fully static replica of a LinkedIn profile page, pre-loaded with a fictional entry-level profile. This gives the presenter a controlled, credible demo environment to walk through every section of a LinkedIn profile with an audience of early-career job seekers.

The fictional profile is deliberately built to follow every best practice in the LinkedIn Profile Optimization Toolkit. It represents the ideal version of what an entry-level tech professional's profile should look like — clear value proposition, quantified bullet points, strong About section, and a complete, polished profile across all sections.

### 1.2 Why an Entry-Level Profile

The masterclass audience consists of new graduates, career switchers, and internationally trained professionals actively seeking roles in data, analytics, software engineering, or adjacent tech fields in Canada. The fictional profile should feel aspirational but attainable — someone they can see themselves becoming with the right optimization work.

Phase 2 (defined separately) will add an interactive tip system where clicking any section opens a popup showing what makes that section strong, what the common mistakes are, and how to replicate it. The profile data in Phase 1 must exemplify the optimized "after" state so Phase 2 tips have a concrete example to point to.

### 1.3 Success Criteria for Phase 1

The clone is complete when:

- The profile looks indistinguishable from a real LinkedIn profile page at 1440px
- Every section visible on a LinkedIn profile is rendered and populated with realistic data
- The fictional profile satisfies every item in the Toolkit's Final Checklist
- The page runs in any modern browser with zero build step and zero internet dependency
- Any developer can attach an onClick handler to any section component in under 5 minutes, confirming Phase 2 readiness

---

## 2. Scope

### 2.1 In Scope

- Full LinkedIn profile page layout rendered as a single-page React application
- All sections listed in Section 5, fully populated
- A fictional entry-level profile built to Toolkit best practices (detailed in Section 6)
- Responsive layout optimized for 1280px+ desktop (primary use case: screen sharing)
- React component architecture with a clean data/view separation
- Image placeholders via `/assets/` folder references

### 2.2 Out of Scope

- LinkedIn feed, nav bar, messaging panel, or any page besides the profile
- Real authentication or LinkedIn API
- Mobile responsiveness (deferred post-Phase 2)
- Any functional interactivity (buttons and links are visual-only in Phase 1)
- CMS, admin panel, or runtime profile switching UI

---

## 3. Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | React 18 (via CDN, no build step) | Component structure prepares for Phase 2 popups. CDN delivery means no npm/Node setup needed on presentation day. |
| Styling | Single external CSS file | No compiler needed. Easy per-section overrides. |
| Data | Separate `profileData.js` file | Content fully decoupled from layout. Presenter can update text without touching components. |
| Images | Local `/assets/` folder | Fully self-contained, works offline. |
| Delivery | Open as `file://` in Chrome or serve via GitHub Pages / Netlify | Zero infrastructure dependency for live demos. |

**Recommended file structure:**
```
/linkedin-clone
  index.html
  styles.css
  profileData.js
  /components
    ProfileHeader.jsx
    AboutSection.jsx
    FeaturedSection.jsx
    ExperienceSection.jsx
    EducationSection.jsx
    CertificationsSection.jsx
    VolunteeringSection.jsx
    SkillsSection.jsx
    RecommendationsSection.jsx
    LanguagesSection.jsx
    InterestsSection.jsx
  /assets
    banner.png
    avatar.jpg
    /logos
      (company and school logo placeholders)
```

---

## 4. Component Interface Standard

Every section component must follow this interface so Phase 2 can wire up interactivity with a single prop change:

```jsx
<SectionComponent
  data={profileData.sectionKey}
  isOwnProfile={true}
  onSectionClick={null}  // Phase 1: null. Phase 2: (sectionKey) => openTipDrawer(sectionKey)
/>
```

No state management library is needed in Phase 1. All state (show more/less toggle, recommendations tab) lives inside individual components.

---

## 5. Profile Sections — Detailed Requirements

### 5.1 Banner Image

**Visual spec:** Full-width image at 4:1 ratio (1584 x 396px equivalent). Loaded from `/assets/banner.png`.

Per the Toolkit, the banner for a job seeker should include a tagline or value proposition, industry-relevant imagery (data visualizations or tech graphics), and key skills or tools. The banner for this profile will display a clean data/analytics visual with the text "Aspiring Data Analyst | SQL · Python · Power BI" as part of the banner design.

**Required elements:**
- Full-width banner filling the card header
- Pencil edit icon in top-right corner (own profile view)

**Data fields:** `bannerImageUrl`

**Phase 2 clickable zone:** Entire banner area

---

### 5.2 Profile Photo

**Visual spec:** Circular, 120px diameter, 4px white border ring, overlaps banner bottom by ~50%. Loaded from `/assets/avatar.jpg`.

Per the Toolkit: high-resolution headshot, face filling 60% of frame, clean background, professional attire, natural smile, good lighting.

**Required elements:**
- Circular crop with white border
- "Open to Work" green arc badge (shown since profile is actively job seeking — Toolkit recommends public Open to Work for unemployed job seekers)

**Data fields:** `avatarUrl`, `openToWork: true`

---

### 5.3 Name, Pronouns, and Degree Badge

**Visual spec:** 22px bold name, inline shield icon (gold #915907), pronouns and connection degree in grey.

Per the Toolkit: use professional name matching your resume.

**Required elements:**
- Full name
- LinkedIn Open Profile shield icon (SVG)
- Pronouns
- Connection degree (2nd, since this is a visitor view)

**Data fields:** `name`, `pronouns`, `connectionDegree`

---

### 5.4 Headline

**Visual spec:** 15px, dark grey, wraps to two lines if needed. Full 220-character headline displayed with no truncation.

Per the Toolkit, the headline formula is: `[Role/Aspiration] | [Key Skills/Tools] | [Value Proposition]`. First 40 characters are the most critical for mobile visibility. Avoid vague descriptions like "Passionate professional" or generic titles like "Data Analyst." Use recruiter-searchable keywords.

**Required elements:**
- Full headline text (no truncation in the header)

**Data fields:** `headline`

---

### 5.5 Location and Contact Info

**Visual spec:** Grey text, "Contact info" in LinkedIn blue as a faux-link.

Per the Toolkit: be specific ("Toronto, Ontario" not just "Canada") because recruiters filter by location.

**Data fields:** `location`

---

### 5.6 Followers and Connections

**Visual spec:** Bold blue text. Format: "[X] followers · [Y]+ connections".

Per the Toolkit: aim for 500+ connections. Entry-level profiles realistically sit at 300–500 at this stage.

**Data fields:** `followerCount`, `connectionCount`

---

### 5.7 Mutual Connections

**Visual spec:** Row of 2 overlapping mini-avatars (initials-only circles), followed by descriptive text.

**Data fields:** `mutuals: [{ initials, color }]`, `mutualText`

---

### 5.8 Action Buttons

**Own profile view** (isOwnProfile: true):
- "Open to" (filled dark pill)
- "Add section" (outlined blue pill)
- "Enhance profile" (outlined blue pill)
- "Resources" (outlined grey pill)

**Visitor view** (isOwnProfile: false):
- "Connect" (filled blue pill)
- "Message" (outlined blue pill)
- "More" (outlined grey pill)

**Data fields:** `isOwnProfile`

---

### 5.9 Sidebar — Current Company and Education

**Visual spec:** Top-right of header card. Stacked: company logo + name, then school logo + name.

**Data fields:** `currentCompany: { name, logoUrl, color, initials }`, `currentSchool: { name, logoUrl, color, initials }`

---

### 5.10 About Section

**Visual spec:** Separate card. Body text 14px, 1.6 line height. Default shows ~220 characters with "…show more" toggle.

Per the Toolkit, the About section should be 400–500 words for experienced professionals, 300–400 words for entry-level. Structure: Paragraph 1 (Who You Are / Current), Paragraph 2 (What You've Done / Past), Paragraph 3 (What You Offer / Future Value), Paragraph 4 (Call to Action). Written in first person, short paragraphs, no emojis, keyword-rich but natural.

**Required elements:**
- Section title with pencil icon
- Body text with show more/less toggle (truncate at ~220 characters)
- "Top skills" sub-card at bottom (diamond icon, label, skill list, right arrow)

**Data fields:** `about`, `topSkills: []`

---

### 5.11 Featured Section

**Visual spec:** Separate card. Section title with + and pencil icons. Row of 3 featured content cards.

Per the Toolkit, Featured is the portfolio space. Recommended content: portfolio projects, published articles, case studies, resume link, certifications, GitHub link.

**Required elements per card:**
- Thumbnail (gradient + emoji placeholder for Phase 1)
- Content type label (Post / Link / Article)
- Title (truncated at 2 lines)
- Engagement meta or URL

**Data fields:** `featured: [{ type, title, meta, thumbnailUrl, emoji }]`

---

### 5.12 Experience Section

**Visual spec:** Separate card. Entries separated by thin dividers.

Per the Toolkit, each entry must include job title, company name, duration (Month/Year), location, and 3–5 bullet points following the formula: `[Action Verb] + [What You Did] + [How/Tool] + [Result/Impact]`. Use power action verbs from the Toolkit's categories. Every bullet must have a quantified result where possible.

**Required elements per entry:**
- Company logo (44px, rounded)
- Job title (bold)
- Company name
- Duration string
- Location
- Description bullets (using the Toolkit formula, with metrics)
- Skills line

**Data fields:** `experience: [{ role, company, duration, location, description, skills, logoUrl, color, initials }]`

**Footer:** "Show all experience →" button

---

### 5.13 Education Section

**Visual spec:** Same pattern as Experience.

Per the Toolkit: include degree and field of study, institution, graduation year, GPA if 3.5+, relevant coursework (especially for entry-level), honors/awards, activities and societies.

**Required elements per entry:**
- Institution logo
- School name and degree
- Year range
- GPA (if applicable)
- Relevant coursework, honors, activities

**Data fields:** `education: [{ school, degree, duration, gpa, activities, logoUrl, color, initials }]`

---

### 5.14 Licenses and Certifications

**Visual spec:** Separate card.

Per the Toolkit: list name, issuing organization, issue date, credential ID, and credential URL. For data/tech roles, relevant certs include Google Data Analytics, AWS, Microsoft Azure, HackerRank, Coursera.

**Required elements per entry:**
- Issuer logo
- Certification name
- Issuing organization
- Issue date
- Credential ID
- "Show credential ↗" button (visual only)

**Data fields:** `certifications: [{ name, issuer, date, credentialId, color, initials }]`

**Footer:** "Show all certifications →" button

---

### 5.15 Volunteering

**Visual spec:** Same pattern as Experience.

Per the Toolkit, volunteering is listed under Additional Sections. Include role, organization, duration, cause category, and description.

**Data fields:** `volunteering: [{ role, org, duration, cause, description, color, initials }]`

---

### 5.16 Skills

**Visual spec:** Separate card. Skills grouped by category. Per-skill endorsement details.

Per the Toolkit, LinkedIn allows up to 50 skills. Top 3 pinned skills should be the most recruiter-searched terms in the target role. Getting endorsements: endorse others first, ask classmates, take LinkedIn Skill Assessments for verified badges.

**Required elements per skill:**
- Skill name (bold)
- Category header
- Experience references
- Certification badge where applicable
- Endorsement line
- "Endorse" button
- Dividers between skills

**Data fields:** `skills: [{ name, category, experiences, certBadge, endorsedBy }]`

**Footer:** "Show all skills →" button

---

### 5.17 Recommendations

**Visual spec:** Separate card. Received/Given tab toggle.

Per the Toolkit, the goal is at least 3–5 recommendations. Ask former managers, colleagues, professors. Good recommendations include specific examples, skills demonstrated, impact made, and personal qualities.

**Required elements:**
- "Recommend [Name]" button in header
- Received (N) and Given tab toggles
- Per entry: avatar, name, degree, headline, relationship context, truncated text with "…more"

**Data fields:** `recommendations: [{ name, title, relationshipContext, degree, text, initials, avatarColor }]`

---

### 5.18 Languages

**Visual spec:** Separate card. Language name + proficiency level pairs.

**Data fields:** `languages: [{ language, proficiency }]`

---

### 5.19 Interests

**Visual spec:** Separate card. Companies tab active. 2-column grid.

**Required elements:**
- Tab row (Companies / Groups / Newsletters / Schools — Companies active in Phase 1)
- Company logo, name, follower count per item
- "Show all interests →" button

**Data fields:** `interests: [{ name, followers, color, initials }]`

---

## 6. Fictional Profile Data Spec

The fictional profile is named **Priya Nair**, a recent graduate from Conestoga College actively seeking a data analyst role in the Greater Toronto Area. Every section of her profile has been written to satisfy the Toolkit's checklist and best practices.

---

### 6.1 Basic Info

| Field | Value |
|---|---|
| Name | Priya Nair |
| Pronouns | She/Her |
| Headline | Aspiring Data Analyst \| SQL · Python · Power BI \| Turning Raw Data into Business Decisions |
| Location | Mississauga, Ontario, Canada |
| Followers | 847 |
| Connections | 312 |
| Open to Work | Yes (public green ring — she is unemployed and actively seeking) |
| Custom URL | linkedin.com/in/priyanair-data |
| Current Company | Vantage Retail Analytics (co-op) |
| Current School | Conestoga College |

**Headline analysis:** Follows the `[Role/Aspiration] | [Key Skills/Tools] | [Value Proposition]` formula from the Toolkit. First 40 characters "Aspiring Data Analyst | SQL · Python" are scannable on mobile. Keywords recruiters search for (Data Analyst, SQL, Python, Power BI) are all present.

---

### 6.2 About Section

Follows the Toolkit's four-paragraph entry-level structure (300–400 words). Written in first person, no emojis, short paragraphs, keywords embedded naturally.

**Paragraph 1 — Who You Are (Present):**
I'm a data analyst with a Graduate Certificate in Business Analytics from Conestoga College, where I built a strong foundation in SQL, Python, Power BI, and statistical analysis. I'm passionate about transforming messy, complex datasets into clear insights that help organizations make faster, smarter decisions.

**Paragraph 2 — What You've Done (Past):**
During my co-op at Vantage Retail Analytics, I built automated Power BI dashboards that reduced weekly reporting time by 6 hours across the marketing team. I also wrote SQL queries to analyze over 150,000 customer transaction records, identifying a purchasing trend that contributed to a 12% increase in seasonal campaign revenue. At Conestoga, I led a capstone project where my team used Python and regression analysis to forecast inventory demand for a fictional grocery chain, achieving a 91% prediction accuracy on test data.

**Paragraph 3 — What You Offer (Future Value):**
I take a detail-first approach to data — I believe a dashboard that misleads is worse than no dashboard at all. My approach combines technical rigour with business context, making sure the insights I surface are ones a non-technical stakeholder can act on immediately. I've learned to ask the right questions before writing a single line of SQL, and I bring that same clarity to every deliverable.

**Paragraph 4 — Call to Action:**
I'm actively seeking full-time Data Analyst or Business Intelligence Analyst roles in the GTA, ideally in retail, e-commerce, or financial services. If you're a recruiter or hiring manager in these spaces, I'd love to connect. You can also find my portfolio projects and SQL practice work on my Featured section below.

---

### 6.3 Featured Section (3 items)

All three items follow the Toolkit recommendation to use Featured as a portfolio space.

**Item 1 — Link**
Title: "SQL Practice Repository — 50+ Problems with Solutions"
Meta: "github.com/priyanair-data"
Emoji: 💻
Type: Link

**Item 2 — Link**
Title: "Retail Sales Dashboard — Power BI Capstone Project"
Meta: "View project"
Emoji: 📊
Type: Link

**Item 3 — Post**
Title: "I just finished my Business Analytics co-op. Here's what 4 months in a real data team taught me."
Meta: "214 reactions · 38 comments"
Emoji: 📝
Type: Post

---

### 6.4 Experience Section (3 entries)

Each entry uses the Toolkit bullet formula: `[Action Verb] + [What You Did] + [How/Tool] + [Result/Impact]`

**Entry 1 — Co-op / Internship (most recent)**

Role: Data Analyst Co-op
Company: Vantage Retail Analytics — B2B Retail Analytics SaaS
Duration: May 2024 – Aug 2024 · 4 months
Location: Mississauga, Ontario, Canada

Bullets:
- Built 3 automated Power BI dashboards tracking weekly sales KPIs for the marketing team, reducing manual reporting time by 6 hours per week
- Wrote 20+ complex SQL queries against a PostgreSQL database of 150,000+ customer records to identify purchasing behavior trends, contributing insights that influenced a campaign generating 12% revenue uplift
- Automated a recurring data validation workflow using Python (Pandas), reducing data errors in weekly reports by 40%
- Collaborated with the product and marketing teams in weekly sprint reviews, presenting findings to non-technical stakeholders

Skills: SQL · Python · Power BI · PostgreSQL · DAX · Excel

**Entry 2 — Part-time / Retail (shows work ethic, transferable skills)**

Role: Sales Associate (Part-time)
Company: Indigo Books & Music
Duration: Sep 2022 – Apr 2024 · 1 year 8 months
Location: Mississauga, Ontario, Canada

Bullets:
- Maintained top 10% sales performance in the store for 3 consecutive quarters by building strong product knowledge and consistent customer engagement habits
- Trained 4 new team members on POS systems and customer service protocols, reducing onboarding time by 2 days

Skills: Customer Service · Communication · Training

**Entry 3 — Academic Project / Volunteer Data Role**

Role: Data Analyst Volunteer
Company: NPower Canada — Non-profit Tech Training Organization
Duration: Jan 2024 – Apr 2024 · 4 months
Location: Remote

Bullets:
- Analyzed program enrollment and completion data for 500+ participants using Excel and SQL, producing a report that helped leadership identify a 22% drop-off rate at week 3 of the program
- Created visualizations in Power BI to present findings to the executive team, leading to a curriculum redesign for the following cohort

Skills: SQL · Excel · Power BI · Data Storytelling

---

### 6.5 Education (2 entries)

**Entry 1 — Most Recent (Conestoga)**

School: Conestoga College
Degree: Graduate Certificate, Business Analytics
Duration: Jan 2023 – Aug 2024
GPA: 3.8 / 4.0 — Dean's List, 2024
Relevant Coursework: Database Management (SQL), Business Intelligence, Statistical Analysis, Data Visualization, Machine Learning Fundamentals, Applied Python for Analytics
Activities: Analytics Club member; led team project that placed 2nd in the college's internal data hackathon

**Entry 2 — Undergraduate**

School: Panjab University
Degree: Bachelor of Commerce, Finance
Duration: 2018 – 2022
Activities: Finance Society treasurer; organized annual investment pitch competition for 80+ students

---

### 6.6 Licenses and Certifications (4 entries)

Per the Toolkit's recommended certs for data/tech roles.

1. Google Data Analytics Professional Certificate — Google | Issued Nov 2023 | Credential ID: GDA-CERT-4NM7YP
2. SQL Advanced — HackerRank | Issued Jul 2024 | Credential ID: 9KD2PLQR45
3. Microsoft Power BI Data Analyst Associate (PL-300) — Microsoft | Issued Mar 2024 | Credential ID: MSPL300-83XLK
4. Python for Everybody — Coursera / University of Michigan | Issued Feb 2023 | Credential ID: CRS-PY4E-7YH2

---

### 6.7 Volunteering (2 entries)

**Entry 1**

Role: Data Analyst Volunteer
Org: NPower Canada
Duration: Jan 2024 – Apr 2024 · 4 months
Cause: Education
Description: Analyzed program data for 500+ participants, identified a 22% week-3 drop-off, and produced Power BI visuals for executive leadership that directly informed curriculum changes.

**Entry 2**

Role: ORU Community Ambassador
Org: ORU — Career Growth Platform for Tech Job Seekers
Duration: Mar 2026 – Present · 2 months
Cause: Education
Description: Volunteer ambassador for ORU's GTA community. Help coordinate in-person networking events, moderate online sessions, and support newcomers navigating the Canadian tech job market.

---

### 6.8 Skills (10 skills, grouped by category)

Per the Toolkit: top 3 skills pinned to most recruiter-searched terms. Use LinkedIn Skill Assessments for verified badges. Endorsements sourced from classmates and co-op colleagues.

**Category: Data Analytics (Top 3 — pinned)**
1. SQL — Endorsed by Rajan Mehta (co-op supervisor) · HackerRank SQL Advanced badge · 2 experiences
2. Microsoft Power BI — Endorsed by Simran Brar (classmate) · PL-300 certified · 2 experiences
3. Python — Endorsed by Tariq Hussain (classmate) · 3 projects

**Category: Data Analytics (continued)**
4. Data Analysis — 3 experiences
5. Excel (Advanced) — 2 experiences

**Category: Business Intelligence**
6. DAX — 1 experience at Vantage Retail Analytics
7. Data Visualization — 2 experiences
8. ETL / Data Pipelines — 1 experience

**Category: Tools and Platforms**
9. PostgreSQL — 1 experience
10. Google Analytics — 1 experience

---

### 6.9 Recommendations (2 received)

Per the Toolkit minimum of 3–5; 2 shown on profile with "Show all" option.

**Recommendation 1 — Co-op Supervisor**

Recommender: Rajan Mehta
Title: Senior Data Analyst at Vantage Retail Analytics · Direct Manager
Relationship context: May 2024, Rajan managed Priya directly during her co-op
Text: "Priya joined our analytics team as a co-op student and delivered work that I honestly did not expect from someone at that stage of their career. From week two she was writing production-quality SQL queries without hand-holding, and the Power BI dashboards she built are still being used by the marketing team today. What sets her apart is not just the technical ability but how she communicates — she always asked clarifying questions before starting a task, and her output was always framed around the business question, not just the data. I'd hire her full-time without hesitation."

**Recommendation 2 — Volunteer Supervisor**

Recommender: Alicia Fernandez
Title: Program Manager at NPower Canada
Relationship context: March 2024, Alicia was Priya's supervisor for the volunteer project
Text: "Working with Priya on our program data was a genuinely great experience. She came in, asked all the right questions about what decisions the data needed to inform, and produced analysis that our executive team immediately acted on. The drop-off insight she surfaced led directly to a curriculum redesign that improved completion rates in the next cohort. She is organized, proactive, and a clear communicator — exactly what you want in a data analyst."

---

### 6.10 Languages

- English — Full Professional
- Hindi — Native or Bilingual
- Malayalam — Native or Bilingual

---

### 6.11 Interests (Companies)

- Google — 34.2M followers
- Microsoft — 22.8M followers
- Tableau (Salesforce) — 410K followers
- dbt Labs — 98K followers

---

## 7. Visual Fidelity Requirements

| Element | Spec |
|---|---|
| Background | #f3f2ef |
| Card background | #ffffff |
| Card border | 1px solid #e0dfdc |
| Card border radius | 8px |
| Card gap | 8px |
| LinkedIn blue | #0a66c2 |
| Primary text | #000000e6 |
| Secondary text | #666666 |
| Section title | 18px, bold |
| Body text | 14px, 1.5 line height |
| Font | Source Sans 3 (Google Fonts — closest free equivalent to LinkedIn's typeface) |
| Button shape | Pill (20px border radius) |
| Company logos (no image) | Colored rounded square (44px), initials text in white |
| Avatar (no image) | Colored circle (120px), initials text in white |

---

## 8. Toolkit Compliance Checklist

The fictional profile must satisfy every item in the Toolkit's Final Checklist before Phase 1 is considered done.

**Profile Completeness**
- Professional, high-resolution profile picture (loaded from /assets/avatar.jpg)
- Custom banner image representing the brand (data/analytics visual with tagline)
- Compelling keyword-rich headline (follows Role | Skills | Value formula)
- Specific location (Mississauga, Ontario — not just "Canada")
- Comprehensive About section (300–400 words, four-paragraph entry-level structure)
- Custom public profile URL (linkedin.com/in/priyanair-data)
- 3 experiences listed with bullet points following Action + What + How + Result formula
- Education section fully filled out with GPA, coursework, and activities
- 10 relevant skills added, grouped by category
- 312 connections displayed (realistic for recent grad, en route to 500+)
- Featured section with 3 portfolio items (GitHub, Power BI project, reflection post)
- 2 recommendations from direct supervisor and volunteer manager

**Optimization**
- Keywords from target job descriptions embedded in About section (SQL, Python, Power BI, Data Analyst, Business Intelligence, PostgreSQL, DAX, Excel)
- Top 3 skills (SQL, Power BI, Python) reflect target role requirements
- All experiences have quantified achievements (hours saved, revenue impact, accuracy percentages)
- 4 certifications listed (Google, HackerRank, Microsoft, Coursera)
- Contact info accessible via "Contact info" link

---

## 9. Phase 2 Readiness Requirements

Every section component in Phase 1 must be structured to accept the following prop without any layout changes:

```jsx
onSectionClick={(sectionKey) => openTipDrawer(sectionKey)}
```

Section keys for Phase 2 tip mapping:

| Component | sectionKey |
|---|---|
| Banner | `banner` |
| Profile Photo | `profilePhoto` |
| Headline | `headline` |
| About | `about` |
| Featured | `featured` |
| Experience | `experience` |
| Education | `education` |
| Certifications | `certifications` |
| Volunteering | `volunteering` |
| Skills | `skills` |
| Recommendations | `recommendations` |
| Languages | `languages` |
| Interests | `interests` |

---

## 10. Acceptance Checklist

Before Phase 1 ships:

- [ ] All 13 section components render with no empty states
- [ ] Profile photo and banner load from /assets/ correctly
- [ ] "Show more / show less" works in About section
- [ ] "Received / Given" tab toggle works in Recommendations
- [ ] isOwnProfile toggle switches action buttons correctly
- [ ] Page opens via file:// in Chrome with no console errors
- [ ] A second developer can find any section component and attach onClick in under 5 minutes
- [ ] Every item in Section 8 (Toolkit Compliance Checklist) is satisfied by the profile data
- [ ] No hardcoded data inside components — all content sourced from profileData.js
