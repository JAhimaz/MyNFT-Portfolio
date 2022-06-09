import React from 'react';
import { About } from './components/About';
import { NFTSection } from './components/NFTSection';
import { LanguageProvider } from './containers/Language';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <header className="App-header">
          <About />
          <NFTSection />
        </header>
      </LanguageProvider>
    </div>
  );
}

export default App;
