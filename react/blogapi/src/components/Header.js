import React from "react";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                color="inherit"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        BlogmeUp
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;