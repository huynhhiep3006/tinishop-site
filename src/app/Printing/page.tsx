// app/printing/page.tsx
export const metadata = {
  title: "Printing FAQ - TiniBook",
  description:
    "Everything you need to know about printing TiniBook pages at home or at a print shop.",
};

export default function PrintingFAQ() {
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
    --muted:#667085;
    --bg:#fff9fb;
    --card:#fff;
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

  /* page-specific (prefixed pr-) */
  .pr-hero{
    text-align:center;border:1px solid var(--ring);border-radius:20px;padding:40px;
    background:linear-gradient(135deg,var(--primary-light),#ffffff)
  }
  .pr-badges{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:18px}
  .pr-badge{background:#fff;border:1px solid var(--ring);border-radius:999px;padding:8px 14px;font-weight:700;box-shadow:var(--shadow-1)}
  .pr-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px}
  .pr-card{background:var(--card);border-radius:16px;border:1px solid var(--ring);box-shadow:var(--shadow-1);padding:28px}
  .pr-note{background:#fff;border:1px dashed var(--primary-dark);border-radius:12px;padding:16px}
  .pr-qa{max-width:920px;margin:0 auto}
  .pr-accordion{border-radius:14px;border:1px solid var(--ring);background:#fff;overflow:hidden;box-shadow:var(--shadow-1)}
  .pr-accordion details{border-top:1px solid var(--ring)}
  .pr-accordion details:first-of-type{border-top:none}
  .pr-accordion summary{
    cursor:pointer;list-style:none;padding:18px 20px;font-weight:700;display:flex;align-items:center;justify-content:space-between;
  }
  .pr-accordion summary::-webkit-details-marker{display:none}
  .pr-accordion .pr-answer{padding:0 20px 18px;color:var(--muted)}
  .pr-kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
  .pr-kv .pr-chip{background:#fff;border:1px solid var(--ring);border-radius:12px;padding:12px 14px;text-align:center;font-weight:700}

  @media (max-width: 920px){ .pr-grid{grid-template-columns:1fr} .title-xl{font-size:2.2rem} }
</style>

<body>
  <main class="container">

    <!-- Hero -->
    <section class="section" style="padding-top:40px">
      <div class="pr-hero">
        <h1 class="title-xl" style="margin:0 0 8px">Printing FAQ</h1>
        <p class="muted" style="max-width:720px;margin:0 auto">
          A simple guide to printing TiniBook pages: sizes, paper choices, color settings, and ink-saving tips — all in one place.
        </p>
        <div class="pr-badges">
          <span class="pr-badge">A4 / Letter</span>
          <span class="pr-badge">300 DPI Ready</span>
          <span class="pr-badge">B/W & Color</span>
          <span class="pr-badge">Home & Shop</span>
        </div>
      </div>
    </section>

    <!-- Quick Tips -->
    <section class="section" style="padding-top:0">
      <div class="pr-grid">
        <div class="pr-card">
          <h2 class="title-lg" style="margin:0 0 10px">Quick Setup</h2>
          <div class="pr-kv">
            <div class="pr-chip">Scale: <strong>100%</strong></div>
            <div class="pr-chip">Resolution: <strong>300 DPI</strong></div>
            <div class="pr-chip">Paper: <strong>90–120 gsm</strong></div>
            <div class="pr-chip">Orientation: <strong>Auto</strong></div>
            <div class="pr-chip">Color: <strong>Grayscale/Color</strong></div>
            <div class="pr-chip">Margins: <strong>None</strong></div>
          </div>
        </div>
        <div class="pr-card">
          <h2 class="title-lg" style="margin:0 0 10px">Ink-Saving Tips</h2>
          <ul class="muted" style="margin:0;padding-left:18px">
            <li>Use <b>Grayscale</b> or <b>Draft</b> mode for line-art pages with lots of white space.</li>
            <li>Enable <b>Print as Image</b> if heavy PDFs render oddly or fill too much ink.</li>
            <li>Print double-sided (with heavier paper) to cut the sheet count.</li>
          </ul>
          <div class="pr-note" style="margin-top:14px">
            Tip: When printing from a browser, disable “Headers & Footers” so URLs/dates aren’t printed.
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="section pr-qa" style="padding-top:0">
      <div class="pr-accordion">
        <details open>
          <summary>1) What paper sizes are supported?</summary>
          <div class="pr-answer">
            All pages are optimized for <b>A4</b> and <b>US Letter</b>. To print A5/A6, use the “Multiple” option (2–4 pages per sheet) in the print dialog.
          </div>
        </details>

        <details>
          <summary>2) What DPI should I choose?</summary>
          <div class="pr-answer">
            Source files are <b>300 DPI</b> for crisp output. For home inkjets, 150–300 DPI is fine — vector/line art remains sharp.
          </div>
        </details>

        <details>
          <summary>3) How do I avoid cropping at the edges?</summary>
          <div class="pr-answer">
            In the print dialog, set <b>Scale: 100%</b> and disable “Fit to page.” If your printer has unprintable margins, choose <b>Shrink to Fit</b>. In PDF apps, use <b>Actual Size</b>.
          </div>
        </details>

        <details>
          <summary>4) What paper works best for coloring?</summary>
          <div class="pr-answer">
            <b>90–120 gsm</b> is great for pencils/crayons. For alcohol markers, use <b>160–200 gsm</b> to reduce bleed-through, and place a scrap sheet underneath.
          </div>
        </details>

        <details>
          <summary>5) Will black-and-white lose line quality?</summary>
          <div class="pr-answer">
            No. Our line art has high contrast and prints cleanly in B/W. Select <b>Grayscale</b> and increase <b>Brightness</b> if lines look too heavy.
          </div>
        </details>

        <details>
          <summary>6) Why do printed colors look different?</summary>
          <div class="pr-answer">
            Screens use <b>RGB</b>, printers use <b>CMYK</b>, so variation is normal. Pick the correct paper type in the driver and switch to <b>Photo/Best</b> quality when needed.
          </div>
        </details>

        <details>
          <summary>7) Can I print borderless?</summary>
          <div class="pr-answer">
            If your printer supports <b>Borderless</b>, enable it and match the paper size exactly. Note: this can increase ink usage.
          </div>
        </details>

        <details>
          <summary>8) Any tips for printing at a copy shop?</summary>
          <div class="pr-answer">
            Bring files as <b>PDF</b> or <b>PNG (300 DPI)</b>, and specify paper size, simplex/duplex, and borderless or not. Always do a 1-page test before bulk printing.
          </div>
        </details>

        <details>
          <summary>9) The downloaded file shows broken fonts/characters.</summary>
          <div class="pr-answer">
            Open with <b>Adobe Acrobat Reader</b> (or a modern PDF viewer) and enable <b>“Print as Image.”</b> If issues persist, re-download the latest file.
          </div>
        </details>

        <details>
          <summary>10) Do you offer spine margins/templates for binding?</summary>
          <div class="pr-answer">
            Yes. Use our <b>Printable Pack</b> (with 8–10&nbsp;mm inner margins). When printing a set, keep browser <b>Margins: None</b> and add margins in the printer driver if needed.
          </div>
        </details>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;margin-top:24px">
        <a href="/downloads" class="btn btn-primary">Download Print Pack</a>
        <a href="/help/contact" class="btn" style="background:#fff;border:1px solid var(--ring)">Contact Support</a>
      </div>
    </section>

  </main>
</body>
        `,
      }}
    />
  );
}
