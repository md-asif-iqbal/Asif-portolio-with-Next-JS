

# Asif Iqbal Portfolio

This is a personal portfolio website built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It showcases my skills, experience, projects, and achievements in a modern, responsive design.

## Features

- Custom interactive components: About, Projects, Contact, Hero3D, Achievements, Education, Experience, and more (see `src/components/`).
- 3D Hero section and animated UI using Framer Motion.
- EmailJS integration for contact form (see `EMAILJS_SETUP.md` and `EMAILJS_TROUBLESHOOTING.md`).
- Downloadable CV ([public/Md_Asif_Iqbal_CV.pdf](public/Md_Asif_Iqbal_CV.pdf)).
- Responsive and mobile-friendly design.
- Modern icons via Lucide React.


# Folder Structure

```
next-portfolio/
├── EMAILJS_SETUP.md
├── EMAILJS_TROUBLESHOOTING.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── public/
│   ├── cse.png
│   ├── file.svg
│   ├── globe.svg
│   ├── javascript.png
│   ├── macdosoft.png
│   ├── Md_Asif_Iqbal_CV.pdf
│   ├── next.svg
│   ├── nicdoweb.png
│   ├── profile.jpg
│   ├── repwoop.png
│   ├── software.png
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── Achievements.tsx
│       ├── AvatarOrb.tsx
│       ├── Background.tsx
│       ├── Contact.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── GlareCard.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Hero3D.tsx
│       ├── IMG_3953.PNG
│       ├── javascript.png
│       ├── Magnetic.tsx
│       ├── Projects.tsx
│       ├── Section.tsx
│       ├── Services.tsx
│       ├── Skills.tsx
│       ├── Socials.tsx
│       ├── software.png
│       ├── Spotlight.tsx
│       └── TiltCard.tsx
```



## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

You can start editing the main page by modifying `src/app/page.tsx`. Components are in `src/components/`.

## EmailJS Setup

To enable the contact form, follow the instructions in [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md). If you encounter issues, see [`EMAILJS_TROUBLESHOOTING.md`](EMAILJS_TROUBLESHOOTING.md).

## Build & Deploy

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

You can deploy this app easily on [Vercel](https://vercel.com/) or any platform that supports Next.js.

## License

This project is open source and available under the MIT License.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
