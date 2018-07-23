<?php
require_once "./services/api-functions.php";
?>
<html>
    <head>      
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">


        <title>RELOCATE ME</title>
        <!--FAVICON-->
        <link rel="shortcut icon" type="image/png" href="images/website-layout/favicon.ico"/>
        <!--IMPORTED FONTS-->
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
        <!--IMPORTED CSS-->
        <!-- IMPORTED SWEETALERT -->
        <link rel="stylesheet" type="text/css" href="dist/sweetalert.css">
        <!-- IMPORTED FONTAWESOME -->
        <link rel="stylesheet" type="text/css" href="dist/font-awesome-4.7.0/css/font-awesome.min.css">

        <!--CUSTOM CSS-->
        <link rel="stylesheet" type="text/css" href="css/menu.css">
        <link rel="stylesheet" type="text/css" href="css/overlay.css">
        <link rel="stylesheet" type="text/css" href="css/register.css">
        <link rel="stylesheet" type="text/css" href="css/user-create.css">
        <link rel="stylesheet" type="text/css" href="css/user-edit.css">
        <link rel="stylesheet" type="text/css" href="css/login.css">
        <link rel="stylesheet" type="text/css" href="css/users.css">
        <link rel="stylesheet" type="text/css" href="css/properties.css">
        <link rel="stylesheet" type="text/css" href="css/property-create.css">
        <link rel="stylesheet" type="text/css" href="css/property-view.css">
        <link rel="stylesheet" type="text/css" href="css/form.css">
        <link rel="stylesheet" type="text/css" href="css/default-layout.css"> <!--have to load default-layout last or properties table hover effect breaks -->

    </head>
    <body>
        <!--**************************************-->
        <!--************NAVIGATION****************-->
        <?php require_once "content/navigation.php"; ?>

        <!--**************************************-->
        <!--*************SECTIONS*****************-->
        <!--**************************************-->
        <!--*************REGISTER PAGE************-->
        <?php require_once "content/register.php"; ?>
        <!--**************************************-->
        <!--*************LOGIN PAGE***************-->
        <?php require_once "content/login.php"; ?>
        <!--*************USERS PAGE***************-->
        <?php require_once "content/users.php"; ?>
        <!--*************USERS PAGE***************-->
        <?php require_once "content/user-edit.php"; ?>
        <!--**************************************-->
        <!--**********PROPERTIES PAGE*************-->
        <?php require_once "content/properties.php"; ?>
        <!--**********ADD PROPERTY PAGE***********-->
        <?php require_once "content/property-create.php"; ?>
        <!--**********VIEW PROPERTY PAGE***********-->
        <?php require_once "content/property-view.php"; ?>
        <!--**************************************-->
        <!--**************OVERLAY*****************-->
        <?php require_once "content/overlay.php"; ?>



        <!-- IMPORTED JQUERY-->
        <script src="dist/jquery.min.1.12.4.js"></script>
        <!-- IMPORTED SWEETALERT -->
        <script src="dist/sweetalert.min.js"></script>
        <!-- IMPORT GOOGLE MAPS-->
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD57pU1rk9C0fyvWXy4JTuH-afYUzgUGg8"></script>
       
        <script src = "js/menu.js" ></script>
        <script src="js/login.js"></script>
        <script src="js/logout.js"></script>
        <script src="js/lock-system.js"></script>
        <script src="js/local-storage.js"></script>
        <script src="js/dynamic-functions.js"></script>
        <script src="js/dynamic-navigation.js"></script>
        <script src="js/user-create.js"></script>
        <script src="js/user-read.js"></script>
        <script src="js/user-update.js"></script>
        <script src="js/user-delete.js"></script>
        <script src="js/property-create.js"></script>
        <script src="js/property-read.js"></script>
        <script src="js/property-update.js"></script>
        <script src="js/property-delete.js"></script>
        <script src="js/properties-read.js"></script>
        <script src="js/property-map.js"></script>
        <script src="js/property-owner.js"></script>
        <script src="js/validation-login.js"></script>
        <script src="js/validation-register.js"></script>
        <script src="js/validation-properties.js"></script>
        <script src="js/validate.js"></script>
        <script src="js/image-upload.js"></script>
        <script src="js/notifications.js"></script>
        
    </body>
</html>
