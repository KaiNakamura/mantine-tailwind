import { MantineProvider } from '@mantine/core';
import '@styles/globals.css';
import { getEmotionCache } from '@util/getEmotionCache';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const emotionCache = getEmotionCache();

  return (
    <div id="app">
      <Head>
        <title>Mantine with Tailwind</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        emotionCache={emotionCache}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}
