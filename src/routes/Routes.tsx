import React, {useContext, useEffect} from "react";

import {HomePage} from '../pages/HomePage'
import {SignInPage} from "../pages/SignInPage";
import RoutingPath from "./RoutingPath";
import {SettingsPage} from '../pages/SettingsPage';
import {UserContext} from "../shared/provider/UserProvider";
import BrowserCache from "../shared/utils/BrowserCache";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {PokemonPage} from "../pages/PokemonPage";


export const Routes = (props: any) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfNotAuth = (navigateToPage: any) => {
        return authenticatedUser ? navigateToPage : SignInPage

    }
    const checkIfUserIsAuthInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem(BrowserCache.username))
    }
    useEffect(() => {
        checkIfUserIsAuthInBrowser()
    })
    
    return (
        
        <Router>
            {props.children}
            <Switch>
                <Route exact path={(RoutingPath.HomePage)} component={HomePage} />
                <Route exact path={RoutingPath.SignInPage} component={SignInPage} />
                <Route exact path={RoutingPath.PokemonPage} component={PokemonPage} />
                <Route exact path={RoutingPath.SettingsPage} component={blockRouteIfNotAuth(SettingsPage)} />
            </Switch>
        </Router>
    )
}