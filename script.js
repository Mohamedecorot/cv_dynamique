// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});


// TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Mohamed", "Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 5 métiers différents, j'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 18 mois je me forme à temps plein en autodidacte aux languages Front tels que CSS, Javascript et le Framework VueJs, ainsi qu'aux languages Back tels que SQL, PHP et le Framework Symfony et Codeigniter (depuis peu) afin de devenir le plus rapidement développeur. Plus qu'un avenir professionel, je me suis découvert une passion, celle de coder"],
    typeSpeed: 20
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {
    const top = $('.counter').offset().top - window.innerHeight;
    if(compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 5000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});

// AOS (pour les effets d'apparations des éléments: https://michalsnik.github.io/aos/)
AOS.init();