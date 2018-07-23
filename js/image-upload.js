/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
var iElementNumber = 0;

/*APPENDING NEW IMAGES TO THE DOM*/
$(document).on('change', '[type="file"]', function () {
    /*setup fileReader to read file */
    var preview = new FileReader();
    /*read contents of blob*/
    preview.readAsDataURL(this.files[0]);

    var self = this;


    preview.onload = function (event) {
        $(self).siblings(".img-preview").attr("src", event.target.result);
        $(self).siblings(".img-preview").css("width", "400px");
        $(self).siblings(".img-preview").css("display", "flex");

        /*extract input file name*/
        var fileName = self.name;
        /*extract file name from temp location*/
        var sFileType = self.value.replace(/.*\\/, "");


        var fileDetails = {
            "fileName": fileName,
            "fileImage": sFileType
        };

        fnInsertFilesIntoInputs(fileDetails);
        fnCreateImageInput();
    };
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*CREATE NEW IMAGE INPUT*/
function fnCreateImageInput() {
    iElementNumber++;
    /*setup file upload blueprint*/
    var sFileUploadBlueprint = '<div class="property-files">\
                    <input class="file" type="file" name="file-' + iElementNumber + '">\
                    <img class="img-preview" src=""></img> \
                  </div>';
    /*setup file name input template*/
    var sFileUploadName = '<input id="" name="file-' + iElementNumber + '" type="text"  placeholder="">';

    /*append blueprints to their container classes*/
    $("#property-create-image-container .form-header").after(sFileUploadBlueprint);
    $("#property-files-hidden ").append(sFileUploadName);
}

/****************************************************/
/*insert file names into inputs*/
function fnInsertFilesIntoInputs(fileDetails) {
    /*get the hidden data inputs*/
    var files = $("#property-files-hidden").children();

    /*iterate over the data inputs*/
    for (var i = 0; i < files.length; i++) {
        var inputName = files[i].name;
        if (fileDetails.fileName === inputName) {
            /*append the file name into the input field for validation*/
            files[i].value = fileDetails.fileImage;
        }
    }

}

/****************************************************/
/*remove old file input elements*
 *initialized on form validation success inside property-create.js*/
function fnRemoveImageInputs() {
    /*remove all the image inputs*/
    $("#property-create-image-container").find(":file").remove();
    /*remove all the inputs with image names*/
    $("#property-files-hidden").find(":input").remove();
    /*reset the image element count, -1 so the first image iterates to 0*/
    iElementNumber = -1;

    /*create a new file input button*/
    fnCreateImageInput();
}
