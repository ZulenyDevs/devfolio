# Devfolio - Modern Developer Portfolio

A professional, high-performance developer portfolio built with the latest web technologies. Designed to showcase projects, skills, and experience with a premium UI/UX.

![Devfolio Preview](/public/favicon.svg)

## Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/) (English & Spanish)
- **Email:** [Resend](https://resend.com/) + [React Email](https://react.email/)
- **Icons:** [Heroicons](https://heroicons.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Features

- **Modern UI/UX:** Premium design with custom color system, glassmorphism, and smooth transitions.
- **Fully Responsive:** Optimized for all devices, from mobile phones to large desktop screens.
- **Internationalization (i18n):** Full support for English and Spanish content.
- **High Performance:** Static generation, optimized images (`next/image`), and fast page loads.
- **Contact Form:** Functional contact form integrated with Resend API for real-time email delivery.
- **Dynamic Content:** Project and experience data separated from UI logic for easy updates.
- **SEO Optimized:** Proper metadata, semantic HTML, and Open Graph support.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devfolio.git
   cd devfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure Environment Variables:
   
   Create a `.env.local` file in the root directory and add your Resend API credentials:
   
   ```env
   # Resend API Configuration
   RESEND_API_KEY=re_your_api_key_here
   
   # Email to receive contact form submissions
   TO_EMAIL=your_email@example.com
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── messages/          # Translation files (en.json, es.json)
├── public/            # Static assets (images, favicons)
├── src/
│   ├── app/           # Next.js App Router pages and API routes
│   │   ├── api/       # Backend API routes (e.g., contact form)
│   │   └── [locale]/  # Localized pages
│   ├── components/    # Reusable UI components
│   └── lib/           # Utility functions and constants
└── ...
```

## Customization

- **Content:** Update `messages/en.json` and `messages/es.json` to change text content.
- **Projects:** Modify `src/lib/constants.tsx` to update project images and configuration.
- **Colors:** Adjust CSS variables in `src/app/globals.css` to change the color theme.

## License

This project is open source and available under the [MIT License](LICENSE).
