<?php
    $emailto = 'sthompson@geiger.com';
    $subject = '*53A L3Harris Custom Orders Form Submission';

// Required to prevent complaints from PHP when using mail() function
    date_default_timezone_set("America/New_York");

    // $raw_post_body = file_get_contents("php://input");
    if(isset($_POST['form'])){
        $obj = json_decode($_POST['form']);
        if($obj->location == 'Alaska'|| $obj->location == 'Alabama'|| $obj->location == 'Arixona'|| $obj->location == 'California'|| $obj->location == 'Florida'|| $obj->location == 'Georgia'|| $obj->location == 'Louisiana'|| $obj->location == 'North Carolina'|| $obj->location == 'Nevada'|| $obj->location == 'Oklahoma'|| $obj->location == 'Oregon'|| $obj->location == 'South Carolina'|| $obj->location == 'Texas'||'Utah') {
            $emailto = 'cpweb@geiger.com'
        } else (){
            $emailto = 'sthompson@geiger.com')
        }

        // switch ($obj->location) {
        //     case: 'Alaska'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Alabama'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Arizona'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'California'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Florida'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Georgia'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Louisiana'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'North Carolina'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Nevada'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Oklahoma'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Oregon'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'South Carolina'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Texas'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     case: 'Utah'
        //     $emailto = 'cpweb@geiger.com'
        //     break;
        //     default:
        //     $emailto = 'sthompson@geiger.com'
        // }

        // prepare email body
        $body = array();
        $body[] = "L3Harris Custom Orders Form Submission";
        $body[] = '';
        $body[] = "<b>First Name:</b> $obj->firstName";
        $body[] = "<b>Last Name:</b> $obj->lastName";
        $body[] = "<b>Location:</b> $obj->location";
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
        if(mail($emailto, $subject, implode('<br/>',$body), implode("\r\n",$headers),  "-f " . $from )) {
            echo 'success';
        } else {
            echo 'send_fail';
        }
     //some php operation
    } else {
         echo 'fail';
    }
?>

