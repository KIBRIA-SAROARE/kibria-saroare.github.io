$(document).ready(function() {
    
    // NAVIGATION HANDLING
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        
        // 1. Handle Active State for Menu
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        // 2. Handle Section Switching
        var targetSection = $(this).data('target');
        
        // Hide all sections first
        $('.page-section').removeClass('active').hide();
        
        // Fade in the target section
        $('#' + targetSection).fadeIn(500).addClass('active');
        
        // 3. Scroll to top of main area
        $('html, body').animate({ scrollTop: 0 }, 'fast');

        // 4. Close Sidebar on Mobile after click
        if ($(window).width() < 992) {
            $('#sidebar').removeClass('open');
        }
    });

    // MOBILE MENU TOGGLE
    $('#mobile-trigger').on('click', function(e) {
        e.preventDefault();
        $('#sidebar').toggleClass('open');
    });

});