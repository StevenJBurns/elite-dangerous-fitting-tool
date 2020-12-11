import React from 'react';
import './App.css';

const ShipList = React.lazy(() => import('./ShipList'));

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header></header>
      <main>
        <React.Suspense fallback={<h1> *** Loading ***</h1>}>
          <ShipList />
        </React.Suspense>
      </main>
      <footer>
        <h4>&copy; {currentYear} &bull; SJB</h4>
      </footer>
    </>
  )
};

export default App;
