import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background text-foreground font-sans">
            <main className="flex w-full max-w-3xl flex-col items-start justify-between gap-16 rounded-3xl border border-border bg-card p-16 shadow-2xl">
                <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />

                <div className="space-y-6">
                    <h1 className="max-w-md text-5xl font-bold leading-tight">
                        To get started, edit the{" "}
                        <span className="text-primary">page.tsx</span> file.
                    </h1>

                    <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                        Looking for a starting point? Head over to{" "}
                        <a
                            href="https://vercel.com/templates"
                            className="font-medium text-primary transition hover:text-accent"
                        >
                            Templates
                        </a>{" "}
                        or the{" "}
                        <a
                            href="https://nextjs.org/learn"
                            className="font-medium text-primary transition hover:text-accent"
                        >
                            Learning
                        </a>{" "}
                        center.
                    </p>
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://vercel.com/new"
                        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-medium text-primary-foreground transition hover:opacity-90"
                    >
                        <Image
                            src="/vercel.svg"
                            alt="Vercel"
                            width={16}
                            height={16}
                        />
                        Deploy
                    </a>

                    <a
                        href="https://nextjs.org/docs"
                        className="flex h-12 items-center justify-center rounded-xl border border-border bg-secondary px-6 font-medium text-secondary-foreground transition hover:bg-accent hover:text-accent-foreground"
                    >
                        Documentation
                    </a>
                </div>
            </main>
        </div>
    );
}
