# Ronnie Pyne - Personal Portfolio

A modern, interactive personal portfolio website featuring a terminal interface and dynamic backgrounds. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## ✨ Features

### 🖥️ Interactive Terminal
- **Command-line interface** with a nostalgic terminal aesthetic
- **Built-in commands** for navigation and information display
- **Responsive design** that works seamlessly on all devices
- **Command history** with arrow key navigation
- **Auto-focus** on page load for immediate interaction

### 🎨 Dynamic Backgrounds
- **Hex Grid** - Animated hexagonal grid with neon shimmer effects and mouse interaction
- **Matrix Rain** - Digital rain effect with green terminal theme
- **Cyberpunk Cityscape** - Animated line art cityscape with glowing windows

### 🎯 Theme System
- **Modular theme architecture** for easy customization
- **Persistent theme selection** stored in localStorage
- **Automatic background synchronization** with theme changes
- **Cross-browser compatible** styling

### 📱 Responsive Design
- **Mobile-first approach** with optimized layouts
- **Touch-friendly interface** for mobile devices
- **Consistent experience** across all screen sizes

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with strict configuration
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **Custom CSS Variables** - Dynamic theming system

### Graphics & Animation
- **Canvas API** - High-performance 2D graphics for backgrounds
- **Three.js** - 3D graphics for cyberpunk cityscape
- **WebGL Shaders** - Custom shaders for visual effects

### Testing
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing utilities
- **Babel** - JavaScript compilation for testing

### Build & Development
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing pipeline
- **TypeScript Compiler** - Type checking and compilation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run test suite
npm run test:watch   # Run tests in watch mode
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🏗️ Project Structure

```
src/
├── app/                    # App entry point and global styles
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── sections/         # Main page sections
│   │   └── terminal/     # Terminal interface components
│   └── ui/               # Reusable UI components
├── contexts/              # React context providers
├── lib/                   # Utility functions and helpers
└── test/                  # Test setup and configuration
```

## 🎨 Customization

### Adding New Themes
1. Update `ThemeType` in `ThemeContext.tsx`
2. Add theme colors to CSS variables in `index.css`
3. Update `BackgroundContext.tsx` to include new background type
4. Add background component to `App.tsx`

### Adding New Commands
1. Extend the `commands` object in `CommandProcessor.ts`
2. Implement command logic with proper typing
3. Add to help text and exclude from `all` command if needed

### Adding New Backgrounds
1. Create new background component in `components/ui/`
2. Implement Canvas or Three.js rendering
3. Add background selection logic in `App.tsx`

## 🧪 Testing

The project includes comprehensive testing setup:
- **Unit tests** for all major components
- **Integration tests** for terminal functionality
- **Test utilities** and setup files
- **Jest configuration** with React Testing Library

Run tests with:
```bash
npm test
```

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Manual Build
```bash
# Build for production
npm run build

# Preview build
npm run preview
```

## 🔧 Configuration Files

- **`vite.config.ts`** - Vite build configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration
- **`postcss.config.js`** - PostCSS configuration
- **`.eslintrc.json`** - ESLint configuration
- **`jest.config.js`** - Jest testing configuration

## 🌟 Performance Features

- **Canvas optimization** with DPR capping and frame throttling
- **Static layer pre-rendering** for complex backgrounds
- **Path2D reuse** for efficient drawing operations
- **30 FPS throttling** for smooth animations
- **Lazy loading** and code splitting where applicable

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome. Please ensure all tests pass and follow the existing code style.

## 📄 License

Personal project - All rights reserved.

## 👨‍💻 Author

**Ronnie Pyne** - Software Developer and Technology Enthusiast

---

Built with ❤️ using modern web technologies
