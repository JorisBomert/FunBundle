// models/reddit.js
"use strict";

const m = require("mithril");

const reddit = {
    baseURL: "https://www.reddit.com/",
    apiKey: "Iz1-u_0Q2F9J2w",
    secret: "agW5A3p0UzBm52qzfSlD0saCoH8",
    posts: [],
    postFunny: [],
    postMemes: [],
    postAww: [],
    getPosts: () => {
        return m.request({
            method: "GET",
            url: reddit.baseURL + "r/all/.json?count=30"
        }).then((result) => {
            reddit.posts = result.data.children;
        });
    },
    getFunny: () => {
        return m.request({
            method: "GET",
            url: reddit.baseURL + "r/funny/.json?count=30"
        }).then((result) => {
            reddit.postFunny = result.data.children;
        });
    },
    getMemes: () => {
        return m.request({
            method: "GET",
            url: reddit.baseURL + "r/memes/.json?count=30"
        }).then((result) => {
            reddit.postMemes = result.data.children;
        });
    },
    getAww: () => {
        return m.request({
            method: "GET",
            url: reddit.baseURL + "r/aww/.json?count=30"
        }).then((result) => {
            reddit.postAww = result.data.children;
        });
    },
    currentPost: [],
    comments: [],
    getPost: (category, id, name) => {
        return m.request({
            method: "GET",
            url: reddit.baseURL + "r/" + category + "/comments/" +
                id + "/" + name + "/.json"
        }).then((result) => {
            reddit.currentPost = result[0].data.children[0];
            reddit.comments = result[1].data.children;
        });
    }
};

module.exports = reddit;
