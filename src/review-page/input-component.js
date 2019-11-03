import React from 'react'
import { routes } from '../routes'

export const InputComponent = props => {

    const onClick = () => {
      let path = routes.REVIEW
      props.history.push(path)
    }
    
    return(
        <> 
          <h1>{props.match.params.revievId}</h1>
          <button onClick={onClick}>Back</button>
        </>
    )
}