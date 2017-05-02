import React from 'react'
import { Container } from './Grid'

const Footer = () =>
  <footer className="footer">
    <Container>
      <div className="content has-text-centered">
        <p>
          <strong>FeMag</strong> by <a href="http://topgrd.me">topgrd</a>
        </p>
        <p>
          <a className="icon" href="https://github.com/jgthms/bulma">
            <i className="fa fa-github" />
          </a>
        </p>
      </div>
    </Container>
  </footer>

export default Footer
