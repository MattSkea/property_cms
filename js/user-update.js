/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*SETUP EDITING INITIALIZATION*/
$(document).on("click", ".btn-user-edit", function () {

    /*retrieve the id of the element being edited*/
    var sId = $(this).siblings(".lbl-user-id").text();
    var sEmail = $(this).siblings(".lbl-user-email").text();
    var sFname = $(this).siblings(".lbl-user-fname").text();
    var sLname = $(this).siblings(".lbl-user-lname").text();
    var sMobile = $(this).siblings(".lbl-user-mobile").text();
    var sPassword = $(this).siblings(".lbl-user-password").text();
    var sUserType = $(this).siblings(".lbl-user-type").attr("data-the-icon");

    /*setup a json object to hold the items to edit*/
    var jUserToEdit = {
        "id": sId,
        "email": sEmail,
        "fname": sFname,
        "lname": sLname,
        "mobile": sMobile,
        "password": sPassword,
        "userType": sUserType
    };


    /*initialize the function to update the user edit form with the the jUserToEdit */
    fnUserUpdateEditForm(jUserToEdit);

    /*initialize go to edit page page function*/
    fnGoToUserEdit();

    /*update the edit user form*/
    fnUpdateLabelsEditUser();


    /*stop getting properties -page change*/
    fnStopUpdatingUsers();
});
/****************************************************/
/*SETUP USER EDIT ON FORM SUBMIT*/
$(document).on("click", "#btn-user-edit", function () {
    fnEditUser();
});
/****************************************************/
/*NAVIGATE TO EDIT USER PROFILE & UPDATE THE EDIT USER SECTION FOR USERS*/
$(document).on("click", "#menu-dropdown-edit-user", function () {
    /*initialize go to edit page page function*/
    fnGoToUserEdit();
    /*close the menu*/
    fnCloseMenu();
    /*clear the form inputs*/
    fnClearFormInputs();

    fnEditGetUserProfile();
});



/****************************************************/
/*SETUP USER EDIT ON FORM SUBMIT*/
$(document).on("click", "#btn-edit-user-profile", function () {
    /*save the edited user profile*/
    fnEditUser();

    /*go to the designated page if the page is available*/
    fnCheckSectionUsers();
});



/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*SETUP AJAX POST FUNCTION TO POST UPDATE - THE FUNCTION IS INITIALIZED IN THE fnCheckIfUserEditing()*/
function fnEditUser() {
    /*setup ajax post*/
    $.ajax({
        "type": "POST",
        "url": "./services/api-user-update.php",
        "data": $("#form-user-edit").serialize(),
        "cache": false,
        "processData": false,
        success: function (jData) {
            /*force get user rows*/
            iUserCountOld = 0;

            /*start requestion users*/
            fnGetUsers();
            /*go to the users page*/
            fnGoToUsers();

        },
        error: function (jData) {
            console.log("error - trying to update a user edit");

        }
    });
}
/****************************************************/
/*SETUP AJAX POST FUNCTION TO GET SESSION INFO */
function fnEditGetUserProfile() {
    /*setup url*/
    var sUrl = "./services/api-get-session.php";

    /*setup ajax post*/
    $.getJSON(sUrl, function (jData) {
        /*update the edit users form inputs*/
        fnUserUpdateEditForm(jData);
        /*update the labels for edit user profile*/
        fnUpdateLabelsEditUserProfile()
    }).error(function () {
        console.log("error - trying to update a user profile");
    });
}

/****************************************************/
/*UDATE THE EIT USER FORM FOR SUPER ADMINS*/
function fnUserUpdateEditForm(jUserToEdit) {
    /*update headings*/
    /*use child selector to avoid overwriting heading elemnts css*/
    // $(".section-user-edit-register").children().text("EDIT USER");
    // $("#form-user-edit-heading").text("Edit your user below");

    /*update inputs*/
    $("#txt-user-edit-id").val(jUserToEdit.id);
    $("#txt-user-edit-email").val(jUserToEdit.email);
    $("#txt-user-edit-fname").val(jUserToEdit.fname);
    $("#txt-user-edit-lname").val(jUserToEdit.lname);

    $("#txt-user-edit-mobile").val(jUserToEdit.mobile);

    $("#txt-user-edit-password").val(jUserToEdit.password);

    $("#txt-user-edit-type option[value='" + jUserToEdit.userType + "']").prop("selected", true);


}

/****************************************************/
/*GO TO THE EDIT USER PAGE*/
function fnGoToUserEdit() {
    /*dynamic-naviation.js function to hide all windows*/
    fnHideCurrentWindow();

    $("#section-user-edit").css({"display": "flex"});
}

/****************************************************/
/*GO TO THE USERS TABLE PAGE*/
function fnGoToUsers() {
    /*dynamic-naviation.js function to hide all windows*/
    fnHideCurrentWindow();

    $("#section-users").css({"display": "flex"});
}

/****************************************************/
/*UPDATE THE EDIT USER FORM FOR ADMINISTRATORS*/
function fnUpdateLabelsEditUser() {
    /*change the pages background image*/
    $("#article-user-edit-image").css({"display": "flex"});
    $("#article-user-create-image").css({"display": "none"});
    $("#article-user-edit-image").css({"background-color": "#303F9F"});

    /*show dropdown*/
    /*show the dropdown selection for user types*/
    $("#txt-user-edit-type").parent().css({"display": "flex"});

    /*update the page heading*/
    /*use child selector to avoid overwriting heading elemnts css*/
    $(".section-heading-user-edit").children().text("EDIT USER");

    /*update the form heading*/
    $(".form-header").text("Edit the user below");

    /*change the edit buttons id to create user*/
    $("#btn-user-create").attr("id", "btn-user-edit");
    $("#btn-edit-user-profile").attr("id", "btn-user-edit");

    /*update edit user button text to create user*/
    $("#txt-btn-user-edit").text("Edit user");
}
/****************************************************/
/*UPDATE THE EDIT USER PROFILE FORM FOR USERS WINDOW*/
function fnUpdateLabelsEditUserProfile() {
    /*change the pages background image*/;
    $("#article-user-edit-image").css({"display": "flex"});
    $("#article-user-create-image").css({"display": "none"});
    $("#article-user-edit-image").css({"background-color": "#FFFF00"});

    /*show dropdown*/
    /*show the dropdown selection for user types*/
    $("#txt-user-edit-type").parent().css({"display": "flex"});

    /*update the page heading*/
    /*use child selector to avoid overwriting heading elemnts css*/
    $(".section-heading-user-edit").children().text("Edit profile");

    /*update the form heading*/
    $(".form-header").text("Edit your profile below");

    /*change the edit buttons id to create user*/
    $("#btn-user-create").attr("id", "btn-edit-user-profile");
    /*change the edit buttons id to create user*/
    $("#btn-user-edit").attr("id", "btn-edit-user-profile");

    /*update edit user button text to create user*/
    $("#txt-btn-user-edit").text("Edit profile");
}

/*CHECK IF THERE IS A SECTION PAGE FOR USERS*/
function fnCheckSectionUsers() {
    var sSectionUsers = $("#section-users").css("display");
    var sSectionProperties = $("#section-properties").css("display");

    fnHideCurrentWindow();


    if (sSectionUsers === "none") {
        sSectionUsers = $("#section-users").css("display", "flex");
    } else if (sSectionProperties === "none") {

        sSectionProperties = $("#section-properties").css("display", "flex");
    }
}


