import React from 'react';
import { createStore } from "redux";

import Header from './components/HeaderBlock';
import Info from './components/InfoBlock';
import Banner from './components/BannerBlock';
import RealTime from './components/RealTimeBlock';
import News from './components/NewsBlock';
import Footer from './components/FooterBlock';
import './App.scss';
import reducers from './reducers/internalMedList';
import { change, addNumber } from './actions';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
store.subscribe(() => console.warn(store.getState()));
store.dispatch(change());
store.dispatch(addNumber());



function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Info />
        <Banner />
        <RealTime />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
