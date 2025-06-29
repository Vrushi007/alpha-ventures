# Alpha Ventures - Recruiting Company Website

A modern, responsive website for Alpha Ventures recruiting company built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**: Home, About, Clients, and Contact pages
- **Interactive Elements**: Contact form with validation, mobile navigation, FAQ accordion
- **Static Content**: No backend required - works with static hosting

## Pages

1. **Home Page** (`index.html`)

   - Hero section with call-to-action
   - Services overview
   - Company statistics
   - Why choose us section

2. **About Page** (`about.html`)

   - Company story and mission
   - Team members
   - Company values
   - Process overview

3. **Clients Page** (`clients.html`)

   - Client logos and testimonials
   - Industries served
   - Success stories
   - Track record statistics

4. **Contact Page** (`contact.html`)
   - Contact form with validation
   - Company contact information
   - Office hours
   - FAQ section

## File Structure

```
ui/
├── index.html          # Home page
├── about.html          # About us page
├── clients.html        # Our clients page
├── contact.html        # Contact us page
├── styles/
│   └── main.css        # Main stylesheet
└── scripts/
    ├── main.js         # Main JavaScript functionality
    └── contact.js      # Contact form handling
```

## How to Run

### Option 1: Simple HTTP Server (Recommended)

1. Open terminal/command prompt
2. Navigate to the `ui` directory:

   ```bash
   cd /path/to/alpha-ventures/ui
   ```

3. Start a simple HTTP server:

   **Using Python 3:**

   ```bash
   python -m http.server 8080
   ```

   **Using Python 2:**

   ```bash
   python -m SimpleHTTPServer 8080
   ```

   **Using Node.js (if you have it installed):**

   ```bash
   npx http-server -p 8080
   ```

   **Using PHP:**

   ```bash
   php -S localhost:8080
   ```

4. Open your browser and go to `http://localhost:8080`

### Option 2: Live Server (VS Code Extension)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Opening

You can also open the `index.html` file directly in your browser, though some features may not work properly due to browser security restrictions.

## Features & Functionality

### Contact Form

- Client-side validation for all required fields
- Email format validation
- Phone number validation
- Dynamic placeholder text based on service type
- Character counter for message field
- Success/error notifications
- Form submission simulation (logs to console)

### Navigation

- Responsive mobile navigation with hamburger menu
- Smooth scrolling between sections
- Active page highlighting
- Sticky navigation bar with scroll effects

### Interactive Elements

- FAQ accordion on contact page
- Hover effects on cards and buttons
- Animated statistics counters
- Scroll-triggered animations
- Image placeholder graphics with icons

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Optimized typography for all screen sizes
- Touch-friendly interface elements

## Customization

### Colors

The main brand colors are defined in CSS variables:

- Primary: `#667eea` (Blue gradient start)
- Secondary: `#764ba2` (Blue gradient end)
- Success: `#4caf50`
- Error: `#f44336`

### Content

All content is static and can be easily modified by editing the HTML files:

- Company information in the footer
- Team member details
- Client testimonials
- Service descriptions

### Images

Currently using Font Awesome icons as placeholders. You can replace these with actual images by:

1. Adding image files to an `images/` folder
2. Updating the HTML to use `<img>` tags instead of icon placeholders
3. Adding appropriate CSS styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance

The website is optimized for performance with:

- Minimized external dependencies
- Efficient CSS with modern techniques
- Optimized JavaScript with event delegation
- Font loading optimization

## Future Enhancements

When ready to add backend functionality:

- Contact form can be connected to email services (EmailJS, Formspree, etc.)
- Add job listings and applications
- Implement blog/news section
- Add admin panel for content management
- Integrate with CRM systems

## License

This project is for Alpha Ventures recruiting company.
