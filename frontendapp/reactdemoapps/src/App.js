// App.jsx

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './Main/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
