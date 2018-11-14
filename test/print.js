"use strict";

var unicons = require("../lib/index.js");

Object.keys(unicons)
    .filter(function (key) {
        return typeof unicons[key] === "string";
    })
    .forEach(function (icon) {
        const iconFromCode = unicons.cli(icon)
        console.log(icon, iconFromCode);
        if (icon === 'apple') {
            it(`apple icon`, () => {
                expect(iconFromCode).toBe(unicons.apple).toBe('')
            });
        }
    });
