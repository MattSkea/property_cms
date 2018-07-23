
/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*WRITE THE USER DATA TO LOCAL STORAGE*/
function fnCreateUserLocalStorage(sjData) {
    /*write the data to local storage*/
    localStorage.user = sjData;
}
/*WRITE THE VIEW PROPERTY DATA TO LOCAL STORAGE*/
function fnCreatePropertyViewLocalStorage(sjData) {
    /*write the data to local storage*/
    localStorage.viewProperty = sjData;
}
/* !!CLEAR LOCAL STORAGE!! */
function fnClearLocalStorage() {
    localStorage.clear();
}
/*CHECK IF THERE IS DATA IN LOCAL STORAGE*/
function fnCheckLocalStorage() {
    var bLocalStorage = false;
    if (localStorage.length >= 1) {
        bLocalStorage = true;
    } else {
        bLocalStorage = false;
    }

    return bLocalStorage;
}
/*CHECK IF THERE IS USER DATA IN LOCAL STORAGE*/
function fnHasUserLocalStorage() {
    var bLocalStorageUser = false;
    if (localStorage.user) {
        bLocalStorage = true;
    } else {
        bLocalStorage = false;
    }

    return bLocalStorage;
}
/*CONVERT LOCAL STORAGE STRING TO JSON*/
function fnGetUserLocalStorage() {
    var user = JSON.parse(localStorage.user);

    return user;
}
