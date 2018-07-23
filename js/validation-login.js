/*****************VALIDATION LOGIN**********************/
/*******************************************************/

/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/**** --- INITIALIZED IN login.js fnLogin()*/

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*SHOW LOGIN ERROR MESSAGE FUNCTION*/
function fnShowLoginErrorMessage() {
    var sLoginErrorMessage = "Error loggin in, please try again!";

    fnAppendErrorMessage(sLoginErrorMessage);
}
/*HIDE LOGIN ERROR MESSAGE FUNCTION*/
function fnHideLoginErrorMessage() {
    /*GET THE NOTIFICATION TO HIDE*/
    var tLoginNotification = $("#form-login .notification-error");

    fnHideErrorMessage(tLoginNotification);
}
/****************************************************/
function fnShowLoginInputErrors() {
    /*GET THE BORDER TO SHOW*/
    var eBorderToShow = $("#form-login input");

    fnShowInputErrors(eBorderToShow);
}
function fnHideLoginInputErrors() {
    /*GET THE BORDER TO SHOW*/
    var eBorderToHide = $("#form-login input");

    fnHideInputErrors(eBorderToHide);
}