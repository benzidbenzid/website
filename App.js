import React from 'react';
import Nav from "./compouned/navbar/Nav";
import Herosection from './compouned/herosection/Herosection';
import About from './compouned/about/About';
import Services from './compouned/services/Services';
import Contact from './compouned/contact/Contact';
import Client from './compouned/client/Client';
import Footer from './compouned/footer/Footer';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css" />
      </Helmet>
      
      <div>
        <Nav/>
      </div>
      <div>
        <Herosection/>
      </div>

      <div>
        <About/>
      </div>
      <div>
        <Services/>
      </div>
      <div>
        <Client/>
      </div>
      <div>
        <Contact/>
      </div>
      
      <div>
        <Footer/>
      </div>

    </>
  );
}

export default App;
