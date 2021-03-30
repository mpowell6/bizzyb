import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;
