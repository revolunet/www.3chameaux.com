
// compute correct link with locale suffix
module.exports = function(basename, context) {
    var locale = context.data.root.locale;
    var link = basename.replace('_fr', '').replace('_en', '') + '_' + locale + '.html';
    if (locale === 'fr' && basename === 'index') {
        link = 'index.html';
    }
    return link;
}
