// fonts
import { Sora } from 'next/font/google';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// import components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import { ReactNode } from 'react';
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`page bgsite text-white bg-cover bg-no-repeat ${sora.variable} font-sora`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );

};

export default Layout;
