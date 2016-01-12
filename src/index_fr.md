---
title: 'Index FR'
layout: index.html
banner: [{
    text: 'title 1',
    alt: 'title1',
    src: 'images/slide02.jpg'
},{
    text: 'title 2',
    alt: 'title2',
    src: 'images/slide01.jpg'
},{
    text: 'title 3',
    alt: 'title3',
    src: 'images/slide03.jpg'
},{
    text: 'title4',
    alt: 'title4',
    src: 'images/slide01.jpg'
}]
features: [{
    title: 'poeut',
    icon: 'fa-pencil',
    text: 'ablbalbalal'
},{
    title: 'text',
    icon: 'fa-paper-plane',
    text: 'ablbalbalal'
},{
    title: 'ok',
    icon: 'fa-cloud',
    text: 'ablbalbalal'
}]
posts: {
    title: 'Titre 1',
    posts: [{
        title: 'post 1',
        image: 'images/pic02.jpg',
        text: 'nlnamaamana'
    },{
        title: 'post 2',
        image: 'images/pic02.jpg',
        text: 'nlnamaamana',
        href: 'http://www.free.fr'
    }]
}
---

{{> banner banner }}

{{#> features features }}{{/features}}

{{#> spotlight title="Spotlight 1" image="images/pic07.jpg"}}
blbalbabla
{{/spotlight}}

{{#> posts posts }}{{/posts}}

{{> contact }}

{{> footer }}


