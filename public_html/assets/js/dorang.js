/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

 // toggle 
$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            var target = this.hash;
            var targetElement = document.querySelector(target);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.getBoundingClientRect().top + window.scrollY - 75,
                    behavior: 'smooth'
                });
            }
        }
    });

    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.toggle('active');
    });

    $(document).on('click', '[data-target="open-whatsapp"]', function(e) {
        e.preventDefault();

        setTimeout(function() {
            var message = encodeURIComponent("Olá, gostaria de saber mais sobre os serviços oferecidos pela Locarminas.");
            window.open('https://wa.me/5531986896648?text=' + message, '_blank');
        }, 800);
    });

    function trackEvent(category, action, label) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }

    $('#menu-sobre').on('click', function() {
        trackEvent('menu', 'click', 'Sobre');
    });

    $('#menu-servicos').on('click', function() {
        trackEvent('menu', 'click', 'Serviços');
    });

    $('#menu-frota').on('click', function() {
        trackEvent('menu', 'click', 'Frota');
    });

    $('#menu-contato').on('click', function() {
        trackEvent('menu', 'click', 'Contato');
    });


    $('#btn-contato-whatsapp').on('click', function() {
        trackEvent('contato', 'click', 'WhatsApp');
    });


    $('#btn-instagram').on('click', function() {
        trackEvent('rede_social', 'click', 'Instagram');
    });
});