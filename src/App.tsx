import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Home } from 'components/pages/Home/Home';
import { Ships } from 'components/pages/Ships/Ships';
import { Modules } from 'components/pages/Modules/Modules';
import { Fittings } from 'components/pages/Fittings/Fittings';
import { About } from 'components/pages/About/About';
import './App.css';

const ShipList = React.lazy(() => import('./ShipList'));

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <AppBar position="relative">
        <Container>
          <Typography variant="h4">
            ED FITTING TOOL
          </Typography>
        </Container>
      </AppBar>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/ships" exact>
            <Ships />
          </Route>
          <Route path="/modules" exact>
            <Modules />
          </Route>
          <Route path="/fittings" exact>
            <Fittings />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
        <React.Suspense fallback={<h1> *** Loading ***</h1>}>
          <ShipList />
        </React.Suspense>
      </main>
      <BottomNavigation component="footer">
        <Typography variant="h6">&copy; {currentYear} &bull; SJB</Typography>
      </BottomNavigation>
    </>
  )
};

export default App;
