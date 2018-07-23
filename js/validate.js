/*****************VALIDATION*************************/
/****************************************************/

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/

/****************************************************/
/*SHOW ERROR MESSAGE FUNCTION*/
function fnShowErrorMessage(errorToShow) {
    /*slide the error message down*/
    $(errorToShow).slideDown();

}
/*HIDE ERROR MESSAGE FUNCTION*/
function fnHideErrorMessage(errorToHide) {
    $(errorToHide).slideUp();
}

/****************************************************/
/*APPEND THE ERROR MESSAGE TO THE DOM*/
function fnAppendErrorMessage(errorMessage) {

    /*find out which form the user is inputing data from*/
    /*get all forms that have validations container sections display*/
    /*get all the data needed from login*/
    var sFlex = "flex";
    var sSectionLogin = $("#section-login");
    var sSectionLoginDisplay = sSectionLogin.css("display");
    /*get all the data needed from register*/
    var sSectionRegister = $("#section-register");
    var sSectionRegisterDisplay = sSectionRegister.css("display");

    /*get all the data needed from property create*/
    var sSectionPropertyCreate = $("#section-property-create");
    var sSectionPropertyCreateDisplay = sSectionPropertyCreate.css("display");

    /*check where to validate*/
    /*------------------------*/
    /*from login*/
    if (sSectionLoginDisplay === sFlex) {
        /*setup json with values to validate*/
        var jValidatationNotification = {
            "blueprint": "<div class='notification-error'><div><span class='fa fa-times fa-fw'></span>{{errorMessage}}</div></div>",
            "appendAfter": "",
            "errorMessage": ""
        };

        /*get all the data needed from login*/
        var sLoginToAppendAfter = $(".input-container");
        var sLoginErrorMessage = errorMessage;
        /*append the values that need to be passed for error notification*/
        jValidatationNotification.appendAfter = sLoginToAppendAfter;
        jValidatationNotification.errorMessage = sLoginErrorMessage;

        /*append password error*/
        fnAppendPasswordError(jValidatationNotification);
    }
    /*from register*/
    if (sSectionRegisterDisplay === sFlex) {
        /*setup json with values to validate*/
        var jValidatationNotification = {
            "blueprint": "<div class='notification-error'><div><span class='fa fa-times fa-fw'></span>{{errorMessage}}</div></div>",
            "flex": "flex",
            "section": "",
            "sectionDisplay": "",
            "sectionSelecor": "",
            "appendBefore": "",
            "errorMessage": ""
        };

        /*get all the data needed from register*/
        var sSectionRegister = $("#section-register");
        var sSectionRegisterSelector = sSectionRegister.selector;
        var sRegisterToAppendBefore = $("#btn-register-user");
        var sRegisterErrorMessage = errorMessage;
        /*append the values that need to be passed for error notification*/
        jValidatationNotification.section = sSectionRegister;
        jValidatationNotification.sectionSelecor = sSectionRegisterSelector;
        jValidatationNotification.appendBefore = sRegisterToAppendBefore;
        jValidatationNotification.errorMessage = sRegisterErrorMessage;

        /*append password error*/
        fnAppendRegisterError(jValidatationNotification);
    }
    /*from property create*/
    if (sSectionPropertyCreateDisplay === sFlex) {
        /*setup json with values to validate*/
        var jValidatationNotification = {
            "blueprint": "<div class='notification-error'><div><span class='fa fa-times fa-fw'></span>{{errorMessage}}</div></div>",
            "flex": "flex",
            "section": "",
            "sectionDisplay": "",
            "sectionSelecor": "",
            "appendBefore": "",
            "errorMessage": ""
        };

        /*get all the data needed from register*/
        var sSectionPropertyCreate = $("#section-property-create");
        var sSectionPropertyCreateSelector = sSectionPropertyCreate.selector;
        var sPropertyCreateToAppendAfter = $("#property-files-hidden");
        var sPropertyCreateErrorMessage = errorMessage;
        /*append the values that need to be passed for error notification*/
        jValidatationNotification.section = sSectionPropertyCreate;
        jValidatationNotification.sectionSelecor = sSectionPropertyCreateSelector;
        jValidatationNotification.appendAfter = sPropertyCreateToAppendAfter;
        jValidatationNotification.errorMessage = sPropertyCreateErrorMessage;

        fnAppendPropertyError(jValidatationNotification);
    }
}

/*APPEND PASSWORD ERROR*/
function fnAppendPasswordError(jValidatationNotification) {
    /*get all the data needed from login*/
    var sLoginToAppendAfter = jValidatationNotification.appendAfter;
    var sLoginErrorMessage = jValidatationNotification.errorMessage;

    /*create a template of the error blueprint*/
    var sErrorTemplate = jValidatationNotification.blueprint;

    sErrorTemplate = sErrorTemplate.replace("{{errorMessage}}", sLoginErrorMessage);

    /*delete the old error message if on is there*/
    $(".notification-error").empty();

    /*append the error message to the dom*/
    sLoginToAppendAfter.after(sErrorTemplate);

    /*GET THE NOTIFICATION TO SHOW*/
    var tLoginNotification = $("#form-login .notification-error");
    fnShowErrorMessage(tLoginNotification);
}
/*APPEND REGISTER ERROR*/
function fnAppendRegisterError(jValidatationNotification) {
    /*get all the data needed from register*/
    var sRegisterToAppendBefore = jValidatationNotification.appendBefore;
    var sRegisterErrorMessage = jValidatationNotification.errorMessage;

    /*create a template of the error blueprint*/
    var sErrorTemplate = jValidatationNotification.blueprint;

    sErrorTemplate = sErrorTemplate.replace("{{errorMessage}}", sRegisterErrorMessage);
    /*delete the old error message if one is there*/
    $(".notification-error").empty();

    /*append the error message to the dom*/
    sRegisterToAppendBefore.before(sErrorTemplate);

    /*GET THE NOTIFICATION TO SHOW*/
    var tRegisterNotification = $("#form-register .notification-error");
    fnShowErrorMessage(tRegisterNotification);
}
/*APPEND PROPERTY ERROR MESSAGE*/
function fnAppendPropertyError(jValidatationNotification) {
    var sButtonToAppenAfter = jValidatationNotification.appendAfter;
    var sPropertyErrorMessage = jValidatationNotification.errorMessage;

    /*create a template of the error blueprint*/
    var sErrorTemplate = jValidatationNotification.blueprint;
    sErrorTemplate = sErrorTemplate.replace("{{errorMessage}}", sPropertyErrorMessage);

    /*delete the old error message if one is there*/
//    $(".notification-error").empty();

    /*append the error message to the dom*/
    sButtonToAppenAfter.after(sErrorTemplate);

    /*GET THE NOTIFICATION TO SHOW*/
    var tPropertyNotification = $("#form-property-create .notification-error");
    fnShowErrorMessage(tPropertyNotification);
}


/****************************************************/
/*SHOW INPUT ERROR BORDERS*/
function fnShowInputErrors(errorBorderToShow) {
    $(errorBorderToShow).addClass("input-error");
}
/*HIDE INPUT ERROR BORDERS*/
function fnHideInputErrors(errorBorderToHide) {
    $(errorBorderToHide).removeClass("input-error");
}
