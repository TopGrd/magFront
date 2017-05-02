import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Container } from './Grid'
import ArtBoxes from './ArtBoxes'

const ArticleContainer = () => (
  <Row>
    <Container>
      <Col span="10" offset="1">
        <h1 className="content-subhead">Recent Posts</h1>
        <ArtBoxes />
      </Col>
    </Container>
  </Row>
)

ArticleContainer.defaultProps = {
  children: ''
}

ArticleContainer.propTypes = {
  children: PropTypes.node
}

export default ArticleContainer
