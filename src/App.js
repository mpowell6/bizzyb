import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Careers from "./components/careers/Careers";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="page-container">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Services" component={Services} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Careers" component={Careers} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
