# Pinch Travel — Bespoke Luxury Travel Website

A clean, structured, and fully reorganized static replica of the Pinch Travel luxury travel website. Reorganized from flat scraped HTML files and assets into a logical folder hierarchy.

---

## Author
* **Bhushan Soni** (Valiun Ventures Private Limited)

---

## Project Structure

The project has been organized into a clean folder layout:

```
TREC- Pinch Website/
├── README.md                           # Project Documentation
├── index.html                          # Homepage
├── about-us.html                       # About page
├── book-an-appointment.html            # Booking page
├── travel-inquiry.html                 # Inquiry form page
├── financial-protection.html           # Legal documents
├── privacy-policy.html
├── terms.html
├── booking-conditions.html
├── booking-conditions-tour-operator.html
├── booking-conditions-travel-agent.html
│
├── destinations/                       # Destination landing and regions
│   ├── index.html                      # Main destinations page
│   ├── dubai.html                      # Region page
│   ├── maldives.html
│   ├── mauritius.html
│   ├── seychelles.html
│   ├── sri-lanka.html
│   ├── thailand.html
│   └── hotels/                         # Specific hotel properties
│       ├── anantara-maia-seychelles-villas.html
│       ├── atlantis-the-palm.html
│       └── ... (28 hotels total)
│
├── journeys/                           # Curated itineraries
│   ├── index.html                      # Journeys landing page
│   ├── africa.html                     # Region page
│   ├── indian-ocean.html
│   ├── japan.html
│   ├── philippines.html
│   ├── south-east-asia.html
│   └── itineraries/                    # Detailed itineraries
│       ├── bali-lombok.html
│       ├── miyabi-the-grand-japan-journey.html
│       └── ... (33 itineraries total)
│
├── assets/                             # Reorganized assets
│   ├── css/                            # CSS stylesheets
│   ├── fonts/                          # Typography (Gopher, IvyPresto, Vanitas)
│   ├── images/                         # Clean image files
│   ├── js/                             # Main application JS bundles
│   └── svg/                            # Custom SVG resources
│
├── favicon.ico                         # Favicons & PWA manifests
├── favicon-96x96.png
├── apple-touch-icon.png
├── site.webmanifest
├── package.json                        # Node configuration
└── server.py                           # Clean URL routing server
```

---

## Core Improvements

1. **Logical Folder Reorganization**: Flat scraped files have been grouped into structured namespaces (`destinations/hotels`, `journeys/itineraries`).
2. **Asset Path Correction**: All links and image/CSS/JS references updated dynamically using relative path mapping based on page depth.
3. **Decoded Resource Names**: Converted percent-encoded filenames (e.g. `%20` or `%C3%A9`) to literal characters on disk.
4. **Third-Party Script Removal**: Stripped large, non-functional tracking scripts (Google Tag Manager, Facebook Pixel, HubSpot, LiveChat) saving ~1.8 MB of page size and improving offline performance.
5. **No Broken References**: Verified through an automated HTML crawler ensuring 100% resolution of links, images, styles, and scripts.

---

## How to Run Locally

Because the site utilizes clean URLs (e.g. `/travel-inquiry` instead of `/travel-inquiry.html`), you should run it with a routing server that maps these clean paths.

### Option 1: Python Routing Server (Recommended)
Run the custom routing server included in the root directory:
```bash
python3 server.py
```
Then navigate to **http://localhost:5008**.

### Option 2: Node.js Dev Server
Install dependencies and run the server script:
```bash
npm install
npm start
```
This runs the local development server on port **5008**.
