const SHOPIFY_API_VERSION = "2025-07";
const SHOPIFY_STORE_PERMANENT_DOMAIN = "9y3xxc-ru.myshopify.com";
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = "dd6e109cf844490c966fefa56342d10c";

export const LIFETIME_CARBONATION_CLUB_VARIANT_ID =
  "gid://shopify/ProductVariant/53393142808919";

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart { id checkoutUrl }
      userErrors { field message }
    }
  }
`;

function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set("channel", "online_store");
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

export async function buyLifetimeCarbonationClub(): Promise<void> {
  // Open a tab synchronously to avoid popup blockers, then navigate it once we have the URL.
  const newTab = window.open("about:blank", "_blank");

  try {
    const res = await fetch(SHOPIFY_STOREFRONT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({
        query: CART_CREATE_MUTATION,
        variables: {
          input: {
            lines: [
              {
                quantity: 1,
                merchandiseId: LIFETIME_CARBONATION_CLUB_VARIANT_ID,
              },
            ],
          },
        },
      }),
    });

    const data = await res.json();
    const errs = data?.data?.cartCreate?.userErrors;
    const checkoutUrl: string | undefined = data?.data?.cartCreate?.cart?.checkoutUrl;

    if (!checkoutUrl || (errs && errs.length > 0)) {
      console.error("Shopify cart creation failed:", errs || data);
      if (newTab) newTab.close();
      alert("Sorry, we couldn't start checkout. Please try again.");
      return;
    }

    const finalUrl = formatCheckoutUrl(checkoutUrl);
    if (newTab) {
      newTab.location.href = finalUrl;
    } else {
      window.open(finalUrl, "_blank");
    }
  } catch (err) {
    console.error("Checkout error:", err);
    if (newTab) newTab.close();
    alert("Sorry, we couldn't start checkout. Please try again.");
  }
}
