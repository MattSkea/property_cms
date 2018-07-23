<?php
/*************************************************/
/*************GET PROPERTY SERVICE****************/
/*************************************************/
/*SETUP A STRING FOR THE PROPERTY FILE*/
$sFileName = '../data-users.txt';

/*EXTRACT THE STRING CONTENT OF THE FILE*/
$sajProperties = file_get_contents($sFileName);
/*DECODE THE STRING CONTENT THE WAS RETRIEVED FROM THE FILE*/
$ajProperties = json_decode($sajProperties);

/*CHECK IF THE FILE HAS AN ARRAY*/
if(!is_array($ajProperties)){
	/*PRINT OUT ERROR MESSAGE*/
	echo '{"status":"error", "id":"001", "message":"could not work with the database"}';
	/*EXIT PHP*/
	exit;
}

/*ON SUCCESS*/
/*CONVERT THE JSON INTO A STRING SO THAT PHP CAN ECHO OUT THE CONTENT*/
$sajProperties = json_encode( $ajProperties, JSON_UNESCAPED_UNICODE );
/*ECHO OUT THE CONTENT*/
echo $sajProperties;

?>