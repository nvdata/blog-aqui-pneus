// import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// import * as carouselClick from './modules/carousel-change.js';
// import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
// import menu from './modules/menu.js'; //js do menu



// ★ PAGES ★ 
const pageBlog = new Dom().el("#page__blog")
const pageBlogSingle = new Dom().el(".page__blog-single")

if (pageBlog) { // ★ HOME 
    new Dom().bodyClass("body__blog")
    if (pageBlogSingle)
        new Dom().bodyClass("body__blog-single")

}