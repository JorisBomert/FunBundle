// funzone.js
"use strict";

const m = require("mithril");
const reddit = require("../models/reddit.js");

//const rTitle = "../../img/reddit_logos/Reddit_Lockup_OnWhite.png";

module.exports = {
    oninit: [
        reddit.getPosts(),
        reddit.posts.slice()
    ],
    view: () => {
        return [
            m("div.redditMainTitle", [
                m("h1", {class: "title"}, "Reddit"),
                m("div.postFrom", [
                    m("button", {id: "selected", class: "all", href: "/funzone",
                        oncreate: m.route.link}, "All"),
                    m("button", {class: "funny", href: "/funzone/funny",
                        oncreate: m.route.link}, "Funny"),
                    m("button", {class: "memes", href: "/funzone/memes",
                        oncreate: m.route.link}, "Memes"),
                    m("button", {class: "aww", href: "/funzone/aww",
                        oncreate: m.route.link}, "Aww")
                ])
            ]),
            m("div.posts", reddit.posts.slice(1).map((post) => {
                if (post.data.secure_media !== null) {
                    if (post.data.secure_media.reddit_video) {
                        const link = post.data.secure_media.reddit_video.fallback_url;

                        return [
                            m("div.eachPost", {href: "/post/" + post.data.subreddit + "/" +
                              post.data.id + "/" + post.data.title, oncreate: m.route.link},
                            m("h3", {class: "postTitle"}, post.data.title),
                            m("video", {class: "redditPostImage", src: link,
                                width: '200', height: 'auto', autoplay: true, loop: true}),
                            m("p", {class: "submitted"}, "submitted by " + post.data.author),
                            m("br")
                            )
                        ];
                    } else {
                        const link = post.data.secure_media.oembed.thumbnail_url;

                        return [
                            m("div.eachPost", {href: "/post/" + post.data.subreddit + "/" +
                              post.data.id + "/" + post.data.title, oncreate: m.route.link},
                            m("h3", {class: "postTitle"}, post.data.title),
                            m("img", { class: "redditPostImage", src: link,
                                width: '200', height: 'auto' }),
                            m("p", {class: "submitted"}, "submitted by " + post.data.author),
                            m("br")
                            )
                        ];
                    }
                } else if (post.data.thumbnail.includes(".jpg")) {
                    const link = post.data.thumbnail;

                    return [
                        m("div.eachPost", {href: "/post/" + post.data.subreddit + "/" +
                          post.data.id + "/" + post.data.title, oncreate: m.route.link},
                        m("h3", {class: "postTitle"}, post.data.title),
                        m("img", {class: "redditPostImage", src: link,
                            width: '200', height: 'auto'}),
                        m("p", {class: "submitted"}, "submitted by " + post.data.author),
                        m("br")
                        )
                    ];
                } else {
                    if (post.data.url.includes(".png") ||
                        post.data.url.includes(".gif") ||
                        post.data.url.includes(".jpg") ||
                        post.data.url.includes(".mp4") ||
                        post.data.url.includes("youtube")) {
                        if (post.data.url.includes(".mp4") ||
                            post.data.url.includes("youtube")) {
                            return [
                                m("div.eachPost", {href: "/post/" + post.data.subreddit + "/" +
                                  post.data.id + "/" + post.data.title, oncreate: m.route.link},
                                m("h3", {class: "postTitle"}, post.data.title),
                                m("video", {class: "redditPostImage", src: post.data.url,
                                    width: '200', height: 'auto'}),
                                m("p", {class: "submitted"}, "submitted by " + post.data.author),
                                m("br")
                                )
                            ];
                        } else {
                            return [
                                m("div.eachPost", {href: "/post/" + post.data.subreddit + "/" +
                                  post.data.id + "/" + post.data.title, oncreate: m.route.link},
                                m("h3", {class: "postTitle"}, post.data.title),
                                m("img", {class: "redditPostImage", src: post.data.url,
                                    width: '200', height: 'auto'}),
                                m("p", {class: "submitted"}, "submitted by " + post.data.author),
                                m("br")
                                )
                            ];
                        }
                    } else {
                        if (post.data.selftext) {
                            return [
                                m("div.eachPost", {href: "/post/" + post.data.subreddit + "/" +
                                  post.data.id + "/" + post.data.title, oncreate: m.route.link},
                                m("h3", {class: "postTitle"}, post.data.title),
                                m("p", {class: "redditPostText"}, post.data.selftext),
                                m("p", {class: "submitted"}, "submitted by " + post.data.author),
                                m("br")
                                )
                            ];
                        } else {
                            return [
                                m("div.eachPost", {href: "/post/" + post.data.subreddit + "/" +
                                  post.data.id + "/" + post.data.title, oncreate: m.route.link},
                                m("h3", {class: "postTitle"}, post.data.title),
                                m("a[href='" + post.data.url + "']", {class: "redditPostUrl"},
                                    post.data.url),
                                m("p", {class: "submitted"}, "submitted by " + post.data.author),
                                m("br")
                                )
                            ];
                        }
                    }
                }
            }))
        ];
    }
};
