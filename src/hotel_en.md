---
title: Hôtel de Charme Les 3 Chameaux
description: Hôtel à Mirleft, Maroc, Restauration et loisirs, piscine, tennis, hammam...
locale: en
layout: simple.html

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
        src: 'images/page_hotel/mozaic/hotel_mozaic_restau_f.jpg',
        title: 'img 2'
    },{
        src: 'images/page_hotel/mozaic/hotel_mozaic_restau_c.jpg',
        title: 'img 3'
    },{
        src: 'images/page_hotel/mozaic/salon.jpg',
        title: 'img 1'
    },{
        src: 'images/page_hotel/mozaic/table1.jpg',
        title: 'img 2'
    },{
        src: 'images/page_hotel/mozaic/restaurant.jpg',
        title: 'img 3'
    }]
}


loisirs: {
    bigimage: 'images/page_hotel/fit/hotel_fit_piscine_a.jpg',
    images: [{
        src: 'images/page_hotel/mozaic/piscine2.jpg',
        title: 'img 2'
    },{
        src: 'images/page_hotel/mozaic/piscine1.jpg',
        title: 'img 2'
    },{
        src: 'images/page_hotel/mozaic/piscine4.jpg',
        title: 'img 3'
    },{
        src: 'images/page_hotel/mozaic/green.jpg',
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



<a name="hotel" class="anchor-offset"/>
{{#> section-text title="Accomodations"}}
Choose from one of the **12 suites** and **8 twins rooms** with panoramic views of the Atlantic Ocean and the surrounding hills.
<br><br>
You will have a choice between either **spacious Moroccan-style suites** with living rooms and comfortable bathrooms, or fully equipped double rooms.
<br><br>
We can also privatise some suites, connecting rooms and a detached house to accommodate family and friends.
{{/section-text}}
{{> fit src=hotel.bigimage}}
{{> fit-smalls images=hotel.images}}

<br><br>

<a name="restauration" class="anchor-offset"/>
{{#> section-text title="Restaurant"}}
After a day of sports or relaxation by the pool, here are some of the culinary delights that will await you:
<br><br>
Guests can enjoy traditional Moroccan cuisine: Moroccan salads, briouats (stuffed pastries), pastillas (traditional pies), assorted tagines, salted grilled fish, and of course, mint tea and pastries!
<br><br>
The guesthouse offers food throughout the day and can also prepare packed lunches for your excursions.
{{/section-text}}
{{> fit src=restauration.bigimage}}
{{> fit-smalls images=restauration.images}}

<br><br>

<a name="loisirs" class="anchor-offset"/>
{{#> section-text title="Activities"}}
At Les 3 Chameaux you can choose between sunbathing on the pool you spend on our tennis court, or discover nearby **dozens of semi-deserted surrounding beaches**.
<br><br>
Discover the ** heated pool ** (16mX5m), its exceptional panorama of the surrounding hills and orientation due east that will make you enjoy the sun all day!
<br><br>
The pool consists of a large pool for athletes and a small pool for younger children.
<br><br>
Les 3 Chameaux, it's is also a **traditional Hammam and massage** room where you will have the opportunity to relax after a grueling day at the beach or pool.
<br><br>
Want to discover **the Atlantic Coast** paragliding, horse, surfing or quad ?
<br><br>
We select for you many activities available in Mirleft and region **so that everyone, big or small, can stay at the pace he wants.**
<br><br>
{{/section-text}}
{{> fit src=loisirs.bigimage}}
{{> fit-smalls images=loisirs.images}}

<a class="button fit" href="{{link 'region#region'}}" style="cursor: pointer;">▶&nbsp;&nbsp;The region and activities</a>