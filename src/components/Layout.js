import React from 'react';
import Head from './Head';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({children}) {
  const isLoggedIn = !!localStorage.getItem('token');
  if (!isLoggedIn) return (window.location.href = '/login');

  return (
    <React.Fragment>
      <Head />
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;