"use client";

import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import {
    Briefcase,
    Coffee,
    GraduationCap,
    MapPin,
    Sparkles,
    Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CountUp from "react-countup";

interface InfoItem {
    icon: LucideIcon;
    title: string;
    value: string;
    accentColor?: string;
}

const info: InfoItem[] = [
    {
        icon: MapPin,
        title: "Home Base",
        value: "Assam, India",
        accentColor: "text-red-500 border-red-500 shadow-red-500/20",
    },
    {
        icon: Briefcase,
        title: "Current Mission",
        value: "Full Stack Developer",
        accentColor: "text-primary border-primary shadow-primary/20",
    },
    {
        icon: GraduationCap,
        title: "Training Arc",
        value: "B.Tech in C.S.E",
        accentColor: "text-accent border-accent shadow-accent/20",
    },
    {
        icon: Coffee,
        title: "Power Source",
        value: "Coffee & Side Projects",
        accentColor: "text-amber-500 border-amber-500 shadow-amber-500/20",
    },
];

const stats = [
    { value: 5, suffix: "+", label: "Years Building" },
    { value: 15, suffix: "+", label: "Projects Shipped" },
    { value: 100, suffix: "%", label: "Boss Fights Won" },
];

// THE ANTI-SQUISH CARD: Horizontal flex layout with min-w-0 to prevent text overflow bugs
const AboutCard = ({ icon: Icon, title, value, accentColor }: InfoItem) => {
    return (
        <SpotlightCard className="group flex w-full items-center gap-4 rounded-none border-2 border-border bg-card p-4 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-foreground hover:shadow-[5px_5px_0px_0px_hsl(var(--border))] sm:p-5">
            <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center border-2 bg-background transition-transform duration-300 group-hover:rotate-6 ${accentColor || "border-primary text-primary"}`}
            >
                <Icon size={22} strokeWidth={2.5} />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center">
                <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                    {title}
                </span>
                <span className="truncate text-base font-black tracking-tight text-foreground sm:text-lg">
                    {value}
                </span>
            </div>
        </SpotlightCard>
    );
};

export default function About() {
    return (
        <section id="about" className="relative py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-start">
                    <Badge className="mb-4 rounded-none border-2 border-primary bg-background px-3 py-1 text-xs font-black uppercase tracking-widest text-primary shadow-[3px_3px_0px_0px_hsl(var(--primary))] rotate-1">
                        🕷️Behind The Mask
                    </Badge>

                    <BlurText
                        text="Building things, breaking things, and leveling up every time."
                        className="text-balance text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
                    />
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    <FadeContent blur duration={600}>
                        <div className="flex h-full flex-col justify-between">
                            <div className="space-y-6 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                                <p className="border-l-4 border-primary pl-4 italic text-foreground">
                                    Hey! I&apos;m a full stack developer from
                                    Assam who enjoys turning wild ideas into
                                    real, tangible products. I build modern web
                                    applications, AI tools, and experiments that
                                    force me to learn beyond my comfort zone.
                                </p>
                                <p>
                                    Most of my skills weren&apos;t handed to
                                    me—they came from late nights, side
                                    projects, and debugging problems that seemed
                                    completely impossible at first.
                                </p>
                                <p>
                                    I treat coding like a good indie game: every
                                    bug is a puzzle to decipher, every project
                                    is a new map to unlock, and every clean
                                    build makes the next run even better.
                                </p>
                            </div>


                            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 pt-6 border-t border-border/60">
                                {stats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex flex-col items-center justify-center border-2 border-border bg-card/50 p-4 text-center shadow-[3px_3px_0px_0px_hsl(var(--border))] transition-transform hover:-translate-y-0.5"
                                    >
                                        <div className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
                                            <CountUp
                                                end={item.value}
                                                duration={3.5}
                                            />
                                            <span>{item.suffix}</span>
                                        </div>
                                        <span className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeContent>

                    <div className="flex flex-col justify-center">
                        <div className="mb-4 flex items-center justify-between border-b-2 border-border pb-2">
                            <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                                <Terminal className="h-4 w-4 text-accent" />
                                Classified Dossier
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                                ● Status: Active
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                            {info.map((item) => (
                                <AboutCard key={item.title} {...item} />
                            ))}
                        </div>

                        {/* Comic Flavor Box */}
                        <div className="mt-4 border-2 border-dashed border-border p-4 text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                🕷️ Current Directive:{" "}
                                <span className="text-foreground">
                                    Hunting bugs & building scalable systems.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
