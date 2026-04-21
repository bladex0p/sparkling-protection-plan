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

function RefundPage() {
  return (
    <LegalLayout title="Refund Policy">
      <p className="text-muted-foreground">
        We want you to be completely satisfied with your protection plan.
      </p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
        <li>Full refunds are available within 30 days of purchase.</li>
        <li>Requests must be made via email to support@sparklingprotect.shop.</li>
        <li>Refunds are issued to the original payment method.</li>
        <li>After 30 days, purchases are non-refundable.</li>
      </ul>
      <p className="text-muted-foreground">
        To request a refund, contact{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>{" "}
        with your order details.
      </p>
    </LegalLayout>
  );
}
