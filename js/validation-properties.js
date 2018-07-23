/*************VALIDATION PREOPERTIES*****************/
/****************************************************/

/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/**** --- INITIALIZED IN property-create.js */
/*INITIALIZE VALIDATION*/
function fnPropertiesValidation() {
    /*create a trigger to check if the form is valid*/
    /*if any of the validation fields fail, switch the trigger to true;*/
    var bFormIsValid = 0;
    /*create placeholders for the form being validated*/
    var bUploadedImages = fnValidateImages();
    var bRooms = fnValidateTotalRooms();
    var bSize = fnValidatePropertySize();
    var bPrice = fnValidatePrice();
    var bAddress = fnValidateAddress();
    var bCity = fnValidateCity();
    var bPostal = fnValidatePostalCode();
    /*if the validation fails*/
    if (bPostal == false ||
            bCity == false ||
            bAddress == false ||
            bPrice == false ||
            bSize == false ||
            bRooms == false ||
            bUploadedImages == false) {
        /*set the trigger to false*/
        bFormIsValid = 0;
    }

    /*if the validation passes*/
    if (bPostal == true &&
            bCity == true &&
            bAddress == true &&
            bPrice == true &&
            bSize == true &&
            bRooms == true &&
            bUploadedImages == true) {
        /*set the trigger to true*/
        bFormIsValid = 1;
    }

    return bFormIsValid;
}

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*HIDE LOGIN ERROR MESSAGE FUNCTION*/
function fnHidePropertyErrorMessage() {
    /*GET THE NOTIFICATION TO HIDE*/
    var tPropertyNotification = $("#form-property-create .notification-error");
    fnHideErrorMessage(tPropertyNotification);
}

/****************************************************/
/*VALIDATE PROPERTY POSTAL CODE*/
function fnValidatePostalCode() {


    /*get the postal code entered*/
    var iPostalCode = $("#txt-create-property-postal-code").val();
    /*setup a regex algorith for postal codes , ranging from 3 -> 4 digits*/
    var regex = /^[0-9]{3,4}$/;
    /*test the postal code*/
    var bRegexResult = regex.test(iPostalCode);
    /*if the postal code fails the test, mark the input field*/
    if (!bRegexResult) {
        /*add the error marking*/
        $("#txt-create-property-postal-code").addClass("input-error");
        /*setup an informative error string to append to the DOM*/
        var sLoginErrorMessage = "Postal code must have between 3 & 4 digits long!";
        /*append the error message to the DOM*/
        fnAppendErrorMessage(sLoginErrorMessage);
    } else if (bRegexResult) {
        $("#txt-create-property-postal-code").removeClass("input-error");
    }

    /*return the result*/
    return bRegexResult;
}
/****************************************************/
/*VALIDATE CITY*/
function fnValidateCity() {
    /*get the city entered*/
    var sCity = $("#txt-create-property-city").val();
    /*setup a regex algorith for city , ranging from 2 -> 20 characters*/

    /*setup regex to check string*/
    var regex = /^[a-zA-Z]{2,20}$/;
    /*test the city string*/
    var bRegexResult = regex.test(sCity);

    /*if the city string fails the test, mark the input field*/
    if (!bRegexResult) {
        $("#txt-create-property-city").addClass("input-error");
        var sErrorMessage = "City  must have 2 to 20 characters!";
        /*append the error message to the DOM*/
        fnAppendErrorMessage(sErrorMessage);
    } else if (bRegexResult) {
        $("#txt-create-property-city").removeClass("input-error");
    }

    /*return the result*/
    return bRegexResult;
}
/****************************************************/
/*VALIDATE ADDRESS*/
function fnValidateAddress() {
    /*get the address entered*/
    var sAddress = $("#txt-create-property-address").val();
    /*setup a regex algorith for address , all characters, numvbers and \s*/
    var regex = /^[a-zA-Z+\s+0-9+.+,]{2,26}$/;
    /*test the address string*/
    var bRegexResult = regex.test(sAddress);
    /*if the address string fails the test, mark the input field*/
    if (!bRegexResult) {
        $("#txt-create-property-address").addClass("input-error");
        var sErrorMessage = "Please enter a valid street address and number!";
        /*append the error message to the DOM*/
        fnAppendErrorMessage(sErrorMessage);
    } else if (bRegexResult) {
        $("#txt-create-property-address").removeClass("input-error");
    }

    return bRegexResult;
}

/****************************************************/
/*VALIDATE PRICE*/
function fnValidatePrice() {
    /*get the price entered*/
    var iPrice = $("#txt-create-property-price").val();
    /*setup a regex algorith for price , ranging 0.00 and up*/
    var regex = /^[0-9]|[0-9]+(\.[0-9][0-9])$/; /*test the price string*/
    var bRegexResult = regex.test(iPrice);
    /*if the price float fails the test, mark the input field*/
    if (!bRegexResult) {
        $("#txt-create-property-price").addClass("input-error");
        var sErrorMessage = "Please enter a valid price, numbers only!";        
        /*append the error message to the DOM*/
        fnAppendErrorMessage(sErrorMessage);
    } else if (bRegexResult) {
        $("#txt-create-property-price").removeClass("input-error");
    }

    /*return the result*/
    return bRegexResult;
}
/****************************************************/
/*VALIDATE PROPERTY SIZE*/
function fnValidatePropertySize() {
    var iSize = $("#txt-create-property-size").val();
    var regex = /^[0-9]{2,11}$/;
    /*test the size string*/
    var bRegexResult = regex.test(iSize);
    /*if the size int fails the test, mark the input field*/
    if (!bRegexResult) {
        $("#txt-create-property-size").addClass("input-error");
        var sErrorMessage = "Please enter a valid property size, numbers only!";
        /*append the error message to the DOM*/
        fnAppendErrorMessage(sErrorMessage);
    } else if (bRegexResult) {
        $("#txt-create-property-size").removeClass("input-error");
    }
    /*return the result*/
    return bRegexResult;
}
/****************************************************/
/*VALIDATE TOTAL ROOMS*/
function fnValidateTotalRooms() {
    var iRooms = $("#txt-create-property-total-rooms").val();
    var regex = /^[0-9]{1,4}$/;
    /*test the rooms string*/
    var bRegexResult = regex.test(iRooms);
    /*if the rooms int fails the test, mark the input field*/
    if (!bRegexResult) {
        $("#txt-create-property-total-rooms").addClass("input-error");
        var sErrorMessage = "Please enter a valid amount of rooms, numbers only!"
        /*append the error message to the DOM*/
        fnAppendErrorMessage(sErrorMessage);
    } else if (bRegexResult) {
        $("#txt-create-property-total-rooms").removeClass("input-error");
    }

    /*return the result*/
    return bRegexResult;
}
/****************************************************/
/*VALIDATE IMAGES*/
function fnValidateImages() {
    /*get all the file names*/
    var files = $("#property-files-hidden").children();
    /*count total files*/
    var iTotalImages = files.length;
    //    var iTotalImages = files.length-1;
    /*bHasFile is a trigger to check if there are any 
     * being uploaded*/
    var bHasFile = 0;
    /*itearate over all the images*/
    for (var i = 0; i < iTotalImages - 1; i++) {
        /*get the values of the files*/
        var sImage = files[i].value;
        /*get the length of the image name*/
        var iImageNameLength = sImage.length;
        /*setup regex expression*/
        var regex = /^[a-zA-Z\s0-9-_.,\.(png|jpe?g|bmp)]{2,26}$/;
        /*test the address string*/
        var bRegexResult = regex.test(sImage);

        /*if there is a filename for the first file*/
        if (i == 0 && iImageNameLength > 0) {
            bHasFile = 1;
        }
        else if (i > 0 && iImageNameLength > 0) {

            /*if the image naming conventions fail the regex test*/
            if (bRegexResult == false) {
                /*append the error css class*/
                $("#property-create-image-container").addClass("input-error");
                /*setup the error message*/
                var sErrorMessage = "Please upload valid images, .png or .jpg!";
                /*append the error message to the DOM*/
                fnAppendErrorMessage(sErrorMessage);
            }
            /*if the image naming conventions pass the regex test*/
            else if (bRegexResult == true) {

                $("#property-create-image-container").removeClass("input-error");
            }
        }
    }

    /*if there are no files being added to the server*/
    if (iTotalImages == 1 && bHasFile == false) {
        $("#property-create-image-container").addClass("input-error");
        var sErrorMessage = "Please upload atleast one image!"
        /*append the error message to the DOM*/
        fnAppendErrorMessage(sErrorMessage);
        /*force the regex result to fail, the user hasnt uploaded any images*/
        bRegexResult = 0;
    }
    /*if the user has added a file*/
    else if (iTotalImages >= 1 &&
            bHasFile == true &&
            bRegexResult == true) {
        $("#property-create-image-container").removeClass("input-error");
    }

    /*return the result*/
    return bRegexResult;
}
