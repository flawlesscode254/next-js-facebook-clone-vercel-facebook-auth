import Head from 'next/head'
import { useSession } from "next-auth/react";

import Header from '../components/Header'
import LogIn from '../components/LogIn';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';

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

          <main className='flex'>
            {/* Sidebar */}
            <SideBar />
            {/* Feed */}
            <Feed
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
