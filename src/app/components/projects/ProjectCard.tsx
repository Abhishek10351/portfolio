"use client";

import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ElectricBorder from "@/components/ui/ElectricBorder";
import type { Project } from "@/data/projects";


export default function ProjectCard({
    title,
    subtitle,
    description,
    image,
    category,
    status,
    technologies,
    github,
    demo,
}: Project) {
    return (
        <ElectricBorder
            className="group flex h-full flex-col overflow-hidden rounded-none border-2 border-border bg-card shadow-[4px_4px_0px_0px_hsl(var(--border))] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-accent hover:shadow-[6px_6px_0px_0px_var(--accent)]"
            chaos={0.04}
            speed={0.5}
            color="oklch(0.73 0.145 245)"
        >
            <div className="relative aspect-video w-full overflow-hidden border-b-2 border-border bg-[#0a0a0a]">
                {image ? (
                    <img
                        src={`/projects/${image}`}
                        alt={title}
                        className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-105 sm:p-6"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 via-background to-accent/20">
                        <span className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground">
                            [No Visual Data]
                        </span>
                    </div>
                )}

                <div className="absolute z-10 flex flex-wrap gap-2 top-3 left-3">
                    <Badge className="rounded-none border-2 border-primary bg-background px-2.5 py-0.5 text-[10px] font-black tracking-widest text-primary uppercase shadow-[2px_2px_0px_0px_hsl(var(--primary))] -rotate-1">
                        {category}
                    </Badge>

                    <Badge
                        className={`rounded-none border-2 px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase rotate-1 ${
                            status === "Completed"
                                ? "border-emerald-500 bg-background text-emerald-500 shadow-[2px_2px_0px_0px_#10b981]"
                                : "border-amber-500 bg-background text-amber-500 shadow-[2px_2px_0px_0px_#f59e0b]"
                        }`}
                    >
                        {status}
                    </Badge>
                </div>
            </div>

            <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                    <h3 className="text-xl font-black tracking-tight uppercase transition-colors duration-300 text-foreground group-hover:text-accent">
                        {title}
                    </h3>

                    <p className="mt-1 font-mono text-xs font-semibold uppercase text-accent">
                        {subtitle}
                    </p>

                    <p className="mt-4 text-sm font-medium leading-relaxed line-clamp-3 text-muted-foreground">
                        {description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                        {technologies.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="border border-border bg-background px-2 py-0.5 text-[11px] font-bold tracking-wider text-muted-foreground uppercase"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 mt-8 border-t border-border/40">
                    {github && (
                        <Link
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn inline-flex w-fit items-center justify-center gap-2 border-2 border-foreground/30 bg-foreground/5 px-5 py-2.5 text-xs font-black tracking-widest text-foreground uppercase transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"
                        >
                            <Code2
                                size={16}
                                className="transition-transform duration-300 group-hover/btn:scale-110"
                            />
                            <span>Source Code</span>
                        </Link>
                    )}

                    {demo && (
                        <Link
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn inline-flex w-fit items-center justify-center gap-2 border-2 border-primary bg-primary/10 px-5 py-2.5 text-xs font-black tracking-widest text-primary uppercase transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-[4px_4px_0px_0px_hsl(var(--primary)/0.6)]"
                        >
                            <ExternalLink
                                size={16}
                                className="transition-transform duration-300 group-hover/btn:scale-110"
                            />
                            <span>Live Demo</span>
                        </Link>
                    )}
                </div>
            </div>
        </ElectricBorder>
    );
}
