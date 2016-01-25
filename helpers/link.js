
// compute correct link with locale suffix
module.exports = function(basename, context) {
    var locale = context.data.root.locale;
    if (!basename) {
        console.log('link err no basename', basename, context);
        return '#';
    }
    var link = basename.replace('_fr', '').replace('_en', '') + '_' + locale + '.html';
    if (locale === 'fr' && basename === 'index') {
        link = 'index.html';
    }
    return link;
}
