import '../styles/globals.css'
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.sesion}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
