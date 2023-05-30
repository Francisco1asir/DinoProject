import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './common/NavBar';
import { Route, Routes } from 'react-router-dom';
import { routes } from './common/routes';
import { Main } from './pages/Main';
import { HomePage } from './pages';

function App() {
  return (
    <div className='cnt'>
      <header>
        <NavBar />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        {
          routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            >
            </Route>
          ))
        }

      </Routes>
      </main>
    </div>
  );
}

export default App;
