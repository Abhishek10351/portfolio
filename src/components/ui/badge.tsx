import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-transparent px-3 py-0.5 text-xs font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&>svg]:pointer-events-none [&>svg]:size-3.5",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-sm [a]:hover:bg-primary/90",
                secondary:
                    "bg-secondary text-secondary-foreground border border-border/50 [a]:hover:bg-secondary/80 [a]:hover:text-foreground",
                outline:
                    "border border-border bg-background/10 text-foreground backdrop-blur-md [a]:hover:bg-accent/15 [a]:hover:border-ring/50 [a]:hover:text-accent-foreground",
                ghost: "text-muted-foreground hover:bg-accent/10 hover:text-foreground",
                destructive:
                    "border border-destructive/20 bg-destructive/10 text-destructive focus-visible:ring-destructive/20 [a]:hover:bg-destructive/20",
                link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
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
