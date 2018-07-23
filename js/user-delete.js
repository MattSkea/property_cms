/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
$(document).on("click" , ".btn-user-delete", function(){
	/*retrieve the id of the element being deleted*/
	var sIdToDelete = $(this).siblings(".lbl-user-id").text();
	/*retrieve the parent object being deleted*/
	var oTheParent = $(this).parent();

	/*initialize the delete user function*/
	fnPostDeleteUser(sIdToDelete, oTheParent);
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*POST THE ID TO THE SERVER VIA AJAX*/
function fnPostDeleteUser(sIdToDelete, oTheParent){
	// console.log("sIdToDelete" + sIdToDelete);

	/*setup ajax url*/
	var sUrl = "services/api-user-delete.php";
	var sUrlData = "?id=" + sIdToDelete;
	sUrl += sUrlData;

	/*setup ajax post to delete the user*/
	$.getJSON(sUrl, function(jData){
		/*check the response status*/
		if(jData.status == "ok"){
			/*if the status is ok, hide the parent object of the item being deleted*/
			oTheParent.fadeOut();
		} else{
			console.log("error finding status while trying to delete a user");
		}

	});
}
