export type Opportunity = {
  id: number;
  type: string;
  title: string;
  company: string;
  location: string;
  salary: string | null;
  experience: string;
  duration: string;
  deadline: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
};
export const opportunities: Opportunity[] = [
  {
    id: 1,
    type: "Internship",
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Remote",
    salary: "₦200k – ₦300k/month",
    experience: "Entry level",
    duration: "3–6 months",
    deadline: "September 30, 2026",

    description:
      "TechNova is looking for a motivated Frontend Developer Intern to join its product team and gain practical experience building responsive web applications.",

    responsibilities: [
      "Build responsive and accessible user interfaces.",
      "Develop reusable React components.",
      "Integrate frontend applications with APIs.",
      "Collaborate with designers and developers.",
      "Identify and fix UI bugs.",
    ],

    requirements: [
      "Basic knowledge of HTML, CSS and JavaScript.",
      "Familiarity with React.",
      "Understanding of responsive design.",
      "Basic Git/GitHub knowledge.",
    ],

    niceToHave: [
      "TypeScript experience.",
      "Next.js knowledge.",
      "REST API experience.",
    ],

    benefits: [
      "Practical development experience.",
      "Mentorship.",
      "Remote work.",
      "Certificate of completion.",
    ],
  },

  {
    id: 2,
    type: "Job",
    title: "Backend Developer",
    company: "Tech Corp",
    location: "Nigeria",
    salary: "₦250k – ₦350k/month",
    experience: "Entry level",
    duration: "Full-time",
    deadline: "October 10, 2026",

    description:
      "Tech Corp is seeking a Backend Developer to help build and maintain reliable APIs and backend services.",

    responsibilities: [
      "Build and maintain backend services.",
      "Design and integrate APIs.",
      "Work with databases.",
      "Write clean and maintainable code.",
      "Debug backend issues.",
    ],

    requirements: [
      "Knowledge of backend development.",
      "Understanding of REST APIs.",
      "Familiarity with databases.",
      "Knowledge of Git.",
    ],

    niceToHave: ["Node.js experience.", "TypeScript.", "PostgreSQL."],

    benefits: [
      "Full-time employment.",
      "Professional development.",
      "Collaborative engineering environment.",
    ],
  },

  {
    id: 3,
    type: "Scholarship",
    title: "Google Africa Developer Scholarship",
    company: "Google",
    location: "International",
    salary: "₦20k – ₦50k/month stipend",
    experience: "Beginner–Intermediate",
    duration: "Self-paced",
    deadline: "October 15, 2026",

    description:
      "A technology learning opportunity designed to help aspiring developers improve their technical skills through structured learning and practical projects.",

    responsibilities: [
      "Complete assigned learning activities.",
      "Build practical software development projects.",
      "Participate in learning communities.",
      "Apply technical concepts to real-world problems.",
    ],

    requirements: [
      "Interest in technology and software development.",
      "Access to a computer and internet connection.",
      "Commitment to completing learning activities.",
      "Basic understanding of computers.",
    ],

    niceToHave: [
      "Previous programming experience.",
      "Personal projects.",
      "Familiarity with Git and GitHub.",
    ],

    benefits: [
      "Structured learning.",
      "Access to learning resources.",
      "Community support.",
      "Practical projects.",
      "Career development opportunities.",
    ],
  },

  {
    id: 4,
    type: "Competition",
    title: "Campus Innovation Challenge",
    company: "FutureLabs",
    location: "Nigeria",
    salary: null,
    experience: "Students / Early career",
    duration: "Competition",
    deadline: "October 5, 2026",

    description:
      "A student-focused innovation challenge where participants develop technology-driven solutions to real-world problems and present their ideas to a panel of judges.",

    responsibilities: [
      "Identify a meaningful problem.",
      "Develop an innovative solution.",
      "Build a prototype or minimum viable product.",
      "Prepare a presentation.",
      "Present your solution to judges.",
    ],

    requirements: [
      "Must be a student or early-career innovator.",
      "Ability to work individually or as part of a team.",
      "A clear problem and proposed solution.",
      "Willingness to present your idea.",
    ],

    niceToHave: [
      "Previous hackathon experience.",
      "Knowledge of product development.",
      "Entrepreneurship experience.",
    ],

    benefits: [
      "Exposure to innovation and entrepreneurship.",
      "Mentorship.",
      "Networking opportunities.",
      "Recognition.",
      "Potential prizes and opportunities.",
    ],
  },

  {
    id: 5,
    type: "Internship",
    title: "Product Design Intern",
    company: "Flutterwave",
    location: "Remote",
    salary: "₦180k – ₦240k/month",
    experience: "Entry level",
    duration: "3–6 months",
    deadline: "October 20, 2026",

    description:
      "An internship opportunity for aspiring product designers interested in creating intuitive and useful digital experiences while working with product and engineering teams.",

    responsibilities: [
      "Create wireframes and user flows.",
      "Design user interfaces.",
      "Work with product teams.",
      "Participate in design reviews.",
      "Improve existing product experiences.",
      "Conduct basic user research.",
    ],

    requirements: [
      "Understanding of UI/UX principles.",
      "Familiarity with design tools.",
      "Good visual and communication skills.",
      "Interest in digital products.",
    ],

    niceToHave: [
      "Figma experience.",
      "Personal design portfolio.",
      "Understanding of design systems.",
      "Basic knowledge of frontend development.",
    ],

    benefits: [
      "Mentorship.",
      "Practical product design experience.",
      "Remote work environment.",
      "Portfolio projects.",
      "Collaboration with product teams.",
    ],
  },

  {
    id: 6,
    type: "Job",
    title: "Data Analyst",
    company: "Andela",
    location: "Nigeria",
    salary: "₦320k – ₦400k/month",
    experience: "Entry–Intermediate",
    duration: "Full-time",
    deadline: "October 25, 2026",

    description:
      "A data-focused role involving the transformation of datasets into useful insights that can support business and product decisions.",

    responsibilities: [
      "Collect and analyze datasets.",
      "Build reports and dashboards.",
      "Identify trends and patterns.",
      "Clean and organize data.",
      "Present insights to stakeholders.",
      "Work with teams to answer business questions.",
    ],

    requirements: [
      "Understanding of data analysis.",
      "Knowledge of Excel or spreadsheets.",
      "Basic SQL knowledge.",
      "Analytical and problem-solving skills.",
      "Good communication skills.",
    ],

    niceToHave: [
      "Python.",
      "Power BI or Tableau.",
      "Statistics knowledge.",
      "Data visualization experience.",
    ],

    benefits: [
      "Full-time opportunity.",
      "Professional development.",
      "Collaborative work environment.",
      "Exposure to real-world data problems.",
    ],
  },

  {
    id: 7,
    type: "Scholarship",
    title: "MTN Foundation STEM Scholarship",
    company: "MTN Nigeria",
    location: "Nigeria",
    salary: "₦100k – ₦150k/term",
    experience: "Students",
    duration: "Academic year",
    deadline: "November 1, 2026",

    description:
      "A scholarship opportunity designed for students interested in STEM education, providing financial support to help students continue their education and develop skills in science, technology, engineering and mathematics.",

    responsibilities: [
      "Maintain the required academic performance.",
      "Participate in scholarship activities.",
      "Continue developing skills in STEM-related areas.",
      "Provide required progress information when requested.",
    ],

    requirements: [
      "Must be a student.",
      "Demonstrated interest in STEM.",
      "Meet the academic requirements.",
      "Provide required application information.",
    ],

    niceToHave: [
      "Participation in STEM competitions.",
      "Technology-related projects.",
      "Leadership or community involvement.",
    ],

    benefits: [
      "Educational financial support.",
      "STEM development opportunities.",
      "Access to a wider learning community.",
      "Networking opportunities.",
    ],
  },

  {
    id: 8,
    type: "Job",
    title: "DevOps Engineer",
    company: "Paystack",
    location: "Remote",
    salary: "₦450k – ₦600k/month",
    experience: "Intermediate",
    duration: "Full-time",
    deadline: "November 10, 2026",

    description:
      "A DevOps engineering role focused on improving development workflows, deployment processes, infrastructure reliability and application performance.",

    responsibilities: [
      "Maintain deployment pipelines.",
      "Automate development workflows.",
      "Monitor application infrastructure.",
      "Improve system reliability.",
      "Collaborate with software engineers.",
      "Troubleshoot infrastructure issues.",
    ],

    requirements: [
      "Understanding of Linux.",
      "Knowledge of networking fundamentals.",
      "Familiarity with Git.",
      "Understanding of CI/CD.",
      "Basic cloud infrastructure knowledge.",
    ],

    niceToHave: [
      "Docker.",
      "Kubernetes.",
      "AWS, GCP or Azure.",
      "Terraform.",
      "GitHub Actions.",
    ],

    benefits: [
      "Remote work.",
      "Engineering mentorship.",
      "Exposure to modern infrastructure.",
      "Professional development.",
      "Collaborative engineering environment.",
    ],
  },
  
];
