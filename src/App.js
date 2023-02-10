import React from 'react';
// views
import Banner from './views/Banner';
import Header from './views/Header';
import Nav from './views/Nav';
import About from './views/About';
import Services from './views/Services';
import Work from './views/Work';
import Contact from './views/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
