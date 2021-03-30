import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/Home" component={Home}>
            <Home />
          </Route>
          <Route path="/Services" component={Services}>
            <Services />
          </Route>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
      </div>
    </div>
  );
}

export default App;
