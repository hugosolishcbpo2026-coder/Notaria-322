# Hero background assets

Place your luxury office video and poster image here:

- `hero.mp4` → autoplay looping background video for desktop (recommended: muted, ≤ 6 MB, 1920×1080, H.264)
- `hero-poster.jpg` → fallback still image (also used as the video poster while it loads). Recommended: 1920×1080, optimized JPEG.

Both files are loaded from `/` at runtime (e.g. `<video src="/hero.mp4">`). If you don't provide a video the site still looks great — it will fall back to the cinematic gradient + grid pattern built into the Hero component.
