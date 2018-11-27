"use strict";

var unicons = require("../lib/index.js");

Object.keys(unicons)
    .filter(function (key) {
        return typeof unicons[key] === "string";
    })
    .forEach(function (icon) {
        const iconFromCode = unicons.cli(icon)
        // console.log(icon, iconFromCode);
        if (icon === 'apple') {
            it(`apple icon`, () => {
                expect(iconFromCode).toBe(unicons.apple).toBe('')
            });
        }
    });
it(`The possible code point values range from U+0000 to U+10FFFF.`, () => {
    expect(unicons.cli('ZDings')).toBe('✏')
    expect(unicons.cli('dog')).toBe('🐶')
    expect(unicons.cli('laughing')).toBe('🤣')
    expect(unicons.cli('rocket')).toBe('🚀')
})
it(`img`, () => {
    expect(unicons.img(100)).toBe('https://abs.twimg.com/emoji/v2/72x72/1f4af.png')
    expect(unicons.img('stop')).toBe('https://abs.twimg.com/emoji/v2/72x72/1f64c.png')
});