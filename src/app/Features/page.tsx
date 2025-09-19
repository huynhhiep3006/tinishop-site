// app/coloring/page.tsx
export const metadata = {
  title: "Creative Features - TiniBook",
  description:
    "Explore delightful, kid-safe creative features—styled in TiniBook’s soft pink palette.",
};

export default function Tips() {
  return (
    <div
      role="main"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}
      dangerouslySetInnerHTML={{
        __html: `
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Creative Features - TiniBook</title>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --primary: rgb(255,180,210);         /* hồng chủ đạo */
      --primary-dark: rgb(235,140,185);
      --primary-light: rgb(255,210,228);
      --bg: #fff9fb;                       /* nền tổng thể */
      --ink: #111111;
      --muted: #555;
      --card: rgba(255,255,255,.9);
      --ring: rgba(255,180,210,.45);
      --accent-mint: rgb(210,240,235);
      --accent-lilac: rgb(230,215,250);
      --accent-sky:  rgb(214,238,255);
      --shadow-1: 0 8px 24px rgba(0,0,0,.10);
      --shadow-2: 0 16px 48px rgba(0,0,0,.15);
    }

    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Josefin Sans',sans-serif;background:var(--bg);color:var(--ink);line-height:1.6}

    .container{max-width:1200px;margin:0 auto;padding:0 20px}
    .section{padding:80px 20px}
    .title-xl{font-size:56px;font-weight:700;letter-spacing:2px;text-transform:uppercase}
    .title-lg{font-size:42px;font-weight:700;letter-spacing:2px;text-transform:uppercase}
    .lead{font-size:24px;color:#333;max-width:640px;margin:0 auto}
    .muted{color:var(--muted)}

    .btn{
      appearance:none;border:none;border-radius:999px;padding:16px 36px;
      font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;
      transition:.25s ease; box-shadow: var(--shadow-1);
    }
    .btn-primary{background:var(--primary);color:#fff}
    .btn-primary:hover{background:var(--primary-dark);transform:translateY(-2px);box-shadow:var(--shadow-2)}
    .btn-ghost{background:transparent;color:#fff;border:2px solid #fff}
    .btn-ghost:hover{background:#fff;color:var(--primary)}

    .hero{
      background:linear-gradient(135deg,var(--primary) 0%, var(--primary-dark) 60%, var(--accent-lilac) 100%);
      color:#fff;text-align:center;position:relative;overflow:hidden
    }
    .hero .bubble{position:absolute;border-radius:50%;opacity:.7}
    .b1{top:18px;left:50px;width:60px;height:60px;background:#ffe66d}
    .b2{top:100px;right:80px;width:40px;height:40px;background:var(--accent-mint)}
    .b3{bottom:60px;left:100px;width:50px;height:50px;background:var(--accent-sky)}

    .stats{background:rgba(255,255,255,.5);text-align:center}
    .stats-grid{display:flex;justify-content:space-around;flex-wrap:wrap;gap:40px}
    .stat h3{font-size:48px;font-weight:700;margin-bottom:6px}
    .stat p{font-size:18px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#666}

    .features{
      background:linear-gradient(135deg, var(--primary-light) 0%, #ffdcd0 100%)
    }
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:40px}
    .card{
      background:var(--card);border-radius:24px;padding:40px;text-align:center;
      box-shadow:var(--shadow-1);border:1px solid var(--ring);transition:.25s ease
    }
    .card:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
    .icon{margin-bottom:16px}
    .card h3{font-size:24px;font-weight:700;margin-bottom:12px;letter-spacing:1px;text-transform:uppercase}
    .card p{color:var(--muted);margin-bottom:20px}

    .madefor{
      background:linear-gradient(135deg, var(--accent-mint) 0%, var(--accent-sky) 100%)
    }
    .badge{width:80px;height:80px;border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700}

    .layers{
      background:linear-gradient(135deg, var(--accent-lilac) 0%, var(--primary-light) 100%)
    }
    .split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
    .mini{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:26px 0 36px}
    .mini .tile{background:var(--card);padding:20px;border-radius:16px;border:1px solid var(--ring)}
    .layer-stack{background:var(--card);border-radius:24px;padding:40px;text-align:center;border:1px solid var(--ring)}
    .layer{height:60px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:600}
    .l-bg{background:linear-gradient(45deg,#ffe66d,#ffd1e3)}
    .l-char{background:linear-gradient(45deg,var(--primary),var(--primary-dark));color:#fff}
    .l-eff{background:linear-gradient(45deg,var(--accent-mint),var(--accent-sky))}
    .l-text{background:linear-gradient(45deg,var(--accent-lilac),#d8c7ff)}

    .export{
      background:linear-gradient(135deg,#fff5fb 0%, var(--primary-light) 100%);text-align:center
    }
    .export .opt{background:var(--card);border-radius:20px;padding:32px;border:1px solid var(--ring)}

    .testi{
      background:linear-gradient(135deg, var(--accent-lilac) 0%, var(--accent-mint) 100%);text-align:center
    }

    .final{
      background:linear-gradient(135deg,var(--primary) 0%, var(--primary-dark) 55%, var(--accent-lilac) 100%);
      color:#fff;text-align:center
    }

    /* Responsive */
    @media (max-width: 960px){
      .title-xl{font-size:40px}
      .title-lg{font-size:32px}
      .split{grid-template-columns:1fr}
    }
  </style>
</head>
<body>

  <!-- Hero -->
  <section class="section hero">
    <span class="bubble b1"></span>
    <span class="bubble b2"></span>
    <span class="bubble b3"></span>

    <div class="container">
      <h1 class="title-xl">Lost in a World of Features</h1>
      <p class="lead" style="margin-top:16px;margin-bottom:32px">
        "Immerse yourself in creativity where every tool is a journey and every feature sparks your imagination" ✨
      </p>
      <button class="btn btn-primary">Discover Features</button>
    </div>
  </section>

  <!-- Stats -->
  <section class="section stats">
    <div class="container stats-grid">
      <div class="stat"><h3>200+</h3><p>Creative Tools</p></div>
      <div class="stat"><h3>2,000+</h3><p>Magic Features</p></div>
      <div class="stat"><h3>3,000+</h3><p>Happy Creators</p></div>
    </div>
  </section>

  <!-- Main Feature Grid -->
  <section class="section features">
    <div class="container">
      <h2 class="title-lg" style="text-align:center;margin-bottom:48px">Unleash Your Creativity</h2>

      <div class="grid">
        <!-- 1 -->
        <div class="card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 6.26L16 4.46L15.26 8L19 7.74L17.2 11L21.74 10.26L18.54 13.09L22 15L17.46 16.91L19.54 20L15 18.2L16.26 22L12 19.74L7.74 22L9 18.2L4.46 20L6.54 16.91L2 15L5.46 13.09L2.26 10.26L6 11L4.2 7.74L8 8L7.26 4.46L10 6.26L12 2Z" stroke="#111" stroke-width="2"/>
            </svg>
          </div>
          <h3>Magic Brushes</h3>
          <p>Paint with playfulness using 50K+ strokes that feel real. Oil, watercolor, chalk — tweak flow, grain, and jitter to match your style.</p>
          <button class="btn btn-primary">Try the Brushes</button>
        </div>

        <!-- 2 -->
        <div class="card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="#111" stroke-width="2"/>
              <path d="M14 2v6h6" stroke="#111" stroke-width="2"/>
              <path d="M16 13H8M16 17H8M10 9H8" stroke="#111" stroke-width="2"/>
            </svg>
          </div>
          <h3>Backgrounds, Begone!</h3>
          <p>Cut subjects in one tap with pixel-perfect edges. AI-powered precision that makes your creations ready to post instantly.</p>
          <button class="btn btn-primary">Remove Background</button>
        </div>

        <!-- 3 -->
        <div class="card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#111" stroke-width="2"/>
              <circle cx="8" cy="9" r="1" fill="#111"/>
              <circle cx="16" cy="9" r="1" fill="#111"/>
              <path d="M7 15c1.5 2 3.5 2 5 2s3.5 0 5-2" stroke="#111" stroke-width="2"/>
            </svg>
          </div>
          <h3>Animate in a Heartbeat</h3>
          <p>Bring drawings to life with onion skinning and timeline scrubbing. Turn doodles into delightful motion effortlessly.</p>
          <button class="btn btn-primary">Start Animating</button>
        </div>

        <!-- 4 -->
        <div class="card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#111" stroke-width="2"/>
              <circle cx="8.5" cy="7" r="4" stroke="#111" stroke-width="2"/>
              <path d="M23 21v-2c0-1.9-1.23-3.5-3-3.87" stroke="#111" stroke-width="2"/>
              <path d="M16 3.13c1.74.43 3 1.99 3 3.87s-1.26 3.44-3 3.87" stroke="#111" stroke-width="2"/>
            </svg>
          </div>
          <h3>Collaborative Canvas</h3>
          <p>Create together in real-time. Share templates, review work live, and celebrate creativity with friends and classmates.</p>
          <button class="btn btn-primary">Start Collaborating</button>
        </div>

        <!-- 5 -->
        <div class="card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2 2 7l10 5 10-5-10-5Z" stroke="#111" stroke-width="2"/>
              <path d="m2 12 10 5 10-5" stroke="#111" stroke-width="2"/>
              <path d="m2 17 10 5 10-5" stroke="#111" stroke-width="2"/>
            </svg>
          </div>
          <h3>AI Palette Match</h3>
          <p>Smart color harmony that learns from your style. Generate perfect palettes that complement your artistic vision automatically.</p>
          <button class="btn btn-primary">Match Colors</button>
        </div>

        <!-- 6 -->
        <div class="card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3h6a4 4 0 0 1 4 4v14c0-.8-.32-1.56-.88-2.12A3 3 0 0 0 9 18H2V3Z" stroke="#111" stroke-width="2"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14c0-.8.32-1.56.88-2.12A3 3 0 0 1 15 18h7V3Z" stroke="#111" stroke-width="2"/>
            </svg>
          </div>
          <h3>Teach, Share, Celebrate</h3>
          <p>Lock focus, share templates, and review work live — built for teachers with classroom-friendly controls and safe sharing.</p>
          <button class="btn btn-primary">Start a Class</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Made For -->
  <section class="section madefor">
    <div class="container" style="text-align:center">
      <h2 class="title-lg" style="margin-bottom:48px">Made for All Creators</h2>
      <div class="grid">
        <div class="card" style="text-align:center">
          <div class="badge" style="background:var(--primary)">S</div>
          <h3>Artists</h3>
          <p class="muted">Professional-grade brushes and unlimited layers with pro-blend modes. Create masterpieces that feel authentic and alive.</p>
        </div>
        <div class="card" style="text-align:center">
          <div class="badge" style="background:#ffe66d;color:#111">D</div>
          <h3>Designers</h3>
          <p class="muted">Smart templates, AI palettes, and instant export options. Design workflows that boost productivity and creativity.</p>
        </div>
        <div class="card" style="text-align:center">
          <div class="badge" style="background:var(--accent-mint);color:#111">E</div>
          <h3>Educators</h3>
          <p class="muted">Classroom mode with safe sharing, student templates, and live collaboration tools. Perfect for inspiring the next generation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Layers & Blending -->
  <section class="section layers">
    <div class="container">
      <div class="split">
        <div>
          <h2 class="title-lg" style="margin-bottom:16px">Layers & Blending Magic</h2>
          <p style="font-size:20px" class="muted">Unlimited layers with pro-grade blend modes. Organize with groups, masks, and smart folders that make complex artwork feel simple.</p>

          <div class="mini">
            <div class="tile">
              <div style="font-size:28px;font-weight:800;color:var(--primary);margin-bottom:6px">∞</div>
              <div style="font-weight:700">Unlimited Layers</div>
            </div>
            <div class="tile">
              <div style="font-size:28px;font-weight:800;color:var(--primary);margin-bottom:6px">50+</div>
              <div style="font-weight:700">Blend Modes</div>
            </div>
          </div>

          <button class="btn btn-primary">Explore Layers</button>
        </div>

        <div class="layer-stack">
          <div class="layer l-bg">Background Layer</div>
          <div class="layer l-char">Character Layer</div>
          <div class="layer l-eff">Effects Layer</div>
          <div class="layer l-text">Text Layer</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Export & Share -->
  <section class="section export">
    <div class="container">
      <h2 class="title-lg" style="margin-bottom:14px">Export & Share Anywhere</h2>
      <p class="muted" style="font-size:20px;max-width:640px;margin:0 auto 48px">From PNG to MP4 — optimize in one click, publish anywhere. Your creativity deserves to be seen by the world.</p>

      <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:48px">
        <div class="opt"><div style="font-size:32px;margin-bottom:10px">🖼️</div><h4 style="font-weight:700">High-Res Images</h4><p class="muted" style="font-size:14px">PNG, JPG, SVG</p></div>
        <div class="opt"><div style="font-size:32px;margin-bottom:10px">🎬</div><h4 style="font-weight:700">Video Animations</h4><p class="muted" style="font-size:14px">MP4, GIF, WebM</p></div>
        <div class="opt"><div style="font-size:32px;margin-bottom:10px">📱</div><h4 style="font-weight:700">Social Ready</h4><p class="muted" style="font-size:14px">Instagram, TikTok, YouTube</p></div>
        <div class="opt"><div style="font-size:32px;margin-bottom:10px">🖨️</div><h4 style="font-weight:700">Print Quality</h4><p class="muted" style="font-size:14px">300 DPI, CMYK</p></div>
      </div>

      <button class="btn btn-primary" style="padding:18px 40px">Start Creating Today</button>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="section testi">
    <div class="container">
      <h2 class="title-lg" style="text-align:center;margin-bottom:48px">Why Creators Love Us</h2>
      <div class="grid">
        <div class="card">
          <div class="badge" style="background:var(--primary)">S</div>
          <p class="muted" style="font-style:italic;margin-bottom:16px">"The brushes feel so real! My digital watercolors finally look like the real thing. This app has transformed my art completely."</p>
          <h4 style="font-weight:700">Sarah Chen</h4>
          <p class="muted" style="font-size:14px">Digital Artist</p>
        </div>
        <div class="card">
          <div class="badge" style="background:#ffe66d;color:#111">M</div>
          <p class="muted" style="font-style:italic;margin-bottom:16px">"My students love the collaborative features. We can all work together in real-time, and it's made art class so much more engaging!"</p>
          <h4 style="font-weight:700">Ms. Rodriguez</h4>
          <p class="muted" style="font-size:14px">Art Teacher</p>
        </div>
        <div class="card">
          <div class="badge" style="background:var(--accent-mint);color:#111">A</div>
          <p class="muted" style="font-style:italic;margin-bottom:16px">"The one-tap background remover is pure magic! What used to take hours now takes seconds. My workflow is so much faster."</p>
          <h4 style="font-weight:700">Alex Thompson</h4>
          <p class="muted" style="font-size:14px">Graphic Designer</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="section final">
    <div class="container" style="max-width:800px">
      <h2 class="title-xl" style="margin-bottom:16px">Ready to Create Magic?</h2>
      <p class="lead" style="color:#fff;opacity:.9;margin-bottom:36px">Join thousands of creators who are already bringing their imagination to life with our colorful world of features.</p>

      <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap">
        <button class="btn" style="background:#fff;color:var(--primary)">Start Creating Free</button>
        <button class="btn btn-ghost">Watch Demo</button>
      </div>

      <div style="margin-top:48px;display:flex;justify-content:center;gap:48px;opacity:.9;flex-wrap:wrap">
        <div><div style="font-size:24px;font-weight:800;margin-bottom:4px">Free Forever</div><div style="font-size:14px">No Credit Card Required</div></div>
        <div><div style="font-size:24px;font-weight:800;margin-bottom:4px">50K+ Users</div><div style="font-size:14px">Join the Community</div></div>
        <div><div style="font-size:24px;font-weight:800;margin-bottom:4px">24/7 Support</div><div style="font-size:14px">We're Here to Help</div></div>
      </div>
    </div>
  </section>

</body>
        `,
      }}
    />
  );
}
