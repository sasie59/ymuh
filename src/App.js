import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import InfoBlock from './components/InfoBlock';
import BannerBlock from './components/BannerBlock';
import RealTime from './components/RealTimeBlock'

function App() {
  return (
    <div className="App">
      <HeaderBlock />
      <InfoBlock />
      <BannerBlock />
      <RealTime />

    </div>
  );
}

export default App;
