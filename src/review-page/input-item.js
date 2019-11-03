import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes.js'
import PropTypes from 'prop-types'
 import '../index.css'

export const InputItem = props => {
return(
    <li className='input-item'>
        <Link className='input-item-link' to={routes.REVIEW + '/' + props.inner}>{props.inner}</Link>
    </li>
)
}

InputItem.propTypes ={
    inner: PropTypes.string.isRequired
}
InputItem.defaultProps = {
    inner: ''
}