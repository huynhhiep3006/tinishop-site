// app/coloring/page.tsx
export const metadata = {
  title: "Simple Coloring Ideas for Kids",
  description:
    "Fun, calming, and skill-building coloring activities for kids of different ages.",
};

export default function Tips() {
  return (
    <div
      role="main"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}
      dangerouslySetInnerHTML={{
        __html: `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TiniBook - Creative Coloring for Kids</title>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --primary: rgb(255,180,210);        /* màu chủ đạo */
    --primary-dark: rgb(235,140,185);
    --primary-light: rgb(255,205,225);
    --ink: #2c3e50;
    --muted: #34495e;
    --surface: #fff;
    --bg: #fff9fb;                       /* nền tổng thể hơi hồng nhạt */
    --soft-gray: #f6f6f8;
    --mint: rgb(210,240,235);            /* màu phụ dịu mắt */
    --lilac: rgb(230,215,250);           /* màu phụ cùng tông pastel */
  }

  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Josefin Sans', sans-serif; line-height:1.6; color:var(--ink); background-color:var(--bg); }
  .container { max-width:1200px; margin:0 auto; padding:0 20px; }
  .section { padding:60px 0; }

  /* Hero */
  .hero{
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color:#fff; text-align:center; padding:80px 0;
  }
  .hero h1{ font-size:3.2rem; font-weight:700; margin-bottom:20px; text-shadow: 0 2px 8px rgba(0,0,0,.18); }
  .hero p{ font-size:1.2rem; margin:0 auto 40px; max-width:640px; font-weight:400; }

  .cta-button{
    display:inline-flex; align-items:center; justify-content:center;
    background: var(--primary);
    color:#fff; padding:14px 28px; border-radius:50px; font-weight:600; font-size:1.05rem;
    text-decoration:none; transition:.25s ease; box-shadow:0 8px 20px rgba(255,180,210,.35);
    min-height:44px; min-width:140px; margin:10px;
  }
  .cta-button:hover{ background:var(--primary-dark); transform:translateY(-2px); box-shadow:0 10px 26px rgba(235,140,185,.45); }
  .cta-secondary{ background: var(--mint); color:#124; box-shadow:0 8px 18px rgba(210,240,235,.45); }
  .cta-secondary:hover{ background: rgb(190,230,225); }

  /* Mission */
  .mission{ background: var(--surface); text-align:center; }
  .mission h2{ font-size:2.2rem; color:var(--ink); margin-bottom:24px; font-weight:600; }
  .mission-content{ max-width:800px; margin:0 auto; font-size:1.12rem; line-height:1.85; color:var(--muted); }

  /* Features */
  .features{ background: var(--soft-gray); }
  .features h2{ text-align:center; font-size:2.2rem; color:var(--ink); margin-bottom:42px; font-weight:600; }
  .features-grid{ display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:32px; margin-top:24px; }
  .feature-card{
    background: var(--surface); padding:32px; border-radius:20px; text-align:center;
    box-shadow:0 10px 30px rgba(0,0,0,.06); transition: transform .25s ease, box-shadow .25s ease;
    border:1px solid rgba(255,180,210,.35);
  }
  .feature-card:hover{ transform:translateY(-4px); box-shadow:0 16px 36px rgba(0,0,0,.08); }
  .feature-icon{ width:56px; height:56px; margin:0 auto 16px; display:block; }
  .feature-card h3{ font-size:1.35rem; color:var(--ink); margin-bottom:10px; font-weight:600; }
  .feature-card p{ color:#6b7b88; line-height:1.6; font-size:1rem; }

  /* Age groups */
  .age-groups{ background: var(--surface); }
  .age-groups h2{ text-align:center; font-size:2.2rem; color:var(--ink); margin-bottom:40px; font-weight:600; }
  .age-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:24px; }
  .age-card{
    padding:28px; border-radius:18px; text-align:center; color:#3a2a32; min-height:200px; display:flex; flex-direction:column; justify-content:center;
    background: linear-gradient(135deg, var(--primary-light) 0%, rgba(255,180,210,.9) 100%);
    border:1px solid rgba(255,180,210,.55);
  }
  .age-card:nth-child(2){ background: linear-gradient(135deg, var(--lilac) 0%, var(--primary-light) 100%); }
  .age-card:nth-child(3){ background: linear-gradient(135deg, #ffeef6 0%, var(--lilac) 100%); }
  .age-card h3{ font-size:1.7rem; margin-bottom:10px; font-weight:700; }
  .age-card p{ font-size:1.05rem; line-height:1.65; }

  /* Safety */
  .safety{ background: linear-gradient(180deg, #fff 0%, #fff3f8 100%); }
  .safety h2{ text-align:center; font-size:2.2rem; color:#c21f69; margin-bottom:22px; font-weight:700; }
  .safety-content{ max-width:820px; margin:0 auto; text-align:center; color:var(--muted); }
  .safety-badges{ display:flex; justify-content:center; flex-wrap:wrap; gap:16px; margin-top:28px; }
  .safety-badge{
    background:#fff; padding:14px 22px; border-radius:50px; display:flex; align-items:center; gap:10px;
    box-shadow:0 5px 14px rgba(255,180,210,.35); min-height:44px; border:1px solid rgba(255,180,210,.55);
  }
  .safety-badge svg{ width:22px; height:22px; }

  /* Team */
  .team{ background: var(--surface); text-align:center; }
  .team h2{ font-size:2.2rem; color:var(--ink); margin-bottom:20px; font-weight:600; }
  .team-content{ max-width:820px; margin:0 auto; font-size:1.12rem; line-height:1.85; color:var(--muted); }

  /* Final CTA */
  .final-cta{
    background: linear-gradient(135deg, var(--primary-light) 0%, #ffffff 100%);
    text-align:center; border-top:1px solid rgba(255,180,210,.45);
  }
  .final-cta h2{ font-size:2.2rem; color:var(--ink); margin-bottom:14px; font-weight:700; }
  .final-cta p{ font-size:1.1rem; margin-bottom:34px; color:var(--muted); }

  /* Responsive */
  @media (max-width:768px){
    .hero h1{ font-size:2.4rem; }
    .hero p{ font-size:1.05rem; }
    .section{ padding:42px 0; }
    .features-grid, .age-grid{ grid-template-columns:1fr; }
    .cta-button{ display:block; margin:10px auto; max-width:280px; }
  }
</style>
</head>
<body>
  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <h1>Welcome to TiniBook</h1>
      <p>Where creativity meets safety - the ultimate coloring platform designed specifically for children ages 3-10 and their families</p>
      <div>
        <a href="#features" class="cta-button">Start Coloring Now</a>
        <a href="#age-groups" class="cta-button cta-secondary">Explore by Age</a>
      </div>
    </div>
  </section>

  <!-- Mission -->
  <section class="mission section">
    <div class="container">
      <h2>Our Mission</h2>
      <div class="mission-content">
        <p>At TiniBook, we believe that every child deserves a safe, creative space to explore their imagination. We're dedicated to providing thousands of carefully curated coloring pages that inspire creativity, support learning, and bring families together through the joy of art.</p>
        <p>Our platform combines the timeless magic of coloring with modern technology, offering both digital coloring experiences and printable activities that work perfectly at home or in the classroom.</p>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="features section" id="features">
    <div class="container">
      <h2>What Makes TiniBook Special</h2>
      <div class="features-grid">
        <!-- giữ nguyên nội dung các thẻ feature, chỉ đổi màu bằng CSS ở trên -->
        <div class="feature-card">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9L17 13.74L18.18 20.74L12 17.77L5.82 20.74L7 13.74L2 9L8.91 8.26L12 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Thousands of Designs</h3>
          <p>Our ever-growing library features over 5,000 unique coloring pages, from simple shapes for toddlers to intricate patterns for older kids, all organized by age and theme.</p>
        </div>
        <div class="feature-card">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Safe & Ad-Free</h3>
          <p>Complete privacy protection with no targeted advertising, no data collection, and full parental controls. Your child's safety is our top priority.</p>
        </div>
        <div class="feature-card">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Color Online or Print</h3>
          <p>Choose your adventure! Color directly on screen with our intuitive digital tools, or print high-quality pages for traditional coloring with crayons and markers.</p>
        </div>
        <div class="feature-card">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6972C21.7033 16.0403 20.9975 15.5751 20.1995 15.3727" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3.37744C16.7975 3.57987 17.5033 4.04494 18.0094 4.70178C18.5155 5.35861 18.8 6.16902 18.8 7.00378C18.8 7.83853 18.5155 8.64894 18.0094 9.30578C17.5033 9.96261 16.7975 10.4277 16 10.6301" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Family Friendly</h3>
          <p>Built for the whole family with separate sections for different ages, parental dashboards, and activities that bring everyone together for quality screen time.</p>
        </div>
        <div class="feature-card">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Educational Themes</h3>
          <p>More than just fun - our coloring pages include educational content covering animals, nature, numbers, letters, seasons, and cultures from around the world.</p>
        </div>
        <div class="feature-card">
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 14H3L4 19H20L21 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Weekly Challenges</h3>
          <p>Keep creativity flowing with our weekly coloring challenges, seasonal themes, and special events that encourage kids to explore new artistic techniques.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Age Groups -->
  <section class="age-groups section" id="age-groups">
    <div class="container">
      <h2>Perfect for Every Age</h2>
      <div class="age-grid">
        <div class="age-card">
          <h3>Ages 3-5</h3>
          <p>Simple, large designs perfect for little hands. Big shapes, friendly animals, and basic concepts that help develop fine motor skills and color recognition.</p>
        </div>
        <div class="age-card">
          <h3>Ages 6-8</h3>
          <p>More detailed designs with educational elements. Learn about letters, numbers, and the world around them while having fun with intermediate complexity drawings.</p>
        </div>
        <div class="age-card">
          <h3>Ages 9-10</h3>
          <p>Intricate patterns and complex scenes that challenge artistic skills. Perfect for developing patience, focus, and advanced creative expression.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Safety -->
  <section class="safety section">
    <div class="container">
      <h2>Your Child's Safety is Our Priority</h2>
      <div class="safety-content">
        <p>We understand that parents need peace of mind when their children are online. TiniBook is built with child safety at its core, featuring robust privacy protections and family-friendly policies that exceed industry standards.</p>
        <div class="safety-badges">
          <div class="safety-badge">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22S8 18 8 13V6L12 4L16 6V13C16 18 12 22 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>COPPA Compliant</span>
          </div>
          <div class="safety-badge">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>No Data Tracking</span>
          </div>
          <div class="safety-badge">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="16" r="1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Parental Controls</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="team section">
    <div class="container">
      <h2>Meet Our Team</h2>
      <div class="team-content">
        <p>TiniBook was created by a passionate team of educators, parents, and designers who understand the importance of nurturing creativity in children. We combine decades of experience in child development, digital safety, and artistic education to create the best possible coloring experience.</p>
        <p>Our content is carefully reviewed by child development specialists and education professionals to ensure every coloring page supports healthy development and age-appropriate learning.</p>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="final-cta section">
    <div class="container">
      <h2>Ready to Start Creating?</h2>
      <p>Join thousands of families who have made TiniBook their go-to destination for safe, creative fun!</p>
      <div>
        <a href="#" class="cta-button">Browse All Coloring Pages</a>
        <a href="#" class="cta-button cta-secondary">Create Free Account</a>
      </div>
    </div>
  </section>
</body>
</html>
        `,
      }}
    />
  );
}
