import React from 'react'
import Nav from './Nav'
import ArticleContainer from './ArticleContainer'
import Footer from './Footer'
import '../style/App.css'

const App = ({ children }) => (
  <div className="App">
    <Nav />
    <ArticleContainer />
    {children}
    <Footer />
  </div>
)

export default App
