---
title: Hôtel de Charme Les 3 Chameaux
subtitle: Hello world
description: blabal
locale: fr
layout: simple.html

mirleft: {
    title: 'Mirleft',
    text: "Choisissez parmis l'une des **20 suites** et chambres avec vues.
    <br>
    Vous avez le choix entre des suites aux spacieux salons marocains et aux confortables salles de bain ou bien des chambres doubles tout confort.
    <br>
Nous pouvons également privatiser certains suites, chambres communicantes ainsi qu'une maison pour accueillir familles et amis.",
    bigimage: 'images/page_region/fit/region_fit_mirleft_b.jpg',
    images: [{
        src: 'images/page_region/mozaic/image_mozaic_mirleft_b.jpg',
        title: 'img 1'
    },{
        src: 'images/page_region/mozaic/image_mozaic_mirleft_c.jpg',
        title: 'img 2'
    },{
        src: 'images/page_region/mozaic/image_mozaic_mirleft_d.jpg',
        title: 'img 3'
    }]
}


region: {
    title: 'Région de Mirleft',
    text: "Choisissez parmis l'une des **20 suites** et chambres avec vues.
    <br>
    Vous avez le choix entre des suites aux spacieux salons marocains et aux confortables salles de bain ou bien des chambres doubles tout confort.
    <br>
Nous pouvons également privatiser certains suites, chambres communicantes ainsi qu'une maison pour accueillir familles et amis.",
    images: [{
        src: 'images/page_region/mozaic/image_mozaic_mirleft_a.jpg',
        title: 'img 1'
    },{
        src: 'images/page_region/mozaic/image_mozaic_mirleft_c.jpg',
        title: 'img 2'
    },{
        src: 'images/page_region/mozaic/image_mozaic_mirleft_d.jpg',
        title: 'img 3'
    }]
}

thumbs: {
    title: 'Région',
    thumbs:[{
        image: 'images/page_region/mozaic/image_mozaic_amtoudit_a.jpg',
        title: 'Amtoudi',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_treck.jpg',
        title: 'Balades et Treks',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_gazelles_b.jpg',
        title: 'Ranch des deux Gazelles',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_legzira.jpg',
        title: 'Plage de Legzira',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_palmeraie.jpg',
        title: 'Palmeraie de Tijmeght',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_parapente.jpg',
        title: 'Parapente',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_surf.jpg',
        title: 'Surf',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_tafraoute.jpg',
        title: 'Tafraoute',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_tiznit.jpg',
        title: 'Tiznit',
        text: ''
    }]
}


---


{{> section-text mirleft}}
{{> fit src=mirleft.bigimage}}
{{> fit-smalls images=mirleft.images}}

<br><br>

{{> section-text region}}
{{#> thumbs thumbs }}{{/thumbs}}
