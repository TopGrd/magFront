import React from 'react'

const ArtBox = ({ article }) => {
  const { time, author, title, avatar, summary } = article

  return (
    <div className="article-box">
      <div className="post-meta">
        <img className="post-avatar" src={avatar} alt={author} />
        <div className="post-author">
          <p>
            <span><a>{author}</a></span>
          </p>
          <span className="post-time">
            POST @ {time}
          </span>
        </div>
      </div>
      <header>
        <h1 className="title is-4">
          <a>{title}</a>
        </h1>
      </header>
      <div className="content post-summary">
        {summary}
      </div>
      <div className="post-tags">
        <span className="tag is-info">Web</span>
        <span className="tag is-success">JavaScript</span>
        <span className="tag is-warning">Node.js</span>
      </div>
    </div>
  )
}


export default ArtBox
