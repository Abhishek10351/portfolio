"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import SpotlightCard from "@/components/ui/SpotlightCard";
import FadeContent from "@/components/ui/FadeContent";
import BlurText from "@/components/ui/BlurText";
import type { LucideIcon } from "lucide-react";

export interface Technology {
    name: string;
    icon: React.ElementType;
    invertDark?: boolean;
}

export interface Category {
    title: string;
    icon: LucideIcon;
    description: string;
    technologies: Technology[];
}

import {
    Code2,
    Server,
    Database,
    Cloud,
    Cpu,
    Blocks,
} from "lucide-react";

import {
    _React as ReactIcon,
    NextjsIcon,
    Css3,
    Sass,
    TypescriptIcon,
    Javascript,
    TailwindIcon,
    Python,
    FastapiIcon,
    Flask,
    DjangoIcon,
    NodejsIcon,
    PostmanIcon,
    MongodbIcon,
    Mysql,
    Postgresql,
    SqliteIcon,
    Aws,
    DockerIcon,
    GitIcon,
    GithubActions,
    LinuxTux,
    Opencv,
    PytorchIcon,
    PandasIcon,
    SeabornIcon,
    Numpy,
    Chroma,
    Langchain,
    HuggingFaceIcon,
    Ethereum,
    Solidity,
    HardhatIcon,
    Ethers,
} from "@dev.icons/react";

import {
    ShadcnUI,
    ExpressJsLight,
    HTML5,
    ChakraUI,
    Redis,
} from "developer-icons";

export const categories: Category[] = [
    {
        title: "Frontend",
        icon: Code2,
        description:
            "Modern web interfaces with responsive design and component-based architecture.",
        technologies: [
            { name: "React", icon: ReactIcon },
            { name: "Next.js", icon: NextjsIcon, invertDark: true },
            { name: "TypeScript", icon: TypescriptIcon },
            { name: "JavaScript", icon: Javascript },
            { name: "HTML5", icon: HTML5 },
            { name: "CSS3", icon: Css3 },
            { name: "Sass", icon: Sass },
            { name: "Tailwind CSS", icon: TailwindIcon },
            { name: "Chakra UI", icon: ChakraUI },
            { name: "shadcn/ui", icon: ShadcnUI, invertDark: true },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description:
            "REST APIs, authentication, and scalable backend services.",
        technologies: [
            { name: "Python", icon: Python },
            { name: "Node.js", icon: NodejsIcon },
            { name: "Express.js", icon: ExpressJsLight },
            { name: "FastAPI", icon: FastapiIcon },
            { name: "Django", icon: DjangoIcon },
            { name: "Flask", icon: Flask, invertDark: true },
            { name: "Postman", icon: PostmanIcon },
        ],
    },
    {
        title: "Databases",
        icon: Database,
        description: "Relational, NoSQL and vector databases.",
        technologies: [
            { name: "MongoDB", icon: MongodbIcon },
            { name: "MySQL", icon: Mysql },
            { name: "PostgreSQL", icon: Postgresql },
            { name: "SQLite", icon: SqliteIcon },
            { name: "Redis", icon: Redis },
            { name: "ChromaDB", icon: Chroma },
        ],
    },
    {
        title: "AI & Machine Learning",
        icon: Cpu,
        description: "LLMs, computer vision and intelligent applications.",
        technologies: [
            { name: "LangChain", icon: Langchain },
            { name: "Hugging Face", icon: HuggingFaceIcon },
            { name: "PyTorch", icon: PytorchIcon },
            { name: "OpenCV", icon: Opencv },
            { name: "NumPy", icon: Numpy },
            { name: "Pandas", icon: PandasIcon },
            { name: "Seaborn", icon: SeabornIcon },
        ],
    },
    {
        title: "Blockchain",
        icon: Blocks,
        description:
            "Smart contracts and decentralized application development.",
        technologies: [
            { name: "Ethereum", icon: Ethereum },
            { name: "Solidity", icon: Solidity },
            { name: "Hardhat", icon: HardhatIcon },
            { name: "Ethers.js", icon: Ethers },
        ],
    },
    {
        title: "DevOps & Cloud",
        icon: Cloud,
        description: "Deployment, containers and development workflows.",
        technologies: [
            { name: "AWS", icon: Aws },
            { name: "Docker", icon: DockerIcon },
            { name: "Git", icon: GitIcon },
            { name: "GitHub Actions", icon: GithubActions },
            { name: "Linux", icon: LinuxTux },
        ],
    },
];

const CategoryCard = ({
    title,
    icon: Icon,
    description,
    technologies,
}: Category) => {
    return (
        <SpotlightCard className="group flex h-full flex-col justify-between rounded-none border-2 border-border bg-card p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-accent hover:shadow-[6px_6px_0px_0px_var(--accent)] sm:p-8">
            <div className="mb-6 flex items-start gap-4 sm:gap-5 bg-cyan-30">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-accent bg-background text-accent shadow-[4px_4px_0px_0px_var(--accent)] transition-transform duration-300 group-hover:-rotate-6">
                    <Icon size={28} strokeWidth={2.5} />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="truncate text-2xl font-black tracking-tight text-foreground uppercase">
                        {title}
                    </h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/50 sm:gap-2.5 bg-red-30">
                {technologies.map((tech) => {
                    const TechIcon = tech.icon;

                    return (
                        <div
                            key={tech.name}
                            className="group/tech flex cursor-default items-center gap-2 rounded-none border-2 border-border bg-background px-3 py-1.5 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-accent hover:shadow-[3px_3px_0px_0px_var(--accent)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                        >
                            <TechIcon
                                className={`h-4 w-4 text-lg transition-transform duration-200 group-hover/tech:scale-110 ${
                                    tech.invertDark
                                        ? "invert brightness-200"
                                        : ""
                                }`}
                                size={16}
                            />
                            <span className="text-xs font-bold tracking-wider text-foreground/90 uppercase transition-colors group-hover/tech:text-accent">
                                {tech.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </SpotlightCard>
    );
};

export default function TechStack() {
    return (
        <section id="skills" className="relative py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
                    <Badge className="mb-4 rounded-none border-2 border-accent bg-background px-3.5 py-1 text-xs font-black tracking-widest text-accent uppercase shadow-[3px_3px_0px_0px_var(--accent)] rotate-1">
                        🕸️Web of Technologies
                    </Badge>

                    <BlurText
                        text="Every project starts with the right tools."
                        className="text-balance text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl md:text-5xl lg:text-6xl"
                    />

                    <p className="mx-auto mt-6 max-w-2xl text-pretty text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                        From responsive interfaces to AI-powered applications
                        and decentralized systems, these are the technologies I
                        rely on to spin ideas into scalable, production-ready
                        software.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
                    {categories.map((category, index) => (
                        <FadeContent
                            key={category.title}
                            blur
                            duration={500 + index * 100}
                        >
                            <CategoryCard {...category} />
                        </FadeContent>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="border-2 border-dashed border-border px-6 py-3 text-center">
                        <p className="text-xs font-black tracking-widest text-muted-foreground uppercase">
                            🕸️ Arsenal Status:{" "}
                            <span className="text-accent">
                                Constantly expanding & calibrating.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
