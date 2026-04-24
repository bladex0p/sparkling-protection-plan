import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  CreditCard,
  RotateCcw,
  Headset,
  ShoppingBag,
  Sparkles,
  FileText,
  Mail,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { buyLifetimeCarbonationClub } from "@/lib/shopify-checkout";

function useCheckout() {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await buyLifetimeCarbonationClub();
    } finally {
      setLoading(false);
    }
  };
  return { loading, handleClick };
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <WhatsIncluded />
        <Disclosure />
        <LifetimeMeaning />
        <Pricing />
        <Refund />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}

function Header() {
  const { loading, handleClick } = useCheckout();
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-base font-semibold tracking-tight">SparklingProtect</span>
        </Link>
        <button
          type="button"
          onClick={handleClick}
          disabled={loading}
          className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:opacity-70 sm:inline-flex"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Get Protection — $19
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const { loading, handleClick } = useCheckout();
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-16 text-center sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
          <ShieldCheck className="h-3.5 w-3.5" />
          Independent protection service
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Protect Your Sparkling Water Maker for Life
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Affordable, independent protection plan for repair or replacement — no manufacturer
          warranty required.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleClick}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:bg-primary/90 disabled:opacity-70"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Get Protection – $19
          </button>
          <p className="text-sm text-muted-foreground">One-time payment. No subscription.</p>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Independent Service" },
    { icon: CreditCard, label: "One-Time Payment" },
    { icon: RotateCcw, label: "30-Day Money-Back" },
    { icon: Headset, label: "Simple Claims Process" },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-6 sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-sm text-secondary-foreground">
            <Icon className="h-4 w-4 shrink-0 text-primary" />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        {eyebrow && (
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: ShoppingBag,
      title: "Purchase Plan",
      desc: "Make a one-time payment to activate your protection.",
    },
    {
      icon: Sparkles,
      title: "Use Your Device Normally",
      desc: "No restrictions on everyday personal use.",
    },
    {
      icon: FileText,
      title: "Submit a Claim",
      desc: "If your device experiences mechanical failure, contact us for support and resolution options.",
    },
  ];
  return (
    <Section id="how-it-works" eyebrow="How it works" title="Three simple steps">
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold text-muted-foreground">
                STEP {i + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhatsIncluded() {
  const items = [
    "Coverage for mechanical failure (non-accidental)",
    "Customer support assistance",
    "Repair, replacement, or reimbursement options (at company discretion)",
    "No recurring fees",
  ];
  return (
    <Section eyebrow="What's included" title="Clear, straightforward coverage">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-sm leading-relaxed text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Disclosure() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4">
      <div className="rounded-2xl border-2 border-primary/30 bg-primary-soft/60 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
            <strong>Important:</strong> SparklingProtect is an independent service and is{" "}
            <strong>NOT</strong> affiliated with, endorsed by, or connected to SodaStream or any
            other manufacturer.
          </p>
        </div>
      </div>
    </section>
  );
}

function LifetimeMeaning() {
  return (
    <Section eyebrow='What "Lifetime" means' title="Honest definition, no fine print surprises">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] sm:p-8">
        <p className="text-base leading-relaxed text-muted-foreground">
          Lifetime protection refers to the reasonable usable life of the product under normal
          consumer use. Coverage is subject to product condition, usage, and our Terms of Service.
        </p>
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing" eyebrow="Pricing" title="One simple price">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-primary/20 bg-card p-8 text-center shadow-[var(--shadow-card)]">
          <div className="text-sm font-medium uppercase tracking-wider text-primary">
            Lifetime Plan
          </div>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold tracking-tight">$19</span>
            <span className="text-sm text-muted-foreground">one-time</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">No subscription. No renewals.</p>
          <a
            href={STRIPE_LINK}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Get Protected Now
          </a>
          <ul className="mt-6 space-y-2.5 text-left">
            {[
              "Mechanical failure coverage",
              "30-day money-back guarantee",
              "Email support",
              "No recurring fees",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Refund() {
  return (
    <Section eyebrow="Refund Policy" title="30-Day Money-Back Guarantee">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <p className="text-base leading-relaxed text-muted-foreground">
          If you are not satisfied with your purchase, you may request a full refund within 30 days
          of purchase by contacting our support team. Refunds are processed to the original payment
          method.
        </p>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="We're here to help">
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]">
        <span className="grid mx-auto h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary">
          <Mail className="h-5 w-5" />
        </span>
        <a
          href="mailto:support@sparklingprotect.shop"
          className="mt-4 block text-lg font-semibold text-primary hover:underline"
        >
          support@sparklingprotect.shop
        </a>
        <p className="mt-2 text-sm text-muted-foreground">
          We aim to respond within 24–48 hours.
        </p>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-base font-semibold">SparklingProtect</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Independent protection plans for sparkling water makers.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-muted-foreground hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@sparklingprotect.shop"
                  className="text-muted-foreground hover:text-foreground"
                >
                  support@sparklingprotect.shop
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            SparklingProtect is an independent protection service and is not affiliated with
            SodaStream.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            SparklingProtect · support@sparklingprotect.shop · sparklingprotect.shop
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} SparklingProtect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-[0_-4px_20px_oklch(0.21_0.03_240/0.08)] backdrop-blur sm:hidden">
      <a
        href={STRIPE_LINK}
        className="flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
      >
        Get Protection — $19
      </a>
    </div>
  );
}
