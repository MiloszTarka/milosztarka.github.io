import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import News from './components/News';
import Navbar from './components/Navbar';

import {
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <HashRouter>
      <div class="main-screen">
        <Navbar></Navbar>
        <Route exact path="/" component={Home}/>
        <Route exact path="/News" component={News}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/FAQ" component={FAQ}/>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
