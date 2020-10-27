$(document).ready(function(){
    $('.page_header_slider').slick({
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                }
            }
            ]
    });
});
