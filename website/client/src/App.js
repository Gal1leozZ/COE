import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import ReportPage from './pages/report';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/report" component={ReportPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
