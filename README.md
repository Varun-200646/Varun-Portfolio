# Varun Mhatre — Portfolio Website

A multi-page, deployable portfolio website for Varun Ram Mhatre — B.E. AI & Data Science student at Terna Engineering College, Navi Mumbai.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, featured projects, certifications |
| About | `about.html` | Bio, education timeline, values |
| Projects | `projects.html` | All 5 projects with filter by category |
| Skills | `skills.html` | Interactive tabbed skills with animated bars |
| Contact | `contact.html` | Contact form + direct links |

## File Structure

```
portfolio/
├── index.html          ← Homepage
├── about.html          ← About page
├── projects.html       ← All projects
├── skills.html         ← Skills & certifications
├── contact.html        ← Contact form
├── netlify.toml        ← Netlify config
├── css/
│   └── style.css       ← All styles (design system)
└── js/
    └── main.js         ← Interactions, animations, nav
```

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended — FREE)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **"Add new site" → "Import an existing project"**
3. Connect your GitHub account
4. Push this portfolio folder to a GitHub repo first (see below)
5. Select the repo → Netlify auto-detects and deploys
6. Your site goes live at `https://your-name.netlify.app`
7. You can set a custom domain for free

**Or drag & drop deploy:**
- Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- Drag the entire `portfolio/` folder into the browser
- Done! Live in seconds.

### Option 2: GitHub Pages (FREE)

1. Create a new GitHub repository named `username.github.io`
2. Push all portfolio files to the root of that repo
3. Go to **Settings → Pages → Source → main branch**
4. Site goes live at `https://Varun-200646.github.io`

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Varun-200646/Varun-200646.github.io.git
git push -u origin main
```

### Option 3: Vercel (FREE)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **"New Project" → Import Git Repository**
3. Select your portfolio repo
4. Click Deploy — done!

---

## ✉️ Activate the Contact Form

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month):

1. Sign up at formspree.io
2. Create a new form — copy your Form ID
3. In `contact.html`, replace `YOUR_FORM_ID`:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

---

## 🎨 Customization

- All colors are CSS variables in `css/style.css` under `:root`
- Change `--cyan` to change the primary accent color
- Fonts: Cabinet Grotesk (display) + Instrument Serif (italic) + JetBrains Mono (mono)
- To add a new project: copy a `.project-detail` block in `projects.html`

---

Built with: Pure HTML, CSS, and vanilla JavaScript. No frameworks needed.
