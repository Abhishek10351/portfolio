"use client";

import React from "react";
import Link from "next/link";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

// React Bits & UI Imports
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, Terminal, ShieldAlert, ArrowLeft } from "lucide-react";

// Official Developer Icons Import
import { GitHubLight, LinkedIn, Gmail } from "developer-icons";

export default function Projects() {
    const featured = projects.find((project) => project.featured);
    const others = projects.filter((project) => !project.featured);

    return (
        <div className="relative min-h-screen bg-background text-foreground">
            {/* STICKY TOP ESCAPE HATCH WITH OFFICIAL DEVELOPER ICONS */}
            <header className="sticky top-0 z-50 w-full border-b-2 border-border/80 bg-background/90 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    {/* Return to Home Anchor */}
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 border-2 border-border bg-card px-3 py-1.5 font-mono text-xs font-black tracking-widest uppercase shadow-[2px_2px_0px_0px_hsl(var(--border))] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        <span>Basecamp // Abhishek</span>
                    </Link>

                    {/* Quick-Access Social & Comms Anchors (Uiverse + Developer Icons) */}
                    <div className="flex items-center gap-3">
                        {/* 1. GITHUB BUTTON (Silver/White Glow, Square Geometry) */}
                        <a
                            href="https://github.com/Abhishek10351"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub Profile"
                            className="group relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-none border-2 border-white/20 bg-gradient-to-tr from-black/60 to-black/40 p-2 shadow-lg backdrop-blur-lg transition-all duration-300 ease-out hover:scale-110 hover:rotate-3 hover:border-white/50 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 hover:shadow-xl hover:shadow-white/20 active:scale-95 active:rotate-0"
                        >
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                            <div className="relative z-10 flex items-center justify-center">
                                <GitHubLight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </a>

                        {/* 2. LINKEDIN BUTTON (Electric Blue/Indigo Glow, Square Geometry) */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn Profile"
                            className="group relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-none border-2 border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 p-2 shadow-lg backdrop-blur-lg transition-all duration-300 ease-out hover:scale-110 hover:-rotate-2 hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-95 active:rotate-0"
                        >
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                            <div className="relative z-10 flex items-center justify-center">
                                <LinkedIn
                                    size={18}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </a>

                        {/* 3. GMAIL BUTTON (Crimson Red Glow, Square Geometry) */}
                        <a
                            href="mailto:abhishek@example.com?subject=Mission%20Inquiry%20//%20Portfolio"
                            aria-label="Direct Email via Gmail"
                            className="group relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-none border-2 border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 p-2 shadow-lg backdrop-blur-lg transition-all duration-300 ease-out hover:scale-110 hover:rotate-2 hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 hover:shadow-xl hover:shadow-red-500/30 active:scale-95 active:rotate-0"
                        >
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-400/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                            <div className="relative z-10 flex items-center justify-center">
                                <Gmail
                                    size={18}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </header>

            <main
                id="projects"
                className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8"
            >
                {/* ARCHIVE HEADER */}
                <div className="mb-16 flex flex-col items-start border-b-2 border-border pb-8">
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge className="rounded-none border-2 border-primary bg-background px-3.5 py-1 text-xs font-black tracking-widest text-primary uppercase shadow-[3px_3px_0px_0px_hsl(var(--primary))] -rotate-1 cursor-default">
                            <FolderGit2 className="mr-1.5 inline h-3.5 w-3.5 animate-pulse" />
                            Mission Archives
                        </Badge>

                        <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-500 uppercase">
                            <span className="inline-block h-2 w-2 bg-emerald-500 animate-ping" />
                            Security Level: Declassified
                        </span>
                    </div>

                    <div className="mt-6">
                        <BlurText
                            text="Things I Have Built."
                            className="text-balance text-4xl font-black tracking-tight text-foreground uppercase sm:text-5xl md:text-6xl"
                        />
                    </div>

                    <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                        A classified collection of full-stack applications, AI
                        experiments, client architectures, and technical boss
                        fights I have engineered.
                    </p>
                </div>

                {/* THE MASTER CASE FILE (Featured Project) */}
                {featured && (
                    <div className="mb-16">
                        <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold text-primary tracking-widest uppercase">
                            <Terminal className="h-4 w-4" />
                            // Directive 00: Priority Deployment
                        </div>

                        <FadeContent blur duration={600}>
                            <FeaturedProject project={featured} />
                        </FadeContent>
                    </div>
                )}

                {/* THE ARCHIVE GRID */}
                <div>
                    <div className="mb-6 flex items-center justify-between border-b-2 border-border/60 pb-2">
                        <span className="font-mono text-xs font-bold text-muted-foreground tracking-widest uppercase">
                            // Directive 01: Standard Deployments (
                            {others.length} Files)
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground uppercase">
                            <ShieldAlert className="h-3 w-3 text-accent" />
                            All systems operational
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                        {others.map((project, index) => (
                            <FadeContent
                                key={project.slug}
                                blur
                                duration={500 + index * 150}
                            >
                                <div className="h-full">
                                    <ProjectCard project={project} />
                                </div>
                            </FadeContent>
                        ))}
                    </div>
                </div>

                {/* Comic Book Footer Stamp */}
                <footer className="mt-20 border-t-2 border-border/60 pt-8 text-center">
                    <p className="font-mono text-xs font-bold text-muted-foreground tracking-widest uppercase">
                        More experiments residing in localized repositories //{" "}
                        <a
                            href="https://github.com/Abhishek10351"
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary underline decoration-2 underline-offset-4 hover:text-primary/80"
                        >
                            Access Full GitHub Vault
                        </a>
                    </p>
                    <p className="mt-2 font-mono text-[10px] text-muted-foreground/60 uppercase">
                        © {new Date().getFullYear()} Abhishek • Assam Basecamp •
                        Engineered with Next.js & Tailwind
                    </p>
                </footer>
            </main>
        </div>
    );
}
