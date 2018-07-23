<?php

session_start();
// session_destroy();
$iNumberOfSessionItems = count( $_SESSION );
echo '{"iNumberOfSessionItems":'.$iNumberOfSessionItems.'}, '. '{"session": "' . json_encode($_SESSION) . '"}';
// Finally, destroy the session.
// session_destroy();

/*http://localhost/WebDev/Week.9.2.php.api.sessions.google-maps/2.4.session.logged-user.cross-browser.desktop-notifcations.setInterval/api-check-sessions.php*/
?>