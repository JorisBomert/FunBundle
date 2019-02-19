// layout.js
"use strict";

const m = require("mithril");

module.exports = {
    view: (vnode) => {
        return [
            m("header", {class: "header"}, "FunBundle"),
            m("nav.menu", [
                m("a[href='/']", {oncreate: m.route.link}, [
                    m("i.fas fa-home fa-2x"),
                    "Home"
                ]),
                m("a[href='/funzone']", {oncreate: m.route.link}, [
                    m("i.fab fa-reddit-square fa-2x"),
                    "FunZone"
                ]),
                m("a[href='/news']", {oncreate: m.route.link}, [
                    m("i.far fa-newspaper fa-2x"),
                    "theNews"
                ])
            ]),
            m("main.container", vnode.children),
            m("footer.bottom", [
                m("nav.bottomNav", [
                    m("a[href='/']", {oncreate: m.route.link}, "Home"),
                    m("a[href='/funzone']", {oncreate: m.route.link}, "FunZone"),
                    m("a[href='/news']", {oncreate: m.route.link}, "theNews")
                ]),
                m("ul",
                    m("li",
                        m("a[href='https://www.reddit.com/r/all/']",
                            "Powered by Reddit API")),
                    m("li",
                        m("a[href='https://NewsAPI.org']",
                            "Powered by News API")),
                    m("li",
                        m("a[href='https://fontawesome.com/']",
                            "Icons credit Font Awesome")))
            ])
        ];
    }
};
