---
title: Hôtel de Charme Les 3 Chameaux
subtitle: Hello world
description: blabal
locale: fr
layout: simple.html
image: images/pic01.jpg

hotel: {
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

<a name="hebergement"/>
{{#> section-text title="Hébergement"}}
Choisissez parmis l'une des **20 suites** et chambres avec vues.
<br>
Vous avez le choix entre des suites aux spacieux salons marocains et aux confortables salles de bain ou bien des chambres doubles tout confort.
<br>
Nous pouvons également privatiser certains suites, chambres communicantes ainsi qu'une maison pour accueillir familles et amis.
{{/section-text}}
{{> fit src=hotel.bigimage}}
{{> fit-smalls images=hotel.images}}

<br><br>

<a name="restauration"/>
{{#> section-text title="Restauration"}}
Après une bonne journée de sport ou de relaxation au bord la piscine, se sont les plaisirs de la table qui vous attendent;
<br><br>
Vous aurez la possibilité de déguster la cuisine marocaine traditionnelle : Salades marocaines, briouats (feuilletés farcis), pastillas, tagines variés, poissons grillées ou au sel et bien sûr, thé à la menthe et patisseries !
<br><br>
Les 3 Chameaux proposent la **restauration en continu** et peuvent aussi préparer vos paniers-repas pour vos excursions.
{{/section-text}}
{{> fit src=restauration.bigimage}}
{{> fit-smalls images=restauration.images}}

<br><br>

<a name="loisirs"/>
{{#> section-text title="Loisirs"}}
Aux 3 Chameaux vous avez le choix entre bronzer sur la piscine, vous dépenser sur notre court de tennis, ou partir découvrir les **dizaines de plages semi-desertes** environnantes.
<br><br>
Découvrez la piscine chauffée en tadelakt (16mX5m), son panorama exceptionnel sur les collines environnantes et son orientation plein Est qui vous fera profiter du soleil toute la journée !
<br><br>
La piscine est composée d'un grand bassin pour les sportifs et d'un petit bassin pour les plus jeunes.
 <br><br>
Les 3 Chameaux c'est aussi un hammam traditionnel et une salle de massage où vous aurez l'occasion de vous détendre après une journée éreintante à la plage ou à la piscine.

<br><br>
Envie de découvrir **la côte atlantique** en parapente, en cheval, surf ou quad ? Nous selectionnons pour vous de nombreuses activités disponibles à Mirleft et sa région **afin que tous, grands ou petits, puissent profiter** du séjour au rythme qu'il l'entend.
<br><br>
MAIS AUSSI :

<ul>
    <li>Stages de cuisine Marocaine, Stages de Tadelakt.</li>
    <li>Piscine, hamman traditionnel et massages pour les femmes et pour les hommes.</li>
    <li>Treks dans la région avec repas chez l'habitant.</li>
    <li>Promenades dans l'arrière pays, à dos d'ânes, en VTT, en quad et excursions en 4x4.</li>
    <li>Balades, stages et randonnées à Cheval.</li>
    <li>Surf et Body Board, pêche depuis la plage (surf casting), des falaises ou d'un bateau, plongée sportive et parapente.</li>
    <li>Et enfin, un point d'accès WiFi à disposition gratuitement.</li>
</ul>
{{/section-text}}
{{> fit src=loisirs.bigimage}}
{{> fit-smalls images=loisirs.images}}