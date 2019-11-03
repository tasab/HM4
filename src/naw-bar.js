import React from 'react'
import { routes } from './routes'
import {
    Link,
    useLocation
} from 'react-router-dom'
import './index.css'

export const NawBar = () => {
const { pathname } = useLocation()

    return(
        <ul className='nawigation'>
            <li>
            <Link to={routes.HOME} className={pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
            <Link to={routes.SHOP} className={pathname === routes.SHOP ? 'active' : ''}>Shop</Link>
            </li>
            <li>
            <Link to={routes.REVIEW} className={pathname === routes.REVIEW ? 'active' : ''}>Review</Link>
            </li>
        </ul>
    )
}