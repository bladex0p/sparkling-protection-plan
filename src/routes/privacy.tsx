import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — SparklingProtect" },
      { name: "description", content: "How SparklingProtect collects and handles your data." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-muted-foreground">
        We collect basic customer information (name, email, purchase details) to:
      </p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
        <li>Provide services</li>
        <li>Process claims</li>
        <li>Communicate with customers</li>
      </ul>
      <p className="text-muted-foreground">
        We do not sell or share personal data with third parties except as required to process
        payments or comply with legal obligations.
      </p>
      <p className="text-muted-foreground">
        For privacy questions, contact{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>
        .
      </p>
    </LegalLayout>
  );
}
