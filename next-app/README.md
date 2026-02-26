# Word of Mouth Window Tinting (Next.js)

## Run locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add images**  
   Copy your `pictures` folder into `public/assets`:
   ```bash
   mkdir public\assets
   xcopy /E /I /Y ..\pictures public\assets
   ```
   If your images live elsewhere, copy all image files (including `soft-where-logo.png`) into `public/assets`.

3. **Start dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```
