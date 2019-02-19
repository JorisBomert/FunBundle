// eng_news.js
"use strict";

const m = require("mithril");
const theNews = require("../models/theNews.js");

function ifAuthor(author) {
    if (author !== null) {
        return m("p", {class: "newsAuthor"}, "Author: " + author);
    }
}

function ifDescription(description) {
    if (description !== null) {
        return m("p", {class: "description"}, description);
    }
}

function ifImage(img) {
    if (img !== null) {
        return m("img", {class: "newsPostImage", src: img,
            width: '500', height: '300'});
    }
}

module.exports = {
    oninit: theNews.engPosts,
    view: () => {
        return [
            m("div.mainTitle", [
                m("h1", {class: "theNews"}, "theNews"),
                m("div.newsFrom", [
                    m("button", {class: "swedish", href: "/news",
                        oncreate: m.route.link}, "Sweden"),
                    m("button", {id: "selected", class: "english", href: "/news/en",
                        oncreate: m.route.link}, "England")
                ])
            ]),
            m("div.newsPosts", theNews.posts.map((post) => {
                return [
                    m("a[href='" + post.url + "']", {class: "eachNewsPost"},
                        m("h3", {class: "postNewsTitle"}, post.title),
                        ifImage(post.urlToImage),
                        ifDescription(post.description),
                        ifAuthor(post.author),
                        m("br")
                    )
                ];
            }))
        ];
    }
};
