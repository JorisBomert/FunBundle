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
const engNews = require("./views/eng_news.js");
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
                    global.scrollTo(0, 0);
                }
            },
            "/funzone": {
                render: () => {
                    return m(layout, {key: 'b'}, m(funzone));
                    global.scrollTo(0, 0);
                }
            },
            "/funzone/funny": {
                render: () => {
                    return m(layout, {key: 'b'}, m(funny));
                    global.scrollTo(0, 0);
                }
            },
            "/funzone/memes": {
                render: () => {
                    return m(layout, {key: 'b'}, m(memes));
                    global.scrollTo(0, 0);
                }
            },
            "/funzone/aww": {
                render: () => {
                    return m(layout, {key: 'b'}, m(aww));
                    global.scrollTo(0, 0);
                }
            },
            "/post/:category/:id/:name": {
                render: (vnode) => {
                    return m(layout, {key: 'c'}, m(redditPost, vnode.attrs));
                    global.scrollTo(0, 0);
                }
            },
            "/news": {
                render: () => {
                    return m(layout, {key: 'd'}, m(news));
                    global.scrollTo(0, 0);
                }
            },
            "/news/en": {
                render: () => {
                    return m(layout, {key: 'e'}, m(engNews));
                    global.scrollTo(0, 0);
                }
            }
        });
    }
};

app.initialize();
