<div id="section-properties" class="section"
<?php
if (fnHasAccess(3)) {

    echo 'style="display:none;"';
}
if (fnHasAccess(1)) {
//    echo 'style="display:none;"';
    echo 'style="display:flex;"';
}
?> 
     >

    <!-- PROPERTIES PAGE LANDING IMAGE -->
    <div id="article-properties-image" class="section-image">
        <div class="fa fa fa-building fa-3x"></div>
        <div class="fa fa fa-building fa-2x"></div>
    </div>

    <!-- HEADING -->
    <div class="section-heading" >
        <h2>OUR COLLECTION OF PROPERTIES</h2>
    </div>

    <!-- PROPERTIES TABLE -->
    <div class="article-property-table" >
        <!-- FIRST PROPERTY ROW -->
        <div id="property-icons">
            <?php
            /*             * ************************* */
            /** if there is a session, show the add property button */
            if (fnActiveUserSession()) {
                ?>
                <div id="lblPropertyAdd" class="property-icon link" data-go-to="section-property-create">
                    <div id="propertyAddIcon"><span class="fa fa-plus"></span><span class="fa fa-home"></span></div>
                    <div>Add property</div>					
                </div>
<!--                <div id="lblPropertropertiesMaps" class="property-icon link" data-go-to="section-properties-maps">
                    <div id="propertyMapIcon"><span class="fa fa-map"></span><span class="fa fa-home"></span></div>
                    <div>Properties map</div>					
                </div>-->
                <?php
            }
            ?>
        </div>
        <!-- SECOND PROPERTY ROW -->
        <div id="property-layout" class="aside-property-content" >
            <div class="lbl-property-type">Auction type</div>
            <div class="lbl-property-type">Abode</div>
            <div class="lbl-property-type-postalCode">Postal code</div>
            <div class="lbl-property-city">City</div>
            <div class="lbl-property-address">Address</div>
            <div class="lbl-property-price">Price</div>
            <div class="lbl-property-size">Size<sup>2</sup></div>
            <div class="lbl-property-numberOfRooms">Total rooms</div>
            <div class="lbl-property-view">
                <span class=" fa fa-eye fa-fw"></span>
                View property
            </div>
            
            <?php
            if (fnHasAccess(1)) {
                ?>
                <div class="lbl-property-editdelete" 
                <?php
                /*                 * ************************* */
                /** check if the user has access to view & edit users */
//                if (fnHasAccess(3)) {
//                    echo "display:none;";
//                }
                /*                 * ************************* */
                /** if there is a session, show the add & property button */
                if ((fnOwnsAnyPropertiesForRoot() && fnHasAccess(1)) || fnHasAccess(2)) {
                    echo 'style="display:flex;"';
                }
                ?>>
                    <span class=" fa fa-edit fa-fw"></span>
                    Edit property
                </div>
                <div class="lbl-property-editdelete" 
                <?php
                /*                 * ************************* */
                /** check if the user has access to view & edit users */
                if (fnHasAccess(3)) {
//                    echo "display:none;";
                }
                /*                 * ************************* */
                /** if there is a session, show the add & property button */
                if ((fnOwnsAnyPropertiesForRoot() && fnHasAccess(1)) || fnHasAccess(2)) {
                    echo 'style="display:flex;"';
                }
                ?>>
                    <span class="fa fa-trash fa-fw"></span>
                    Delete property
                </div>
                <?php
            }
            ?>
        </div>
        <!-- THIRD PROPERTY ROW -->
        <div id="dynamic-property-rows" class="article-property-rows" >

        </div>

    </div>
</div>