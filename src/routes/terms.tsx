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
    <LegalLayout title="Terms of Service" updated="April 21, 2026">
      <Item title="About SparklingProtect">
        SparklingProtect ("we", "us", "our") provides an independent protection plan for sparkling
        water makers. By purchasing a plan, you ("customer", "you") agree to these Terms of Service
        in full. SparklingProtect is not a manufacturer warranty and is not affiliated with,
        endorsed by, or connected to SodaStream Industries Ltd. or any other manufacturer.
      </Item>
      <Item title="What the Plan Covers">
        Your protection plan covers mechanical failure of your sparkling water maker occurring
        under normal personal household use. This includes internal component failure that prevents
        the device from functioning as intended.
      </Item>
      <Item title="What Is Not Covered">
        The plan does not cover: accidental damage; physical damage caused by dropping, crushing,
        or impact; water damage or liquid ingress; damage from misuse, neglect, or unauthorised
        modification; cosmetic damage including scratches, dents, and broken plastic; consumables
        including CO2 cylinders and bottles; commercial or business use; devices already broken at
        time of purchase; and damage caused by failure to follow manufacturer instructions.
      </Item>
      <Item title="How to Make a Claim">
        Contact us at{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>{" "}
        with your full name, order confirmation, description of the fault, and photos or video of
        the issue. We aim to respond to all claims within 3 business days. We reserve the right to
        request additional evidence before processing a claim.
      </Item>
      <Item title="How Claims Are Resolved">
        At our sole discretion, we may resolve claims by providing repair guidance, a replacement
        unit of equivalent specification, or a reimbursement up to the original purchase price of a
        standard SodaStream device. We do not guarantee same-day resolution. Resolution timelines
        will be communicated once a claim is assessed.
      </Item>
      <Item title='Definition of "Lifetime"'>
        "Lifetime" refers to the reasonable usable lifespan of a sparkling water maker under normal
        consumer use, which we define as up to 5 years from the date of your plan purchase.
        Coverage does not extend beyond this period.
      </Item>
      <Item title="One Plan Per Device">
        Each protection plan covers one device. Plans are non-transferable to a different device
        but may be transferred to a new owner of the same device with written notice to us.
      </Item>
      <Item title="Eligibility">
        Plans are available to individual consumers aged 18 and over. You must be the owner of the
        device being covered.
      </Item>
      <Item title="Limitation of Liability">
        Our total liability to you under this plan shall not exceed £150 (or local currency
        equivalent). We are not liable for any indirect, consequential, or incidental losses
        arising from device failure or our resolution process.
      </Item>
      <Item title="Governing Law">
        These Terms are governed by the laws of England and Wales. Any disputes shall be subject to
        the exclusive jurisdiction of the courts of England and Wales.
      </Item>
      <Item title="Changes to These Terms">
        We may update these Terms at any time. Continued use of your plan after changes constitutes
        acceptance of the updated Terms. We will notify active customers of material changes by
        email.
      </Item>
      <Item title="Contact">
        SparklingProtect ·{" "}
        <a className="text-primary hover:underline" href="mailto:support@sparklingprotect.shop">
          support@sparklingprotect.shop
        </a>{" "}
        · sparklingprotect.shop
      </Item>
    </LegalLayout>
  );
}
