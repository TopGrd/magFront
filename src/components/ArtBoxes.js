import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { getArticles } from '../actions'
import ArtBox from './ArtBox'

class ArtBoxes extends Component {
  componentWillMount() {
    store.dispatch(getArticles)
  }

  getArtBoxes() {
    const { articles } = this.props
    const articleBoxes = articles.map(article => (
      <ArtBox article={article} key={article.id} />
    ))
    return articleBoxes
  }

  render() {
    return (
      <div className="article-boxes">
        {this.getArtBoxes()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articles
})
export default connect(mapStateToProps)(ArtBoxes)
