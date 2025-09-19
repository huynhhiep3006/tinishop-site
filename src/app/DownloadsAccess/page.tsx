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
        // giữ nguyên markup gốc để tránh lỗi JSX do style string
        dangerouslySetInnerHTML={{
          __html: `
        <body style="margin: 0; padding: 0; font-family: 'Josefin Sans', sans-serif; background-color: #fef7f0; color: #1f2937;">

<!-- Main Content Section -->
<main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
    
    <!-- Hero Section -->
    <div style="text-align: center; margin-bottom: 60px;">
        <h1 style="font-size: 48px; font-weight: 700; color: #e11d48; margin: 0 0 16px 0; letter-spacing: -0.025em;">Downloads & Access</h1>
        <p style="font-size: 20px; color: #6b7280; margin: 0; max-width: 600px; margin: 0 auto; line-height: 1.5;">Access our complete library of resources, tools, and documentation. Everything you need to get started and stay up to date.</p>
    </div>

    <!-- Filter Tabs -->
   

    <!-- Downloads Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 24px; margin-bottom: 60px; " id="downloads-grid">
        
        <!-- Software Downloads -->
        <div class="download-card software" style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #fce7f3; transition: all 0.3s ease;">
            <div style="display: flex; align-items: center; margin-bottom: 16px;">
                <div style="width: 48px; height: 48px; background: #fce7f3; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">Desktop Application</h3>
                    <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-top: 8px; display: inline-block;">FREE</span>
                </div>
            </div>
            <p style="color: #6b7280; margin-bottom: 16px; line-height: 1.5;">Full-featured desktop application with all premium features included. Compatible with Windows, macOS, and Linux.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 14px; color: #9ca3af;">
                <span>Version 2.3.1</span>
                <span>45.2 MB</span>
                <span>Updated Nov 2024</span>
            </div>
            <div style="display: flex; gap: 12px;">
                <button style="flex: 1; background: #e11d48; color: white; border: none; padding: 12px 5px; border-radius: 8px;  font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='#be185d'" onmouseout="this.style.background='#e11d48'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download Now
                </button>
                <button style="background: #f9fafb; color: #6b7280; border: 2px solid #e5e7eb; padding: 12px 16px; border-radius: 8px;  font-weight: 500; cursor: pointer;">Release Notes</button>
            </div>
        </div>

        <!-- Documentation -->
        <div class="download-card docs" style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #fce7f3; transition: all 0.3s ease;">
            <div style="display: flex; align-items: center; margin-bottom: 16px;">
                <div style="width: 48px; height: 48px; background: #fce7f3; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                    </svg>
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">API Documentation</h3>
                    <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-top: 8px; display: inline-block;">FREE</span>
                </div>
            </div>
            <p style="color: #6b7280; margin-bottom: 16px; line-height: 1.5;">Complete API reference guide with examples, endpoints, and integration tutorials for developers.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 14px; color: #9ca3af;">
                <span>PDF Format</span>
                <span>2.1 MB</span>
                <span>Updated Oct 2024</span>
            </div>
            <div style="display: flex; gap: 12px;">
                <button style="flex: 1; background: #e11d48; color: white; border: none; padding: 12px 5px; border-radius: 8px;  font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='#be185d'" onmouseout="this.style.background='#e11d48'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download PDF
                </button>
                <button style="background: #f9fafb; color: #6b7280; border: 2px solid #e5e7eb; padding: 12px 16px; border-radius: 8px;  font-weight: 500; cursor: pointer;">View Online</button>
            </div>
        </div>

        <!-- Media Assets -->
        <div class="download-card media" style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #fce7f3; transition: all 0.3s ease;">
            <div style="display: flex; align-items: center; margin-bottom: 16px;">
                <div style="width: 48px; height: 48px; background: #fce7f3; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21,15 16,10 5,21"/>
                    </svg>
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">Brand Assets Pack</h3>
                    <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-top: 8px; display: inline-block;">FREE</span>
                </div>
            </div>
            <p style="color: #6b7280; margin-bottom: 16px; line-height: 1.5;">Logo files, brand guidelines, color palettes, and marketing materials in various formats.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 14px; color: #9ca3af;">
                <span>ZIP Archive</span>
                <span>12.5 MB</span>
                <span>Updated Sep 2024</span>
            </div>
            <div style="display: flex; gap: 12px;">
                <button style="flex: 1; background: #e11d48; color: white; border: none; padding: 12px 5px; border-radius: 8px;  font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='#be185d'" onmouseout="this.style.background='#e11d48'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download Assets
                </button>
                <button style="background: #f9fafb; color: #6b7280; border: 2px solid #e5e7eb; padding: 12px 16px; border-radius: 8px;  font-weight: 500; cursor: pointer;">Guidelines</button>
            </div>
        </div>

        <!-- Premium Template -->
        <div class="download-card templates" style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #fce7f3; transition: all 0.3s ease;">
            <div style="display: flex; align-items: center; margin-bottom: 16px;">
                <div style="width: 48px; height: 48px; background: #fce7f3; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                        <polyline points="13,2 13,9 20,9"/>
                    </svg>
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">Premium Templates</h3>
                    <span style="background: #fbbf24; color: #92400e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-top: 8px; display: inline-flex; align-items: center; gap: 4px;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <circle cx="12" cy="16" r="1"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        PREMIUM
                    </span>
                </div>
            </div>
            <p style="color: #6b7280; margin-bottom: 16px; line-height: 1.5;">Professional templates and design systems for rapid prototyping and development.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 14px; color: #9ca3af;">
                <span>Figma + Sketch</span>
                <span>25.7 MB</span>
                <span>Updated Nov 2024</span>
            </div>
            <div style="display: flex; gap: 12px;">
                <button style="flex: 1; background: #e11d48; color: white; border: none; padding: 12px 5px; border-radius: 8px;  font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='#be185d'" onmouseout="this.style.background='#e11d48'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    Sign In to Access
                </button>
                <button style="background: #f9fafb; color: #6b7280; border: 2px solid #e5e7eb; padding: 12px 16px; border-radius: 8px;  font-weight: 500; cursor: pointer;">Preview</button>
            </div>
        </div>

        <!-- SDK -->
        <div class="download-card software" style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #fce7f3; transition: all 0.3s ease;">
            <div style="display: flex; align-items: center; margin-bottom: 16px;">
                <div style="width: 48px; height: 48px; background: #fce7f3; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16,18 22,12 16,6"/>
                        <polyline points="8,6 2,12 8,18"/>
                    </svg>
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">Developer SDK</h3>
                    <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-top: 8px; display: inline-block;">FREE</span>
                </div>
            </div>
            <p style="color: #6b7280; margin-bottom: 16px; line-height: 1.5;">Complete software development kit with libraries, tools, and sample code for multiple platforms.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 14px; color: #9ca3af;">
                <span>NPM Package</span>
                <span>1.2 MB</span>
                <span>Updated Nov 2024</span>
            </div>
            <div style="display: flex; gap: 12px;">
                <button style="flex: 1; background: #e11d48; color: white; border: none; padding: 12px 5px; border-radius: 8px;  font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='#be185d'" onmouseout="this.style.background='#e11d48'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download SDK
                </button>
                <button style="background: #f9fafb; color: #6b7280; border: 2px solid #e5e7eb; padding: 12px 16px; border-radius: 8px;  font-weight: 500; cursor: pointer;">GitHub</button>
            </div>
        </div>

        <!-- User Guide -->
        <div class="download-card docs" style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #fce7f3; transition: all 0.3s ease;">
            <div style="display: flex; align-items: center; margin-bottom: 16px;">
                <div style="width: 48px; height: 48px; background: #fce7f3; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">Complete User Guide</h3>
                    <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-top: 8px; display: inline-block;">FREE</span>
                </div>
            </div>
            <p style="color: #6b7280; margin-bottom: 16px; line-height: 1.5;">Step-by-step tutorials, best practices, and troubleshooting guide for all features.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 14px; color: #9ca3af;">
                <span>PDF + HTML</span>
                <span>5.8 MB</span>
                <span>Updated Oct 2024</span>
            </div>
            <div style="display: flex; gap: 12px;">
                <button style="flex: 1; background: #e11d48; color: white; border: none; padding: 12px 5px; border-radius: 8px;  font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='#be185d'" onmouseout="this.style.background='#e11d48'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download Guide
                </button>
                <button style="background: #f9fafb; color: #6b7280; border: 2px solid #e5e7eb; padding: 12px 16px; border-radius: 8px;  font-weight: 500; cursor: pointer;">Quick Start</button>
            </div>
        </div>

    </div>

    <!-- Access Information Section -->
    <div style="background: white; border-radius: 20px; padding: 40px; margin-bottom: 40px; border: 1px solid #fce7f3;">
        <h2 style="font-size: 32px; font-weight: 600; color: #1f2937; margin-bottom: 24px; text-align: center;">Access Information</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 30px;">
            
            <div style="text-align: center; padding: 20px;">
                <div style="width: 64px; height: 64px; background: #dcfce7; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 12l2 2 4-4"/>
                        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.21 0 4.21.79 5.77 2.11"/>
                    </svg>
                </div>
                <h3 style="font-size: 20px; font-weight: 600; color: #1f2937; margin-bottom: 8px;">Free Resources</h3>
                <p style="color: #6b7280; margin: 0; line-height: 1.5;">Most downloads are completely free with no registration required. Just click and download.</p>
            </div>
            
            <div style="text-align: center; padding: 20px;">
                <div style="width: 64px; height: 64px; background: #fef3c7; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                <h3 style="font-size: 20px; font-weight: 600; color: #1f2937; margin-bottom: 8px;">Premium Access</h3>
                <p style="color: #6b7280; margin: 0; line-height: 1.5;">Some premium resources require a free account or subscription for access.</p>
            </div>
            
            <div style="text-align: center; padding: 20px;">
                <div style="width: 64px; height: 64px; background: #e0f2fe; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0369a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                </div>
                <h3 style="font-size: 20px; font-weight: 600; color: #1f2937; margin-bottom: 8px;">License Information</h3>
                <p style="color: #6b7280; margin: 0; line-height: 1.5;">All resources include clear licensing terms. Most are available under permissive licenses.</p>
            </div>
            
        </div>
        
        <div style="text-align: center; padding: 20px; background: #fef7f0; border-radius: 12px; border: 1px solid #fed7d7;">
            <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.5;">
                <strong>Need Help?</strong> Contact our support team if you have questions about downloads, licensing, or access requirements. We're here to help!
            </p>
        </div>
    </div>

</main>

<script>
// Filter functionality
function filterCategory(category) {
    const cards = document.querySelectorAll('.download-card');
    const buttons = document.querySelectorAll('button[id^="filter-"]');
    
    // Reset all button styles
    buttons.forEach(btn => {
        btn.style.background = '#f9fafb';
        btn.style.color = '#6b7280';
        btn.style.border = '2px solid #e5e7eb';
    });
    
    // Style active button
    const activeBtn = document.getElementById('filter-' + category);
    if (activeBtn) {
        activeBtn.style.background = '#e11d48';
        activeBtn.style.color = 'white';
        activeBtn.style.border = '2px solid #e11d48';
    }
    
    // Show/hide cards
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add hover effects to cards
document.querySelectorAll('.download-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        this.style.border = '1px solid #f9a8d4';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        this.style.border = '1px solid #fce7f3';
    });
});

// Add hover effects to filter buttons
document.querySelectorAll('button[id^="filter-"]').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        if (this.style.background !== 'rgb(225, 29, 72)') {
            this.style.background = '#e11d48';
            this.style.color = 'white';
            this.style.border = '2px solid #e11d48';
        }
    });
    
    btn.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            // Check if this is the currently active button
            const currentCategory = this.id.replace('filter-', '');
            const isActive = this.style.background === 'rgb(225, 29, 72)';
            
            if (!isActive) {
                this.style.background = '#f9fafb';
                this.style.color = '#6b7280';
                this.style.border = '2px solid #e5e7eb';
            }
        }
    });
});
</script>

</body>
        `,
        }}
      />
   
  );
}
