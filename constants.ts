import { ResumeData } from './types';

export const INITIAL_YAML = `
basics:
  name: Alex Sterling
  label: Senior Full Stack Engineer
  email: alex.sterling@example.com
  phone: (555) 123-4567
  url: https://alexsterling.dev
  summary: >
    Product-minded software engineer with 8+ years of experience building scalable web applications. 
    Specialized in React, Node.js, and cloud architecture. Proven track record of leading teams 
    and delivering award-winning user interfaces.
  location:
    city: San Francisco
    region: CA
  profiles:
    - network: GitHub
      username: asterling
      url: https://github.com/asterling
    - network: LinkedIn
      username: alex-sterling
      url: https://linkedin.com/in/alex-sterling

work:
  - name: TechFlow Solutions
    position: Staff Software Engineer
    startDate: "2021-03"
    endDate: Present
    summary: Leading the frontend infrastructure team for a high-traffic SaaS platform.
    highlights:
      - Architected a micro-frontend system reducing build times by 40%.
      - Mentored 5 junior developers to promotion.
      - Spearheaded the migration from legacy Backbone.js to React 18.
  
  - name: Creative Pulse Agency
    position: Senior Frontend Developer
    startDate: "2018-06"
    endDate: "2021-02"
    summary: Developed immersive web experiences for Fortune 500 clients.
    highlights:
      - Won "Site of the Day" Awwwards for the Nike campaign.
      - Implemented complex WebGL animations optimizing for mobile performance.

education:
  - institution: University of California, Berkeley
    area: Computer Science
    studyType: Bachelor of Science
    startDate: "2014-09"
    endDate: "2018-05"

skills:
  - name: Frontend
    keywords:
      - React
      - TypeScript
      - Tailwind CSS
      - Next.js
  - name: Backend
    keywords:
      - Node.js
      - PostgreSQL
      - Redis
      - GraphQL
  - name: DevOps
    keywords:
      - AWS
      - Docker
      - CI/CD
      - Terraform

projects:
  - name: OpenSource UI Lib
    description: A lightweight React component library used by 10k+ developers.
    highlights:
      - 5k+ Stars on GitHub.
      - 98% Test Coverage.
    url: https://github.com/example/lib
`;
