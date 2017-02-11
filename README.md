# webpack-string-replacer-plugin

A plugin for replacing string value in assets. It processes assets right before emitting so you can treat this plugin as a postprocessor.

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
    assets: array of assets names to update, by default all the assets will be updated
    replaceValue: regex or string to replace, this option is mandatory
    newValue: new value to insert or function, by default is ''
  }

*/
```
PS. Under the hood it uses [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method with `replaceValue` and `newValue` as parameters.