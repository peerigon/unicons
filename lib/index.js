var isWin = process.platform === "win32" || process.argv.slice(-1).includes('window');

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

    apple: ""
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
    apple: "\uF8FF"
};

unicons.cli = function (name) {
    var icon = isWin ? win32Cli[name] : unicons[name];

    return icon || " "; // degrade gracefully to whitespace
};

module.exports = unicons;
