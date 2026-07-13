import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Briefcase, Coffee, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

interface InfoItem {
    icon: LucideIcon;
    title: string;
    value: string;
}

const info: InfoItem[] = [
    {
        icon: MapPin,
        title: "Home Base",
        value: "Assam, India",
    },
    {
        icon: Briefcase,
        title: "Current Mission",
        value: "Full Stack Developer",
    },
    {
        icon: GraduationCap,
        title: "Training Arc",
        value: "B.Tech C.S.E",
    },
    {
        icon: Coffee,
        title: "Power Source",
        value: "Coffee & Side Projects",
    },
];

const stats = [
    {
        value: "5+",
        label: "Years Building",
    },
    {
        value: "10+",
        label: "Projects Shipped",
    },
    {
        value: "∞",
        label: "Things To Learn",
    },
];

const AboutCard = ({ icon: Icon, title, value }: InfoItem) => {
    return (
        <SpotlightCard className="group flex flex-col gap-y-4 rounded-3xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon size={24} />
            </div>

            <h3 className="text-sm font-semibold text-muted-foreground">
                {title}
            </h3>

            <p className="text-xl font-bold text-foreground">{value}</p>
        </SpotlightCard>
    );
};

export default function About() {
    return (
        <section
            id="about"
            className="container mx-auto px-2 py-12 md:px-24 md:py-16"
        >
            <div className="grid items-center gap-20 px-4 lg:grid-cols-[1.15fr_0.85fr]">
                <FadeContent blur duration={700}>
                    <div className="max-w-2xl">
                        <Badge className="mb-5 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                            Behind The Mask
                        </Badge>

                        <BlurText
                            text="Building things, breaking things, and learning something new every time."
                            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl"
                        />

                        <p className="mt-8 text-lg leading-9 text-muted-foreground">
                            Hey! I'm a full stack developer from Assam who
                            enjoys turning ideas into real products. I build
                            modern web applications, AI-powered tools, and
                            experiments that push me to learn beyond my comfort
                            zone.
                        </p>

                        <p className="mt-5 text-lg leading-9 text-muted-foreground">
                            Most of my skills came from side projects, late
                            nights, and debugging problems that seemed
                            impossible at first. Every bug is a puzzle, every
                            project is a new challenge, and every build makes
                            the next one better.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-10">
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <h3 className="text-4xl font-bold text-primary">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeContent>

                <div className="grid max-w-xl grid-cols-2 gap-3 sm:gap-5 lg:ml-auto">
                    {info.map((item) => (
                        <AboutCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
