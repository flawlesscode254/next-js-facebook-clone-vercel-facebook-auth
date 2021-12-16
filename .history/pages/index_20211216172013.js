import { getSession } from "next-auth/react"
import Head from 'next/head'

import Header from '../components/Header'
import LogIn from "../components/LogIn"

export default function Home({ session }) {
  if (!session) return 
  return (
    <div>
      {!session ? (
<LogIn />
      ) : (
      <Head>
        <title>Facebook Clone</title>
      </Head>

        {/* Header */}

        <Header />

        <main>
          {/* Sidebar */}
          {/* Feed */}
          {/* Widgets */}
        </main>
      )}


    </div>
  )
}


export async function getServerSideProps(req, res) {
  const session = await getSession({ req })

  return {
    props: {
      session
    }
  }
}