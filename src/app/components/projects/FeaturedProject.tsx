import { ExternalLink, Check, Sparkles } from "lucide-react";
import { Github } from "@dev.icons/react";
import { Badge } from "@/components/ui/badge";
import ElectricBorder from "@/components/ui/ElectricBorder";
import type { Project } from "@/data/projects";

interface FeaturedProjectProps {
    project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
    return (
        <ElectricBorder
            className="group overflow-hidden rounded-none border-2 border-primary bg-card shadow-[6px_6px_0px_0px_hsl(var(--primary))]"
            chaos={0.12}
            speed={1}
            color="oklch(0.63 0.225 23)"
        >
            <div className="grid gap-8 p-6 lg:grid-cols-2 lg:gap-12 lg:p-10">
                <div className="relative overflow-hidden border-2 border-border aspect-video lg:aspect-auto">
                    {project.image ? (
                        <img
                            src={`/projects/${project.image}`}
                            alt={project.title}
                            className="h-ful w-full object-cove transition duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                            <span className="font-mono text-sm font-bold tracking-widest text-muted-foreground uppercase">
                                [Featured Visual Offline]
                            </span>
                        </div>
                    )}

                    <div className="absolute top-3 left-3 bg-background/90 border border-primary px-2 py-1">
                        <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">
                            ISSUE #01 // MAIN EVENT
                        </span>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <Badge className="rounded-none border-2 border-primary bg-background px-3 py-1 text-xs font-black tracking-widest text-primary uppercase shadow-[3px_3px_0px_0px_hsl(var(--primary))] -rotate-1">
                                <Sparkles
                                    className="mr-1.5 inline h-3.5 w-3.5 animate-spin"
                                    style={{ animationDuration: "6s" }}
                                />
                                Featured Mission
                            </Badge>

                            <span className="font-mono text-xs font-bold text-muted-foreground uppercase">
                                [{project.category}]
                            </span>
                        </div>

                        <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground uppercase lg:text-4xl">
                            {project.title}
                        </h3>

                        <p className="mt-1 font-mono text-sm font-semibold text-primary uppercase">
                            {project.subtitle}
                        </p>

                        <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="border-2 border-border bg-background px-2.5 py-1 text-xs font-bold tracking-wider text-foreground uppercase shadow-[2px_2px_0px_0px_hsl(var(--border))]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="grid gap-2.5 border-t-2 border-border/60 pt-4">
                        <span className="font-mono text-[11px] font-bold text-muted-foreground tracking-widest uppercase">
                            // Verified Specifications:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2.5 text-xs font-bold text-foreground"
                                >
                                    <div className="flex h-4 w-4 shrink-0 items-center justify-center border border-primary bg-primary/10 text-primary">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="truncate">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 border-t-2 border-border/60">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-border bg-background px-6 py-3 text-xs font-black tracking-widest text-foreground uppercase shadow-[3px_3px_0px_0px_hsl(var(--border))] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[5px_5px_0px_0px_hsl(var(--foreground))]"
                            >
                                <Github size={16} />
                                Source Code
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-primary bg-primary px-6 py-3 text-xs font-black tracking-widest text-primary-foreground uppercase shadow-[3px_3px_0px_0px_hsl(var(--primary)/0.4)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_hsl(var(--primary)/0.6)]"
                            >
                                <ExternalLink size={16} />
                                Launch Mission
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </ElectricBorder>
    );
}
