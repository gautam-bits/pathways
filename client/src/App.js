import React, { Component, Fragment } from "react"
import { Route, Switch } from "react-router-dom"

import GithubAuth from './components/GithubAuth/GithubAuth'
import CreateEditPathway from './screens/CreateEditPathway/CreateEditPathway'
import SearchPage from "../src/screens/SearchPage/SearchPage"

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/" exact component={SearchPage} />
                    <Route path="/create" exact component={CreateEditPathway} />
                </Switch>
            </Fragment>
        )
    }
}

export default App
