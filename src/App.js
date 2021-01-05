import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={Contact} />
      <Redirect to="/" />
    </Switch>

  );
}

export default App;
