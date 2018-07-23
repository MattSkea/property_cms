/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*OPEN MENU*/
$(document).on("click", "#menu-burger", function () {
    fnOpenMenu();
});
/****************************************************/
/*CLOSE MENU*/
$(document).on("click", "#section-overlay", function () {
    fnCloseMenu();
});
/****************************************************/
/*DROP DOWN USER MENU*/
$(document).on("click", "#menu-user-dropdown", function () {
    /*open the drop down menu for the user*/
    fnToggleUserMenu();
});
/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*******************MAIN MENU************************/
/*OPEN MENU*/
function fnOpenMenu() {
    /*animate the menu to the right by 270px, original CSS left = -280px*/
    $("#section-menu").animate({"left": "0"}, 600);
    /*animate the menu left 5px as a finishing touch*/
    $("#section-menu").animate({"left": "-5"}, 200);
    /*show the overlay*/
    $("#section-overlay").css({"display": "flex"});
    /*hide 'y'-scroll on the body*/
    $("body").css({"overflow-y": "hidden"});
}

/*CLOSE MENU*/
function fnCloseMenu() {
    /*animate the menu right 5px as a finishing touch*/
    $("#section-menu").animate({"left": "0"}, 200);
    /*animate the menu to the left by 270px, CSS left = 0*/
    $("#section-menu").animate({"left": "-280"}, 600);
    /*hide the overlay*/
    $("#section-overlay").hide();
    /*hide 'y'-scroll on the body*/
    $("body").css({"overflow-y": "scroll"});

    /*close the drop down menu for the user*/
    fnCloseUserMenu();
}
/****************************************************/
/*******************MAIN MENU************************/
/*TOGGLE USER MENU*/
function fnToggleUserMenu() {
    /*get the state of the menu user caret element*/
    var sCaretState = $("#menu-dropdown").css("display");

    if (sCaretState === "none") {
        fnCloseUserMenu();
    } else if (sCaretState === "block") {
        fnOpenUserMenu();
    }
}
/*OPEN USER MENU*/
function fnCloseUserMenu() {

    /*slide the menu user functionality down*/
    $("#menu-user-dropped-content").slideUp();

    /*change the caret*/
    $("#menu-dropdown").css("display", "block");
    $("#menu-dropup").css("display", "none");




}
/*CLOSE USER MENU*/
function fnOpenUserMenu() {

    /*slide the menu user functionality up*/
    $("#menu-user-dropped-content").slideDown();

    /*change the caret*/
    $("#menu-dropdown").css("display", "none");
    $("#menu-dropup").css("display", "block");

}

/****************************************************/
/*CONTEXTMENU - on rightclick open menu*/
$(document).contextmenu(function(event){
	fnOpenMenu();
	event.preventDefault();
});