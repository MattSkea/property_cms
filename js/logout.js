/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*INITIALIZE LOGOUT*/
$(document).on("click", "#link-logout", function () {
    fnLogout();
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*LOGOUT FUNCTION*/
function fnLogout() {
    /*setup ajax url*/
    var sUrl = "./services/api-logout.php?";
    /*setup ajax post to logout the user*/
    $.get(sUrl, function (sJData) {
    }).done(function () {
        fnCloseMenu();
        /*reload the page after logout to refresh the session state*/
        setTimeout(function () {
            fnClearLocalStorage();
            location.reload();
        }, 600);
    });
}