import { Html, Head, Main, NextScript } from 'next/document'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

export default function Document() {
  const cache = createCache({ key: 'css', prepend: true });
  cache.compat = true;
  return (
    <Html lang="en">
      <Head />
      <body>
        <CacheProvider value={cache}>
          <Main />
          <NextScript />
        </CacheProvider>
      </body>
    </Html>
  )
}
