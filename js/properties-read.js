/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*INITIALIZE GET PROPERTY INTERVIL*/
var bPropertyGetInterval = null; // !!!IMPORANT!!! PUT IN LOCAL STRAGE, STOP USING GLOBAL VARIABLES
var iPropertyCountOld = 0;// !!!IMPORANT!!! PUT IN LOCAL STRAGE, STOP USING GLOBAL VARIABLES



/****************************************************/
/*GET ALL PROPERTIES WHEN THE USER CLICKS ON PROPERTIES LINK*/
$('[data-go-to="section-properties"]').click(function () {
    
    /*request the properties from the controller*/
    fnGetProperties();
    /*--for admins, show the properties table description edit and delete icons*/
    fnOwnsProperty();
});

/****************************************************/
/*GET ALL PROPERTIES WHEN THE USER LOGS IN*/
window.addEventListener("DOMContentLoaded", function () {
    /*get section-properties css display info*/
    var sSectionDisplay = $("#section-properties").attr("style");
    /*setup a string to compare to the info retrieved*/
    var sSectionDisplayComp = "display:flex;";
    /*compare the strings*/
    if (sSectionDisplay === sSectionDisplayComp) {
        /*if the strings match, the user is logged in.*/
        /*get all the properties*/
        fnGetProperties();
        /*hide property total-room table description border-right*/
        fnOwnsProperty();
    }
    /*NB: jquery functions 'indexOf(comp>=0) and 'search(comp)' struggle to with 'display:none'*/
});


/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*PROPERTY CRUD*/
/*READ PROPERTIES*/
function fnGetProperties() {
    /*setup ajax url*/
    var sUrl = "services/api-property-get.php";
    /*connect to the server and get all the properties*/
    $.getJSON(sUrl, function (jData) {
        var iPropertyCountNew = jData.length;
        /*get the json status*/
        var sStatus = jData.status;
        var sError = "error";

        /*setup variable - checking if new items have been added*/
        var checkUpdate = fnCheckUpdates(iPropertyCountOld, iPropertyCountNew);

        var iTempOldPropertyCount = iPropertyCountOld;

        if (sStatus !== sError) {
            if (checkUpdate === true) {

                /*setup the old property count to = the new property count*/
                iPropertyCountOld = iPropertyCountNew;

                /*** iTempOldPropertyCount >= 1 ----- iOlderPropertyCount = 0 when coming from first time load and page updates  */

                if (iTempOldPropertyCount >= 1 && iTempOldPropertyCount < iPropertyCountOld) {
                    var jNotification = {
                        "message": "New property added"
                    };
                    fnTriggerNotification(jNotification);
                }

                /*revers the jData being received*/
                jData.reverse();
                var propertyRows = '';

                /*append the new row to the cleared table*/
                for (var i = 0; i < jData.length; i++) {


                    /*append the jData.propertyRow being retrieved from php*/
                    propertyRows += jData[i].propertyRow;
                }

                /*append html to text, getting rid of HTML endoded text*/
                propertyRows = $("<div/>").html(propertyRows).text();
                /*emty all the rows below the navigation in the table*/
                $("#dynamic-property-rows").children().remove();

                /*append html to textt*/
                $("#dynamic-property-rows").append(propertyRows);
            }
        }
    }).done(function () {
        /*start interval to get properties rows*/
        fnStartUpdatingProperties();
        /*if there arnt any users in the system, lock the system and log the user out*/
        fnGetSystemLock();
//        console.log("Run lock the system");
    }).error(function (jData) {
        console.log("error - trying to get properties");
    });
}

/****************************************************/
/*TOGGLE RETRIEVING PROPERTIES FROM THE SERVER*/
/*SOURCE: http://javascript.info/tutorial/settimeout-setinterval*/
function fnStartUpdatingProperties() {
    if (!bPropertyGetInterval) {
        // console.log("START UPDATE PROPERTIES");
        // console.log(bPropertyGetInterval);
        bPropertyGetInterval = setInterval(fnGetProperties, 3000);
        // console.log(bPropertyGetInterval);
    }
}
/*CLEAR THE INTERVALS FOR GETTING PROPERTIES*/
function fnStopUpdatingProperties() {

    if (bPropertyGetInterval) {
        // console.log("STOP UPDATE PROPERTIES");
        // console.log(bPropertyGetInterval);

        clearInterval(bPropertyGetInterval);
        bPropertyGetInterval = null;
        // console.log(bPropertyGetInterval);
    }
}

