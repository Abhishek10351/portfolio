import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "group/badge inline-flex h-7 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-none border-2 px-3 py-0.5 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-150 focus-visible:ring-2 focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&>svg]:pointer-events-none [&>svg]:size-3.5",
    {
        variants: {
            variant: {
                default:
                    "border-primary bg-background text-primary shadow-[2px_2px_0px_0px_hsl(var(--primary))] [a]:hover:bg-primary [a]:hover:text-primary-foreground",
                secondary:
                    "border-accent bg-background text-accent shadow-[2px_2px_0px_0px_hsl(var(--accent))] [a]:hover:bg-accent [a]:hover:text-accent-foreground",
                outline:
                    "border-border bg-card text-foreground shadow-[2px_2px_0px_0px_hsl(var(--border))] [a]:hover:border-primary [a]:hover:text-primary",
                ghost: "border-transparent text-muted-foreground hover:bg-accent/10 hover:text-foreground shadow-none",
                destructive:
                    "border-destructive bg-background text-destructive shadow-[2px_2px_0px_0px_hsl(var(--destructive))] [a]:hover:bg-destructive [a]:hover:text-destructive-foreground",
                link: "border-transparent text-primary underline-offset-4 decoration-2 hover:underline hover:text-primary/80 shadow-none",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

function Badge({
    className,
    variant = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot.Root : "span";

    return (
        <Comp
            data-slot="badge"
            data-variant={variant}
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    );
}

export { Badge, badgeVariants };
