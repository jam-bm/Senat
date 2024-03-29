$('.owl-carousel-links').owlCarousel({
    loop:true,
    margin:30,
    mouseDrag:false,
    navSpeed: 700,
    nav:true,
    navContainer: '.useful-links .caru-btn-div',
    navText: [`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="31.5px" height="31.5px" viewBox="0 0 31.5 31.5" style="enable-background:new 0 0 31.5 31.5;" xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#176aa5;}
                        </style>
                        <path class="st0" d="M10.3,26.5c0.4,0.4,1.1,0.4,1.6,0c0.4-0.4,0.4-1.1,0-1.6l-8-8h26.6c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H3.8  l8-8c0.4-0.4,0.4-1.2,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l-10,10c-0.4,0.4-0.4,1.1,0,1.6L10.3,26.5z"/>
                    </svg>`,`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">
                        <path style="fill:#176aa5" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>`],
    dotsContainer: '.useful-links .caru-btn-div .custom-dots',
    responsive:{
        0:{
            items:1
        },
        500: {
            items: 2
        },
        900: {
            items: 3
        },
        1400:{
            items:4
        }
    },
    })

    $('.owl-carusel-media').owlCarousel({
        center: true,
        items:2,
        loop:true,
        navSpeed: 700,
        dots:false,
        nav:true,
        navContainer:'.media-carousel',
        navText: [`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="31.5px" height="31.5px" viewBox="0 0 31.5 31.5" style="enable-background:new 0 0 31.5 31.5;" xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#176aa5;}
                        </style>
                        <path class="st0" d="M10.3,26.5c0.4,0.4,1.1,0.4,1.6,0c0.4-0.4,0.4-1.1,0-1.6l-8-8h26.6c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H3.8  l8-8c0.4-0.4,0.4-1.2,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l-10,10c-0.4,0.4-0.4,1.1,0,1.6L10.3,26.5z"/>
                    </svg>`, `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">
                        <path style="fill:#176aa5" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>`],
        responsive:{
            200:{
                items:1
            },
            500: {
                items:2
            },
            800:{
                items:3
            },
            1024: {
                items:4
            },
            1440: {
                items:6
            }
        }
    })

    $('.owl-carousel-header').owlCarousel({
        loop:true,
        mouseDrag:false,
        navSpeed: 700,
        margin:30,
        nav:true,
        navContainer: 'header .caru-btn-div',
        navText: [`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="31.5px" height="31.5px" viewBox="0 0 31.5 31.5" style="enable-background:new 0 0 31.5 31.5;" xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#176aa5;}
                        </style>
                        <path class="st0" d="M10.3,26.5c0.4,0.4,1.1,0.4,1.6,0c0.4-0.4,0.4-1.1,0-1.6l-8-8h26.6c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H3.8  l8-8c0.4-0.4,0.4-1.2,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l-10,10c-0.4,0.4-0.4,1.1,0,1.6L10.3,26.5z"/>
                    </svg>`,`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">
                        <path style="fill:#176aa5" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>`],
        dotsContainer: 'header .caru-btn-div .custom-dots',
        responsive:{
        0:{
            items:1
        }
    },
    })
    function myFunction() {
        var x = document.getElementById("topNav");
        if (x.className === "links") {
            x.className += " responsive";
            console.log(x.className);
            } else {
            x.className = "links";
            console.log(x.className);
            }
        }