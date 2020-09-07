import React, { Fragment } from 'react';
import './App.sass';
import Header from './components/header/Header';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Feed from './components/feed/Feed';
import RightSidebar from './components/rightSidebar/RightSidebar';
import Login from './components/login/Login';

function App() {
  const user = null;

  return (
    <div className="mainwrp app">
      {!user ? <Login /> : 
        <Fragment>
          <Header />
          <div className="app__body">
            <LeftSidebar />
            <Feed />
            <RightSidebar />
          </div>
        </Fragment>
      }
    </div>
  );
}

export default App;