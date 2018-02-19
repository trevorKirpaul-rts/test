import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../header/Header'
import Home from '../home/Home'

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
