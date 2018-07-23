/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*LOCK THE SYSTEM IF THE SERVER IS EMPTY NAVIGATION*/
var bSystemLock;

$(document).on("DOMContentLoaded", function () {
    /*check if the system has to lock itself*/
    bSystemLock = setInterval(function(){
        fnGetSystemLock()
    }, 2000);
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*LOCK THE SYSTEM*/

function fnGetSystemLock() {

    /*setup ajax url*/
    var sUrl = "services/api-lock-system.php";
    /*connect to the server and get all the properties*/
    /*setup ajax post to login the user*/
    $.get(sUrl, function (sJData) {
        /*convert the data retrieved into json*/
        var jData = JSON.parse(sJData);
        /*check the response status*/
        var status = jData.status;
        /*setup a comparison string*/
        var sCompareOK = "ok";
        var sCompareError = "error";

        /*CHECK IF THE SYSTEM HAS TO BE LOCKED DOWN*/
        /*check if there users in the sytem*/
        if (status === sCompareError) {
            /*if here arnt any users, lock the system*/
            $("#menu-burger").css("display", "none");
            /*if the user is logged in, log them out*/
            if (fnHasUserLocalStorage()) {
                fnLogout();
            }

        } else if (status === sCompareOK) {
            /*if here are any users, unlock the system*/
            $("#menu-burger").css("display", "block");
        }
    }).error(function () {
        console.log("error - trying to lock the system.");
    });
}