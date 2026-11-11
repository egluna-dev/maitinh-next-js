import '../styles/globals.scss';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../styles/theme'; 
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
    
  )
}

export default MyApp
