import Lightfall from "@/components/ui/Lightfall";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Sparkles, Coffee, Code2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full">
                <Lightfall />
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <Badge
                        variant="outline"
                        className="mb-8 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary"
                    >
                        {/* <Sparkles className="h-3.5 w-3.5" /> */}
                        <span>🕸 Friendly Neighborhood Developer</span>
                    </Badge>

                    <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m Abhishek.
                        <br />
                        <span className="text-primary">
                            Still learning. Still building.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 text-lg text-muted-foreground sm:text-xl">
                        <Code2 className="h-5 w-5 text-primary" />
                        Full Stack Developer
                        <span>•</span>
                        AI/ML Explorer
                        <span>•</span>
                        Indie Game Creator
                    </p>

                    <p className="mx-auto mt-5 max-w-xl text-base italic text-muted-foreground/80">
                        Every project is a new level. Every bug is a boss fight.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="glow rounded-md font-semibold shadow-lg"
                        >
                            <Link href="/projects">Browse Missions</Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="glow rounded-md font-semibold shadow-lg transition-all duration-300"
                        >
                            <Link
                                href="#contact"
                                className="flex items-center gap-2"
                            >
                                Send a Signal
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 flex justify-center gap-8 text-md text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <Coffee className="h-4 w-4 text-primary" />
                            Coffee Powered
                        </span>

                        <span>🕷 Spider Sense: Calibrating...</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
