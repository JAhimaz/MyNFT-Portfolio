import React from 'react';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { NFTSection } from './components/NFTSection';
import { LanguageProvider } from './containers/Language';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <header className="App-header">
          <Navigation />
          <About />
          <NFTSection />
        </header>
      </LanguageProvider>
    </div>
  );
}

// Created by Joshua Ahimaz @ 2022 | Sunway Tech Club x Web3 Series
//
// https://joshuaahimaz.com/
// https://github.com/JAhimaz
// https://www.linkedin.com/in/joshuaahimaz/

export default App;
