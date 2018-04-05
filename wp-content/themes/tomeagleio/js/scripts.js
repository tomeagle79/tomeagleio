// Script to show/hide the navigation bar

jQuery(document).ready(function($) {
    $("#menu-icon").click(function() {
        $("nav").toggle();
    });

    $("ul#topnav li a").click(function() {
        // alert("Link is working");
        $("nav").hide();
    });

});

// Script to animate the typing effect on homepage

jQuery(document).ready(function($) {

    $(function() {
        $(".element").typed({
            strings: ["Hi :)", "I'm Tom.", "I'm a front-end web developer", "I love producing beautiful and functional websites.", "Get in touch to discuss your project"],
            typeSpeed: 0
        });
    });

});

// Script to check for correct completion of form fields

jQuery(document).ready(function($) {

    $("form").submit(function() {

        var error = "";

        if ($("#email").val() == "") {
            error += "The email field is required<br>";
        }

        if ($("#subject").val() == "") {
            error += "The subject field is required<br>";
        }

        if ($("#content").val() == "") {
            error += "The content field is required<br>";
        }

        if (error != "") {
            $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>There are errors in your form</strong></p>' + error + '</div>');

            //return true;

        } else {

            //return false;

            $("form").unbind('submit').submit();
        }

    });

});


// Loads website into div


jQuery(document).ready(function($) {

    $("#load").click(function() {

        $("#ajax").toggle();
        $("#ajax").attr("src", "http://www.tomeagle.io/");

    });

});
