import Lightfall from "@/components/ui/Lightfall";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 -z-10 h-full w-full hidde">
                <Lightfall />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 z-10 relative flex flex-col items-center text-center">
                <div className="mx-auto max-w-3xl">
                    <Badge
                        variant="outline"
                        className="mb-8 gap-2 py-1.5 px-4 text-sm"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span>Available for new opportunities</span>
                    </Badge>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m Abhishek.
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                        Full Stack Developer / 2D Game Developer / Tech
                        Enthusiast | Indie Gamer
                    </p>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <Button
                            asChild
                            size="lg"
                            className="glow font-semibold shadow-lg rounded-md"
                        >
                            <Link href="/projects">View Projects</Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="glow font-semibold shadow-lg hover:bg-background/20 hover:text-primary transition-all duration-800 rounded-md"
                        >
                            <Link
                                href="#contact"
                                className="flex items-center gap-2"
                            >
                                Get in Touch <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
