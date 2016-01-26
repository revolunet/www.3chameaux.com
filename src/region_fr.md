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
        image: 'images/page_region/mozaic/image_mozaic_legzira.jpg',
        title: 'Plage de Legzira',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_surf.jpg',
        title: 'Surf',
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
        image: 'images/page_region/mozaic/image_mozaic_palmeraie.jpg',
        title: 'Palmeraie de Tighmert',
        text: "La palmeraie de tighmert s'étend sur 8km de long. Dans ce très joli Oasis, Abdou vous accueillera dans son musée de la mémoire Nomade et Berbère et vous fera découvrir les objets de la vie nomade et les merveilles de sa région, authentiques et preservés."
    },{
        image: 'images/page_region/mozaic/image_mozaic_parapente.jpg',
        title: 'Parapente',
        text: ''
    },{
        image: 'images/page_region/mozaic/image_mozaic_tiznit.jpg',
        title: 'Tiznit',
        text: "Ville entourée de remparts et très réputée pour son souk de bijoux dans lequel vous découvrirez l'étendue du savoir faire local pour le travail de l'Argent."
    },{
        image: 'images/page_region/mozaic/image_mozaic_amtoudit_a.jpg',
        title: 'Amtoudi',
        text: "Authentique petit village berbère caché au coeur d'un Oasis. Vous pourrez y découvrir plusieurs Agadirs et un panorama à couper le souffle. Déambuler dans l'oasis sauvage et même vous baigner dans les eaux naturelles des canyons."
    },{
        image: 'images/page_region/mozaic/image_mozaic_tafraoute.jpg',
        title: 'Tafraoute',
        text: "Via une magnifique route de montagne, Tafraoute est une petite ville bâtie sur des roches rouges et ocres. La route jusqu'à Tafraoute est très belle : certains cols, jusqu'à 1100m d'altitude, vous permetront d'admirer un panorama magnifique sur les montagnes environnantes."
    }]
}


---

<a name="mirleft" class="anchor-offset"/>
{{> section-text mirleft}}
Mirleft est un petit village berbère en bord de mer qui se situe à **145km d'Agadir** entre Tiznit et Sidi Ifni. Mirleft est **un havre de paix**, un lieu propice à la détente, au repos et à la réflexion.
<br><br>
Après une journée de sport ou de farniente, descendez au village profiter de la rue principale bordée d'arcades, prenez le temps de visiter échoppes et souk dans lesquels vous trouverez une grande variété de l'artisanat local et national.
<br><br>
Asseyez-vous ensuite à la terrasse d'un café pour déguster un **sfinj** (beignet local) avec son célèbre **thé à la menthe**.
<br><br>
{{> fit src=mirleft.bigimage}}
{{> fit-smalls images=mirleft.images}}



<a name="region" class="anchor-offset"/>
{{> section-text region}}
De nombreuses activités et excursions sont proposées à Mirleft et dans sa région.
{{#> thumbs thumbs }}{{/thumbs}}
