
/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*CHECK IF THE USER OWNS ANY PROPERTIES*/
function fnOwnsProperty() {
    /*setup ajax url*/
    var sUrl = "services/api-property-owner-check.php";

    /*send off a ajax request to see if the user has any properties in the model*/
    $.get(sUrl, function (sData) {
        /*setup a variable to hold the response*/
        var bPropertyOwner = sData;
        if (bPropertyOwner == 0) {
            fnHidePropertyEditing();

        } else if (bPropertyOwner == 1) {
            fnShowPropertyEditing();

        }


    });
}

/****UPDATE THE DOM - HIDE THE PROPERTY EDIT AND DELETE NAVIGATION COLUMNS****/
function fnHidePropertyEditing() {
    /*hide the table descriptions number of rooms rows*/
    $(".lbl-property-editdelete").css("display", "none");
    /*hide the table contents number of rooms border*/
    $(".lbl-property-view").css("border-right", "none");
    /*hide the table contents number of rooms rows*/
//    $(".property-icons").css("display", "none");

}
function fnShowPropertyEditing() {
    $(".lbl-property-editdelete").css("display", "flex");
    $(".lbl-property-numberOfRooms").css("border-right", "1px solid #F1F8E9");
}
