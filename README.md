# BonominiBlog - Astro Site with Gallery & 3D Models

A modern Astro website featuring a photo gallery with PhotoSwipe lightbox and 3D model viewer, deployed to GitHub Pages.

## 🚀 Features

- **Gallery Page** (`/gallery/`) - Photo gallery with PhotoSwipe lightbox
- **3D Models Page** (`/models/`) - Interactive 3D model viewer using `<model-viewer>`
- **Responsive Navigation** - Clean navigation with GitHub Pages subpath support
- **GitHub Pages Deployment** - Automated CI/CD with GitHub Actions

## 🏗️ Project Structure

```
/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── images/             # Gallery images
│   │   ├── thumbs/         # Thumbnail images
│   │   └── placeholder.svg # Placeholder image
│   └── models/             # 3D model files (.glb, .usdz)
├── src/
│   ├── components/
│   │   ├── Gallery.astro   # PhotoSwipe gallery component
│   │   └── Navigation.astro # Site navigation
│   ├── layouts/
│   │   └── Layout.astro    # Main layout with navigation
│   └── pages/
│       ├── index.astro     # Home page
│       ├── gallery.astro   # Gallery page
│       └── models.astro    # 3D models page
└── astro.config.mjs        # Astro config for GitHub Pages
```

## 🛠️ Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📸 Adding Images to Gallery

1. Place your images in `public/images/`
2. Create thumbnails in `public/images/thumbs/`
3. Update the `images` array in `src/components/Gallery.astro`:

```astro
const images = [
  { src: '/images/your-image.jpg', w: 2048, h: 1365, thumb: '/images/thumbs/your-thumb.jpg', alt: 'Your Image' },
  // Add more images...
];
```

## 🎯 Adding 3D Models

1. Place your `.glb` or `.usdz` files in `public/models/`
2. Update `src/pages/models.astro`:

```astro
<model-viewer
  src="/models/your-model.glb"
  camera-controls
  auto-rotate
  poster="/models/your-model-poster.jpg"
  ar
  alt="Your 3D Model">
</model-viewer>
```

## 🚀 GitHub Pages Deployment

The site is configured for deployment to `https://bonominijl.github.io/BonominiBlog/`

### Setup GitHub Pages:

1. **Repository Settings:**
   - Go to your repo → Settings → Pages
   - Set **Source** to **GitHub Actions**

2. **Deploy:**
   - Push to `main` branch
   - GitHub Actions will automatically build and deploy

### Manual Deployment:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 🎨 Customization

- **Styling:** Modify CSS in component files or add global styles
- **Navigation:** Update links in `src/components/Navigation.astro`
- **Layout:** Customize `src/layouts/Layout.astro`
- **Theme:** The site uses a clean, modern design that can be easily customized

## 📦 Dependencies

- **Astro** - Static site generator
- **PhotoSwipe** - Gallery lightbox
- **@google/model-viewer** - 3D model viewer (loaded from CDN)

## 🔧 Configuration

The site is configured for GitHub Pages subpath deployment in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://bonominijl.github.io',
  base: '/BonominiBlog/',
});
```

## 📝 Notes

- All navigation links include the `/BonominiBlog/` base path for GitHub Pages compatibility
- Placeholder images and models are included for testing
- The 3D model viewer supports AR on compatible devices
- PhotoSwipe provides touch gestures and keyboard navigation