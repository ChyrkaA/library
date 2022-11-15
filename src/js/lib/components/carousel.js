import $ from '../core';

$.prototype.carousel = function (autoplay = false) {
        for (let i = 0; i < this.length; i++) {
                const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
                const slides = this[i].querySelectorAll('.carousel-item');
                const slidesField = this[i].querySelector('.carousel-slides');
                const dots = this[i].querySelectorAll('.carousel-indicators li');
                slidesField.style.width = 100 * slides.length + '%';
                slides.forEach(slide => {
                        slide.style.width = width;
                });

                let offset = 0;
                let slideIndex = 0;

                const changeSlides = function () {
                        slidesField.style.transition = '1s all ease-out';
                        slidesField.style.transform = `translateX(-${offset}px)`;
                        

                        dots.forEach(dot => dot.classList.remove('active'));
                        dots[slideIndex].classList.add('active');
                };

                const nextSlide = function () {
                        if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                                offset = 0;
                                slideIndex = 0;
                        } else {
                                offset += +width.replace(/\D/g, '');
                                slideIndex++;
                        }
                        changeSlides();
                };

                const prevSlide = function () {
                        if (offset == 0) {
                                offset = +width.replace(/\D/g, '') * (slides.length - 1);
                                slideIndex = slides.length - 1;
                        } else {
                                offset -= +width.replace(/\D/g, '');
                                slideIndex--;
                        }
                        changeSlides();
                };

                $(this[i].querySelector('[data-slide="next"]')).click((e) => {
                        e.preventDefault();
                        nextSlide();
                });

                $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
                        e.preventDefault();
                        prevSlide();
                });

                const sliderId = this[i].getAttribute('id');
                $(`#${sliderId} .carousel-indicators li`).click(e => {
                        const slideTo = e.target.getAttribute('data-slide-to');

                        slideIndex = slideTo;
                        offset = +width.replace(/\D/g, '') * slideTo;

                        changeSlides();
                });

                if (autoplay) {
                        setInterval(nextSlide, 3000);
                }
        }
};

$('.carousel').carousel(true);

//слайдер созданный через js
// $.prototype.createCarousel = function(optionsOfCarousel){
//         for (let i=0; i<this.length; i++){
//                 const numOfslides = optionsOfCarousel.slides.length;

//                 this[i].style.width = optionsOfCarousel.width + 'px';
//                 this[i].style.height = optionsOfCarousel.height + 'px';

//                 this[i].innerHTML = `
//                         <ol class="carousel-indicators"></ol>
//                         <div class="carousel-inner">
//                                 <div class="carousel-slides"></div>
//                         </div>
//                         <a href="#" class="carousel-prev" data-slide="prev">
//                                 <span class="carousel-prev-icon">&lt;</span>
//                         </a>
//                         <a href="#" class="carousel-next" data-slide="next">
//                                 <span class="carousel-next-icon">&gt;</span>
//                         </a>
//                 `;

//                 for (let j=0; j<numOfslides; j++){
//                         let dots = document.createElement('li');
//                         let slides = document.createElement('div');
//                         let imgSlides = document.createElement('img');

//                         if (j==0){
//                                 dots.classList.add('active');
//                         }
//                         dots.setAttribute('data-slide-to', `${j}`);
//                         this[i].querySelector('.carousel-indicators').appendChild(dots);
                        
//                         slides.classList.add('carousel-item');
//                         slides.style.width = this[i].style.width;
//                         imgSlides.setAttribute('src', optionsOfCarousel.slides[j]['src']);
//                         imgSlides.setAttribute('alt', optionsOfCarousel.slides[j]['alt']);
//                         slides.appendChild(imgSlides);
//                         this[i].querySelector('.carousel-slides').appendChild(slides);
//                 }
//         }
//         return this;
// };

// $('#example2').createCarousel({

//         width: 900,
//         height: 500,
//         slides: [
//                 {
//                         src: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg",
//                         alt: "horse1"
//                 },
//                 {
//                         src: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg",
//                         alt: "horse2"
//                 },
//                 {
//                         src: "https://images.pexels.com/photos/1996330/pexels-photo-1996330.jpeg",
//                         alt: "horse3"
//                 }
//         ]
// })
// .carousel(true);