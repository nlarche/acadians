<?php

// Site Info
$site_name  = 'Hotec Hotel';
$site_email = 'kienpc81089@gmail.com';

if(isset($_POST['contact_email'])){

	$contact_name    = $_POST['contact_name'];
	$contact_phone   = $_POST['contact_phone'];
	$contact_email   = $_POST['contact_email'];
	$contact_subject = $_POST['contact_subject'];
	$contact_message = $_POST['contact_message'];
    $from_email =  $contact_email;
	$contact_name         = "Name: $contact_name <br />";
	$contact_email        = "Email:  $contact_email <br />";
	$contact_phone         = "Phone Number: $contact_phone <br />";
	$contact_subject       = "Subject: $contact_subject <br />";
	$contact_message       = "Message: $contact_message <br />";

	$to = $site_email;
	$subject = "You have a new email from ".$site_name;
	$header  = 'MIME-Version: 1.0' . "\r\n";
	$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$header .= 'From:'.$from_email. " \r\n";
	$message = "
		You have a new message! <br />
		$contact_name
		$contact_email
		$contact_phone
		$contact_subject
		$contact_message
	";

	// Send Mail
	if(@mail($to,$subject,$message,$header)) {
		$send = true;
	} else {
		$send = false;
	}

	if(isset($_POST['ajax'])){
		if($send)
			echo 'success';
		else
			echo 'error';
	}
}

