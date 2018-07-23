<div id="section-user-edit" class="section">
    <!-- USER EDIT PAGE LANDING IMAGE -->
    <div id="article-user-edit-image" class="section-image">
        <div class="fa fa-edit fa-2x"></div>
        <div class="fa fa-user fa-3x"></div>
    </div>
     <!-- USER CREATE PAGE LANDING IMAGE -->
    <div id="article-user-create-image" class="section-image">
        <div class="fa fa-plus fa-2x"></div>
        <div class="fa fa-user fa-3x"></div>
    </div>


    <!-- HEADING -->
    <div class="section-heading section-heading-user-edit">
        <h2>USER EDIT</h2>
    </div>


    <!-- FORM CONTAINER -->
    <div id="article-user-edit" class="articles">
        <form id="form-user-edit" class="form">
            <div class="form-header">Edit the user below</div>
            <!-- FORM GROUP -->
            <div class="form-group form-group-id">
                <input id="txt-user-edit-id" name="id" type="text" placeholder="ID">
            </div>

            <?php
            /*             * ************************* */
            /** CHECK IF THE USER IS A SUPER ADMIN ONLY SUPER ADMINS CAN EDIT USER TYPES */
            if (fnHasAccess(3)) {
                ?>
                <!-- FORM GROUP -->
                <div class="form-group">
                    <label for="txt-user-edit-type">User type </label>
                    <select id="txt-user-edit-type" name="userType">
                        <option value="1" selected>Basic user</option>
                        <option value="2">Admin</option>
                        <option value="3">Super admin</option>
                    </select>		
                </div> 
            <?php } ?>
            <!-- FORM GROUP -->
            <div class="form-group">
                <label for="txt-user-edit-email">Email address</label>
                <input id="txt-user-edit-email" name="email" type="text" placeholder="Email">
            </div>
            <!-- FORM GROUP -->
            <div class="form-group">
                <label for="txt-user-edit-fname">First name</label>
                <input id="txt-user-edit-fname" name="fname" type="text" placeholder="First name">
            </div>
            <!-- FORM GROUP -->
            <div class="form-group">
                <label for="txt-user-edit-lname">Last name</label>
                <input id="txt-user-edit-lname" name="lname" type="text" placeholder="Last name">
            </div>
            <!-- FORM GROUP -->
            <div class="form-group">
                <label for="txt-user-edit-mobile">Mobile number</label>
                <input id="txt-user-edit-mobile" name="mobile" type="text" placeholder="Mobile number">
            </div>
            <!-- FORM GROUP -->
            <div class="form-group">
                <label for="txt-user-edit-password">Password</label>
                <input id="txt-user-edit-password" name="password" type="text" placeholder="Password">
            </div>

            <!-- SUBMIT BUTTON -->
            <div id="btn-user-edit" class="form-submit-btn" data-go-to="section-users">
                <div class=" fa  fa-user-plus fa-1x"></div><div id="txt-btn-user-edit">Edit user</div>
            </div>
        </form>
    </div>	
</div>
