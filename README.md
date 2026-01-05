IronClad Welding Official Website

This document serves as the final technical manual for the IronClad Welding digital platform. The website is a specialized lead-generation tool for steel fabrication services based in Winterveldt, Pretoria.

---

Project Overview

The IronClad Welding platform is a high-performance web solution designed for maximum visibility and customer conversion. It integrates industrial-themed animations, a high-fidelity project gallery, and direct communication channels.

Implemented Features

* High-Resolution Project Gallery: A 5-item grid featuring specific industrial and residential projects.
* Lightbox Zoom Engine: Custom JavaScript logic allowing users to inspect weld quality in high detail.
* Contact Management System: A structured form capturing Name, Email, and Project Details via Formspree.
* Dynamic Spark Animation: A CSS3 keyframe-driven visual effect simulating active welding.
* Global Contact Bar: Immediate access to the physical address and primary business line.
* Mobile-Responsive UI: Fully optimized layout for seamless browsing on South African mobile networks.

Technical Specifications

* Frontend: HTML5, CSS3 (Custom Variables/Flexbox/Grid).
* Interactivity: Vanilla JavaScript (ES6) with DOM event listeners.
* Messaging: WhatsApp Business API integration.
* Lead Capture: Formspree SMTP Relay.

Directory Structure

To maintain system integrity, the following file hierarchy must be strictly preserved:

ironclad-welding/
├── index.html          (Core structure, Hero section, and Contact form)
├── style.css           (Global typography, animations, and grid layouts)
├── script.js           (Modal logic and mouse-tracking animations)
└── assets/
└── img/            (Primary image repository)
├── intercom-gate-front-residential-building.jpg
├── low-angle-view-scafolding-building.jpg
├── japanese-house-entrance-with-fence.jpg
├── house-entrance-japan-building-with-fence.jpg
└── construction-worker-painting-fence-home.jpg

Configuration and Maintenance

1. Image Management
All images must be stored in lowercase within the assets/img/ folder. Case-sensitive environments like GitHub Pages will fail to render images if the filename extensions (e.g., .JPG vs .jpg) do not match the HTML source exactly.
2. Lead Generation Setup
The contact form is pre-configured for Formspree. Replace the "YOUR_ENDPOINT" placeholder in index.html with your unique Formspree ID to begin receiving email inquiries.
3. Contact Standardization
The primary business line is set to +27 69 161 6943. This is synchronized across the top-bar, hero CTA, footer, and the floating WhatsApp button.

Deployment Instructions

The project is optimized for deployment via GitHub Pages, Netlify, or Vercel.

* Ensure all files are in the root directory except for images.
* Confirm that the 'assets' folder is uploaded in its entirety to prevent broken paths.
* Verify the live URL on a mobile device to ensure the pulsing WhatsApp button is visible and functional.

