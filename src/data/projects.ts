export interface Project {
    slug: string;
    title: string;
    category: string;
    subtitle: string;
    featured: boolean;
    status: "Completed" | "In Progress";

    description: string;

    image?: string;

    github?: string;
    demo?: string;

    technologies: string[];

    highlights: string[];

    engineering?: string[];
}

export const projects: Project[] = [
    {
        slug: "form-builder-studio",
        title: "Form Builder Studio",
        category: "Full Stack Application",
        subtitle: "Modern form creation and management platform",
        featured: true,
        status: "In Progress",
        image: "/projects/form-builder.webp",
        github: "",
        demo: "",
        description:
            "A modern full-stack form builder designed to simplify creating, customizing and managing forms. The platform focuses on usability, responsive design and maintainable architecture with a powerful editor, reusable templates and customizable themes.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "FastAPI",
            "Python",
            "MongoDB",
            "JWT",
        ],
        highlights: [
            "Custom form creation workflow",
            "Reusable form templates",
            "Theme customization system",
            "JWT authentication",
            "Responsive user experience",
            "Server-side rendered pages",
            "Reusable component architecture",
        ],

        engineering: [
            "REST API architecture",
            "Frontend/backend separation",
            "CORS configuration",
            "Cloud deployment workflow",
        ],
    },

    {
        slug: "plant-disease-detection",

        title: "Plant Disease Detection",

        category: "AI Research Project",

        subtitle: "Multimodal agricultural intelligence platform",

        featured: false,

        status: "Completed",

        github: "",

        demo: "",

        description:
            "An AI-powered plant disease diagnosis system combining Vision Language Models with Retrieval-Augmented Generation to analyze plant images and provide contextual recommendations. The system supports multilingual responses and uses location-based information to enhance agricultural guidance.",

        technologies: [
            "Python",
            "FastAPI",
            "Vision Language Models",
            "RAG",
            "ChromaDB",
            "OpenCV",
            "OpenRouter",
        ],

        highlights: [
            "Vision-based disease identification",
            "Retrieval-Augmented Generation pipeline",
            "Vector database integration",
            "Multilingual responses",
            "GPS-based contextual information",
            "Weather-aware recommendations",
        ],

        engineering: [
            "API-based AI architecture",
            "Vector search pipeline",
            "Model provider integration",
        ],
    },

    {
        slug: "green-horn-travels",

        title: "Green Horn Travels",

        category: "Freelance Project",

        subtitle: "SEO-focused travel agency website",

        featured: false,

        status: "Completed",

        image: "/projects/greenhorn.webp",

        github: "https://github.com/Abhishek10351/green-horn-travels",

        demo: "",

        description:
            "A freelance travel website developed for Green Horn Travels through Leadsterra. The project started with React and Vite before migrating to Next.js to leverage server-side rendering, improved SEO capabilities and better search engine discoverability.",

        technologies: ["Next.js", "React", "JavaScript", "SASS", "CSS", "SSR"],

        highlights: [
            "Delivered freelance client project",
            "Fully responsive design",
            "SSR migration for SEO improvements",
            "Semantic HTML implementation",
            "Metadata optimization",
            "Google Tag integration",
        ],

        engineering: [
            "Domain deployment",
            "Production hosting setup",
            "SEO-focused architecture",
        ],
    },

    {
        slug: "decentralized-polling-system",

        title: "Decentralized Polling System",

        category: "Blockchain Application",

        subtitle: "Ethereum based transparent voting platform",

        featured: false,

        status: "Completed",

        image: "/projects/polling.webp",

        github: "https://github.com/Abhishek10351/decentralized-polling-system",

        demo: "",

        description:
            "A decentralized voting application built using Ethereum smart contracts that enables transparent and tamper-resistant polling. Users can interact with the blockchain through MetaMask for secure wallet-based authentication.",

        technologies: [
            "Next.js",
            "Ethereum",
            "Solidity",
            "Hardhat",
            "Ether.js",
            "MetaMask",
        ],

        highlights: [
            "Smart contract based voting",
            "Blockchain powered transparency",
            "Wallet integration",
            "Decentralized architecture",
        ],
    },

    {
        slug: "employee-management",

        title: "Employee Management System",

        category: "Business Application",

        subtitle: "Full-stack employee administration platform",

        featured: false,

        status: "Completed",

        image: "/projects/employee.webp",

        github: "https://github.com/Abhishek10351/employee-management",

        demo: "",

        description:
            "A full-stack employee management application built with Django and Next.js featuring authentication, employee management workflows and a responsive user interface.",

        technologies: [
            "Next.js",
            "Django",
            "Django REST Framework",
            "MySQL",
            "Chakra UI",
            "SASS",
        ],

        highlights: [
            "Authentication system",
            "Employee CRUD operations",
            "Pagination support",
            "Class-based API views",
            "Serializer-based API design",
            "Responsive dashboard",
        ],

        engineering: [
            "ORM-based database handling",
            "Session authentication",
            "WhiteNoise static file configuration",
            "Docker deployment",
            "CORS configuration",
        ],
    },

    {
        slug: "intensity",

        title: "Intensity Discord Bot",

        category: "Automation & Backend",

        subtitle: "Interactive Discord community bot",

        featured: false,

        status: "Completed",

        image: "/projects/intensity.webp",

        github: "https://github.com/Abhishek10351/Intensity",

        demo: "",

        description:
            "A multi-purpose Discord bot built with Python and Disnake featuring moderation utilities, interactive games and Discord UI components. A lightweight Flask service was used to keep the bot available on free hosting platforms.",

        technologies: ["Python", "Disnake", "SQLite", "Flask"],

        highlights: [
            "Moderation features",
            "Interactive Discord UI",
            "Button and select menu interactions",
            "Mini games like Tic-Tac-Toe and Rock Paper Scissors",
            "Database-backed features",
        ],
        engineering: [
            "Lightweight backend service",
            "ORM-based database usage",
            "Cloud hosting workaround",
        ],
    },
];
