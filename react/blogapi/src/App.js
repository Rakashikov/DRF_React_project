import React from "react";
import './App.css';
import Posts from './components/posts';
import PostLoadingComponent from './components/postLoading';

export default function App() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = React.useState({
        loading: false,
        posts: null,
    });
    React.useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `http://localhost:8000/api/`;
        fetch(apiUrl)
            .then((data) => data.json())
            .then((posts) => {
                setAppState({ loading: false, posts: posts });
            });
        }, [setAppState]);
    return(
        <div className="App">
            <h1>Latest Posts</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    )
}
