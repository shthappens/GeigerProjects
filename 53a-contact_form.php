<?php
    $youremail = 'sthompson@geiger.com';
    $subject = '*53A L3Harris Contact Us Form Submission';

// Required to prevent complaints from PHP when using mail() function
    date_default_timezone_set("America/New_York");

    // $raw_post_body = file_get_contents("php://input");
    if(isset($_POST['form'])){
        $obj = json_decode($_POST['form']);
        // prepare email body
        $body = array();
        $body[] = "L3Harris Contact Us Form Submission";
        $body[] = '';
        $body[] = "<b>First Name:</b> $obj->firstName";
        $body[] = "<b>Last Name:</b> $obj->lastName";
        $body[] = "<b>Email:</b> $obj->email";
        $body[] = "<b>Phone:</b> $obj->phone";
        $body[] = "<b>Preferred Contact Method:</b> $obj->preferContact";
        $body[] = "<b>Comment:</b> $obj->comment";
        // Use the default sender on Amazon EMS
        ini_set("sendmail_from", "cs@geiger.com");
        $headers = array();
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/html; charset=iso-8859-1";
        $headers[] = "From: cs@geiger.com";
        $headers[] = "X-Sender: cs@geiger.com<cs@geiger.com>";
        $headers[] = "X-Mailer: PHP " . phpversion();
        $headers[] = "X-Priority: 3";
        // dispatch message
	$from='cs@geiger.com';
        if(mail($youremail, $subject, implode('<br/>',$body), implode("\r\n",$headers),  "-f " . $from )) {
            echo 'success';
        } else {
            echo 'send_fail';
        }
     //some php operation
    } else {
         echo 'fail';
    }
?>
