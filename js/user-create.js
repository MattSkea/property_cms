/*********************REGISTER***********************/
/****************************************************/

/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*ADD||EDIT USER*/
$(document).on("click", "#btn-register-user", function () {
    /*create variables and store the data values from the form*/
    var sId = $("#txt-register-id").val();
    /*get the values for the password and re-entered password*/
    var password = $("#txt-register-password").val();
    var repassword = $("#txt-register-password-re").val();

    /*check if the passwords match*/
    if(fnValidatePassword(password, repassword)){
        /*create a user*/
        fnCreateUser();

        /*check if the user is adding or editing a user*/
        fnCheckIfUserEditing(sId);
        /*clear the form inputs*/
        fnClearFormInputs();
    }

});
/****************************************************/
/*SETUP ADDING INITIALIZATION FOR ADMINS*/
$(document).on("click", "#lblUserAdd", function () {
    /*update the edit user page so the admin can create a user */
    fnUpdateSectionCreateUser();
});

/*SETUP ADMINS CREEATE USER*/

$(document).on("click", "#btn-user-create", function () {
    console.log("admin create user");

    fnAdminCreateUser()
});
/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/****************************************************/
/*CHECK IF EDITING USER*/
function fnCheckIfUserEditing(sId) {
    /*check if there is an ID value*/
    if (!sId) {

    }
}
/****************************************************/
/*USER CRUD*/
/*CREATE USER*/
function fnCreateUser() {
    /*setup ajax post*/
    $.ajax({
        "type": "POST",
        "url": "./services/api-user-create.php",
        "data": $("#form-register").serialize(),
        "cache": false,
        "processData": false,
        success: function (jData) {
            /*update the users table*/
            fnReadUserRegister();
            swal("SIGNUP", "YOU HAVE SUCCESSFULLY REGISTERED", "success");
            
            /*clear any error messages*/
            fnHideErrorMessage("#form-register .notification-error");
        },
        error: function (jData) {
            console.log("error - trying to create a user");
        }
    });
}
/*ADMIN CREATE USER*/
function fnAdminCreateUser() {
    /*setup ajax post*/
    $.ajax({
        "type": "POST",
        "url": "./services/api-user-create.php",
        "data": $("#form-user-edit").serialize(),
        "cache": false,
        "processData": false,
        success: function (jData) {
            /*start requestion users*/
            fnGetUsers();
            /*go to the users page*/
            fnGoToUsers();
        },
        error: function (jData) {
            console.log("error - trying to create a user");
        }
    });
}

/****************************************************/
/*UPDATE EDIT USER PAGE*/
function fnUpdateSectionCreateUser() {
    /*change the pages background image*/
    $("#article-user-edit-image").css({"display": "none"});
    $("#article-user-create-image").css({"display": "flex"});

    /*clear the forms content, incase the user was editing earlier*/
    $("#form-user-edit").find("input[type=text]").val("");

    /*remove dropdown*/
    /*hide the dropdown selection for user types*/
    $("#txt-user-edit-type").parent().css({"display": "none"});
    /*update the page heading*/
    /*use child selector to avoid overwriting heading elemnts css*/
    $(".section-heading-user-edit").children().text("CREATE USER");
    /*update the form heading*/
    $(".form-header").text("Create the user below");
    /*change the edit buttons id to create user*/
    $("#btn-user-edit").attr("id", "btn-user-create");
    $("#btn-edit-user-profile").attr("id", "btn-user-create");
    
    /*update edit user button text to create user*/
    $("#txt-btn-user-edit").text("Create user");

}

