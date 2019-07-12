import React from 'react';
import './App.css';
import Header from './components/Header';
import routes from './routes';
import {HashRouter} from 'react-router-dom'


function App () {
    return (
      <HashRouter>
      <div className="App">
        <Header />
          {routes}
      </div>
      </HashRouter>
    );
}

export default App;
