import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// eslint-disable-next-line
it('renders without crashing', () => {
  // eslint-disable-next-line
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
