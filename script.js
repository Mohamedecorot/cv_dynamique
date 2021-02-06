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
