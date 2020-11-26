import React, {useContext, useState} from "react";
import {UserContext} from "../shared/provider/UserProvider";
import {useHistory} from 'react-router-dom'
import RoutingPath from "../routes/RoutingPath";
import BrowserCache from "../shared/utils/BrowserCache";
import {Card} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import {Button, TextField} from "@material-ui/core";


export const SignInPage = () => {
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)


    const login = (e: any) => {
        e.preventDefault();
        setAuthenticatedUser(username);
        localStorage.setItem(BrowserCache.username, username)
        history.push(RoutingPath.HomePage)

    }

    return (
        
        <div>
            <div className="row">
                
        <form action="" className="form">
            <div className="col-3" >
            <TextField id="standard-basic" label="Username" onChange={event => {
                setUsername(event.target.value)
            }} />
                </div>
            <div className="col-3" >
            <TextField type="password" className="formPassword" id="standard-basic" label="Password" onChange={event => {
                setPassword(event.target.value)}} />
            </div>
            <br/>
            <Button variant="contained" className="formButton" onClick={(e) => login(e)} color="primary">
                Sign in
            </Button>
        </form>
            </div>
    </div>
        
    )
}