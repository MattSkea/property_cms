<div id="section-property-create" class="section">

    <!-- PROPERTIES-CREATE PAGE LANDING IMAGE -->
    <div id="article-create-properties-image" class="section-image">
        <div class="fa fa-plus fa-2x"></div>
        <div class="fa fa-home fa-3x"></div>
    </div>
    <!-- PROPERTIES-UPDATE PAGE LANDING IMAGE -->
    <div id="article-update-properties-image" class="section-image">
        <div class="fa fa-edit fa-2x"></div>
        <div class="fa fa-home fa-3x"></div>
    </div>

    <!-- HEADING -->
    <div class="section-heading section-heading-property-create" >
        <h2>CREATE PROPERTY</h2>
    </div>

    <!-- FORM CONTAINER -->
    <div class="article-property-create articles" >
        <div id="property-create-container">
            <form id="form-property-create"  class="form" enctype="multipart/form-data">

                <div id="form-property-create-heading" class="form-header">Create your property below</div>
                <!-- FORM GROUP -->
                <div class="form-group form-group-id">
                    <input id="txt-create-property-id" name="id" type="text" placeholder="ID">
                </div>
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-create-property-auction-type">Auction type </label>
                    <select id="txt-create-property-auction-type" name="auction-type">
                        <option value="Rental" selected>Rental</option>
                        <option value="Buy">Sell</option>
                    </select> 
                </div> 
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-create-property-abode-type">Abode type </label>
                    <select id="txt-create-property-abode-type" name="abode-type">
                        <option value="Apartment" selected>Apartment</option>
                        <option value="Home">Home</option>
                        <option value="Business">Business</option>
                    </select> 
                </div> 
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-create-property-postal-code">Postal code </label>
                    <input id="txt-create-property-postal-code" name="postal-code" type="text" value="" placeholder="Postal code">
                </div>
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-create-property-city">City</label>
                    <input id="txt-create-property-city" name="city" type="text" value="" placeholder="City">
                </div>
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-create-property-address">Address </label>
                    <input id="txt-create-property-address" name="address" type="text" value="" placeholder="Address">
                </div>
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-create-property-price">Price: </label>
                    <input id="txt-create-property-price" name="price" type="text" value="" placeholder="Price">
                </div>
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-create-property-size">Size </label>
                    <input id="txt-create-property-size" name="size" type="text" value="" placeholder="Size">
                </div>
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-create-property-total-rooms">Total rooms </label>
                    <input id="txt-create-property-total-rooms" name="total-rooms" type="text" value="" placeholder="Rooms">
                </div>
                <!-- HIDDEN FORM GROUP -->
                <div id="property-files-hidden" class="form-group hidden">
                    <input id="" name="file-0" type="text"  placeholder="">
                </div>
                <!-- SUBMIT BUTTON -->
                <div id="btn-save-property" class="form-submit-btn" data-go-to="section-properties">
                    <div class=" fa fa-save"></div><div id="txt-btn-save-property">Create property</div>
                </div>

        </div>

        <div id="property-create-image-container">
            <div class="form-header">Images</div>
            <div>           
                <input class="file" type="file" name="file-0">
                <img class="img-preview" src=""></img>     
            </div>
            
            <!--<button id="btn-upload">UPLOAD PROPERTY</button>-->

        </div>
        </form>
    </div>
</div>
</div>