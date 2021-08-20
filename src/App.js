import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init()
})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route path ='/home'>
            <Home></Home>
          </Route>
          <Route path ='/about'>
            <About></About>
          </Route>
          <Route path ='/portfolio'>
            <Portfolio></Portfolio>
          </Route>
          <Route path ='/contact'>
            <Contact></Contact>
          </Route>
          <Route path ='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
