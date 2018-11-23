var isWin = process.platform === "win32" || process.argv.slice(-1).includes('window');
const img = {
    100: "https://abs.twimg.com/emoji/v2/72x72/1f4af.png",
    stop: "https://abs.twimg.com/emoji/v2/72x72/1f64c.png"
}

var unicons = {
    arrowLeft: "←",
    arrowUp: "↑",
    arrowRight: "→",
    arrowDown: "↓",
    check: "✓",
    circle: "●",
    copyright: "©",
    cross: "✖",
    gear: "\u2699",
    option: "⌥",
    super: "⌘",
    shift: "⇧",
    warning: "⚠",

    apple: "",
    100: "https://abs.twimg.com/emoji/v2/72x72/1f4af.png",
    stop: img.stop,

    ZDings: '✏'
};

var win32Cli = {
    arrowLeft: "\u2190",
    arrowUp: "\u2191",
    arrowRight: "\u2192",
    arrowDown: "\u2193",
    check: "\u221A",
    circle: "\u006F",
    copyright: "\u00A9",
    cross: "\u00D7",
    gear: "\u263C",
    option: "\u003C",
    shift: "\u2191",
    super: "\u221E",
    warning: "\u0021",
    apple: "\uF8FF",
    ZDings: "\u270F"
};

unicons.cli = function (name) {
    var icon = isWin ? win32Cli[name] : unicons[name];

    return icon || " "; // degrade gracefully to whitespace
};
unicons.img = name => {
    return img[name] || ' '
}
unicons.get=icon=>unicons.cli(icon)
module.exports = unicons;
