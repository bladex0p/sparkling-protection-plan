import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — SparklingProtect" },
      { name: "description", content: "Terms of Service for SparklingProtect protection plans." },
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

function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p className="text-muted-foreground">
        By purchasing our protection plan, you agree to the following terms:
      </p>
      <Item title="1. Service Description">
        SparklingProtect provides an independent protection plan for sparkling water makers. This
        is not a manufacturer warranty.
      </Item>
      <Item title="2. No Affiliation">
        We are not affiliated with, endorsed by, or connected to SodaStream or any manufacturer.
      </Item>
      <Item title="3. Coverage">
        Coverage applies to mechanical failure under normal use. Coverage does not include:
        <ul className="mt-2 list-disc pl-6">
          <li>Accidental damage</li>
          <li>Misuse or abuse</li>
          <li>Cosmetic damage</li>
          <li>Commercial use</li>
        </ul>
      </Item>
      <Item title="4. Claims Process">
        Customers must contact support with details of the issue. We may request photos, videos, or
        proof of purchase.
      </Item>
      <Item title="5. Resolution">
        We may offer repair, replacement, reimbursement, or alternative solutions at our discretion.
      </Item>
      <Item title="6. Lifetime Definition">
        "Lifetime" refers to the reasonable usable life of the product based on typical consumer
        use.
      </Item>
      <Item title="7. Limitations">
        We reserve the right to deny claims that do not meet eligibility requirements.
      </Item>
      <Item title="8. Modification">We may update these terms at any time.</Item>
      <Item title="Contact">
        Questions? Email{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>
        .
      </Item>
    </LegalLayout>
  );
}
