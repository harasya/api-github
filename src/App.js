import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './views/Landing';
import User from './views/User';
import Repos from './views/Repos';

function NoMatch() {
  return <h2>Halaman Tidak di temukan</h2>;
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact component={Landing} />

        <Route path='/user/:username' exact component={User} />
        <Route path='/user/:username/repos' exact component={Repos} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
