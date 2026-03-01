# PPA - Piyush Pore Architect | Premium Single-Page Portfolio

A beautifully crafted, Apple-level minimal architect portfolio website built with **vanilla HTML5, CSS3, and GSAP animations** - no frameworks, no build tools, no backend.

## ✨ Features

✅ **Single-Page Application** - All content on one seamless page  
✅ **GSAP Premium Animations** - Text stagger, scroll reveals, parallax  
✅ **Apple-Level Minimal Design** - Spacious, calm, premium aesthetics  
✅ **Earth Tone Palette** - Terracotta, warm beige, charcoal  
✅ **Fully Responsive** - Mobile-first, tested on all devices  
✅ **Interactive Lightbox** - Click images → Beautiful modal gallery  
✅ **Dynamic Form** - Convert form to WhatsApp with `encodeURIComponent()`  
✅ **Smooth Scroll Navigation** - GSAP scrollTo with easing  
✅ **Mobile Contact Bar** - Quick access buttons always visible  
✅ **Performance Optimized** - Lazy loading, minimal DOM queries  
✅ **SEO Friendly** - Proper meta tags, semantic HTML, Open Graph  
✅ **Accessibility** - ARIA labels, keyboard navigation, reduced motion support  

## 📁 Project Structure

```
ppa-architect/
│
├── index.html                 # Single-page app
├── assets/
│   ├── css/
│   │   └── style.css         # Minimal premium styling
│   ├── js/
│   │   └── script.js         # GSAP animations & interactions
│   └── images/               # Image assets
│
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Download/Clone
```bash
# Clone repository
git clone https://github.com/yourusername/ppa-architect.git
cd ppa-architect
```

### 2. Run Locally

**Option A: VS Code Live Server (Easiest)**
- Install [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Right-click `index.html` → "Open with Live Server"
- Visit `http://localhost:5500`

**Option B: Python**
```bash
cd ppa-architect
python -m http.server 8000
# Visit http://localhost:8000
```

**Option C: Node.js**
```bash
npm install -g http-server
cd ppa-architect
http-server
```

---

## 📜 Page Sections

### 1. **Navbar** (Fixed)
- Logo: "PPA" text
- Navigation links with smooth scroll
- Mobile hamburger menu
- Glass-morphism backdrop blur

### 2. **Hero Section**
- Large staggered typography animation
- Subtitle: "Interior • Landscape • Industrial"
- CTA buttons: Call, WhatsApp, Email
- Parallax background movement

### 3. **About Section**
- Architectural philosophy statement
- Elegant, spacious layout
- Scroll reveal animation

### 4. **Services Section**
- 3 minimal cards: Interior, Landscape, Industrial
- Hover effect: border glow, lift animation
- Icon emojis for visual interest

### 5. **Work / Gallery Section**
- Premium grid layout (2 columns desktop, 1 mobile)
- Large visual images
- Hover zoom effect
- Click → Lightbox modal with smooth animation

### 6. **Lead Capture Form**
- Name, Phone, Project Type (dropdown), Message fields
- On submit: Converts to WhatsApp message with `encodeURIComponent()`
- Includes form data in message
- Redirects to WhatsApp

### 7. **Contact Section**
- Phone (tel: link)
- Email (mailto: link)
- Location (Pune, Kopargaon)
- Embedded Google Maps

### 8. **Mobile Contact Bar**
- Appears only on mobile/tablet (<768px)
- Sticky at bottom: Call, WhatsApp, Email, Location
- Safe area support

### 9. **Floating WhatsApp Button**
- Always visible on desktop
- Green WhatsApp button style
- Smooth hover animation

### 10. **Footer**
- Copyright & branding
- Minimal design

---

## 🎨 Design System

### Colors
- **Primary**: `#D4A574` (Warm Gold/Terracotta)
- **Terracotta**: `#C85A54` (Accent)
- **Dark**: `#1A1A1A` (Text/Buttons)
- **Light**: `#F9F7F3` (Background)
- **Gray**: `#6B6B6B` (Body text)

### Typography
- **Serif** (Display): Playfair Display (headings)
- **Sans** (Body): Poppins (text)
- Weights: 400, 500, 600

### Spacing
- `--spacing-sm`: 1rem
- `--spacing-md`: 2rem
- `--spacing-lg`: 3rem
- `--spacing-xl`: 4rem
- `--spacing-xxl`: 6rem

### Animations
- Hero text stagger: Smooth, offset children
- Scroll reveals: GSAP ScrollTrigger
- Parallax: Subtle background movement
- Button hovers: Micro animations
- Lightbox: Scale + fade in/out

---

## 🔧 Key Technologies

| Component | Technology | Features |
|-----------|-----------|----------|
| **Animations** | GSAP 3.12 | ScrollTrigger, Timeline, Stagger |
| **HTML5** | Semantic | Proper structure, ARIA labels |
| **CSS3** | Custom | Variables, Grid, Flexbox, smooth transitions |
| **JavaScript** | Vanilla ES6+ | No dependencies (except GSAP) |
| **Typography** | Google Fonts | Playfair Display, Poppins |
| **Responsive** | Mobile-first | 2 breakpoints (768px, 480px) |

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full layout, no mobile bar)
- **Tablet**: 768px - 1199px (Single column, mobile bar)
- **Mobile**: < 480px (Optimized spacing, large touch targets)

---

## 🔗 Functionality

### WhatsApp Integration
```javascript
// Hero button - pre-filled message
https://wa.me/919595787780?text=ENCODED_MESSAGE

// Form submission - dynamic message with form data
Name + Phone + Project Type + Message → WhatsApp
```

### Form to WhatsApp Conversion
```javascript
const message = `Name: John
Phone: 9595787780
Project Type: Interior
Message: I need help with my office design`;

const encoded = encodeURIComponent(message);
window.open(`https://wa.me/919595787780?text=${encoded}`);
```

### Smooth Scroll Navigation
```javascript
gsap.to(window, {
    duration: 0.6,
    scrollTo: targetElement
});
```

### Lightbox Animation
```javascript
// Open with scale & fade
gsap.to(lightbox, { opacity: 1, duration: 0.3 });
gsap.to(image, { scale: 1, opacity: 1, duration: 0.5 });

// Close with reverse
gsap.to(lightbox, { opacity: 0, duration: 0.3 });
```

---

## 🧪 Testing Checklist

### Functionality
- [ ] Navigation smooth scrolls to sections
- [ ] Hero buttons work (Call, WhatsApp, Email)
- [ ] WhatsApp link has pre-filled message
- [ ] Form converts to WhatsApp correctly
- [ ] Gallery images open in lightbox
- [ ] Lightbox smooth open/close
- [ ] ESC key closes lightbox
- [ ] Mobile contact bar visible on mobile
- [ ] All links open correctly

### Animations
- [ ] Hero text stagger animation smooth
- [ ] Scroll reveals fire at correct points
- [ ] Parallax background subtle movement
- [ ] Button hovers zoom effect
- [ ] No jank or stuttering
- [ ] Mobile animations work well

### Responsiveness
- [ ] Desktop 1920×1080 - full layout
- [ ] Tablet 768px - 1 column, mobile bar
- [ ] Mobile 375px - optimized spacing
- [ ] Images scale properly
- [ ] Text readable at all sizes
- [ ] Touch targets > 44×44px
- [ ] No horizontal scrolling

### Performance
- [ ] Page loads in < 2 seconds
- [ ] No console errors (F12)
- [ ] Lighthouse score > 90
- [ ] Images lazy-loaded
- [ ] Smooth mobile performance
- [ ] Form submission instant

### Accessibility
- [ ] Tab key navigates links/buttons
- [ ] ARIA labels present
- [ ] Color contrast sufficient
- [ ] Reduced motion respected
- [ ] Keyboard shortcuts work (ESC)
- [ ] Semantic HTML used

---

## 🚀 Deployment

### Option 1: Netlify (Recommended)
```bash
# Drag & drop folder to netlify.app
# Or via CLI:
npm install -g netlify-cli
netlify deploy --prod --dir .
```

### Option 2: GitHub Pages
1. Push to GitHub repository
2. Settings → Pages
3. Deploy from `main` branch
4. URL: `https://username.github.io/ppa-architect`

### Option 3: Vercel
1. Connect GitHub repository
2. Auto-deploy on push
3. Get custom domain

### Option 4: Traditional Hosting
1. FTP upload all files
2. No backend setup needed
3. Works on any web host

---

## 🛠️ Customization

### Update Contact Info
```html
<!-- In index.html -->
<a href="tel:+919595787780">+91 9595787780</a>
<a href="mailto:piyushporearchitects01@gmail.com">Email</a>
```

```javascript
// In script.js
const CONFIG = {
    whatsappNumber: '919595787780',
    whatsappMessage: 'Your custom message'
};
```

### Change Colors
```css
/* In style.css */
:root {
    --primary: #D4A574;
    --terracotta: #C85A54;
    --dark: #1A1A1A;
    --light: #F9F7F3;
}
```

### Add More Project Images
Edit HTML work items in index.html:
```html
<div class="work-item" data-category="interior">
    <img src="your-image.jpg" alt="Project Name" loading="lazy">
    <div class="work-overlay">
        <h3>Project Name</h3>
    </div>
</div>
```

### Customize Form Fields
In index.html `#contactForm`:
```html
<input type="text" id="formName" placeholder="Your Name" required>
<input type="tel" id="formPhone" placeholder="Phone" required>
<select id="formType" required>
    <option value="">Select Project Type</option>
    <option value="Interior">Interior Design</option>
    <option value="Landscape">Landscape Design</option>
    <option value="Industrial">Industrial Design</option>
</select>
<textarea id="formMessage" placeholder="Message..."></textarea>
```

---

## 📊 Performance Metrics

**Expected Results:**
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2s
- **Cumulative Layout Shift**: < 0.05
- **Time to Interactive**: < 2.5s

---

## 🔐 Security

✅ No sensitive data in code  
✅ External links use `rel="noopener noreferrer"`  
✅ Form data sent securely via WhatsApp  
✅ No authentication required  
✅ Production-ready code  

---

## 📝 Contact Information

**PPA - Piyush Pore Architect**
- 📧 Email: piyushporearchitects01@gmail.com
- 📱 Phone: +91 9595787780
- 🔗 WhatsApp: [Message](https://wa.me/919595787780)
- 📍 Location: Pune & Kopargaon, Maharashtra

---

## 📄 License

Free to use and modify for personal or commercial projects.

---

## 🎓 Credits

**Built with:**
- HTML5 (Semantic, Accessible)
- CSS3 (Custom, No frameworks)
- GSAP 3.12 (Animations, ScrollTrigger)
- JavaScript ES6+ (Vanilla, Production-ready)
- Google Fonts (Playfair Display, Poppins)
- Unsplash (Placeholder images)

**Optimized for:**
- Mobile-first responsive design
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Web performance & Core Web Vitals
- Accessibility (WCAG 2.1 Level A)
- Search Engine Optimization

---

## 🤝 Contributing

Customize this template for your needs:
1. Update text and branding
2. Add your project images
3. Modify colors in CSS
4. Update contact information
5. Deploy to hosting platform

---

**PPA - Premium Architecture Design**  
*Exceptional Spaces Crafted With Purpose*

Last Updated: March 2, 2026


## 🎯 Features

✅ **Mobile-First Responsive Design** - Optimized for all devices  
✅ **Earth Tone Premium Aesthetic** - Terracotta, Beige, Charcoal palette  
✅ **Smooth Animations** - IntersectionObserver scroll reveals  
✅ **Interactive Gallery** - Lightbox modal with keyboard navigation  
✅ **Category Filters** - Project filtering (Residential | Commercial | Landscape | Industrial)  
✅ **WhatsApp Integration** - Pre-filled messages with `encodeURIComponent()`  
✅ **Sticky Navigation** - Header remains accessible while scrolling  
✅ **Mobile Contact Bar** - Quick access buttons on mobile devices  
✅ **Performance Optimized** - Lazy loading, minimal DOM queries  
✅ **SEO Friendly** - Proper meta tags, Open Graph, semantic HTML  
✅ **Accessibility** - ARIA labels, keyboard navigation, reduced motion support  
✅ **Production Ready** - Clean, maintainable, well-documented code  

## 📁 Project Structure

```
ppa-architect/
│
├── index.html              # Main landing page
├── projects.html           # Portfolio projects page
├── assets/
│   ├── css/
│   │   └── style.css      # All styling (mobile-first, responsive)
│   ├── js/
│   │   └── script.js      # All JavaScript functionality
│   └── images/            # Image assets (currently using placeholder URLs)
│
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/ppa-architect.git
cd ppa-architect
```

### 2. Run Locally (Using VS Code Live Server)

**Option A: VS Code Extension**
- Install [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Right-click `index.html` → "Open with Live Server"
- Visit `http://localhost:5500`

**Option B: Python Local Server**
```bash
# Python 3.x
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Option C: Node.js http-server**
```bash
npm install -g http-server
http-server
```

### 3. View in Browser
- Homepage: `http://localhost:5500` (or your port)
- Projects: `http://localhost:5500/projects.html`

## 📝 Sections

### Homepage (index.html)
- **Header** - Logo + Navigation menu
- **Hero** - Architect name, tagline, CTA buttons
- **About** - Bio, stats, achievements
- **Services** - 3 main service cards (Interior, Landscape, Industrial)
- **Projects Preview** - 4 featured project cards
- **Contact** - Contact info + Embedded Google Map
- **Footer** - Copyright & tagline
- **Floating WhatsApp Button** - Always accessible
- **Mobile Contact Bar** - Quick action buttons on mobile

### Projects Page (projects.html)
- **Hero Section** - Page title & subtitle
- **Category Filters** - All, Residential, Commercial, Landscape, Industrial
- **Responsive Gallery** - 12 project cards with lazy loading
- **Lightbox Modal** - Click image → View large, swipe/arrow keys to navigate
- **Mobile Optimized** - Fully responsive grid

## 🎨 Design System

### Colors
- **Primary**: `#8B7355` (Earth Brown)
- **Terracotta**: `#C85A54` (Accent)
- **Beige**: `#E8DCC4` (Light Background)
- **Charcoal**: `#2C2C2C` (Text)
- **Light**: `#F5F1E8` (Section Background)

### Typography
- **Display Font**: Playfair Display (Headings)
- **Body Font**: Poppins (Text)
- **Weights**: 300 (light), 400 (normal), 600 (bold), 700 (heavy)

### Spacing
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem
- `--spacing-xxl`: 4rem

### Animations
- Fade-in on scroll (IntersectionObserver)
- Smooth hover effects (0.2s - 0.6s)
- Transform animations (scale, translate)
- Lightbox slide-in animation

## 🔧 Functionality

### WhatsApp Integration
```javascript
// Pre-filled message with dynamic encoding
https://wa.me/919595787780?text=ENCODED_MESSAGE
```
Message: *"Hello Piyush Pore Architects, I would like to discuss a project."*

### Smooth Scroll
- Click navigation links → Smooth scroll to section
- Mobile menu closes after navigation
- Menu button animated hamburger ↔ X

### Gallery Filtering
- Click category button → Filter projects
- Smooth animation on filter
- Work with both desktop (3 columns) and mobile (1 column)

### Lightbox Modal
- Click any project image → Full-screen lightbox
- Navigate with arrows or keyboard (← →)
- Close with ESC key or X button
- Responsive on all devices

### Scroll Animations
- Elements fade-in as they enter viewport
- Using IntersectionObserver for performance
- Animations respect `prefers-reduced-motion`

### Mobile Contact Bar
- Appears only on mobile/tablet (<768px)
- Sticky at bottom with safe area support
- Quick call, WhatsApp, email, location access

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (3-column grid, full navigation)
- **Tablet**: 768px - 1199px (2-column grid, hamburger menu)
- **Mobile**: < 768px (1-column layout, mobile contact bar)

## 📊 Performance

- ✅ Lazy loading images
- ✅ CSS variables for reduced file size
- ✅ Minimal DOM queries (cached selectors)
- ✅ Debounced/throttled scroll events
- ✅ No external dependencies
- ✅ Optimized animations
- ✅ **Expected Lighthouse Score: 90+**

## 🔍 SEO Optimization

- ✅ Semantic HTML5 elements
- ✅ Meta description
- ✅ Open Graph tags (sharing)
- ✅ Proper heading hierarchy (H1 only once)
- ✅ Image alt text
- ✅ Mobile-first indexing friendly
- ✅ Structured data ready (JSON-LD optional)

## 🎯 Contact Information

**Ar. Piyush S. Pore**  
📧 Email: piyushporearchitects01@gmail.com  
📱 Phone: +91 9595787780  
🔗 WhatsApp: https://wa.me/919595787780  
📍 Location: Pune & Kopargaon, Maharashtra, India

## 📋 Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] WhatsApp link opens with pre-filled message
- [ ] Email link opens default email client
- [ ] Call button works on mobile
- [ ] Contact form submissions work
- [ ] Gallery filters work correctly
- [ ] Lightbox opens/closes properly
- [ ] Lightbox navigation works (arrows, keyboard)
- [ ] Smooth scroll behavior works

### Responsiveness
- [ ] Desktop view (1200px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] Mobile contact bar appears <768px
- [ ] Hamburger menu works
- [ ] All images scale properly
- [ ] Text is readable on all sizes
- [ ] Touch targets are adequate (>44x44px)

### Performance
- [ ] Page loads in < 2 seconds
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Images load efficiently
- [ ] Animations are smooth
- [ ] No jank on scroll

### Accessibility
- [ ] Keyboard navigation works
- [ ] ARIA labels present
- [ ] Color contrast sufficient
- [ ] Reduced motion respected
- [ ] Form inputs labeled
- [ ] Semantic HTML used

## 🚀 Deployment

### Option 1: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir .
```
- Drag & drop folder to Netlify
- Or connect GitHub repository
- Automatic deployments on push

### Option 2: GitHub Pages
```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages

# Enable Pages in repository settings
# Choose 'gh-pages' as source branch
```

### Option 3: Vercel
- Connect GitHub repository
- Select root directory: `/`
- Automatic deployments

### Option 4: Traditional Hosting
1. FTP upload all files to server
2. Ensure `.html` files are accessible
3. Test all links work correctly

## 🔐 Security

- ✅ No sensitive data stored
- ✅ Links use proper `target="_blank"` and `rel="noopener noreferrer"`
- ✅ Form data (if added) should use HTTPS
- ✅ No API keys or credentials in code

## 📝 Customization Guide

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-primary: #YourColor;
    --color-terracotta: #YourColor;
    /* ... */
}
```

### Update Contact Info
Edit in both HTML files:
```html
<a href="tel:9595787780">9595787780</a>
<a href="mailto:piyushporearchitects01@gmail.com">Email</a>
```
Update `CONFIG` in `script.js`:
```javascript
const CONFIG = {
    whatsappNumber: '919595787780',
    whatsappMessage: 'Your message here',
    // ...
};
```

### Add Your Images
1. Replace placeholder image URLs with your own
2. Or store images in `assets/images/`
3. Update `src` attributes in HTML

### Add More Projects
In `projects.html`, duplicate a `.project-gallery-item`:
```html
<div class="project-gallery-item reveal-on-scroll" data-category="your-category">
    <img src="your-image.jpg" alt="Description" loading="lazy">
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Description</p>
    </div>
</div>
```

## 🤝 Contributing

Feel free to customize this template for your needs:
1. Update text and branding
2. Add your project images
3. Modify colors to match your brand
4. Deploy to hosting platform

## 📄 License

Free to use and modify for personal/commercial projects.

## 🎓 Credits

**Built with:**
- Vanilla HTML5
- CSS3 (Custom, no frameworks)
- JavaScript ES6+
- Google Fonts (Poppins, Playfair Display)
- Unsplash (Placeholder images)

**Optimized for:**
- Mobile-first responsive design
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Accessibility (WCAG 2.1 Level A)
- Performance (Lighthouse 90+)

## 📞 Support

For issues or questions:
1. Review the code comments
2. Check browser console for errors
3. Test on different devices/browsers
4. Verify all links are correct

---

**PPA - Crafting Exceptional Spaces**  
*Design that speaks. Spaces that inspire.*

Last Updated: March 2, 2026
