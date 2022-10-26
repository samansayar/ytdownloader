import '../styles/globals.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <div dir='rtl' className='overflow-hidden select-none'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
