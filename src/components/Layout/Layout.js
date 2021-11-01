import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title = 'Great State Burger' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Great State Burger Site" />
      </Head>
      {/* <Header /> */}

      <main className="font-asap">{children}</main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
