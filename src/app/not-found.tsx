import Link from "next/link";
import { ArrowLeft, MapPinned } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="mx-auto max-w-2xl text-center">
                <div className="rounded-4xl border border-border bg-card px-8 py-14 shadow-lg">
                    <Badge className="mb-6 bg-destructive/10 text-destructive">
                        MISSION FAILED
                    </Badge>

                    <h1 className="text-8xl font-black tracking-tight text-primary">
                        404
                    </h1>

                    <h2 className="mt-6 text-3xl font-bold text-foreground">
                        This page doesn't obey the laws of good web design at
                        all.
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
                        Either the page moved, the route snapped, or a certain
                        wall-crawler is still debugging it. Let's get you back
                        somewhere a little safer.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button asChild size="lg">
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Swing Back Home
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <Link href="/projects">
                                <MapPinned className="mr-2 h-4 w-4" />
                                Browse Projects
                            </Link>
                        </Button>
                    </div>

                    <p className="mt-10 text-sm italic text-muted-foreground">
                        "If you're looking for a villain, try the browser
                        cache."
                    </p>
                </div>
            </div>
        </main>
    );
}
