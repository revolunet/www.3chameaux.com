var link = require('./link');

module.exports = function (lang, context) {
    var basename = context.data.root.path.name,
        link;
    if (context.data.root.locale === 'fr') {
        link = basename.replace('_fr', '_en') + '.html';
        if (basename === 'index') {
            link = 'index_en.html';
        }
        return '<a href="' + link + '">English</a>'
    } else if (context.data.root.locale === 'en') {
        link = basename.replace('_en', '_fr') + '.html';
        if (basename === 'index_en') {
            link = 'index.html';
        }
        return '<a href="' + link + '">Français</a>'
    }
  
}

