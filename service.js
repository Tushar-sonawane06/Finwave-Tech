/* ===================================================
   FINWAVE TECHNOLOGIES SOLUTION — SERVICE.JS
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Service B2B Data Database
  const servicesData = {
    aeps: {
      tag: 'Aadhaar Enabled Payment System',
      title: 'AEPS – Aadhaar Enabled Payment',
      desc: 'Cash withdrawal, balance inquiry, and mini-statement using Aadhaar authentication—built for agents, retailers, and rural banking access.',
      visualHtml: `
        <div class="mock-device phone-mockup">
          <div class="device-screen">
            <div class="phone-status-bar">
              <span>12:45</span>
              <span>5G</span>
            </div>
            <div class="phone-header">
              <span class="back-arrow">←</span>
              <span class="app-name">FINWAVE AEPS</span>
            </div>
            <div class="phone-body">
              <div class="biometric-indicator">
                <div class="pulse-ring ring-1"></div>
                <div class="pulse-ring ring-2"></div>
                <div class="pulse-ring ring-3"></div>
                <svg viewBox="0 0 24 24" class="fingerprint-svg" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 12a10 10 0 0 1 18-6"/>
                  <path d="M5 19.5A9 9 0 0 1 20 12"/>
                  <path d="M8 21.5A7 7 0 0 1 20 14"/>
                  <path d="M11 22.5a5 5 0 0 1 9-3"/>
                  <path d="M14 23a3 3 0 0 1 5-2.5"/>
                  <path d="M12 11V5a3 3 0 0 0-6 0v6"/>
                </svg>
              </div>
              <div class="mock-ui-label">Scan Fingerprint</div>
              <div class="mock-ui-progress-bar">
                <div class="progress-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is AEPS?',
      infoDesc: 'AEPS enables interoperable banking services at retail points using Aadhaar number and biometric authentication. Customers can access their bank account for basic services without a card or passbook.',
      infoPoints: [
        'Cash Withdrawal (CW) instantly from any Aadhaar-linked account.',
        'Balance Inquiry (BI) to check account status in real-time.',
        'Mini Statement (MS) to retrieve the last 5-10 transactions.',
        'Aadhaar to Aadhaar Fund Transfer (AATT) for direct peer remittances.'
      ],
      whyTitle: 'Why FINWAVE for AEPS?',
      whyPoints: [
        'Instant settlement options with automatic daily reconciliation.',
        'Supports standard L0 and L1 STQC certified biometric scanners.',
        'High transaction success rate with smart merchant acquiring routing.',
        'Multi-tenant commission structure and comprehensive reporting.',
        'Full sandbox environment for rapid API testing and verification.'
      ],
      flowSteps: [
        { num: '1', title: 'Initiate', desc: 'Agent selects AEPS transaction type, enters customer Aadhaar, and selects bank.' },
        { num: '2', title: 'Capture', desc: 'Customer places finger on scanner; biometric data is captured via compliant RD service.' },
        { num: '3', title: 'Authenticate', desc: 'Request is sent securely through sponsor bank to NPCI and UIDAI for authentication.' },
        { num: '4', title: 'Settle', desc: 'Authentication response returns. Ledger updates instantly; agent dispenses cash.' }
      ],
      features: [
        { icon: '🔒', title: 'Bank-Grade Security', desc: 'AES-256 encrypted transit, device whitelisting, and strict compliance controls.' },
        { icon: '📊', title: 'Real-Time Monitoring', desc: 'Comprehensive dashboards with live success metrics, timeout logs, and alarms.' },
        { icon: '⚡', title: 'T+0 Settlement', desc: 'Flexible payout cycles including instant ledger updates and multi-window withdrawals.' },
        { icon: '📱', title: 'Device Ready', desc: 'RD-service integration out of the box for Mantra, Morpho, and key Android terminals.' },
        { icon: '🛡️', title: 'Dispute Management', desc: 'Automated lookup systems for double debits, chargeback status, and NPCI references.' },
        { icon: '⚙️', title: 'White Label Options', desc: 'Easily brand the agent portal, dashboard, and receipts for your custom fintech network.' }
      ],
      whoCanUse: [
        'Registered retailers & kirana store owners.',
        'Business Correspondents (BC) running rural agent networks.',
        'Cooperative bank branches expanding doorstep banking access.',
        'Fintech startups launching digital financial services.'
      ],
      compliance: [
        'RD-Service compliance for all biometric scanner attachments.',
        'NPCI AEPS guidelines and sponsor bank guidelines adherence.',
        'Complete audit trails, consent logs, and storage compliance.'
      ],
      settlementText: 'T+0 instant settlements. Funds are credited to the partner wallet immediately on transaction approval. Bank payouts can be processed through IMPS/NEFT multiple times a day based on automated rules.',
      pricingText: 'Tier-based pricing models with high commissions per transaction. Commissions scale dynamically with monthly transaction volume. Reach out to our Sales team for custom volume slabs.'
    },

    dmt: {
      tag: 'Domestic Money Transfer',
      title: 'Domestic Money Transfer (DMT)',
      desc: 'Send money instantly to any bank account in India. Secure B2B remittance rails with IMPS and NEFT support for agent networks.',
      visualHtml: `
        <div class="mock-device phone-mockup">
          <div class="device-screen">
            <div class="phone-status-bar">
              <span>12:47</span>
              <span>5G</span>
            </div>
            <div class="phone-header">
              <span class="back-arrow">←</span>
              <span class="app-name">Money Transfer</span>
            </div>
            <div class="phone-body">
              <div class="mock-receipt">
                <div class="receipt-icon">✓</div>
                <div class="receipt-amount">₹ 5,000.00</div>
                <div class="receipt-status">Transfer Successful</div>
                <div class="receipt-divider"></div>
                <div class="receipt-row"><span>Beneficiary</span><strong>Ramesh Kumar</strong></div>
                <div class="receipt-row"><span>Bank</span><strong>SBI (xxxx4321)</strong></div>
                <div class="receipt-row"><span>UTR No</span><strong>SBI908234723</strong></div>
              </div>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is Domestic Money Transfer?',
      infoDesc: 'DMT allows walk-in customers to send money instantly to any bank account in India through agent outlets. The service is processed via IMPS/NEFT and is highly useful for unbanked and migrant populations.',
      infoPoints: [
        'Send money instantly using cash-to-account remittance services.',
        'Simple sender registration with minimal documentation.',
        'Supports beneficiary bank account verification prior to transfer.',
        'Real-time UTR number updates and printed receipts.'
      ],
      whyTitle: 'Why FINWAVE for DMT?',
      whyPoints: [
        'Robust transaction processing engine with zero pending transactions.',
        'Instant beneficiary account verification (penny drop feature).',
        'Fail-safe routing between multiple sponsor bank channels.',
        'Flexible charge structures and customized distributor commissions.',
        '24/7 transaction processing including bank holidays.'
      ],
      flowSteps: [
        { num: '1', title: 'Register', desc: 'Agent registers sender using mobile number & OTP verification.' },
        { num: '2', title: 'Add Beneficiary', desc: 'Enter beneficiary bank name, account number, and IFSC code.' },
        { num: '3', title: 'Verify Account', desc: 'Perform penny-drop verification to ensure name matches account.' },
        { num: '4', title: 'Transfer', desc: 'Deduct amount from agent wallet; funds hit beneficiary instantly.' }
      ],
      features: [
        { icon: '💸', title: 'Instant Remittance', desc: 'Real-time fund transfer powered by immediate payment service (IMPS).' },
        { icon: '🏦', title: 'All Bank Support', desc: 'Transfer funds to 140+ public, private, and co-operative banks.' },
        { icon: '🔄', title: 'Dual Route Backup', desc: 'Secondary routing channels switch active lines in case of bank down times.' },
        { icon: '📱', title: 'Instant Receipts', desc: 'Generate digital transaction receipts via SMS, WhatsApp, or thermal print.' },
        { icon: '🛡️', title: 'Secure OTP Locks', desc: 'OTP verification required for sender creation, limits, and refunds.' },
        { icon: '📊', title: 'Granular Reporting', desc: 'Detailed statements, ledger entries, and transaction queries in real-time.' }
      ],
      whoCanUse: [
        'Retail merchants and local mobile shop owners.',
        'Migrant labor hubs and collection agents.',
        'Nodal centers and customer service points.',
        'Micro-finance institutions managing client disbursements.'
      ],
      compliance: [
        'Adheres to RBI guidelines for domestic money remittances.',
        'Strict sender wallet limits (up to ₹25,000 per month).',
        'Transaction logging and KYC compliance for larger transactions.'
      ],
      settlementText: 'Wallet-to-bank settlements are updated instantly. The partner or agent wallet is debited in real-time upon successful money transfer. Any failed transaction is instantly credited back to the wallet.',
      pricingText: 'Low surcharge rates per remittance with high commissions for agent networks. Discounted pricing available for API partners and high-volume corporate networks. Contact sales for details.'
    },

    matm: {
      tag: 'Micro ATM Terminal Services',
      title: 'Micro ATM – Cash Withdrawal',
      desc: 'Convert any retail shop into a mini bank branch. Accept card-based cash withdrawals, check balances, and print receipts instantly.',
      visualHtml: `
        <div class="mock-device pos-terminal">
          <div class="pos-device-frame">
            <div class="pos-printer-feed"></div>
            <div class="pos-screen">
              <div class="pos-title">FINWAVE ATM</div>
              <div class="pos-status-msg">Insert Card Now</div>
              <div class="pos-dots">•••</div>
            </div>
            <div class="pos-card-slot">
              <div class="swipe-card-line"></div>
              <div class="mock-card"></div>
            </div>
            <div class="pos-keypad">
              <div class="key">1</div><div class="key">2</div><div class="key">3</div>
              <div class="key">4</div><div class="key">5</div><div class="key">6</div>
              <div class="key">7</div><div class="key">8</div><div class="key">9</div>
              <div class="key btn-red">X</div><div class="key">0</div><div class="key btn-green">OK</div>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is Micro ATM?',
      infoDesc: 'Micro ATM is a handheld POS device that enables merchants to accept credit/debit cards for transactions, cash withdrawals, and inquiries. It integrates directly with central banking switches via Bluetooth or mobile apps.',
      infoPoints: [
        'Accepts chip and magnetic stripe debit cards for cash withdrawal.',
        'Enables balance inquiry and mini statements for customers.',
        'Extremely portable device with Bluetooth connectivity.',
        'Low cash handling fees compared to traditional ATM installations.'
      ],
      whyTitle: 'Why FINWAVE for Micro ATM?',
      whyPoints: [
        'Stable and certified kernels for RuPay, Visa, and Mastercard cards.',
        'Sturdy hardware with long battery life and thermal receipt printer.',
        'Fast device pairing with Android/iOS applications.',
        'Automated device configuration and firmware updates.',
        'Highest success rates with direct bank switch integration.'
      ],
      flowSteps: [
        { num: '1', title: 'Connect', desc: 'Merchant connects Micro ATM device to smartphone app via Bluetooth.' },
        { num: '2', title: 'Insert Card', desc: 'Customer inserts debit card into card slot and enters amount in the app.' },
        { num: '3', title: 'Enter PIN', desc: 'Customer enters secure ATM PIN on the device keyboard.' },
        { num: '4', title: 'Dispense', desc: 'On approval, agent hands over cash. Receipt is printed instantly.' }
      ],
      features: [
        { icon: '💳', title: 'Card Present Security', desc: 'PCI-PTS and EMV L1 & L2 certified hardware ensuring maximum protection.' },
        { icon: '📶', title: 'Dual Connectivity', desc: 'Bluetooth 4.0 and USB interface options for seamless terminal integration.' },
        { icon: '🔋', title: 'Extended Battery', desc: 'High-capacity lithium batteries built for long shifts and remote locations.' },
        { icon: '📄', title: 'Receipt Printing', desc: 'Direct print options on handheld terminal or digital receipts via SMS.' },
        { icon: '⚙️', title: 'Device Telemetry', desc: 'Over-the-air firmware updates and live hardware health diagnostics.' },
        { icon: '💰', title: 'High Commission', desc: 'Earn attractive commission slabs on every card withdrawal transaction.' }
      ],
      whoCanUse: [
        'Local grocers, merchants, and neighborhood retail shops.',
        'Courier and delivery partners accepting doorstep payments.',
        'Cooperative banks running banking correspondent networks.',
        'Fuel stations, petrol pumps, and highway retail outlets.'
      ],
      compliance: [
        'EMV Co and PCI-DSS certified transaction architecture.',
        'Strict hardware pairing/binding rules to prevent tampering.',
        'RBI guidelines compliance for card-present financial services.'
      ],
      settlementText: 'T+0/T+1 settlements with multiple settlement cycles. Funds from successful withdrawals are loaded to the partner wallet in real-time, allowing quick bank transfer and high working capital efficiency.',
      pricingText: 'Hardware purchase fees with zero monthly maintenance charges. Competitive transaction fees with high commission slabs. Contact our team to request device catalog and price lists.'
    },

    cms: {
      tag: 'Cash Management Service',
      title: 'CMS Collection – Doorstep Cash & EMI',
      desc: 'Digitize collections with agent routing, QR/UPI fallback, receipt printing, and real-time reconciliation. Built for NBFCs, MFIs, utilities, and field networks.',
      visualHtml: `
        <div class="mock-device tablet-mockup">
          <div class="device-screen">
            <div class="app-dashboard">
              <div class="dash-header">
                <span>CMS Collection Dashboard</span>
                <strong>Pune West</strong>
              </div>
              <div class="dash-grid">
                <div class="dash-card"><span>Collections Today</span><strong>₹ 1,45,200</strong></div>
                <div class="dash-card"><span>Target Remaining</span><strong>18 Accounts</strong></div>
              </div>
              <div class="map-illustration">
                <div class="map-path"></div>
                <div class="map-marker m-1"></div>
                <div class="map-marker m-2 active"></div>
                <div class="map-marker m-3"></div>
              </div>
              <div class="map-label">Current Route: 82% Completed</div>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is CMS Collection?',
      infoDesc: 'CMS (Cash Management Services) Collection enables field agents to collect EMIs, utility bills, deposits, and fees at customer premises or service points. Each collection is tracked with geo-tagging, device ID, payer details, and instant receipt.',
      infoPoints: [
        'Cash pickup with denomination capture for full cash auditing.',
        'UPI/QR fallback for digital payments at doorstep.',
        'Instant SMS receipts and digital verification tools.',
        'Optimized route planning for field agents.'
      ],
      whyTitle: 'Why FINWAVE for CMS?',
      whyPoints: [
        'Granular agent tracking with route visualization and maps.',
        'Instant updates and auto-post to company CRM/ERP systems.',
        'Configurable agent transaction limits to minimize cash risk.',
        'Comprehensive audit logging and Vault/Branch handover locks.',
        'Supports multiple payment modes (Cash, UPI, QR).'
      ],
      flowSteps: [
        { num: '1', title: 'Assign Route', desc: 'Central system details daily target accounts and routes to the agent app.' },
        { num: '2', title: 'Collect & Input', desc: 'Agent visits customer, collects cash, and inputs denominations in app.' },
        { num: '3', title: 'Issue Receipt', desc: 'Customer receives verification receipt via thermal print or instant SMS.' },
        { num: '4', title: 'Reconcile', desc: 'Agent deposits cash at branch. System auto-reconciles records in real-time.' }
      ],
      features: [
        { icon: '🗺️', title: 'Agent GPS Routing', desc: 'Visual route maps, target coordinates, and live agent tracking.' },
        { icon: '💵', title: 'Denomination Counter', desc: 'Specify exact currencies collected for audit-proof cash operations.' },
        { icon: '🔄', title: 'API Integrations', desc: 'Bi-directional APIs syncing target invoices and payment logs automatically.' },
        { icon: '📲', title: 'UPI QR Fallback', desc: 'Generate dynamic UPI QR codes for cardless payments on agent screen.' },
        { icon: '🛡️', title: 'Risk Lock Caps', desc: 'Set maximum cash-holding caps on agents; freezes new inputs on limit breach.' },
        { icon: '📊', title: 'variance Tracking', desc: 'Real-time variance reports matching collected cash with bank deposits.' }
      ],
      whoCanUse: [
        'NBFCs, MFIs, and housing finance companies.',
        'E-commerce logistics operators managing cash-on-delivery (COD).',
        'Electricity, gas, and broadband companies collecting utility dues.',
        'Cooperative societies and local retail networks.'
      ],
      compliance: [
        'Strict audit controls on cash handling and tracking.',
        'Fully complies with anti-money laundering (AML) protocols.',
        'Secure data storage with encrypted customer details.'
      ],
      settlementText: 'Cash deposits are reconciled at partner banks or local branch vaults. The digital ledger is updated instantly, and settlement payouts to company accounts occur on T+0 or T+1 basis depending on the deposit validation.',
      pricingText: 'SaaS licensing models for agent portals combined with transaction fees for digital collections. Custom pricing slabs for enterprise setups with 500+ active field agents. Contact sales for quotes.'
    },

    bbps: {
      tag: 'Bharat Bill Pay Integration',
      title: 'Bharat BillPay (BBPS)',
      desc: 'Connect to NPCI\'s Bharat Bill Payment System. Enable your agents and customers to pay utility bills, loan EMIs, and DTH charges with high success rates.',
      visualHtml: `
        <div class="mock-device phone-mockup">
          <div class="device-screen">
            <div class="phone-status-bar">
              <span>12:50</span>
              <span>5G</span>
            </div>
            <div class="phone-header">
              <span class="back-arrow">←</span>
              <span class="app-name">Bharat BillPay</span>
            </div>
            <div class="phone-body">
              <div class="bbps-grid">
                <div class="bbps-item"><span class="bbps-icon">💡</span><span>Electricity</span></div>
                <div class="bbps-item"><span class="bbps-icon">💧</span><span>Water</span></div>
                <div class="bbps-item"><span class="bbps-icon">🔥</span><span>Gas</span></div>
                <div class="bbps-item"><span class="bbps-icon">📡</span><span>DTH</span></div>
              </div>
              <div class="bbps-form">
                <label>Select Electricity Biller</label>
                <div class="mock-select">MSEDCL - Maharashtra</div>
                <button class="btn-primary w-full" style="margin-top:1.5rem;">Fetch Bill</button>
              </div>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is Bharat BillPay?',
      infoDesc: 'BBPS is a unified, NPCI-conceptualized utility payment system in India. It offers interoperable bill payment services to customers through a network of agents, mobile apps, or websites with instant confirmation.',
      infoPoints: [
        'Access to 20,000+ national and local billers through one integration.',
        'Pay utility bills, broadband, mobile recharge, EMIs, and school fees.',
        'Instant payment validation and automatic receipt generation.',
        'Guaranteed dispute resolution mechanisms managed by NPCI.'
      ],
      whyTitle: 'Why FINWAVE for BBPS?',
      whyPoints: [
        'Single unified API integration for all biller categories.',
        'Real-time bill fetch capabilities with accurate customer details.',
        'Automated commission routing and payment settlement.',
        'Robust transaction servers boasting 99.9% uptime.',
        'NPCI certified BBPS agent institution (AI) platform.'
      ],
      flowSteps: [
        { num: '1', title: 'Select Biller', desc: 'Select utility category, state, and name of the service provider.' },
        { num: '2', title: 'Fetch Bill', desc: 'Enter consumer number. System queries BBPS registry and displays due bill.' },
        { num: '3', title: 'Pay', desc: 'Process payment from agent wallet or accept digital modes from customer.' },
        { num: '4', title: 'Receipt', desc: 'System confirms payment and generates official BBPS receipt.' }
      ],
      features: [
        { icon: '🔄', title: 'Unified API Link', desc: 'A single point of access connecting you to all national and local billers.' },
        { icon: '💡', title: '20,000+ Billers', desc: 'Electricity, water, piped gas, municipal taxes, education, EMIs, and more.' },
        { icon: '⚡', title: 'Instant Fetch', desc: 'Direct integration with biller databases for accurate, real-time bill balances.' },
        { icon: '📄', title: 'NPCI Receipts', desc: 'Generate authorized BBPS logo receipts with specific transaction IDs.' },
        { icon: '🛡️', title: 'Auto Refund Rules', desc: 'Refund queues handle failed payouts, auto-crediting customer balances.' },
        { icon: '📈', title: 'Commission Splitting', desc: 'Configure automatic commission splitting for distributors and agents.' }
      ],
      whoCanUse: [
        'Payment portals, fintech apps, and mobile wallet systems.',
        'Retail networks, Kirana stores, and digital kiosks.',
        'Internet service providers and co-operative bank branches.',
        'Corporate employee benefit portals.'
      ],
      compliance: [
        'Complies with NPCI Bharat Bill Payment System rules.',
        'Customer dispute management portal access.',
        'Data localization and transactional security compliance.'
      ],
      settlementText: 'T+1 settlement to partner merchant bank accounts. Transaction accounts are reconciled daily, and commissions are credited to the partner wallet immediately on successful payment.',
      pricingText: 'Minimal transaction processing fees with lucrative commissions from billers. Contact our API team for developer docs, credential setups, and onboarding rates.'
    },

    prepaid: {
      tag: 'Prepaid Wallet & Cards',
      title: 'Prepaid Cards – Virtual & Physical',
      desc: 'Issue physical & virtual prepaid cards in partnership with leading banks. Customize card limits, track corporate expenses, and manage payroll.',
      visualHtml: `
        <div class="mock-device card-stack">
          <div class="physical-card animate-card-1">
            <div class="card-chip"></div>
            <div class="card-brand">FINWAVE</div>
            <div class="card-number">•••• •••• •••• 9876</div>
            <div class="card-details">
              <span>PREPAID CARD</span>
              <span>EXP: 09/31</span>
            </div>
          </div>
          <div class="physical-card animate-card-2">
            <div class="card-chip"></div>
            <div class="card-brand">FINWAVE</div>
            <div class="card-number">•••• •••• •••• 5432</div>
            <div class="card-details">
              <span>PREPAID CARD</span>
              <span>EXP: 12/32</span>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What are Prepaid Cards?',
      infoDesc: 'Prepaid Cards enable fintechs and corporate partners to issue customized virtual or physical cards to customers, employees, or vendors. The cards run on Rupay/Visa networks and can be managed via API.',
      infoPoints: [
        'Instant virtual card issuance via onboarding APIs.',
        'Physical cards with customizable corporate branding and card designs.',
        'Configure spending limits, merchant categories, and ATM locks.',
        'Load wallet balance using UPI, netbanking, or bank accounts.'
      ],
      whyTitle: 'Why FINWAVE for Prepaid Cards?',
      whyPoints: [
        'Pre-integrated sponsor bank relationships for quick setup.',
        'Secure dashboard to load wallets and track corporate spending.',
        'PCI-DSS compliant SDKs for mobile app integration.',
        'Real-time spending notifications and alerts.',
        'Granular API control over card lifecycles (issue, block, replace).'
      ],
      flowSteps: [
        { num: '1', title: 'Onboard', desc: 'Submit user identity details (KYC) through API to create account.' },
        { num: '2', title: 'Issue', desc: 'Instantly generate virtual card credentials. Place order for physical card.' },
        { num: '3', title: 'Load Funds', desc: 'Transfer money from corporate credit pool or user bank to the card wallet.' },
        { num: '4', title: 'Spend', desc: 'User pays online or at merchant terminals. Spending alerts update dashboard.' }
      ],
      features: [
        { icon: '💳', title: 'Co-Branded Cards', desc: 'Custom logos, designs, and bank partnerships for unique card branding.' },
        { icon: '📲', title: 'Virtual Issuance', desc: 'Generate secure virtual cards in under 5 seconds for e-commerce checkouts.' },
        { icon: '🔒', title: 'Dynamic Limit Lock', desc: 'Block/unblock cards, set transaction limits, and restrict merchant codes.' },
        { icon: '💼', title: 'Corporate Expense', desc: 'Separate employee allowance pools, track receipts, and automate expense audit.' },
        { icon: '⚡', title: 'Fast Wallet Load', desc: 'Integrated UPI and IMPS channels for instant card pocket loads.' },
        { icon: '📊', title: 'BI Dashboards', desc: 'Analyze merchant categories, spend hotspots, and transaction histories.' }
      ],
      whoCanUse: [
        'Startups seeking custom card programs for their customers.',
        'Enterprises managing employee travel and food allowance.',
        'Gig economy platforms disbursing payouts and incentives.',
        'Niche banking providers offering kids/student cards.'
      ],
      compliance: [
        'Complies with RBI PPI (Prepaid Payment Instruments) master directions.',
        'Voter ID/PAN verified KYC requirements for cardholders.',
        'PCI-DSS certified payment environment and secure storage.'
      ],
      settlementText: 'Card load funding is processed in real-time. Settlements with Mastercard, Visa, or RuPay card networks follow standard bank settlement clearing schedules.',
      pricingText: 'Program setup fees, physical card printing costs, and small transactional loads. Volume-based card program pricing available. Contact sales for the prepaid card product guide.'
    },

    travel: {
      tag: 'Ticketing and Travel Portal',
      title: 'Travel Booking – Bus, Flight, & Train',
      desc: 'Provide travel booking services at your local agent points. Book flight, bus, and train tickets with direct inventory access and excellent margins.',
      visualHtml: `
        <div class="mock-device computer-mockup">
          <div class="browser-frame">
            <div class="browser-tab">FINWAVE Travel</div>
            <div class="browser-body">
              <div class="travel-search">
                <strong>Flight Booking</strong>
                <div class="search-fields">
                  <span>Pune (PNQ)</span>
                  <span class="arrow-swap">⇄</span>
                  <span>Delhi (DEL)</span>
                </div>
                <div class="flight-results">
                  <div class="flight-row"><span>Air India 842</span><strong>₹ 4,800</strong></div>
                  <div class="flight-row"><span>IndiGo 204</span><strong>₹ 5,100</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is Travel Booking?',
      infoDesc: 'Our Travel Booking engine enables retail agents to search, select, and book tickets for domestic flights, trains, and buses on behalf of walk-in customers. It provides instant reservations and ticket printing.',
      infoPoints: [
        'Direct connection to major airline consolidators and bus fleets.',
        'Authorized ticketing portal with high agent commission margins.',
        'Automatic reservation hold and instant ticket delivery.',
        'Supports instant cancellation and refund processing.'
      ],
      whyTitle: 'Why FINWAVE for Travel?',
      whyPoints: [
        'Excellent margins and commissions compared to public booking portals.',
        'Unified wallet for all bookings (no separate payment accounts).',
        'Easy ticket PDF downloads with custom agent branding and logo.',
        'Dedicated booking support helpline for flight rescheduling.',
        'Fast and transparent refund processing on ticket cancellations.'
      ],
      flowSteps: [
        { num: '1', title: 'Search', desc: 'Enter departure, destination, date of travel, and passenger details.' },
        { num: '2', title: 'Select Route', desc: 'Compare pricing, seating maps, and flight timings; select ticket.' },
        { num: '3', title: 'Pay Wallet', desc: 'Process booking cost directly from partner agent wallet.' },
        { num: '4', title: 'Issue Ticket', desc: 'Receive instant confirmed PNR. Print booking copy for the customer.' }
      ],
      features: [
        { icon: '✈️', title: 'Multi-Mode Travel', desc: 'Search and book flight, bus, and train tickets from one web screen.' },
        { icon: '🎟️', title: 'Direct API Ticketing', desc: 'Live connectivity with flight operators and bus booking networks.' },
        { icon: '💸', title: 'Earn on Booking', desc: 'Earn high margins and customize booking service fees for customers.' },
        { icon: '📄', title: 'Custom Agent Bills', desc: 'Print tickets containing agent outlet name, logo, and contacts.' },
        { icon: '🔄', title: 'Instant Cancellations', desc: 'Perform cancellations and view expected refund amounts in seconds.' },
        { icon: '🛎️', title: 'Reschedule Helpline', desc: '24/7 support line for ticket adjustments and carrier delay queries.' }
      ],
      whoCanUse: [
        'Travel agencies and tour booking desks.',
        'Digital banking agents and village service centers.',
        'Hotel front desks, corporate travel hubs, and local shops.'
      ],
      compliance: [
        'IRCTC guidelines adherence for train ticket booking.',
        'Compliance with major aviation operating regulations.',
        'Secure customer detail and travel data storage.'
      ],
      settlementText: 'Funds are debited instantly from the partner travel wallet at booking. Cancellation refunds are credited back to the same wallet after airline/bus operator deduction confirmation (T+1 days).',
      pricingText: 'Zero portal integration fees. Surcharge/net rates are shared directly with agents, keeping bookings cheaper than public sites. Commission structures are shared on sign-up.'
    },

    hotel: {
      tag: 'Accommodation Booking System',
      title: 'Hotel Booking – Domestic Stays',
      desc: 'Provide hotel booking services to travelers. Compare rates from thousands of domestic hotels and guest houses with high agent margins.',
      visualHtml: `
        <div class="mock-device computer-mockup">
          <div class="browser-frame">
            <div class="browser-tab">Hotel Booking</div>
            <div class="browser-body">
              <div class="hotel-details">
                <strong>Grand Palace Resort</strong>
                <div class="stars">★★★★★</div>
                <p>Pune, Maharashtra</p>
                <div class="hotel-price">
                  <span class="original-price">₹ 4,500</span>
                  <span class="agent-price">₹ 3,800 (Net)</span>
                </div>
                <button class="btn-primary w-full" style="margin-top:1rem;">Book Room</button>
              </div>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is Hotel Booking?',
      infoDesc: 'Hotel Booking allows agents to book accommodations, guest houses, and hotels for customers. It accesses wholesale rates, letting agents quote competitive retail prices while retaining high profit margins.',
      infoPoints: [
        'Access to 50,000+ domestic hotels, resorts, and homestays.',
        'Search based on location, budget, check-in, and amenities.',
        'Instant hotel voucher generation and room booking.',
        'Supports booking adjustments and cancellation flows.'
      ],
      whyTitle: 'Why FINWAVE for Hotels?',
      whyPoints: [
        'B2B wholesale pricing structures with maximum commission margins.',
        'Real-time room availability checks and direct hotel confirmations.',
        'Printable check-in vouchers with custom agent branding.',
        'Easy integration with local travel and tour portals.',
        'Flexible refund processing on cancellations.'
      ],
      flowSteps: [
        { num: '1', title: 'Locate', desc: 'Search accommodations by city, landmark, or specific resort names.' },
        { num: '2', title: 'Select Room', desc: 'Review amenities, room views, bed setups, and select room type.' },
        { num: '3', title: 'Confirm', desc: 'Deduct check-in cost from agent wallet. Generate secure booking voucher.' },
        { num: '4', title: 'Check In', desc: 'Customer check-in at hotel desk. Commission credits immediately.' }
      ],
      features: [
        { icon: '🏨', title: 'Wholesale Room Rates', desc: 'Access B2B discounted rates, bypass retail markups, and earn more.' },
        { icon: '🌎', title: '50,000+ Properties', desc: 'Homestays, budget hotels, premium resorts, and business suites.' },
        { icon: '📅', title: 'Instant Vouchers', desc: 'Download official check-in vouchers with customer references.' },
        { icon: '🏷️', title: 'Flexible Markups', desc: 'Set your own booking fees and margins within the admin panel.' },
        { icon: '💬', title: 'Direct confirmation', desc: 'Automated confirmations with hotel reservation desks.' },
        { icon: '📊', title: 'Commission Tracker', desc: 'Detailed B2B dashboard showing monthly bookings, payouts, and margins.' }
      ],
      whoCanUse: [
        'B2B travel agents and holiday planners.',
        'Local ticket centers and transport coordinators.',
        'Fintech agent networks expanding travel portfolio services.'
      ],
      compliance: [
        'Fulfills standard merchant registration requirements.',
        'Ensures customer data protection under regional policies.',
        'Tax (GST) compliance invoices generated automatically.'
      ],
      settlementText: 'Wallet balance is debited instantly upon booking confirmation. Commission shares are updated in the dashboard and added back to the wallet as per the check-out logs.',
      pricingText: 'No monthly registration costs. Earn excellent net rates on every check-in. Contact sales to activate the hotel booking engine on your portal.'
    },

    nepal: {
      tag: 'Cross-Border Money Remittance',
      title: 'Indo-Nepal Transfer',
      desc: 'Send money from India to Nepal instantly. Secure transfers with cash pickup options at thousands of locations or direct bank transfers.',
      visualHtml: `
        <div class="mock-device phone-mockup">
          <div class="device-screen">
            <div class="phone-status-bar">
              <span>12:52</span>
              <span>5G</span>
            </div>
            <div class="phone-header">
              <span class="back-arrow">←</span>
              <span class="app-name">Indo-Nepal Link</span>
            </div>
            <div class="phone-body">
              <div class="nepal-flag-sec">
                <span class="flag-in">🇮🇳 INR</span>
                <span class="arrow-trans">→</span>
                <span class="flag-np">🇳🇵 NPR</span>
              </div>
              <div class="conversion-box">
                <div class="inp-row"><span>Send</span><strong>₹ 10,000</strong></div>
                <div class="inp-row"><span>Rate</span><strong>1 INR = 1.60 NPR</strong></div>
                <div class="inp-row"><span>Receive</span><strong>रू 16,000</strong></div>
              </div>
              <button class="btn-primary w-full" style="margin-top:1rem;">Process Remittance</button>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is Indo-Nepal Transfer?',
      infoDesc: 'Indo-Nepal Transfer is a cross-border money remittance service enabling Nepalese citizens in India to send funds back to Nepal. The service offers cash payout locations and direct credit to bank accounts in Nepal.',
      infoPoints: [
        'Send money instantly to Nepal using secure cash-to-account channels.',
        'Cash pickup options across 15,000+ IME / Prabhu Money locations.',
        'Direct deposit to major commercial and cooperative banks in Nepal.',
        'Attractive and competitive exchange rates updated daily.'
      ],
      whyTitle: 'Why FINWAVE for Indo-Nepal?',
      whyPoints: [
        'Tie-ups with leading money transfer operators in Nepal (IME/Prabhu).',
        'Minimal transaction fees and highly transparent conversion rates.',
        'Single wallet balance to handle both domestic and Nepal transfers.',
        'Instant SMS alerts to the receiver in Nepal.',
        'Completely legal and secure remittance channel approved by RBI.'
      ],
      flowSteps: [
        { num: '1', title: 'Sender KYC', desc: 'Register Indian sender with Aadhaar/Passport and verify mobile number.' },
        { num: '2', title: 'Receiver Info', desc: 'Enter receiver details in Nepal and select Cash Pickup or Bank Transfer.' },
        { num: '3', title: 'Convert', desc: 'View live exchange rates and convert transaction amount (INR to NPR).' },
        { num: '4', title: 'Payout', desc: 'Receiver gets SMS pin for cash pickup or bank account is credited instantly.' }
      ],
      features: [
        { icon: '🇳🇵', title: 'Nepal-Wide Coverage', desc: 'Partnerships with IME, Prabhu, and City Express payout networks.' },
        { icon: '💸', title: 'Direct Bank Credit', desc: 'Instant bank account deposit to major commercial banks in Nepal.' },
        { icon: '📈', title: 'Competitive Forex', desc: 'Real-time conversion exchange rates, maximizing value sent home.' },
        { icon: '🔒', title: 'Authorized Routing', desc: 'Processed via RBI\'s Indo-Nepal Remittance Scheme guidelines.' },
        { icon: '📲', title: 'Instant PIN Alerts', desc: 'Automated SMS containing cash-claim PIN codes delivered to receiver.' },
        { icon: '📄', title: 'Dual Receipts', desc: 'Generate remittance receipts detailing fees, rate, and pay-out code.' }
      ],
      whoCanUse: [
        'Local merchants, kiosks, and agents in Nepalese migrant hubs.',
        'Nodal remittance centers in border states.',
        'Banking correspondents and fintech platforms.'
      ],
      compliance: [
        'Complies with RBI Indo-Nepal Remittance Scheme guidelines.',
        'Limits: up to ₹50,000 per transaction (maximum 12 transfers per year).',
        'Identity proof required for both sender and beneficiary.'
      ],
      settlementText: 'Agent wallets are debited in INR immediately. The payout is cleared for collection in Nepal in under 10 minutes for cash pickups, and same-day/next-day for bank account transfers.',
      pricingText: 'Standard nominal remittance slab fee set by sponsor banks. Daily exchange rates determine conversion margins. Commission structures are available for active border agent networks.'
    },

    webdev: {
      tag: 'Custom Fintech Solutions',
      title: 'Fintech Website Development',
      desc: 'Get custom fintech websites with payment integrations, KYC flows, and interactive admin dashboards. Engineered for security and scale.',
      visualHtml: `
        <div class="mock-device computer-mockup">
          <div class="browser-frame">
            <div class="browser-tab">Developer Console</div>
            <div class="browser-body code-bg">
              <span class="code-comment">// Initialize Payment SDK</span>
              <p class="code-line"><span class="c-key">import</span> { Finwave } <span class="c-key">from</span> <span class="c-str">'finwave-sdk'</span>;</p>
              <p class="code-line"><span class="c-key">const</span> payment = <span class="c-key">new</span> Finwave({</p>
              <p class="code-line">&nbsp;&nbsp;apiKey: <span class="c-str">'pk_live_832479234'</span>,</p>
              <p class="code-line">&nbsp;&nbsp;theme: <span class="c-str">'dark_mode'</span></p>
              <p class="code-line">});</p>
              <p class="code-line">await payment.openCheckout();</p>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What is Fintech Website Development?',
      infoDesc: 'We design, build, and deploy custom websites, landing pages, and B2B portals for fintech operators, NBFCs, and retail networks. We ensure high security, modern styling, and seamless API integrations.',
      infoPoints: [
        'Responsive mobile-first landing pages with modern layouts.',
        'Secure dashboard panels for merchants, distributors, and admins.',
        'Integrated payment gateways, eKYC, and validation APIs.',
        'Robust administrative backend panels with custom role controls.'
      ],
      whyTitle: 'Why FINWAVE for Development?',
      whyPoints: [
        'Team of developers specialized in financial software and APIs.',
        'Highly secure coding practices to prevent vulnerabilities.',
        'Clean UI/UX focusing on customer conversions and usability.',
        'Fast deployment pipelines using secure cloud hosting.',
        'Comprehensive maintenance, updates, and scaling support.'
      ],
      flowSteps: [
        { num: '1', title: 'Consult', desc: 'Discuss project goals, required integrations, user roles, and style.' },
        { num: '2', title: 'Design UX', desc: 'Create wireframes, dashboard mockups, and get design approval.' },
        { num: '3', title: 'Develop', desc: 'Secure backend coding, database setup, frontend animation, and API integration.' },
        { num: '4', title: 'Launch', desc: 'Perform security testing, server optimization, and deploy onto cloud hosting.' }
      ],
      features: [
        { icon: '💻', title: 'Mobile-First Frontends', desc: 'Stunning layouts built with modern CSS and fluid navigation animations.' },
        { icon: '🔒', title: 'Secure Coding Standards', desc: 'OWASP security compliance, SQL injection protection, and JWT security.' },
        { icon: '⚡', title: 'API Integration', desc: 'Pre-integrated codes for payment gateways, AEPS, DMT, and Aadhaar APIs.' },
        { icon: '📊', title: 'Merchant Dashboards', desc: 'Interactive charts, ledger reports, commission splits, and settlement buttons.' },
        { icon: '⚙️', title: 'Admin Controls', desc: 'Distributor hierarchies, service toggle buttons, and transaction fee controls.' },
        { icon: '🚀', title: 'Cloud Deployment', desc: 'Optimized hosting on AWS/GCP with auto-scaling and firewall configurations.' }
      ],
      whoCanUse: [
        'Fintech startups launching new wallet, lending, or card apps.',
        'NBFCs and micro-finance organizations wanting digital portals.',
        'Established distributor networks seeking white-label portals.',
        'E-commerce platforms requiring complex payment modules.'
      ],
      compliance: [
        'PCI-DSS and OWASP compliant website development practices.',
        'Encrypted customer database records (SHA-256 / AES).',
        'Secure API credential storage and token authentication.'
      ],
      settlementText: 'Project milestones determine payment timelines. Development milestones are reviewed on staging servers, and source codes are transferred upon project sign-off and launch.',
      pricingText: 'Project-based pricing models depending on feature list, custom API integrations, and page count. Standard maintenance plans available. Contact us with your scope of work for a custom quote.'
    },

    verification: {
      tag: 'KYC and Identity APIs',
      title: 'Verification APIs',
      desc: 'Verify Aadhaar, PAN, GST, Passport, Voter ID, and bank account details instantly via single API call. Plug real-time validation into your onboarding flows.',
      visualHtml: `
        <div class="mock-device computer-mockup">
          <div class="browser-frame">
            <div class="browser-tab">API Response</div>
            <div class="browser-body json-bg">
              <pre><code>{
  "status": "success",
  "data": {
    "verified": true,
    "name": "FINWAVE TECH PRIVATE LIMITED",
    "gst_status": "Active",
    "pan_match": 1.0
  }
}</code></pre>
            </div>
          </div>
        </div>
      `,
      infoTitle: 'What are Verification APIs?',
      infoDesc: 'Verification APIs connect your onboarding portal directly to official government registries (UIDAI, NSDL, GSTIN, Passport Seva). Automate compliance checks and bank account validations (penny drop) instantly.',
      infoPoints: [
        'Aadhaar verification with secure OTP/biometric validation.',
        'Verify PAN details, status, and match names in real-time.',
        'Verify GST registration status, filing history, and addresses.',
        'Bank Account validation using penny-drop IMPS transfers.'
      ],
      whyTitle: 'Why FINWAVE for Verification?',
      whyPoints: [
        'Direct connectivity to source registries for high uptime.',
        'Response times under 1 second for seamless user onboarding.',
        'Single unified documentation for all document categories.',
        'Cost-effective pricing slabs with volume discounts.',
        'Sandbox environment with dummy test documents.'
      ],
      flowSteps: [
        { num: '1', title: 'Submit', desc: 'Customer submits ID details (e.g. PAN card number) in onboarding app.' },
        { num: '2', title: 'API Query', desc: 'Portal forwards ID credentials to Finwave verification server.' },
        { num: '3', title: 'Verify', desc: 'Finwave securely queries database and validates name, status, and details.' },
        { num: '4', title: 'Approve', desc: 'Result returns instantly. Onboarding portal approves or rejects profile.' }
      ],
      features: [
        { icon: '🆔', title: 'Aadhaar OTP & Biometric', desc: 'Compliant UIDAI query flows with secure OTP and fingerprint verify.' },
        { icon: '🛡️', title: 'PAN Validation', desc: 'Instant check against NSDL registry for status and matching name scores.' },
        { icon: '🏢', title: 'GSTIN Registry', desc: 'Verify business details, active filing status, and address details.' },
        { icon: '🏦', title: 'Penny-Drop Bank Check', desc: 'Verify account active status and retrieve holder name using IMPS drop.' },
        { icon: '📄', title: 'DL & Voter ID check', desc: 'Validate driving licenses and voter listings across state registries.' },
        { icon: '⚡', title: 'Sub-Second Speeds', desc: 'Ultra-fast API response cycles to prevent customer dropout on sign-up.' }
      ],
      whoCanUse: [
        'Neobanks, wallet apps, and loan disbursement portals.',
        'HR platforms verifying employee identity documents.',
        'E-commerce websites onboarding new vendors and merchants.',
        'Mutual funds, stockbroking apps, and insurance portals.'
      ],
      compliance: [
        'Strict adherence to UIDAI and NPCI security requirements.',
        'Data encryption in transit (HTTPS) and at rest.',
        'Ensures customer consent logs are recorded for all checks.'
      ],
      settlementText: 'API credit loads are handled in prepaid wallets. Wallet balance is deducted per successful API query. Automated threshold alerts prompt you to reload credits before depletion.',
      pricingText: 'Per-query fee structure with significant discounts for monthly commitments of 10k+ queries. View pricing packages and developer docs inside our partner console.'
    },

    pos: {
      tag: 'Handheld Payment Hardware',
      title: 'Android POS Devices',
      desc: 'Smart Android handheld terminals preloaded with AEPS, DMT, Micro ATM, and BBPS apps. Features thermal receipt printer and biometric reader.',
      visualHtml: `
        <div class="mock-device pos-terminal">
          <div class="pos-device-frame">
            <div class="pos-printer-feed paper-out"></div>
            <div class="pos-screen android-screen">
              <div class="pos-android-apps">
                <span class="app-bubble">AEPS</span>
                <span class="app-bubble">DMT</span>
                <span class="app-bubble">BBPS</span>
                <span class="app-bubble">Micro ATM</span>
              </div>
              <div class="pos-battery">🔋 98%</div>
            </div>
            <div class="pos-camera-eye"></div>
            <div class="pos-branding">FINWAVE POS</div>
          </div>
        </div>
      `,
      infoTitle: 'What are Android POS Devices?',
      infoDesc: 'Android POS Devices are handheld, smart payment machines running customized Android software. They allow merchants and agents to run their complete financial business, take payments, and print receipts on-the-go.',
      infoPoints: [
        'Preloaded with AEPS, Domestic Transfer, Micro ATM, and BBPS apps.',
        'Integrated 58mm high-speed thermal receipt printer.',
        'Supports card swipe, chip read, and contact-less NFC payments.',
        'Dual SIM card slots with 4G LTE, Wi-Fi, and GPS.'
      ],
      whyTitle: 'Why FINWAVE for POS Devices?',
      whyPoints: [
        'All-in-one hardware eliminating the need for separate phones and printers.',
        'Remote terminal management: push updates and lock lost devices.',
        'Rugged device build built for heavy daily merchant operations.',
        'Excellent sponsor bank partnerships preloaded.',
        'Prompt hardware replacement support and warranty coverage.'
      ],
      flowSteps: [
        { num: '1', title: 'Setup', desc: 'Onboard merchant, map terminal serial number, and link bank account.' },
        { num: '2', title: 'App Boot', desc: 'Turn on device; secure launcher loads financial merchant apps.' },
        { num: '3', title: 'Transact', desc: 'Merchant accepts card swipe, processes AEPS, or collects utility bills.' },
        { num: '4', title: 'Print Receipt', desc: 'Thermal printer dispenses transaction slip. Digital ledger updates.' }
      ],
      features: [
        { icon: '📱', title: 'Android 10 OS', desc: 'Intuitive touch screen, fast app loading, and secure application launcher.' },
        { icon: '📄', title: 'Thermal Printer', desc: 'Integrated 58mm paper feed printing receipts in under 3 seconds.' },
        { icon: '💳', title: 'Triple Card Reader', desc: 'Process EMV chip, magnetic stripe, and NFC contactless card payments.' },
        { icon: '📶', title: '4G LTE & Wi-Fi', desc: 'Uninterrupted network connectivity using dual SIM cards and local Wi-Fi.' },
        { icon: '🔋', title: 'Massive Battery', desc: '5000mAh battery built to last all-day field collection routes.' },
        { icon: '⚙️', title: 'MDM Remote Management', desc: 'Track device coordinates, update software, and perform remote locks.' }
      ],
      whoCanUse: [
        'Doorstep delivery agents and cash collection networks.',
        'Kirana stores and retail merchants.',
        'Cooperative bank agents conducting outdoor deposits.',
        'Event ticketing coordinators and parking managers.'
      ],
      compliance: [
        'PCI-PTS, EMV L1 & L2, and CE hardware certifications.',
        'RBI and NPCI compliance guidelines pre-certified.',
        'Tamper-detect sensors instantly wipe keys on security breach.'
      ],
      settlementText: 'Transaction settlements are processed automatically. AEPS and Card withdrawals credit merchant wallets in real-time, allowing immediate ledger balances and payout transfers.',
      pricingText: 'Hardware device procurement cost with nominal yearly server software license fees. Warranty packages and bulk corporate deals are available. Reach out to procurement for quotes.'
    }
  };

  // 2. FAQ Box Accordion Helper
  const setupFaqsAccordion = () => {
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
      card.addEventListener('click', () => {
        const isOpen = card.classList.contains('active');
        // Close others
        faqCards.forEach(c => c.classList.remove('active'));
        if (!isOpen) {
          card.classList.add('active');
        }
      });
    });
  };

  // 3. Render Detail Page Logic
  const renderDetailPage = () => {
    // Parse URL query parameter
    const params = new URLSearchParams(window.location.search);
    const serviceKey = params.get('service');

    if (!serviceKey || !servicesData[serviceKey]) {
      // Fallback redirect to index if service not found
      window.location.href = 'index.html';
      return;
    }

    const data = servicesData[serviceKey];

    // Populate Hero Section
    document.getElementById('heroTag').textContent = data.tag;
    document.getElementById('heroTitle').textContent = data.title;
    document.getElementById('heroDesc').textContent = data.desc;
    document.getElementById('heroVisual').innerHTML = data.visualHtml;

    // Populate What Is
    document.getElementById('infoTitle').textContent = `What is ${serviceKey.toUpperCase()}?`;
    if (serviceKey === 'dmt') document.getElementById('infoTitle').textContent = 'What is DMT?';
    if (serviceKey === 'cms') document.getElementById('infoTitle').textContent = 'What is CMS?';
    if (serviceKey === 'bbps') document.getElementById('infoTitle').textContent = 'What is BBPS?';
    if (serviceKey === 'matm') document.getElementById('infoTitle').textContent = 'What is Micro ATM?';
    if (serviceKey === 'webdev') document.getElementById('infoTitle').textContent = 'What is Fintech Web Dev?';
    if (serviceKey === 'pos') document.getElementById('infoTitle').textContent = 'What is Android POS?';

    document.getElementById('infoDesc').textContent = data.infoDesc;

    // Populate What Is Points
    const pointsUl = document.getElementById('infoPoints');
    pointsUl.innerHTML = '';
    data.infoPoints.forEach(pt => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="check-icon">✓</span> ${pt}`;
      pointsUl.appendChild(li);
    });

    // Populate Why Choose Us Card
    document.getElementById('whyTitle').textContent = `Why FINWAVE for ${serviceKey.toUpperCase()}?`;
    if (serviceKey === 'dmt') document.getElementById('whyTitle').textContent = 'Why FINWAVE for DMT?';
    if (serviceKey === 'cms') document.getElementById('whyTitle').textContent = 'Why FINWAVE for CMS?';
    if (serviceKey === 'bbps') document.getElementById('whyTitle').textContent = 'Why FINWAVE for BBPS?';
    if (serviceKey === 'matm') document.getElementById('whyTitle').textContent = 'Why FINWAVE for Micro ATM?';
    if (serviceKey === 'webdev') document.getElementById('whyTitle').textContent = 'Why FINWAVE for Web Dev?';
    if (serviceKey === 'pos') document.getElementById('whyTitle').textContent = 'Why FINWAVE for POS?';

    const whyUl = document.getElementById('whyPoints');
    whyUl.innerHTML = '';
    data.whyPoints.forEach(pt => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="bullet-check">✓</span> ${pt}`;
      whyUl.appendChild(li);
    });

    // Populate Flowchart Target
    document.getElementById('flowTargetName').textContent = serviceKey.toUpperCase();
    if (serviceKey === 'webdev') document.getElementById('flowTargetName').textContent = 'Website Development';
    if (serviceKey === 'pos') document.getElementById('flowTargetName').textContent = 'Android POS';

    // Populate Flow Steps
    const flowStepsContainer = document.getElementById('flowSteps');
    flowStepsContainer.innerHTML = '';
    data.flowSteps.forEach((step, index) => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'flow-step';
      stepDiv.innerHTML = `
        <div class="step-num">${step.num}</div>
        <h3>${step.title}</h3>
        <p>${step.desc}</p>
      `;
      flowStepsContainer.appendChild(stepDiv);
    });

    // Populate Key Features Cards
    const featuresContainer = document.getElementById('featureCards');
    featuresContainer.innerHTML = '';
    data.features.forEach((feat, index) => {
      const card = document.createElement('div');
      card.className = 'detail-feature-card';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', (index * 50).toString());
      card.innerHTML = `
        <div class="df-icon">${feat.icon}</div>
        <h3>${feat.title}</h3>
        <p>${feat.desc}</p>
      `;
      featuresContainer.appendChild(card);
    });

    // Populate Who Can Use
    const whoUl = document.getElementById('whoCanUsePoints');
    whoUl.innerHTML = '';
    data.whoCanUse.forEach(pt => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="dot-bullet">•</span> ${pt}`;
      whoUl.appendChild(li);
    });

    // Populate Compliance
    const compUl = document.getElementById('compliancePoints');
    compUl.innerHTML = '';
    data.compliance.forEach(pt => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="dot-bullet">•</span> ${pt}`;
      compUl.appendChild(li);
    });

    // Populate Settlement & Pricing
    document.getElementById('settlementText').textContent = data.settlementText;
    document.getElementById('pricingText').textContent = data.pricingText;

    // Populate FAQs (Generate 4 dynamically based on matched service)
    const faqGrid = document.getElementById('faqGrid');
    faqGrid.innerHTML = '';

    const faqsDb = {
      aeps: [
        { q: 'Do customers need a debit card?', a: 'No, AEPS is entirely cardless. Transactions only require the customer\'s Aadhaar number and biometric fingerprint verification linked to their bank account.' },
        { q: 'Which scanners are supported?', a: 'All major STQC certified scanners (e.g. Mantra MFS100, Morpho MSO1300) with active RD-Service registrations (both L0 and L1 compliance) are supported.' },
        { q: 'What happens if a transaction times out?', a: 'Timed-out transactions undergo automatic daily reconciliation. If a customer\'s account is debited but the agent wallet is not credited, banks usually reverse the debit within 3-5 working days.' },
        { q: 'Are there transactional daily limits?', a: 'Yes, banks and NPCI enforce limits (typically ₹10,000 per transaction and up to ₹50,000 daily per Aadhaar account).' }
      ],
      dmt: [
        { q: 'Can walk-in customers transfer cash?', a: 'Yes, Domestic Money Transfer is designed for cash-to-account remittances. The agent accepts cash from the walk-in customer and transfers it digitally to their beneficiary bank account.' },
        { q: 'Are transactions available on holidays?', a: 'Yes, our money transfer systems are powered by IMPS, which operates 24/7, 365 days a year, including all Sundays and bank holidays.' },
        { q: 'What is the limit per sender?', a: 'Under RBI guidelines, senders can transfer up to ₹25,000 per month per mobile number verified via OTP.' },
        { q: 'How long does a refund take?', a: 'If a transaction fails, agents can trigger an instant OTP-secured refund back to their wallet, returning cash immediately to the customer.' }
      ],
      matm: [
        { q: 'Are all debit cards supported?', a: 'Yes, all interoperable debit cards issued by Indian banks running on RuPay, Visa, and Mastercard networks are supported.' },
        { q: 'How does the device connect?', a: 'The Micro ATM connects to your Android smartphone or tablet via Bluetooth. Simply download the merchant portal app to pair.' },
        { q: 'Is a printer mandatory?', a: 'No. While the terminal supports thermal print receipts, agents can also send digital receipt slips via SMS or WhatsApp.' },
        { q: 'What is the warranty coverage?', a: 'All Micro ATM hardware comes with a 1-year manufacturer warranty covering device defects. Replacement devices are dispatched promptly.' }
      ],
      cms: [
        { q: 'Can collection agents work offline?', a: 'Yes, our CMS app supports offline collection logs. The data is cached securely on the device and automatically synced to the server once internet connectivity is restored.' },
        { q: 'How are cash shortages monitored?', a: 'Agents record precise denominations during collection. Variances are highlighted instantly upon branch vault deposits and flagged to admin queues.' },
        { q: 'What happens if an agent exceeds cash limits?', a: 'The agent app automatically locks and blocks new collection inputs once they cross their daily cash cap, preventing risk until they hand over cash.' },
        { q: 'Can we integrate it with our Salesforce CRM?', a: 'Yes, we provide standard webhook and REST integrations to sync collection data directly with Salesforce, core systems, or company ERPs.' }
      ],
      bbps: [
        { q: 'Are municipal tax payments supported?', a: 'Yes, municipal corporations, water taxes, property taxes, gas billers, and electricity boards are covered under BBPS.' },
        { q: 'How fast do billers update payments?', a: 'Most major national billers update payment records instantly, while certain municipal networks take up to 24-48 hours to post.' },
        { q: 'Can agents set up auto-pay?', a: 'Yes, recurring bill categories support auto-pay configurations, letting you schedule payments on monthly due cycles.' },
        { q: 'Is there a transaction limit?', a: 'Standard daily transaction caps follow NPCI BBPS rules, varying by biller category and payment mode.' }
      ],
      prepaid: [
        { q: 'Is credit history checked for issuance?', a: 'No, prepaid cards are wallet-linked, meaning no credit score is queried. Users only need standard identity validation.' },
        { q: 'Are international transactions supported?', a: 'By default, cards are locked to domestic spending in India. International transactions can be toggled via admin console.' },
        { q: 'How are corporate balances managed?', a: 'Companies manage corporate card pools in a central dashboard, loading money and pulling expense statements for audit.' },
        { q: 'What is the card delivery timeline?', a: 'Virtual cards are issued instantly. Physical cards are printed and dispatched within 5-7 business days.' }
      ],
      travel: [
        { q: 'Can agents book IRCTC train tickets?', a: 'Yes, agents with active IRCTC credentials can log in to process train bookings directly.' },
        { q: 'What happens during flight delays?', a: 'Our travel support line assists agents with rescheduling tickets or processing operator refund waivers.' },
        { q: 'Are group bookings allowed?', a: 'Yes, group bookings for up to 9 passengers can be processed in a single search and booking session.' },
        { q: 'How are cancellations handled?', a: 'Cancellations can be made in the dashboard. Refund proceeds hit the agent wallet after operator deductions.' }
      ],
      hotel: [
        { q: 'Are taxes included in B2B rates?', a: 'Yes, search results display complete pricing structures including base fare, agent net rate, commissions, and GST taxes.' },
        { q: 'What is the check-in documentation?', a: 'Guests must present the printed check-in voucher along with an authorized identity card (Aadhaar, Passport, etc.).' },
        { q: 'Can we cancel reservations?', a: 'Yes, cancellation rules follow specific hotel policies. The refund timeline is detailed during search.' },
        { q: 'Are child bed options supported?', a: 'Yes, room selection grids let you request extra beds or children inclusions prior to wallet debit.' }
      ],
      nepal: [
        { q: 'Can Indian citizens send money to Nepal?', a: 'No, under the Indo-Nepal Remittance Scheme, transfers are only permitted for Nepalese migrants residing and working in India.' },
        { q: 'Are there transfer limits?', a: 'Yes, RBI limits transfers to a maximum of ₹50,000 per transaction and up to 12 remittances per year.' },
        { q: 'Where can the receiver pick up cash?', a: 'Cash can be collected at thousands of IME, Prabhu Money, and City Express payout offices across Nepal.' },
        { q: 'What documents are required?', a: 'The sender must present a valid government ID (Aadhaar, Voter ID, or Nepalese Passport) at the agent location.' }
      ],
      webdev: [
        { q: 'How long does a website project take?', a: 'Standard landing pages with basic payment integrations take 2-3 weeks, while full dashboard systems take 6-8 weeks.' },
        { q: 'Do you provide web hosting?', a: 'We set up secure cloud hosting (AWS, Google Cloud, or Heroku) under your corporate accounts and manage deployments.' },
        { q: 'Can we request features post-launch?', a: 'Yes, we offer ongoing maintenance packages to scale servers, update APIs, and add features.' },
        { q: 'Are search optimizations included?', a: 'Yes, all custom portals and landing pages include semantic markup, meta optimization, and fast load setups.' }
      ],
      verification: [
        { q: 'How accurate is name matching?', a: 'Our API matches name strings from documents with banking records, returning a similarity score between 0.0 and 1.0.' },
        { q: 'Is there a queries limit per second (QPS)?', a: 'Our standard servers handle up to 50 QPS. High-volume partners can request dedicated server nodes for greater throughput.' },
        { q: 'Do we get charged for failed queries?', a: 'No, charges are only levied on successful registry query matches. Invalid document formats do not count.' },
        { q: 'How do we test the API?', a: 'On sign-up, developers receive sandboxed keys and mock credentials to run test queries.' }
      ],
      pos: [
        { q: 'Does the terminal need a phone connection?', a: 'No, Android POS terminals contain dual SIM slots and Wi-Fi chips, meaning they run independently.' },
        { q: 'Can we install other Android apps?', a: 'Devices run on a locked launcher. Custom merchant portals are vetted and updated remotely.' },
        { q: 'Is paper rolls supply included?', a: 'We ship a starter roll kit with the device. Standard 58mm thermal rolls are easily sourced locally.' },
        { q: 'What is the device replacement policy?', a: 'Defective devices under warranty are picked up and replaced with fresh terminals within 3 business days.' }
      ]
    };

    const matchedFaqs = faqsDb[serviceKey] || faqsDb['aeps'];
    matchedFaqs.forEach(faq => {
      const faqCard = document.createElement('div');
      faqCard.className = 'faq-card';
      faqCard.innerHTML = `
        <div class="faq-question">
          <h3>${faq.q}</h3>
          <span class="faq-arrow">▼</span>
        </div>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      `;
      faqGrid.appendChild(faqCard);
    });

    // Setup collapsible interactions
    setupFaqsAccordion();

    // Observe dynamic AOS elements (e.g. features cards)
    const dynamicAosElements = document.querySelectorAll('.detail-features-grid [data-aos]');
    const dynamicAosObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-aos-delay') || 0);
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, delay);
          dynamicAosObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -45px 0px' });

    dynamicAosElements.forEach(el => dynamicAosObserver.observe(el));
  };

  // Run render logic
  renderDetailPage();
});
