"use client";

import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Radio,
    ExternalLink,
    FileDown,
    MapPin,
    Clock,
} from "lucide-react";

import { GitHubLight, LinkedIn, Gmail } from "developer-icons";

interface ContactChannel {
    name: string;
    handle: string;
    description: string;
    href: string;
    icon: React.ElementType;
    accentColor: string;
    badgeText: string;
}

const channels: ContactChannel[] = [
    {
        name: "Direct Transmission",
        handle: "abhik5567@gmail.com", 
        description:
            "Best for project inquiries, architectural consulting, or full-time roles.",
        href: "mailto:abhik5567@gmail.com?subject=Mission%20Inquiry%20//%20Portfolio",
        icon: Gmail,
        accentColor:
            "border-primary shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))]",
        badgeText: "Primary Channel",
    },
    {
        name: "Professional Network",
        handle: "www.linkedin.com/in/abhishek30125/",
        description:
            "Connect for professional networking, industry events, or quick messaging.",
        href: "https://www.linkedin.com/in/abhishek30125/",
        icon: LinkedIn,
        accentColor:
            "border-accent shadow-[4px_4px_0px_0px_var(--accent)] hover:shadow-[6px_6px_0px_0px_var(--accent)]",
        badgeText: "Verified Network",
    },
    {
        name: "Code Vault & History",
        handle: "github.com/Abhishek10351",
        description:
            "Inspect open-source experiments, commit histories, and custom automation scripts.",
        href: "https://github.com/Abhishek10351",
        icon: GitHubLight,
        accentColor:
            "border-border shadow-[4px_4px_0px_0px_hsl(var(--border))] hover:border-foreground hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))]",
        badgeText: "Public Repository",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-16 md:py-24 lg:py-32 -scroll-mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <Badge className="mb-4 rounded-none border-2 border-primary bg-background px-3.5 py-1 text-xs font-black tracking-widest text-primary uppercase shadow-[3px_3px_0px_0px_hsl(var(--primary))] -rotate-1 cursor-default">
                        <Radio
                            className="mr-1.5 inline h-3.5 w-3.5 animate-ping"
                            style={{ animationDuration: "3s" }}
                        />
                        Comms Channels Open
                    </Badge>

                    <BlurText
                        text="Transmit A Signal."
                        className="text-balance text-4xl font-black tracking-tight text-foreground uppercase sm:text-5xl md:text-6xl"
                    />

                    <p className="mx-auto mt-6 max-w-2xl text-pretty text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                        No robotic contact forms that disappear into the void.
                        Choose your preferred frequency below to initiate a
                        direct, unmediated transmission.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="group cursor-pointer"
                        >
                            <a
                                href="/resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5"
                            >
                                <FileDown className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5" />
                                <span>Download Declassified Dossier (CV)</span>
                            </a>
                        </Button>

                        <div className="flex items-center gap-2 border-2 border-border bg-card px-3 py-2 text-xs font-bold tracking-wider text-muted-foreground uppercase shadow-[2px_2px_0px_0px_hsl(var(--border))] rotate-1">
                            <span className="inline-block h-2 w-2 bg-emerald-500 animate-pulse" />
                            <span>Status: Available for new missions</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                    {channels.map((channel, index) => {
                        const IconComponent = channel.icon;

                        return (
                            <FadeContent
                                key={channel.name}
                                blur
                                duration={500 + index * 150}
                            >
                                <a
                                    href={channel.href}
                                    target={
                                        channel.href.startsWith("mailto")
                                            ? "_self"
                                            : "_blank"
                                    }
                                    rel="noreferrer"
                                    className={`group flex h-full flex-col justify-between rounded-none border-2 bg-card p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 sm:p-8 ${channel.accentColor}`}
                                >
                                    <div>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-border bg-background transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                                                <IconComponent className="h-7 w-7 text-foreground" />
                                            </div>

                                            <span className="border border-border bg-background/50 px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                                [{channel.badgeText}]
                                            </span>
                                        </div>

                                        <div className="mt-6">
                                            <h3 className="text-xl font-black tracking-tight text-foreground uppercase transition-colors group-hover:text-primary sm:text-2xl">
                                                {channel.name}
                                            </h3>

                                            <p className="mt-1 font-mono text-xs font-bold text-accent truncate">
                                                {channel.handle}
                                            </p>
                                        </div>

                                        <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">
                                            {channel.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex items-center justify-between border-t-2 border-border/40 pt-4 text-xs font-black tracking-widest text-foreground uppercase">
                                        <span>Initiate Link</span>
                                        <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-primary" />
                                    </div>
                                </a>
                            </FadeContent>
                        );
                    })}
                </div>

                <div className="mt-16 border-2 border-dashed border-border bg-card/40 p-6 sm:p-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border bg-background text-red-500">
                                <MapPin
                                    size={20}
                                    className="animate-bounce"
                                    style={{ animationDuration: "2s" }}
                                />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs font-black tracking-widest text-foreground uppercase">
                                    Basecamp Coordinates
                                </h4>
                                <p className="text-xs font-medium text-muted-foreground">
                                    Assam, India // Operating globally via
                                    remote terminal
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border bg-background text-accent">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs font-black tracking-widest text-foreground uppercase">
                                    Response Frequency
                                </h4>
                                <p className="text-xs font-medium text-muted-foreground">
                                    Typical turnaround: &lt; 24 Hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
