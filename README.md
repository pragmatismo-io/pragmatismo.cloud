# Setup Guide - pragmatismo.cloud

## Prerequisites
```bash
Node.js (LTS version) - https://nodejs.org
Git - https://git-scm.com
```

## Initial Setup

1. Clone repository:
```bash
cd /your/preferred/directory
git clone https://github.com/pragmatismo-io/pragmatismo.cloud
cd pragmatismo.cloud
```

2. Install dependencies:
```bash
npm install

# If needed, adjust Node version:
nvm install 18
nvm use 18
```

3. Run project:
```bash
npm run dev
# Access http://localhost:3000
```

## Technical Stack

### Next.js 14
- React Framework with SSR
- File-system routing 
- API Routes
- Image optimization

### UI Components
- shadcn/ui: React components
- Radix UI: UI primitives
- Tailwind CSS: Utility-first CSS

### Debug

Error resolution:
```bash
# Clear caches
rm -rf .next
rm -rf node_modules
npm install

# Check versions
node -v
npm -v

# Detailed logs
npm run dev --verbose
```

## Project Structure

- /components: Components
- /pages or /app: Pages
- /styles: Styles
- /public: Assets

## References

- Next.js docs
- Radix UI docs 
- shadcn/ui docs
- Tailwind docs
- twblocks.com: Tailwind components
- Accessibility example: mercur.com.br
