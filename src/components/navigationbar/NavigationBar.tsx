import React, {useContext} from 'react';
import '../../shared/css/GlobalCss.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RoutingPath from "../../routes/RoutingPath";
import {useHistory} from "react-router-dom";
import BrowserCache from "../../shared/utils/BrowserCache";
import {UserContext} from "../../shared/provider/UserProvider";
import {Profile} from "../profile/Profile";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();
    const history = useHistory()
    const [authenticatedUser] = useContext(UserContext)

    const displayUserIfAuth = () => {
        if (authenticatedUser){
            return <Profile />
        }
        else{
            return <Button color="inherit" className="signIn" onClick={() => history.push(RoutingPath.SignInPage)}>Sign In</Button>
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                     <Typography variant="h6" className={classes.title} onClick={() => history.push(RoutingPath.HomePage)}>
                        Home
                    </Typography>
                    {/*<Button color="inherit" onClick={() => history.push(RoutingPath.SignInPage)}>Login</Button>*/}
                    {displayUserIfAuth()}
                </Toolbar>
            </AppBar>
        </div>
    );
}
