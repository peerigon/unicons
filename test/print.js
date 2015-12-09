"use strict";

var unicons = require("../lib/index.js");

Object.keys(unicons)
    .filter(function (key) {
        return typeof unicons[key] === "string";
    })
    .forEach(function (icon) {
        console.log(icon, unicons.cli(icon));
    });
