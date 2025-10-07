# Second Chance - Premium 3D Bilingual Logistics Website

A high-conversion, bilingual (EN/JA + optional AR) website with 3D aesthetics for Second Chance LLC (セカンドチャンス合同会社), a moving, clearance/waste, and used-appliance delivery company based in Yokohama.

## 🌐 Live Site
**Domain**: secondchancejapan.com

## 🎯 Key Features

### 🌍 Multilingual Support
- **English** (EN) - Primary
- **Japanese** (日本語/JA) - Full translation
- **Arabic** (العربية/AR) - Optional support
- Persistent language preference (localStorage)
- Auto-detection based on browser language

### 🎨 3D Interactive Hero
- **Three.js** WebGL rendering
- Interactive moving truck model with:
  - Mouse/touch rotation control
  - Floating boxes animation
  - Route visualization with waypoints
  - Smooth animations (60fps target)
  - Auto-rotation when idle
- Responsive and GPU-optimized

### 📊 Instant Quote Estimator
- 4-step wizard interface:
  1. **Location** - From/to addresses, date/time
  2. **Property Details** - Type, floors, elevator
  3. **Items** - Furniture, appliances, boxes, disposal
  4. **Contact & Booking** - Personal info, photo upload
- **Live price calculation** based on:
  - Distance and volume
  - Floor accessibility
  - Item quantity and type
  - Special handling needs
- Dynamic price range display (¥25,000 - ¥45,000 base)
- Photo/video upload support

### 🎭 GSAP Scroll Animations
- Section fade-ins and slide-ups
- Counter animations (moves completed, tons recycled)
- Service card reveals with 3D rotation
- Gallery stagger animations
- Parallax effects on hero and section headers
- Button microinteractions
- FAQ accordion animations

### 📱 Mobile-First Design
- Responsive across all devices
- Sticky contact dock (mobile bottom, desktop right)
- Mobile-optimized navigation menu
- Touch-friendly interactions
- Hamburger menu with smooth transitions

### 🎨 Design System

#### Colors
- **Charcoal**: `#0F172A` (primary dark)
- **Gold**: `#EAB308` (accent, CTAs)
- **Red**: `#EF4444` (highlights)
- **White**: `#FFFFFF` (base)
- Grays: 50, 100, 200, 300, 400, 600, 800

#### Typography
- **English**: Inter, SF Pro
- **Japanese**: Noto Sans JP
- **Arabic**: Noto Naskh Arabic
- Responsive font scaling with `clamp()`

#### Spacing & Layout
- Container max-width: 1280px
- Consistent spacing scale (xs to 3xl)
- Border radius: 0.5rem (default), 1rem (large)
- Shadows: sm, default, lg, xl

## 📄 Pages & Sections

1. **Hero** - 3D interactive, headline, trust indicators
2. **Quote Estimator** - 4-step wizard, live pricing
3. **Services** - Moving, Junk Removal, Used Appliances
4. **Service Area** - Map visualization, coverage details
5. **Why Us** - 6 feature cards (licensed, bilingual, eco-friendly)
6. **Gallery** - Before/after transformations, lightbox-ready
7. **Reviews** - 6 testimonials, 4.9★ rating summary
8. **About** - Company story, values, sustainability
9. **FAQ** - 10 common questions, accordion UI
10. **Contact** - Multi-channel (phone, email, LINE, WhatsApp), map embed
11. **Footer** - Quick links, legal, compliance info

## 🚀 Technical Stack

### Frontend
- **HTML5** - Semantic, accessible markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Modular, vanilla JS
- **Three.js** - 3D WebGL rendering
- **GSAP** - Advanced animations + ScrollTrigger

### SEO & Analytics
- **Schema.org** - LocalBusiness, Service, OfferCatalog
- Open Graph & Twitter Cards
- GA4 integration ready
- Conversion event tracking (quote, booking)
- Sitemap-ready structure

### Performance
- **Lighthouse Score Target**: ≥90 (Mobile)
  - Performance: 90+
  - Accessibility: 100
  - Best Practices: 95+
  - SEO: 100
- Lazy image loading (Intersection Observer)
- GPU-accelerated animations
- Minimal dependencies
- Code splitting ready

### Accessibility (WCAG 2.2 AA)
- Semantic HTML5 landmarks
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators (outline)
- Skip-to-content link
- Screen reader announcements
- Reduced motion support

## 📁 File Structure

```
/workspace/
├── index.html          # Main HTML (all sections)
├── styles.css          # Complete responsive styles
├── app.js              # Language, estimator, forms, interactions
├── 3d-hero.js          # Three.js 3D hero scene
├── animations.js       # GSAP scroll animations
└── README.md           # This file
```

## 🔧 Setup & Deployment

### Local Development
1. Clone/download files
2. Open `index.html` in a modern browser
3. For local server (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```
4. Visit `http://localhost:8000`

### Production Deployment
1. **Update contact details** in `index.html`:
   - Phone numbers
   - Email addresses
   - Physical address
   - LINE/WhatsApp IDs
   
2. **Add Google Analytics**:
   - Replace `G-XXXXXXXXXX` with your GA4 ID
   
3. **Configure schema.org**:
   - Update business hours
   - Verify coordinates
   - Add real logo URLs
   
4. **Optimize images**:
   - Replace placeholder Unsplash URLs
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Add proper alt text
   
5. **Set up backend** (optional):
   - Quote submission endpoint
   - Contact form handler
   - Photo upload storage (AWS S3, Cloudinary)
   - Email notifications (SendGrid, Mailgun)

### CDN Resources
Required external libraries (loaded via CDN):
- Three.js (r128): `cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`
- GSAP 3.12.2: `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
- GSAP ScrollTrigger: `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js`
- Google Fonts: Inter, Noto Sans JP, Noto Naskh Arabic

## 🎯 Conversion Optimization

### Quote Funnel
1. **Hero CTA** → Scroll to estimator
2. **4-step wizard** → Reduce friction
3. **Live pricing** → Set expectations
4. **Photo upload** → Increase accuracy
5. **Multi-channel contact** → User preference

### Trust Signals
- ⭐ 4.9/5 rating (234 reviews)
- 🚚 5,000+ moves completed
- ♻️ 1,500 tons recycled
- 🛡️ Licensed & insured badges
- 🌐 Bilingual team highlighted
- 📜 Schema.org verification

### Mobile Optimization
- Sticky contact dock (always accessible)
- One-tap call/WhatsApp/LINE
- Touch-optimized estimator
- Fast loading (< 2.5s LCP target)

## 🌍 Language System

### How to Add/Edit Translations
Edit the `translations` object in `app.js`:

```javascript
const translations = {
  en: { /* English */ },
  ja: { /* Japanese */ },
  ar: { /* Arabic */ }
};
```

### Adding a New Language
1. Add language code to translations object
2. Add button to language switcher in HTML
3. Add font support if needed (Google Fonts)
4. Update `switchLanguage()` function

## 📊 Analytics Events

### Tracked Conversions
- `quote_submission` - Quote form submitted
- `booking_submission` - Booking completed
- Custom events ready for:
  - Phone clicks
  - WhatsApp/LINE opens
  - Service card interactions
  - Gallery views

## ♿ Accessibility Features

- ✅ Semantic HTML5 (nav, main, article, section)
- ✅ ARIA landmarks and labels
- ✅ Keyboard navigation (Tab, Escape, Enter)
- ✅ Focus indicators (3px gold outline)
- ✅ Skip-to-content link
- ✅ Alt text placeholders (update with real descriptions)
- ✅ Color contrast WCAG AA compliant
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Screen reader announcements (aria-live)

## 🔐 Privacy & Compliance

### GDPR/Privacy
- Consent checkbox on quote form
- Privacy policy link in footer
- Cookie notice (add if using analytics)
- Data processing transparency

### Japan-Specific
- Licensed logistics provider badge
- Kanagawa Prefecture compliance
- Proper waste disposal licensing info
- Bilingual legal documents

## 🎨 Customization Guide

### Brand Colors
Update CSS variables in `styles.css`:
```css
:root {
  --color-charcoal: #0F172A;
  --color-gold: #EAB308;
  --color-red: #EF4444;
}
```

### Estimator Pricing Logic
Edit `calculateEstimate()` in `app.js`:
```javascript
let basePrice = 25000; // Base price in yen
// Add your custom pricing rules
```

### 3D Hero Customization
Edit `3d-hero.js`:
- Truck colors: `bodyMaterial.color`, `cabMaterial.color`
- Floating box count: Change loop in `createFloatingBoxes()`
- Route waypoints: Update `waypoints` array in `createRouteLines()`

## 📱 Contact Channels

Update these in `index.html`:
- **Phone**: `+81-45-XXX-XXXX`
- **Email**: `info@secondchancejapan.com`
- **LINE**: `@secondchance`
- **WhatsApp**: `81XXXXXXXXX`
- **Address**: Kanazawa-ku, Yokohama, Kanagawa

## 🐛 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)
- ⚠️ IE11 not supported (requires polyfills)

## 📈 Performance Tips

1. **Images**:
   - Use WebP format
   - Implement responsive images (`srcset`)
   - Lazy load below fold
   - Compress to < 100KB each

2. **JavaScript**:
   - Already lazy-loaded (defer/async)
   - Minify for production (UglifyJS, Terser)
   - Consider code splitting for large sites

3. **CSS**:
   - Already optimized (no frameworks)
   - Minify for production (cssnano)
   - Critical CSS inline (optional)

4. **3D Performance**:
   - Reduce polygon count if needed
   - Lower `setPixelRatio` on low-end devices
   - Disable 3D on mobile if performance issues

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time booking calendar
- [ ] Payment gateway (Stripe, PayPal)
- [ ] Live chat widget
- [ ] Customer dashboard
- [ ] Admin CRM panel
- [ ] SMS notifications
- [ ] Progressive Web App (PWA)
- [ ] AMP pages for SEO
- [ ] A/B testing integration

## 📞 Support

For customization or technical support:
- Developer: AI Assistant (Cursor)
- Build Date: 2024
- License: Proprietary (Second Chance LLC)

## 🙏 Credits

- **Three.js**: WebGL 3D library
- **GSAP**: Animation library
- **Google Fonts**: Typography
- **Unsplash**: Placeholder images (replace with real photos)

---

**Built with modern web standards, accessibility, and conversion in mind.**

セカンドチャンス合同会社 - 運ぶ・片づける・再生する。