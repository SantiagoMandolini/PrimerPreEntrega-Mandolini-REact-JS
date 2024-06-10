import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./src/assets/componentes/Navbar";
import Home from "./src/assets/componentes/Home";
import Ofertas from "./src/assets/Ofertas";
import Telefonos from "./src/assets/Telefonos";
import Consolas from "./src/assets/Consolas";
import Juegos from "./src/assets/Juegos";

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
