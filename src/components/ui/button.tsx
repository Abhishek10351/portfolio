import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-none border-2 border-transparent bg-clip-padding text-sm font-black uppercase tracking-wider whitespace-nowrap transition-all duration-150 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default:
                    "border-primary bg-primary text-primary-foreground shadow-[3px_3px_0px_0px_hsl(var(--primary)/0.4)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_hsl(var(--primary)/0.6)] active:translate-x-0 active:translate-y-0 active:shadow-none",
                outline:
                    "border-accent bg-background text-accent shadow-[3px_3px_0px_0px_hsl(var(--accent))] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_hsl(var(--accent))] hover:bg-accent/10 active:translate-x-0 active:translate-y-0 active:shadow-none",
                secondary:
                    "border-border bg-secondary text-secondary-foreground shadow-[3px_3px_0px_0px_hsl(var(--border))] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[5px_5px_0px_0px_hsl(var(--foreground))] active:translate-x-0 active:translate-y-0 active:shadow-none",
                ghost: "text-muted-foreground hover:bg-accent/10 hover:text-accent border-transparent shadow-none",
                destructive:
                    "border-destructive bg-destructive text-destructive-foreground shadow-[3px_3px_0px_0px_hsl(var(--destructive)/0.5)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_hsl(var(--destructive))] active:translate-x-0 active:translate-y-0 active:shadow-none",
                link: "text-primary underline-offset-4 decoration-2 hover:underline hover:text-primary/80 border-transparent shadow-none",
            },
            size: {
                default:
                    "h-10 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
                xs: "h-7 gap-1 px-3 text-xs has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-9 gap-1.5 px-4 text-xs has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
                lg: "h-12 gap-2.5 px-7 text-base has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
                icon: "size-10",
                "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-9",
                "icon-lg": "size-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot.Root : "button";

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
