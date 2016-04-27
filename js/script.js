// Scroll pour les liens du menu de navigation 
$('a[href^="#formation"], a[href^="#portfolio"], a[href^="#reseaux"], a[href^="#contact"], a[href^="#competence"], a[href^="#profil"]').click(function () {
    var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 'slow');
    return false;
});
// Fin


// Scroll vers le haut de la page
$('a[href^="#top"], a[href^="#accueil"]').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 'slow');
    return false;
});
// Fin


/* Animation Competence*/
$(document).ready(function () {

    $('#competence .container .chart').waypoint(function () {
        $(this).easyPieChart({
            barColor: '#07a9b6',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });
});
//fin

//Animation du menu hamburger
$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});
//Fin


//Widget twitter
! function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");
//fin

//Ferme menu pour telephone lors d'un clique
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
    $('.navbar-toggle:visible').click();
});
//Fin