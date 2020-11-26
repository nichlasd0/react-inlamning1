import React, {useContext, useState} from 'react'
import {UserContext} from "../../shared/provider/UserProvider";
import './Profile.css'
import RoutingPath from "../../routes/RoutingPath";
import {useHistory} from "react-router-dom";
import BrowserCache from "../../shared/utils/BrowserCache";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

export const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const logout = () => {
        setAuthenticatedUser()
        localStorage.removeItem(BrowserCache.username)
        history.push(RoutingPath.HomePage)
    }
    return (
        
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <img src="https://thispersondoesnotexist.com/image" alt="No picture" style={{width: 35}}/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>{authenticatedUser}</MenuItem>
                <MenuItem onClick={()=>{history.push(RoutingPath.SettingsPage);handleClose()}}>My account</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </Menu>
        </div>
    )
}