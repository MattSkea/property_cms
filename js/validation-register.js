/****************************************************/
/**************VALIDATE REGISTRATION*****************/

/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/**** --- INITIALIZED IN user-create.js fnLogin()*/


/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*VALIDATE PASSWORD*/
function fnValidatePassword(password, repassword) {
    /*setup a boolean to check if the passwords match*/
    var bPasswordsMatch = 0;

    /*get the initial passwords length*/
    var hasPassword = password.length;
    /*check if the password is longer than 5 characters*/
    if (hasPassword >= 5) {
        /*check if the passwords match*/
        if (password === repassword) {
            /*if the passwords match make the boolean true*/
            bPasswordsMatch = 1;
        } else {
            /*if th passwords dont match, mark the passwords as wrong and update the user*/
            var sRegisterError = "PASSWORDS DONT MATCH";
            fnAppendErrorMessage(sRegisterError);
        }

    } else {
        /*tell the user that the password is too short*/
        var sRegisterError = "PASSWORD TO SHORT";
        fnAppendErrorMessage(sRegisterError);
    }
    return bPasswordsMatch;
}