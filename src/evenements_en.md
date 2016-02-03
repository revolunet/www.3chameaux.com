---
title: Hôtel de Charme Les 3 Chameaux
subtitle: Hello world
description: Hôtel à Mirleft, Maroc, Restauration et loisirs, piscine, tennis, hammam...
locale: en
layout: simple.html

events: {
    bigimage: 'images/page_evenements/fit/evenements_fit_a.jpg',
    images: [{
        src: 'images/page_evenements/mozaic/evenements_mozaic_g.jpg',
        title: 'img 1'
    },{
        src: 'images/page_evenements/mozaic/evenements_mozaic_i.jpg',
        title: 'img 2'
    },{
        src: 'images/page_evenements/mozaic/evenements_mozaic_j.jpg',
        title: 'img 3'
    },{
        src: 'images/page_evenements/mozaic/evenements_mozaic_k.jpg',
        title: 'img 2'
    },{
        src: 'images/page_evenements/mozaic/evenements_mozaic_l.jpg',
        title: 'img 3'
    },{
        src: 'images/page_evenements/mozaic/evenements_mozaic_m.jpg',
        title: 'img 3'
    }]
}



---
<a name="evenements" class="anchor-offset"/>
{{#> section-text title="Aux 3 Chameaux, tout est possible !"}}

Si vous souhaitez réaliser vos **anniversaires, séminaires, mariages** ou soirées, nous les organisons selon le lieu est les prestations souhaitées.
<br><br>
Bivouac, buffet, repas sous khaimat (tente berbère) ou sur l'une des plages environnantes peuvent être organisés sur demande.
<br><br>
Nous sommes également entourés d'une **riche culture artisanale et d'un folklore authentique** : des danseuses de Guedra à la culture de l'Atlas !
{{/section-text}}
{{> fit src=events.bigimage}}
{{> fit-smalls images=events.images}}

