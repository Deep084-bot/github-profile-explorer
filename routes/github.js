import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const router = express.Router();
const API_URL = "https://api.github.com/users";
let username = "";

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
    res.render("index.ejs");
    
});

router.get('/profile', async (req, res) => {
    username = req.query.username;
    console.log(username);
    try {
        const result = await axios.get(`${API_URL}/${username}`);
        const repos = await axios.get(`${API_URL}/${username}/repos`);
        res.render("profile.ejs", {
            avatar: result.data.avatar_url,
            username: result.data.login,
            bio: result.data.bio,
            followers: result.data.followers,
            followings: result.data.following,
            publicRepos: result.data.public_repos,
            repos: repos.data
        })
    } catch (error) {
        res.render("error.ejs");
    }
});

export default router;