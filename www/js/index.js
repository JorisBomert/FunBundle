// index.js
"use strict";

const m = require("mithril");
const layout = require("./views/layout.js");
const home = require("./views/home.js");
const funzone = require("./views/funzone.js");
const funny = require("./views/funny.js");
const memes = require("./views/memes.js");
const aww = require("./views/aww.js");
const news = require("./views/news.js");
const EngNews = require("./views/eng_news.js");
const redditPost = require("./views/reddit_post.js");

const app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/": {
                render: () => {
                    return m(layout, {key: 'a'}, m(home));
                }
            },
            "/funzone": {
                render: () => {
                    return m(layout, {key: 'b'}, m(funzone));
                }
            },
            "/funzone/funny": {
                render: () => {
                    return m(layout, {key: 'b'}, m(funny));
                }
            },
            "/funzone/memes": {
                render: () => {
                    return m(layout, {key: 'b'}, m(memes));
                }
            },
            "/funzone/aww": {
                render: () => {
                    return m(layout, {key: 'b'}, m(aww));
                }
            },
            "/post/:category/:id/:name": {
                render: (vnode) => {
                    return m(layout, {key: 'c'}, m(redditPost, vnode.attrs));
                }
            },
            "/news": {
                render: () => {
                    return m(layout, {key: 'd'}, m(news));
                }
            },
            "/news/en": {
                render: () => {
                    return m(layout, {key: 'e'}, m(EngNews));
                }
            }
        });
    }
};

app.initialize();
