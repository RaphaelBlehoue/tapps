const Login = function() {

    return {
        //main function to initiate the module
        init: function() {

            // init background slide images
            $('.login-cover').backstretch([
                    "assets/images/login/bg1.jpg",
                    "assets/images/login/bg2.jpg",
                    "assets/images/login/bg3.jpg"
                ], {
                    fade: 1000,
                    duration: 8000
                }
            );
        }

    };

}();

jQuery(document).ready(function() {
    Login.init();
});