// pages/_app.js
import '../styles/globals.css'
import { Provider } from "next-auth/re"

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}