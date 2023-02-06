import React, {useEffect, useState} from "react";
import axiosInstance from "../axios";
import {useParams} from "react-router-dom";
//Material UI
import {makeStyles} from "@material-ui/core/styles";
import {Container, CssBaseline, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

export default function Single() {
    const {slug} = useParams();
    const classes = useStyles();

    const [data, setData] = useState({posts: []});

    useEffect(() => {
        axiosInstance.get('posts/?slug=' + slug).then((res) => {
            setData({posts: res.data});
        });
    }, [setData]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline/>
            <div className={classes.paper}></div>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        {data.posts.title}
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        {data.posts.excerpt}
                    </Typography>
                </Container>
            </div>
        </Container>
    );
}