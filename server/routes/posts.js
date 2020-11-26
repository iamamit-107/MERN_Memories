const express = require("express");
const { getPosts, createPost } = require("../controllers/posts");

// initialize express router
const router = express.Router();

/**
 *      @ GET /posts
 *      @ get all the posts
 */
router.get("/", getPosts);

/**
 *      @ POST /posts
 *      @ create a posts
 */
router.post("/", createPost);

// export routes regarding posts
module.exports = router;
