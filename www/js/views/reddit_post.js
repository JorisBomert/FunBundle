// reddit_post.js
"use strict";

const m = require("mithril");
const reddit = require("../models/reddit.js");

//const rTitle = "../../img/reddit_logos/Reddit_Lockup_OnWhite.png";

function ifReply(comment) {
    if (comment.data.replies != "") {
        return [
            comment.data.replies.data.children.map((reply) => {
                if (reply.kind === "t1") {
                    return [
                        m("div.firstReply", [
                            m("p", {class: "userName"}, reply.data.author),
                            m("p", {class: "commentText"}, reply.data.body)
                        ]),
                        ifSecondReply(reply)
                    ];
                }
            })
        ];
    }
}

function ifSecondReply(reply) {
    if (reply.data.replies != "") {
        return [
            reply.data.replies.data.children.map((reply2) => {
                if (reply2.kind === "t1") {
                    return [
                        m("div.secondReply", [
                            m("p", {class: "userName"}, reply2.data.author),
                            m("p", {class: "commentText"}, reply2.data.body)
                        ])
                    ];
                }
            })
        ];
    }
}

module.exports = {
    oninit: (vnode) => {
        reddit.getPost(vnode.attrs.category, vnode.attrs.id, vnode.attrs.name);
    },
    view: () => {
        if (reddit.currentPost.length !== 0) {
            if (reddit.currentPost.data.secure_media !== null) {
                if (reddit.currentPost.data.secure_media.reddit_video) {
                    const fallBack = reddit.currentPost.data.secure_media.reddit_video.fallback_url;

                    return [
                        console.log(reddit.currentPost.data),
                        m("h1", {class: "RedditTitle"}, "Reddit"),
                        m("div.redditViewPost", [
                            m("h3", {class: "viewPostTitle"}, reddit.currentPost.data.title),
                            m("p", {class: "author"},
                                "Posted by: " + reddit.currentPost.data.author),
                            m("div", [
                                m("video", {
                                    class: "postImage",
                                    src: fallBack,
                                    autoplay: true,
                                    loop: true,
                                    width: '400',
                                    height: '400'
                                })
                            ]),
                            m("div.share", [
                                m("button[data-clipboard-target='#copy']", {class: 'shareButton'},
                                    "Copy link to clipboard"),
                                m("input", {id: 'copy', class: "shareInput",
                                    value: "https://www.reddit.com" +
                                            reddit.currentPost.data.permalink})
                            ]),
                            m("div.addComment", [
                                m("p", {class: "wannaComment"}, "Want to add your own comment?"),
                                m("a[href='https://www.reddit.com" +
                                  reddit.currentPost.data.permalink +
                                  "']", {class: "commentButton"}, "Go to Reddit.com")
                            ])
                        ]),
                        m("div.redditViewComments", [
                            m("div", reddit.comments.map((comment) => {
                                if (comment.kind === "t1") {
                                    return [
                                        m("div.originComment", [
                                            m("p", {class: "userName"}, comment.data.author),
                                            m("p", {class: "commentText"}, comment.data.body)
                                        ]),
                                        ifReply(comment)
                                    ];
                                }
                            }))
                        ])
                    ];
                } else {
                    const vUrl = reddit.currentPost.data.preview.reddit_video_preview.fallback_url;

                    return [
                        console.log(reddit.currentPost.data),
                        m("h1", {class: "RedditTitle"}, "Reddit"),
                        m("div.redditViewPost", [
                            m("h3", {class: "viewPostTitle"}, reddit.currentPost.data.title),
                            m("p", {class: "author"}, "Posted by: " +
                              reddit.currentPost.data.author),
                            m("div", [
                                m("video", {
                                    class: "postImage",
                                    src: vUrl,
                                    autoplay: true,
                                    width: '400',
                                    height: '400'
                                })
                            ]),
                            m("div.share", [
                                m("button[data-clipboard-target='#copy']", {class: 'shareButton'},
                                    "Copy link to clipboard"),
                                m("input", {id: 'copy', class: "shareInput",
                                    value: "https://www.reddit.com" +
                                      reddit.currentPost.data.permalink})
                            ]),
                            m("div.addComment", [
                                m("p", {class: "wannaComment"}, "Want to add your own comment?"),
                                m("a[href='https://www.reddit.com" +
                                  reddit.currentPost.data.permalink +
                                  "']", {class: "commentButton"}, "Go to Reddit.com")
                            ])
                        ]),
                        m("div.redditViewComments", [
                            m("div", reddit.comments.map((comment) => {
                                if (comment.kind === "t1") {
                                    return [
                                        m("div.originComment", [
                                            m("p", {class: "userName"}, comment.data.author),
                                            m("p", {class: "commentText"}, comment.data.body)
                                        ]),
                                        ifReply(comment)
                                    ];
                                }
                            }))
                        ])
                    ];
                }
            } else if (reddit.currentPost.data.selftext !== "") {
                return [
                    m("h1", {class: "RedditTitle"}, "Reddit"),
                    m("div.redditViewPost", [
                        m("h3", {class: "viewPostTitle"}, reddit.currentPost.data.title),
                        m("p", {class: "author"}, "Posted by: " + reddit.currentPost.data.author),
                        m("p", {class: "selftext"}, reddit.currentPost.data.selftext),
                        m("div.share", [
                            m("button[data-clipboard-target='#copy']", {class: 'shareButton'},
                                "Copy link to clipboard"),
                            m("input", {id: 'copy', class: "shareInput",
                                value: "https://www.reddit.com" +
                                        reddit.currentPost.data.permalink})
                        ]),
                        m("div.addComment", [
                            m("p", {class: "wannaComment"}, "Want to add your own comment?"),
                            m("a[href='https://www.reddit.com" +
                              reddit.currentPost.data.permalink +
                              "']", {class: "commentButton"}, "Go to Reddit.com")
                        ])
                    ]),
                    m("div.redditViewComments", [
                        m("div", reddit.comments.map((comment) => {
                            if (comment.kind === "t1") {
                                return [
                                    m("div.originComment", [
                                        m("p", {class: "userName"}, comment.data.author),
                                        m("p", {class: "commentText"}, comment.data.body)
                                    ]),
                                    ifReply(comment)
                                ];
                            }
                        }))
                    ])
                ];
            } else {
                if (reddit.currentPost.data.url.includes(".png") ||
                    reddit.currentPost.data.url.includes(".gif") ||
                    reddit.currentPost.data.url.includes(".jpg")) {
                    return [
                        m("h1", {class: "RedditTitle"}, "Reddit"),
                        m("div.redditViewPost", [
                            m("h3", {class: "viewPostTitle"}, reddit.currentPost.data.title),
                            m("p", {class: "author"}, "Posted by: " +
                              reddit.currentPost.data.author),
                            m("img", {src: reddit.currentPost.data.url,
                                class: "postImage", width: '400', height: 'auto'}),
                            m("div.share", [
                                m("button[data-clipboard-target='#copy']", {class: 'shareButton'},
                                    "Copy link to clipboard"),
                                m("input", {id: 'copy', class: "shareInput",
                                    value: "https://www.reddit.com" +
                                            reddit.currentPost.data.permalink})
                            ]),
                            m("div.addComment", [
                                m("p", {class: "wannaComment"}, "Want to add your own comment?"),
                                m("a[href='https://www.reddit.com" +
                                  reddit.currentPost.data.permalink +
                                  "']", {class: "commentButton"}, "Go to Reddit.com")
                            ])
                        ]),
                        m("div.redditViewComments", [
                            m("div", reddit.comments.map((comment) => {
                                if (comment.kind === "t1") {
                                    return [
                                        m("div.originComment", [
                                            m("p", {class: "userName"}, comment.data.author),
                                            m("p", {class: "commentText"}, comment.data.body)
                                        ]),
                                        ifReply(comment)
                                    ];
                                }
                            }))
                        ])
                    ];
                } else {
                    return [
                        m("h1", {class: "RedditTitle"}, "Reddit"),
                        m("div.redditViewPost", [
                            m("h3", {class: "viewPostTitle"}, reddit.currentPost.data.title),
                            m("p", {class: "author"}, "Posted by: " +
                              reddit.currentPost.data.author),
                            m("a[href='" + reddit.currentPost.data.url + "']",
                                {class: "postImage"}, reddit.currentPost.data.url),
                            m("div.share", [
                                m("button[data-clipboard-target='#copy']", {class: 'shareButton'},
                                    "Copy link to clipboard"),
                                m("input", {id: 'copy', class: "shareInput",
                                    value: "https://www.reddit.com" +
                                            reddit.currentPost.data.permalink})
                            ]),
                            m("div.addComment", [
                                m("p", {class: "wannaComment"}, "Want to add your own comment?"),
                                m("a[href='https://www.reddit.com" +
                                    reddit.currentPost.data.permalink +
                                    "']", {class: "commentButton"}, "Go to Reddit.com")
                            ])
                        ]),
                        m("div.redditViewComments", reddit.comments.map((comment) => {
                            if (comment.kind === "t1") {
                                return [
                                    m("div.originComment", [
                                        m("p", {class: "userName"}, comment.data.author),
                                        m("p", {class: "commentText"}, comment.data.body)
                                    ]),
                                    ifReply(comment)
                                ];
                            }
                        })
                        )
                    ];
                }
            }
        } else {
            m.render;
        }
    }
};
