export const personalInfo = {
  name: "Yash Thakur",
  email: "yt31556@gmail.com",
  phone: "+91 9819010080",
  location: "Koparkharine, Navi-Mumbai",
  title: "Computer Science Student & Developer",
  description: "Final-year Computer Science student at SIES College, Nerul, with a strong passion for technology and problem-solving. Looking to channel my technical knowledge and drive into innovative projects where I can learn, grow, and contribute meaningfully to impactful teams.",
};

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "Java", level: 80 },
    { name: "C++", level: 75 },
  ],
  "Web Technologies": [
    { name: "Django", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 80 },
  ],
  "Database & Tools": [
    { name: "SQL/MySQL", level: 85 },
    { name: "Machine Learning", level: 75 },
    { name: "OOP", level: 90 },
  ],
};

export const projects = [
  {
    id: "jarvis",
    title: "Jarvis Voice Assistant",
    description: "A voice-controlled assistant that processes natural language commands for web search, reminders, and smart device control using Python and NLP.",
    category: "ml",
    technologies: ["Python", "NLP", "Speech Recognition"],
    features: [
      "Voice recognition and speech-to-text conversion",
      "Natural Language Processing for command interpretation",
      "Web search capabilities",
      "Reminder and task management",
      "Smart device control integration",
      "Text-to-speech feedback system"
    ],
    challenges: "Implementing accurate voice recognition and creating a robust command interpretation system that could handle various accents and speech patterns.",
    outcome: "Successfully created a functional voice assistant that can perform multiple tasks through voice commands, demonstrating proficiency in AI/ML technologies.",
    icon: "🎤",
    color: "from-blue-500 to-purple-600",
    badge: "AI/ML",
    badgeColor: "bg-blue-500"
  },
  {
    id: "bank",
    title: "Bank Management System",
    description: "Role-based desktop application simulating banking operations with user authentication, account management, and secure transactions.",
    category: "desktop",
    technologies: ["Java", "MySQL", "JDBC"],
    features: [
      "Role-based user authentication (Manager, Accountant, Client)",
      "Account creation and management",
      "Transaction processing (Deposit, Withdraw, Transfer)",
      "Cheque deposit functionality",
      "PDF statement generation",
      "Secure database operations with JDBC"
    ],
    challenges: "Implementing secure authentication, managing different user roles, and ensuring data integrity across all banking operations.",
    outcome: "Developed a secure, fully-functional banking system that demonstrates understanding of enterprise-level application development and database management.",
    icon: "🏦",
    color: "from-green-500 to-teal-600",
    badge: "Desktop",
    badgeColor: "bg-green-500"
  },
  {
    id: "reservation",
    title: "Reservation Management System",
    description: "Python-based reservation system with user booking interface and admin dashboard for managing flight reservations and bookings.",
    category: "web",
    technologies: ["Python", "Django", "Validation"],
    features: [
      "User-friendly booking interface",
      "Flight search and selection",
      "Passenger details validation",
      "Admin dashboard for reservation management",
      "Booking confirmation and management",
      "Data validation and error handling"
    ],
    challenges: "Creating an intuitive user interface while ensuring robust data validation and implementing secure admin authentication.",
    outcome: "Built a complete reservation system that handles the entire booking workflow from search to confirmation, showcasing web development skills.",
    icon: "✈️",
    color: "from-purple-500 to-pink-600",
    badge: "Web",
    badgeColor: "bg-purple-500"
  }
];

export const experience = [
  {
    title: "Django Developer",
    company: "Mira Advanced Engineering",
    location: "Thane, India",
    period: "Sep 2023 - Oct 2023",
    description: "Completed four projects: Bitcoin converter, square root finder with authentication, Bus Route finder, and college management system. Enhanced web development and database management skills.",
    technologies: ["Django", "Python", "Authentication"],
  },
  {
    title: "Python Developer",
    company: "Mira Advanced Engineering",
    location: "Thane, India",
    period: "Jul 2023 - Aug 2023",
    description: "Worked on four key projects: digital clock, GUI calculator, feedback management system, and employee management system. Gained hands-on experience with Python libraries for data analysis and visualization.",
    technologies: ["Python", "GUI", "Data Analysis"],
  },
];

export const education = {
  degree: "B.E. in Computer Engineering",
  institution: "SIES Graduate School of Technology",
  location: "Nerul, Navi Mumbai",
  year: "2025",
  cgpa: "7.7/10",
};

export const certifications = [
  {
    title: "Python with Data Structures & Data Science",
    description: "Comprehensive Python certification",
    icon: "🐍",
    color: "bg-blue-500",
  },
  {
    title: "MySQL 8.x with PL/SQL",
    description: "Database programming certification",
    icon: "🗄️",
    color: "bg-green-500",
  },
  {
    title: "Django Web Framework & REST API",
    description: "Web development certification",
    icon: "🌐",
    color: "bg-purple-500",
  },
];

export const stats = [
  { label: "CGPA", value: 7.7 },
  { label: "Projects", value: 3 },
  { label: "Internships", value: 2 },
  { label: "Certifications", value: 3 },
];
