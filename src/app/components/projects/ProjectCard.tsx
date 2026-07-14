import { ExternalLink } from "lucide-react";
import { Github } from "@dev.icons/react";
import { Badge } from "@/components/ui/badge";
import ElectricBorder from "@/components/ui/ElectricBorder";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <ElectricBorder
            className="group flex h-full flex-col overflow-hidden rounded-none border-2 border-border bg-card shadow-[4px_4px_0px_0px_hsl(var(--border))] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-accent hover:shadow-[6px_6px_0px_0px_var(--accent)]"
            chaos={0.04}
            speed={0.5}
            color="oklch(0.73 0.145 245)"
        >
            {/* Image / Header Banner: Sharp edges, no rounding */}
            <div className="relative aspect-video w-full overflow-hidden border-b-2 border-border">
                {project.image ? (
                    <img
                        src={`/projects/${project.image}`}
                        alt={project.title}
                        className="h-ful w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/20">
                        <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                            [No Visual Data]
                        </span>
                    </div>
                )}

                {/* Dossier Status Stickers: Stamped with slight tilts */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <Badge className="rounded-none border-2 border-primary bg-background px-2.5 py-0.5 text-[10px] font-black tracking-widest text-primary uppercase shadow-[2px_2px_0px_0px_hsl(var(--primary))] -rotate-1">
                        {project.category}
                    </Badge>

                    <Badge
                        className={`rounded-none border-2 px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase rotate-1 ${
                            project.status === "Completed"
                                ? "border-emerald-500 bg-background text-emerald-500 shadow-[2px_2px_0px_0px_#10b981]"
                                : "border-amber-500 bg-background text-amber-500 shadow-[2px_2px_0px_0px_#f59e0b]"
                        }`}
                    >
                        {project.status}
                    </Badge>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                    <h3 className="text-xl font-black tracking-tight text-foreground uppercase transition-colors group-hover:text-accent">
                        {project.title}
                    </h3>

                    <p className="mt-1 font-mono text-xs font-semibold text-accent uppercase">
                        {project.subtitle}
                    </p>

                    <p className="mt-4 line-clamp-3 text-sm font-medium leading-relaxed text-muted-foreground">
                        {project.description}
                    </p>

                    {/* Tech Cartridges: Replaced soft bubbles with sharp tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                        {project.technologies.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="border border-border bg-background px-2 py-0.5 text-[11px] font-bold tracking-wider text-muted-foreground uppercase"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Footer: Uses your new brutalist button design system */}
                <div className="mt-8 flex gap-3 pt-4 border-t border-border/40">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 border-2 border-border bg-background px-4 py-2 text-xs font-black tracking-wider text-foreground uppercase shadow-[2px_2px_0px_0px_hsl(var(--border))] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"
                        >
                            <Github size={14} />
                            Code
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 border-2 border-primary bg-primary px-4 py-2 text-xs font-black tracking-wider text-primary-foreground uppercase shadow-[2px_2px_0px_0px_hsl(var(--primary)/0.4)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_hsl(var(--primary)/0.6)]"
                        >
                            <ExternalLink size={14} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </ElectricBorder>
    );
}
