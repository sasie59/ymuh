import React from 'react';
import Header from './components/HeaderBlock';
import Info from './components/InfoBlock';
import Banner from './components/BannerBlock';
import RealTime from './components/RealTimeBlock'
import News from './components/NewsBlock'
import Footer from './components/FooterBlock'

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Banner />
      <RealTime />
      <News />
      <Footer />
    </div>
  );
}

export default App;
