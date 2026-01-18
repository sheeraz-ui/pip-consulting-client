# PIP Consulting - Client

React frontend for PIP Consulting Group website.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router
- Axios
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp env.example .env

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with:

```env
# Development (uses Vite proxy)
VITE_API_URL=/api

# Production (your server URL)
# VITE_API_URL=https://api.your-domain.com/api
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variable: `VITE_API_URL=https://your-api-server.com/api`
4. Deploy!

### Netlify

1. Push to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set environment variable: `VITE_API_URL`

### Manual Build

```bash
npm run build
# Serve the 'dist' folder with any static file server
```

## Project Structure

```
src/
├── admin/           # Admin panel components
├── assets/          # Static assets (logos, images)
├── components/      # Reusable components
├── contexts/        # React contexts
├── pages/           # Page components
└── utils/           # Utilities (API client)
```

## License

Private - PIP Consulting Group

