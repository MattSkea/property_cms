/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
$(document).on("click", ".btn-property-delete", function () {
    /*retrieve the id of the element being deleted*/
    var sIdToDelete = $(this).siblings(".lbl-property-id").text();
    /*retrieve the parent object being deleted*/
    var oTheParent = $(this).parent();

    fnAlertPropertyDelete(sIdToDelete, oTheParent);
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*POST THE ID TO THE SERVER VIA AJAX*/
function fnPostDeleteProperty(sIdToDelete, oTheParent) {
    // console.log("sIdToDelete" + sIdToDelete);

    /*setup ajax url*/
    var sUrl = "services/api-property-delete.php";
    var sUrlData = "?id=" + sIdToDelete;
    sUrl += sUrlData;

    /*setup ajax post to delete the property*/
    $.getJSON(sUrl, function (jData) {
        /*check the response status*/
        if (jData.status == "ok") {
            /*if the status is ok, hide the parent object of the item being deleted*/
            oTheParent.fadeOut();
        } else {
            console.log("error finding status while trying to delete a property");
        }

    });
}




/****************************************************/
/*GET THE USER TO CONFIRM THEY WANT TO DELETE THE PROPERTY*/
function fnAlertPropertyDelete(sIdToDelete, oTheParent) {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover the property!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "##dd4b39",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function (isConfirm) {
        if (isConfirm) {
            swal("Deleted!", "The property has been delete", "success");
            /*initialize the delete properties function*/
            fnPostDeleteProperty(sIdToDelete, oTheParent);
            
            /*hide the property edit and delete fields*/
            fnOwnsProperty();
        } else {
            swal("Cancelled", "The property is safe", "error");
        }
    });
}








