"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    ArrowRight,
    Coffee,
    Terminal,
    Gamepad2,
    Radio,
    Cpu,
} from "lucide-react";

const GlitchText = ({ text }: { text: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            className="relative inline-block cursor-pointer font-black underline decoration-primary decoration-wavy decoration-2 transition-transform duration-150 hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span
                className={`absolute top-0 left-0 -z-10 text-accent transition-all duration-100 select-none ${
                    isHovered
                        ? "translate-x-[-3px] translate-y-[2px] opacity-100 blur-[0.5px]"
                        : "translate-x-0 translate-y-0 opacity-0"
                }`}
                aria-hidden="true"
            >
                {text}
            </span>

            <span
                className={`absolute top-0 left-0 -z-10 text-primary transition-all duration-100 select-none ${
                    isHovered
                        ? "translate-x-[3px] translate-y-[-2px] opacity-100 blur-[0.5px]"
                        : "translate-x-0 translate-y-0 opacity-0"
                }`}
                aria-hidden="true"
            >
                {text}
            </span>

            <span className="relative z-10 text-foreground">{text}</span>
        </span>
    );
};

export default function Hero() {
    const scrollToContact = (
        e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    ) => {
        e.preventDefault(); 

        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start", 
            });
        }
    };
    return (
        <section className="relative isolate flex min-h-[88vh] w-full items-center justify-center overflow-hidden py-14 sm:py-20">
            <div
                className="absolute inset-0 -z-20 opacity-40 animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                style={{
                    backgroundImage:
                        "radial-gradient(var(--border) 1.5px, transparent 1.5px)",
                    backgroundSize: "22px 22px",
                }}
            />

            <div className="absolute top-1/4 left-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 -z-10 h-[250px] w-[250px] bg-accent/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
                <div className="flex w-full flex-col items-center">
                    <Badge className="mb-6 border-2 border-primary bg-background px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em]  shadow-[3px_3px_0px_0px_hsl(var(--primary))] sm:mb-8 sm:text-xs -rotate-1 transition-all duration-200 hover:rotate-0 hover:scale-105 cursor-default">
                        <span>🕸️Friendly Neighborhood Full-Stacker</span>
                    </Badge>

                    <h1 className="flex flex-col text-balance text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-foreground">
                            Hi, I&apos;m <GlitchText text="Abhishek" />.
                        </span>
                        <span className="mt-1 text-primary drop-shadow-[3px_3px_0px_hsl(var(--primary)/0.25)] sm:mt-2 transition-transform duration-200 hover:translate-x-1">
                            Still learning.
                        </span>
                        <span className="mt-1 text-accent drop-shadow-[3px_3px_0px_hsl(var(--accent)/0.25)] sm:mt-2 transition-transform duration-200 hover:-translate-x-1">
                            Still building.
                        </span>
                    </h1>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3 max-w-2xl">
                        <div className="group flex cursor-default items-center gap-1.5 border-2 border-border bg-card px-3 py-1 text-xs font-black uppercase tracking-wider text-muted-foreground shadow-[2px_2px_0px_0px_hsl(var(--border))] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]">
                            <Terminal className="h-3.5 w-3.5 text-primary transition-transform group-hover:scale-110" />
                            <span>Web Apps & AI Tools</span>
                        </div>

                        <div className="group flex cursor-default items-center gap-1.5 border-2 border-border bg-card px-3 py-1 text-xs font-black uppercase tracking-wider text-muted-foreground shadow-[2px_2px_0px_0px_hsl(var(--border))] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[4px_4px_0px_0px_hsl(var(--accent))]">
                            <Gamepad2 className="h-3.5 w-3.5 text-accent transition-transform group-hover:-rotate-12" />
                            <span>Cozy Indie Games</span>
                        </div>

                        <div className="group flex cursor-default items-center gap-1.5 border-2 border-border bg-card px-3 py-1 text-xs font-black uppercase tracking-wider text-muted-foreground shadow-[2px_2px_0px_0px_hsl(var(--border))] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-foreground hover:text-foreground hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
                            <Cpu className="h-3.5 w-3.5 text-emerald-500 transition-transform group-hover:rotate-12" />
                            <span>Custom Scripts & Automation</span>
                        </div>
                    </div>

                    <p className="mt-6 max-w-lg text-sm font-bold italic text-muted-foreground sm:mt-8 sm:text-base">
                        &quot;Every bug is just a boss fight waiting for the
                        right console.log() combo.&quot;
                    </p>

                    <div className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:mt-10 sm:w-auto sm:flex-row sm:gap-5">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <Link href="/projects">Explore Missions</Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto group"
                            onClick={scrollToContact}
                        >
                            <Link
                                href="#contact"
                                className="flex items-center justify-center gap-2"
                            >
                                Send a Signal
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-[11px] font-black uppercase tracking-widest text-muted-foreground sm:mt-16 sm:gap-6 sm:text-xs">
                        <div className="flex cursor-default items-center gap-2 border-2 border-border bg-card px-3.5 py-1.5 shadow-[3px_3px_0px_0px_hsl(var(--border))] rotate-1 transition-all hover:rotate-0 hover:border-primary/50">
                            <Coffee
                                className="h-4 w-4 text-primary animate-pulse"
                                strokeWidth={2.5}
                            />
                            <span>Powered by Coffee & Side Projects</span>
                        </div>

                        <div className="flex cursor-default items-center gap-2 border-2 border-border bg-card px-3.5 py-1.5 shadow-[3px_3px_0px_0px_hsl(var(--border))] -rotate-1 transition-all hover:rotate-0 hover:border-accent/50">
                            <Radio
                                className="h-4 w-4 text-accent animate-ping"
                                style={{ animationDuration: "3s" }}
                            />
                            <span className="flex items-center gap-1.5">
                                Spidey Sense:{" "}
                                <span className="text-accent font-black">
                                    Active
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
