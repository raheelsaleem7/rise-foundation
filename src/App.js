import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import routes from './routes/Routes';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
