export interface SkillNode {
  id: string;
  name: string;
  category: 'PROGRAMMING' | 'WEB' | 'AI / DATA' | 'TOOLS';
  level: string; // e.g. "Primary", "Advanced", "Proficient"
  description: string;
  related: string[];
  connections: string[]; // skill IDs it links with
}

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  technology: string[];
  contribution: string;
  outcome: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  isFeaturedAi?: boolean;
  tamperConfidence?: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  keyHighlights: string[];
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  specialization: string;
  status: string;
  focusAreas: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    fullName: string;
    label: string;
    title: string;
    headline: string;
    tagline: string;
    careerObjective: string;
    status: string;
    location: string;
    profileImage: string;
    resumeFile: string;
    terminalName: string;
    email: string;
    github: string;
    linkedin: string;
  };
  floatingKeywords: string[];
  education: EducationItem[];
  skills: {
    categories: Array<'PROGRAMMING' | 'WEB' | 'AI / DATA' | 'TOOLS'>;
    nodes: SkillNode[];
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certifications: string[];
  aboutCards: {
    education: {
      degree: string;
      field: string;
      timeline: string;
      gradeNote: string;
    };
    focus: {
      title: string;
      domains: string[];
      philosophy: string;
    };
    interests: {
      topics: string[];
      hobby: string;
    };
    careerGoal: {
      summary: string;
      targetRoles: string[];
    };
    currentStatus: {
      availability: string;
      workMode: string;
      lastUpdated: string;
    };
  };
  contact: {
    email: string;
    phone?: string;
    github: string;
    linkedin: string;
    location: string;
  };
  predefinedQuestions: {
    id: string;
    question: string;
    answer: string;
    category: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Aadhipradhap",
    fullName: "Aadhipradhap V",
    label: "AI & DATA SCIENCE DEVELOPER",
    title: "AI & Data Science Developer",
    headline: "Building intelligent solutions where CODE meets DATA.",
    tagline: "Bridging applied deep learning algorithms, computer vision pipelines, and modern high-performance web systems.",
    careerObjective: "Passionate AI & Data Science developer dedicated to engineering intelligent, data-driven systems. Specializing in computer vision forensics, predictive modeling, and scalable full-stack applications with high aesthetic craft.",
    status: "OPEN FOR INTERNSHIPS & ROLES",
    location: "India • Remote & Relocation Ready",
    profileImage: "/assets/profile.jpg",
    resumeFile: "/assets/resume.pdf",
    terminalName: "AADHIPRADHAP_AI",
    email: "aadhivel2914@gmail.com",
    github: "https://github.com/aadhipradhap",
    linkedin: "https://linkedin.com/in/aadhipradhap"
  },

  floatingKeywords: [
    "AI",
    "PYTHON",
    "DATA",
    "WEB",
    "VISION",
    "ML"
  ],

  aboutCards: {
    education: {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      field: "AI, Deep Learning & Algorithmic Computation",
      timeline: "2022 — 2026",
      gradeNote: "Undergraduate Program • Core Focus on Machine Intelligence"
    },
    focus: {
      title: "Core Technical Pillars",
      domains: [
        "Computer Vision & Document Forensics",
        "Predictive Analytics & Statistical Modeling",
        "Full-Stack Reactive Interfaces (React + TypeScript)"
      ],
      philosophy: "Translating complex mathematical algorithms into deterministic, user-centric software."
    },
    interests: {
      topics: [
        "Neural Network Architectures",
        "Deep Learning Forensic Analysis",
        "Real-time Computer Vision Pipelines",
        "Interactive Data Visualization"
      ],
      hobby: "Exploring frontier machine learning papers and building digital command-center tools"
    },
    careerGoal: {
      summary: "To engineer scalable artificial intelligence architectures and machine learning systems that automate high-friction operational and verification workflows.",
      targetRoles: [
        "AI / ML Engineer",
        "Data Science Specialist",
        "Full-Stack Python / React Developer"
      ]
    },
    currentStatus: {
      availability: "Immediate Availability for Summer & Fall Opportunities",
      workMode: "Hybrid / Remote / On-site",
      lastUpdated: "2026"
    }
  },

  skills: {
    categories: ['PROGRAMMING', 'AI / DATA', 'WEB', 'TOOLS'],
    nodes: [
      // PROGRAMMING
      {
        id: 'python',
        name: 'Python',
        category: 'PROGRAMMING',
        level: 'Primary Language',
        description: 'Primary weapon for data science, neural model architectures, automation scripting, and backend API integration.',
        related: ['OpenCV', 'Pandas', 'Scikit-Learn', 'NumPy'],
        connections: ['ml', 'opencv', 'pandas', 'c-cpp']
      },
      {
        id: 'c-cpp',
        name: 'C / C++',
        category: 'PROGRAMMING',
        level: 'Core Foundations',
        description: 'Algorithmic problem solving, low-level memory comprehension, pointer mechanics, and computational complexity analysis.',
        related: ['Data Structures', 'Algorithms', 'System Logic'],
        connections: ['python', 'sql']
      },
      {
        id: 'javascript-ts',
        name: 'JavaScript / TypeScript',
        category: 'PROGRAMMING',
        level: 'Modern Web Logic',
        description: 'Static typing, asynchronous workflows, dynamic DOM manipulation, and modern web application logic.',
        related: ['React', 'Node.js', 'Vite'],
        connections: ['react', 'web-core', 'nodejs']
      },
      {
        id: 'sql',
        name: 'SQL',
        category: 'PROGRAMMING',
        level: 'Database Queries',
        description: 'Relational data modeling, complex JOIN operations, aggregation functions, and database schema structuring.',
        related: ['Relational DBs', 'Data Pipelines', 'Analytics'],
        connections: ['pandas', 'python']
      },

      // AI / DATA
      {
        id: 'ml',
        name: 'Machine Learning',
        category: 'AI / DATA',
        level: 'Core Domain',
        description: 'Supervised & unsupervised learning paradigms, regression, classification, feature engineering, and model validation protocols.',
        related: ['Scikit-Learn', 'Feature Engineering', 'Model Tuning'],
        connections: ['python', 'deep-learning', 'pandas', 'sklearn']
      },
      {
        id: 'deep-learning',
        name: 'Deep Learning',
        category: 'AI / DATA',
        level: 'Specialization',
        description: 'Convolutional neural networks (CNNs), multi-layer perceptrons, backpropagation mechanics, and weight optimization.',
        related: ['CNN', 'Transfer Learning', 'Computer Vision'],
        connections: ['ml', 'opencv', 'python']
      },
      {
        id: 'opencv',
        name: 'Computer Vision / OpenCV',
        category: 'AI / DATA',
        level: 'Specialization',
        description: 'Digital image processing, edge detection, pixel manipulation analysis, contour extraction, and visual forensic scanning.',
        related: ['Image Forensics', 'Noise Analysis', 'Object Detection'],
        connections: ['deep-learning', 'python']
      },
      {
        id: 'pandas',
        name: 'Pandas & NumPy',
        category: 'AI / DATA',
        level: 'Data Manipulation',
        description: 'Vectorized mathematical operations, multi-index dataframes, clean ETL transformations, and data restructuring.',
        related: ['Data Wrangling', 'Matrix Math', 'Statistical Analysis'],
        connections: ['python', 'ml', 'sql']
      },
      {
        id: 'sklearn',
        name: 'Scikit-Learn',
        category: 'AI / DATA',
        level: 'Model Implementation',
        description: 'Pipeline building, hyperparameter grid-search, ensemble methods (Random Forests, Gradient Boosting), and classification metrics.',
        related: ['Model Benchmarks', 'ROC-AUC', 'Cross-Validation'],
        connections: ['ml', 'pandas']
      },

      // WEB
      {
        id: 'react',
        name: 'React',
        category: 'WEB',
        level: 'Component Architecture',
        description: 'Modern functional hooks, reactive state composition, component modularity, and smooth user interfaces.',
        related: ['TypeScript', 'Tailwind CSS', 'Vite'],
        connections: ['javascript-ts', 'tailwind', 'web-core']
      },
      {
        id: 'web-core',
        name: 'HTML5 & CSS3',
        category: 'WEB',
        level: 'Semantic Foundations',
        description: 'Semantic document structure, responsive flexbox & grid design, accessible hierarchy, and CSS variables.',
        related: ['Tailwind CSS', 'Accessibility', 'Responsive Design'],
        connections: ['react', 'tailwind', 'javascript-ts']
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'WEB',
        level: 'Utility-First Styling',
        description: 'Rapid UI engineering, dark mode orchestration, bespoke micro-interactions, and glassmorphism styling.',
        related: ['Modern UI', 'Micro-Interactions', 'Design Systems'],
        connections: ['react', 'web-core']
      },
      {
        id: 'nodejs',
        name: 'Node.js & REST APIs',
        category: 'WEB',
        level: 'Backend & Integration',
        description: 'Asynchronous event-driven runtime, RESTful endpoint creation, JSON payload parsing, and developer tooling.',
        related: ['Express', 'APIs', 'Full-Stack Integration'],
        connections: ['javascript-ts', 'sql']
      },

      // TOOLS
      {
        id: 'git',
        name: 'Git & GitHub',
        category: 'TOOLS',
        level: 'Version Control',
        description: 'Branching workflows, version history tracking, commit hygiene, pull requests, and collaborative repository management.',
        related: ['CI/CD', 'Code Review', 'Open Source'],
        connections: ['vscode', 'python', 'react']
      },
      {
        id: 'vscode',
        name: 'VS Code & Linux',
        category: 'TOOLS',
        level: 'Development Environment',
        description: 'POSIX shell navigation, bash automation, debugging tools, virtual environments, and workspace productivity extensions.',
        related: ['Terminal', 'Bash', 'Debugging'],
        connections: ['git', 'jupyter']
      },
      {
        id: 'jupyter',
        name: 'Jupyter & Google Colab',
        category: 'TOOLS',
        level: 'Interactive Research',
        description: 'Interactive computational notebooks, GPU-accelerated model experimentation, exploratory data analytics, and visual plotting.',
        related: ['Model Training', 'GPU Acceleration', 'Research Prototyping'],
        connections: ['python', 'pandas', 'ml']
      }
    ]
  },

  projects: [
    {
      id: 'cert-detection',
      num: '01',
      title: 'AI Fake Certificate Detection',
      tagline: 'Deep learning & computer vision forensic inspection platform for academic credentials authentication.',
      problem: 'Fraudulent certificates and manipulated academic credentials undermine institutional trust and require exhausting manual verification during admissions and recruitment.',
      solution: 'Constructed an automated multi-stage document verification pipeline combining computer vision edge filtering, pixel inconsistency scanning, font layout analysis, and cryptographic metadata checks.',
      technology: ['Python', 'OpenCV', 'Deep Learning', 'Convolutional Neural Networks', 'Scikit-Learn', 'React'],
      contribution: 'Architected the core image preprocessing filters, artifact noise extraction algorithm, trained binary classification models, and developed the interactive diagnostic verification view with real-time tamper heatmap.',
      outcome: 'Flags minute digital modifications, font irregularities, and seal compression anomalies with deterministic confidence scores and visual scan reports.',
      githubUrl: 'https://github.com/aadhipradhap',
      liveDemoUrl: '#scanner-demo',
      isFeaturedAi: true,
      tamperConfidence: '99.4% Scan Reliability'
    },
    {
      id: 'predictive-analytics',
      num: '02',
      title: 'Data-Driven Predictive Analytics Engine',
      tagline: 'Automated machine learning classification and multivariate pattern discovery framework.',
      problem: 'High-dimensional business datasets frequently contain non-linear feature interactions, missing variables, and latent outliers that degrade conventional forecasting.',
      solution: 'Developed an end-to-end predictive pipeline automating feature encoding, imputation, correlation matrices, and model comparison across Random Forest, XGBoost, and Logistic Regression.',
      technology: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
      contribution: 'Designed robust data transformation pipelines, automated hyperparameter cross-validation sweeps, and generated interactive performance radar charts (Precision, Recall, F1, ROC-AUC).',
      outcome: 'Streamlined exploratory modeling workflows, reduced data cleanup overhead, and produced clear interpretable diagnostic metrics.',
      githubUrl: 'https://github.com/aadhipradhap',
      liveDemoUrl: 'https://github.com/aadhipradhap'
    },
    {
      id: 'vision-classifier',
      num: '03',
      title: 'Smart Vision Object & Anomaly Classifier',
      tagline: 'Real-time spatial feature extraction and image classification pipeline.',
      problem: 'Edge visual classification tasks demand rapid frame inference without sacrificing accuracy under variable ambient lighting and partial occlusions.',
      solution: 'Trained convolutional vision models using custom data augmentation strategies, bounding box extraction, and confidence thresholding for real-time edge processing.',
      technology: ['Python', 'OpenCV', 'CNN Architectures', 'NumPy', 'Jupyter'],
      contribution: 'Prepared annotated datasets, implemented custom image normalization layers, fine-tuned network weights, and benchmarked inference speed across various input resolutions.',
      outcome: 'Delivered reliable multi-class visual inference with low latency, suitable for automated inspection and sorting workflows.',
      githubUrl: 'https://github.com/aadhipradhap',
      liveDemoUrl: 'https://github.com/aadhipradhap'
    },
    {
      id: 'command-dashboard',
      num: '04',
      title: 'Personal Digital Lab & Command Center',
      tagline: 'Interactive developer identity platform combining micro-interactions, AI terminal, and reactive visualization.',
      problem: 'Standard student portfolios rely on generic templates that fail to showcase both software craftsmanship and deep technical discipline.',
      solution: 'Engineered a bespoke cyber-lab web experience with custom canvas cursor physics, interactive technology constellation graphs, local portfolio Q&A engine, and integrated CLI terminal.',
      technology: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Motion'],
      contribution: 'Designed the complete UI/UX design system, state-driven SVG constellation graph, keyboard-driven terminal emulator, and responsive layout across all breakpoints.',
      outcome: 'Zero layout shift, 100% accessible keyboard navigation, instant local interaction speed, and a memorable identity for technical recruiters.',
      githubUrl: 'https://github.com/aadhipradhap',
      liveDemoUrl: '#'
    }
  ],

  experience: [
    {
      year: '2024 — PRESENT',
      role: 'AI & Data Science Trainee / Intern',
      company: 'Technical Internship & Applied AI Labs',
      location: 'India',
      description: 'Engaged in developing applied machine learning models, structured data preprocessing, exploratory statistical analysis, and integrating computer vision algorithms with frontend client interfaces.',
      technologies: ['Python', 'OpenCV', 'Scikit-Learn', 'Pandas', 'React', 'Git'],
      keyHighlights: [
        'Built automated image transformation and noise filtering pipelines for forensic verification datasets.',
        'Collaborated on feature engineering and cross-validation workflows for predictive analytics models.',
        'Bridged model output endpoints with reactive web dashboards to visualize classification confidence.'
      ]
    },
    {
      year: '2023 — 2024',
      role: 'Academic Projects & Technical Contributor',
      company: 'Department of AI & Data Science',
      location: 'Campus Labs',
      description: 'Spearheaded departmental technical initiatives, algorithmic problem solving sessions, and led collaborative hackathon project implementations.',
      technologies: ['Python', 'C / C++', 'SQL', 'Data Structures & Algorithms', 'Linux'],
      keyHighlights: [
        'Organized coding challenges and structured peer peer-learning modules on data structures in C/C++.',
        'Conducted exploratory research on document image forgery techniques and forensic verification paradigms.'
      ]
    }
  ],

  education: [
    {
      year: '2022 — 2026',
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Undergraduate Engineering Program',
      specialization: 'Artificial Intelligence & Data Science',
      status: 'In Progress (Senior Phase)',
      focusAreas: [
        'Machine Learning & Deep Neural Networks',
        'Computer Vision & Pattern Recognition',
        'Data Structures & Algorithmic Analysis',
        'Relational Database Management Systems (RDBMS)',
        'Statistical Foundations of Data Science'
      ]
    },
    {
      year: '2020 — 2022',
      degree: 'Higher Secondary Certificate (HSC) / Pre-University',
      institution: 'Secondary & Senior Schooling',
      specialization: 'Mathematics, Physics, Chemistry & Computer Science',
      status: 'Completed with Distinction',
      focusAreas: [
        'Advanced Mathematics & Calculus',
        'Foundational Programming Concepts',
        'Analytical Reasoning'
      ]
    }
  ],

  certifications: [
    'Machine Learning & Deep Learning Foundations',
    'Applied Computer Vision with OpenCV & Python',
    'Modern Web Engineering with React & Tailwind CSS',
    'Problem Solving & Data Structures in C++ & Python',
    'Relational Databases & SQL Query Optimization'
  ],

  contact: {
    email: 'aadhivel2914@gmail.com',
    github: 'https://github.com/aadhipradhap',
    linkedin: 'https://linkedin.com/in/aadhipradhap',
    location: 'India'
  },

  predefinedQuestions: [
    {
      id: 'q1',
      question: 'What technologies does he know?',
      answer: 'Aadhipradhap is proficient in Python, C, C++, JavaScript, TypeScript, and SQL. On the AI/Data side, he works extensively with Machine Learning, Deep Learning, OpenCV for Computer Vision, Scikit-Learn, Pandas, and NumPy. For web interfaces, he builds with React, Tailwind CSS, HTML5, CSS3, and Node.js.',
      category: 'Skills'
    },
    {
      id: 'q2',
      question: 'What projects has he built?',
      answer: 'His flagship project is the "AI Fake Certificate Detection" system which applies deep learning & computer vision forensics to detect manipulated documents and tampered fonts. He has also built a "Data-Driven Predictive Analytics Engine", a "Smart Vision Object Classifier", and this interactive "Personal Command Center" portfolio.',
      category: 'Projects'
    },
    {
      id: 'q3',
      question: 'What is his educational background?',
      answer: 'Aadhipradhap is pursuing his Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science (2022–2026). His coursework focuses on Machine Learning, Deep Neural Networks, Computer Vision, Algorithms, and Statistical Data Modeling.',
      category: 'Education'
    },
    {
      id: 'q4',
      question: 'What experience does he have?',
      answer: 'He has worked as an AI & Data Science Trainee / Intern, focusing on computer vision pipelines, image noise analysis, exploratory data science, and connecting trained model inference outputs with modern interactive frontend dashboards.',
      category: 'Experience'
    },
    {
      id: 'q5',
      question: 'How does the Fake Certificate Detection work?',
      answer: 'The AI Fake Certificate Detection system uses a multi-layered verification strategy: preprocessing image noise patterns, inspecting pixel-level inconsistencies around typography and institutional seals, checking alignment variance against authentic templates, and producing an interactive tamper confidence heatmap.',
      category: 'AI Project'
    },
    {
      id: 'q6',
      question: 'How can I contact him for opportunities?',
      answer: 'You can directly email him at aadhivel2914@gmail.com, connect on LinkedIn (linkedin.com/in/aadhipradhap), or explore his repositories on GitHub (github.com/aadhipradhap). He is actively open to internships and software engineering roles!',
      category: 'Contact'
    }
  ]
};
