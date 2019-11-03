import React, { useState, useEffect } from 'react'
import { Inputs } from './inputs'
import { Switch,
    Route,
    useLocation
} from 'react-router-dom'
import { routes } from '../routes'
import { InputComponent } from './input-component'
import { NawBar } from '../naw-bar'
import { getStorage, setStorage } from '../srorage-service'

export const ReviewPage = () => {
    const location  = useLocation()
    const itemsParsed = getStorage()
    
    let [inputItems, setInputItems] = useState({
        inputItem: itemsParsed === null ? [] : itemsParsed.inputItem
    })

    let [inputValue, setInputValue] = useState('')
    const onChange = event => {
        setInputValue(event.target.value)
    }

    const onAdd = () => {
        setInputItems({inputItem: [...inputItems.inputItem, inputValue]})
        setInputValue('')
    }

    useEffect(() => {
        setStorage(inputItems)
    }, [inputItems])

    return(
            <>
            {location.pathname === routes.REVIEW ? (
            <div>
            <NawBar></NawBar>
                <input type='text' onChange={onChange} value={inputValue} className='review-input'></input>
                <button onClick={onAdd} className='review-add'>Add</button>
                <Inputs inputItems={inputItems}></Inputs>
            </div>
            ) : null}
                <Switch>
                    <Route path={`${routes.REVIEW}/:revievId`} component={InputComponent}/>
                </Switch>
            </>
    )
}
