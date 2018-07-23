/********************LOGIN***************************/
/****************************************************/

/********************INITIALIZE**********************/
/****************************************************/
/*INITIALIZE LOGIN*/
$(document).on("click", "#btn-login-user", function () {
    /*fire off the login function*/
    fnLogin();
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*LOGIN FUNCTION*/
function fnLogin() {
    /*setup ajax url*/
    var sUrl = "./services/api-login.php";

    var sUrlData = $("#form-login").serialize();

//    sUrl += sUrlData;

    /*setup ajax post to login the user*/
    /*setup ajax post*/
    $.ajax({
        "type": "POST",
        "url": sUrl,
        "data": sUrlData,
        "cache": false,
        "processData": false,
        success: function (sJData) {
            /*convert the data retrieved into json*/
            var jData = JSON.parse(sJData);

            /*check the response status*/
            if (jData.status == "ok") {
                /*hide the login error message*/
                fnHideLoginErrorMessage();
                /*hide red borders around the inputs*/
                fnHideLoginInputErrors();

                /*show the sweet alert*/
                fnLoginAlert();
                /*convert json to string for localStorage*/
                var sjData = JSON.stringify(jData.userSession);
                /*parse the converted string to*/
                fnCreateUserLocalStorage(sjData);



                /*update the DOM with HTML here*/
                /*update the navigation with logged user data*/

            }

            /*convert the data retrieved into json*/
            jData = JSON.parse(sJData);
            if (jData.status == "error") {
                /*VALIDATE LOGIN*/
                /*show the login error message*/
                fnShowLoginErrorMessage();
                /*show login error inputs*/
                fnShowLoginInputErrors();
            }
        },
        error: function (jData) {
            fnShowLoginInputErrors();
        }
    });
}

/****************************************************/
/*LOGIN SWEETALERT*/
function fnLoginAlert() {
    swal({
        "title": "LOGIN SUCCESS",
        "text": "Have a nice day.",
        "type": "success",
        "confirmButtonText": "Continue",
        "confirmButtonColor": "#42A5F5"
    },
    function () {
        /*reload the page after login*/
        location.reload();

        /*on success go to properties page*/
        /*handled by php on properties.php*/
    });
}
