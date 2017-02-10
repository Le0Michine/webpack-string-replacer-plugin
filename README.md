# webpack-string-replacer-plugin

A plugin for replacing string value in assets.

Installation

```
npm install --save-dev webpack-string-replacer-plugin
```

Usage
```javascript
const StringReplacerPlugin = require('webpack-string-replacer-plugin');

...

// add to webpack plugins array
plugins: [
  new StringReplacerPlugin(options)
]

/*
  options: {
    files: array assets names to update, by default all assets will be updated
    replaceValue: regex or string to replace, this option is mandatory
    newValue: new value to insert, by default is ''
  }
*/
```