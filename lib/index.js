var isWin = process.platform === "win32";

var unicons = {
    arrowLeft: "←",
    arrowUp: "↑",
    arrowRight: "→",
    arrowDown: "↓",
    check: "✓",
    circle: "●",
    copyright: "©",
    cross: "✖",
    gear: "⚙",
    option: "⌥",
    super: "⌘",
    shift: "⇧"
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
    gear: "\u2699",
    option: "\u003C",
    shift: "\u2191",
    super: "\u8984"
};

unicons.cli = function (name) {
    var icon = isWin ? win32Cli[name] : unicons[name];

    return icon || " "; // degrade gracefully to whitespace
};

module.exports = unicons;
