import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ofertas from './pages/Ofertas';
import Telefonos from './pages/Telefonos';
import Consolas from './pages/Consolas';
import Juegos from './pages/Juegos';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ofertas" component={Ofertas} />
          <Route path="/telefonos" component={Telefonos} />
          <Route path="/consolas" component={Consolas} />
          <Route path="/juegos" component={Juegos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
