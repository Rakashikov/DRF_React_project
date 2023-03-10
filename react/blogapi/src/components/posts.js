import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardContent, CardMedia, Container, Grid, Link, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor: theme.palette.type === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
    },
    postTitle: {
        fontSize: "16px",
        textAlign: "left",
    },
    postText: {
        display: "flex",
        justifyContent: "left",
        alignItems: "baseline",
        fontSize: "12px",
        textAlign: "left",
        marginBottom: theme.spacing(2),
    },
}));

const Posts = (props) => {
    const {posts} = props;
    const classes = useStyles();
    console.log(posts);
    // if not posts or posts.length === 0 or post.detail === "Authentication credentials were not provided." return <p>No posts, sorry</p>;

    if (!posts || posts.length === 0 || posts.detail === "Authentication credentials were not provided.") return <p>No
        posts, sorry</p>;
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {posts.map((post) => {
                        return (
                            <Grid item key={post.id} xs={12} md={4}>
                                <Card className={classes.card}>
                                    <Link
                                        color="textPrimary"
                                        href={'post/' + post.slug}
                                        className={classes.link}
                                    >
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    </Link>
                                    <CardContent className={classes.cardContent}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            className={classes.postTitle}
                                        >
                                            {post.title.substring(0, 50)}...
                                        </Typography>
                                        <div className={classes.postText}>
                                            <Typography
                                                color="textPrimary"
                                            ></Typography>
                                            <Typography color="textSecondary">
                                                {post.excerpt.substring(0, 60)}...
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Posts;