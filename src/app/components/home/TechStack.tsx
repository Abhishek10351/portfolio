import { Badge } from "@/components/ui/badge";
import SpotlightCard from "@/components/ui/SpotlightCard";

import { Zap, ShieldCheck, Rocket, Layers3, Globe } from "lucide-react";

import type { LucideIcon } from "lucide-react";

const highlights = [
    {
        icon: Zap,
        title: "Performance First",
        description:
            "Optimized applications focused on speed and responsiveness.",
    },
    {
        icon: Layers3,
        title: "Clean Architecture",
        description: "Scalable codebases built with maintainability in mind.",
    },
    {
        icon: Rocket,
        title: "Production Ready",
        description:
            "Modern deployment workflows and best development practices.",
    },
    {
        icon: ShieldCheck,
        title: "Type Safe",
        description:
            "Reliable applications powered by TypeScript and strong typing.",
    },
];
export interface Technology {
    name: string;
    icon: React.ElementType;
}

export interface Category {
    title: string;
    icon: LucideIcon;
    description: string;
    technologies: Technology[];
}

interface Highlight {
    icon: LucideIcon;
    title: string;
    description: string;
}

import {
    Code2,
    Server,
    Database,
    Cloud,
    Cpu,
    Blocks,
    // Wrench,
    // Palette,
} from "lucide-react";

import {
    _React as ReactIcon,
    NextjsIcon,
    Css3Icon,
    Sass,
    TypescriptIcon,
    Javascript,
    TailwindIcon,
    Python,
    // Java,
    FastapiIcon,
    Flask,
    DjangoIcon,
    NodejsIcon,
    PostmanIcon,
    MongodbIcon,
    MysqlIcon,
    Postgresql,
    SqliteIcon,
    Aws,
    DockerIcon,
    GitIcon,
    GithubActions,
    LinuxTux,
    // C as CIcon,
    Opencv,
    // CPlusplus,
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
            { name: "Next.js", icon: NextjsIcon },
            { name: "TypeScript", icon: TypescriptIcon },
            { name: "JavaScript", icon: Javascript },
            { name: "HTML5", icon: HTML5 },
            { name: "CSS3", icon: Css3Icon },
            { name: "Sass", icon: Sass },
            { name: "Tailwind CSS", icon: TailwindIcon },
            { name: "Chakra UI", icon: ChakraUI },
            { name: "shadcn/ui", icon: ShadcnUI },
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
            { name: "Flask", icon: Flask },
            { name: "Postman", icon: PostmanIcon },
        ],
    },
    {
        title: "Databases",
        icon: Database,
        description: "Relational, NoSQL and vector databases.",
        technologies: [
            { name: "MongoDB", icon: MongodbIcon },
            { name: "MySQL", icon: MysqlIcon },
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
    // {
    //     title: "Programming Languages",
    //     icon: Wrench,
    //     description: "Languages used across software development.",
    //     technologies: [
    //         { name: "C", icon: CIcon },
    //         { name: "C++", icon: CPlusplus },
    //     ],
    // },
];
const CategoryCard = ({
    title,
    icon: Icon,
    description,
    technologies,
}: Category) => {
    return (
        <div key={title} className="rounded-2xl border bg-card p-6">
            <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={24} />
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-primary">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => {
                    const TechIcon = tech.icon;

                    return (
                        <div
                            key={tech.name}
                            className="group flex items-center gap-2 rounded-xl border px-3 py-2 transition-all border-border"
                        >
                            <TechIcon
                                className="text-lg transition-transform group-hover:scale-110 w-4 h-4"
                                size={16}
                            />

                            <span className="text-sm font-medium text-accent">
                                {tech.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const HighlightCard = ({ icon: Icon, title, description }: Highlight) => {
    return (
        <SpotlightCard className="group rounded-2xl border bg-card p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <Icon size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-primary">{title}</h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
            </p>
        </SpotlightCard>
    );
};

export default function TechStack() {
    return (
        <section className="py-8 md:py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <Badge className="mb-5 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.28em] text-primary uppercase">
                        WEB OF TECHNOLOGIES
                    </Badge>

                    <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Every project starts with the right tools.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
                        From responsive interfaces to AI-powered applications
                        and decentralized systems, these are the technologies I
                        rely on to spin ideas into scalable, production-ready
                        software.
                    </p>
                </div>

                {/* Optional highlights
                <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item) => (
                        <HighlightCard {...item} key={item.title} />
                    ))}
                </div>
                */}

                <div className="grid gap-6 md:grid-cols-2">
                    {categories.map((category) => (
                        <CategoryCard key={category.title} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
}