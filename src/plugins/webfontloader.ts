import { load } from 'webfontloader';
/**
 * Webfont loader
 */
export async function loadFonts(): Promise<void> {
  /** dns-prefetch */
  const prefetch = document.createElement('link');
  prefetch.rel = 'dns-prefetch';
  prefetch.href = '//fonts.googleapis.com';
  document.head.appendChild(prefetch);

  /** Preconnect */
  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = 'https://fonts.gstatic.com';
  preconnect.crossOrigin = 'crossorigin';
  document.head.appendChild(preconnect);

  // WebFont loader Promise fix
  await new Promise<void>(resolve => {
    load(
      /** Webfont Config */
      {
        google: {
          families: [
            'Roboto:100,300,400,500,700,900',
            // 'Roboto+Mono:100,300,400,500,700,900',
            // Emoji Fix
            // (Only put `display=swap` on the last line.)
            // 'Noto+Color+Emoji&display=swap',
          ],
        },
        active: () => {
          resolve();
        },
      }
    );
  });
}
