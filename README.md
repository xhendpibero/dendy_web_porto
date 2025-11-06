# Dendy Sapto Adi - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS. This portfolio showcases my professional experience, skills, education, and latest projects.

## 🚀 Features

- **Single JSON Data Source**: All portfolio data is centralized in `public/data/portfolio-data.json` for easy management
- **Multi-language Ready**: JSON structure supports future i18n implementation
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4
- **Performance Optimized**: Fast loading times with optimized images and code splitting
- **SEO Friendly**: Proper metadata and semantic HTML structure

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

## 🛠️ Getting Started

### Installation

Clone the repository:
```bash
git clone <your-repo-url>
cd dendy_web_porto
```

Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

Build the application:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:
```bash
npm start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
dendy_web_porto/
├── public/
│   ├── data/
│   │   └── portfolio-data.json    # Main portfolio data source
│   └── images/                    # Image assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/             # Home page components
│   │   │   └── layout/           # Layout components
│   │   ├── page.tsx              # Main page
│   │   └── layout.tsx            # Root layout
│   └── utils/
│       ├── hooks.ts              # Custom React hooks
│       ├── portfolio.ts          # Portfolio data utilities
│       └── image.ts              # Image path utilities
└── README.md
```

## 📝 Data Management

All portfolio data is stored in `public/data/portfolio-data.json`. This includes:

- **Personal Information**: Name, title, summary, about, stats, languages
- **Contact Information**: Phone, email, LinkedIn, GitHub
- **Experience**: All work experiences with details
- **Projects**: Latest works and projects
- **Education**: Educational background
- **Skills**: Technical skills organized by category
- **Certifications**: Professional certifications

### Updating Portfolio Data

Simply edit `public/data/portfolio-data.json` to update your portfolio information. The changes will be reflected across all components automatically.

## 🎨 Customization

### Colors

Primary colors are defined in `src/app/globals.css`:
- Primary: `#FE4300`
- Secondary: `#868686`
- Soft Gray: `#F0F0F0`

### Images

Replace images in `public/images/` directory:
- Banner image: `public/images/home/banner/dendysaptoadi.jpg`
- Work images: `public/images/work/work-img-*.jpg`

## 🔧 Technologies Used

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Bricolage Grotesque (Google Fonts)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Dendy Sapto Adi**

- LinkedIn: [linkedin.com/in/dendysaptoadi](https://linkedin.com/in/dendysaptoadi)
- GitHub: [github.com/xhendpibero](https://github.com/xhendpibero)
- Email: dendysaptoadi160@gmail.com
- Phone: +62 896-0258-9896

## 🙏 Acknowledgments

- Design template originally from [getnextjstemplates](https://getnextjstemplates.com/)
- Built with modern web technologies and best practices

---

**Note**: This portfolio is open for collaborations. Feel free to reach out!
