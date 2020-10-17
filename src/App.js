import React from 'react';
import SideBar from './SideBar/SideBar';
import Message from './Message/Message';
import './App.scss';

export function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Message />
      </div>
    </div>
  );
}

export default App;
