/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/****************************************************/
/*DYNAMIC NAVIGATION*/
$(document).on("click", ".link", function () {
    /*retrieve the attribute on the link that was clicked*/
    var sIdWindowToShow = $(this).attr("data-go-to");

    /*retrieve the parent element and see if the parent is article-links(inside main menu)*/
    var sElementParent = $(this).parent().attr("id");

    /*hide the current window*/
    fnHideCurrentWindow();

    /*show the selected window*/
    fnShowSelectedWindow(sIdWindowToShow);

    /*close the menu*/
    fnCheckOpenMenu(sElementParent);

    /*hide the overlay*/
    fnHideOverlay();

    /*check if the system should stop updating properties*/
    fnCheckStopUpdatingTables(sIdWindowToShow);
    /*check if the system should stop updating users*/
    /* fnCheckStopUpdatingUsers(sIdWindowToShow);*/
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*SHOW SELECTED WINDOW*/
function fnShowSelectedWindow(sIdWindowToShow) {
    /*show the selected window*/
    $("#" + sIdWindowToShow).css({"display": "flex"});
}
/*HIDE CURRENT WINDOW*/
function fnHideCurrentWindow() {
    $(".section").hide();
}
/*HIDE OVERLAY*/
function fnHideOverlay() {
    /*hide the overlay*/
    $("#section-overlay").hide();
}
/*ONLY CLOSE MENU IF MENU IS OPEN*/
function fnCheckOpenMenu(sElementParent) {
    /*hardcode the elements name that needs to stop popping out*/
    var sMenuContainer = "article-links";

    if (sMenuContainer == sElementParent) {
        fnCloseMenu();
    }
}

function fnCheckStopUpdatingTables(sIdWindowToShow) {
    if (sIdWindowToShow !== "section-properties") {
        fnStopUpdatingProperties();
    }

    if (sIdWindowToShow !== "section-users") {
        fnStopUpdatingUsers();

    }
}


/**************************************************/
/*SCROLL NAVIGATION FOR SCREENS THAT ARE SMALLER THAN THE DOM LAYOUT*/
// function fnCheckIfNavigationScroll(){
// 	if($(window).height() < $("#art")){

// 	}
// }