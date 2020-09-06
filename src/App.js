import React from 'react';
import './App.sass';
import Header from './components/header/Header';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Feed from './components/feed/Feed';

function App() {
  return (
    <div className="mainwrp app">
      <Header />
      <div className="app__body">
        <LeftSidebar />
        <Feed />
        <LeftSidebar />
        {/* Post Timeline */}
        {/* Right Sidebar */}
      </div>
    </div>
  );
}

export default App;