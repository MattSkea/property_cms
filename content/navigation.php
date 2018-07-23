<div id="section-menu-burger">
    <div id="menu-burger" class="fa fa-bars fa-1x"></div>
</div>

<div id="section-menu">	
    <?php
    if (isset($_SESSION['email'])) {
        ?>
        <div id="article-menu-user">
            <?php
            if (fnHasAccess(2)) {
                ?>
                <div id="menu-user-type">
                    <?php
                      if ($_SESSION['userType'] == 3) {
                        echo 'Super Admin';
                    }
                    if ($_SESSION['userType'] == 2) {
                        echo 'Admin';
                    }
                    ?>
                </div>
                <?php
            }
            ?>

            <div id="menu-user-info">

                <div>
                    <?php
                    echo ($_SESSION['email']);
                    ?>
                </div>
                <div id="menu-user-dropdown">
                    <div id="menu-dropdown" class="fa fa-caret-down"></div>
                    <div id="menu-dropup" class="fa fa-caret-up"></div>
                </div>
            </div>
            <div id="menu-user-dropped-content">
                <div id="menu-dropdown-edit-user" data-go-to="section-register">
                    <div class="menu-user-icons">
                        <div class="fa fa-edit fa-1x"></div>
                        <div class="fa fa-user fa-1x"></div>
                    </div>
                    <div >Edit profile</div>
                </div>
            </div>
        </div>
        <?php
    }
    ?>
    <div id="article-links">	
        <?php
        /*         * ************************* */
        /** if there isnt a session, show login */
        if (!fnActiveUserSession()) {
            ?>
            <div class="link" data-go-to="section-login"><span class="fa fa-sign-in fa-1x"></span>Login</div>
            <?php
        }
        ?>

        <?php
        /*         * ************************* */
        /** if there is a session, show logout */
        if (fnActiveUserSession()) {
            ?>
            <div id="link-logout" ><span class="fa fa-sign-out fa-1x"></span>Logout</div>
            <?php
        }
        ?>
        <?php
        /*         * ************************* */
        /** if there is no active session, show register */
        if (!fnActiveUserSession()) {
            ?>
            <div class="link" data-go-to="section-register"><span class="fa fa-user-plus fa-1x"></span>Register</div>
            <?php
        }
        ?>
        <div class="link" data-go-to="section-properties"><span class="fa fa-building fa-1x"></span>Properties</div>
        <!-- <div class="link"><span class="fa fa-info-circle fa-1x"></span>About</div> -->
        <?php
        /*         * ************************* */
        /** check if the user has access to view & edit users */
        if (fnHasAccess(3)) {
            ?>
            <div class="link" data-go-to="section-users"><span class="fa fa-users fa-1x"></span>Users</div>
            <?php
        }
        ?>
    </div>

</div>