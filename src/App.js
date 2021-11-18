
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
