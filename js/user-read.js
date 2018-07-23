/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
var bUserGetInterval = null; // !!!IMPORANT!!! PUT IN LOCAL STRAGE, STOP USING GLOBAL VARIABLES
var iUserCountOld = 0;// !!!IMPORANT!!! PUT IN LOCAL STRAGE, STOP USING GLOBAL VARIABLES

/****************************************************/
/*GET ALL PROPERTIES WHEN THE USER CLICKS ON PROPERTIES LINK*/
$('[data-go-to="section-users"]').click(function () {

    fnGetUsers();
});
/****************************************************/
/*GET ALL USERS WHEN AN ADMIN LOGS IN - DISPLAY FLEX HANDLED BY PHP IN users.php*/
window.addEventListener("DOMContentLoaded", function () {

    fnGetUsers();

});
/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*user CRUD*/
/*READ USERS*/
function fnGetUsers() {
    /*setup ajax url*/
    var sUrl = "services/api-user-read.php";
    /*connect to the server and get all the users*/
    $.getJSON(sUrl, function (jData) {
        var iUserCountNew = jData.length;

        /*setup variable - checking if new items have been added*/
        var checkUpdate = fnCheckUpdates(iUserCountOld, iUserCountNew);

        /*get the json status*/
        var sStatus = jData.status;
        var sError = "error";

        /*make sure the client is reveiving data*/
        if (sStatus !== sError) {
            if (checkUpdate == true) {
                /*setup the old user count to = the new user count*/
                iUserCountOld = iUserCountNew;

                /*revers the jData being received*/
                jData.reverse();

                /*user table row blueprint*/
                var sUserBlueprint = '\
                <div class="aside-user-content user-row">\
                <div class="lbl-user-id">{{id}}</div>\
                <div class="lbl-user-email">{{email}}</div>\
                <div class="lbl-user-fname">{{fName}}</div>\
                <div class="lbl-user-lname">{{lName}}</div>\
                <div class="lbl-user-mobile">{{mobile}}</div>\
                <div class="lbl-user-password">{{password}}</div>\
                <div class="lbl-user-type" data-the-icon="{{the-icon-id}}">\
                <span class="fa {{the-icon}} fa-fw"></span>\
                <div class="lbl-user-type-txt">{{the-icon-role}}</div>\
                </div>\
                <div class="btn-user-edit lbl-user-edit users-icons fa fa-edit fa-fw" data-go-to="section-register"></div>\
                <div class="btn-user-delete lbl-user-delete users-icons fa fa-trash fa-fw"></div>\
                </div>';

                /*empty all the rows below the navigation in the table*/
                $(".article-user-rows").empty();

                /*iterate over the data recieved from the server*/
                for (var i = 0; i < jData.length; i++) {
                    /*create a blueprint of the template that can be used as rows for the table*/
                    var sUserTemplate = sUserBlueprint;

                    /*get the information from each item*/
                    var sUserTemplateId = jData[i].id;
                    var sUserTemplateEmail = jData[i].email;
                    var sUserTemplateFname = jData[i].fname;
                    var sUserTemplateLname = jData[i].lname;
                    var sUserTemplateMobile = jData[i].mobile;
                    var sUserTemplatePassword = jData[i].password;
                    var sUserTemplateUserid = jData[i].userType.id;
                    var sUserTemplateUserRole = jData[i].userType.role;
                    var sUserTemplateUserIcon = jData[i].userType.icon;

                    /*replace the placeholders in the template with the data recieved from the server*/
                    sUserTemplate = sUserTemplate.replace("{{id}}", sUserTemplateId);
                    sUserTemplate = sUserTemplate.replace("{{email}}", sUserTemplateEmail);
                    sUserTemplate = sUserTemplate.replace("{{fName}}", sUserTemplateFname);
                    sUserTemplate = sUserTemplate.replace("{{lName}}", sUserTemplateLname);
                    sUserTemplate = sUserTemplate.replace("{{mobile}}", sUserTemplateMobile);
                    sUserTemplate = sUserTemplate.replace("{{password}}", sUserTemplatePassword);
                    sUserTemplate = sUserTemplate.replace("{{the-icon-id}}", sUserTemplateUserid);
                    sUserTemplate = sUserTemplate.replace("{{the-icon}}", sUserTemplateUserIcon);
                    sUserTemplate = sUserTemplate.replace("{{the-icon-role}}", sUserTemplateUserRole);

                    /*append the new row to the cleared table*/
                    $(".article-user-rows").append(sUserTemplate);
                }

            }
        }
    }).done(function (jData) {
        /*start interval to get users rows*/
        fnStartUpdatingUsers();


        /*check if the system has to lock itself*/
//        fnGetSystemLock()


    }).error(function () {
        console.log("error - trying to create a user");
    });


}
;

/****************************************************/
/*TOGGLE RETRIEVING users FROM THE SERVER*/
/*SOURCE: http://javascript.info/tutorial/settimeout-setinterval*/
function fnStartUpdatingUsers() {
    if (!bUserGetInterval) {
        bUserGetInterval = setInterval(fnGetUsers, 3000);
    }
}
/*CLEAR THE INTERVALS FOR GETTING users*/
function fnStopUpdatingUsers() {
    // console.log("STOP UPDATE USER");
    if (bUserGetInterval) {
        // console.log("bUserGetInterval: " + bUserGetInterval);
        clearInterval(bUserGetInterval);
        bUserGetInterval = false;
        // console.log("bUserGetInterval: " + bUserGetInterval);

    }
}

/****************************************************/
/*READ USER FOR REGISTER PAGE*/
function fnReadUserRegister() {
    /*setup ajax url*/
    var sUrl = "services/api-user-read.php";

    /*connect to the server and get all the users*/
    $.getJSON(sUrl, function (jData) {
        var iUserCountNew = jData.length;

        /*force check update to be true*/
        checkUpdate = true;

        if (checkUpdate == true) {
            /*revers the jData being received*/
            jData.reverse();

            /*user table row blueprint*/
            var sUserBlueprint = '\
            <div class="registered-aside">\
            <div>Email: </div>\
            <div>{{email}}</div>\
            </div>';

            /*emty all the rows below the navigation in the table*/
            $("#register-registered-update").empty();

            /*iterate over the data recieved from the server*/
            for (var i = 0; i < jData.length; i++) {
                /*create a blueprint of the template that can be used as rows for the table*/
                var sUserTemplate = sUserBlueprint;

                /*get the information from each item*/
                var sUserTemplateEmail = jData[i].email;

                /*replace the placeholders in the template with the data recieved from the server*/
                sUserTemplate = sUserTemplate.replace("{{email}}", sUserTemplateEmail);

                /*append the new row to the cleared table*/
                $("#register-registered-update").append(sUserTemplate);
            }

        }
    }).done(function () {

    }).error(function (jData) {
        console.log("error - trying to create a user");
    });
}

/****************************************************/
/*GET USERS FOR ADMIN LOGIN fnCheckAdminGetUsersLogin*/
function fnCheckAdminGetUsersLogin() {
    /*get section-users css display info*/
    var sSectionDisplay = $("#section-users").attr("style");

    /*check if there is a string length*/
    if (sSectionDisplay) {
        /*remove all the spaces from the string received*/
        sSectionDisplay = sSectionDisplay.replace(/\s/g, '');
    }

    /*setup a string to compare to the info reteived*/
    var sSectionDisplayComp = "display:flex;";
    /*compare the strings*/
    if (sSectionDisplay === sSectionDisplayComp) {
        /*if the strings match, the user is logged in.*/
        /*get all the users*/
        fnGetUsers();
    }
}
/****************************************************/
/*GET USERS FOR FIRST SUPER ADMIN CREATION fnCheckGetUsers*/
function fnCheckGetUsers() {
    /*get section-users css display info*/
    var sSectionDisplay = $("#section-register").attr("style");

    /*check if there is a string length*/
    if (sSectionDisplay) {
        /*remove all the spaces from the string received*/
        sSectionDisplay = sSectionDisplay.replace(/\s/g, '');
    }

    /*setup a string to compare to the info reteived*/
    var sSectionDisplayComp = "display:flex;";
    /*compare the strings*/
    if (sSectionDisplay === sSectionDisplayComp && iUserCountOld == 0) {
        fnLockTheSystem();
    }
}









