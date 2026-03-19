# PPA — Piyush Pore Architects
### Official Portfolio Website

> *"Where Every Line Meets Your Imagination"*

Live site: [pparchitect.netlify.app](https://pparchitect.netlify.app)

---

## 📁 Project Structure

```
ppa-prod/
├── index.html                  # Home page
├── projects.html               # Portfolio / Projects page
├── assets/
│   ├── css/
│   │   └── style.css           # Global stylesheet
│   ├── js/
│   │   └── script.js           # Legacy JS (navbar, menu)
│   └── images/
│       ├── logo_cream.png      # Logo — cream (for hero/dark bg)
│       ├── logo_brown.png      # Logo — brown (for white navbar)
│       ├── logo_ppa.jpeg       # Original logo source
│       │
│       ├── interior1_common_bedroom.jpeg
│       ├── interior2.jpeg
│       ├── interior3.jpeg
│       ├── interior4_jewllry_shop.jpeg
│       ├── interior5_jewllry_shop.jpeg
│       ├── interior4_living_room.jpeg
│       ├── interior5_living_room.jpeg
│       ├── interior6_living_room.jpeg
│       ├── interior7_living_room.jpeg
│       ├── interior8_living_room.jpeg
│       ├── interior9_living_room.jpeg
│       ├── interior10_living_room.jpeg
│       ├── interior11_living_room.jpeg
│       ├── interior12_living_room.jpeg
│       ├── interior13_living_room.jpeg
│       ├── interior14_master_bedroom.jpeg
│       ├── interior15_master_bedroom.jpeg
│       ├── interior16_master_bedroom.jpeg
│       ├── interior17_master_bedroom.jpeg
│       ├── interior18_master_bedroom.jpeg
│       ├── interior18_living_room_o2.jpeg
│       ├── interior20_living_room_o2.jpeg
│       ├── interior21_living_room_o2.jpeg
│       ├── interior22_living_room_o2.jpeg
│       ├── interior23_living_room_o2.jpeg
│       │
│       ├── architecture1_jadhavvilla.jpeg
│       ├── architecture2.jpeg
│       ├── final_post.jpeg
│       ├── kopb1.jpeg
│       ├── kopb2.jpeg
│       ├── kopb3.jpeg
│       ├── lonavalavilla1.jpeg
│       ├── lonavalavilla2.jpeg
│       ├── niphad1.jpeg
│       ├── niphad2.jpeg
│       │
│       └── industrynashikdesign.JPEG
```

---

## 🚀 Deploying to Netlify

1. Extract the ZIP file
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Deploy manually**
3. Drag and drop the `ppa-prod` folder into Netlify
4. Your site is live instantly ✅

To update the site after changes:
- Make edits to your files locally
- Drag and drop the updated `ppa-prod` folder to Netlify again
- Netlify auto-deploys in seconds

---

## ➕ How to Add a New Project

Open `projects.html` and find the `CATEGORY_DATA` array near the bottom in the `<script>` tag.

### Add to an existing category (e.g. Interior):

```javascript
{
  id:    'project-id',          // unique ID, no spaces
  name:  'Project Name',        // shown as card title
  meta:  'Project Type · City', // shown below title
  cover: 'assets/images/your_cover_image.jpeg',  // thumbnail
  images: [
    { src: 'assets/images/img1.jpeg', label: 'Description' },
    { src: 'assets/images/img2.jpeg', label: 'Description' },
  ]
}
```

Then add your images to `assets/images/` — that's it. The page builds itself automatically.

### Add a new category entirely:

```javascript
{
  id:    'landscape',
  label: 'Category 04',
  title: 'Landscape Design',
  desc:  'Harmonious outdoor environments.',
  projects: [
    {
      id:    'garden-project',
      name:  'Garden Project',
      meta:  'Landscape · Pune',
      cover: 'assets/images/landscape1.jpeg',
      images: [
        { src: 'assets/images/landscape1.jpeg', label: 'Garden View' },
      ]
    }
  ]
}
```

---

## ➕ How to Add a New Service (Home Page)

Open `index.html` and find the `SERVICE_DATA` array in the `<script>` tag.

```javascript
{
  id:    'landscape',
  name:  'Landscape Design',
  desc:  'Short description of the service',
  cover: 'assets/images/your_cover.jpeg',
  link:  'projects.html#landscape',
  preview: [
    { src: 'assets/images/img1.jpeg', label: 'Project Name' },
    { src: 'assets/images/img2.jpeg', label: 'Project Name' },
  ]
}
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#A3472D` | Terracotta — main brand colour |
| `--secondary` | `#E8D5C4` | Beige — subtle accents |
| `--dark` | `#3A1F16` | Deep brown — dark backgrounds |
| `--accent` | `#C07A5C` | Warm amber — hover states |
| `--light` | `#F6EFE9` | Off-white — section backgrounds |
| `--font-serif` | Playfair Display | Headings, names, labels |
| `--font-sans` | Poppins | Body, buttons, captions |

---

## 🖼️ Logo

Two versions are used depending on background:

| File | Colour | Used on |
|------|--------|---------|
| `logo_cream.png` | Cream `#F0E6D6` | Hero section (terracotta bg) |
| `logo_brown.png` | Brown `#7B3120` | Navbar after scroll (white bg) |

**For best quality:** Replace both files with a PNG exported directly from your design software (Illustrator / Canva / Figma) with a **transparent background**. The current files are processed from the source image.

---

## ✨ Features

- **Animated hero** — SVG stroke-to-fill name animation on load
- **Typewriter effect** — "where line meets imaginations" types out on load
- **Mouse parallax** — topographic background lines follow cursor movement
- **Scroll animations** — cards and sections fade in as you scroll
- **Service strip** — click a service card to reveal a horizontal scrollable image preview
- **Project modal** — click any project to see all images in a slide-up gallery
- **Lightbox** — click any image for full-screen view with prev/next navigation
- **Floating WhatsApp** — green button fixed bottom-right on desktop
- **Back to top** — appears after scrolling 400px, smooth scrolls to top
- **Smart navbar** — transparent over hero, solid white after scroll with logo colour swap
- **Rich footer** — dark terracotta contact section with topographic background pattern
- **Keyboard support** — Escape to close, arrow keys to navigate lightbox

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout changes |
|------------|---------------|
| Desktop `> 1024px` | Full layout, 3-column services, 5-column footer |
| Tablet `≤ 1024px` | Footer contact grid → 3 columns |
| Mobile `≤ 768px` | Single column services, 2-column footer, smaller logo |
| Small mobile `≤ 480px` | Stacked CTA buttons, smallest logo, 2-column footer |

---

## 📞 Contact Info (to update)

All contact details are in **one place** in each HTML file. Search for `9595787780` to find and update phone number, or `piyushporearchitects01@gmail.com` for email.

| Detail | Current Value |
|--------|--------------|
| Phone | +91 9595787780 |
| Email | piyushporearchitects01@gmail.com |
| Instagram | @piyush_pore_architects |
| Location | Pune, Nashik, Kopargaon |
| WhatsApp | wa.me/919595787780 |

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — no frameworks, no dependencies
- **Google Fonts** — Playfair Display + Poppins
- **SVG** — topographic background patterns, all icons inline
- **Netlify** — hosting and deployment

---

*Built for Piyush Pore Architects — Interior | Landscape | Industrial*