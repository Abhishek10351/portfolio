"use client";

import { ArrowUp, Terminal, ShieldCheck } from "lucide-react";
import { GitHubLight, LinkedIn, Gmail } from "developer-icons";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t-2 border-border/80 bg-card/40 text-foreground">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 border-b-2 border-border/40 pb-8 sm:flex-row">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-primary bg-background text-primary shadow-[2px_2px_0px_0px_hsl(var(--primary))]">
                            <Terminal size={18} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-black tracking-widest text-foreground uppercase">
                                    System Telemetry
                                </span>
                                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-500 uppercase">
                                    <ShieldCheck size={12} /> Secure
                                </span>
                            </div>
                            <p className="font-mono text-xs text-muted-foreground">
                                All mission parameters operational // Assam
                                Basecamp
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 pr-4 border-r-2 border-border/40">
                            <a
                                href="https://github.com/Abhishek10351"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub Profile"
                                className="flex h-8 w-8 items-center justify-center border border-border bg-background text-muted-foreground transition-all hover:border-foreground hover:text-foreground hover:scale-110"
                            >
                                <GitHubLight size={16} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn Profile"
                                className="flex h-8 w-8 items-center justify-center border border-border bg-background text-muted-foreground transition-all hover:border-accent hover:text-accent hover:scale-110"
                            >
                                <LinkedIn size={16} />
                            </a>
                            <a
                                href="mailto:abhishek@example.com?subject=Mission%20Inquiry%20//%20Portfolio"
                                aria-label="Direct Email"
                                className="flex h-8 w-8 items-center justify-center border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110"
                            >
                                <Gmail size={16} />
                            </a>
                        </div>

                        <button
                            onClick={scrollToTop}
                            aria-label="Scroll to top of page"
                            className="group flex items-center gap-2 border-2 border-border bg-background px-4 py-2 font-mono text-xs font-black tracking-widest text-foreground uppercase shadow-[3px_3px_0px_0px_hsl(var(--border))] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[5px_5px_0px_0px_hsl(var(--primary))] active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
                        >
                            <span>Top</span>
                            <ArrowUp
                                size={14}
                                className="transition-transform duration-200 group-hover:-translate-y-1 text-primary"
                            />
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center font-mono text-xs text-muted-foreground sm:flex-row sm:text-left">
                    <p>
                        © {new Date().getFullYear()} Abhishek. All rights
                        reserved.
                    </p>
                    <p className="text-[11px]">
                        Engineered with{" "}
                        <span className="text-foreground font-bold">
                            Next.js
                        </span>
                        ,{" "}
                        <span className="text-accent font-bold">
                            Tailwind CSS
                        </span>{" "}
                        & <span className="text-primary font-bold">Shadcn</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
