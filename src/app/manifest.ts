import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest{
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '3D3D3D', 
    theme_color: '3D3D3D',
    icons: [
      {
        // src: '/icon-192x192.png',
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        // src: '/icon-512x512.png',
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}