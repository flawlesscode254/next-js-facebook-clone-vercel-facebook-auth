import { getSession } from "next-auth/react";
import Head from "next/head";

import Header from "../components/Header";
import LogIn from "../components/LogIn";

export default function Home({ session }) {
  return (
    <div>
      {!session ? (
        <LogIn />
      ) : (
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
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
}
