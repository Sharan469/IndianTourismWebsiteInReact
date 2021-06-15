import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Explorer from './components/pages/Explorer';
import North from './components/pages/North';
import South from './components/pages/South';
import East from './components/pages/East';
import West from './components/pages/West';
import Map from './components/pages/Map';
import About from './components/pages/About';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/Explorer' exact component = {Explorer}/>
        <Route path='/northindia' exact component={North}/>
        <Route path='/southindia' exact component={South}/>
        <Route path='/eastindia' exact component={East}/>
        <Route path='/westindia' exact component={West}/>
        <Route path='/maps' exact component={Map}/>
        <Route path='/about' exact component={About} />
        

      </Switch>
      
      </Router>
    </>
  );
}

export default App;
