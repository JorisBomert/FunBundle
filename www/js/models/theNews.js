// models/theNews.js
"use strict";

const m = require("mithril");

const viceNews = {
    baseURL: "https://newsapi.org/v2/top-headlines?country=se&apiKey=",
    engURL: "https://newsapi.org/v2/top-headlines?country=gb&apiKey=",
    apiKey: "090d603733cc49d494b2973920aec9d4",
    posts: [],
    getPosts: () => {
        return m.request({
            method: "GET",
            url: viceNews.baseURL + viceNews.apiKey
        }).then((result) => {
            viceNews.posts = result.articles;
        }).catch((error) => {
            console.log(error);
        });
    },
    engPosts: () => {
        return m.request({
            method: "GET",
            url: viceNews.engURL + viceNews.apiKey
        }).then((result) => {
            viceNews.posts = result.articles;
        }).catch((error) => {
            console.log(error);
        });
    }
};

module.exports = viceNews;
