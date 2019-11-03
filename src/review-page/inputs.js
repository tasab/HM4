import React from 'react'
import { InputItem } from './input-item'
import PropTypes from 'prop-types'
import '../index.css'
export const Inputs = props => {
    return(
         <ul className='item-list'>
             {props.inputItems.inputItem.map(item => <InputItem key={item} inner={item}/>)}
        </ul>
    )
}
Inputs.propTypes ={
    inputItems: PropTypes.object.isRequired
}