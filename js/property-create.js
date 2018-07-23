/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*ADD||EDIT PROPERTY*/
$(document).on("click", "#btn-save-property", function () {
    /*create variables and store the data values from the form*/
    var sId = $("#txt-create-property-id").val();
    /*retrieve the attribute on the link that was clicked*/
    var sIdWindowToShow = $(this).attr("data-go-to");

    /*clear any prior validation errors*/
    $(".notification-error").remove();
    $("#form-property-create").find(".input-error").removeClass();

    /*check if the user is adding or editing a property*/
    fnCheckIfPropertyEditing(sId, sIdWindowToShow);


});
/****************************************************/
/*STOP UPDATING PROPERTIES*/
$(document).on("click", "#lblPropertyAdd", function () {
    /*stop reading properties - page change*/
    fnStopUpdatingProperties();
    /*update create property form with the data being updated*/
    fnUpdatePropertyFormCreate();

    $(".notification-error").remove();
    $("#form-property-create").find(".input-error").removeClass();
});
/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*CHECK IF EDITING*/
function fnCheckIfPropertyEditing(sId, showWindow) {
    /*check if there is an ID value*/
    if (!sId) {
        /*create a placeholder for the property validation*/
        var bIsValid = fnPropertiesValidation();

        if (bIsValid) {
            fnHideInputErrors("#form-property-create");

            /*navigate to properties table window*/
            fnNavigateToSection(showWindow);

            /*if there is no ID value, create a property*/
            fnCreateProperty();

            /*update the properties table*/
            fnGetProperties();

            /*clear the form inputs*/
            fnClearFormInputs();

            /*remove old input fields*/
            fnRemoveImageInputs();
        }

    } else {
        /*force get property rows*/
        iPropertyCountOld = 0;
        /*emty all the rows below the navigation in the table*/
        $("#dynamic-property-rows").children().remove();

        /*bug fix - update client properties after property is edited serverside*/
        setTimeout(
                /*if there is an ID, edit its property*/
                fnEditProperty()
                , 500);

        /*clear the form inputs*/
        fnClearFormInputs();

        /*navigate to properties table window*/
        fnNavigateToSection(showWindow);


        /*update the properties table*/
//        fnGetProperties();

        // console.log("EDIT PROPERTY");
    }

}
/****************************************************/
/*PROPERTY CRUD*/
/*CREATE PROPERTY*/
function fnCreateProperty() {
    var form = $("#form-property-create")[0];
    var formData = new FormData(form);

    /*setup ajax post*/
    $.ajax({
        "type": "POST",
        "url": "./services/api-property-create.php",
        "data": formData,
        "cache": false,
        "contentType": false,
        "processData": false,
        success: function (jData) {
            /*show user edit and delete navigation columns if there arn't any*/
            fnOwnsProperty();
        },
        error: function (jData) {
            console.log("error - trying to create a property");
        }
    });

}
/****************************************************/
/*NAVIGATE TO PROPERTIES AFTER THE PROPERTY IS CREATED/EDITED*/
function fnNavigateToSection(sIdWindowToShow) {
    /*hide the property window*/
    fnHideCurrentWindow();

    /*show properties window*/
    fnShowSelectedWindow(sIdWindowToShow);

}

function fnUpdatePropertyFormCreate() {
    /*reappend add property breadcrumbs*/
    /*update image*/
    $("#article-create-properties-image").css({"display": "flex"});
    $("#article-update-properties-image").css({"display": "none"});

    $("#property-create-image-container").css({"display": "flex"});

    /*update headings*/
    $(".section-heading-property-create").children().text("CREATE PROPERTY");
    $("#form-property-create-heading").text("Create your property below");
    /*update button*/
    $("#txt-btn-save-property").text("Create property");
}
