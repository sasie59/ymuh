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

import reducers from "./reducers";
import reducer2 from "./reducers/newsList";
import { changeArticle } from "./actions";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
for(let i = 1; i <= 100; i++ ) {
  if(i % 15 === 0) {
    console.warn( 'fizzbuzz');
  } else if(i % 3 === 0) {
    console.warn('fizz');
  } else if(i % 5 === 0) {
    console.warn('buzz');
  }
}

// const store2 = createStore(
//   reducer2,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// store2.dispatch(changeArticle());
// console.log(store2.getState());
// store.dispatch(changeArticle());
// console.log(store.getState());
// console.warn(store);


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
