// js/views/home.js
"use strict";

const m = require("mithril");

module.exports = {
    view: () => {
        return [
            m("div.homeInfo", [
                m("h1", {class: "title"}, "FunBundle"),
                m("h3", {class: "dailyDose"}, "Your daily dose of fun and news"),
                m("br"),
                m("p", {class: "homeText"}, "Funbundle is a collection of Reddit " +
                  "and News API so you easily stay up to date. If you feel like a " +
                  "casual look through some funny posts you can look into the " +
                  "FunZone page where you can choose between four different " +
                  "categories: 'All', 'Funny', 'Memes' and 'Aww'."),
                m("p", {class: "hometextTwo"}, "Or maybe you need to catch up to " +
                  "the latest news. On the page theNews you get the choice " +
                  "between Swedish news or English news"),
                m("br"),
                m("div.readMore", [
                    m("p", "In case you want to read more about Reddit:"),
                    m("a[href='https://www.redditinc.com/']", "Click here for Reddit"),
                    m("br"),
                    m("p", "In case you want to read more about News API:"),
                    m("a[href='https://newsapi.org/sources']", "Click here for News API")
                ])
            ])
        ];
    }
};
