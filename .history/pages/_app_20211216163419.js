import '../styles/globals.css'
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <Provider >
      
    </Provider>
  ) <Component {...pageProps} />
}

export default MyApp
