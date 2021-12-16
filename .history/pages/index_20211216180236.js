import Head from 'next/head'
import { useSession } from "next-auth/react";

import Header from '../components/Header'
import LogIn from '../components/LogIn';
import 

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
      <LogIn />
    </>
  );
}
