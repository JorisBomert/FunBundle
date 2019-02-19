//icons.js
"use strict";

//const fs = require("fs");
const m = require("mithril");

import * as fs from 'fs';

function icon(svg) {
    return m('.icon', m.trust(svg));
}

module.exports = {
    icon1: icon(fs.readFileSync('../../css/icons/home.svg', 'utf8')),
    icon2: icon(fs.readFileSync('../../css/icons/reddit.svg', 'utf8')),
    icon3: icon(fs.readFileSync('../../css/icons/news.svg', 'utf8'))
};
