import React from 'react'
import PropTypes from 'prop-types'

export const Row = ({ children }) => <div className="columns">{children}</div>

export const Col = ({ children, span, offset }) => {
  const spanClass = span ? `is-${span}` : ''
  const offsetClass = offset ? `is-offset-${offset}` : ''
  const colClass = `column ${spanClass} ${offsetClass}`

  return (
    <div className={colClass}>
      {children}
    </div>
  )
}

export const Container = ({ children }) => (
  <div className="container">{children}</div>
)

Row.defaultProps = {
  children: ''
}

Row.propTypes = {
  children: PropTypes.node
}

Col.defaultProps = {
  children: '',
  offset: ''
}

Col.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.string,
  span: PropTypes.string.isRequired
}

Container.defaultProps = {
  children: ''
}

Container.propTypes = {
  children: PropTypes.node
}
