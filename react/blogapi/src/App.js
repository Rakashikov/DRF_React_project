import React from "react";
import './App.css';
import Posts from './components/posts';
import PostLoadingComponent from './components/postLoading';
import axiosInstance from "./axios";

export default function App() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = React.useState({
        loading: false,
        posts: null,
    });
    React.useEffect(() => {
        axiosInstance.get().then((res) => {
            const allPosts = res.data;
            setAppState({loading: false, posts: allPosts});
            console.log(res.data);
        });
    }, [setAppState]);
    return (
        <div className="App">
            <h1>Latest Posts</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts}/>
        </div>
    )
}
