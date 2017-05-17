import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../components/App'
import Article from '../components/Article'

export default (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={Article} />
    </div>
  </BrowserRouter>
)
