import '../styles/globals.scss';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../styles/theme'; 
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
