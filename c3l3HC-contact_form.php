<?php
    $youremail = 'sthompson@geiger.com';
    $subject = 'Contact Us Form';
// Required to prevent complaints from PHP when using mail() function
    date_default_timezone_set("America/New_York");

    // $raw_post_body = file_get_contents("php://input");
    if(isset($_POST['form'])){
        $obj = json_decode($_POST['form']);
    
        // prepare email body
        $body = array();
        $body[] = "Contact Us Form:";
        $body[] = '';
        $body[] = "<b>comment:</b> $obj->comment";
    
        // Use the default sender on Amazon EMS
        ini_set("sendmail_from", "sthompson@geiger.com");
        $headers = array();
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/html; charset=iso-8859-1";
        $headers[] = "From: cs@geiger.com";
        $headers[] = "X-Sender: sthompson@geiger.com<sthompson@geiger.com>";
        $headers[] = "X-Mailer: PHP " . phpversion();
        $headers[] = "X-Priority: 3";
    
        // dispatch message
        if(mail($youremail, $subject, implode('<br/>',$body), implode("\r\n",$headers) )) {
            echo 'success';
        } else {
            echo 'send_fail';
        }
    
     //some php operation
    } else {
         echo 'fail';
    }
?>






