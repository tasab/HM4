import React from 'react'
import ReactDOM from 'react-dom'
import { ReviewPage } from './review-page/review-page'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import './index.css'
import { HomePage } from './home-page/home-page'
import { ShopPage } from './shop-page/shop-page'
import { routes } from './routes'

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={routes.HOME} component={HomePage} />
                    <Route path={routes.SHOP} component={ShopPage} />
                    <Route path={routes.REVIEW} component={ReviewPage} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))


