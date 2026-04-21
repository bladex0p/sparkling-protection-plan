import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowLeft } from "lucide-react";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-base font-semibold tracking-tight">SparklingProtect</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {updated && (
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
        )}
        <div className="prose-legal mt-8 space-y-6 text-[15px] leading-relaxed text-foreground">
          {children}
        </div>
      </main>
      <footer className="border-t border-border bg-secondary/40 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          SparklingProtect is an independent protection service and is not affiliated with
          SodaStream.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          SparklingProtect · support@sparklingprotect.shop · sparklingprotect.shop
        </p>
      </footer>
    </div>
  );
}
