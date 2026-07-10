import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Briefcase, Coffee, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const info = [
    {
        icon: MapPin,
        title: "Location",
        value: "Assam, India",
    },
    {
        icon: Briefcase,
        title: "Role",
        value: "Full Stack Developer",
    },
    {
        icon: GraduationCap,
        title: "Education",
        value: "B.Tech in C.S.E",
    },
    {
        icon: Coffee,
        title: "Interests",
        value: "Building Side Projects",
    },
];

const stats = [
    {
        value: "5+",
        label: "Years Coding",
    },
    {
        value: "15+",
        label: "Projects",
    },
    {
        value: "∞",
        label: "Curiosity",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="container mx-auto px-2 md:px-24 py-12 md:py-16"
        >
            <div className="grid items-center gap-24 lg:grid-cols-[1.15fr_0.85fr] px-4">
                <FadeContent blur duration={700}>
                    <div className="max-w-2xl">
                        <Badge className="bg-primary/10 text-primary font-semibold tracking-[0.25em] text-sm">
                            ABOUT
                        </Badge>

                        <BlurText
                            text="Building modern web experiences with clean code and thoughtful design."
                            className="mt-6 text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-muted-foreground"
                        />

                        <p className="mt-8 text-lg leading-9 text-gray-400">
                            I'm a full stack developer passionate about crafting
                            modern web applications that are fast, scalable, and
                            enjoyable to use. I enjoy solving complex problems,
                            designing intuitive interfaces, and continuously
                            improving my skills through real-world projects.
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

                <div className="ml-auto grid max-w-xl grid-cols-2 gap-2 sm:gap-5 bg-re-200">
                    {info.map((item) => (
                        <SpotlightCard
                            key={item.title}
                            className="group rounded-3xl flex flex-col border border-border p-3 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 bg-card gap-y-4"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                                <item.icon size={24} />
                            </div>

                            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                                {item.title}
                            </h3>

                            <p className="text-lg font-semibold text-accent-foreground">
                                {item.value}
                            </p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
