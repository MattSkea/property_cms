/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*CHECK IF THERE ARE UPDATES ON THE SERVER*/
/*--ADD THIS FUNCTION TO THE AJAX REQUESTS*/
/*!!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!*/
/*IN THE AJAX, SET THE countOld = countNew*/
function fnCheckUpdates(countOld, countNew) {
    var checkUpdate = false;
    if (countOld !== countNew) {
        /*update the old property count*/
        countOld = countNew;
        /*confirm that there has been updates*/
        checkUpdate = true;

        return checkUpdate;
    } else {
        /*confirm that there has been no updates*/
        return checkUpdate = false;
    }
    return checkUpdate;
}

/****************************************************/
/*CLEAR ALL FORM INPUTS!!!!*/
function fnClearFormInputs() {
    /*clear the form inputs*/
    $('.form-group input').each(function () {
        $(this).val("");
    });
    /*add the placeholders to the inputs*/
    $('.form-group input').first().focus();

    /*clear file inputs*/
    var sParent = $(this).parent();
    var fileInput = $("input:file");
    var fileImage = $(" .img-preview");
//    fileInput = fileInput.replaceWith(fileInput.val('').clone(true));

    fileInput.length;
    /**/
    fileInput.replaceWith(fileInput.val(''))

    fileImage.attr("src", "");
    fileImage.css("display", "none");
    
}
