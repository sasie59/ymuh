import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Header from "./components/HeaderBlock";
import Info from "./components/InfoBlock";
import Banner from "./components/BannerBlock";
import RealTime from "./components/RealTimeBlock";
import News from "./components/NewsBlock";
import Footer from "./components/FooterBlock";
import reducers from "./reducers/internalMedList";
import { realTimeInfo } from "./actions";
import "./App.scss";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.warn(store.getState()));
store.dispatch(realTimeInfo());

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="container">
          <Header />
          <Info />
          <Banner />
          <RealTime />
          <News />
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
