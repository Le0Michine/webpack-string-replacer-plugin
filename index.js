function StringReplacerPlugin(options) {
    const { assets, replaceValue, newValue } = options || {};
    if (assets && assets.constructor !== Array) {
        throw new Error(`StringReplacerPlugin: assets should be an array or undefined, actual value is: ${assets}`);
    }
    if (!replaceValue) {
        throw new Error(`StringReplacerPlugin: replaceValue shoudn't be undefined`);
    }

    this.assets = assets;
    this.replaceValue = replaceValue;
    this.newValue = newValue || '';
}

StringReplacerPlugin.prototype.apply = function(compiler) {
    const files = this.assets;
    const replaceValue = this.replaceValue;
    const newValue = this.newValue;

    compiler.plugin("emit", function(compilation, callback) {
        var assetNames = getAssetsToProcess(compilation.assets, files);
        assetNames.forEach(name => {
            var asset = compilation.assets[name];
            var content = asset.source();
            if (content) {
                const updatedContent = content.replace(replaceValue, newValue);
                compilation.assets[name] = { source: () => updatedContent, size: () => updatedContent.length };
            } else {
                console.log(`\nStringReplacerPlugin: unable to read asset ${name}`);
            }
        });
        callback();
    });
};

function getAssetsToProcess(assets, files) {
    const assetNames = Object.keys(assets).filter(x => files ? files.some(f => x.match(f)) : true);
    return assetNames;
}

module.exports = StringReplacerPlugin;