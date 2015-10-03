var unicons = {
    check: "✓",
    cross: "✖",
    arrowRight: "→",
    blackCircle: "●"
};

if (process.platform === "win32") {
    unicons.check = "\u221A";
    unicons.cross = "\u00D7";
    unicons.arrowRight = "\u2192";
    unicons.blackCircle = "\u25cf";
}

module.exports = unicons;
