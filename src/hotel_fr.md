---
title: Hôtel de Charme Les 3 Chameaux
subtitle: Hello world
description: blabal
locale: fr
layout: simple.html
image: images/pic01.jpg

hebergement: {
    title: 'Hébergement',
    text: "Choisissez parmis l'une des **20 suites** et chambres avec vues.
    <br>
    Vous avez le choix entre des suites aux spacieux salons marocains et aux confortables salles de bain ou bien des chambres doubles tout confort.
    <br>
Nous pouvons également privatiser certains suites, chambres communicantes ainsi qu'une maison pour accueillir familles et amis.",
    bigimage: 'images/page_hotel/fit/hotel_fit_suite_b.jpg',
    images: [{
        src: 'images/page_hotel/mozaic/hotel_mozaic_suite_j.jpg',
        title: 'img 1'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_suite_a.jpg',
        title: 'img 2'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_suite_i.jpg',
        title: 'img 3'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_suite_f.jpg',
        title: 'img 3'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_suite_g.jpg',
        title: 'img 3'
        
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_suite_c.jpg',
        title: 'img 3'
        
    }]
}

restauration: {
    title: 'Restauration',
    text: "Choisissez parmis l'une des **20 suites** et chambres avec vues.
    <br>
    Vous avez le choix entre des suites aux spacieux salons marocains et aux confortables salles de bain ou bien des chambres doubles tout confort.
    <br>
Nous pouvons également privatiser certains suites, chambres communicantes ainsi qu'une maison pour accueillir familles et amis.",
    bigimage: 'images/page_hotel/fit/hotel_fit_restau_b.jpg',
    images: [{
        src: 'images/page_hotel/mozaic/hotel_mozaic_restau_a.jpg',
        title: 'img 1'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_restau_b.jpg',
        title: 'img 2'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_restau_c.jpg',
        title: 'img 3'
    }]
}


loisirs: {
    title: "Loisirs",
    text: "Choisissez parmis l'une des **20 suites** et chambres avec vues.
    <br>
    Vous avez le choix entre des suites aux spacieux salons marocains et aux confortables salles de bain ou bien des chambres doubles tout confort.
    <br>
Nous pouvons également privatiser certains suites, chambres communicantes ainsi qu'une maison pour accueillir familles et amis.",
    bigimage: 'images/page_hotel/fit/hotel_fit_piscine_a.jpg',
    images: [{
        src: 'images/page_hotel/mozaic/hotel_mozaic_loisirs_b.jpg',
        title: 'img 1'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_loisirs_c.jpg',
        title: 'img 2'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_loisirs_d.jpg',
        title: 'img 3'
    }]
}

---

{{> section-text hebergement}}
{{> fit src=hebergement.bigimage}}
{{> fit-smalls images=hebergement.images}}

<br><br>

{{> section-text restauration}}
{{> fit src=restauration.bigimage}}
{{> fit-smalls images=restauration.images}}

<br><br>

{{> section-text loisirs}}
{{> fit src=loisirs.bigimage}}
{{> fit-smalls images=loisirs.images}}