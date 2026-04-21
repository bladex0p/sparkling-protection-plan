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

function Item({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="April 21, 2026">
      <Item title="Who We Are">
        SparklingProtect operates sparklingprotect.shop. We are the data controller for personal
        information collected through this website and our services. Contact:{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>
      </Item>
      <Item title="What Data We Collect">
        We collect your name, email address, and purchase details when you buy a protection plan.
        We also collect claims-related information you provide including device details, photos,
        and correspondence. Our website may collect standard analytics data such as pages visited
        and browser type via cookies.
      </Item>
      <Item title="How We Use Your Data">
        We use your data to process your purchase and activate your plan; handle warranty claims;
        respond to support enquiries; send service-related communications; and comply with legal
        obligations. We do not use your data for unsolicited marketing without your consent.
      </Item>
      <Item title="Who We Share Data With">
        We share your payment data with Stripe Inc. for payment processing only. Stripe's privacy
        policy is available at stripe.com/privacy. We do not sell, rent, or trade your personal
        data to any third party.
      </Item>
      <Item title="How Long We Keep Your Data">
        We retain your data for the duration of your active plan plus 2 years, or as required by
        applicable law. Payment records are retained for 7 years for accounting purposes.
      </Item>
      <Item title="Your Rights (GDPR)">
        If you are based in the UK or EU, you have the right to access the personal data we hold
        about you; request correction of inaccurate data; request deletion of your data; object to
        or restrict processing; and data portability. To exercise any of these rights, email{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>
        . We will respond within 30 days.
      </Item>
      <Item title="Cookies">
        Our website uses essential cookies to function. We do not use advertising or tracking
        cookies. You can disable cookies in your browser settings.
      </Item>
      <Item title="Data Security">
        We use industry-standard security measures to protect your data. Payment information is
        processed entirely by Stripe and is never stored on our servers.
      </Item>
      <Item title="Changes to This Policy">
        We may update this policy from time to time. The latest version will always be available at
        sparklingprotect.shop/privacy.
      </Item>
      <Item title="Contact">
        For any privacy-related queries:{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>
      </Item>
    </LegalLayout>
  );
}
