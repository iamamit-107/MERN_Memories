import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <h2>Post</h2>
            <Post />
        </>
    );
};

export default Posts;
