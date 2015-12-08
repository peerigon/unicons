# unicons

**Cross-platform unicode icon toolkit**

[![](https://img.shields.io/npm/v/unicons.svg)](https://www.npmjs.com/package/unicons)
[![](https://img.shields.io/npm/dm/unicons.svg)](https://www.npmjs.com/package/unicons)

Provides fast access to the most commonly used unicode icons.

```javascript
var unicons = require("unicons");

console.log(unicons.check); // ✓
console.log(unicons.cross); // ✖
```

## Installation

```
npm i unicons --save
```

## CLI mode

**unicons** has especially been designed for use in CLIs. If you want to support different OS, just call `.cli(iconName)` and you'll get the most suitable character for the given environment:

```javascript
unicons.cli("circle"); // ● on Unix
                       // o on Windows
```

## Icon table

Property | Default | Windows Console Fallback
---------|---------|-------------------------|
`arrowLeft` | ← | ←
`arrowUp` | ↑ | ↑
`arrowRight` | → | →
`arrowDown` | ↓ | ↓
`check` | ✓ | √
`circle` | ● | o
`cross` | ✖ | ×
`copyright` | © | (c)
`gear` | ⚙ | ⚙
`option` | ⌥ | <
`super` | ⌘ | _
`shift` | ⇧ | ↑


The icon table is still very small :(<br>
If you can't find your icon in the [icon table](https://github.com/peerigon/unicons#icon-table), don't hesitate to create a pull request.


## Contributing

You can refer to the Unicode Character table site for integrating more characters: http://unicode-table.com/en


## License

Unlicense
