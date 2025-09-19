// app/orders-payments/page.tsx
export const metadata = {
  title: "Orders & Payments FAQ - TiniBook",
  description:
    "Answers to common questions about ordering, paying, refunds, and billing on TiniBook.",
};

export default function OrdersPaymentsFAQ() {
  return (
    <div
      role="main"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}
      dangerouslySetInnerHTML={{
        __html: `
<style>
  :root{
    --primary: rgb(255,180,210);
    --primary-dark: rgb(235,140,185);
    --primary-light: rgb(255,210,228);
    --ink:#2d3436; --muted:#667085; --bg:#fff9fb; --card:#fff;
    --ring: rgba(255,180,210,.45);
    --shadow-1: 0 8px 24px rgba(0,0,0,.08);
    --shadow-2: 0 16px 48px rgba(0,0,0,.12);
  }
  /* shared with layout */
  body{font-family:'Josefin Sans',sans-serif;background:var(--bg);color:var(--ink);line-height:1.65;margin:0}
  .container{max-width:1200px;margin:0 auto;padding:0 20px}
  .section{padding:80px 20px}
  .title-xl{font-size:2.6rem;font-weight:800;letter-spacing:-.02em}
  .title-lg{font-size:1.75rem;font-weight:700}
  .muted{color:var(--muted)}
  .btn{appearance:none;border:none;border-radius:12px;padding:12px 18px;font-weight:700;cursor:pointer;transition:.25s ease;box-shadow:var(--shadow-1)}
  .btn-primary{background:var(--primary);color:#fff}
  .btn-primary:hover{background:var(--primary-dark);transform:translateY(-2px);box-shadow:var(--shadow-2)}

  /* page-specific (prefixed op-) */
  .op-hero{
    text-align:center;border:1px solid var(--ring);border-radius:20px;padding:40px;
    background:linear-gradient(135deg,var(--primary-light),#ffffff)
  }
  .op-badges{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:16px}
  .op-badge{background:#fff;border:1px solid var(--ring);border-radius:999px;padding:8px 12px;font-weight:700;box-shadow:var(--shadow-1)}
  .op-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px}
  .op-card{background:var(--card);border-radius:16px;border:1px solid var(--ring);box-shadow:var(--shadow-1);padding:24px}
  .op-kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:10px}
  .op-chip{background:#fff;border:1px solid var(--ring);border-radius:12px;padding:10px 12px;text-align:center;font-weight:700}
  .op-accordion{border-radius:14px;border:1px solid var(--ring);background:#fff;overflow:hidden;box-shadow:var(--shadow-1)}
  .op-accordion details{border-top:1px solid var(--ring)}
  .op-accordion details:first-of-type{border-top:none}
  .op-accordion summary{cursor:pointer;list-style:none;padding:18px 20px;font-weight:700;display:flex;align-items:center;justify-content:space-between}
  .op-accordion summary::-webkit-details-marker{display:none}
  .op-accordion .op-answer{padding:0 20px 18px;color:var(--muted)}
  .op-help{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

  @media (max-width: 900px){ .title-xl{font-size:2.2rem} }
</style>

<body>
  <main class="container">

    <!-- Hero -->
    <section class="section" style="padding-top:40px">
      <div class="op-hero">
        <h1 class="title-xl" style="margin:0 0 8px">Orders & Payments — FAQ</h1>
        <p class="muted" style="max-width:760px;margin:0 auto">
          Everything about placing orders, payment methods, invoices, refunds, and billing security on TiniBook.
        </p>
        <div class="op-badges">
          <span class="op-badge">Secure Checkout</span>
          <span class="op-badge">Instant Email Receipt</span>
          <span class="op-badge">Multiple Currencies</span>
          <span class="op-badge">Refund-Friendly</span>
        </div>
      </div>
    </section>

    <!-- Quick Overview -->
    <section class="section" style="padding-top:0">
      <div class="op-grid">
        <div class="op-card">
          <h2 class="title-lg" style="margin:0 0 8px">Accepted Payment Methods</h2>
          <p class="muted" style="margin:0">We accept major credit/debit cards and popular wallets.</p>
          <div class="op-kv">
            <div class="op-chip">Visa</div>
            <div class="op-chip">Mastercard</div>
            <div class="op-chip">American Express</div>
            <div class="op-chip">Apple Pay / Google Pay</div>
            <div class="op-chip">PayPal</div>
          </div>
        </div>

        <div class="op-card">
          <h2 class="title-lg" style="margin:0 0 8px">Order Status</h2>
          <p class="muted" style="margin:0">Track your order from payment to delivery.</p>
          <ul class="muted" style="margin:10px 0 0;padding-left:18px">
            <li><b>Processing</b> — we’ve received your order and payment.</li>
            <li><b>Shipped</b> — you’ll get a tracking email/SMS.</li>
            <li><b>Delivered</b> — confirmed by the carrier.</li>
          </ul>
        </div>

        <div class="op-card">
          <h2 class="title-lg" style="margin:0 0 8px">Billing & Invoices</h2>
          <p class="muted" style="margin:0">Invoices are emailed automatically after checkout.</p>
          <ul class="muted" style="margin:10px 0 0;padding-left:18px">
            <li>Download from <b>My Account → Orders</b>.</li>
            <li>Request VAT/GST info via <b>support@tinibook.com</b>.</li>
            <li>Update billing details before reordering.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" style="padding-top:0;max-width:980px;margin:0 auto">
      <div class="op-accordion">
        <details open>
          <summary>1) When is my card charged?</summary>
          <div class="op-answer">
            Your card or wallet is charged at checkout. If a payment authorization fails, your order won’t be created and you’ll see an error message to retry.
          </div>
        </details>

        <details>
          <summary>2) Why did my payment fail?</summary>
          <div class="op-answer">
            Common reasons: insufficient funds, expired card, bank security blocks, or mismatched billing address/CVV. Try another method, or call your bank to whitelist the transaction.
          </div>
        </details>

        <details>
          <summary>3) Can I change or cancel an order?</summary>
          <div class="op-answer">
            You can request changes or cancellation <b>before</b> the order ships. Contact support with your order number; once shipped, use our returns/refunds process.
          </div>
        </details>

        <details>
          <summary>4) Do you support cash on delivery (COD)?</summary>
          <div class="op-answer">
            COD is not supported at this time. Please use a card, PayPal, or a supported mobile wallet.
          </div>
        </details>

        <details>
          <summary>5) How do refunds work?</summary>
          <div class="op-answer">
            Approved refunds are returned to the <b>original payment method</b>. Banks typically post the credit within <b>5–10 business days</b> depending on the issuer.
          </div>
        </details>

        <details>
          <summary>6) Can I pay in my local currency?</summary>
          <div class="op-answer">
            We price in several major currencies. If yours isn’t listed at checkout, your card issuer may convert from USD/EUR and could charge a small FX fee.
          </div>
        </details>

        <details>
          <summary>7) Where is my receipt/invoice?</summary>
          <div class="op-answer">
            A receipt is emailed right after purchase. You can also download the invoice anytime from <b>My Account → Orders</b>. Didn’t get it? Check spam or contact support.
          </div>
        </details>

        <details>
          <summary>8) I was charged twice—what should I do?</summary>
          <div class="op-answer">
            Sometimes a pending authorization appears as a duplicate. It usually drops within a few days. If you see <b>two settled charges</b>, send both transaction IDs to support for review.
          </div>
        </details>

        <details>
          <summary>9) Is my payment information secure?</summary>
          <div class="op-answer">
            Yes. We use encrypted checkout and do not store full card details on our servers. Payments are processed by PCI-DSS compliant providers.
          </div>
        </details>

        <details>
          <summary>10) How do discount codes and gift cards work?</summary>
          <div class="op-answer">
            Enter the code at checkout; eligible discounts apply before tax and shipping. Gift cards can be combined with discounts unless a promo states otherwise.
          </div>
        </details>
      </div>

      <div class="op-help" style="margin-top:24px">
        <a href="/account/orders" class="btn btn-primary">View My Orders</a>
        <a href="/help/contact" class="btn" style="background:#fff;border:1px solid var(--ring)">Contact Support</a>
        <a href="/legal/payments" class="btn" style="background:#fff;border:1px solid var(--ring)">Payments Policy</a>
      </div>
    </section>

  </main>
</body>
        `,
      }}
    />
  );
}
