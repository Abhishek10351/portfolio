import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
    className,
    size = "default",
    ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
    return (
        <div
            data-slot="card"
            data-size={size}
            className={cn(
                // CHANGED:
                // 1. rounded-4xl -> rounded-none (sharp comic panel edges)
                // 2. border -> border-2 border-border
                // 3. Removed backdrop-blur-md and bg-card/80 -> solid bg-card
                // 4. Added hard offset shadow and kinetic hover lift (-translate-x-1 -translate-y-1)
                "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-none border-2 border-border bg-card py-(--card-spacing) text-sm text-card-foreground shadow-[4px_4px_0px_0px_hsl(var(--border))] transition-all duration-200 [--card-spacing:--spacing(6)] hover:-translate-x-1 hover:-translate-y-1 hover:border-primary hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none",
                className,
            )}
            {...props}
        />
    );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                // CHANGED: rounded-t-4xl -> rounded-none
                "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-none px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
                className,
            )}
            {...props}
        />
    );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn(
                // CHANGED: Added font-black, uppercase, and wider tracking for that dossier/comic heading look
                "font-heading text-xl font-black uppercase tracking-tight text-foreground transition-colors group-hover/card:text-primary",
                className,
            )}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn(
                // CHANGED: Bumped font-medium for crisp legibility against dark backgrounds
                "text-sm font-medium leading-relaxed text-muted-foreground",
                className,
            )}
            {...props}
        />
    );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className,
            )}
            {...props}
        />
    );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-(--card-spacing)", className)}
            {...props}
        />
    );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn(
                // CHANGED: rounded-b-4xl -> rounded-none
                "flex items-center rounded-none px-(--card-spacing) [.border-t]:pt-(--card-spacing)",
                className,
            )}
            {...props}
        />
    );
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
};
