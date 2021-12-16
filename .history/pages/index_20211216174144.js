import Head from 'next/head'
import { useSession } from "next-auth/react"

import Header from '../components/Header'
import LogIn from "../components/LogIn"

export default function Home({ session }) {
  const { data: session } = useSession()
//   if (!session) return <LogIn />
//   return (
//     <div>
//       <Head>
//         <title>Facebook Clone</title>
//       </Head>

//         {/* Header */}

//         <Header />

//         <main>
//           {/* Sidebar */}
//           {/* Feed */}
//           {/* Widgets */}
//         </main>

//     </div>
//   )
// }

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}