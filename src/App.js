import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.scss";
import Header from "./components/HeaderBlock";
import Info from "./components/InfoBlock";
import Banner from "./components/BannerBlock";
import RealTime from "./components/RealTimeBlock";
import News from "./components/NewsBlock";
import Footer from "./components/FooterBlock";

// import reducers from "./reducers/internalMedList";
import reducer from "./reducers/fourList";
// import { changeDepartment } from "./actions";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store2 = createStore(
//   reducer2,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store2.dispatch(changeDepartment());
// store2.dispatch(changeDepartment());
// store2.dispatch(changeDepartment());
// console.log(store2.getState());


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
