import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Create from './components/Create/Create';
import About from './components/About/About';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Note from './components/Note/Note';
import Error from './components/Error/Error';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/note" component={Note} />
          <Route exact path="/note/:noteURL" component={Note} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
