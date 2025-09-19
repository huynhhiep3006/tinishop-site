// app/coloring/page.tsx
export const metadata = {
  title: "Our Mission - TiniBook",
  description:
    "TiniBook’s mission and values — crafted in our soft pink palette.",
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
    --bg: #fff9fb;
    --ink: #2d3436;
    --muted: #636e72;
    --card: #fff;
    --ring: rgba(255,180,210,.45);
    --mint: rgb(210,240,235);
    --lilac: rgb(230,215,250);
    --sky:  rgb(214,238,255);
    --shadow-1: 0 10px 30px rgba(0,0,0,.08);
    --shadow-2: 0 16px 40px rgba(0,0,0,.12);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Josefin Sans',sans-serif;background:linear-gradient(135deg,#fff1f6 0%, #fff9fb 60%, #fff5fa 100%);min-height:100vh;color:var(--ink)}

  /* shared with layout */
  .container{max-width:1200px;margin:0 auto;padding:0 20px}
  .section{padding:80px 20px}
  .title-xl{font-size:3.2rem;font-weight:700;line-height:1.2}
  .title-lg{font-size:2.2rem;font-weight:700}
  .muted{color:var(--muted)}
  .btn{
    appearance:none;border:none;border-radius:999px;padding:14px 32px;
    font-weight:700;letter-spacing:.5px;text-transform:uppercase;cursor:pointer;transition:.25s ease;
    box-shadow:var(--shadow-1)
  }
  .btn-primary{background:var(--primary);color:#fff}
  .btn-primary:hover{background:var(--primary-dark);transform:translateY(-2px);box-shadow:var(--shadow-2)}
  .btn-ghost{background:transparent;border:2px solid #fff;color:#fff}
  .btn-ghost:hover{background:#fff;color:var(--primary)}

  /* Mission specific (prefixed m-) */
  .m-hero{
    background:linear-gradient(135deg,var(--primary) 0%, var(--primary-dark) 100%);
    color:#fff;text-align:center;position:relative;overflow:hidden
  }
  .m-hero .bubble{position:absolute;border-radius:50%;background:rgba(255,255,255,.18)}
  .m-b1{top:-50px;left:-50px;width:110px;height:110px;transform:rotate(45deg)}
  .m-b2{bottom:-30px;right:-30px;width:70px;height:70px}

  .m-facts{background:#fff}
  .m-facts-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:40px;text-align:center}
  .m-fact{
    padding:30px;border-radius:20px;color:#2d3436;transform:translateY(0);transition:transform .25s ease, box-shadow .25s ease;border:1px solid var(--ring)
  }
  .m-fact:hover{transform:translateY(-8px);box-shadow:var(--shadow-2)}
  .m-f1{background:linear-gradient(135deg,#fff7d6 0%, #ffe08f 100%)}
  .m-f2{background:linear-gradient(135deg,var(--primary-light) 0%, var(--primary) 100%);color:#fff}
  .m-f3{background:linear-gradient(135deg,var(--lilac) 0%, #b8a7ff 100%);color:#fff}
  .m-f4{background:linear-gradient(135deg,#bdf4ea 0%, #8fe9d4 100%);color:#fff}

  .m-purpose{background:linear-gradient(135deg,#fff5f7 0%, #fef7ff 100%);text-align:center}
  .m-divider{width:80px;height:4px;background:linear-gradient(90deg,var(--primary),#ffd36b);border-radius:2px;margin:16px auto}

  .m-values{background:#fff}
  .m-values-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:30px}
  .m-pillar{
    padding:40px 30px;border-radius:24px;background:var(--card);text-align:center;position:relative;overflow:hidden;
    border:2px solid var(--ring);box-shadow:var(--shadow-1);transition:.25s ease
  }
  .m-pillar:hover{transform:translateY(-6px);box-shadow:var(--shadow-2)}
  .m-pill-1{background:linear-gradient(135deg,#fff 0%, #fff7d6 25%)}
  .m-pill-2{background:linear-gradient(135deg,#fff 0%, var(--primary-light) 25%)}
  .m-pill-3{background:linear-gradient(135deg,#fff 0%, var(--lilac) 25%)}
  .m-pill-4{background:linear-gradient(135deg,#fff 0%, #bdf4ea 25%)}

  .m-impact{background:linear-gradient(135deg,#f8fafb 0%, #eef2f6 100%)}
  .m-impact-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px}
  .m-impact-card{background:#fff;border-radius:16px;padding:30px;box-shadow:var(--shadow-1);text-align:center;border:1px solid var(--ring)}

  .m-cta{
    background:linear-gradient(135deg,var(--primary-dark) 0%, var(--primary) 60%, var(--lilac) 100%);
    color:#fff;text-align:center;position:relative;overflow:hidden
  }
  .m-cta .mesh{
    position:absolute;inset:0;background-image:
      radial-gradient(circle at 20% 50%, rgba(255,255,255,.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,.12) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(255,255,255,.12) 0%, transparent 50%);
  }
  .m-cta-inner{position:relative;z-index:2;max-width:720px;margin:0 auto}

  .m-testimonial{background:#fff;text-align:center}
  .m-avatar{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary),#ffd36b);margin:0 auto 16px}
</style>

<body>

  <!-- Hero -->
  <section class="section m-hero">
    <span class="bubble m-b1"></span>
    <span class="bubble m-b2"></span>
    <div class="container">
      <h1 class="title-xl" style="color:#fff;margin-bottom:16px;text-shadow:0 2px 4px rgba(0,0,0,.12)">Our Mission</h1>
      <p style="font-size:1.25rem;opacity:.95;max-width:760px;margin:0 auto 28px">
        To empower creativity and bring color to every corner of the world through innovative products and meaningful connections
      </p>
      <div style="display:inline-block;padding:14px 28px;background:rgba(255,255,255,.18);border-radius:999px;border:2px solid rgba(255,255,255,.3);backdrop-filter:blur(8px)">
        <span style="font-weight:600">Where every page is a journey and every stroke sparks creativity ✨</span>
      </div>
    </div>
  </section>

  <!-- Fast Facts -->
  <section class="section m-facts">
    <div class="container m-facts-grid">
      <div class="m-fact m-f1">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="black" style="margin-bottom:16px">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <h3 style="font-size:2.2rem;font-weight:800;margin-bottom:6px">200+</h3>
        <p style="font-weight:600">International Brands</p>
      </div>

      <div class="m-fact m-f2">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff" style="margin-bottom:16px">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <h3 style="font-size:2.2rem;font-weight:800;margin-bottom:6px;color:#fff">3M+</h3>
        <p style="font-weight:600;color:#fff">Happy Customers</p>
      </div>

      <div class="m-fact m-f3">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff" style="margin-bottom:16px">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <h3 style="font-size:2.2rem;font-weight:800;margin-bottom:6px;color:#fff">50+</h3>
        <p style="font-weight:600;color:#fff">Countries Served</p>
      </div>

      <div class="m-fact m-f4">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff" style="margin-bottom:16px">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v17.5c0 .82-.68 1.5-1.5 1.5h-9c-.82 0-1.5-.68-1.5-1.5V4H4.5C3.22 4 2.15 4.65 1.74 5.55L0 4.27C.82 2.44 2.56 1 4.5 1h15c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
        </svg>
        <h3 style="font-size:2.2rem;font-weight:800;margin-bottom:6px;color:#fff">15+</h3>
        <p style="font-weight:600;color:#fff">Years of Excellence</p>
      </div>
    </div>
  </section>

  <!-- Purpose -->
  <section class="section m-purpose">
    <div class="container" style="max-width:820px;text-align:center">
      <h2 class="title-lg">Our Purpose</h2>
      <div class="m-divider"></div>
      <p class="muted" style="font-size:1.15rem;line-height:1.85;margin-bottom:16px">
        We believe creativity is the universal language that connects hearts across cultures and borders. Our mission goes beyond providing tools – we create experiences that inspire, products that delight, and communities that flourish.
      </p>
      <p style="font-size:1.1rem;line-height:1.7;color:#6aa3ff;font-style:italic">
        "Every stroke of imagination deserves the perfect canvas, and every dreamer deserves the tools to make magic happen."
      </p>
    </div>
  </section>

  <!-- Values -->
  <section class="section m-values">
    <div class="container">
      <h2 class="title-lg" style="text-align:center;margin-bottom:36px">Our Core Values</h2>
      <div class="m-values-grid">
        <div class="m-pillar m-pill-1">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="black" style="margin-bottom:16px">
            <path d="M9 11c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3-7C8.13 4 5 7.13 5 11c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-.26C17.81 15.47 19 13.38 19 11c0-3.87-3.13-7-7-7z"/>
          </svg>
          <h3 style="font-weight:700;margin-bottom:8px">Innovation First</h3>
          <p class="muted">We constantly push boundaries and explore new possibilities to deliver breakthrough products that exceed expectations and inspire creative expression.</p>
        </div>

        <div class="m-pillar m-pill-2">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="black" style="margin-bottom:16px">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.28-1.74-2.35-1.74-.48 0-.94.13-1.34.37L14 8.5V7c0-.55-.45-1-1-1s-1 .45-1 1v3.5c0 .28.11.53.29.71l2.71 2.71V22h2z"/>
          </svg>
          <h3 style="font-weight:700;margin-bottom:8px">Community Driven</h3>
          <p class="muted">We build meaningful relationships with our customers, partners, and communities, fostering collaboration and shared success in every interaction.</p>
        </div>

        <div class="m-pillar m-pill-3">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="black" style="margin-bottom:16px">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <h3 style="font-weight:700;margin-bottom:8px">Excellence Always</h3>
          <p class="muted">We are committed to the highest standards of quality in everything we do, from product design to customer service, ensuring every detail meets perfection.</p>
        </div>

        <div class="m-pillar m-pill-4">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="black" style="margin-bottom:16px">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.34c.48-.07.96-.17 1.34-.34C9 19 11 17 11 15V9a5.002 5.002 0 0 1 6-2z"/>
          </svg>
          <h3 style="font-weight:700;margin-bottom:8px">Planet Conscious</h3>
          <p class="muted">We take responsibility for our environmental impact through sustainable practices, eco-friendly materials, and initiatives that protect our planet for future generations.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Impact -->
  <section class="section m-impact">
    <div class="container" style="max-width:1000px">
      <h2 class="title-lg" style="text-align:center;margin-bottom:12px">Making a Real Impact</h2>
      <div class="m-divider" style="width:120px;background:linear-gradient(90deg,#8fe9d4,var(--primary))"></div>
      <p class="muted" style="text-align:center;margin-bottom:40px">Our commitment to positive change extends beyond business – we're building a better world, one creative soul at a time</p>

      <div class="m-impact-grid">
        <div class="m-impact-card">
          <div style="width:80px;height:80px;border-radius:50%;margin:0 auto 18px;background:linear-gradient(135deg,var(--primary),#ffd36b);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800">★</div>
          <h3 style="font-size:2rem;color:var(--primary-dark);margin-bottom:6px">98%</h3>
          <p class="muted" style="font-weight:600">Customer Satisfaction Rate</p>
        </div>
        <div class="m-impact-card">
          <div style="width:80px;height:80px;border-radius:50%;margin:0 auto 18px;background:linear-gradient(135deg,var(--lilac),#8f7bff);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800">🌿</div>
          <h3 style="font-size:2rem;color:#6c5ce7;margin-bottom:6px">2M+</h3>
          <p class="muted" style="font-weight:600">Trees Planted Through Partnerships</p>
        </div>
        <div class="m-impact-card">
          <div style="width:80px;height:80px;border-radius:50%;margin:0 auto 18px;background:linear-gradient(135deg,#8fe9d4,#00b894);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800">✓</div>
          <h3 style="font-size:2rem;color:#00b894;margin-bottom:6px">500K+</h3>
          <p class="muted" style="font-weight:600">Educational Materials Donated</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section m-cta">
    <div class="mesh"></div>
    <div class="m-cta-inner">
      <h2 class="title-xl" style="color:#fff;margin-bottom:16px">Join Our Creative Journey</h2>
      <p style="font-size:1.2rem;opacity:.95">
        Ready to be part of something extraordinary? Whether you're a creator, innovator, or simply someone who believes in the power of imagination, we'd love to have you on our team.
      </p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:28px">
        <a href="#careers" class="btn btn-ghost">Explore Careers</a>
        <a href="#newsletter" class="btn" style="background:#fff;color:var(--primary)">Get Updates</a>
      </div>
    </div>
  </section>

  <!-- Testimonial -->
  <section class="section m-testimonial">
    <div class="container" style="max-width:820px">
      <blockquote style="font-size:1.2rem;line-height:1.8" class="muted">
        "This company doesn't just sell products – they sell dreams, inspiration, and the tools to make creativity accessible to everyone. Their mission truly resonates in everything they do."
      </blockquote>
      <div style="display:flex;align-items:center;justify-content:center;gap:14px;margin-top:22px">
        <div class="m-avatar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <div style="text-align:left">
          <p style="font-weight:700">Sarah Chen</p>
          <p class="muted" style="font-size:.95rem">Creative Director, Art Studio</p>
        </div>
      </div>
    </div>
  </section>

</body>
        `,
      }}
    />
  );
}
