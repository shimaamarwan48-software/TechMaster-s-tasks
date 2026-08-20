# PlusFit — Smartwatch Landing Page

A responsive landing page for a fictional smartwatch brand, built with vanilla HTML, CSS, and JavaScript as part of a front-end web development learning project.

🔗 **Live Demo:** file:///C:/Users/WinDows/OneDrive/Desktop/Skills/Projects%20of%20front%20end/Watch%20Website/index.html

## Features

- **Fully responsive design** — optimized for desktop (901px+), tablet (481px–900px), and mobile (480px and below)
- **Mobile navigation** — hamburger menu toggle for small screens
- **Smooth scrolling** — animated navigation between sections instead of instant jumps
- **Scroll-triggered animations** — cards and content fade/slide into view as you scroll, using the Intersection Observer API
- **Contact form validation** — checks required fields and email format before submission
- **9 product colorways** displayed in an interactive grid
- **3-tier pricing section** with a highlighted "most popular" plan

## Sections

1. Hero — introduction and call to action
2. Features — key smartwatch capabilities (heart rate, blood pressure, alarm, connectivity)
3. Colors — available colorways
4. About — brand story and stats
5. Pricing — subscription/product tiers
6. Contact — contact form and info
7. Footer — links and newsletter signup

## Tech Stack

- HTML5
- CSS3 (Flexbox, CSS Grid, custom properties, media queries)
- Vanilla JavaScript (DOM manipulation, Event Listeners, Intersection Observer API)
- [Font Awesome](https://fontawesome.com/) for icons

## Project Structure

```
PlusFit/
├── index.html
├── css/
│   └── style.css
├── javascript/
│   └── script.js
└── img/
    └── (watch images)
```

## Getting Started

1. Clone or download this repository
2. Make sure the `img/` folder contains all the referenced watch images
3. Open `index.html` in your browser — no build step or server required

Optionally, run a local server for a smoother development experience:

```bash
python3 -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

## Notes

- Product images used in this project are for demonstration/educational purposes only.
- This project was built as a learning exercise to practice responsive design and vanilla JavaScript DOM interactions.

## License

This project is open for educational use.
