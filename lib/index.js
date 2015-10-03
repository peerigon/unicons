var isWin = process.platform === "win32";
var unicons = {
    check: "✓",
    cross: "✖",
    arrowLeft: "←",
    arrowUp: "↑",
    arrowRight: "→",
    arrowDown: "↓",
    circle: "●"
};
var win32Cli = {
    check: "\u221A",
    cross: "\u00D7",
    arrowLeft: "\u2190",
    arrowUp: "\u2191",
    arrowRight: "\u2192",
    arrowDown: "\u2193",
    circle: "\u006F"
};

unicons.cli = function (name) {
    var icon = isWin ? win32Cli[name] : unicons[name];

    return icon || " "; // degrade gracefully to whitespace
};

module.exports = unicons;
