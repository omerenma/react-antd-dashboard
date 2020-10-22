import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import {store} from './store'
import MainContainer from './components/DashboardContainer/DefaultLayout'

function App() {
  return (
    
    <div className="App">
      <MainContainer />
    </div>
    
  );
}

export default App;
