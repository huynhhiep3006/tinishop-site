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
        <body style="font-family: 'Josefin Sans', sans-serif; background: #ffffff; color: #111111; margin: 0; padding: 0; line-height: 1.6;">

<div style="max-width: 980px; margin: 0 auto; padding: 24px 20px;">
  <!-- Hero Section -->
  <section style="border-radius: 16px; padding: 32px 24px; background: linear-gradient(90deg, #FDF2F8 0%, #FCE7F3 100%); border: 1px solid #FBCFE8; margin-bottom: 24px;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
      <span style="display: inline-block; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #111; background: #FBCFE8; padding: 6px 12px; border-radius: 999px;">Help Center</span>
    </div>
    <h1 style="margin: 0 0 12px 0; font-size: 36px; line-height: 1.2; color: #111111; font-weight: 700;">Payment Methods</h1>
    <p style="margin: 0; font-size: 18px; color: #111111; font-weight: 400;">Learn about the different ways you can pay for subscriptions and coloring packs on our platform. This is an informational help page to guide you through our accepted payment options.</p>
  </section>

  <!-- Quick Navigation -->
  <nav aria-label="On this page" style="margin-bottom: 32px;">
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <a href="#accepted" style="color: #111; text-decoration: none; padding: 8px 14px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500; transition: background-color 0.2s;">Accepted Methods</a>
      <a href="#availability" style="color: #111; text-decoration: none; padding: 8px 14px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500; transition: background-color 0.2s;">Availability</a>
      <a href="#billing" style="color: #111; text-decoration: none; padding: 8px 14px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500; transition: background-color 0.2s;">Billing Details</a>
      <a href="#currencies" style="color: #111; text-decoration: none; padding: 8px 14px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500; transition: background-color 0.2s;">Currencies</a>
      <a href="#types" style="color: #111; text-decoration: none; padding: 8px 14px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500; transition: background-color 0.2s;">Purchase Types</a>
      <a href="#security" style="color: #111; text-decoration: none; padding: 8px 14px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500; transition: background-color 0.2s;">Security</a>
      <a href="#troubleshooting" style="color: #111; text-decoration: none; padding: 8px 14px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500; transition: background-color 0.2s;">Troubleshooting</a>
      <a href="#contact" style="color: #111; text-decoration: none; padding: 8px 14px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500; transition: background-color 0.2s;">Contact Us</a>
    </div>
  </nav>

  <!-- Accepted Payment Methods -->
  <section id="accepted" style="margin-bottom: 24px; border: 1px solid #FBCFE8; border-radius: 16px; padding: 24px; background: #ffffff;">
    <header style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex: 0 0 auto;">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#000000" stroke-width="1.5" fill="none"/>
        <rect x="2" y="8" width="20" height="3" fill="#000000"/>
      </svg>
      <h2 style="margin: 0; font-size: 24px; color: #111111; font-weight: 600;">Accepted Payment Methods</h2>
    </header>
    <p style="margin: 0 0 16px 0; font-size: 16px;">We accept a variety of payment methods to make your purchase experience as convenient as possible. All payments are processed securely through our certified payment partners.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 16px;">
      <div style="padding: 16px; border: 1px solid #FBCFE8; border-radius: 12px; background: #FDF2F8;">
        <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111;">Credit & Debit Cards</h3>
        <ul style="margin: 0; padding-left: 20px; font-size: 15px;">
          <li style="margin-bottom: 4px;">Visa</li>
          <li style="margin-bottom: 4px;">Mastercard</li>
          <li style="margin-bottom: 4px;">American Express</li>
          <li style="margin-bottom: 4px;">Discover</li>
        </ul>
      </div>
      
      <div style="padding: 16px; border: 1px solid #FBCFE8; border-radius: 12px; background: #FDF2F8;">
        <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111;">Digital Wallets</h3>
        <ul style="margin: 0; padding-left: 20px; font-size: 15px;">
          <li style="margin-bottom: 4px;">Apple Pay</li>
          <li style="margin-bottom: 4px;">Google Pay</li>
          <li style="margin-bottom: 4px;">PayPal</li>
          <li style="margin-bottom: 4px;">Samsung Pay</li>
        </ul>
      </div>
    </div>
    
    <div style="background: #FCE7F3; padding: 12px; border-radius: 8px; border-left: 4px solid #F9A8D4;">
      <p style="margin: 0; font-size: 14px; font-weight: 500;">Note: Some payment methods may not be available in all regions or for all purchase types. Available options will be displayed at checkout based on your location and selected items.</p>
    </div>
  </section>

  <!-- Regional Availability -->
  <section id="availability" style="margin-bottom: 24px; border: 1px solid #FBCFE8; border-radius: 16px; padding: 24px; background: #ffffff;">
    <header style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex: 0 0 auto;">
        <circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="1.5" fill="none"/>
        <path d="M3 12h18M12 3c3.5 3.5 3.5 14 0 18M12 3c-3.5 3.5-3.5 14 0 18" stroke="#000000" stroke-width="1.5" fill="none"/>
      </svg>
      <h2 style="margin: 0; font-size: 24px; color: #111111; font-weight: 600;">Regional and Device Availability</h2>
    </header>
    <p style="margin: 0 0 16px 0; font-size: 16px;">Payment method availability depends on several factors including your geographic location, device type, browser, and the specific currency you're purchasing in.</p>
    
    <div style="margin-bottom: 16px;">
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111;">Digital Wallet Requirements</h3>
      <ul style="margin: 0 0 16px 20px; font-size: 15px;">
        <li style="margin-bottom: 6px;"><strong>Apple Pay:</strong> Requires Safari browser on compatible Apple devices with Touch ID, Face ID, or Apple Watch</li>
        <li style="margin-bottom: 6px;"><strong>Google Pay:</strong> Available on Chrome browsers and Android devices with compatible payment cards added</li>
        <li style="margin-bottom: 6px;"><strong>Samsung Pay:</strong> Available on supported Samsung devices with Samsung Pay app configured</li>
      </ul>
    </div>
    
    <div style="background: #FEF3C7; padding: 12px; border-radius: 8px; border-left: 4px solid #F59E0B;">
      <p style="margin: 0; font-size: 14px; font-weight: 500;">If you don't see your preferred payment method at checkout, it may not be supported for your current device, browser, or location. Try using an alternative method or contact our support team for assistance.</p>
    </div>
  </section>

  <!-- Billing Details -->
  <section id="billing" style="margin-bottom: 24px; border: 1px solid #FBCFE8; border-radius: 16px; padding: 24px; background: #ffffff;">
    <header style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex: 0 0 auto;">
        <path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1V3z" stroke="#000000" stroke-width="1.5" fill="none"/>
        <path d="M8 7h8M8 11h8M8 15h6" stroke="#000000" stroke-width="1.5"/>
      </svg>
      <h2 style="margin: 0; font-size: 24px; color: #111111; font-weight: 600;">Billing Details and Statements</h2>
    </header>
    <p style="margin: 0 0 16px 0; font-size: 16px;">Understanding how charges appear on your billing statement and how taxes are calculated.</p>
    
    <div style="margin-bottom: 16px;">
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111;">Statement Descriptor</h3>
      <p style="margin: 0 0 12px 0; font-size: 15px;">Charges from our coloring book platform will appear on your credit card or bank statement as <strong>"COLORINGBOOK*PLATFORM"</strong> or similar, depending on your payment processor.</p>
    </div>
    
    <div style="margin-bottom: 16px;">
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111;">Tax Calculation</h3>
      <p style="margin: 0 0 12px 0; font-size: 15px;">Sales tax, VAT, or other applicable taxes are calculated automatically based on your billing address and local tax regulations. The final tax amount will be clearly displayed before you complete your purchase.</p>
    </div>
    
    <div style="background: #DBEAFE; padding: 12px; border-radius: 8px; border-left: 4px solid #3B82F6;">
      <p style="margin: 0; font-size: 14px; font-weight: 500;">All prices shown include applicable taxes where required by law. For subscription services, taxes are calculated and applied to each billing cycle.</p>
    </div>
  </section>

  <!-- Supported Currencies -->
  <section id="currencies" style="margin-bottom: 24px; border: 1px solid #FBCFE8; border-radius: 16px; padding: 24px; background: #ffffff;">
    <header style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex: 0 0 auto;">
        <circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="1.5" fill="none"/>
        <path d="M12 7v10M9 9h6M9 15h6" stroke="#000000" stroke-width="1.5"/>
      </svg>
      <h2 style="margin: 0; font-size: 24px; color: #111111; font-weight: 600;">Supported Currencies</h2>
    </header>
    <p style="margin: 0 0 16px 0; font-size: 16px;">We support multiple currencies to serve our global community of coloring enthusiasts. Currency selection is automatic based on your location, but you can change it if needed.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 16px;">
      <div style="padding: 12px; border: 1px solid #FBCFE8; border-radius: 8px; text-align: center; background: #FDF2F8;">
        <strong style="font-size: 16px;">USD</strong><br>
        <span style="font-size: 14px; color: #666;">United States Dollar</span>
      </div>
      <div style="padding: 12px; border: 1px solid #FBCFE8; border-radius: 8px; text-align: center; background: #FDF2F8;">
        <strong style="font-size: 16px;">EUR</strong><br>
        <span style="font-size: 14px; color: #666;">Euro</span>
      </div>
      <div style="padding: 12px; border: 1px solid #FBCFE8; border-radius: 8px; text-align: center; background: #FDF2F8;">
        <strong style="font-size: 16px;">GBP</strong><br>
        <span style="font-size: 14px; color: #666;">British Pound</span>
      </div>
      <div style="padding: 12px; border: 1px solid #FBCFE8; border-radius: 8px; text-align: center; background: #FDF2F8;">
        <strong style="font-size: 16px;">CAD</strong><br>
        <span style="font-size: 14px; color: #666;">Canadian Dollar</span>
      </div>
      <div style="padding: 12px; border: 1px solid #FBCFE8; border-radius: 8px; text-align: center; background: #FDF2F8;">
        <strong style="font-size: 16px;">AUD</strong><br>
        <span style="font-size: 14px; color: #666;">Australian Dollar</span>
      </div>
      <div style="padding: 12px; border: 1px solid #FBCFE8; border-radius: 8px; text-align: center; background: #FDF2F8;">
        <strong style="font-size: 16px;">JPY</strong><br>
        <span style="font-size: 14px; color: #666;">Japanese Yen</span>
      </div>
    </div>
    
    <p style="margin: 0; font-size: 14px; color: #666;">Exchange rates are updated regularly and applied at the time of purchase. Additional currencies may be added based on demand.</p>
  </section>

  <!-- Purchase Types -->
  <section id="types" style="margin-bottom: 24px; border: 1px solid #FBCFE8; border-radius: 16px; padding: 24px; background: #ffffff;">
    <header style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex: 0 0 auto;">
        <path d="M4 7h11l-2-2M20 17H9l2 2" stroke="#000000" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h2 style="margin: 0; font-size: 24px; color: #111111; font-weight: 600;">Subscriptions vs One-Time Purchases</h2>
    </header>
    <p style="margin: 0 0 20px 0; font-size: 16px;">We offer different types of purchases to suit your coloring needs and budget preferences.</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 16px;">
      <div style="padding: 20px; border: 2px solid #FBCFE8; border-radius: 12px; background: #FDF2F8;">
        <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600; color: #111;">Subscription Plans</h3>
        <ul style="margin: 0 0 12px 20px; font-size: 15px;">
          <li style="margin-bottom: 6px;">Monthly or annual billing cycles</li>
          <li style="margin-bottom: 6px;">Unlimited access to premium content</li>
          <li style="margin-bottom: 6px;">New coloring pages added regularly</li>
          <li style="margin-bottom: 6px;">Cancel anytime from your account</li>
        </ul>
        <p style="margin: 0; font-size: 14px; color: #666; font-style: italic;">Recurring charges until canceled</p>
      </div>
      
      <div style="padding: 20px; border: 2px solid #FBCFE8; border-radius: 12px; background: #FDF2F8;">
        <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600; color: #111;">One-Time Purchases</h3>
        <ul style="margin: 0 0 12px 20px; font-size: 15px;">
          <li style="margin-bottom: 6px;">Individual coloring packs</li>
          <li style="margin-bottom: 6px;">Themed collections</li>
          <li style="margin-bottom: 6px;">Special edition designs</li>
          <li style="margin-bottom: 6px;">Permanent access to purchased content</li>
        </ul>
        <p style="margin: 0; font-size: 14px; color: #666; font-style: italic;">Single payment, lifetime access</p>
      </div>
    </div>
    
    <div style="background: #EDE9FE; padding: 12px; border-radius: 8px; border-left: 4px solid #8B5CF6;">
      <p style="margin: 0; font-size: 14px; font-weight: 500;">The billing type (subscription or one-time) will be clearly indicated during checkout. For subscriptions, you'll see the renewal date and can manage or cancel your subscription from your account dashboard.</p>
    </div>
  </section>

  <!-- Security & Privacy -->
  <section id="security" style="margin-bottom: 24px; border: 1px solid #FBCFE8; border-radius: 16px; padding: 24px; background: #ffffff;">
    <header style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex: 0 0 auto;">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#000000" stroke-width="1.5" fill="none"/>
        <path d="M9.5 12.5l1.8 1.8 3.2-3.2" stroke="#000000" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h2 style="margin: 0; font-size: 24px; color: #111111; font-weight: 600;">Security & Privacy</h2>
    </header>
    <p style="margin: 0 0 20px 0; font-size: 16px;">Your payment security is our top priority. We use industry-standard security measures to protect your financial information.</p>
    
    <div style="margin-bottom: 20px;">
      <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600; color: #111;">Payment Security Standards</h3>
      <ul style="margin: 0 0 16px 20px; font-size: 15px;">
        <li style="margin-bottom: 6px;"><strong>PCI DSS Compliance:</strong> We partner with payment processors certified to the highest industry standards</li>
        <li style="margin-bottom: 6px;"><strong>SSL/TLS Encryption:</strong> All payment data is transmitted using 256-bit SSL encryption</li>
        <li style="margin-bottom: 6px;"><strong>Tokenization:</strong> Credit card numbers are never stored on our servers - they're replaced with secure tokens</li>
        <li style="margin-bottom: 6px;"><strong>3D Secure:</strong> Additional authentication layer for supported cards and regions</li>
      </ul>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600; color: #111;">Data Protection</h3>
      <ul style="margin: 0 0 16px 20px; font-size: 15px;">
        <li style="margin-bottom: 6px;">We never store your complete credit card information</li>
        <li style="margin-bottom: 6px;">Payment processing is handled by certified third-party processors</li>
        <li style="margin-bottom: 6px;">All personal data is protected according to GDPR and privacy regulations</li>
        <li style="margin-bottom: 6px;">Regular security audits and monitoring</li>
      </ul>
    </div>
    
    <div style="background: #D1FAE5; padding: 12px; border-radius: 8px; border-left: 4px solid #10B981;">
      <p style="margin: 0; font-size: 14px; font-weight: 500;"><strong>Safe Shopping Promise:</strong> If unauthorized charges occur due to a security breach on our platform, we'll work with you and your bank to resolve the issue quickly.</p>
    </div>
  </section>

  <!-- Troubleshooting -->
  <section id="troubleshooting" style="margin-bottom: 24px; border: 1px solid #FBCFE8; border-radius: 16px; padding: 24px; background: #ffffff;">
    <header style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex: 0 0 auto;">
        <path d="M21 7a5 5 0 0 1-7 4L6 19l-3-3 8-8a5 5 0 0 1 10-1z" stroke="#000000" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
        <circle cx="19" cy="5" r="1.5" fill="#000000"/>
      </svg>
      <h2 style="margin: 0; font-size: 24px; color: #111111; font-weight: 600;">Troubleshooting Payment Issues</h2>
    </header>
    <p style="margin: 0 0 20px 0; font-size: 16px;">Having trouble completing your payment? Here are common issues and solutions to help you get back to coloring.</p>
    
    <div style="margin-bottom: 20px;">
      <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600; color: #111;">Common Payment Failures</h3>
      
      <div style="margin-bottom: 16px; padding: 16px; border: 1px solid #FED7D7; border-radius: 8px; background: #FEF5E7;">
        <h4 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #111;">Card Declined</h4>
        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
          <li style="margin-bottom: 4px;">Check that your card details are entered correctly</li>
          <li style="margin-bottom: 4px;">Ensure your card has sufficient funds or available credit</li>
          <li style="margin-bottom: 4px;">Verify your card is enabled for online/international purchases</li>
          <li style="margin-bottom: 4px;">Try using a different card or payment method</li>
        </ul>
      </div>
      
      <div style="margin-bottom: 16px; padding: 16px; border: 1px solid #FED7D7; border-radius: 8px; background: #FEF5E7;">
        <h4 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #111;">Digital Wallet Not Working</h4>
        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
          <li style="margin-bottom: 4px;">Ensure you're using a supported browser and device</li>
          <li style="margin-bottom: 4px;">Check that your wallet app is up to date</li>
          <li style="margin-bottom: 4px;">Verify you have a valid payment method added to your wallet</li>
          <li style="margin-bottom: 4px;">Try clearing your browser cache and cookies</li>
        </ul>
      </div>
      
      <div style="margin-bottom: 16px; padding: 16px; border: 1px solid #FED7D7; border-radius: 8px; background: #FEF5E7;">
        <h4 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #111;">Payment Processing Errors</h4>
        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
          <li style="margin-bottom: 4px;">Refresh the page and try again</li>
          <li style="margin-bottom: 4px;">Check your internet connection</li>
          <li style="margin-bottom: 4px;">Disable browser extensions that might interfere</li>
          <li style="margin-bottom: 4px;">Try using a different browser or incognito/private mode</li>
        </ul>
      </div>
    </div>
    
    <div style="background: #FEF3C7; padding: 12px; border-radius: 8px; border-left: 4px solid #F59E0B;">
      <p style="margin: 0; font-size: 14px; font-weight: 500;">Still having issues? Contact our support team with details about the error message you're seeing, and we'll help resolve it quickly.</p>
    </div>
  </section>

  <!-- Contact Support -->
  <section id="contact" style="margin-bottom: 24px; border: 1px solid #FBCFE8; border-radius: 16px; padding: 24px; background: #ffffff;">
    <header style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex: 0 0 auto;">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="1.5" fill="none"/>
        <path d="M4 7l8 6 8-6" stroke="#000000" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h2 style="margin: 0; font-size: 24px; color: #111111; font-weight: 600;">Still Need Help?</h2>
    </header>
    <p style="margin: 0 0 20px 0; font-size: 16px;">Our support team is here to help with any payment-related questions or issues you may encounter.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
      <div style="padding: 16px; border: 1px solid #FBCFE8; border-radius: 12px; background: #FDF2F8; text-align: center;">
        <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111;">Email Support</h3>
        <p style="margin: 0 0 12px 0; font-size: 14px; color: #666;">Get detailed help with payment issues</p>
        <a href="mailto:support@coloringbook.com" style="display: inline-block; color: #111; text-decoration: none; padding: 10px 20px; border-radius: 20px; background: #FCE7F3; border: 1px solid #FBCFE8; font-weight: 500;">support@coloringbook.com</a>
      </div>
      
      <div style="padding: 16px; border: 1px solid #FBCFE8; border-radius: 12px; background: #FDF2F8; text-align: center;">
        <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111;">Live Chat</h3>
        <p style="margin: 0 0 12px 0; font-size: 14px; color: #666;">Quick answers during business hours</p>
        <button style="color: #111; background: #FCE7F3; border: 1px solid #FBCFE8; padding: 10px 20px; border-radius: 20px; font-weight: 500; cursor: pointer; font-family: 'Josefin Sans', sans-serif;">Start Chat</button>
      </div>
    </div>
    
    <div style="margin-top: 16px; padding: 12px; background: #F0FDF4; border-radius: 8px; border-left: 4px solid #22C55E;">
      <p style="margin: 0; font-size: 14px; font-weight: 500;"><strong>Response Time:</strong> We typically respond to email inquiries within 2-4 hours during business days, and live chat provides immediate assistance during operating hours (9 AM - 6 PM EST).</p>
    </div>
  </section>
</div>

</body>
        `,
        }}
      />
   
  );
}
