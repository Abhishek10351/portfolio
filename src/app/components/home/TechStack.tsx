import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Code2, Database, Server, Cloud } from "lucide-react";

const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Python",
    "FastAPI",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
    "Linux",
];

export default function TechStack() {
    return (
        <section className="relative overflow-hidden py-32 bg-background">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] bg-glow" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left */}
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                            TECH STACK
                        </p>

                        <h2 className="text-5xl font-bold leading-tight text-foreground">
                            Building with
                            <br />
                            modern technologies.
                        </h2>

                        <p className="mt-8 max-w-md text-lg leading-8 text-muted-foreground">
                            I enjoy creating performant, scalable web
                            applications using technologies that prioritize
                            developer experience and maintainability.
                        </p>

                        <div className="mt-12 space-y-5 [&_span]:text-accent text-primary">
                            <div className="flex items-center gap-3">
                                <Code2 className="size-5" />
                                <span>
                                    Frontend Engineering
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Server className="size-5" />
                                <span>Backend APIs</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Database className="size-5" />
                                <span>Databases</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Cloud className="size-5" />
                                <span>Deployment & DevOps</span>
                            </div>

                        </div>
                    </div>

                    {/* Right */}
                    <div>
                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="
                                        rounded-full
                                        border-border/70
                                        bg-card/60
                                        px-5
                                        py-2
                                        text-sm
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-primary
                                        hover:bg-primary/10
                                        hover:shadow-[0_0_30px_rgba(109,93,252,.25)]
                                    "
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div
                            className="
                                mt-16
                                rounded-3xl
                                border
                                border-border/70
                                bg-card
                                p-8
                                backdrop-blur-xl
                                glow
                            "
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                CURRENTLY BUILDING
                            </p>

                            <div className="mt-5 flex items-center justify-between">
                                <h3 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                                    Form Builder Studio
                                </h3>

                                <ArrowUpRight className="size-6 text-primary" />
                            </div>

                            <p className="mt-5 max-w-xl text-muted-foreground leading-7">
                                A production-ready drag-and-drop form builder
                                with reusable components, theme customization,
                                FastAPI backend, JWT authentication and template
                                support.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "FastAPI",
                                    "MongoDB",
                                ].map((tech) => (
                                    <Badge
                                        key={tech}
                                        className="rounded-full px-4 py-1.5"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
