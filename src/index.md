---
title: Les 3 Chameaux, Hôtel de Charme à Mirleft, Maroc
description: Bienvenue aux 3 Chameaux, à Mirleft, havre de paix entre Mer et Desert Marocain
locale: fr
layout: index.html
banner: [{
    text: 'Bienvenue aux 3 Chameaux',
    alt: "Accueil de l'Hôtel",
    src: 'images/home-banner/accueil1.jpg'
},{
    text: 'Hôtel de Charme à Mirleft',
    alt: 'Tentes berbères',
    src: 'images/home-banner/accueil2.jpg'
},{
    text: 'Entre mer et montagne...',
    alt: 'title1',
    src: 'images/home-banner/accueil3.jpg'
}]
thumbs: {
    title: 'Découvrez les 3 Chameaux',
    thumbs: [{
        title: 'Hébergement',
        image: 'images/thumbs/suite4.jpg',
        text: "Nous mettons à votre disposition 10 suites, 10 chambres tout confort, ainsi qu'une d'une maison indépendante",
        link: "hotel#hotel"
    },{
        title: 'Restauration',
        image: 'images/thumbs/tajines.jpg',
        text: 'Dégustez une cuisine Marocaine traditionnelle et locale : Salades, briouats, pastillas, tagines variés, poissons grillées ou au sel...',
        link: "hotel#restauration"
    },{
        title: 'Loisirs',
        image: 'images/thumbs/piscine.jpg',
        text: "Bronzez autour de  la piscine, dépensez-vous sur notre court de tennis, ou choisissez parmi les activités proposées aux alentours.",
        link: 'hotel#loisirs'
    },{
        title: 'La Région',
        image: 'images/thumbs/legzira.jpg',
        text: 'Découvrez le village de Mirleft et sa Région. De nombreuses excursions sont possibles au départ de Mirleft',
        href: 'http://www.free.fr',
        link: 'region'
    },{
        title: 'Évènements',
        image: 'images/thumbs/groupe-berbere.jpg',
        text: 'Réalisez vos anniversaires, séminaires, mariages ou soirées dans un cadre inoubliable avec des prestations sur mesure.',
        link: 'evenements'
    },{
        title: 'Venir aux 3 Chameaux',
        image: 'images/thumbs/voiture-voyage.jpg',
        text: 'Notre guide pour rejoindre Mirleft et Les 3 Chameaux depuis Paris, Bordeaux, Marseille, Marrakech, Agadir.',
        link: 'acces'
    }]
}
---

{{> banner banner }}

{{#> spotlight title="Un lieu Authentique" image="images/home-spotlight-2.jpg"}}
A l'emplacement d'un **ancien fort militaire Français** construit en 1935 sur les hauteurs du village de **Mirleft** (à 140 km au Sud d'Agadir et 40km de Tiznit), Les 3 chameaux vous accueillent au Maroc entre mer et desert sur une superficie de plus d'un hectare, dans un lieu à la situation privilégiée et au **panorama exceptionnel**.
{{/spotlight}}

<section class="wrapper style2">
    <div class="inner">
        <h2>{{__ 'index-thumbs-title'}}</h2>
        {{#> thumbs thumbs }}{{/thumbs}}</div>
</div>




