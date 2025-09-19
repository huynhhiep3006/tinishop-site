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
        <body style="font-family: 'Josefin Sans', sans-serif; margin: 0; padding: 0; background-color: #fafafa; line-height: 1.6; color: #333;">

    <!-- Hero Section -->
   

    <!-- Quick Help Categories -->
    <section style="padding: 80px 20px; background: white;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; font-size: 2.5rem; color: #333; margin: 0 0 60px 0; font-weight: 600;">
                Popular Help Topics
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                <!-- Getting Started -->
                <div style="background: white; border-radius: 16px; padding: 40px 30px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid #f0f0f0; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 12px 40px rgba(255,105,180,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
                    <div style="width: 80px; height: 80px; background: rgba(255,105,180,0.1); border-radius: 50%; margin: 0 auto 30px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" fill="#ff69b4" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    <h3 style="color: #333; font-size: 1.4rem; margin: 0 0 15px 0; font-weight: 600;">Getting Started</h3>
                    <p style="color: #666; margin: 0 0 20px 0; font-size: 1rem;">Learn the basics and set up your account in just a few steps</p>
                    <a href="#" style="color: #ff69b4; text-decoration: none; font-weight: 500; font-size: 1rem;">View Articles →</a>
                </div>

                <!-- Account & Billing -->
                <div style="background: white; border-radius: 16px; padding: 40px 30px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid #f0f0f0; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 12px 40px rgba(255,105,180,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
                    <div style="width: 80px; height: 80px; background: rgba(255,105,180,0.1); border-radius: 50%; margin: 0 auto 30px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" fill="#ff69b4" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                    </div>
                    <h3 style="color: #333; font-size: 1.4rem; margin: 0 0 15px 0; font-weight: 600;">Account & Billing</h3>
                    <p style="color: #666; margin: 0 0 20px 0; font-size: 1rem;">Manage your account settings, subscriptions, and billing information</p>
                    <a href="#" style="color: #ff69b4; text-decoration: none; font-weight: 500; font-size: 1rem;">View Articles →</a>
                </div>

                <!-- Technical Support -->
                <div style="background: white; border-radius: 16px; padding: 40px 30px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid #f0f0f0; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 12px 40px rgba(255,105,180,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
                    <div style="width: 80px; height: 80px; background: rgba(255,105,180,0.1); border-radius: 50%; margin: 0 auto 30px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" fill="#ff69b4" viewBox="0 0 24 24">
                            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.68,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                        </svg>
                    </div>
                    <h3 style="color: #333; font-size: 1.4rem; margin: 0 0 15px 0; font-weight: 600;">Technical Support</h3>
                    <p style="color: #666; margin: 0 0 20px 0; font-size: 1rem;">Troubleshooting guides and technical assistance for common issues</p>
                    <a href="#" style="color: #ff69b4; text-decoration: none; font-weight: 500; font-size: 1rem;">View Articles →</a>
                </div>

                <!-- Orders & Shipping -->
                <div style="background: white; border-radius: 16px; padding: 40px 30px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid #f0f0f0; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 12px 40px rgba(255,105,180,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
                    <div style="width: 80px; height: 80px; background: rgba(255,105,180,0.1); border-radius: 50%; margin: 0 auto 30px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" fill="#ff69b4" viewBox="0 0 24 24">
                            <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                        </svg>
                    </div>
                    <h3 style="color: #333; font-size: 1.4rem; margin: 0 0 15px 0; font-weight: 600;">Orders & Shipping</h3>
                    <p style="color: #666; margin: 0 0 20px 0; font-size: 1rem;">Track your orders, shipping information, and return policies</p>
                    <a href="#" style="color: #ff69b4; text-decoration: none; font-weight: 500; font-size: 1rem;">View Articles →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section style="padding: 80px 20px; background: #fafafa;">
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="text-align: center; font-size: 2.5rem; color: #333; margin: 0 0 60px 0; font-weight: 600;">
                Frequently Asked Questions
            </h2>
            
            <!-- FAQ Items -->
            <div style="space-y: 20px;">
                <!-- FAQ Item 1 -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); margin-bottom: 20px; overflow: hidden;">
                    <button onclick="toggleFAQ(this)" style="width: 100%; padding: 30px; text-align: left; border: none; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-family: 'Josefin Sans', sans-serif;">
                        <h3 style="color: #333; font-size: 1.2rem; margin: 0; font-weight: 600;">How do I reset my password?</h3>
                        <svg width="24" height="24" fill="#666" viewBox="0 0 24 24" style="transition: transform 0.3s ease;">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                    </button>
                    <div style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                        <div style="padding: 0 30px 30px 30px; color: #666; line-height: 1.6;">
                            To reset your password, click on the "Forgot Password" link on the login page. Enter your email address and we'll send you a secure link to create a new password. The reset link will expire after 24 hours for security purposes.
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); margin-bottom: 20px; overflow: hidden;">
                    <button onclick="toggleFAQ(this)" style="width: 100%; padding: 30px; text-align: left; border: none; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-family: 'Josefin Sans', sans-serif;">
                        <h3 style="color: #333; font-size: 1.2rem; margin: 0; font-weight: 600;">What are your shipping options?</h3>
                        <svg width="24" height="24" fill="#666" viewBox="0 0 24 24" style="transition: transform 0.3s ease;">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                    </button>
                    <div style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                        <div style="padding: 0 30px 30px 30px; color: #666; line-height: 1.6;">
                            We offer multiple shipping options: Standard shipping (5-7 business days), Express shipping (2-3 business days), and Overnight delivery (next business day). Free standard shipping is available on orders over $50.
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); margin-bottom: 20px; overflow: hidden;">
                    <button onclick="toggleFAQ(this)" style="width: 100%; padding: 30px; text-align: left; border: none; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-family: 'Josefin Sans', sans-serif;">
                        <h3 style="color: #333; font-size: 1.2rem; margin: 0; font-weight: 600;">Can I cancel my subscription anytime?</h3>
                        <svg width="24" height="24" fill="#666" viewBox="0 0 24 24" style="transition: transform 0.3s ease;">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                    </button>
                    <div style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                        <div style="padding: 0 30px 30px 30px; color: #666; line-height: 1.6;">
                            Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access to your subscription benefits until the end of your current billing period.
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 4 -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); margin-bottom: 20px; overflow: hidden;">
                    <button onclick="toggleFAQ(this)" style="width: 100%; padding: 30px; text-align: left; border: none; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-family: 'Josefin Sans', sans-serif;">
                        <h3 style="color: #333; font-size: 1.2rem; margin: 0; font-weight: 600;">How do I contact customer support?</h3>
                        <svg width="24" height="24" fill="#666" viewBox="0 0 24 24" style="transition: transform 0.3s ease;">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                    </button>
                    <div style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                        <div style="padding: 0 30px 30px 30px; color: #666; line-height: 1.6;">
                            You can reach our customer support team through multiple channels: Live chat (available 24/7), email at support@company.com, or by submitting a ticket through the contact form below. Our average response time is under 2 hours.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section style="padding: 80px 20px; background: white;">
        <div style="max-width: 800px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 60px;">
                <h2 style="font-size: 2.5rem; color: #333; margin: 0 0 20px 0; font-weight: 600;">
                    Still Need Help?
                </h2>
                <p style="color: #666; font-size: 1.2rem; margin: 0;">
                    Can't find what you're looking for? Our support team is here to help you.
                </p>
            </div>

            <form style="background: #fafafa; padding: 50px; border-radius: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.08);">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                    <div>
                        <label style="display: block; color: #333; font-weight: 500; margin-bottom: 10px; font-size: 1rem;">First Name *</label>
                        <input type="text" required style="width: 100%; padding: 16px 20px; border: 2px solid #e0e0e0; border-radius: 12px; font-size: 16px; transition: border-color 0.3s ease; font-family: 'Josefin Sans', sans-serif; box-sizing: border-box;" onfocus="this.style.borderColor='#ff69b4'" onblur="this.style.borderColor='#e0e0e0'">
                    </div>
                    <div>
                        <label style="display: block; color: #333; font-weight: 500; margin-bottom: 10px; font-size: 1rem;">Last Name *</label>
                        <input type="text" required style="width: 100%; padding: 16px 20px; border: 2px solid #e0e0e0; border-radius: 12px; font-size: 16px; transition: border-color 0.3s ease; font-family: 'Josefin Sans', sans-serif; box-sizing: border-box;" onfocus="this.style.borderColor='#ff69b4'" onblur="this.style.borderColor='#e0e0e0'">
                    </div>
                </div>

                <div style="margin-bottom: 30px;">
                    <label style="display: block; color: #333; font-weight: 500; margin-bottom: 10px; font-size: 1rem;">Email Address *</label>
                    <input type="email" required style="width: 100%; padding: 16px 20px; border: 2px solid #e0e0e0; border-radius: 12px; font-size: 16px; transition: border-color 0.3s ease; font-family: 'Josefin Sans', sans-serif; box-sizing: border-box;" onfocus="this.style.borderColor='#ff69b4'" onblur="this.style.borderColor='#e0e0e0'">
                </div>

                <div style="margin-bottom: 30px;">
                    <label style="display: block; color: #333; font-weight: 500; margin-bottom: 10px; font-size: 1rem;">Subject *</label>
                    <select required style="width: 100%; padding: 16px 20px; border: 2px solid #e0e0e0; border-radius: 12px; font-size: 16px; transition: border-color 0.3s ease; font-family: 'Josefin Sans', sans-serif; box-sizing: border-box; background: white;" onfocus="this.style.borderColor='#ff69b4'" onblur="this.style.borderColor='#e0e0e0'">
                        <option value="">Select a topic...</option>
                        <option value="account">Account & Login Issues</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="technical">Technical Support</option>
                        <option value="shipping">Orders & Shipping</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div style="margin-bottom: 40px;">
                    <label style="display: block; color: #333; font-weight: 500; margin-bottom: 10px; font-size: 1rem;">Message *</label>
                    <textarea required rows="6" placeholder="Please describe your issue in detail..." style="width: 100%; padding: 16px 20px; border: 2px solid #e0e0e0; border-radius: 12px; font-size: 16px; transition: border-color 0.3s ease; resize: vertical; font-family: 'Josefin Sans', sans-serif; box-sizing: border-box;" onfocus="this.style.borderColor='#ff69b4'" onblur="this.style.borderColor='#e0e0e0'"></textarea>
                </div>

                <button type="submit" style="background: linear-gradient(135deg, #ff69b4, #ff91c7); color: white; border: none; padding: 18px 40px; border-radius: 50px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; font-family: 'Josefin Sans', sans-serif; box-shadow: 0 4px 20px rgba(255,105,180,0.3);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 25px rgba(255,105,180,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(255,105,180,0.3)'">
                    Send Message
                </button>
            </form>
        </div>
    </section>

    <!-- Support Stats -->
    <section style="padding: 80px 20px; background: #f8f9fa;">
        <div style="max-width: 1000px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: center;">
                <div>
                    <div style="font-size: 3rem; color: #ff69b4; font-weight: 700; margin-bottom: 10px;">24/7</div>
                    <h3 style="color: #333; font-size: 1.2rem; margin: 0 0 10px 0; font-weight: 600;">Available Support</h3>
                    <p style="color: #666; margin: 0;">Round-the-clock assistance whenever you need it</p>
                </div>
                <div>
                    <div style="font-size: 3rem; color: #ff69b4; font-weight: 700; margin-bottom: 10px;">&lt;2h</div>
                    <h3 style="color: #333; font-size: 1.2rem; margin: 0 0 10px 0; font-weight: 600;">Response Time</h3>
                    <p style="color: #666; margin: 0;">Average response time for all support tickets</p>
                </div>
                <div>
                    <div style="font-size: 3rem; color: #ff69b4; font-weight: 700; margin-bottom: 10px;">98%</div>
                    <h3 style="color: #333; font-size: 1.2rem; margin: 0 0 10px 0; font-weight: 600;">Satisfaction Rate</h3>
                    <p style="color: #666; margin: 0;">Customer satisfaction with our support team</p>
                </div>
                <div>
                    <div style="font-size: 3rem; color: #ff69b4; font-weight: 700; margin-bottom: 10px;">500K+</div>
                    <h3 style="color: #333; font-size: 1.2rem; margin: 0 0 10px 0; font-weight: 600;">Issues Resolved</h3>
                    <p style="color: #666; margin: 0;">Successfully resolved customer inquiries</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Live Chat Widget -->
    <div id="chatWidget" style="position: fixed; bottom: 30px; right: 30px; z-index: 1000;">
        <button onclick="toggleChat()" style="width: 70px; height: 70px; border-radius: 50%; background: linear-gradient(135deg, #ff69b4, #ff91c7); border: none; cursor: pointer; box-shadow: 0 6px 24px rgba(255,105,180,0.4); display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
        </button>
    </div>

    <script>
        function toggleFAQ(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            
            if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
            }
        }

        function toggleChat() {
            alert('Live chat feature coming soon! Please use the contact form above or email us at support@company.com');
        }

        // Add responsive behavior
        window.addEventListener('resize', function() {
            // Adjust grid layouts for mobile
            const grids = document.querySelectorAll('[style*="grid-template-columns"]');
            grids.forEach(grid => {
                if (window.innerWidth < 768) {
                    grid.style.gridTemplateColumns = '1fr';
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
