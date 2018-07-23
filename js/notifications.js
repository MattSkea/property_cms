/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/


/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*HANDLE NOTIFICATIONS*/
function fnTriggerNotification(jNotification) {
    /*check if the browser supports notifications*/
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    }
    /*check if notification permissions have already been granted*/
    else if (Notification.permission === "granted") {
        /*if notifications are allowed*/
        var notification = new Notification(jNotification.message);
        fnTriggerBlinkingTitle();
//        fnTriggerBlinkingTitle();
    }
    /*otherwise ask for permission*/
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            /*if permission has been grandted*/
            if (permission === "granted") {
                var notification = new Notification(jNotification.message);
                fnTriggerBlinkingTitle();
            }
        });
    }
}

function fnTriggerBlinkingTitle() {
    /*setup a notification sound*/
    var oSound = new Audio('./images/website-layout/sound.mp3' );
    /*play the notification sound*/
    oSound.play();

    var sOriginalTitle = document.title; /*GET THE TITLE OF THE HTML FILE*/
    var bSwitch = false; /*SETUP A SWITCH TO TRACK THE TITLE UPDATE*/
    var iCounter = 6;
    /*INITIALIZE THE INTERVAL*/
    var iTimer = setInterval(function () {
        if (bSwitch == false) {
            /*SETUP A NEW TITLE FOR THE HTML PAGE*/
            document.title = "NEW PROPERTY ADDED";
            bSwitch = true;
        } else {
            /*SETUP THE ORIGINAL PAGE TITLE*/
            document.title = sOriginalTitle;
            bSwitch = false;
        }
        iCounter--;

        if (iCounter == 0) {
            /* STOP THE INTERVAL*/
            clearInterval(iTimer);
        }

    }, 1000);
}