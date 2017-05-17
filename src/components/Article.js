import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { getDetail } from '../actions'
import ArtBox from './ArtBox'

class Article extends Component {
  componentWillMount() {
    store.dispatch(getDetail)
  }

  render() {
    const { detail } = this.props
    return (
      <div className="article-detail">
        <ArtBox article={detail} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  detail: state.detail
})
export default connect(mapStateToProps)(Article)