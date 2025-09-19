// app/coloring/page.tsx
export const metadata = {
  title: "Shipping & Delivery - TiniBook",
  description:
    "Fast, reliable shipping options styled to match TiniBook’s soft pink theme.",
};

export default function Tips() {
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
    --ink:#2d3436;
    --muted:#666;
    --bg:#fff9fb;
    --card:#fff;
    --ring: rgba(255,180,210,.45);
    --shadow-1: 0 8px 24px rgba(0,0,0,.08);
    --shadow-2: 0 16px 48px rgba(0,0,0,.12);
  }

  /* shared */
  body{font-family:'Josefin Sans',sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;margin:0}
  .container{max-width:1200px;margin:0 auto;padding:0 20px}
  .section{padding:80px 20px}
  .title-xl{font-size:2.6rem;font-weight:800;letter-spacing:-.02em}
  .title-lg{font-size:1.75rem;font-weight:700}
  .muted{color:var(--muted)}
  .btn{
    appearance:none;border:none;border-radius:12px;padding:12px 18px;
    font-weight:700;cursor:pointer;transition:.25s ease;box-shadow:var(--shadow-1)
  }
  .btn-primary{background:var(--primary);color:#fff}
  .btn-primary:hover{background:var(--primary-dark);transform:translateY(-2px);box-shadow:var(--shadow-2)}

  /* page specific */
  .sd-hero{text-align:center}
  .sd-hero h1{margin:0 0 10px}
  .sd-hero p{max-width:640px;margin:0 auto}

  .sd-banner{
    background:linear-gradient(135deg,var(--primary) 0%, var(--primary-dark) 100%);
    color:#fff;padding:20px;border-radius:16px;text-align:center;
    box-shadow:var(--shadow-2);border:1px solid var(--ring)
  }
  .sd-badge{width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center}

  .sd-card{
    background:var(--card);border-radius:16px;padding:32px;
    box-shadow:var(--shadow-1);border:1px solid var(--ring)
  }

  .sd-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px}
  .sd-split{display:grid;grid-template-columns:1fr 1fr;gap:40px}

  .sd-intl{
    background:linear-gradient(135deg,#f0ebff 0%, var(--primary-light) 100%);
    color:#1e1e1e;border-radius:16px;padding:40px;border:1px solid var(--ring)
  }
  .sd-intl-item{
    background:rgba(255,255,255,.7);padding:20px;border-radius:12px;border:1px solid var(--ring)
  }
  .sd-list{list-style:none;padding:0;margin:0}
  .sd-dot{width:8px;height:8px;border-radius:50%;background:#22c55e}

  .sd-faq h4{margin:0 0 6px}
  .sd-faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px}

  @media (max-width: 900px){
    .sd-split{grid-template-columns:1fr}
    .title-xl{font-size:2.2rem}
  }
  @media (max-width: 640px){
    .section{padding:60px 16px}
    .sd-faq-grid{grid-template-columns:1fr}
  }
</style>

<body>

  <main class="container">

    <!-- Hero -->
    <section class="section sd-hero" style="padding-top:40px">
      <h1 class="title-xl">Shipping & Delivery</h1>
      <p class="muted">Fast, reliable shipping options designed to get your order to you safely and on time.</p>
    </section>

    <!-- Free Shipping Banner -->
    <section class="section" style="padding-top:0">
      <div class="sd-banner">
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap">
          <div class="sd-badge">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l1.09 6.26L22 9l-8.91.74L12 16l-1.09-6.26L2 9l8.91-1.74L12 2z"/></svg>
          </div>
          <span style="font-size:1.1rem;font-weight:800;letter-spacing:.3px">Free Shipping on Orders Over $75</span>
        </div>
        <p style="margin:8px 0 0;opacity:.95">Automatically applied at checkout • No code needed</p>
      </div>
    </section>

    <!-- Processing & Handling -->
    <section class="section" style="padding-top:0">
      <div class="sd-card">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
          <div class="sd-badge" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm9 7V7l-6-6H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h6v-2H5V3h8v6h8Z"/></svg>
          </div>
          <div>
            <h2 class="title-lg" style="margin:0">Processing & Handling</h2>
            <p class="muted" style="margin:2px 0 0">How we prepare your order for shipping</p>
          </div>
        </div>

        <div class="sd-grid">
          <div class="sd-card" style="padding:20px">
            <h4 style="display:flex;align-items:center;gap:8px;font-weight:700">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z" fill="var(--primary-dark)"/></svg>
              Order Processing
            </h4>
            <p class="muted" style="margin:8px 0 0">Orders are processed within 1–2 business days. Orders placed after 2PM EST will be processed the next business day.</p>
          </div>

          <div class="sd-card" style="padding:20px">
            <h4 style="display:flex;align-items:center;gap:8px;font-weight:700">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 16H5V5h14v14Zm-2-7H7v-2h10v2Z" fill="var(--primary-dark)"/></svg>
              Weekends & Holidays
            </h4>
            <p class="muted" style="margin:8px 0 0">We don't process or ship orders on weekends or federal holidays. Processing resumes the next business day.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- International Shipping -->
    <section class="section" style="padding-top:0">
      <div class="sd-intl">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px">
          <div class="sd-badge" style="background:rgba(255,255,255,.35)">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#111"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2ZM11 19.93A8 8 0 0 1 4 12c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54A4 4 0 0 0 16 16h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2V4.6A8 8 0 0 1 20 12c0 2.08-.8 3.97-2.1 5.39Z"/></svg>
          </div>
          <div>
            <h2 class="title-lg" style="margin:0">International Shipping</h2>
            <p class="muted" style="margin:2px 0 0">We ship worldwide with reliable carriers</p>
          </div>
        </div>

        <div class="sd-grid">
          <div class="sd-intl-item">
            <h4 style="margin:0 0 6px;font-weight:700">Standard International</h4>
            <p style="margin:0 0 10px;font-weight:700;color:#b8860b">$19.99 • 7–14 business days</p>
            <p class="muted" style="margin:0">Available to most countries. Tracking included. Customs fees may apply and are customer responsibility.</p>
          </div>
          <div class="sd-intl-item">
            <h4 style="margin:0 0 6px;font-weight:700">Express International</h4>
            <p style="margin:0 0 10px;font-weight:700;color:#b8860b">$39.99 • 3–7 business days</p>
            <p class="muted" style="margin:0">Priority handling and faster transit times. Enhanced tracking and delivery confirmation included.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tracking & Help -->
    <section class="section" style="padding-top:0">
      <div class="sd-split">
        <div class="sd-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-dark)"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm-2 15-5-5 1.41-1.41L10 14.17 17.59 6.58 19 8l-9 9z"/></svg>
            <h3 class="title-lg" style="margin:0">Order Tracking</h3>
          </div>
          <p class="muted">Track your order every step of the way with real-time updates and delivery notifications.</p>
          <ul class="sd-list muted">
            <li style="display:flex;align-items:center;gap:10px;margin:8px 0"><span class="sd-dot"></span> Email confirmation with tracking number</li>
            <li style="display:flex;align-items:center;gap:10px;margin:8px 0"><span class="sd-dot"></span> SMS updates (optional)</li>
            <li style="display:flex;align-items:center;gap:10px;margin:8px 0"><span class="sd-dot"></span> Delivery confirmation</li>
          </ul>
        </div>

        <div class="sd-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-dark)"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>
            <h3 class="title-lg" style="margin:0">Need Help?</h3>
          </div>
          <p class="muted">Questions about your shipment? Our customer service team is here to help you every step of the way.</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a href="mailto:support@example.com" class="btn btn-primary" style="flex:1;min-width:180px;text-align:center">Email Support</a>
            <a href="tel:+1234567890" class="btn" style="flex:1;min-width:180px;text-align:center;background:#fff;border:1px solid var(--ring)">Call Us</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section sd-faq" style="padding-top:0">
      <div class="sd-card">
        <h2 class="title-lg" style="text-align:center;margin:0 0 24px">Frequently Asked Questions</h2>
        <div class="sd-faq-grid">
          <div>
            <h4>When will my order ship?</h4>
            <p class="muted" style="margin:0 0 18px">Orders typically ship within 1–2 business days. You'll receive a tracking confirmation email once your order has been dispatched.</p>

            <h4>Can I change my shipping address?</h4>
            <p class="muted" style="margin:0 0 18px">Yes, if your order hasn't shipped yet. Contact our support team immediately to update your shipping address.</p>

            <h4>Do you ship to P.O. boxes?</h4>
            <p class="muted" style="margin:0">Yes, we ship to P.O. boxes via USPS. Note that overnight and express options are not available for P.O. box addresses.</p>
          </div>
          <div>
            <h4>What if my package is damaged?</h4>
            <p class="muted" style="margin:0 0 18px">We're sorry! Please contact us within 48 hours of delivery with photos of the damage, and we'll arrange a replacement or refund.</p>

            <h4>Can I expedite my order after placing it?</h4>
            <p class="muted" style="margin:0 0 18px">If your order hasn't shipped yet, we may be able to upgrade your shipping method. Additional charges will apply.</p>

            <h4>What about customs fees?</h4>
            <p class="muted" style="margin:0">For international orders, customs fees, duties, and taxes are the customer's responsibility and are not included in our shipping costs.</p>
          </div>
        </div>
      </div>
    </section>

  </main>

</body>
        `,
      }}
    />
  );
}
