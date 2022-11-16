import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testmonials from './components/Testmonial';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
       <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar></Navbar>
        </div>
       </div>
       <div className='bg-primary flex justify-center items-start'>
          <div className='xl:max-w-[1280px] w-full'>
           <Hero></Hero>
          </div>
       </div>

       <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
          <div className='xl:max-w-[1280px] w-full'>
            <Stats></Stats>
            <Business></Business>
            <Billing></Billing>
            <CardDeal></CardDeal>
            <Testmonials></Testmonials>
            <Clients></Clients>
            <CTA></CTA>
            <Footer></Footer>
          </div>
       </div> 
    </div>
  )


export default App