

import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react";
import Header from '../components/Header'

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div>
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
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
