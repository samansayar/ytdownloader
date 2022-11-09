import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <div dir='rtl' className='overflow-hidden select-none'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
