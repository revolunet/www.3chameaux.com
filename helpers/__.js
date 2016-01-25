var path = require('path');

module.exports = function (key, context) {
    var translations = require(path.join(__dirname, '..', 'locales', context.data.root.locale || 'en'));
    return translations[key] || key;
}
