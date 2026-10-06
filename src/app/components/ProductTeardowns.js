"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./ProductTeardowns.module.css";

const categories = ["All", "Hyperlocal & Delivery", "Fintech & Payments", "Growth & Activation", "Media & Streaming"];

const teardownsData = [
  {
    id: "swiggy-eta",
    number: "01",
    product: "Swiggy",
    category: "Hyperlocal & Delivery",
    tagline: "Order Tracking & ETA Reliability",
    color: "#FC8019",
    scopeType: "Workflow Teardown (Post-Order to Doorstep Delivery)",
    
    // 1. Introduction & Context
    introContext: {
      product: "Swiggy (Bundl Technologies)",
      coreMission: "Deliver unparalleled convenience by connecting urban consumers with neighborhood restaurants and groceries in under 30 minutes.",
      whyChosen: "The order tracking screen is Swiggy's highest-frequency surface (opened 4–7 times per transaction across 1.5M+ daily orders). It is the critical touchpoint where customer trust is either reinforced or irreversibly damaged.",
      scope: "End-to-end post-checkout tracking workflow: from order confirmation through preparation, delivery partner dispatch, live ETA estimation, and doorstep drop-off."
    },

    // 2. Business Goals & Monetization
    businessGoals: {
      primaryGoals: "Maximize 7-day and 30-day repeat order frequency while aggressively minimizing customer support ticket volume (WISMO: 'Where Is My Order?').",
      valueCapture: "Swiggy captures value via restaurant commissions (18–25%), customer delivery fees, platform convenience fees (₹6–10/order), and premium Swiggy One subscriptions.",
      businessImpact: "Every user-initiated cancellation due to delivery delay forces Swiggy to compensate the restaurant while issuing full customer refunds—turning a profitable order into a net loss of ₹250–₹400."
    },

    // 3. Target Audience & Personas
    audiencePersonas: {
      persona: "Rohan, 27 · Mid-level Software Engineer in Bengaluru",
      contextOfUse: "Orders lunch between back-to-back sprint meetings or dinner late at night after long work hours. Extremely time-sensitive and anxiety-prone.",
      jtbd: "When I order food while on a tight schedule, give me predictable and honest status updates so I don't feel anxious, blindsided by delays, or forced to contact customer care.",
      keyMotivations: ["Predictability over optimistic speed", "Real-time transparency", "Effortless communication with rider"]
    },

    // 4. Onboarding & First-Time User Experience (FTUE)
    ftue: {
      flow: "Seamless immediate transition from payment success modal to the dedicated tracking map interface.",
      ahaMoment: "The moment the restaurant confirms the order and the animated delivery partner avatar appears on the live map navigating towards the kitchen.",
      firstTimeFriction: "New users are prompted for location permissions and phone call permissions without prior context, triggering drop-off if accidentally declined."
    },

    // 5. Core User Journey & Feature Analysis
    userJourney: {
      steps: [
        { label: "State 01: Order Placed & Accepted", detail: "Restaurant POS receives ticket. Swiggy displays 'Restaurant is preparing your food' with a circular countdown timer." },
        { label: "State 02: Partner Assignment & Transit", detail: "Algorithmic dispatch assigns rider based on proximity. Map renders rider icon en route to restaurant." },
        { label: "State 03: Food Picked Up", detail: "Rider verifies order bag; live GPS route activates with animated polyline toward customer address." },
        { label: "State 04: Arrival & Contactless Delivery", detail: "Proximity geofence triggers 'Partner is near you' notification and IVR call fallback." }
      ],
      uiUxAnalysis: "Visual hierarchy prioritizes the estimated delivery time in large bold typography at the top, followed by interactive Mapbox GPS viewport in the center, and a collapsible bottom drawer housing order summary and emergency support actions."
    },

    // 6. Pain Points & Friction Analysis
    painPoints: [
      {
        title: "The Kitchen 'Silence Gap' (12–18 mins)",
        desc: "Between order confirmation and rider pickup, the map remains static with generic looping animations. Users perceive this as a frozen order and repeatedly refresh or ping support."
      },
      {
        title: "Silent ETA Slippage & Erosion of Honesty",
        desc: "When preparation or traffic slips, the countdown quietly resets from '12 mins' back to '22 mins' without any alert. Users feel gaslighted by the interface, driving instant rage and cancellation requests."
      },
      {
        title: "GPS-to-Timer Desynchronization",
        desc: "Rider avatar frequently pauses or stutters at traffic junctions while the countdown continues ticking down, creating cognitive dissonance between visual cues and numerical promises."
      }
    ],

    // 7. Actionable Recommendations & Solutions
    recommendations: [
      {
        solution: "Proactive Delay-Communication Flow with Contextual Reason",
        framework: "RICE Score: 88 · High Impact / Medium Effort",
        detail: "When predicted delivery drifts >3 mins past initial ETA, auto-trigger a proactive banner: 'Kitchen is experiencing high volume — +6 mins added'. Provide transparent reason codes (kitchen peak, heavy rain, rider reassignment) before the user has to ask."
      },
      {
        solution: "Stage-Gate Kitchen Telemetry Integration",
        framework: "RICE Score: 74 · Medium Impact / High Effort",
        detail: "Hook directly into partner POS terminals to reflect real kitchen states: 'Order Queued' → 'Cooking on Stove' → 'Packaging in Bag'. Replaces the anxiety-inducing silence gap with concrete progress."
      }
    ],

    // 8. Success Metrics
    metrics: {
      northStar: "Support contacts per delayed order ('Where is my order?' queries) ↓ 25%",
      primaryMetrics: [
        "User-initiated order cancellation rate during prep phase ↓ 12%",
        "Post-delivery CSAT score for delivery tracking accuracy ↑ 18%"
      ],
      guardrailMetric: "7-day repeat order rate does not drop >1.5%; Rider safety SLA remains protected (no penalizing drivers for delays)."
    }
  },

  {
    id: "whatsapp-upi",
    number: "02",
    product: "WhatsApp",
    category: "Fintech & Payments",
    tagline: "UPI Payments Inside Chat Threads",
    color: "#25D366",
    scopeType: "Feature Teardown (P2P Financial Transactions inside Messaging)",
    
    // 1. Introduction & Context
    introContext: {
      product: "WhatsApp Pay (Meta Platforms)",
      coreMission: "Enable fast, secure, and friction-free money transfers directly inside conversations, making payments as effortless as sending a photo.",
      whyChosen: "WhatsApp holds a monopoly on Indian attention with 500M+ DAUs, yet WhatsApp Pay captured <1% market share compared to PhonePe (48%) and Google Pay (37%). It is the definitive case study in why sheer distribution does not guarantee adoption.",
      scope: "The peer-to-peer (P2P) in-chat payments funnel: entry points, bank account linking, payment execution, and post-transaction feedback."
    },

    // 2. Business Goals & Monetization
    businessGoals: {
      primaryGoals: "Drive high-frequency user utility, build transactional stickiness inside WhatsApp, and lay infrastructure for commercial WhatsApp Business API monetization.",
      valueCapture: "Zero direct take-rate on consumer UPI, but unlocks enterprise merchant payment processing, conversational commerce checkout fees, and small business advertising.",
      businessImpact: "If WhatsApp converts just 10% of its chatting base to weekly transactors, it becomes the largest financial super-app in Southeast Asia without any user acquisition cost."
    },

    // 3. Target Audience & Personas
    audiencePersonas: {
      persona: "Pooja, 23 · University Student & Group Trip Coordinator",
      contextOfUse: "Splitting restaurant bills, auto rides, and movie tickets inside active WhatsApp group chats. Wants to settle debts instantly without leaving the chat app.",
      jtbd: "When I am discussing shared expenses with friends or family, let me pay them in-context so I don't have to copy phone numbers, open GPay, and return to report that I paid.",
      keyMotivations: ["Zero app switching", "Immediate shared receipt confirmation", "Absolute bank security"]
    },

    // 4. Onboarding & First-Time User Experience (FTUE)
    ftue: {
      flow: "Initiated via paperclip attachment icon → Select 'Payment' → Accept UPI Terms → Bank SMS verification → Select bank account → Set/Verify UPI PIN.",
      ahaMoment: "Sending ₹10 to a friend inside their chat thread and immediately seeing an interactive green payment bubble appear in the message stream.",
      firstTimeFriction: "The 4-step bank linking process requires physical debit card details if the user does not already have an active UPI PIN, causing an 55%+ drop-off at Step 3."
    },

    // 5. Core User Journey & Feature Analysis
    userJourney: {
      steps: [
        { label: "Step 01: Discover & Tap Entry Point", detail: "Open conversation → tap attachment paperclip (or rupee icon in text field) → tap Payment." },
        { label: "Step 02: Specify Amount & Note", detail: "Enter ₹ value with optional note (e.g. 'Dinner split'); preview recipient bank handle." },
        { label: "Step 03: NPCI PIN Authorization", detail: "Modal switch to standard NPCI UPI PIN input screen." },
        { label: "Step 04: In-Chat Receipt Bubble", detail: "Inline chat bubble shows transaction status ('Sent ₹500', timestamp, transaction ID)." }
      ],
      uiUxAnalysis: "WhatsApp adheres strictly to its minimalist chat UI. The payment receipt appears as a standard message bubble. However, it lacks visual celebration or prominent trust badges, leaving users unsure if the transaction cleared securely."
    },

    // 6. Pain Points & Friction Analysis
    painPoints: [
      {
        title: "Critically Low Discoverability & Buried Entry Points",
        desc: "Unlike GPay and PhonePe where the entire app is built around a prominent 'Scan Any QR' camera button, WhatsApp hides payments inside a secondary attachment drawer."
      },
      {
        title: "Perceived Security Mismatch (Chat App vs. Bank App)",
        desc: "Users categorize WhatsApp as a casual platform for family banter, memes, and forwards. The mental model resists entering banking credentials and UPI PINs in the same space as group banter."
      },
      {
        title: "Absence of Offline Merchant Utility",
        desc: "India's UPI revolution was won at neighborhood kirana stores scanning printed QR codes. WhatsApp Pay launched as P2P only, completely lacking offline merchant scanning habits."
      }
    ],

    // 7. Actionable Recommendations & Solutions
    recommendations: [
      {
        solution: "Contextual Natural-Language 'Split Bill' Smart Pill",
        framework: "RICE Score: 85 · High Impact / Low Effort",
        detail: "When chat text contains payment triggers (e.g., 'your share is ₹450' or when a receipt image is sent), render a contextual actionable pill: 'Tap to Pay ₹450'. Bypasses discovery entirely and converts conversational intent into one-tap execution."
      },
      {
        solution: "Dedicated Home Header QR Scanner",
        framework: "RICE Score: 81 · High Impact / Medium Effort",
        detail: "Replace the seldom-used status camera icon with an omnichannel UPI QR Scanner capable of reading any BharatQR/merchant standee, bringing offline utility to parity with PhonePe."
      }
    ],

    // 8. Success Metrics
    metrics: {
      northStar: "Activated First-to-Second Payment Conversion Rate ↑ 22% within 14 days",
      primaryMetrics: [
        "Bank linking completion rate during onboarding ↑ 18%",
        "Monthly Transacting Users (MTU) per 1,000 DAUs ↑ 35%"
      ],
      guardrailMetric: "User-reported spam complaints or chat flow interruption dismissals remain below 1.0%."
    }
  },

  {
    id: "zomato-onboarding",
    number: "03",
    product: "Zomato / Swiggy",
    category: "Growth & Activation",
    tagline: "Onboarding & First-Order Activation Funnel",
    color: "#E23744",
    scopeType: "Funnel Teardown (Install to Completed First Order)",
    
    // 1. Introduction & Context
    introContext: {
      product: "Zomato & Swiggy Food Delivery",
      coreMission: "Enable instant discovery of local culinary options and deliver freshly prepared meals to consumers with minimal friction.",
      whyChosen: "Food delivery customer acquisition costs (CAC) run between ₹250–₹400 per app install in Tier 1 Indian cities. If a newly acquired user does not place an order within their first 72 hours, over 65% churn permanently.",
      scope: "The new-user activation funnel: from fresh app download through permission grants, registration, restaurant discovery, cart building, and first checkout."
    },

    // 2. Business Goals & Monetization
    businessGoals: {
      primaryGoals: "Maximize Install-to-First-Order conversion, reduce Time-to-First-Value (TTFV), and establish initial payment card/address persistence for long-term LTV.",
      valueCapture: "First orders are subsidized via welcome promo codes (e.g., ₹150 off), with lifetime profitability recouped between orders 3 through 8.",
      businessImpact: "Lifting new user activation from 18% to 24% amortizes marketing ad spend 30% faster and directly improves monthly cohort retention curves."
    },

    // 3. Target Audience & Personas
    audiencePersonas: {
      persona: "Ananya, 21 · College Fresher Moving into a New Apartment",
      contextOfUse: "Just finished unpacking, kitchen is empty, exhausted, hungry, scrolling through app stores looking for food discounts.",
      jtbd: "When I am hungry in an unfamiliar neighborhood, show me delicious nearby food quickly and let me order without making me jump through painful registration hoops.",
      keyMotivations: ["Speed to food", "Clear upfront pricing and discounts", "Zero cognitive overload"]
    },

    // 4. Onboarding & First-Time User Experience (FTUE)
    ftue: {
      flow: "Install → Splash screen → Mandatory phone number entry → SMS OTP verification → Location access dialog → Notification permission dialog → Home feed.",
      ahaMoment: "Browsing a curated restaurant list, seeing an eye-catching photo of their favorite biryani, and seeing an auto-applied '50% Welcome Discount' banner.",
      firstTimeFriction: "Demanding 3 consecutive OS permissions (phone, location, notifications) before the user has seen even a single restaurant or menu item."
    },

    // 5. Core User Journey & Feature Analysis
    userJourney: {
      steps: [
        { label: "Step 01: Gatekeeper Wall", detail: "Mandatory phone verification and dual system permission dialogues before entering." },
        { label: "Step 02: Exploration & Filter", detail: "Home feed showcases hero carousel, dish categories, and algorithmic recommendation rows." },
        { label: "Step 03: Menu & Item Customization", detail: "Restaurant menu page with nested modifiers (portion sizes, spice levels, add-ons)." },
        { label: "Step 04: Checkout & Payment", detail: "Address entry, delivery tip selection, coupon application, and payment gateway selection." }
      ],
      uiUxAnalysis: "Zomato's discovery feed uses high-contrast food photography and sticky bottom cart bars. However, the checkout screen is cluttered with upselling add-ons (beverages, cutlery checkboxes, tipping pills), creating unnecessary cognitive drag for first-timers."
    },

    // 6. Pain Points & Friction Analysis
    painPoints: [
      {
        title: "Premature Permission Interrogation",
        desc: "Users who deny location permissions on first launch receive a blank screen or a clunky manual pin-code entry interface, resulting in a 28% drop-off before reaching the home feed."
      },
      {
        title: "Disappearing First-Order Promo Codes",
        desc: "Promotional welcome banners promise '₹150 Off First Order', but when the user arrives at the final payment screen, the discount is not auto-applied and requires digging through coupon drawers."
      },
      {
        title: "Address Configuration Friction at Checkout",
        desc: "Entering complete flat/building/landmark details for the first time takes over 90 seconds on a tiny mobile keyboard, leading to high cart abandonment at the final hurdle."
      }
    ],

    // 7. Actionable Recommendations & Solutions
    recommendations: [
      {
        solution: "'Browse First, Authenticate at Checkout' Delayed Registration",
        framework: "RICE Score: 92 · High Impact / Medium Effort",
        detail: "Allow new users to browse menus and add dishes to their cart immediately using approximate IP-based location. Defer phone number OTP and precise address entry until the final 'Place Order' tap."
      },
      {
        solution: "Persistent Sticky Welcome Voucher Banner",
        framework: "RICE Score: 84 · High Impact / Low Effort",
        detail: "Pin a floating discount pill across the screen: 'Welcome Offer Applied: Saving ₹150'. Ensure the coupon is pre-loaded in the cart calculation without manual code entry."
      }
    ],

    // 8. Success Metrics
    metrics: {
      northStar: "Install-to-First-Order Conversion Rate ↑ 20%",
      primaryMetrics: [
        "Time-to-First-Cart (TTFC) reduced from 4.8 minutes to under 2.2 minutes",
        "Checkout step abandonment rate for first-time users ↓ 15%"
      ],
      guardrailMetric: "Coupon abuse & multiple-account referral fraud rate remains below 0.6%."
    }
  },

  {
    id: "spotify-discover",
    number: "04",
    product: "Spotify",
    category: "Media & Streaming",
    tagline: "Discover Weekly & Algorithmic Recommendation Loops",
    color: "#1DB954",
    scopeType: "Product Strategy & Machine Learning Personalization Loop",
    
    // 1. Introduction & Context
    introContext: {
      product: "Spotify Technology S.A.",
      coreMission: "Unlock the potential of human creativity by giving a million creative artists the opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it.",
      whyChosen: "With 100M+ songs cataloged, Spotify's algorithmic personalization (Discover Weekly, Daily Mixes, Made For You) constitutes its deepest competitive moat against Apple Music and YouTube Music. It accounts for >30% of all platform stream hours.",
      scope: "The user discovery loop: machine learning feedback loops (collaborative filtering, audio analysis), playlist curation mechanics, and user retention loops."
    },

    // 2. Business Goals & Monetization
    businessGoals: {
      primaryGoals: "Maximize user engagement depth (minutes listened per DAU), drive free-to-premium subscription conversions, and minimize monthly subscriber churn.",
      valueCapture: "Monthly Premium subscription tiers ($10.99/mo or ₹119/mo in India) plus programmatic audio ad inventory served to free-tier listeners between tracks.",
      businessImpact: "Users who save at least 1 track from Discover Weekly each week exhibit 3.2x higher 90-day subscription retention than non-listeners."
    },

    // 3. Target Audience & Personas
    audiencePersonas: {
      persona: "Aditya, 25 · Product Designer & Deep-Work Music Enthusiast",
      contextOfUse: "Listens to music 5+ hours daily while designing; wants background immersion that keeps him in a flow state without repetitive Top-40 hits.",
      jtbd: "When I sit down to work for four hours, play continuous music tailored to my aesthetic taste that introduces me to new artists without requiring me to constantly manage the queue.",
      keyMotivations: ["Effortless music discovery", "Novelty without jarring genre clashes", "Seamless playlist saves"]
    },

    // 4. Onboarding & First-Time User Experience (FTUE)
    ftue: {
      flow: "New users select 3 favorite artists upon signup; Spotify seeds initial algorithmic profiles immediately.",
      ahaMoment: "Listening to track #4 on Discover Weekly on a Monday morning and experiencing a visceral 'How did Spotify know I would love this obscure indie track?' moment.",
      firstTimeFriction: "Discover Weekly requires 2–3 weeks of listening history before generating, leaving new users reliant on generic editorial playlists during their first fortnight."
    },

    // 5. Core User Journey & Feature Analysis
    userJourney: {
      steps: [
        { label: "Step 01: Monday Morning Trigger", detail: "Discover Weekly refreshes with 30 algorithmic tracks; push notification or home banner alerts user." },
        { label: "Step 02: Playback & Implicit Signals", detail: "Listening past 30 seconds counts as positive signal; skips within first 15 seconds register as negative." },
        { label: "Step 03: Explicit Engagement", detail: "User taps heart/like icon to save track or adds song to personal curated playlists." },
        { label: "Step 04: Taste Profile Re-training", detail: "Vector embeddings update to recalibrate future Monday recommendations." }
      ],
      uiUxAnalysis: "Clean album artwork grid with personalized cover art reflecting the listener's profile photo. Clear visual indicators for unplayed tracks and one-tap save buttons directly on list items."
    },

    // 6. Pain Points & Friction Analysis
    painPoints: [
      {
        title: "Algorithmic Profile Pollution ('The White Noise Bug')",
        desc: "Listening to rain sounds to fall asleep or letting a child listen to nursery rhymes once pollutes the user's vector embeddings, ruining Discover Weekly recommendations for weeks."
      },
      {
        title: "Opaque Black-Box Feedback Controls",
        desc: "Users have no granular way to explain *why* they dislike a recommendation (e.g. 'I like this band, but not this specific acoustic version'), leading to blunt negative signals."
      },
      {
        title: "Context-Blind Recommendation Timing",
        desc: "Discover Weekly is delivered as a static 30-song block on Monday, regardless of whether the user is currently at the gym, focusing on work, or unwinding in bed."
      }
    ],

    // 7. Actionable Recommendations & Solutions
    recommendations: [
      {
        solution: "Explicit 'Exclude from Taste Profile' Incognito Toggle",
        framework: "RICE Score: 89 · High Impact / Low Effort",
        detail: "Allow users to mark any playlist or listening session (sleep tracks, workout playlists, party DJ sets) as 'Do not use for recommendations', protecting core Discover Weekly algorithms."
      },
      {
        solution: "Context-Aware 'Focus Mode' Pomodoro Integration",
        framework: "RICE Score: 78 · Medium Impact / Medium Effort",
        detail: "Introduce an adaptive study timer that blends algorithmic lo-fi and instrumental music with work/break intervals, catering directly to the 18–24 student demographic."
      }
    ],

    // 8. Success Metrics
    metrics: {
      northStar: "Weekly Return Rate for Discover Weekly Listeners ↑ 14%",
      primaryMetrics: [
        "Track skip rate within the first 30 seconds ↓ 18%",
        "Playlist save rate (tracks saved to personal library) ↑ 12%"
      ],
      guardrailMetric: "Total minutes spent listening across editorial playlists does not drop >4%."
    }
  },

  {
    id: "razorpay-checkout",
    number: "05",
    product: "Razorpay / Amazon",
    category: "Fintech & Payments",
    tagline: "Checkout & Payment Failure Recovery",
    color: "#528FF0",
    scopeType: "Checkout Flow & Resilience Engineering Teardown",
    
    // 1. Introduction & Context
    introContext: {
      product: "Razorpay & Amazon Pay Checkout",
      coreMission: "Provide bulletproof, frictionless payment infrastructure that maximizes transaction success rates for merchants and shoppers alike.",
      whyChosen: "In Indian digital commerce, 15–22% of online checkout attempts fail due to bank server downtime, SMS OTP latency, or card limit declines. For enterprise merchants doing ₹1,000+ Cr GMV, recovering just 5% of failed payments represents ₹50+ Cr in recaptured revenue.",
      scope: "The payment execution and failure handling loop: method selection, bank gateway authorization, failure diagnostic UX, and retry orchestration."
    },

    // 2. Business Goals & Monetization
    businessGoals: {
      primaryGoals: "Maximize Payment Success Rate (PSR), prevent cart abandonment, and route payments through highest-converting payment rails (e.g. UPI Intent over SMS OTP).",
      valueCapture: "Razorpay earns a 1.5%–2.0% transaction fee (MDR) on successful checkouts; zero revenue is earned on failed transactions while cloud gateway costs are still incurred.",
      businessImpact: "Every 1 percentage point increase in gateway PSR translates directly into hundreds of crores in recaptured GMV across thousands of digital businesses."
    },

    // 3. Target Audience & Personas
    audiencePersonas: {
      persona: "Vikram, 32 · Tech-Savvy Online Shopper",
      contextOfUse: "Purchasing a high-value laptop or flight tickets during a limited-time festive sale; payment gateway fails midway through the transaction.",
      jtbd: "When my payment fails, tell me immediately whether my money was deducted, give me a clear reason for the failure, and let me retry with a reliable alternate method without making me rebuild my cart.",
      keyMotivations: ["Zero fear of double-debits", "Instant clarity on bank status", "Frictionless alternate payment retry"]
    },

    // 4. Onboarding & First-Time User Experience (FTUE)
    ftue: {
      flow: "Merchant checkout button → Razorpay standard checkout modal loads in under 300ms → Saved payment methods pre-populated via phone number lookup.",
      ahaMoment: "One-tap UPI Intent checkout where the app automatically deep-links to GPay/PhonePe, requiring only the biometric/PIN confirmation.",
      firstTimeFriction: "First-time card users must manually type 16 digits, expiry, CVV, and wait 30+ seconds for a telecom carrier SMS OTP."
    },

    // 5. Core User Journey & Feature Analysis
    userJourney: {
      steps: [
        { label: "Step 01: Cart Checkout Confirmation", detail: "User clicks 'Pay Now' on merchant website; Razorpay modal iframe initializes." },
        { label: "Step 02: Intelligent Method Ordering", detail: "Modal surfaces saved UPI handles, tokenized cards, and Netbanking ranked by historical success rate." },
        { label: "Step 03: Bank Redirection & Authorization", detail: "Transaction payload dispatched to acquiring bank or NPCI UPI rails." },
        { label: "Step 04: Failure Interception & Recovery", detail: "Webhook catches bank decline; instead of fatal error, modal switches to recovery screen." }
      ],
      uiUxAnalysis: "Clean modal overlay with merchant branding. However, on payment failure, conventional gateways display generic error codes ('Payment Failed: Bank error 504') with a generic 'Retry' button that re-attempts the exact same failed payment route."
    },

    // 6. Pain Points & Friction Analysis
    painPoints: [
      {
        title: "Cryptic & Alarmist Error Messaging",
        desc: "Ambiguous error screens trigger intense anxiety over whether money was debited from the bank account, causing 62% of users to immediately close the browser rather than retry."
      },
      {
        title: "Stale Retry Defaulting to Broken Rails",
        desc: "When an HDFC netbanking server is experiencing an outage, clicking 'Try Again' attempts HDFC netbanking a second time, guaranteeing another failure."
      },
      {
        title: "Session Timeout & Empty Shopping Cart",
        desc: "Navigating backwards after a failed transaction often wipes out the merchant session, forcing the customer to re-add items from scratch."
      }
    ],

    // 7. Actionable Recommendations & Solutions
    recommendations: [
      {
        solution: "Smart Failure Diagnostic & Intelligent Route Recommendation",
        framework: "RICE Score: 94 · High Impact / Medium Effort",
        detail: "On failure, immediately display: (1) Green badge: 'No money was deducted from your account', (2) Diagnostic info: 'State Bank of India servers are experiencing high latency right now', (3) Auto-suggested fallback: 'Pay with Google Pay UPI instead (99.4% success rate) with 1 tap'."
      },
      {
        solution: "15-Minute Inventory Cart-Lock Grace Period",
        framework: "RICE Score: 83 · High Impact / Low Effort",
        detail: "Temporarily hold reserved inventory for 15 minutes during recovery attempts so users don't lose flash sale items while switching payment methods."
      }
    ],

    // 8. Success Metrics
    metrics: {
      northStar: "Failed Transaction Recovery Rate ↑ 10% within 5 minutes of failure",
      primaryMetrics: [
        "Overall Payment Success Rate (PSR) ↑ 3.4 percentage points across merchant portfolio",
        "Support tickets inquiring about payment debit status ↓ 40%"
      ],
      guardrailMetric: "Checkout modal load latency remains strictly below 250ms."
    }
  },

  {
    id: "instagram-reels",
    number: "06",
    product: "Instagram",
    category: "Media & Streaming",
    tagline: "Reels vs. Home Feed Strategic Tension",
    color: "#E1306C",
    scopeType: "Platform Strategy Teardown (Video vs. Photo Social Graph)",
    
    // 1. Introduction & Context
    introContext: {
      product: "Instagram (Meta Platforms)",
      coreMission: "Bring you closer to the people and things you love through photos, video, messaging, and community expression.",
      whyChosen: "Reels was Meta's defensive and offensive pivot against TikTok's existential threat to Gen-Z attention. However, prioritizing algorithmic full-screen short video created immense friction with Instagram's legacy photo-sharing identity, creator economics, and ad pricing models.",
      scope: "Strategic tradeoff analysis: Reels algorithmic distribution, feed cannibalization, creator monetization, and North Star engagement tensions."
    },

    // 2. Business Goals & Monetization
    businessGoals: {
      primaryGoals: "Defend daily screen time against TikTok, attract and retain young creators (18–24), and expand monetizable video ad surfaces across the Meta family of apps.",
      valueCapture: "Full-screen video interstitial ads placed between Reels, sponsored brand partnership integrations, and in-feed product tagging commissions.",
      businessImpact: "Reels consumes over 35% of Instagram user time. However, video ads have historically monetized at a lower CPM than classic Feed photo carousels, depressing average revenue per user (ARPU) during the transition."
    },

    // 3. Target Audience & Personas
    audiencePersonas: {
      persona: "Sara, 22 · Fashion Content Creator + Kabir, 26 · Casual Consumer",
      contextOfUse: "Sara needs reach and predictable algorithmic distribution to grow her brand; Kabir opens the app to check updates from close friends and unwind with entertaining clips.",
      jtbd: "Creator: 'Give my creative videos high organic reach without requiring millions of followers.' Consumer: 'Keep me entertained with engaging clips while still letting me keep up with my real friends.'",
      keyMotivations: ["Fair creator reach", "High content relevance", "Authentic connection without algorithmic spam"]
    },

    // 4. Onboarding & First-Time User Experience (FTUE)
    ftue: {
      flow: "Tap dedicated Reels tab at center of navigation bar → Instant auto-playing vertical full-screen video with sound.",
      ahaMoment: "Swiping vertically twice and encountering a hyper-relevant meme or creator video tailored precisely to the user's micro-interests.",
      firstTimeFriction: "Accidental video audio blasts in public spaces due to default auto-play audio settings."
    },

    // 5. Core User Journey & Feature Analysis
    userJourney: {
      steps: [
        { label: "Step 01: Dual Feed Discovery", detail: "Users encounter Reels mixed inside their traditional home timeline as well as inside the dedicated full-screen tab." },
        { label: "Step 02: Vertical Swipe Loop", detail: "Frictionless swipe gestures cycle through algorithmic video queue." },
        { label: "Step 03: Engagement & Social Signals", detail: "One-tap heart, comment modal, share to Direct Message, and audio save." },
        { label: "Step 04: Audio-Driven Creation", detail: "Tapping the bottom audio track reveals all videos using the sound and offers 'Use Audio' camera shortcut." }
      ],
      uiUxAnalysis: "Ultra-lean 9:16 layout where the content *is* the interface. Floating semi-transparent controls on the right flank ensure unobstructed view while keeping social share triggers within thumb's reach."
    },

    // 6. Pain Points & Friction Analysis
    painPoints: [
      {
        title: "Social Graph Dilution & Legacy User Alienation",
        desc: "Over-indexing on AI-recommended Reels suppressed posts from real-life friends, transforming Instagram from a personal social network into an impersonal broadcast television channel."
      },
      {
        title: "Ad CPM Cannibalization vs. Feed Inventory",
        desc: "Every minute a user spends swiping Reels is a minute not spent scrolling the home feed or Stories, which possess mature, higher-yield ad formats."
      },
      {
        title: "Creator Burnout & Algorithm Volatility",
        desc: "Without predictable revenue-sharing models like YouTube's Partner Program, creators face severe burnout pumping out daily videos solely for volatile algorithmic reach."
      }
    ],

    // 7. Actionable Recommendations & Solutions
    recommendations: [
      {
        solution: "Intent-Aware Dynamic Feed Blending",
        framework: "RICE Score: 84 · High Impact / Medium Effort",
        detail: "Modulate the ratio of Reels in the home feed based on user scroll velocity and time of day. When users scroll slowly in the morning, prioritize friend photos and Stories; when scrolling rapidly at night, increase entertaining Reels density."
      },
      {
        solution: "Transparent Creator Ad Revenue Share Program",
        framework: "RICE Score: 88 · High Impact / High Effort",
        detail: "Implement an automated programmatic rev-share model directly attributing interstitial ad earnings to creators whose videos keep viewers engaged, establishing long-term creator loyalty over TikTok."
      }
    ],

    // 8. Success Metrics
    metrics: {
      northStar: "Daily Active Time (minutes spent per DAU) ↑ 8% with stable 30-day creator retention",
      primaryMetrics: [
        "30-day creator active posting retention rate ↑ 15%",
        "Close-friend interaction rate (DMs, comment replies) protected with <4% churn"
      ],
      guardrailMetric: "Overall ad revenue per session across Feed + Stories + Reels remains flat or positive."
    }
  }
];

export default function ProductTeardowns() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState("swiggy-eta");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filteredTeardowns = selectedCategory === "All"
    ? teardownsData
    : teardownsData.filter(item => item.category === selectedCategory);

  const toggleTeardown = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={`section-dark ${styles.teardownsSection}`} id="teardowns" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge section-badge-dark">Product Management Analyses</span>
          <h2 className="section-title">Product Teardowns</h2>
          <p className="section-subtitle section-subtitle-dark">
            Rigorous breakdowns of real-world digital products across strategy, business models, user experience mechanics, friction analysis, prioritized solutions, and measurable success metrics.
          </p>

          {/* Category Filter Pills */}
          <div className={styles.categoryFilters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Teardown Cards List */}
        <div className={styles.teardownList}>
          {filteredTeardowns.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                style={{ "--brand-color": item.color }}
              >
                {/* Header — Always Visible */}
                <div
                  className={styles.cardHeader}
                  onClick={() => toggleTeardown(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleTeardown(item.id);
                  }}
                >
                  <div className={styles.cardHeaderLeft}>
                    <span className={styles.cardNumber}>{item.number}</span>
                    <div className={styles.cardTitleBlock}>
                      <div className={styles.brandRow}>
                        <span className={styles.brandDot} style={{ background: item.color }} />
                        <h3 className={styles.productName}>{item.product}</h3>
                        <span className={styles.titleSeparator}>·</span>
                        <span className={styles.tagline}>{item.tagline}</span>
                      </div>
                      <div className={styles.badgeRow}>
                        <span className={styles.scopeBadge}>{item.scopeType}</span>
                        <span className={styles.categoryBadge}>{item.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.headerRight}>
                    <span className={styles.viewPrompt}>
                      {isExpanded ? "Collapse Teardown" : "Deep Dive (8 Core Steps)"}
                    </span>
                    <motion.div
                      className={styles.toggleIcon}
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Comprehensive 8-Component Breakdown */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className={styles.cardContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className={styles.breakdownInner}>

                        {/* Component 1: Introduction & Context */}
                        <div className={styles.sectionBlock}>
                          <div className={styles.sectionHeading}>
                            <span className={styles.sectionIndex}>01</span>
                            <h4>Introduction &amp; Context</h4>
                          </div>
                          <div className={styles.gridTwo}>
                            <div className={styles.subCard}>
                              <span className={styles.subCardLabel}>Core Mission</span>
                              <p>{item.introContext.coreMission}</p>
                            </div>
                            <div className={styles.subCard}>
                              <span className={styles.subCardLabel}>Why Chosen for Teardown</span>
                              <p>{item.introContext.whyChosen}</p>
                            </div>
                          </div>
                          <div className={styles.scopeNotice}>
                            <span className={styles.scopeNoticeLabel}>Analysis Scope:</span>
                            <span>{item.introContext.scope}</span>
                          </div>
                        </div>

                        {/* Component 2: Business Goals & Monetization */}
                        <div className={styles.sectionBlock}>
                          <div className={styles.sectionHeading}>
                            <span className={styles.sectionIndex}>02</span>
                            <h4>Business Goals &amp; Monetization</h4>
                          </div>
                          <div className={styles.gridTwo}>
                            <div className={styles.subCard}>
                              <span className={styles.subCardLabel}>Company Objectives</span>
                              <p>{item.businessGoals.primaryGoals}</p>
                            </div>
                            <div className={styles.subCard}>
                              <span className={styles.subCardLabel}>Value Capture Mechanics</span>
                              <p>{item.businessGoals.valueCapture}</p>
                            </div>
                          </div>
                          <div className={styles.impactCallout}>
                            <span className={styles.impactCalloutLabel}>Business Impact:</span>
                            <span>{item.businessGoals.businessImpact}</span>
                          </div>
                        </div>

                        {/* Component 3: Target Audience & Personas */}
                        <div className={styles.sectionBlock}>
                          <div className={styles.sectionHeading}>
                            <span className={styles.sectionIndex}>03</span>
                            <h4>Target Audience &amp; Personas</h4>
                          </div>
                          <div className={styles.personaCard}>
                            <div className={styles.personaTop}>
                              <span className={styles.personaTag}>Primary Persona</span>
                              <span className={styles.personaTitle}>{item.audiencePersonas.persona}</span>
                            </div>
                            <p className={styles.personaContext}><strong>Context of Use:</strong> {item.audiencePersonas.contextOfUse}</p>
                            <div className={styles.jtbdBlock}>
                              <span className={styles.jtbdBadge}>Jobs-to-be-Done (JTBD)</span>
                              <p className={styles.jtbdQuote}>&ldquo;{item.audiencePersonas.jtbd}&rdquo;</p>
                            </div>
                          </div>
                        </div>

                        {/* Component 4: Onboarding & First-Time User Experience (FTUE) */}
                        <div className={styles.sectionBlock}>
                          <div className={styles.sectionHeading}>
                            <span className={styles.sectionIndex}>04</span>
                            <h4>Onboarding &amp; First-Time User Experience (FTUE)</h4>
                          </div>
                          <div className={styles.gridTwo}>
                            <div className={styles.subCard}>
                              <span className={styles.subCardLabel}>Entry Flow Walkthrough</span>
                              <p>{item.ftue.flow}</p>
                              <span className={styles.frictionNote}>⚠️ Drop-off Risk: {item.ftue.firstTimeFriction}</span>
                            </div>
                            <div className={`${styles.subCard} ${styles.ahaCard}`}>
                              <span className={styles.ahaLabel}>The &quot;Aha!&quot; Moment</span>
                              <p>{item.ftue.ahaMoment}</p>
                            </div>
                          </div>
                        </div>

                        {/* Component 5: Core User Journey & Feature Analysis */}
                        <div className={styles.sectionBlock}>
                          <div className={styles.sectionHeading}>
                            <span className={styles.sectionIndex}>05</span>
                            <h4>Core User Journey &amp; Feature Analysis</h4>
                          </div>
                          <div className={styles.journeySteps}>
                            {item.userJourney.steps.map((st, sIdx) => (
                              <div key={sIdx} className={styles.journeyStepItem}>
                                <div className={styles.stepMarker}>{sIdx + 1}</div>
                                <div className={styles.stepText}>
                                  <span className={styles.stepLabel}>{st.label}</span>
                                  <p>{st.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className={styles.uiAnalysisBox}>
                            <span className={styles.uiAnalysisLabel}>UI/UX Visual Hierarchy &amp; Mechanics:</span>
                            <p>{item.userJourney.uiUxAnalysis}</p>
                          </div>
                        </div>

                        {/* Component 6: Pain Points & Friction Analysis */}
                        <div className={styles.sectionBlock}>
                          <div className={styles.sectionHeading}>
                            <span className={styles.sectionIndex}>06</span>
                            <h4>Pain Points &amp; Friction Analysis</h4>
                          </div>
                          <div className={styles.frictionGrid}>
                            {item.painPoints.map((point, pIdx) => (
                              <div key={pIdx} className={styles.frictionCard}>
                                <div className={styles.frictionTop}>
                                  <span className={styles.frictionIcon}>⚠️</span>
                                  <h5>{point.title}</h5>
                                </div>
                                <p>{point.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Component 7: Actionable Recommendations & Solutions */}
                        <div className={styles.sectionBlock}>
                          <div className={styles.sectionHeading}>
                            <span className={styles.sectionIndex}>07</span>
                            <h4>Actionable Recommendations &amp; Solutions</h4>
                          </div>
                          <div className={styles.solutionList}>
                            {item.recommendations.map((rec, rIdx) => (
                              <div key={rIdx} className={styles.solutionCard}>
                                <div className={styles.solutionTop}>
                                  <span className={styles.solutionNumber}>Solution #{rIdx + 1}</span>
                                  <span className={styles.frameworkBadge}>{rec.framework}</span>
                                </div>
                                <h5 className={styles.solutionTitle}>{rec.solution}</h5>
                                <p className={styles.solutionDetail}>{rec.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Component 8: Success Metrics */}
                        <div className={styles.sectionBlock}>
                          <div className={styles.sectionHeading}>
                            <span className={styles.sectionIndex}>08</span>
                            <h4>Success Metrics &amp; Measurement Framework</h4>
                          </div>
                          <div className={styles.metricsWrapper}>
                            {/* North Star */}
                            <div className={styles.northStarCard}>
                              <span className={styles.northStarBadge}>⭐ North Star Metric</span>
                              <p className={styles.northStarText}>{item.metrics.northStar}</p>
                            </div>

                            <div className={styles.gridTwo}>
                              {/* Primary / Secondary */}
                              <div className={styles.metricSubCard}>
                                <span className={styles.metricSubLabel}>Primary &amp; Supporting Metrics</span>
                                <ul className={styles.metricBulletList}>
                                  {item.metrics.primaryMetrics.map((pm, pmIdx) => (
                                    <li key={pmIdx}>{pm}</li>
                                  ))}
                                </ul>
                              </div>

                              {/* Guardrail */}
                              <div className={styles.guardrailCard}>
                                <span className={styles.guardrailLabel}>🛡️ Guardrail Metric</span>
                                <p>{item.metrics.guardrailMetric}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
