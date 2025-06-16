export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  description: string;
  skills: string[];
  category: string;
  fee?: number;
}

export const certificates: Certificate[] = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2023-12-15",
    credentialId: "AWS-123456",
    credentialUrl: "https://aws.amazon.com/certification/",
    description:
      "Validates technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
    skills: ["AWS", "Cloud Architecture", "DevOps"],
    category: "Cloud",
    fee: 150,
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023-10-20",
    credentialId: "GCP-789012",
    credentialUrl: "https://cloud.google.com/certification",
    description:
      "Demonstrates ability to build and maintain data processing systems and create machine learning models.",
    skills: ["GCP", "Data Engineering", "Machine Learning"],
    category: "Data Science",
    fee: 200,
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023-08-05",
    credentialId: "AZ-204",
    credentialUrl: "https://www.microsoft.com/learning/",
    description:
      "Validates expertise in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.",
    skills: ["Azure", "Cloud Development", "C#"],
    category: "Cloud",
    fee: 165,
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023-06-18",
    credentialId: "CKA-456789",
    credentialUrl: "https://www.cncf.io/certification/cka/",
    description:
      "Demonstrates ability to perform basic installation as well as configuring and managing production-grade Kubernetes clusters.",
    skills: ["Kubernetes", "Container Orchestration", "DevOps"],
    category: "DevOps",
    fee: 375,
  },
  {
    title: "Oracle Certified Professional, Java SE 11 Developer",
    issuer: "Oracle",
    date: "2023-04-12",
    credentialId: "1Z0-819",
    credentialUrl: "https://education.oracle.com/",
    description:
      "Validates advanced knowledge of Java programming language and platform features.",
    skills: ["Java", "Object-Oriented Programming", "Spring"],
    category: "Backend",
    fee: 245,
  },
  {
    title: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "2023-02-28",
    credentialId: "PSM-I-123",
    credentialUrl: "https://www.scrum.org/",
    description:
      "Validates understanding of the Scrum framework and ability to apply Scrum in real-world scenarios.",
    skills: ["Scrum", "Agile", "Project Management"],
    category: "DevOps",
    fee: 150,
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023-01-15",
    credentialId: "TF-789",
    credentialUrl: "https://www.tensorflow.org/certificate",
    description:
      "Demonstrates proficiency in building and training machine learning models using TensorFlow.",
    skills: ["TensorFlow", "Machine Learning", "Python"],
    category: "AI/ML",
    fee: 100,
  },
  {
    title: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC2",
    date: "2022-11-30",
    credentialId: "CISSP-456",
    credentialUrl: "https://www.isc2.org/",
    description:
      "Validates expertise in designing, implementing, and managing a best-in-class cybersecurity program.",
    skills: ["Security", "Risk Management", "Cryptography"],
    category: "Security",
    fee: 749,
  },
  {
    title: "React Advanced Concepts",
    issuer: "Frontend Masters",
    date: "2022-09-15",
    credentialId: "REACT-789",
    credentialUrl: "https://frontendmasters.com/",
    description:
      "Advanced React patterns, performance optimization, and state management techniques.",
    skills: ["React", "JavaScript", "Performance"],
    category: "Frontend",
    fee: 0,
  },
  {
    title: "Node.js Design Patterns",
    issuer: "Pluralsight",
    date: "2022-07-20",
    credentialId: "NODE-123",
    credentialUrl: "https://www.pluralsight.com/",
    description:
      "Master Node.js design patterns and best practices for building scalable applications.",
    skills: ["Node.js", "JavaScript", "Design Patterns"],
    category: "Backend",
    fee: 0,
  },
];
