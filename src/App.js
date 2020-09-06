import React from 'react';
import './App.sass';
import Header from './components/header/Header';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Feed from './components/feed/Feed';
import RightSidebar from './components/rightSidebar/RightSidebar';

function App() {
  return (
    <div className="mainwrp app">
      <Header />
      <div className="app__body">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;