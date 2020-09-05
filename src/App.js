import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import InfoBlock from './components/InfoBlock';
import BannerBlock from './components/BannerBlock';
import RealTime from './components/RealTimeBlock'
import News from './components/NewsBlock'
import Footer from './components/FooterBlock'

function App() {
  return (
    <div className="App">
      <HeaderBlock />
      <InfoBlock />
      <BannerBlock />
      <RealTime />
      <News />
      <Footer />
    </div>
  );
}

export default App;
