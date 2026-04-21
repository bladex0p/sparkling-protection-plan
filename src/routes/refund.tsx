import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/refund")({
  component: RefundPage,
  head: () => ({
    meta: [
      { title: "Refund Policy — SparklingProtect" },
      { name: "description", content: "30-day money-back guarantee and refund policy details." },
    ],
  }),
});

function Item({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </section>
  );
}

function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" updated="April 21, 2026">
      <Item title="30-Day Money-Back Guarantee">
        We offer a full refund within 30 days of your purchase date, no questions asked. If you are
        unhappy for any reason, simply email{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>{" "}
        with your name and order confirmation number and we will process your refund within 5
        business days to your original payment method.
      </Item>
      <Item title="After 30 Days">
        After the 30-day window, purchases are non-refundable. However if you have an active claim
        that we are unable to resolve to a reasonable standard, we will assess refunds on a
        case-by-case basis.
      </Item>
      <Item title="Chargebacks">
        We ask that customers contact us before initiating a chargeback with their bank or card
        provider. We are committed to resolving issues fairly and quickly. Unresolved disputes can
        be escalated to{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>{" "}
        at any time.
      </Item>
      <Item title="How Refunds Are Processed">
        Refunds are returned to the original payment method used at checkout. Processing time is
        5–10 business days depending on your bank.
      </Item>
      <Item title="Contact">
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>{" "}
        — we aim to respond within 24–48 hours.
      </Item>
    </LegalLayout>
  );
}
