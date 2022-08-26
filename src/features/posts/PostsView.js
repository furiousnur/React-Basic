import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./postsSlice";

const PostsView = () => { 
    const {posts,  isLoading, error} = useSelector((state) => state.posts);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    
    
    return (
        <div>
            <h2>Posts App</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <section>
                {posts && posts.map((post) => {
                    return (
                        <article key={post.id}>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
                        </article>  
                    );
                })}
            </section>
        </div>
    );
};

export default PostsView;
