import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
            <div className="flex flex-col items-center justify-center gap-4 max-wxl text-center bg-card px-2 py-8 md:py-18 md:px-16 rounded-4xl shadow-lg">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <Badge variant="destructive">Page Not Found</Badge>
                <p className="text-lg mb-8">
                    Oops! The page you are looking for does not exist.
                </p>
                <Button asChild size="lg" variant="default">
                    <Link href="/">Go Back Home</Link>
                </Button>
            </div>
        </div>
    );
}