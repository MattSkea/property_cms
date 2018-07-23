<?php
/* * ************************* */
/** check if the user has access to view & edit users */
if (fnHasAccess(3)) {
    ?>
    <div id="section-users" class="section" style="
    <?php
    /*     * ************************* */
    /** check if the user has access to view & edit users */
    if (fnHasAccess(3)) {
        echo "display:flex;";
    }
    ?>">

        <!-- USERS PAGE LANDING IMAGE -->
        <div id="article-users-image" class="section-image">
            <div class="fa fa-users fa-3x"></div>
        </div>

        <!-- HEADING -->
        <div class="section-heading section-heading-home">
            <h2>USERS</h2>
        </div>

        <!-- USER PAGE CONTENT -->
        <div id="article-users-content" class="articles">

            <!-- USER TABLE -->
            <div class="article-users-table" >
                <div id="user-navigation">
<!--                    <div id="lblUserAdd" class="user-icon link" data-go-to="section-user-edit">
                        <div id="userAddIcon"><span class="fa fa-plus"></span><span class="fa fa-user"></span></div>
                        <div>Add user</div>					
                    </div>-->
                </div>

                <!-- FIRST USER ROW - NAVIGATION -->
                <div id="user-layout" class="aside-user-content" >
                    <div class="lbl-user-email">Email</div>
                    <div class="lbl-user-fname">First name</div>
                    <div class="lbl-user-lname">Last name</div>
                    <div class="lbl-user-mobile">Mobile</div>
                    <div class="lbl-user-password">Password</div>
                    <div class="lbl-user-type">
                        <span class="fa fa-user-circle fa-fw"></span>
                        User Type
                    </div>
                    <div class="lbl-user-edit">
                        <span class=" fa fa-edit fa-fw" data-go-to="section-user-edit"></span>
                        Edit user
                    </div>
                    <div class="lbl-user-delete">
                        <span class="fa fa-trash fa-fw"></span>
                        Delete user
                    </div>

                </div>

                <!-- SECOND USER ROW -->
                <div class="article-user-rows" >

                </div>
            </div>
        </div>
    </div>
    <?php
}
?>