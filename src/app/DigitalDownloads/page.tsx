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
       <body style="font-family: 'Josefin Sans', sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #ffffff; color: #111111;">

    <!-- Main Container -->
    <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
        
        <!-- Page Header -->
        <section style="text-align: center; margin-bottom: 60px; padding: 40px 20px; background: linear-gradient(135deg, #fce4ec 0%, rgb(255, 140, 190) 100%); border-radius: 16px;">
            <h1 style="font-size: 48px; font-weight: 700; color: white; margin: 0 0 16px 0; letter-spacing: 0.02em;">Digital Downloads</h1>
            <p style="font-size: 20px; color:white; margin: 0 0 24px 0; max-width: 600px; margin-left: auto; margin-right: auto;">Instantly access and print your coloring pages. Choose the best format for your device or printer.</p>
            <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 24px; margin-top: 32px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                        <path d="M9 12l2 2 4-4"/>
                    </svg>
                    <span style="color: white; font-weight: 600;">Instant Access</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M21 15l-5-5L5 21"/>
                    </svg>
                    <span style="color: white; font-weight: 600;">High-Resolution Files</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <path d="M6 2v6h.01M6 8H2v6a2 2 0 002 2h16a2 2 0 002-2V8h-4"/>
                        <path d="M6 2a2 2 0 012 2v4a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z"/>
                    </svg>
                    <span style="color: white; font-weight: 600;">Printer-Friendly PDF</span>
                </div>
            </div>
        </section>

        <!-- Your Files Section -->
        <section style="margin-bottom: 60px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
                <h2 style="font-size: 36px; font-weight: 700; color: rgb(255, 140, 190); margin: 0;">Your Files</h2>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                    <select style="padding: 12px 16px; border: 2px solid #f8bbd9; border-radius: 8px; background: white; color: rgb(255, 140, 190); font-family: 'Josefin Sans', sans-serif; font-weight: 600; cursor: pointer;">
                        <option>All Formats</option>
                        <option>PDF</option>
                        <option>PNG</option>
                        <option>ZIP</option>
                    </select>
                    <select style="padding: 12px 16px; border: 2px solid #f8bbd9; border-radius: 8px; background: white; color: rgb(255, 140, 190); font-family: 'Josefin Sans', sans-serif; font-weight: 600; cursor: pointer;">
                        <option>Recently Purchased</option>
                        <option>A-Z</option>
                        <option>Z-A</option>
                    </select>
                </div>
            </div>

            <!-- File Cards Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
                
                <!-- File Card 1 -->
                <div style="background: white; border: 2px solid #f8bbd9; border-radius: 16px; padding: 24px; box-shadow: 0 4px 16px rgba(173, 20, 87, 0.1); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 24px rgba(173, 20, 87, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 16px rgba(173, 20, 87, 0.1)'">
                    <div style="height: 120px; background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2">
                            <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                            <path d="M2 2l7.586 7.586"/>
                            <circle cx="11" cy="11" r="2"/>
                        </svg>
                    </div>
                    <h3 style="font-size: 20px; font-weight: 700; color: rgb(255, 140, 190); margin: 0 0 8px 0;">Whimsical Garden – Adult Coloring</h3>
                    <p style="color: #666666; margin: 0 0 16px 0; font-size: 14px;">PDF (A4 & US Letter) • 18 MB • Updated May 2025</p>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <button style="background: rgb(255, 140, 190); color: white; border: none; padding: 14px 20px; border-radius: 8px; font-family: 'Josefin Sans', sans-serif; font-weight: 600; font-size: 16px; cursor: pointer; transition: background 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;" onmouseover="this.style.background='rgb(255, 140, 190)'" onmouseout="this.style.background='rgb(255, 140, 190)'">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            Download PDF (A4) • 18 MB
                        </button>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <button style="background: transparent; color: rgb(255, 140, 190); border: 2px solid rgb(255, 140, 190); padding: 10px 16px; border-radius: 6px; font-family: 'Josefin Sans', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; flex: 1; min-width: 120px;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='transparent'">Letter Size</button>
                            <button style="background: transparent; color: rgb(255, 140, 190); border: 2px solid rgb(255, 140, 190); padding: 10px 16px; border-radius: 6px; font-family: 'Josefin Sans', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; flex: 1; min-width: 120px;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='transparent'">Send Email</button>
                        </div>
                    </div>
                    <a href="#help" style="color: rgb(255, 140, 190); font-size: 14px; text-decoration: none; display: inline-block; margin-top: 12px; border-bottom: 1px solid transparent;" onmouseover="this.style.borderBottom='1px solid rgb(255, 140, 190)'" onmouseout="this.style.borderBottom='1px solid transparent'">Having trouble? See download tips →</a>
                </div>

                <!-- File Card 2 -->
                <div style="background: white; border: 2px solid #f8bbd9; border-radius: 16px; padding: 24px; box-shadow: 0 4px 16px rgba(173, 20, 87, 0.1); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 24px rgba(173, 20, 87, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 16px rgba(173, 20, 87, 0.1)'">
                    <div style="height: 120px; background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                        </svg>
                    </div>
                    <h3 style="font-size: 20px; font-weight: 700; color: rgb(255, 140, 190); margin: 0 0 8px 0;">Mandala Dreams Collection</h3>
                    <p style="color: #666666; margin: 0 0 16px 0; font-size: 14px;">PNG (300 DPI) & PDF Bundle • 24 MB • Updated April 2025</p>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <button style="background: rgb(255, 140, 190); color: white; border: none; padding: 14px 20px; border-radius: 8px; font-family: 'Josefin Sans', sans-serif; font-weight: 600; font-size: 16px; cursor: pointer; transition: background 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;" onmouseover="this.style.background='rgb(255, 140, 190)'" onmouseout="this.style.background='rgb(255, 140, 190)'">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            Download ZIP Bundle • 24 MB
                        </button>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <button style="background: transparent; color: rgb(255, 140, 190); border: 2px solid rgb(255, 140, 190); padding: 10px 16px; border-radius: 6px; font-family: 'Josefin Sans', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; flex: 1; min-width: 120px;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='transparent'">PNG Only</button>
                            <button style="background: transparent; color: rgb(255, 140, 190); border: 2px solid rgb(255, 140, 190); padding: 10px 16px; border-radius: 6px; font-family: 'Josefin Sans', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; flex: 1; min-width: 120px;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='transparent'">View Preview</button>
                        </div>
                    </div>
                </div>

                <!-- Empty State Card -->
                <div style="background: #fce4ec; border: 2px dashed #f8bbd9; border-radius: 16px; padding: 40px 24px; text-align: center; grid-column: 1 / -1;">
                  
                    <h3 style="font-size: 24px; font-weight: 700; color: rgb(255, 140, 190); margin: 0 0 12px 0;">No more files yet</h3>
                    <p style="color: #666666; margin: 0; font-size: 18px;">Your future purchases will appear here right after checkout.</p>
                </div>
            </div>
        </section>

        <!-- Printing Tips Section -->
        <section style="margin-bottom: 60px; background: #fce4ec; border-radius: 16px; padding: 40px 32px;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2">
                    <polyline points="6,9 6,2 18,2 18,9"/>
                    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                    <rect x="6" y="14" width="12" height="8"/>
                </svg>
                <h2 style="font-size: 32px; font-weight: 700; color: rgb(255, 140, 190); margin: 0;">Printing Tips</h2>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #f8bbd9;">
                    <h3 style="font-size: 20px; font-weight: 700; color: rgb(255, 140, 190); margin: 0 0 12px 0; display: flex; align-items: center; gap: 8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        Best Results
                    </h3>
                    <p style="color: #333333; margin: 0; font-size: 16px;">Print at 100% (Actual Size) on white 90-120 gsm paper. Enable margins to avoid clipping intricate lines.</p>
                </div>
                
                <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #f8bbd9;">
                    <h3 style="font-size: 20px; font-weight: 700; color: rgb(255, 140, 190); margin: 0 0 12px 0; display: flex; align-items: center; gap: 8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/>
                        </svg>
                        Save Ink
                    </h3>
                    <p style="color: #333333; margin: 0; font-size: 16px;">Select grayscale or draft mode in your printer settings to save ink while maintaining line quality.</p>
                </div>
            </div>
            
            <div style="margin-top: 24px; padding: 20px; background: white; border-radius: 12px; border-left: 4px solid rgb(255, 140, 190);">
                <p style="margin: 0; color: #333333; font-size: 16px;"><strong>Pro Tip:</strong> For thicker lines and better coloring experience, try printing on cardstock (180-220 gsm) paper.</p>
            </div>
        </section>

        <!-- Digital Coloring Section -->
        <section style="margin-bottom: 60px; background: linear-gradient(135deg, #ffffff 0%, #fce4ec 100%); border-radius: 16px; padding: 40px 32px; border: 2px solid #f8bbd9;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <h2 style="font-size: 32px; font-weight: 700; color: rgb(255, 140, 190); margin: 0;">Digital Coloring</h2>
            </div>
            
            <p style="font-size: 18px; color: #333333; margin: 0 0 24px 0; line-height: 1.7;">Use the PNG (300 DPI) files on your tablet with your favorite drawing app. For Procreate, import at original pixel size for best results.</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                <div style="display: flex; align-items: center; gap: 12px; padding: 16px; background: white; border-radius: 10px; border: 1px solid #f8bbd9;">
                    <div style="width: 40px; height: 40px; background: rgb(255, 140, 190); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                        </svg>
                    </div>
                    <div>
                        <div style="font-weight: 700; color: rgb(255, 140, 190); font-size: 16px;">Procreate</div>
                        <div style="color: #666666; font-size: 14px;">Import at original size</div>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 12px; padding: 16px; background: white; border-radius: 10px; border: 1px solid #f8bbd9;">
                    <div style="width: 40px; height: 40px; background: rgb(255, 140, 190); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                        </svg>
                    </div>
                    <div>
                        <div style="font-weight: 700; color: rgb(255, 140, 190); font-size: 16px;">Adobe Fresco</div>
                        <div style="color: #666666; font-size: 14px;">Vector & raster support</div>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 12px; padding: 16px; background: white; border-radius: 10px; border: 1px solid #f8bbd9;">
                    <div style="width: 40px; height: 40px; background: rgb(255, 140, 190); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                        </svg>
                    </div>
                    <div>
                        <div style="font-weight: 700; color: rgb(255, 140, 190); font-size: 16px;">Any Art App</div>
                        <div style="color: #666666; font-size: 14px;">300 DPI compatibility</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section style="margin-bottom: 60px;">
            <h2 style="font-size: 36px; font-weight: 700; color: rgb(255, 140, 190); margin: 0 0 32px 0; text-align: center;">Frequently Asked Questions</h2>
            
            <div style="max-width: 800px; margin: 0 auto;">
                <!-- FAQ Item 1 -->
                <div style="border: 2px solid #f8bbd9; border-radius: 12px; margin-bottom: 16px; overflow: hidden;">
                    <button style="width: 100%; background: white; border: none; padding: 24px; text-align: left; font-family: 'Josefin Sans', sans-serif; font-size: 18px; font-weight: 700; color: rgb(255, 140, 190); cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='white'" onclick="toggleFaq(this)">
                        How do I download my files?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2" style="transition: transform 0.3s;">
                            <polyline points="6,9 12,15 18,9"/>
                        </svg>
                    </button>
                    <div style="display: none; padding: 0 24px 24px 24px; background: white; border-top: 1px solid #f8bbd9;">
                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6;">After your purchase, you'll receive an email with download links that are valid for 30 days. You can also access your files from this page anytime by logging into your account. Simply click the "Download" button next to each file.</p>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div style="border: 2px solid #f8bbd9; border-radius: 12px; margin-bottom: 16px; overflow: hidden;">
                    <button style="width: 100%; background: white; border: none; padding: 24px; text-align: left; font-family: 'Josefin Sans', sans-serif; font-size: 18px; font-weight: 700; color: rgb(255, 140, 190); cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='white'" onclick="toggleFaq(this)">
                        My download link expired. Can you resend it?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2" style="transition: transform 0.3s;">
                            <polyline points="6,9 12,15 18,9"/>
                        </svg>
                    </button>
                    <div style="display: none; padding: 0 24px 24px 24px; background: white; border-top: 1px solid #f8bbd9;">
                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6;">No problem! Click the "Resend download email" button next to any expired file, or contact our support team. We'll generate a fresh download link and send it to your email address immediately. Links are valid for 30 days from the time they're generated.</p>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div style="border: 2px solid #f8bbd9; border-radius: 12px; margin-bottom: 16px; overflow: hidden;">
                    <button style="width: 100%; background: white; border: none; padding: 24px; text-align: left; font-family: 'Josefin Sans', sans-serif; font-size: 18px; font-weight: 700; color: rgb(255, 140, 190); cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='white'" onclick="toggleFaq(this)">
                        Which format should I pick: PDF or PNG?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2" style="transition: transform 0.3s;">
                            <polyline points="6,9 12,15 18,9"/>
                        </svg>
                    </button>
                    <div style="display: none; padding: 0 24px 24px 24px; background: white; border-top: 1px solid #f8bbd9;">
                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6;">Choose <strong>PDF</strong> for printing (available in A4 and US Letter sizes) as it maintains perfect quality and scales well. Choose <strong>PNG (300 DPI)</strong> for digital coloring on tablets or computers. Most purchases include both formats so you can use whichever works best for your needs.</p>
                    </div>
                </div>

                <!-- FAQ Item 4 -->
                <div style="border: 2px solid #f8bbd9; border-radius: 12px; margin-bottom: 16px; overflow: hidden;">
                    <button style="width: 100%; background: white; border: none; padding: 24px; text-align: left; font-family: 'Josefin Sans', sans-serif; font-size: 18px; font-weight: 700; color: rgb(255, 140, 190); cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='white'" onclick="toggleFaq(this)">
                        Can I get a refund for digital items?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2" style="transition: transform 0.3s;">
                            <polyline points="6,9 12,15 18,9"/>
                        </svg>
                    </button>
                    <div style="display: none; padding: 0 24px 24px 24px; background: white; border-top: 1px solid #f8bbd9;">
                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6;">Due to the instant, irrevocable access to digital files, all sales are final. However, if you encounter a technical issue with downloading or accessing your files, we're happy to help resolve it. Please contact our support team for assistance.</p>
                    </div>
                </div>

                <!-- FAQ Item 5 -->
                <div style="border: 2px solid #f8bbd9; border-radius: 12px; margin-bottom: 16px; overflow: hidden;">
                    <button style="width: 100%; background: white; border: none; padding: 24px; text-align: left; font-family: 'Josefin Sans', sans-serif; font-size: 18px; font-weight: 700; color: rgb(255, 140, 190); cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s;" onmouseover="this.style.background='#fce4ec'" onmouseout="this.style.background='white'" onclick="toggleFaq(this)">
                        Can I use these pages commercially?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 140, 190)" stroke-width="2" style="transition: transform 0.3s;">
                            <polyline points="6,9 12,15 18,9"/>
                        </svg>
                    </button>
                    <div style="display: none; padding: 0 24px 24px 24px; background: white; border-top: 1px solid #f8bbd9;">
                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6;">Our coloring pages are licensed for personal use only. You may print and color them for yourself, family, and friends. Commercial use, redistribution, or resale is not permitted. For commercial licensing options, please contact us directly.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Support Section -->
        <section style="background: linear-gradient(135deg, rgb(255, 140, 190) 0%, #f8bbd9 100%); color: white; border-radius: 16px; padding: 40px 32px; text-align: center;">
            <div style="display: flex; justify-content: center; margin-bottom: 20px;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
            </div>
            <h2 style="font-size: 32px; font-weight: 700; margin: 0 0 16px 0;">Still Need Help?</h2>
            <p style="font-size: 18px; margin: 0 0 32px 0; opacity: 0.95; max-width: 600px; margin-left: auto; margin-right: auto;">Our support team typically responds within 2-4 hours during business days. We're here to help with any download or technical issues.</p>
            
            <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
                <button style="background: white; color: rgb(255, 140, 190); border: none; padding: 16px 32px; border-radius: 8px; font-family: 'Josefin Sans', sans-serif; font-weight: 700; font-size: 16px; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; display: flex; align-items: center; gap: 8px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Contact Support
                </button>
                
                <button style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white; padding: 16px 32px; border-radius: 8px; font-family: 'Josefin Sans', sans-serif; font-weight: 700; font-size: 16px; cursor: pointer; transition: background 0.2s; display: flex; align-items: center; gap: 8px;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                        <polyline points="17,8 12,3 7,8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    Resend Download Email
                </button>
            </div>
        </section>
    </main>

    <script>
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            const isOpen = content.style.display !== 'none';
            
            if (isOpen) {
                content.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        }
    </script>
</body>
        `,
        }}
      />
   
  );
}
